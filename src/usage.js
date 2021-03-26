import React, { useContext } from "react";

import FirebaseContext from "./providers/firebase";

const Usage = () => {
  const firebase = useContext(FirebaseContext);

  return (
    <div>
      <div>see the Usage file to know how to use firebase in your project</div>
      <ul>
        <li>Add a .env file to the root folder of this project</li>
        <li>run firebase init to select existing firebase project or create a new one</li>
        <li>check service firebase file to see list of methods you have access to and also you can add more methods there</li>
      </ul>
    </div>
  );
};

export default Usage;
