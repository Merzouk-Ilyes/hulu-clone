import Head from "next/head";
import Image from "next/image";
import Header from "../components/header"
import Nav from "../components/nav"
import requests from '../utils/requests'
import Results from "../components/results"
export default function Home({results}) {
  // console.log(results)
  return (
    <div>
      <Head>
        <title>Movies Trending App</title>
      </Head>
    {/* HEADER */}

    <Header />
    {/* NAV */}
    <Nav/>
    {/* RESULTS */}
    <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request =await fetch(`https://api.themoviedb.org/3${requests[genre]?.url ||
   requests.fetchTrending.url}`).then(res=>res.json())
   return {
     props:{
       results:request.results
     }
   }
}