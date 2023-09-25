import { useState } from "react";

const initialInputs = {
  "current-savings": 15000,
  "yearly-contribution": 1200,
  "expected-return": 11,
  duration: 8,
};

const UserInput = (props) => {
  const [userInputs, setUserInputs] = useState(initialInputs);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("SUBMIT");
    props.onCalculate(userInputs)
  };

  const resetHandler = () => {
    setUserInputs(initialInputs);
  };

  const inputChangeHandler = (input, value) => {
    setUserInputs((prevState) => {
      return { ...prevState, [input]: +value };
    });
  };

 

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInputs["current-savings"]}
            onChange={(e) => {
              inputChangeHandler(e.target.id, e.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInputs["yearly-contribution"]}
            onChange={(e) => {
              inputChangeHandler(e.target.id, e.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInputs["expected-return"]}
            onChange={(e) => {
              inputChangeHandler(e.target.id, e.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInputs.duration}
            onChange={(e) => {
              inputChangeHandler(e.target.id, e.target.value);
            }}
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
