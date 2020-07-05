import React, { useContext } from "react";
import IdendityContext from "../context/IdendityContext";

const SexPage = ({ history }) => {
  const contextValue = useContext(IdendityContext);

  /** Maj de l'user (homme ou femme) */
  const handleID = id => {
    contextValue.setUser({ ...contextValue.user, sex: id });
    history.replace("/idendity");
  };

  return (
    <>
      <div className="jumbotron text-center">
        <a href="#">
          <button className="btn btn-secondary fa fa-arrow-left"> </button>
        </a>
        <h1> Peut-tu indiquer son sexe ?</h1>
        <div className="mt-5 mb-2">
          <button className="btn btn-secondary btn-lg mr-2" onClick={() => handleID(false)}>
            {" "}
            Homme{" "}
          </button>
          <button className="btn btn-secondary btn-lg" onClick={() => handleID(true)}>
            {" "}
            Femme{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default SexPage;
