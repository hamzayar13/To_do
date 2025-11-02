import React, { useReducer } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { initialState, reducer } from "./task_reducer";

export const context = createContext();

const TaskProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleOnDelete = (id) => {
    dispatch({
      type: "DELETE-ITEM",
      payload: {
        id,
      },
    });
  };
  const setSubject = (value) => {
    dispatch({
      type: "SET-SUBJECT",
      payload: value,
    });
  };
  const setDescription = (value) => {
    dispatch({
      type: "SET-DESCRIPTION",
      payload: value,
    });
  };
  const getItem = (id) => {
    const founditem = state.list.find((item) => item.id === Number(id));
    return founditem;
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "NEW-ITEM",
      payload: {
        subject: state.subject,
        description: state.description,
      },
    });
    navigate("/");
  };

  return (
    <>
      <context.Provider
        value={{
          list: state.list,
          handleOnDelete,
          handleOnSubmit,
          subject: state.subject,
          description: state.description,
          setDescription,
          setSubject,
          getItem,
        }}
      >
        {children}
      </context.Provider>
    </>
  );
};
export default TaskProvider;
