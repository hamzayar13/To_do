const About = () => {
  return (
    <>
      <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="about-head">
          <h1>About</h1>
          <p>This is a simple Subject Manager application where you can:</p>
        </div>
        <ul className="list">
          <li>Add a subject along with a short description</li>
          <li>View your list of added subjects</li>
          <li>Delete any subject from the list when it's no longer needed</li>
        </ul>
        <p>
          It's designed to help you organize your topics, tasks, or notes easily
          in one place. Whether you're a student keeping track of your study
          plan or someone managing a list of ideas, this tool can help you stay
          organized.
        </p>
        <p>
          Built using React and Bootstrap, this project also showcases concepts
          like state management and routing in a React app.
        </p>
      </div>
    </>
  );
};

export default About;
