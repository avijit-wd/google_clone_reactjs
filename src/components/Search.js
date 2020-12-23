import React, { useState } from "react";
import "./Search.css";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import MicNoneIcon from "@material-ui/icons/MicNone";
import { useStateValue } from "../StateProvider";

const Search = ({ hideButtons }) => {
  const [text, setText] = useState("");

  const [{ term }, dispatch] = useStateValue();
  const history = useHistory();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const search = (e) => {
    e.preventDefault();
    if (text) {
      dispatch({
        type: "SET_SEARCH_TERM",
        term: text,
      });

      history.push("/search");
    }
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Search Google or type a URL"
        />
        <MicNoneIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I am feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I am feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
