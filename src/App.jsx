import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pets from "./pages/Pets";
import PetDetails from "./pages/PetDetails";
import Application from "./pages/Application";
import MyApplications from "./pages/MyApplications";
import Messages from "./pages/Messages";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ManagePets from "./pages/ManagePets";
import Applications from "./pages/Applications";
import AdminMessages from "./pages/AdminMessages";

function App() {
  const path = window.location.pathname;

  let page;

  if (path === "/login") {
    page = <Login />;
  } else if (path === "/signup") {
    page = <Signup />;
  } else if (path === "/pets") {
    page = <Pets />;
  } else if (path === "/pet-details") {
    page = <PetDetails />;
  } else if (path === "/application") {
    page = <Application />;
  } else if (path === "/my-applications") {
    page = <MyApplications />;
  } else if (path === "/messages") {
    page = <Messages />;
  } else if (path === "/admin-login") {
    page = <AdminLogin />;
  } else if (path === "/admin-dashboard") {
    page = <AdminDashboard />;
  } else if (path === "/manage-pets") {
    page = <ManagePets />;
  } else if (path === "/applications") {
    page = <Applications />;
  } else if (path === "/admin-messages") {
    page = <AdminMessages />;
  } else {
    page = <Home />;
  }

  return (
    <>
      <Navbar />

      {page}

      <Footer />
    </>
  );
}

export default App;