import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import CreatePirate from "./components/CreatePirate";
import NavBar from "./components/NavBar";
import OnePirate from "./components/OnePirate";
import Pirates from "./components/Pirates";
import AllPirates from "./components/AllPirates";

const App = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
              <Routes>
                  <Route path="/" element={<Navigate to="/pirates" />} />
                  <Route path="/pirates" element={<Pirates />}>
                    <Route index element={<AllPirates />} />
                    <Route path='new' element={<CreatePirate />} />
                    <Route path=':id' element={<OnePirate />} />
                  </Route>
              </Routes>
            </div>
        </div>
    );
};

export default App;
