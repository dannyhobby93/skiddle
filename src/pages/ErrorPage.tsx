import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<main className='grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8'>
			<div className='text-center'>
				<h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
					Error Occurred
				</h1>
				<p className='mt-6 text-base leading-7 text-gray-600'>
					{isRouteErrorResponse(error)
						? "This page does not exist."
						: "Sorry, an unexpected error has occurred."}
				</p>
				<div className='flex items-center justify-center mt-10 gap-x-6'>
					<Link
						to={"/"}
						className='px-4 py-2 m-2 text-white transition duration-500 bg-teal-500 border border-teal-500 rounded-md select-none ease hover:bg-teal-600 focus:outline-none focus:shadow-outline'
					>
						Home Page
					</Link>
				</div>
			</div>
		</main>
	);
};

export default ErrorPage;
