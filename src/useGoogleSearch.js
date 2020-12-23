import { useState, useEffect } from "react";

import API_KEY from "./keys";

const CONTEXT_KEY = "ec24c76887f4e6113";

const useGoogleSearch = (term) => {
  const [dataItem, setDataItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => setDataItem(result));
    };
    fetchData();
  }, [term]);

  return { dataItem };
};
export default useGoogleSearch;
