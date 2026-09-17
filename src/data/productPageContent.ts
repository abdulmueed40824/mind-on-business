export interface ProductPageContent {
  tagline: string;
  longDescription: string;
  highlights: { title: string; body: string }[];
  specs: { label: string; value: string }[];
}

export const PRODUCT_PAGE_CONTENT: Record<string, ProductPageContent> = {
  'chivalry-not-dead': {
    tagline: 'V-Neck statement tee — character never goes out of style.',
    longDescription:
      'Chivalry Not Dead is a Mind Onn Business v-neck built for everyday rotation and loud-and-clear messaging. Soft hand-feel, clean neckline, and a fit that sits right whether you are on the block or in the boardroom. Pick your color, lock your size, and keep your mind onn business.',
    highlights: [
      {
        title: 'V-Neck cut',
        body: 'Classic v-neck silhouette — easy to layer under hoodies or wear solo.',
      },
      {
        title: 'Statement graphic',
        body: 'Bold front print that reps the mindset without shouting.',
      },
      {
        title: 'Color range',
        body: 'Five colorways from Yellow to Black — match your mood and your fit.',
      },
    ],
    specs: [
      { label: 'Style', value: 'V-Neck tee' },
      { label: 'Brand', value: 'Mind Onn Business' },
      { label: 'Care', value: 'Machine wash cold, inside out' },
      { label: 'Shipping', value: 'Calculated at checkout' },
    ],
  },
};

export const getProductPageContent = (slug: string): ProductPageContent | undefined =>
  PRODUCT_PAGE_CONTENT[slug];
