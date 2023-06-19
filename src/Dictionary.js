import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

const Dictionary = (props) => {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

 const handleResponse = (response) => {
    setResults(response.data[0]);
  }
 const search = () => {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
 const handleSubmit = (event) => {
    event.preventDefault();
    search();
  }
const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  }
  const load= () => {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
            />
          </form>
          <div className="hint">suggested words: sunset, wine, pizza...</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
};
export default Dictionary;