import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// General pages
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import Van from "./pages/Vans/Van";

// Host pages
import HostLayout from "./pages/host/HostLayout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVans from "./pages/host/HostVans";
import HostVan from "./pages/host/HostVan";
import HostVanLayout from "./pages/host/HostVanLayout";
import Pricing from "./pages/host/Pricing";
import Details from "./pages/host/Details";
import Photos from "./pages/host/Photos";

import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<Van />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVan />}>
                <Route element={<HostVanLayout />}>
                  <Route index element={<Details />} />
                  <Route path="pricing" element={<Pricing />} />
                  <Route path="photos" element={<Photos />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
