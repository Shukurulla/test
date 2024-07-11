import React from "react";
import { Routes, Route } from "react-router-dom";
import Client from "./pages/client/client";
import TrueVariants from "./pages/client/trueVariant";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Client />} />
        <Route path="/true-variants" element={<TrueVariants />} />
      </Routes>
    </div>
  );
};

export default App;
