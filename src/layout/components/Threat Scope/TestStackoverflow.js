import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { id } from "./../../../auth/store/actions/index";
const ChangeState = () => {
  const value = useSelector((state) => state.id); //initial state of id=0
  const dispatch = useDispatch();
  console.log(value);
  return (
    <div>
      <button onClick={() => dispatch(id(1))}>button1</button>
      <button onClick={() => dispatch(id(2))}>button2</button>
    </div>
  );
};

export default ChangeState;
