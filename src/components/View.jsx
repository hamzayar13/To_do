import Accordion from "react-bootstrap/Accordion";
import { NavLink, useParams } from "react-router-dom";
import { context } from "../store/task-store";
import { useContext } from "react";
import Welcome from "./Welcome";

const View = () => {
  const { id } = useParams();
  const { getItem } = useContext(context);
  const item = getItem(Number(id));
  if (!item)
    return (
      <>
        <Welcome />
        <div className="return">
          <NavLink to="/" className={"btn btn-primary view-btn"}>
            Home
          </NavLink>
          <NavLink to="/add" className={"btn btn-primary view-btn"}>
            Add
          </NavLink>
        </div>
      </>
    );
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>
          <h1>{item.subject}</h1>
        </Accordion.Header>
        <Accordion.Body>{item.description}</Accordion.Body>
      </Accordion.Item>
      <NavLink to="/" className={"btn btn-primary view-btn"}>
        Home
      </NavLink>
      <NavLink to="/add" className={"btn btn-primary view-btn"}>
        Add
      </NavLink>
    </Accordion>
  );
};

export default View;
