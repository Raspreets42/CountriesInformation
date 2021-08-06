import './App.css';
import Header from "./MyComponents/Header";
import Countries from "./MyComponents/Countries";
import Footer from "./MyComponents/Footer";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" render={() => {
          return (
            <>
              <Countries />
            </>)
        }} >
        </Route>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
