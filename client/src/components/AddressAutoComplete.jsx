import { useEffect, useState } from "react";

const AddressAutoComplete = ({ query }) => {
  const [suggestions, setSuggestions] = useState([]);
  console.log("query", query);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(
            query
          )}&limit=5`
        );
        const data = await response.json();
        console.log("data map", data);

        // Map the suggestions to an array of address labels
        setSuggestions(
          data.features.map((feature) => feature.properties.label)
        );
      } catch (error) {
        console.error("Error fetching address suggestions:", error);
      }
    };

    // Call the async function
    fetchData();
  }, [query]);

  return (
    <div>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddressAutoComplete;
