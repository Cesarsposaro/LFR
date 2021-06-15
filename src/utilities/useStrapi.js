import { useState, useEffect } from "react";
import axios from "axios";

const useStrapi = (path) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const fetchData = () => {
    axios
      .get(`http://localhost:1337/${path}`)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // return value , loading flag and error
  return { response, error, loading };
};

export default useStrapi;
