import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
	const ref = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	return (
		<div className='mx-auto mt-3 search'>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (ref.current) {
						navigate(`/search/${ref.current.value}`);
					}
				}}
			>
				<div className='relative flex flex-wrap items-stretch w-full mb-4'>
					<input
						type='search'
						className='relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-800 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-800 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none'
						placeholder='Search'
						aria-label='Search'
						aria-describedby='button-addon2'
						ref={ref}
					/>
					<span
						className='input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200'
						id='basic-addon2'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='w-5 h-5'
						>
							<path d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z' />
						</svg>
					</span>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
