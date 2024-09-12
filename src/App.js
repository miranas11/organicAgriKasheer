import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import { Route, Router, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Product from "./components/Product";
import PlaceOrder from "./components/PlaceOrder";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashBoardLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/placeorder" element={<PlaceOrder />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
