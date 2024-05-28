export interface AuthorUpdateRequest {
    name?: string;
}

export interface PricesUpdateRequest {
    currency?: string;
    price: number;
    discount: number;
}

export interface ProgramDetailItemUpdateRequest {
    id: number;
    title?: string;
    description?: string;
}

export interface ContentUpdateRequest {
    description?: string;
    includes?: string[];
    programDetails?: ProgramDetailItemUpdateRequest[];
}

export interface CourseUpdateRequest {
    id: string;
    imageUri?: string;
    imageHeaderUri?: string;
    isBestSeller: boolean;
    isDigital: boolean;
    categories?: string[];
    title?: string;
    ingress?: string;
    starRating: number;
    reviews?: string;
    likesInPercent?: string;
    likes?: string;
    hours?: string;
    authors?: AuthorUpdateRequest[];
    prices?: PricesUpdateRequest;
    content?: ContentUpdateRequest;
}
