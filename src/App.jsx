import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Files
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
// store
import store from "./Store/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
