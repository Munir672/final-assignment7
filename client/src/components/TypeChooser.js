const TypeChooser = (props) => {
  // Define the available joke types
  const jokeTypes = ["general", "knock-knock", "programming", "dad"];

  return (
    <div>
      <h1>Choose a Joke Type</h1>
      <ul>
        {jokeTypes.map((type) => { // Loop through each joke type and create a list item

          // If the current type is selected, apply styling
          if (props.selectedType === type) {
            style.backgroundColor = "red"; // Highlight selected type
            style.padding = "50px"; //I dont know why this is not showing up
            style.color = "black";         // Change text color
            style.fontWeight = "bold";     // Make text bold
          }

          return (
            <li key={type}> {/* Each list item must have a unique key */}
              <a
                href="#" // The link doesn't actually go anywhere
                onClick={(e) => {
                  props.onTypeSelect(type); // Calls the function passed from the parent to update selected type
                }}
              >
                {type} {/* Display the joke type */}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TypeChooser;
