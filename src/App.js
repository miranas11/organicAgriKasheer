import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Product from "./components/Product";
import PlaceOrder from "./components/PlaceOrder";
import Layout from "./components/utils/Layout";

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="aboutus" element={<AboutUs />} />
                    <Route path="products" element={<Product />} />
                    <Route path="placeorder" element={<PlaceOrder />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
