import {Route, Routes} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import UserProfile from "./Pages/UserProfile/UserProfile";
import TestPage from "./Pages/TestPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/test" element={<TestPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
