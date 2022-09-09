import { Header, SearchBar } from "./components";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <SearchBar />
        <Contacts />
      </div>
    </>
  );
}

export default App;
