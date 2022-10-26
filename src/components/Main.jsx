import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";

export default function Main() {
  const userName = "Justin Harris";
  return (
    <div ClassName="main">
      <Routes>
        <Route exact path="About" element={<About userName={userName} />} />
        <Route exact path="Header" element={<Header />} />
        <Route exact path="Footer" element={<Footer />} />
      </Routes>
    </div>
  );
}
