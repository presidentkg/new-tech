export type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type ProductCategory = "iphone" | "tablet" | "laptop";