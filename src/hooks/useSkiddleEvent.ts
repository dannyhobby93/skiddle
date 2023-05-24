import { useQuery } from "@tanstack/react-query";
import SkiddleEvent from "../entities/SkiddleEvent";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<SkiddleEvent>("/events");

const useSkiddleEvent = (id: string) => {
	const query = useQuery({
		queryKey: ["events", id],
		queryFn: () => apiClient.get(id),
	});

	return query;
};

export default useSkiddleEvent;
