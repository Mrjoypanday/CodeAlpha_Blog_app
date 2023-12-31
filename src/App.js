
import "./App.css";
import { BrowserRouter as Routers, Routes, Route  } from "react-router-dom";
import Home from "./page/Home";
import Blog from "./page/Blog";


function App() {
 
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
