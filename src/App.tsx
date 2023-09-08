
import {
  Route,
  Routes
} from "react-router-dom";
import "./scss/app.scss";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import AboutTea from "./components/AboutTea";
import Timer from "./components/Timer";
import NotFound from "./components/NotFound";

function App() {

  return (
    
    <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about-tea" element={<AboutTea />} />
      <Route path="timer" element={<Timer/>} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
  );
}

export default App
