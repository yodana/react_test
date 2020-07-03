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
      <div className="text-center">
        <a href="#">
          <button className="btn btn-secondary fa fa-arrow-left"> </button>
        </a>
        <h1> Peut-tu indiquer son sexe ?</h1>
        <div className="buttons">
          <button className="btn btn-secondary" onClick={() => handleID(false)}>
            {" "}
            Homme{" "}
          </button>
          <button className="btn btn-secondary" onClick={() => handleID(true)}>
            {" "}
            Femme{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default SexPage;
