import React, { useState, useContext } from "react";
import IdendityContext from "../context/IdendityContext";

const HomePage = ({ history }) => {
  const contextValue = useContext(IdendityContext);

  /** Mise a jour de l'user */
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    contextValue.setUser({ ...contextValue.user, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    history.replace("/sexIdendity");
  };

  return (
    <>
      <div className="text-center jumbotron">
        <h1>Quel est l'idendité du patient ?</h1>
        <form onSubmit={handleSubmit} className="form-check form-check-inline">
          <input
            className="form-control"
            name="name"
            id="nom"
            type="text"
            placeholder="Nom"
            required
            minLength="1"
            disabled=""
            onChange={handleChange}
          />
          <input
            className="form-control"
            name="lastName"
            id="Prenom"
            type="text"
            required
            minLength="1"
            placeholder="Prenom"
            disabled=""
            onChange={handleChange}
          />
          <button
            type="submit"
            className="btn btn-secondary ml-5 fa fa-arrow-right"
          ></button>
        </form>
      </div>
    </>
  );
};
export default HomePage;
