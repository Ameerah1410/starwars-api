// Import necessary modules and components
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Layout from "../../components/Layout";

// FilmDetailsPage component
const FilmDetailsPage = ({ film }) => {
  // Initialize the Next.js router
  const router = useRouter();

  // If data is still loading, show a loading message
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Render the FilmDetailsPage component with layout and film details
  return (
    <Layout>
      {/* Film details container */}
      <div className="film-details">
        <h2>{film.title}</h2>
        <p>Episode: {film.episode_id}</p>
        <p>Director: {film.director}</p>
        <p>Release Date: {film.release_date}</p>
        <p>{film.opening_crawl}</p>
      </div>

      {/* Add styled-jsx styles for the FilmDetailsPage */}
      <style jsx>{`
        .film-details {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
          margin-top: 20px;
        }

        h2 {
          color: #333;
        }

        p {
          margin-bottom: 10px;
        }
      `}</style>
    </Layout>
  );
};

// Fetch film details using Next.js getInitialProps
FilmDetailsPage.getInitialProps = async ({ query }) => {
  try {
    // Fetch film details from the Star Wars API based on the film ID
    const response = await fetch(`https://swapi.dev/api/films/${query.id}/`);
    const film = await response.json();
    return { film };
  } catch (error) {
    // Handle errors and log them to the console
    console.error(`Error fetching film ${query.id}:`, error);
    return { film: {} };
  }
};

// Export the FilmDetailsPage component as the default export
export default FilmDetailsPage;
