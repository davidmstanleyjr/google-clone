import Head from "next/head";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useRef } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Avatar from "../components/Avatar";

export default function Home() {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const search = (e) => {
		e.preventDefault();
		const term = searchInputRef.current.value;
		// if there is no term, simply return nothing
		if (!term) return;
		// redirects the user to the page for the search term
		router.push(`/search?term=${term}`);
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<Head>
				<title>Google Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<header className="flex w-full p-5 justify-between text-sm text-gray-700">
				<div className="flex space-x-4 items-center">
					<p className="link">About</p>
					<p className="link">Store</p>
				</div>
				<div className="flex space-x-4 items-center">
					<p className="link">Gmail</p>
					<p className="link">Images</p>
					<ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

					<Avatar
						url={
							"https://res.cloudinary.com/ddet8to42/image/upload/v1630186082/Google-clone/akuma_avatar_du1pws.jpg"
						}
					/>
				</div>
			</header>

			{/* Body */}
			<form className="flex flex-grow items-center mt-44 flex-col w-4/5">
				<Image
					src="https://res.cloudinary.com/ddet8to42/image/upload/v1630185865/Google-clone/googlelogo_color_272x92dp_wpskel.png"
					height={100}
					width={300}
					alt=""
				/>
				<div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md sm:max-w-xl lg:max-w-2xl rounded-full border border-gray-200 px-5 py-3 items-center">
					<SearchIcon className="h-5 mr-3 text-gray-500" />
					<input
						ref={searchInputRef}
						className="flex-grow focus:outline-none"
						type="text"
					/>
					<MicrophoneIcon className="h-5" />
				</div>
				<div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
					<button onClick={search} className="btn" type="submit">
						Google Search
					</button>
					<button onClick={search} className="btn">
						I'm Feeling Lucky
					</button>
				</div>
			</form>

			{/* Footer */}
			<Footer />
		</div>
	);
}
