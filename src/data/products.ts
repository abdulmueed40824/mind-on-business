// Auto-generated from client Product INFO sheet and Google Drive assets
export type ProductCategory = 't-shirts' | 'sweatshirts-hoodies' | 'jackets' | 'accessories';
export type FeaturedTag = 'featured-apparel-set' | 'featured-look' | 'new-arrival' | 'best-seller' | 'limited-edition';

export interface ColorVariant {
  name: string;
  hex: string;
  images: string[];
  sizes: string[];
  price?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  description: string;
  primaryImage: string;
  images: string[];
  colors: ColorVariant[];
  sizes: string[];
  featuredTags: FeaturedTag[];
  outOfStock?: boolean;
}

export const SHOP_CATEGORIES = [
  { slug: 't-shirts' as const, label: 'T-Shirts' },
  { slug: 'sweatshirts-hoodies' as const, label: 'Sweatshirts & Hoodies' },
  { slug: 'jackets' as const, label: 'Jackets' },
  { slug: 'accessories' as const, label: 'Accessories — Coming Soon', comingSoon: true },
] as const;

export const FEATURED_SECTIONS = [
  { tag: 'featured-apparel-set' as const, title: 'Featured Apparel Sets', subtitle: 'Complete looks built to move' },
  { tag: 'featured-look' as const, title: 'Featured Looks', subtitle: 'Street-ready style inspiration' },
  { tag: 'new-arrival' as const, title: 'New Arrivals', subtitle: 'Fresh from the latest drop' },
  { tag: 'best-seller' as const, title: 'Best Sellers', subtitle: 'Community favorites' },
  { tag: 'limited-edition' as const, title: 'Limited Edition', subtitle: 'Exclusive pieces — when they are gone, they are gone' },
] as const;

export const products: Product[] = [
  {
    "id": "the-art-of",
    "slug": "the-art-of",
    "name": "The Art Of",
    "category": "t-shirts",
    "categoryLabel": "T-Shirts",
    "price": 30,
    "description": "Premium graphic tee \u2014 heavyweight cotton with bold Mind Onn Business design.",
    "colors": [
      {
        "name": "Yellow",
        "hex": "#F5D547",
        "images": [
          "/assets/products/the-art-of/primary.jpg",
          "/assets/products/the-art-of/2.jpg",
          "/assets/products/the-art-of/3.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "White",
        "hex": "#F5F5F5",
        "images": [
          "/assets/products/the-art-of/primary.jpg",
          "/assets/products/the-art-of/2.jpg",
          "/assets/products/the-art-of/3.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Mint Green",
        "hex": "#98D4BB",
        "images": [
          "/assets/products/the-art-of/primary.jpg",
          "/assets/products/the-art-of/2.jpg",
          "/assets/products/the-art-of/3.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Tan",
        "hex": "#C4A77D",
        "images": [
          "/assets/products/the-art-of/primary.jpg",
          "/assets/products/the-art-of/2.jpg",
          "/assets/products/the-art-of/3.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Royal Blue",
        "hex": "#1E3A8A",
        "images": [
          "/assets/products/the-art-of/primary.jpg",
          "/assets/products/the-art-of/2.jpg",
          "/assets/products/the-art-of/3.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XXL"
        ],
        "price": 30
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XXL",
      "XL"
    ],
    "featuredTags": [
      "best-seller"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/the-art-of/primary.jpg",
      "/assets/products/the-art-of/2.jpg",
      "/assets/products/the-art-of/3.jpg"
    ],
    "primaryImage": "/assets/products/the-art-of/primary.jpg"
  },
  {
    "id": "believer",
    "slug": "believer",
    "name": "Believer",
    "category": "t-shirts",
    "categoryLabel": "T-Shirts",
    "price": 30,
    "description": "Premium graphic tee \u2014 heavyweight cotton with bold Mind Onn Business design.",
    "colors": [
      {
        "name": "Black",
        "hex": "#1A1A1A",
        "images": [
          "/assets/products/believer/primary.jpg",
          "/assets/products/believer/2.jpg",
          "/assets/products/believer/3.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Red",
        "hex": "#DC2626",
        "images": [
          "/assets/products/believer/primary.jpg",
          "/assets/products/believer/2.jpg",
          "/assets/products/believer/3.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "White",
        "hex": "#F5F5F5",
        "images": [
          "/assets/products/believer/primary.jpg",
          "/assets/products/believer/2.jpg",
          "/assets/products/believer/3.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XXL",
      "XL"
    ],
    "featuredTags": [
      "best-seller"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/believer/primary.jpg",
      "/assets/products/believer/2.jpg",
      "/assets/products/believer/3.jpg"
    ],
    "primaryImage": "/assets/products/believer/primary.jpg"
  },
  {
    "id": "bossing-up",
    "slug": "bossing-up",
    "name": "Bossing Up",
    "category": "t-shirts",
    "categoryLabel": "T-Shirts",
    "price": 30,
    "description": "Premium graphic tee \u2014 heavyweight cotton with bold Mind Onn Business design.",
    "colors": [
      {
        "name": "Sky Blue",
        "hex": "#7DD3FC",
        "images": [
          "/assets/products/bossing-up/primary.jpg",
          "/assets/products/bossing-up/2.jpg",
          "/assets/products/bossing-up/3.jpg",
          "/assets/products/bossing-up/4.jpg",
          "/assets/products/bossing-up/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Mint Green",
        "hex": "#98D4BB",
        "images": [
          "/assets/products/bossing-up/primary.jpg",
          "/assets/products/bossing-up/2.jpg",
          "/assets/products/bossing-up/3.jpg",
          "/assets/products/bossing-up/4.jpg",
          "/assets/products/bossing-up/5.jpg"
        ],
        "sizes": [
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Black",
        "hex": "#1A1A1A",
        "images": [
          "/assets/products/bossing-up/primary.jpg",
          "/assets/products/bossing-up/2.jpg",
          "/assets/products/bossing-up/3.jpg",
          "/assets/products/bossing-up/4.jpg",
          "/assets/products/bossing-up/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Light Gray",
        "hex": "#D1D5DB",
        "images": [
          "/assets/products/bossing-up/primary.jpg",
          "/assets/products/bossing-up/2.jpg",
          "/assets/products/bossing-up/3.jpg",
          "/assets/products/bossing-up/4.jpg",
          "/assets/products/bossing-up/5.jpg"
        ],
        "sizes": [
          "S",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Royal Blue",
        "hex": "#1E3A8A",
        "images": [
          "/assets/products/bossing-up/primary.jpg",
          "/assets/products/bossing-up/2.jpg",
          "/assets/products/bossing-up/3.jpg",
          "/assets/products/bossing-up/4.jpg",
          "/assets/products/bossing-up/5.jpg"
        ],
        "sizes": [
          "M"
        ],
        "price": 30
      },
      {
        "name": "Army Green",
        "hex": "#4B5320",
        "images": [
          "/assets/products/bossing-up/primary.jpg",
          "/assets/products/bossing-up/2.jpg",
          "/assets/products/bossing-up/3.jpg",
          "/assets/products/bossing-up/4.jpg",
          "/assets/products/bossing-up/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XXL",
      "XL"
    ],
    "featuredTags": [
      "best-seller"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/bossing-up/primary.jpg",
      "/assets/products/bossing-up/2.jpg",
      "/assets/products/bossing-up/3.jpg",
      "/assets/products/bossing-up/4.jpg",
      "/assets/products/bossing-up/5.jpg"
    ],
    "primaryImage": "/assets/products/bossing-up/primary.jpg"
  },
  {
    "id": "alive",
    "slug": "alive",
    "name": "Alive",
    "category": "t-shirts",
    "categoryLabel": "T-Shirts",
    "price": 30,
    "description": "Premium graphic tee \u2014 heavyweight cotton with bold Mind Onn Business design.",
    "colors": [
      {
        "name": "White",
        "hex": "#F5F5F5",
        "images": [
          "/assets/products/alive/primary.jpg",
          "/assets/products/alive/2.jpg",
          "/assets/products/alive/3.jpg",
          "/assets/products/alive/4.jpg",
          "/assets/products/alive/5.jpg",
          "/assets/products/alive/6.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Black",
        "hex": "#1A1A1A",
        "images": [
          "/assets/products/alive/primary.jpg",
          "/assets/products/alive/2.jpg",
          "/assets/products/alive/3.jpg",
          "/assets/products/alive/4.jpg",
          "/assets/products/alive/5.jpg",
          "/assets/products/alive/6.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Light Gray",
        "hex": "#D1D5DB",
        "images": [
          "/assets/products/alive/primary.jpg",
          "/assets/products/alive/2.jpg",
          "/assets/products/alive/3.jpg",
          "/assets/products/alive/4.jpg",
          "/assets/products/alive/5.jpg",
          "/assets/products/alive/6.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "price": 30
      },
      {
        "name": "Green",
        "hex": "#16A34A",
        "images": [
          "/assets/products/alive/primary.jpg",
          "/assets/products/alive/2.jpg",
          "/assets/products/alive/3.jpg",
          "/assets/products/alive/4.jpg",
          "/assets/products/alive/5.jpg",
          "/assets/products/alive/6.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Royal Blue",
        "hex": "#1E3A8A",
        "images": [
          "/assets/products/alive/primary.jpg",
          "/assets/products/alive/2.jpg",
          "/assets/products/alive/3.jpg",
          "/assets/products/alive/4.jpg",
          "/assets/products/alive/5.jpg",
          "/assets/products/alive/6.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Red",
        "hex": "#DC2626",
        "images": [
          "/assets/products/alive/primary.jpg",
          "/assets/products/alive/2.jpg",
          "/assets/products/alive/3.jpg",
          "/assets/products/alive/4.jpg",
          "/assets/products/alive/5.jpg",
          "/assets/products/alive/6.jpg"
        ],
        "sizes": [
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XXL",
      "XL"
    ],
    "featuredTags": [
      "best-seller"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/alive/primary.jpg",
      "/assets/products/alive/2.jpg",
      "/assets/products/alive/3.jpg",
      "/assets/products/alive/4.jpg",
      "/assets/products/alive/5.jpg",
      "/assets/products/alive/6.jpg"
    ],
    "primaryImage": "/assets/products/alive/primary.jpg"
  },
  {
    "id": "chivalry-not-dead",
    "slug": "chivalry-not-dead",
    "name": "Chivalry Not Dead",
    "category": "t-shirts",
    "categoryLabel": "T-Shirts",
    "price": 30,
    "description": "V-Neck",
    "colors": [
      {
        "name": "Yellow",
        "hex": "#F5D547",
        "images": [
          "/assets/products/chivalry-not-dead/primary.jpg",
          "/assets/products/chivalry-not-dead/2.jpg",
          "/assets/products/chivalry-not-dead/3.jpg",
          "/assets/products/chivalry-not-dead/4.jpg",
          "/assets/products/chivalry-not-dead/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Red",
        "hex": "#DC2626",
        "images": [
          "/assets/products/chivalry-not-dead/primary.jpg",
          "/assets/products/chivalry-not-dead/2.jpg",
          "/assets/products/chivalry-not-dead/3.jpg",
          "/assets/products/chivalry-not-dead/4.jpg",
          "/assets/products/chivalry-not-dead/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Navy Blue",
        "hex": "#1E3A5F",
        "images": [
          "/assets/products/chivalry-not-dead/primary.jpg",
          "/assets/products/chivalry-not-dead/2.jpg",
          "/assets/products/chivalry-not-dead/3.jpg",
          "/assets/products/chivalry-not-dead/4.jpg",
          "/assets/products/chivalry-not-dead/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Storm Gray",
        "hex": "#6B7280",
        "images": [
          "/assets/products/chivalry-not-dead/primary.jpg",
          "/assets/products/chivalry-not-dead/2.jpg",
          "/assets/products/chivalry-not-dead/3.jpg",
          "/assets/products/chivalry-not-dead/4.jpg",
          "/assets/products/chivalry-not-dead/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Black",
        "hex": "#1A1A1A",
        "images": [
          "/assets/products/chivalry-not-dead/primary.jpg",
          "/assets/products/chivalry-not-dead/2.jpg",
          "/assets/products/chivalry-not-dead/3.jpg",
          "/assets/products/chivalry-not-dead/4.jpg",
          "/assets/products/chivalry-not-dead/5.jpg"
        ],
        "sizes": [
          "M",
          "L"
        ],
        "price": 30
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XXL",
      "XL"
    ],
    "featuredTags": [
      "best-seller"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/chivalry-not-dead/primary.jpg",
      "/assets/products/chivalry-not-dead/2.jpg",
      "/assets/products/chivalry-not-dead/3.jpg",
      "/assets/products/chivalry-not-dead/4.jpg",
      "/assets/products/chivalry-not-dead/5.jpg"
    ],
    "primaryImage": "/assets/products/chivalry-not-dead/primary.jpg"
  },
  {
    "id": "its-not-a-game",
    "slug": "its-not-a-game",
    "name": "It's Not A Game",
    "category": "t-shirts",
    "categoryLabel": "T-Shirts",
    "price": 30,
    "description": "Premium graphic tee \u2014 heavyweight cotton with bold Mind Onn Business design.",
    "colors": [
      {
        "name": "White",
        "hex": "#F5F5F5",
        "images": [
          "/assets/products/its-not-a-game/primary.jpg",
          "/assets/products/its-not-a-game/2.jpg"
        ],
        "sizes": [
          "M",
          "L",
          "XL"
        ],
        "price": 30
      },
      {
        "name": "Black",
        "hex": "#1A1A1A",
        "images": [
          "/assets/products/its-not-a-game/primary.jpg",
          "/assets/products/its-not-a-game/2.jpg"
        ],
        "sizes": [
          "M",
          "L",
          "XL"
        ],
        "price": 30
      }
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "featuredTags": [
      "best-seller",
      "new-arrival"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/its-not-a-game/primary.jpg",
      "/assets/products/its-not-a-game/2.jpg"
    ],
    "primaryImage": "/assets/products/its-not-a-game/primary.jpg"
  },
  {
    "id": "legit",
    "slug": "legit",
    "name": "Legit",
    "category": "t-shirts",
    "categoryLabel": "T-Shirts",
    "price": 30,
    "description": "Premium graphic tee \u2014 heavyweight cotton with bold Mind Onn Business design.",
    "colors": [
      {
        "name": "Red",
        "hex": "#DC2626",
        "images": [
          "/assets/products/legit/primary.jpg",
          "/assets/products/legit/2.jpg",
          "/assets/products/legit/3.jpg",
          "/assets/products/legit/4.jpg"
        ],
        "sizes": [
          "L"
        ],
        "price": 30
      },
      {
        "name": "Light Gray",
        "hex": "#D1D5DB",
        "images": [
          "/assets/products/legit/primary.jpg",
          "/assets/products/legit/2.jpg",
          "/assets/products/legit/3.jpg",
          "/assets/products/legit/4.jpg"
        ],
        "sizes": [
          "L"
        ],
        "price": 30
      },
      {
        "name": "Royal Blue",
        "hex": "#1E3A8A",
        "images": [
          "/assets/products/legit/primary.jpg",
          "/assets/products/legit/2.jpg",
          "/assets/products/legit/3.jpg",
          "/assets/products/legit/4.jpg"
        ],
        "sizes": [
          "L"
        ],
        "price": 30
      },
      {
        "name": "White",
        "hex": "#F5F5F5",
        "images": [
          "/assets/products/legit/primary.jpg",
          "/assets/products/legit/2.jpg",
          "/assets/products/legit/3.jpg",
          "/assets/products/legit/4.jpg"
        ],
        "sizes": [
          "L"
        ],
        "price": 30
      },
      {
        "name": "Green",
        "hex": "#16A34A",
        "images": [
          "/assets/products/legit/primary.jpg",
          "/assets/products/legit/2.jpg",
          "/assets/products/legit/3.jpg",
          "/assets/products/legit/4.jpg"
        ],
        "sizes": [
          "L"
        ],
        "price": 30
      }
    ],
    "sizes": [
      "L"
    ],
    "featuredTags": [
      "best-seller"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/legit/primary.jpg",
      "/assets/products/legit/2.jpg",
      "/assets/products/legit/3.jpg",
      "/assets/products/legit/4.jpg"
    ],
    "primaryImage": "/assets/products/legit/primary.jpg"
  },
  {
    "id": "plan-ahead",
    "slug": "plan-ahead",
    "name": "Plan Ahead",
    "category": "t-shirts",
    "categoryLabel": "T-Shirts",
    "price": 30,
    "description": "Premium graphic tee \u2014 heavyweight cotton with bold Mind Onn Business design.",
    "colors": [
      {
        "name": "Red",
        "hex": "#DC2626",
        "images": [
          "/assets/products/plan-ahead/primary.jpg",
          "/assets/products/plan-ahead/2.jpg",
          "/assets/products/plan-ahead/3.jpg",
          "/assets/products/plan-ahead/4.jpg",
          "/assets/products/plan-ahead/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Royal Blue",
        "hex": "#1E3A8A",
        "images": [
          "/assets/products/plan-ahead/primary.jpg",
          "/assets/products/plan-ahead/2.jpg",
          "/assets/products/plan-ahead/3.jpg",
          "/assets/products/plan-ahead/4.jpg",
          "/assets/products/plan-ahead/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Marron",
        "hex": "#7F1D1D",
        "images": [
          "/assets/products/plan-ahead/primary.jpg",
          "/assets/products/plan-ahead/2.jpg",
          "/assets/products/plan-ahead/3.jpg",
          "/assets/products/plan-ahead/4.jpg",
          "/assets/products/plan-ahead/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Green",
        "hex": "#16A34A",
        "images": [
          "/assets/products/plan-ahead/primary.jpg",
          "/assets/products/plan-ahead/2.jpg",
          "/assets/products/plan-ahead/3.jpg",
          "/assets/products/plan-ahead/4.jpg",
          "/assets/products/plan-ahead/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Light Gray",
        "hex": "#D1D5DB",
        "images": [
          "/assets/products/plan-ahead/primary.jpg",
          "/assets/products/plan-ahead/2.jpg",
          "/assets/products/plan-ahead/3.jpg",
          "/assets/products/plan-ahead/4.jpg",
          "/assets/products/plan-ahead/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XXL",
      "XL"
    ],
    "featuredTags": [
      "best-seller"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/plan-ahead/primary.jpg",
      "/assets/products/plan-ahead/2.jpg",
      "/assets/products/plan-ahead/3.jpg",
      "/assets/products/plan-ahead/4.jpg",
      "/assets/products/plan-ahead/5.jpg"
    ],
    "primaryImage": "/assets/products/plan-ahead/primary.jpg"
  },
  {
    "id": "to-the-top",
    "slug": "to-the-top",
    "name": "To The Top",
    "category": "t-shirts",
    "categoryLabel": "T-Shirts",
    "price": 30,
    "description": "Premium graphic tee \u2014 heavyweight cotton with bold Mind Onn Business design.",
    "colors": [
      {
        "name": "Royal Blue",
        "hex": "#1E3A8A",
        "images": [
          "/assets/products/to-the-top/primary.jpg",
          "/assets/products/to-the-top/2.jpg",
          "/assets/products/to-the-top/3.jpg",
          "/assets/products/to-the-top/4.jpg",
          "/assets/products/to-the-top/5.jpg",
          "/assets/products/to-the-top/6.jpg",
          "/assets/products/to-the-top/7.jpg",
          "/assets/products/to-the-top/8.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Red",
        "hex": "#DC2626",
        "images": [
          "/assets/products/to-the-top/primary.jpg",
          "/assets/products/to-the-top/2.jpg",
          "/assets/products/to-the-top/3.jpg",
          "/assets/products/to-the-top/4.jpg",
          "/assets/products/to-the-top/5.jpg",
          "/assets/products/to-the-top/6.jpg",
          "/assets/products/to-the-top/7.jpg",
          "/assets/products/to-the-top/8.jpg"
        ],
        "sizes": [
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "White",
        "hex": "#F5F5F5",
        "images": [
          "/assets/products/to-the-top/primary.jpg",
          "/assets/products/to-the-top/2.jpg",
          "/assets/products/to-the-top/3.jpg",
          "/assets/products/to-the-top/4.jpg",
          "/assets/products/to-the-top/5.jpg",
          "/assets/products/to-the-top/6.jpg",
          "/assets/products/to-the-top/7.jpg",
          "/assets/products/to-the-top/8.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Black",
        "hex": "#1A1A1A",
        "images": [
          "/assets/products/to-the-top/primary.jpg",
          "/assets/products/to-the-top/2.jpg",
          "/assets/products/to-the-top/3.jpg",
          "/assets/products/to-the-top/4.jpg",
          "/assets/products/to-the-top/5.jpg",
          "/assets/products/to-the-top/6.jpg",
          "/assets/products/to-the-top/7.jpg",
          "/assets/products/to-the-top/8.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Yellow",
        "hex": "#F5D547",
        "images": [
          "/assets/products/to-the-top/primary.jpg",
          "/assets/products/to-the-top/2.jpg",
          "/assets/products/to-the-top/3.jpg",
          "/assets/products/to-the-top/4.jpg",
          "/assets/products/to-the-top/5.jpg",
          "/assets/products/to-the-top/6.jpg",
          "/assets/products/to-the-top/7.jpg",
          "/assets/products/to-the-top/8.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Green",
        "hex": "#16A34A",
        "images": [
          "/assets/products/to-the-top/primary.jpg",
          "/assets/products/to-the-top/2.jpg",
          "/assets/products/to-the-top/3.jpg",
          "/assets/products/to-the-top/4.jpg",
          "/assets/products/to-the-top/5.jpg",
          "/assets/products/to-the-top/6.jpg",
          "/assets/products/to-the-top/7.jpg",
          "/assets/products/to-the-top/8.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 30
      },
      {
        "name": "Navy Blue",
        "hex": "#1E3A5F",
        "images": [
          "/assets/products/to-the-top/primary.jpg",
          "/assets/products/to-the-top/2.jpg",
          "/assets/products/to-the-top/3.jpg",
          "/assets/products/to-the-top/4.jpg",
          "/assets/products/to-the-top/5.jpg",
          "/assets/products/to-the-top/6.jpg",
          "/assets/products/to-the-top/7.jpg",
          "/assets/products/to-the-top/8.jpg"
        ],
        "sizes": [
          "S",
          "M"
        ],
        "price": 30
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XXL",
      "XL"
    ],
    "featuredTags": [
      "best-seller"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/to-the-top/primary.jpg",
      "/assets/products/to-the-top/2.jpg",
      "/assets/products/to-the-top/3.jpg",
      "/assets/products/to-the-top/4.jpg",
      "/assets/products/to-the-top/5.jpg",
      "/assets/products/to-the-top/6.jpg",
      "/assets/products/to-the-top/7.jpg",
      "/assets/products/to-the-top/8.jpg"
    ],
    "primaryImage": "/assets/products/to-the-top/primary.jpg"
  },
  {
    "id": "bought",
    "slug": "bought",
    "name": "Bought",
    "category": "sweatshirts-hoodies",
    "categoryLabel": "Sweatshirts & Hoodies",
    "price": 40,
    "description": "Heavyweight sweatshirt \u2014 built for comfort and street-level style.",
    "colors": [
      {
        "name": "Army Green",
        "hex": "#4B5320",
        "images": [
          "/assets/products/bought/primary.jpg",
          "/assets/products/bought/2.jpg",
          "/assets/products/bought/3.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "XL",
          "XXL"
        ],
        "price": 40
      },
      {
        "name": "Royal Blue",
        "hex": "#1E3A8A",
        "images": [
          "/assets/products/bought/primary.jpg",
          "/assets/products/bought/2.jpg",
          "/assets/products/bought/3.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 40
      },
      {
        "name": "Black",
        "hex": "#1A1A1A",
        "images": [
          "/assets/products/bought/primary.jpg",
          "/assets/products/bought/2.jpg",
          "/assets/products/bought/3.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "XXL"
        ],
        "price": 40
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XXL",
      "XL"
    ],
    "featuredTags": [
      "best-seller",
      "new-arrival"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/bought/primary.jpg",
      "/assets/products/bought/2.jpg",
      "/assets/products/bought/3.jpg"
    ],
    "primaryImage": "/assets/products/bought/primary.jpg"
  },
  {
    "id": "legitimately-suited",
    "slug": "legitimately-suited",
    "name": "Legitimately Suited",
    "category": "sweatshirts-hoodies",
    "categoryLabel": "Sweatshirts & Hoodies",
    "price": 60,
    "description": "Jogging Suit",
    "colors": [
      {
        "name": "Sky Blue",
        "hex": "#7DD3FC",
        "images": [
          "/assets/products/legitimately-suited/sky-blue.jpg"
        ],
        "sizes": [
          "S"
        ],
        "price": 60
      },
      {
        "name": "Yellow",
        "hex": "#F5D547",
        "images": [
          "/assets/products/legitimately-suited/yellow.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 60
      },
      {
        "name": "Green",
        "hex": "#16A34A",
        "images": [
          "/assets/products/legitimately-suited/green.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 60
      },
      {
        "name": "Black",
        "hex": "#1A1A1A",
        "images": [
          "/assets/products/legitimately-suited/black.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 60
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XXL",
      "XL"
    ],
    "featuredTags": [
      "best-seller"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/legitimately-suited/sky-blue.jpg",
      "/assets/products/legitimately-suited/yellow.jpg",
      "/assets/products/legitimately-suited/green.jpg",
      "/assets/products/legitimately-suited/black.jpg"
    ],
    "primaryImage": "/assets/products/legitimately-suited/sky-blue.jpg"
  },
  {
    "id": "long-term-believer",
    "slug": "long-term-believer",
    "name": "Long Term Believer",
    "category": "sweatshirts-hoodies",
    "categoryLabel": "Sweatshirts & Hoodies",
    "price": 40,
    "description": "Jogging Suit",
    "colors": [
      {
        "name": "Black",
        "hex": "#1A1A1A",
        "images": [
          "/assets/products/long-term-believer/primary.jpg",
          "/assets/products/long-term-believer/2.jpg",
          "/assets/products/long-term-believer/3.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 60
      },
      {
        "name": "White",
        "hex": "#F5F5F5",
        "images": [
          "/assets/products/long-term-believer/primary.jpg",
          "/assets/products/long-term-believer/2.jpg",
          "/assets/products/long-term-believer/3.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 40
      },
      {
        "name": "Red",
        "hex": "#DC2626",
        "images": [
          "/assets/products/long-term-believer/primary.jpg",
          "/assets/products/long-term-believer/2.jpg",
          "/assets/products/long-term-believer/3.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 40
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XXL",
      "XL"
    ],
    "featuredTags": [
      "best-seller"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/long-term-believer/primary.jpg",
      "/assets/products/long-term-believer/2.jpg",
      "/assets/products/long-term-believer/3.jpg"
    ],
    "primaryImage": "/assets/products/long-term-believer/primary.jpg"
  },
  {
    "id": "on-it",
    "slug": "on-it",
    "name": "On It",
    "category": "sweatshirts-hoodies",
    "categoryLabel": "Sweatshirts & Hoodies",
    "price": 40,
    "description": "Heavyweight sweatshirt \u2014 built for comfort and street-level style.",
    "colors": [
      {
        "name": "Fatigue",
        "hex": "#8B8B3D",
        "images": [
          "/assets/products/on-it/fatigue.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 40
      },
      {
        "name": "White",
        "hex": "#F5F5F5",
        "images": [
          "/assets/products/on-it/white.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 40
      },
      {
        "name": "Yellow",
        "hex": "#F5D547",
        "images": [
          "/assets/products/on-it/yellow.jpg"
        ],
        "sizes": [
          "S",
          "M"
        ],
        "price": 40
      },
      {
        "name": "Green",
        "hex": "#16A34A",
        "images": [
          "/assets/products/on-it/green.jpg"
        ],
        "sizes": [
          "M",
          "XL"
        ],
        "price": 40
      },
      {
        "name": "Black",
        "hex": "#1A1A1A",
        "images": [
          "/assets/products/on-it/black.jpg"
        ],
        "sizes": [
          "XL",
          "XXL"
        ],
        "price": 40
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XXL",
      "XL"
    ],
    "featuredTags": [
      "best-seller"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/on-it/fatigue.jpg",
      "/assets/products/on-it/white.jpg",
      "/assets/products/on-it/yellow.jpg",
      "/assets/products/on-it/green.jpg",
      "/assets/products/on-it/black.jpg"
    ],
    "primaryImage": "/assets/products/on-it/fatigue.jpg"
  },
  {
    "id": "plugged-in",
    "slug": "plugged-in",
    "name": "Plugged In",
    "category": "sweatshirts-hoodies",
    "categoryLabel": "Sweatshirts & Hoodies",
    "price": 40,
    "description": "Heavyweight sweatshirt \u2014 built for comfort and street-level style.",
    "colors": [
      {
        "name": "Red",
        "hex": "#DC2626",
        "images": [
          "/assets/products/plugged-in/primary.jpg",
          "/assets/products/plugged-in/2.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "XL",
          "XXL"
        ],
        "price": 40
      },
      {
        "name": "Black",
        "hex": "#1A1A1A",
        "images": [
          "/assets/products/plugged-in/primary.jpg",
          "/assets/products/plugged-in/2.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "XL"
        ],
        "price": 40
      },
      {
        "name": "White",
        "hex": "#F5F5F5",
        "images": [
          "/assets/products/plugged-in/primary.jpg",
          "/assets/products/plugged-in/2.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 40
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XXL",
      "XL"
    ],
    "featuredTags": [
      "best-seller",
      "new-arrival"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/plugged-in/primary.jpg",
      "/assets/products/plugged-in/2.jpg"
    ],
    "primaryImage": "/assets/products/plugged-in/primary.jpg"
  },
  {
    "id": "suit-up",
    "slug": "suit-up",
    "name": "Suit Up",
    "category": "sweatshirts-hoodies",
    "categoryLabel": "Sweatshirts & Hoodies",
    "price": 50,
    "description": "Jogging Suit",
    "colors": [
      {
        "name": "Orange",
        "hex": "#EA580C",
        "images": [
          "/assets/products/suit-up/primary.jpg",
          "/assets/products/suit-up/2.jpg",
          "/assets/products/suit-up/3.jpg",
          "/assets/products/suit-up/4.jpg",
          "/assets/products/suit-up/5.jpg"
        ],
        "sizes": [
          "S"
        ],
        "price": 50
      },
      {
        "name": "Hot Pink",
        "hex": "#EC4899",
        "images": [
          "/assets/products/suit-up/primary.jpg",
          "/assets/products/suit-up/2.jpg",
          "/assets/products/suit-up/3.jpg",
          "/assets/products/suit-up/4.jpg",
          "/assets/products/suit-up/5.jpg"
        ],
        "sizes": [
          "M",
          "L"
        ],
        "price": 50
      },
      {
        "name": "Black",
        "hex": "#1A1A1A",
        "images": [
          "/assets/products/suit-up/primary.jpg",
          "/assets/products/suit-up/2.jpg",
          "/assets/products/suit-up/3.jpg",
          "/assets/products/suit-up/4.jpg",
          "/assets/products/suit-up/5.jpg"
        ],
        "sizes": [
          "M",
          "L"
        ],
        "price": 50
      },
      {
        "name": "Royal Blue",
        "hex": "#1E3A8A",
        "images": [
          "/assets/products/suit-up/primary.jpg",
          "/assets/products/suit-up/2.jpg",
          "/assets/products/suit-up/3.jpg",
          "/assets/products/suit-up/4.jpg",
          "/assets/products/suit-up/5.jpg"
        ],
        "sizes": [
          "M",
          "L",
          "XL"
        ],
        "price": 50
      },
      {
        "name": "Sky Blue",
        "hex": "#7DD3FC",
        "images": [
          "/assets/products/suit-up/primary.jpg",
          "/assets/products/suit-up/2.jpg",
          "/assets/products/suit-up/3.jpg",
          "/assets/products/suit-up/4.jpg",
          "/assets/products/suit-up/5.jpg"
        ],
        "sizes": [
          "M",
          "L",
          "XL"
        ],
        "price": 50
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "featuredTags": [
      "best-seller"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/suit-up/primary.jpg",
      "/assets/products/suit-up/2.jpg",
      "/assets/products/suit-up/3.jpg",
      "/assets/products/suit-up/4.jpg",
      "/assets/products/suit-up/5.jpg"
    ],
    "primaryImage": "/assets/products/suit-up/primary.jpg"
  },
  {
    "id": "the-piece",
    "slug": "the-piece",
    "name": "The Piece",
    "category": "sweatshirts-hoodies",
    "categoryLabel": "Sweatshirts & Hoodies",
    "price": 50,
    "description": "Heavyweight sweatshirt \u2014 built for comfort and street-level style.",
    "colors": [
      {
        "name": "Purple",
        "hex": "#7C3AED",
        "images": [
          "/assets/products/the-piece/primary.jpg",
          "/assets/products/the-piece/2.jpg",
          "/assets/products/the-piece/3.jpg",
          "/assets/products/the-piece/4.jpg",
          "/assets/products/the-piece/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 50
      },
      {
        "name": "Green",
        "hex": "#16A34A",
        "images": [
          "/assets/products/the-piece/primary.jpg",
          "/assets/products/the-piece/2.jpg",
          "/assets/products/the-piece/3.jpg",
          "/assets/products/the-piece/4.jpg",
          "/assets/products/the-piece/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 50
      },
      {
        "name": "Royal Blue",
        "hex": "#1E3A8A",
        "images": [
          "/assets/products/the-piece/primary.jpg",
          "/assets/products/the-piece/2.jpg",
          "/assets/products/the-piece/3.jpg",
          "/assets/products/the-piece/4.jpg",
          "/assets/products/the-piece/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 50
      },
      {
        "name": "Black",
        "hex": "#1A1A1A",
        "images": [
          "/assets/products/the-piece/primary.jpg",
          "/assets/products/the-piece/2.jpg",
          "/assets/products/the-piece/3.jpg",
          "/assets/products/the-piece/4.jpg",
          "/assets/products/the-piece/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 50
      },
      {
        "name": "Marron",
        "hex": "#7F1D1D",
        "images": [
          "/assets/products/the-piece/primary.jpg",
          "/assets/products/the-piece/2.jpg",
          "/assets/products/the-piece/3.jpg",
          "/assets/products/the-piece/4.jpg",
          "/assets/products/the-piece/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 50
      },
      {
        "name": "Orange",
        "hex": "#EA580C",
        "images": [
          "/assets/products/the-piece/primary.jpg",
          "/assets/products/the-piece/2.jpg",
          "/assets/products/the-piece/3.jpg",
          "/assets/products/the-piece/4.jpg",
          "/assets/products/the-piece/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 50
      },
      {
        "name": "Red",
        "hex": "#DC2626",
        "images": [
          "/assets/products/the-piece/primary.jpg",
          "/assets/products/the-piece/2.jpg",
          "/assets/products/the-piece/3.jpg",
          "/assets/products/the-piece/4.jpg",
          "/assets/products/the-piece/5.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 50
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XXL",
      "XL"
    ],
    "featuredTags": [
      "best-seller"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/the-piece/primary.jpg",
      "/assets/products/the-piece/2.jpg",
      "/assets/products/the-piece/3.jpg",
      "/assets/products/the-piece/4.jpg",
      "/assets/products/the-piece/5.jpg"
    ],
    "primaryImage": "/assets/products/the-piece/primary.jpg"
  },
  {
    "id": "true-to-it",
    "slug": "true-to-it",
    "name": "True To It",
    "category": "sweatshirts-hoodies",
    "categoryLabel": "Sweatshirts & Hoodies",
    "price": 40,
    "description": "Heavyweight sweatshirt \u2014 built for comfort and street-level style.",
    "colors": [
      {
        "name": "Black",
        "hex": "#1A1A1A",
        "images": [
          "/assets/products/true-to-it/primary.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "XXL"
        ],
        "price": 40
      },
      {
        "name": "Royal Purple",
        "hex": "#6B21A8",
        "images": [
          "/assets/products/true-to-it/primary.jpg"
        ],
        "sizes": [
          "S",
          "M"
        ],
        "price": 40
      },
      {
        "name": "Green",
        "hex": "#16A34A",
        "images": [
          "/assets/products/true-to-it/primary.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "XL",
          "XXL"
        ],
        "price": 40
      }
    ],
    "sizes": [
      "S",
      "M",
      "XXL",
      "XL"
    ],
    "featuredTags": [
      "best-seller"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/true-to-it/primary.jpg"
    ],
    "primaryImage": "/assets/products/true-to-it/primary.jpg"
  },
  {
    "id": "bomb-squad",
    "slug": "bomb-squad",
    "name": "Bomb Squad",
    "category": "jackets",
    "categoryLabel": "Jackets",
    "price": 175,
    "description": "Premium varsity jacket with embroidered Mind Onn Business branding.",
    "colors": [
      {
        "name": "Royal Blue",
        "hex": "#1E3A8A",
        "images": [
          "/assets/products/bomb-squad/royalty.jpg"
        ],
        "sizes": [
          "5XL"
        ],
        "price": 175
      },
      {
        "name": "Gentlemen",
        "hex": "#DC2626",
        "images": [
          "/assets/products/bomb-squad/gentleman.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 175
      },
      {
        "name": "God's Love",
        "hex": "#F5D547",
        "images": [
          "/assets/products/bomb-squad/gods-love.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 175
      },
      {
        "name": "Long Walk",
        "hex": "#16A34A",
        "images": [
          "/assets/products/bomb-squad/long-walk.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 175
      },
      {
        "name": "True Blue",
        "hex": "#1E3A5F",
        "images": [
          "/assets/products/bomb-squad/true-blue.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 175
      },
      {
        "name": "Brewer Blue",
        "hex": "#1E3A8A",
        "images": [
          "/assets/products/bomb-squad/brewer-blue.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 175
      },
      {
        "name": "Sand Storm",
        "hex": "#C4A77D",
        "images": [
          "/assets/products/bomb-squad/sand-storm.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 175
      },
      {
        "name": "Concrete",
        "hex": "#9CA3AF",
        "images": [
          "/assets/products/bomb-squad/concrete.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 175
      },
      {
        "name": "Holy Spirit",
        "hex": "#1A1A1A",
        "images": [
          "/assets/products/bomb-squad/holy-spirit.jpg"
        ],
        "sizes": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ],
        "price": 175
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XXL",
      "5XL",
      "XL"
    ],
    "featuredTags": [
      "best-seller",
      "limited-edition"
    ],
    "outOfStock": false,
    "images": [
      "/assets/products/bomb-squad/royalty.jpg",
      "/assets/products/bomb-squad/gentleman.jpg",
      "/assets/products/bomb-squad/gods-love.jpg",
      "/assets/products/bomb-squad/long-walk.jpg",
      "/assets/products/bomb-squad/true-blue.jpg",
      "/assets/products/bomb-squad/brewer-blue.jpg",
      "/assets/products/bomb-squad/sand-storm.jpg",
      "/assets/products/bomb-squad/concrete.jpg",
      "/assets/products/bomb-squad/holy-spirit.jpg"
    ],
    "primaryImage": "/assets/products/bomb-squad/royalty.jpg"
  }
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (category: ProductCategory) => products.filter((p) => p.category === category);
export const getProductsByTag = (tag: FeaturedTag) => products.filter((p) => p.featuredTags.includes(tag));
export const formatPrice = (price: number) => `$${price}`;
export const getVariantPrice = (product: Product, colorIndex: number) => product.colors[colorIndex]?.price ?? product.price;
export const getDisplayPrice = (product: Product) => {
  const prices = product.colors.map((c) => c.price ?? product.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return min === max ? formatPrice(min) : `From ${formatPrice(min)}`;
};