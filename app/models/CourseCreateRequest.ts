export interface AuthorCreateRequest {
    name: string | null;
  }
  
  export interface PricesCreateRequest {
    currency: string | null;
    price: number;
    discount: number;
  }
  
  export interface ProgramDetailItemCreateRequest {
    id: number;
    title: string | null;
    description: string | null;
  }
  
  export interface ContentCreateRequest {
    description: string | null;
    includes: string[] | null;
    programDetails: ProgramDetailItemCreateRequest[] | null;
  }
  
  export interface CourseCreateRequest {
    imageUri: string | null;
    imageHeaderUri: string | null;
    isBestSeller: boolean;
    isDigital: boolean;
    categories: string[] | null;
    title: string | null;
    ingress: string | null;
    starRating: number;
    reviews: string | null;
    likesInPercent: string | null;
    likes: string | null;
    hours: string | null;
    authors: AuthorCreateRequest[] | null;
    prices: PricesCreateRequest | null;
    content: ContentCreateRequest | null;
  }