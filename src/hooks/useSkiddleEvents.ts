import { useQuery } from "@tanstack/react-query";
import SkiddleEvent from "../entities/SkiddleEvent";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<SkiddleEvent>("/events/search");

const useSkiddleEvents = () =>
	useQuery({
		queryKey: ["events"],
		queryFn: apiClient.getAll,
	});

export default useSkiddleEvents;
