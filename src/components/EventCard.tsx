import SkiddleEvent from "../entities/SkiddleEvent";
import EventCardAction from "./EventCardAction";
import EventCardDetails from "./EventCardDetails";
import EventCardImage from "./EventCardImage";

interface Props {
	event: SkiddleEvent;
}

const EventCard = ({ event }: Props) => {
	return (
		<div className='p-4 sm:w-1/3 lg:w-1/4 xl:w-1/5'>
			<div className='h-auto pb-3 overflow-hidden border-2 border-gray-200 rounded-lg event-card border-opacity-60'>
				<EventCardImage image={event.largeimageurl} />
				<EventCardDetails event={event} />
				<EventCardAction link={event.id} />
			</div>
		</div>
	);
};

export default EventCard;
