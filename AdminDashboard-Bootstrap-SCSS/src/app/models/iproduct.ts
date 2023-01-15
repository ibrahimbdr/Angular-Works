export interface Iproduct {
  id: string,
  title: string,
  title_ar: string,
  brand: string,
  brand_ar: string,
  category: string,
  category_ar: string,
  description: string;
  description_ar: string;
  specifications: string,
  specifications_ar: string,
  price: string,
  rating?: {
      rate?: string,
      rateNumber?: string,
      reviews: string[]
  },
  quantity: string,
  mImage: string,
  aImages: string[],
  sellerId: {
    id: string,
    shopName: string
  },
  createdAt: string,
  updatedAt: string,
}
