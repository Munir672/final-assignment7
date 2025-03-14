//importing useEffect and useState from react
import { useEffect, useState } from "react";

const Joke = (props) => {
  
  // Create a state to store the joke
  const [joke, setJoke] = useState(null);
  // Create a state to track loading status
  const [loading, setLoading] = useState(false);

  // Function to fetch a joke from the API
  const fetchJoke = () => {
  
    setLoading(true); // Show loading message before fetching

    // Fetch a random joke of the selected type
    fetch(`https://official-joke-api.appspot.com/jokes/${props.chosenType}/random`)
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
        setJoke(data[0]); // Store the first joke from the response
        setLoading(false); // Hide loading message after fetching
      })
      .catch((e) => {
        setLoading(false); // Hide loading message even if there's an error
      });
  };

  // Fetch a new joke whenever the selected joke type changes
  useEffect(() => {
    if (props.chosenType) {
      fetchJoke();
    }
  }, [props.chosenType]); // Runs when `chosenType` updates

  return (
    <div className="joke">
      <h2>Joke Type: {props.chosenType}</h2>

      {/* Show loading message when it is slow to show th joke */}
      {loading && <p>Loading...</p>}

      {/* Show the button only if a joke type is selected */}
      {props.chosenType && (
        <button onClick={fetchJoke} disabled={loading}>
          {loading ? "Fetching..." : "Get another joke"} {/* Button text changes based on loading state */}
        </button>
      )}
    </div>
  );
};

export default Joke;
