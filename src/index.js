import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import TrailList from "./components/TrailList";
import SavedTrailsList from "./components/SavedTrailsList";

import "./index.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<HomePage />} />
        <Route path="trail-list" element={<TrailList />} />
        <Route path="saved-trails-list" element={<SavedTrailsList />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#4a6741	 ",
          100: "#4a6741	 ",
          200: "#4a6741	 ",
          300: "#4a6741	 ",
          400: "#4a6741	 ",
          500: "#4a6741	 ",
          600: "#4a6741	 ",
          700: "#4a6741	 ",
          800: "#4a6741	 ",
          900: "#4a6741	 ",
        },
        secondary: {
          50: "#374f2f ",
          100: "#F8C8DC	 ",
          200: "#374f2f ",
          300: "#374f2f ",
          400: "#374f2f ",
          500: "#374f2f ",
          600: "#374f2f ",
          700: "#374f2f ",
          800: "#374f2f ",
          900: "#374f2f ",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          100: "#4a6741	",
          50: "#4a6741	",
          200: "#4a6741	 ",
          300: "#4a6741	",
          400: "#4a6741	",
          500: "#4a6741	",
          600: "#4a6741	",
          700: "#4a6741	",
          800: "#4a6741	",
          900: "#4a6741	",
        },
        secondary: {
          50: "#E0BFB8	 ",
          100: "#E0BFB8	 ",
          200: "#E0BFB8	 ",
          300: "#E0BFB8	 ",
          400: "#E0BFB8	 ",
          500: "#E0BFB8	 ",
          600: "#E0BFB8	 ",
          700: "#E0BFB8	 ",
          800: "#E0BFB8	 ",
          900: "#E0BFB8	 ",
        },
      },
    },
  },
  Typography: {
    fontFamily: "Fasthand, Belanosima",
  },
});
root.render(
  <CssVarsProvider theme={theme}>
    <App />
  </CssVarsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
