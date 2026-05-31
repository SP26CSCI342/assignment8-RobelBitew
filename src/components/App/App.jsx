import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage";
import LoginForm from "../../forms/LoginForm";
import SignupForm from "../../forms/SignupForm";
import "./App.css";
import PageNotFound from "../../pages/PageNotFound";
import Profile from "../../pages/Profile";
import ProtectedRoute from "../ProtectedRoute";

export default function App() {
 
  return (
    <div className="App">

      <Navigation />

      <Routes>
        {/* TODO: Add the route for the Home page */}
        <Route path="/" element={<HomePage/>}/>
      
        {/* TODO: Add the route for the Login page */}
        <Route path="/login" element={<LoginForm/>}/>

        {/* TODO: Add the route for the Signup page */}
        <Route path="/signup" element={<SignupForm/>}/>

        <Route element={<ProtectedRoute/>}>
        <Route path="/profile" element={<Profile/>}/>
        </Route>
        {/* TODO: Add the fallback route for pages that do not exist */}
        <Route path ="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}
