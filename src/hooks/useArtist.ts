import { useQuery } from "@tanstack/react-query";
import Artist from "../entities/Artist";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Artist>("/artist");

const useArtist = (id: string) => {
	return useQuery({
		queryKey: ["artist", id],
		queryFn: () => apiClient.get(id),
	});
};

export default useArtist;
