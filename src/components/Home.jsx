import { useContext } from "react";
import { context } from "../store/task-store";
import Welcome from "./Welcome";
import { NavLink } from "react-router-dom";
import { MdViewHeadline } from "react-icons/md";

import { MdFormatListNumbered } from "react-icons/md";
const Home = () => {
  const { handleOnDelete, list } = useContext(context);
  return (
    <>
      <h1 className="display-2">I am a Smart Task Bot</h1>
      {list.length === 0 ? (
        <Welcome />
      ) : (
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <MdFormatListNumbered size={27} />
                </th>
                <th scope="col">Subject</th>
                <th scope="col">Delete</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <h5>{item.subject}</h5>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleOnDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <NavLink to={`/view/${item.id}`} className={"nav-link"}>
                      <MdViewHeadline size={27} />
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Home;
