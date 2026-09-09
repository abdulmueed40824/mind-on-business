"""Generate product data and copy images to public/assets."""
import json
import os
import re
import shutil
from pathlib import Path

ROOT = Path(r"D:\GitHub\mind-on-business")
DRIVE = ROOT / "drive-download"
ASSETS = ROOT / "public" / "assets" / "products"
OUT_TS = ROOT / "src" / "data" / "products.ts"

NAME_TO_FOLDER = {
    "the art of": ("01 – T-Shirts", "The Art Of"),
    "believer": ("01 – T-Shirts", "Believer"),
    "bossing up": ("01 – T-Shirts", "Bossing Up"),
    "alive": ("01 – T-Shirts", "Alive"),
    "chivarly not dead": ("01 – T-Shirts", "Chivalry  not  dead"),
    "chivalry not dead": ("01 – T-Shirts", "Chivalry  not  dead"),
    "its not a game": ("01 – T-Shirts", "It\u2019s not a game"),
    "it's not a game": ("01 – T-Shirts", "It\u2019s not a game"),
    "legit": ("01 – T-Shirts", "Legit"),
    "plan ahead": ("01 – T-Shirts", "Plan ahead"),
    "to the top": ("01 – T-Shirts", "To the top"),
    "bought": ("02 – Sweatshirts & Hoodies", "Bought"),
    "legitimately suited": ("02 – Sweatshirts & Hoodies", "Legitimately suited"),
    "long term believer": ("02 – Sweatshirts & Hoodies", "Long term believer"),
    "on it": ("02 – Sweatshirts & Hoodies", "On it"),
    "plugged in": ("02 – Sweatshirts & Hoodies", "Plugged in"),
    "suit up": ("02 – Sweatshirts & Hoodies", "Suit up"),
    "the piece": ("02 – Sweatshirts & Hoodies", "The piece"),
    "true to it": ("02 – Sweatshirts & Hoodies", "True to it"),
}

JACKET_IMAGE_MAP = {
    "royal blue": "Royalty.jpg",
    "red": "Gentleman.jpg",
    "yellow": "Gods love.jpg",
    "green": "Long walk.jpg",
    "navy blue": "True blue.jpg",
    "royal blue brewer": "Brewer blue.jpg",
    "tan": "Sand storm.jpg",
    "washed gray": "Concrete.jpg",
    "black": "Holy Spirit.jpg",
}

DISPLAY_NAMES = {
    "the art of": "The Art Of",
    "believer": "Believer",
    "bossing up": "Bossing Up",
    "alive": "Alive",
    "chivarly not dead": "Chivalry Not Dead",
    "chivalry not dead": "Chivalry Not Dead",
    "its not a game": "It's Not A Game",
    "it's not a game": "It's Not A Game",
    "legit": "Legit",
    "plan ahead": "Plan Ahead",
    "to the top": "To The Top",
    "bought": "Bought",
    "legitimately suited": "Legitimately Suited",
    "long term believer": "Long Term Believer",
    "on it": "On It",
    "plugged in": "Plugged In",
    "suit up": "Suit Up",
    "the piece": "The Piece",
    "true to it": "True To It",
    "bomb squad": "Bomb Squad",
}

CATEGORY_MAP = {
    "T-Shirt": ("t-shirts", "T-Shirts"),
    "Sweatshirts & Hoodies": ("sweatshirts-hoodies", "Sweatshirts & Hoodies"),
    "Jackets": ("jackets", "Jackets"),
}

COLOR_HEX = {
    "yellow": "#F5D547",
    "white": "#F5F5F5",
    "mint green": "#98D4BB",
    "tan": "#C4A77D",
    "royal blue": "#1E3A8A",
    "black": "#1A1A1A",
    "red": "#DC2626",
    "sky blue": "#7DD3FC",
    "light gray": "#D1D5DB",
    "army green": "#4B5320",
    "green": "#16A34A",
    "navy blue": "#1E3A5F",
    "storm gray": "#6B7280",
    "marron": "#7F1D1D",
    "fatigue": "#8B8B3D",
    "orange": "#EA580C",
    "hot pink": "#EC4899",
    "purple": "#7C3AED",
    "royal purple": "#6B21A8",
    "washed gray": "#9CA3AF",
}


def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    return text.strip("-")


def parse_sizes(raw: str) -> list[str]:
    if not raw or str(raw).lower() in ("nan", "none", ""):
        return ["S", "M", "L", "XL", "XXL"]
    if "out of stock" in str(raw).lower():
        return []
    if "any size" in str(raw).lower():
        return ["S", "M", "L", "XL", "XXL"]
    sizes = []
    for part in re.split(r"[,.\s]+", str(raw)):
        s = part.strip().upper()
        if s in {"S", "M", "L", "XL", "XXL", "XXXL", "2XL", "3XL", "5XL"}:
            if s == "2XL":
                s = "XXL"
            if s == "XXXL":
                s = "3XL"
            if s not in sizes:
                sizes.append(s)
    return sizes or ["S", "M", "L", "XL", "XXL"]


def copy_product_images(slug: str, folder_path: Path) -> list[str]:
    if not folder_path.exists():
        return []
    images = sorted(folder_path.glob("*.jpg"), key=lambda p: p.stat().st_size, reverse=True)
    dest_dir = ASSETS / slug
    dest_dir.mkdir(parents=True, exist_ok=True)
    paths = []
    for i, src in enumerate(images):
        dest_name = f"{i + 1}.jpg" if i else "primary.jpg"
        dest = dest_dir / dest_name
        if not dest.exists() or dest.stat().st_size != src.stat().st_size:
            shutil.copy2(src, dest)
        paths.append(f"/assets/products/{slug}/{dest_name}")
    return paths


def copy_jacket_images(slug: str) -> dict[str, list[str]]:
    jacket_dir = DRIVE / "03 – Jackets" / "Bomb squad"
    result = {}
    if not jacket_dir.exists():
        return result
    dest_base = ASSETS / slug
    dest_base.mkdir(parents=True, exist_ok=True)
    for jpg in jacket_dir.glob("*.jpg"):
        color_key = slugify(jpg.stem)
        dest = dest_base / f"{color_key}.jpg"
        if not dest.exists():
            shutil.copy2(jpg, dest)
        result[color_key] = [f"/assets/products/{slug}/{color_key}.jpg"]
    return result


def load_records():
    with open(DRIVE / "products-raw.json") as f:
        return json.load(f)


def normalize_product_key(name: str) -> str:
    name = re.sub(r"^bomber squad\s*-?\s*", "bomb squad ", name, flags=re.I).strip()
    name = re.sub(r"\s+", " ", name).strip().lower()
    for suffix in ["- gentlemen", "- god's love", "- long walk", "- true blue", "- brewer blue", "- sand storm", "- concrete", "- holy spirit"]:
        if suffix in name:
            return "bomb squad"
    if name.startswith("bomb squad"):
        return "bomb squad"
    return name


def get_bomb_squad_image_key(rec_name: str, color: str) -> str:
    """Map Bomber Squad product name to jacket image slug."""
    name = rec_name.lower().replace("bomber squad", "").strip(" -")
    name_map = {
        "": "royalty",
        "gentlemen": "gentleman",
        "god's love": "gods-love",
        "long walk": "long-walk",
        "true blue": "true-blue",
        "brewer blue": "brewer-blue",
        "sand storm": "sand-storm",
        "concrete": "concrete",
        "holy spirit": "holy-spirit",
    }
    if name in name_map:
        return name_map[name]
    color_map = {
        "royal blue": "royalty",
        "red": "gentleman",
        "yellow": "gods-love",
        "green": "long-walk",
        "navy blue": "true-blue",
        "tan": "sand-storm",
        "washed gray": "concrete",
        "black": "holy-spirit",
    }
    return color_map.get(color.lower().strip(), "royalty")


def get_bomb_squad_variant_name(rec_name: str, color: str) -> str:
    """Display name for bomb squad color/style variant."""
    name = rec_name.replace("Bomber Squad", "").replace("Bomber Squad -", "").strip(" -")
    if name:
        return name
    return color or "Royal Blue"


def build_products():
    records = load_records()
    grouped: dict[str, dict] = {}

    jacket_images = copy_jacket_images("bomb-squad")

    for rec in records:
        key = normalize_product_key(rec["name"])
        display = DISPLAY_NAMES.get(key, rec["name"].strip())
        if key == "bomb squad":
            variant_label = get_bomb_squad_variant_name(rec["name"], rec.get("color") or "")
            display = "Bomb Squad"
        else:
            variant_label = rec.get("color") or ""

        cat_raw = rec["category"]
        if "bomber squad" in rec["name"].lower() or key == "bomb squad":
            cat_raw = "Jackets"
        cat_slug, cat_label = CATEGORY_MAP.get(cat_raw, ("t-shirts", "T-Shirts"))

        if key not in grouped:
            slug = slugify(display)
            folder = NAME_TO_FOLDER.get(key)
            images = copy_product_images(slug, DRIVE / folder[0] / folder[1]) if folder else []
            grouped[key] = {
                "id": slug,
                "slug": slug,
                "name": display,
                "category": cat_slug,
                "categoryLabel": cat_label,
                "price": rec["price"],
                "description": "",
                "colors": [],
                "sizes": set(),
                "featuredTags": set(),
                "isJoggingSuit": False,
                "outOfStock": False,
            }

        product = grouped[key]
        product["price"] = max(product["price"], rec["price"]) if product["price"] else rec["price"]

        desc = rec.get("description") or ""
        if desc and desc.lower() not in ("nan", "client description") and len(desc) > len(product["description"]):
            product["description"] = desc
        elif not product["description"]:
            if "jogging suit" in desc.lower():
                product["description"] = "Premium jogging suit set — heavyweight comfort built for the grind."
                product["isJoggingSuit"] = True
            elif "v-neck" in desc.lower():
                product["description"] = "Classic V-neck tee with bold streetwear energy."
            elif "customizable" in desc.lower():
                product["description"] = "Customizable varsity jacket — premium construction with Mind Onn Business embroidery."
            elif cat_slug == "t-shirts":
                product["description"] = "Premium graphic tee — heavyweight cotton with bold Mind Onn Business design."
            elif cat_slug == "sweatshirts-hoodies":
                product["description"] = "Heavyweight sweatshirt — built for comfort and street-level style."
            elif cat_slug == "jackets":
                product["description"] = "Premium varsity jacket with embroidered Mind Onn Business branding."

        sizes_raw = rec.get("sizes", "")
        if isinstance(sizes_raw, list):
            sizes = list(sizes_raw)
        else:
            sizes = parse_sizes(str(sizes_raw))
        if not sizes:
            if "out of stock" in str(sizes_raw).lower():
                product["outOfStock"] = True
            else:
                sizes = ["S", "M", "L", "XL", "XXL"]

        for s in sizes:
            product["sizes"].add(s)

        color_name = (variant_label or rec.get("color") or "Default").strip()
        if not color_name or color_name.lower() == "nan":
            color_name = "Default"

        color_images = []
        variant_price = rec["price"]
        if key == "bomb squad":
            img_key = get_bomb_squad_image_key(rec["name"], color_name)
            if img_key in jacket_images:
                color_images = jacket_images[img_key]
            if not product.get("_jacket_gallery"):
                product["_jacket_gallery"] = []
                for key_name in ["royalty", "gentleman", "gods-love", "long-walk", "true-blue", "brewer-blue", "sand-storm", "concrete", "holy-spirit"]:
                    if key_name in jacket_images:
                        for img in jacket_images[key_name]:
                            if img not in product["_jacket_gallery"]:
                                product["_jacket_gallery"].append(img)
        else:
            folder = NAME_TO_FOLDER.get(key)
            if folder:
                all_imgs = copy_product_images(product["slug"], DRIVE / folder[0] / folder[1])
                color_images = all_imgs if all_imgs else []

        existing = next((c for c in product["colors"] if c["name"].lower() == color_name.lower()), None)
        if existing:
            existing["sizes"] = sorted(set(existing.get("sizes", []) + sizes), key=lambda x: ["S","M","L","XL","XXL","3XL","5XL"].index(x) if x in ["S","M","L","XL","XXL","3XL","5XL"] else 99)
            if color_images:
                existing["images"] = color_images
            if variant_price and variant_price != product["price"]:
                existing["price"] = variant_price
        else:
            variant_entry = {
                "name": color_name,
                "hex": COLOR_HEX.get((rec.get("color") or color_name).lower(), "#888888"),
                "images": color_images or (product["colors"][0]["images"] if product["colors"] else []),
                "sizes": sizes,
            }
            if variant_price:
                variant_entry["price"] = variant_price
            product["colors"].append(variant_entry)

        if rec.get("featured"):
            product["featuredTags"].add("best-seller")
        if product.get("isJoggingSuit"):
            product["featuredTags"].add("featured-apparel-set")
        if key == "bomb squad":
            product["featuredTags"].add("limited-edition")
        if key in {"its not a game", "plugged in", "bought"}:
            product["featuredTags"].add("new-arrival")

    products = []
    for p in grouped.values():
        p["sizes"] = sorted(p["sizes"], key=lambda x: ["S","M","L","XL","XXL","3XL","5XL"].index(x) if x in ["S","M","L","XXL","3XL","5XL"] else 99)
        p["featuredTags"] = sorted(p["featuredTags"])
        variant_prices = [c.get("price", p["price"]) for c in p["colors"]]
        if variant_prices:
            p["price"] = min(variant_prices)
        if not p["colors"]:
            continue
        # ensure each color has images
        primary_pool = max((c["images"] for c in p["colors"]), key=len, default=[])
        for c in p["colors"]:
            if not c["images"]:
                c["images"] = primary_pool
        # product-level gallery = all unique images across colors
        all_images: list[str] = []
        if p.get("_jacket_gallery"):
            all_images = p["_jacket_gallery"]
        for c in p["colors"]:
            for img in c["images"]:
                if img not in all_images:
                    all_images.append(img)
        p["images"] = all_images
        p["primaryImage"] = all_images[0] if all_images else ""
        if "_jacket_gallery" in p:
            del p["_jacket_gallery"]
        del p["isJoggingSuit"]
        products.append(p)

    return products


def emit_typescript(products: list) -> None:
    OUT_TS.parent.mkdir(parents=True, exist_ok=True)
    lines = [
        "// Auto-generated from client Product INFO sheet and Google Drive assets",
        "export type ProductCategory = 't-shirts' | 'sweatshirts-hoodies' | 'jackets' | 'accessories';",
        "export type FeaturedTag = 'featured-apparel-set' | 'featured-look' | 'new-arrival' | 'best-seller' | 'limited-edition';",
        "",
        "export interface ColorVariant {",
        "  name: string;",
        "  hex: string;",
        "  images: string[];",
        "  sizes: string[];",
        "  price?: number;",
        "}",
        "",
        "export interface Product {",
        "  id: string;",
        "  slug: string;",
        "  name: string;",
        "  category: ProductCategory;",
        "  categoryLabel: string;",
        "  price: number;",
        "  description: string;",
        "  primaryImage: string;",
        "  images: string[];",
        "  colors: ColorVariant[];",
        "  sizes: string[];",
        "  featuredTags: FeaturedTag[];",
        "  outOfStock?: boolean;",
        "}",
        "",
        "export const SHOP_CATEGORIES = [",
        "  { slug: 't-shirts' as const, label: 'T-Shirts' },",
        "  { slug: 'sweatshirts-hoodies' as const, label: 'Sweatshirts & Hoodies' },",
        "  { slug: 'jackets' as const, label: 'Jackets' },",
        "  { slug: 'accessories' as const, label: 'Accessories — Coming Soon', comingSoon: true },",
        "] as const;",
        "",
        "export const FEATURED_SECTIONS = [",
        "  { tag: 'featured-apparel-set' as const, title: 'Featured Apparel Sets', subtitle: 'Complete looks built to move' },",
        "  { tag: 'featured-look' as const, title: 'Featured Looks', subtitle: 'Street-ready style inspiration' },",
        "  { tag: 'new-arrival' as const, title: 'New Arrivals', subtitle: 'Fresh from the latest drop' },",
        "  { tag: 'best-seller' as const, title: 'Best Sellers', subtitle: 'Community favorites' },",
        "  { tag: 'limited-edition' as const, title: 'Limited Edition', subtitle: 'Exclusive pieces — when they are gone, they are gone' },",
        "] as const;",
        "",
        f"export const products: Product[] = {json.dumps(products, indent=2)};",
        "",
        "export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);",
        "export const getProductsByCategory = (category: ProductCategory) => products.filter((p) => p.category === category);",
        "export const getProductsByTag = (tag: FeaturedTag) => products.filter((p) => p.featuredTags.includes(tag));",
        "export const formatPrice = (price: number) => `$${price}`;",
        "export const getVariantPrice = (product: Product, colorIndex: number) => product.colors[colorIndex]?.price ?? product.price;",
        "export const getDisplayPrice = (product: Product) => {",
        "  const prices = product.colors.map((c) => c.price ?? product.price);",
        "  const min = Math.min(...prices);",
        "  const max = Math.max(...prices);",
        "  return min === max ? formatPrice(min) : `From ${formatPrice(min)}`;",
        "};",
    ]
    OUT_TS.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {len(products)} products to {OUT_TS}")


if __name__ == "__main__":
    if ASSETS.exists():
        shutil.rmtree(ASSETS)
    ASSETS.mkdir(parents=True)
    products = build_products()
    emit_typescript(products)
    print(json.dumps([{"name": p["name"], "colors": len(p["colors"]), "images": len(p["images"])} for p in products], indent=2))
