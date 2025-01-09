import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayouts from "./layouts/HomeLayouts";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <BrowserRouter basename="/blog/">
        <Routes>
          <Route path="" Component={HomeLayouts}>
            <Route path="" element={<Home />} />
            <Route path="about" Component={About} />
            <Route path="posts" Component={Posts} />
            <Route path="posts" Component={Contact} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
