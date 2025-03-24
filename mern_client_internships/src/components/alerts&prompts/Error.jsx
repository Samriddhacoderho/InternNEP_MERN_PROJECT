import React, { useContext } from "react";
import { Alert } from "@material-tailwind/react";
import { context } from "../../contexts/Context";

const Error = () => {
    const useCon=useContext(context)
  return (
    <div>
      <Alert color="red">
        {useCon.sucMsg}
      </Alert>
    </div>
  );
};

export default Error;
