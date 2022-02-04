import "./App.scss";
import { LoginPage } from "./pages/loginpage/LoginPage";
import { RegisterationPage } from "./pages/registerationpage/RegisterationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResetPassword } from "./pages/loginpage/resetpassword/ResetPassword";
import { NewCredential } from "./pages/loginpage/newcredentials/NewCredential";
import Header from "./components/layout/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterationPage />} />
        <Route exact path="/reset" element={<ResetPassword />} />
        <Route exact path="/credential" element={<NewCredential />} />
      </Routes>
    </Router>
  );
}

export default App;
