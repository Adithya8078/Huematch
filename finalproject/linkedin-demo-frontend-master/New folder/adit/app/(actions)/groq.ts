import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Define the type for the API response
type Typeresponse = {
  image_url: string;
  suggestions: JSON;
};


// Define the type for the suggestFashion function
type SuggestFashionResponse = Typeresponse;

// Function to call the API
const suggestFashion = async (image_url: string): Promise<SuggestFashionResponse> => {
  const response = await axios.post<SuggestFashionResponse>(
    "https://05ad-104-196-246-59.ngrok-free.app/suggest-fashion/",
    { image_url }
  );
  return response.data;
};

// Custom hook for the mutation
export const useSuggestFashionMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<SuggestFashionResponse, Error, string>({
    mutationFn: suggestFashion,
    onSuccess: (data) => {
      // Store API response in cache
      queryClient.setQueryData([data.image_url], data);
    },
  });

  return {
    mutate: mutation.mutate,
    isPending: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    data: mutation.data,
    error: mutation.error,
  };
};