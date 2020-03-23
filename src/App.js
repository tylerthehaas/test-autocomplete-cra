import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import "./App.css";

const Typeahead = () => {
  const unfilteredOptions = [
    { firstName: "Joe", lastName: "Bob" },
    { firstName: "Jill", lastName: "Jackson" },
    { firstName: "Frank", lastName: "Sinatra" },
    { firstName: "Billy", lastName: "Jean" },
    { firstName: "Meryl", lastName: "Streep" },
    { firstName: "Bob", lastName: "Saget" },
    { firstName: "Zoe", lastName: "Deschanel" },
    { firstName: "Will", lastName: "Ferrell" },
    { firstName: "John", lastName: "Candy" }
  ];
  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={unfilteredOptions.map(
        option => `${option.firstName} ${option.lastName}`
      )}
      renderInput={params => (
        <TextField
          {...params}
          label="freeSolo"
          margin="normal"
          variant="outlined"
        />
      )}
    />
  );
};

function App() {
  return (
    <div className="App">
      <Typeahead />
    </div>
  );
}

export default App;
