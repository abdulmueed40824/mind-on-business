import type { Product } from '@/data/products';

/** Dedupe image URLs while preserving order. */
export function uniqueImages(urls: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const url of urls) {
    if (url && !seen.has(url)) {
      seen.add(url);
      out.push(url);
    }
  }
  return out;
}

function gallerySignature(images: string[]): string {
  return uniqueImages(images).join('\0');
}

/** True when every color variant lists the exact same image set (common in generated catalog data). */
export function colorsShareIdenticalGalleries(product: Product): boolean {
  if (product.colors.length <= 1) return true;
  const baseline = gallerySignature(product.colors[0]?.images ?? []);
  return product.colors.every((c) => gallerySignature(c.images ?? []) === baseline);
}

/** True when each color has its own image list (e.g. On It, Bomb Squad). */
export function colorGalleriesAreDistinct(product: Product): boolean {
  if (product.colors.length <= 1) return true;
  const sigs = new Set(product.colors.map((c) => gallerySignature(c.images ?? [])));
  return sigs.size === product.colors.length;
}

/**
 * Gallery for the product detail view for a given color index.
 *
 * 1. Distinct per-color images in data → use that color's images.
 * 2. Shared gallery + fewer images than colors → same shoot / angles for all colors.
 * 3. Shared gallery + at least as many images as colors → one hero image per color (by index).
 */
export function getColorGallery(product: Product, colorIndex: number): string[] {
  const pool = uniqueImages(product.images ?? []);
  const color = product.colors[colorIndex];
  if (!color) return pool;

  const variantImages = uniqueImages(color.images ?? []);

  if (variantImages.length === 0) {
    return pool;
  }

  if (!colorsShareIdenticalGalleries(product)) {
    return variantImages;
  }

  const colorCount = product.colors.length;
  const imageCount = pool.length;

  if (colorCount > 1 && imageCount >= colorCount) {
    const hero = pool[colorIndex] ?? pool[0];
    if (imageCount === colorCount) {
      return hero ? [hero] : pool;
    }
    // More images than colors: hero for this color; keep angle shots that follow the color block
    const perColor = Math.floor(imageCount / colorCount);
    if (perColor > 1) {
      const start = colorIndex * perColor;
      return pool.slice(start, start + perColor);
    }
    return hero ? [hero] : pool;
  }

  return variantImages;
}

export function getColorPreviewImage(product: Product, colorIndex: number): string {
  const gallery = getColorGallery(product, colorIndex);
  return gallery[0] ?? product.primaryImage;
}

/** Shown when photos are shared angles, not separate colorway shoots. */
export function usesSharedAngleGallery(product: Product): boolean {
  if (!colorsShareIdenticalGalleries(product)) return false;
  const pool = uniqueImages(product.images ?? []);
  return product.colors.length > 1 && pool.length < product.colors.length;
}
