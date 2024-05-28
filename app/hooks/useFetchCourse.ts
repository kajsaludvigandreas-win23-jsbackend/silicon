import { useEffect, useState } from 'react';

export interface Author {
    name: string;
}

export interface Price {
    currency: string;
    price: number;
    discount: number;
}

export interface ProgramDetail {
    id: string;
    title: string;
    description: string;
}

export interface Content {
    description: string;
    includes: string[];
    programDetails: ProgramDetail[];
}

export interface Course {
    id: string;
    imageUri: string;
    imageHeaderUri: string;
    isBestSeller: boolean;
    isDigital: boolean;
    categories: string[];
    title: string;
    ingress: string;
    starRating: number;
    reviews: number;
    likesInPercent: string;
    likes: string;
    hours: string;
    authors: Author[];
    prices: Price;
    content: Content;
}

export const useFetchCourse = (id: string) => {
    const [course, setCourse] = useState<Course | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const query = `
                query GetCourseById($id: String!) {
                    getCourseById(id: $id) {
                        id
                        imageUri
                        imageHeaderUri
                        isBestSeller
                        isDigital
                        categories
                        title
                        ingress
                        starRating
                        reviews
                        likesInPercent
                        likes
                        hours
                        authors {
                            name
                        }
                        prices {
                            currency
                            price
                            discount
                        }
                        content {
                            description
                            includes
                            programDetails {
                                id
                                title
                                description
                            }
                        }
                    }
                }
            `;

                const variables = { id };
                const response = await fetch('https://courseprovider-lak.azurewebsites.net/api/GraphQL?code=HmZBexEQKfIbFPqBV0zHpJEyxeaz4FT8twRto_LWBCckAzFuIhjUpw%3D%3D', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ query, variables })
                });

                const result = await response.json();
                if (result.errors) {
                    throw new Error(result.errors[0].message);
                }

                setCourse(result.data.getCourseById);
                setLoading(false);
            } catch (error) {
                const errorMessage = (error as Error).message;
                setError(errorMessage);
                setLoading(false);
            }
        };

        if (id) {
            fetchCourse();
        }
    }, [id]);

    return { course, loading, error };
};
