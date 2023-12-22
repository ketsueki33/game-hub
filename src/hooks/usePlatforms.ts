import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

// const usePlatforms = () => ({ data: platforms, error: null });
const usePlatforms = () =>
    useQuery<FetchResponse<Platform>, Error>({
        queryKey: ["platforms"],
        queryFn: () => apiClient.get("/platforms/lists/parents").then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000, //1d
        initialData: { count: platforms.length, results: platforms },
    });

export default usePlatforms;
