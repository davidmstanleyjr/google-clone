import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

//This is for going from one search result page to the next

function PaginationButtons() {
	const router = useRouter();

	const startIndex = Number(router.query.start) || 0;
	return (
		<div className="flex justify-between max-w-lg text-blue-700 mb-10">
			{/* this is how I populate 10 results on each page */}
			{startIndex >= 10 && (
				<Link
					href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
				>
					<div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
						<ChevronLeftIcon className="h-5" />
						<p>Previous</p>
					</div>
				</Link>
			)}

			<Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
				<div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
					<ChevronRightIcon className="h-5" />
					<p>Next</p>
				</div>
			</Link>
		</div>
	);
}

export default PaginationButtons;
