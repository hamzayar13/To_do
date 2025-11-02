import Home from "./components/Home";
import Add from "./components/Add";
import NavBar from "./components/NavBar";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import TaskProvider from "./store/task-store";
import View from "./components/View";
import About from "./components/About";
import withLoadingDelay from "./components/LoadingWrapper";

const DelayHome = withLoadingDelay(Home);
const DelayAdd = withLoadingDelay(Add);
const DelayAbout = withLoadingDelay(About);
function App() {
  const location = useLocation();
  const hideNavBar = location.pathname.startsWith("/view");
  return (
    <>
      <TaskProvider>
        {!hideNavBar && <NavBar />}
        <Routes>
          <Route path="/" element={<DelayHome />} />
          <Route path="/add" element={<DelayAdd />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/about" element={<DelayAbout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </TaskProvider>
    </>
  );
}

export default App;
