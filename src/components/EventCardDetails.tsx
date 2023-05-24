import SkiddleEvent from "../entities/SkiddleEvent";

interface Props {
	event: SkiddleEvent;
}

const EventCardDetails = ({ event }: Props) => {
	return (
		<div className='p-3 pb-0'>
			<strong>{event.eventname}</strong>
			<p className='py-5 text-xs'>{event.description}</p>
			<hr className='my-3' />
			<p className='text-xs'>
				{event.venue.name} @ {event.venue.town}
			</p>
			<hr className='my-3' />
			<p className='text-xs'>{event.date}</p>
			<hr className='my-3' />
		</div>
	);
};

export default EventCardDetails;
