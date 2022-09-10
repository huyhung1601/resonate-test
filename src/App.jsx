import { Header } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/contact/:id" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
