import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
    useQuery<FetchResponse<Platform>, Error>({
        queryKey: ["platforms"],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, //1d
        initialData: { count: platforms.length, results: platforms, next: null },
    });

export default usePlatforms;
