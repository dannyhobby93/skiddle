import { createBrowserRouter } from "react-router-dom";
import ArtistDetailPage from "./pages/ArtistDetailPage";
import ErrorPage from "./pages/ErrorPage";
import EventDetailPage from "./pages/EventDetailPage";
import EventsPage from "./pages/EventsPage";
import Layout from "./pages/Layout";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <EventsPage />,
			},
			{
				path: "search/:keyword",
				element: <SearchPage />,
			},
			{
				path: "event/:id",
				element: <EventDetailPage />,
			},
			{
				path: "artist/:id",
				element: <ArtistDetailPage />,
			},
		],
	},
]);

export default router;
