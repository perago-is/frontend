import React from "react";
import "./App.css";
import "@mantine/core/styles.css";
import store from "./state/store";
import Roles from "./pages/Roles";
import Role from "./pages/Role";
import NewRole from "./pages/NewRole";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Layout from "./component/Layout";
import { ToastContainer } from "react-toastify";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Horizontal from "./component/Horizontal";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Horizontal />
      <Router>
        <MantineProvider>
          <Layout>
            <Routes>
              <Route element={<Roles />} path="/" />
              <Route element={<NewRole />} path="/new-role" />
              <Route element={<Role />} path="/role/:id" />
            </Routes>
            <ToastContainer />
          </Layout>
        </MantineProvider>
      </Router>
      <Horizontal />
      <Footer />
    </Provider>
  );
}

export default App;
