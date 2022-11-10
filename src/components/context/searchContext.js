import { createContext, useContext, useEffect, useState } from "react";
import { getTags } from "../newAdvertPage/newAdvertPageModel";

const SearchContext = createContext();

export const SearchContextConsumer = SearchContext.Consumer;

SearchContext.displayName = "Search Context";

export function SearchContextProvider({ children }) {
  const [sale, setSale] = useState("");

  const handleSale = (value) => setSale(value);

  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const requestTags = async () => {
      try {
        const apiTags = await getTags();
        setTags(apiTags);
      } catch (error) {
        setError(error);
      }
    };
    requestTags();
  }, []);

  //save the tags selected by the user
  const handleTags = (value) => {
    if (!selectedTags.includes(value)) {
      setSelectedTags((selectedTags) => [...selectedTags, value]);
    }
  };

  const showSelectedTags = selectedTags.length ? (
    <div>
      <p>Has elegido: </p>
      {selectedTags.map((tag) => (
        <button
          key={tag}
          onClick={(event) => {
            event.preventDefault();
            const changedTags = selectedTags.filter((item) => item !== tag);
            setSelectedTags(changedTags);
          }}
        >
          <span>{`#${tag} `}</span>
        </button>
      ))}
    </div>
  ) : (
    ""
  );

  return (
    <SearchContext.Provider
      value={{
        sale,
        handleSale,
        tags,
        handleTags,
        showSelectedTags,
      }}
    >
      {children}
      {error ? <div>{error}</div> : ""}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  return context;
}
