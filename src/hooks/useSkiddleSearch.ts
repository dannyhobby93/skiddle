import { useQuery } from "@tanstack/react-query";
import SkiddleEvent from "../entities/SkiddleEvent";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<SkiddleEvent>("/events/search");

const useSkiddleSearch = (keyword: string) => {
	const query = useQuery({
		queryKey: ["events", keyword],
		queryFn: () => apiClient.search(keyword),
	});

	return query;
};

export default useSkiddleSearch;
