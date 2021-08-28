import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Response from "../../Response";
import { API_KEY, CONTEXT_KEY } from "../../keys";
import SearchResults from "../../components/SearchResults";

export default function Search({ results }) {
	console.log(results);
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>{router.query.term} - Google Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<SearchResults results={results} />
		</div>
	);
}

export async function getServerSideProps(context) {
	const useDummyData = false;
	// Defines the number of the first page
	const startIndex = context.query.start || "0";

	const data = useDummyData
		? Response
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
		  ).then((response) => response.json());

	// Pass back the results
	return {
		props: {
			results: data,
		},
	};
}
