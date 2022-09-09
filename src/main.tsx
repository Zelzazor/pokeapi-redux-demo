import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import "./basic.css";
import "./tailwind.css";
import SinglePokemon from "./pages/SinglePokemon";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemon" element={<App />} />
        <Route path="pokemon/:id" element={<SinglePokemon/>} />
        <Route path="*" element={
                    <div className="bg-indigo-300 font-sans h-screen flex justify-center items-center">
                      <h1 className="font-bold text-3xl">404 | Resource Not Found</h1>
                    </div>
        } />
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
