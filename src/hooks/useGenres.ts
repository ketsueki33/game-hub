import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () =>
    useQuery<FetchResponse<Genre>, Error>({
        queryKey: ["genres"],
        queryFn: () => apiClient.get("/genres").then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000, //1d
    });

export default useGenres;
