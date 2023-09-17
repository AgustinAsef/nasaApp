import SomeDatesDetail from "../someDateDetail/SomeDateDetail";
import { useState } from "react";
import axios from "axios";

import "./someDates.css"

function SomeDates() {
  const [minInputDate, setMinInputDate] = useState('');
  const [maxInputDate, setMaxInputDate] = useState('');
  const [newDates, setNewDates] = useState();

  async function getDate(e) {
    e.preventDefault()
    setNewDates('')
    try {
      let apiResGet = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=G7YnNEj29BzgDTZD8GtDeEJnfeIK44CoVXs0TOzV&start_date=${minInputDate}&end_date=${maxInputDate}`
      );
      setMinInputDate('');
      setMaxInputDate('');
      setNewDates(apiResGet.data);
    } catch (error) {
      alert("se ha producido un error");
    }
  }

  return (
    <div>
      <div >
        <form className="m someDatesDivContainer" onSubmit={(e)=>getDate(e)}>
          <h2>From:</h2>{" "}
          <input
            type="date"
            name="dateMin"
            id="dateMin"
            min="01-01-1995"
            max="01-01-2023"
            value={minInputDate}
            required
            className="m someDatesInput"
            onChange={(e) => {
              setMinInputDate(e.target.value);
            }}
          />
          <h2>to:</h2>{" "}
          <input
            type="date"
            name="dateMax"
            id="dateMax"
            min="1995-01-01"
            max="2023-01-01"
            value={maxInputDate}
            required
            className="m someDatesInput"
            onChange={(e) => {
              setMaxInputDate(e.target.value);
            }}
          />
        <button type="submit" className="button">Ver fotos</button>

        </form>
      </div>
      <div>
        <SomeDatesDetail newDates={newDates} />
      </div>
    </div>
  );
}

export default SomeDates;
