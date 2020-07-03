import React, { useContext } from "react";
import IdendityContext from "../context/IdendityContext";

const IdendityPage = history => {
  const contextValue = useContext(IdendityContext);
  return (
    <>
      <h1 className="text-center jumbotron">
        {(contextValue.user.sex && <>Madame </>) || <> Monsieur </>}
        {contextValue.user.name} {contextValue.user.lastName}
      </h1>
    </>
  );
};

export default IdendityPage;
