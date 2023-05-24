interface Props {
	image: string;
}

const EventCardImage = ({ image }: Props) => {
	return (
		<>
			<img src={image} />
		</>
	);
};

export default EventCardImage;
