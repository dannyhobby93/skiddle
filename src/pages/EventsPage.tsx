import EventCard from "../components/EventCard";
import useSkiddleEvents from "../hooks/useSkiddleEvents";

const EventsPage = () => {
	const { data: events, isLoading, error } = useSkiddleEvents();

	if (isLoading) return <h3>Loading...</h3>;

	if (error || !events) throw error;

	return (
		<section className='text-gray-600 body-font'>
			<div className='container px-5 py-5 mx-auto'>
				<div className='flex flex-wrap -m-4'>
					{events?.results.map((event) => (
						<EventCard key={event.id} event={event} />
					))}
				</div>
			</div>
		</section>
	);
};

export default EventsPage;
