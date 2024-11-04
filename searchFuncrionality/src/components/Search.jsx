import { useState } from "react";

const Search = () => {
  // Sample data to search through
  const data = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Pineapple"
  ];

  // State for the search query
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the data based on the search term
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="border p-2 rounded"
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
