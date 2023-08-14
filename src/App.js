
import "./App.css";
import { BrowserRouter as Routers, Routes, Route  } from "react-router-dom";
import Home from "./page/Home";
import Blog from "./page/Blog";
// import { useEffect } from "react";

function App() {
  //  const { pathname } = useLocation();
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, [pathname]);
  return (
    <Routers>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/blog/:id" Component={Blog} />
      </Routes>
    </Routers>
  );
}

export default App;
