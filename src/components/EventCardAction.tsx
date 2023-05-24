import { Link } from "react-router-dom";

interface Props {
	link: string;
}
const EventCardAction = ({ link }: Props) => {
	return (
		<div className='flex flex-col items-center w-full py-3'>
			<Link
				to={`/event/${link}`}
				className='p-3 mx-auto text-white transition duration-500 bg-teal-500 border border-teal-500 rounded-md select-none ease hover:bg-teal-600 focus:outline-none focus:shadow-outline'
			>
				Event Details
			</Link>
		</div>
	);
};

export default EventCardAction;
