import { useState } from "react";
import axios from "axios";
import DateDetail from "./dateDetail/DateDetail";

import "./aDate.css";

function ADate() {
  const [inputDate, setInputDate] = useState();
  const [newDate, setNewDate] = useState();

  async function getDate(e) {
    e.preventDefault();
    setNewDate("");
    try {
      let apiResGet = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=G7YnNEj29BzgDTZD8GtDeEJnfeIK44CoVXs0TOzV&date=${inputDate}`
      );
      setInputDate("");
      setNewDate(apiResGet.data);
    } catch (error) {
      alert("se ha producido un error");
    }
  }

  return (
      <section>
        <form className="aDateFormSectionContainer m p" onSubmit={(e)=>getDate(e)}>
          <input
            type="date"
            name="aDate"
            id="aDate"
            value={inputDate}
            min="1995-01-01"
            max="2023-01-01"
            className="m someDatesInput"
            onChange={(e) => {
              setInputDate(e.target.value);
            }}
            required
          />
          <button className="m button">
            Get image
          </button>
        </form>
        <section>
          <DateDetail newDate={newDate} />
        </section>
      </section>
  );
}

export default ADate;
