import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import './App.css'

// import NotFound from './Component/NotFound'
// Lazy loading des composants
const Events = React.lazy(() => import("./Component/Events"));
const Products = React.lazy(() => import("./Component/Products"));
const NotFound = React.lazy(() => import("./Component/NotFound"));

function App() {
  return (
    <Router>
      <nav>
        <Link to="/home">Home</Link> | <Link to="/jjj">Test 404</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <>
                <div className="App">
                  <h1 className="text-center my-4">Event Management System</h1>
                  <Events />
                </div>
                <div className="App">
                  <h1 className="text-center my-4">Product</h1>
                  <Products />
                </div>
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;