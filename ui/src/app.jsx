import { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginRoute from "./routes/login";
import RegisterRoute from "./routes/register";
import RootRoute from "./routes/root";
import UnverifiedRoute from "./routes/unverified";
import VerifyRoute from "./routes/verify";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: ${({ theme }) => theme.colors.bg}; 
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={1500} />
      <Routes>
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/register" element={<RegisterRoute />} />
        <Route path="/unverified" element={<UnverifiedRoute />} />
        <Route path="/verify/:token" element={<VerifyRoute />} />
        <Route path="/" element={<RootRoute />} />
      </Routes>
    </>
  );
}
