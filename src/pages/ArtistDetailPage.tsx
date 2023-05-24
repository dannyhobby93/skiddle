import { useParams } from "react-router-dom";
import useArtist from "../hooks/useArtist";

const EventDetailPage = () => {
	const { id } = useParams();

	const { data, isLoading, error } = useArtist(id ?? "");

	if (isLoading) return <h3>Loading...</h3>;

	if (error || !data) throw error;

	const artist = data.results;

	return (
		<section className='mx-auto my-5 text-gray-800 md:w-5/6 '>
			<div className='block bg-white rounded-lg shadow-lg'>
				<div className='flex flex-wrap items-center'>
					<div className='hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12'>
						<img
							src={artist.imageurl}
							alt='Event Image'
							className='w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg'
						/>
					</div>
					<div className='w-full grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-8/12'>
						<div className='px-6 py-12 md:px-12'>
							<h2 className='mb-4 text-2xl font-bold'>{artist.name}</h2>
							<p className='mb-6 text-gray-500'>{artist.description}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EventDetailPage;
