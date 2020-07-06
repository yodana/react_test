import React, { useContext } from "react";
import IdendityContext from "../context/IdendityContext";

const IdendityPage = history => {
  const contextValue = useContext(IdendityContext);
  return (
    <>
      <div className="jumbotron ml-5 mt-5">
        <h1 className="text-center">
          {(contextValue.user.sex && <>Madame </>) || <> Monsieur </>}
          {contextValue.user.name} {contextValue.user.lastName}
        </h1>
      </div>
    </>
  );
};

export default IdendityPage;
