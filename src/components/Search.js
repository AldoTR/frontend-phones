import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_DATA_ENTRIES_BY_USER = gql`
  query GetDataEntriesByUser($user: String!) {
    dataEntriesByUser(user: $user) {
      id
      user
      model
      prompt
      result
    }
  }
`;

const GET_DATA_ENTRIES_BY_MODEL = gql`
  query GetDataEntriesByModel($model: String!) {
    dataEntriesByModel(model: $model) {
      id
      user
      model
      prompt
      result
    }
  }
`;

const DataEntriesSearch = () => {
  const [user, setUser] = useState("");
  const [model, setModel] = useState("");

  const { loading: loadingUser, data: userData } = useQuery(
    GET_DATA_ENTRIES_BY_USER,
    {
      variables: { user },
    }
  );

  const { loading: loadingModel, data: modelData } = useQuery(
    GET_DATA_ENTRIES_BY_MODEL,
    {
      variables: { model },
    }
  );

  const handleUserSearch = (e) => {
    e.preventDefault();
  };

  const handleModelSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ marginTop: "9rem" }}>
      <h3 style={{ color: "white" }}>Search Data Entries</h3>

      <form onSubmit={handleUserSearch}>
        <label style={{ color: "white" }}>User:</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button style={{ color: "white" }} type="submit">
          Search by User
        </button>
      </form>

      <form onSubmit={handleModelSearch}>
        <label style={{ color: "white" }}>Model:</label>
        <select value={model} onChange={(e) => setModel(e.target.value)}>
          <option style={{ color: "black" }} value="">
            All
          </option>
          <option style={{ color: "black" }} value="Traductor">
            Traductor
          </option>
          <option style={{ color: "black" }} value="text-davinci-003">
            text-davinci-003
          </option>
          <option style={{ color: "black" }} value="List">
            List
          </option>
          <option style={{ color: "black" }} value="Emoji">
            Emoji
          </option>
          <option style={{ color: "black" }} value="Edits">
            Edits
          </option>
        </select>
        <button style={{ color: "white" }} type="submit">
          Search by Model
        </button>
      </form>

      <h4 style={{ color: "white" }}>Results:</h4>

      {loadingUser && <p style={{ color: "white" }}>Loading user data...</p>}
      {userData &&
        userData.dataEntriesByUser.map((entry) => (
          <div style={{marginTop: "0.5rem"}} key={entry.id}>
            <p style={{ color: "white" }}>User: {entry.user}</p>
            <p style={{ color: "white" }}>Model: {entry.model}</p>
            <p style={{ color: "white" }}>Prompt: {entry.prompt}</p>
            <p style={{ color: "white" }}>Result: {entry.result}</p>
          </div >
        ))}

      {loadingModel && <p style={{ color: "white" }}>Loading model data...</p>}
      {modelData &&
        modelData.dataEntriesByModel.map((entry) => (
          <div style={{marginTop: "0.5rem"}} key={entry.id}>
            <p style={{ color: "white" }}>User: {entry.user}</p>
            <p style={{ color: "white" }}>Model: {entry.model}</p>
            <p style={{ color: "white" }}>Prompt: {entry.prompt}</p>
            <p style={{ color: "white" }}>Result: {entry.result}</p>
          </div>
        ))}
    </div>
  );
};

export default DataEntriesSearch;