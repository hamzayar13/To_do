import { useContext } from "react";
import { context } from "../store/task-store";

const Add = () => {
  const { handleOnSubmit, subject, description, setDescription, setSubject } =
    useContext(context);
  return (
    <>
      <form onSubmit={handleOnSubmit} className="form">
        <div className="boxes">
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control disc"
              id="exampleFormControlTextarea1"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary view-btn">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Add;
