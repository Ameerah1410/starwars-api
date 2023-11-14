// Import necessary modules and components
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

// IndexPage component
const IndexPage = ({ films }) => {
  // Sort films by episode_id in ascending order
  const sortedFilms = films.sort((a, b) => a.episode_id - b.episode_id);

  // Render the IndexPage component with layout and a list of films
  return (
    <Layout>
      {/* Film list container */}
      <ul className="film-list">
        {sortedFilms.map((film) => {
          // Extract episode number from the film URL
          const numberAtEnd = parseInt(film.url.match(/(\d+)\/$/)[1], 10);

          // Render each film as a list item with a link
          return (
            <li key={film.episode_id}>
              <a
                className="film-link"
                href={`/films/${numberAtEnd}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {film.title}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Add styled-jsx styles for the IndexPage */}
      <style jsx>{`
        .film-list {
          list-style: none;
          padding: 0;
        }

        li {
          margin-bottom: 10px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          text-align: center;
        }

        .film-link {
          text-decoration: none;
          color: #333;
          font-weight: bold;
        }

        .film-link:hover {
          color: #ff9800;
        }
      `}</style>
    </Layout>
  );
};

// Fetch film data using Next.js getInitialProps
IndexPage.getInitialProps = async () => {
  try {
    // Fetch a list of films from the Star Wars API
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    return { films: data.results };
  } catch (error) {
    // Handle errors and log them to the console
    console.error("Error fetching films:", error);
    return { films: [] };
  }
};

// Export the IndexPage component as the default export
export default IndexPage;
