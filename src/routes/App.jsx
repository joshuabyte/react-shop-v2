import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Checkout from "../pages/Checkout";
import CreateAccount from "../pages/CreateAccount";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import NewPassword from "../pages/NewPassword";
import NotFound from "../pages/NotFound";
import Orders from "../pages/Orders";
import PasswordRecovery from "../pages/PasswordRecovery";
import SendEmail from "../pages/SendEmail";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import "../styles/global.css";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
    <BrowserRouter>
      {/* Adding the header here below, allows it to show on all routes. It should not be showing on the NotFound page. Will fix later. */}
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/send-email" element={<SendEmail />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
