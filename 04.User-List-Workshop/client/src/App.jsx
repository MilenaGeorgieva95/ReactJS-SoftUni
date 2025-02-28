import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Pagination from "./components/user-list/Pagination";
import SearchBar from "./components/user-list/SearchBar";
import Table from "./components/user-list/Table";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">
          <SearchBar />

          <Table />

          {/* <!-- New user button  --> */}
          <button className="btn-add btn">Add new user</button>

          <Pagination />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
