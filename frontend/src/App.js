import { TextField, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import axios from "axios";

import "./App.css";
import Banner from "./Banner";

// update for own url
const BACKEND_URL = "http://127.0.0.1:5000/";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [status, setStatus] = useState(null);
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendResponse = () => {
    setLoading(true);
    setStatus(null);
    axios
      .get(BACKEND_URL, { params: { name, number } })
      .then((res) => {
        const response = res.data;
        const result = response.result;
        const link = response.link;
        setStatus(result);
        setLink(link);
        setLoading(false);
      })
      .catch((res) => {
        console.error(res);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <Banner status={status} link={link} />
      <form className="Form">
        <TextField
          id="name"
          label="Doctor name"
          variant="filled"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="number"
          label="Phone number"
          variant="filled"
          onChange={(event) => setNumber(event.target.value)}
        />
        <Button
          id="submit-button"
          disabled={name === "" || number === "" ? true : false}
          onClick={sendResponse}
          variant="contained"
        >
          Send Link
        </Button>{" "}
        {/* UI while sending link is in progress */}
        {loading ? <CircularProgress /> : null}
      </form>
    </div>
  );
}

export default App;
