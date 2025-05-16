"use client";
import axios from "axios";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

// Define the type for a product hit
type ProductHit = {
  _index: string;
  _id?: string; // Make _id optional
  _score: number;
  _source: {
    brand: string;
    image_url: string;
    class_label: string;
    product_title: string;
    image_path: string;
  };
};

// Define the type for the Elasticsearch response
type ElasticsearchResponse = {
  hits: {
    hits: ProductHit[];
  };
};

// Define the type for the search query
type SearchQuery = {
  product_title: string;
};

// Function to search for documents using Axios
export async function searchDocuments(query: SearchQuery): Promise<ProductHit[]> {
  try {
    const { data } = await axios.post<ElasticsearchResponse>(
      "http://localhost:9200/products/_search",
      {
        size: 30,
        query: {
          match: {
            product_title: query.product_title, // Match the product title
          },
        },
      }
    );

    return data.hits.hits;
  } catch (error) {
    console.error("Error searching documents:", error);
    throw new Error("Failed to search documents");
  }
}

// Custom hook for the search mutation
export const useSearchDocumentsMutation = (): UseMutationResult<ProductHit[], Error, SearchQuery> => {
  return useMutation<ProductHit[], Error, SearchQuery>({
    mutationFn: searchDocuments,
    onSuccess: (data) => {
      console.log("Search results:", data);
    },
    onError: (error) => {
      console.error("Error during search:", error);
    },
  });
};
