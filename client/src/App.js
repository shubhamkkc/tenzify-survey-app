import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import ReserveValue from "./pages/reserve-value";
import ReserverTheCard from "./pages/reserve-the-card";
import ViewShareCertificate from "./pages/view-share-certificate";
import ViewPollResults from "./pages/view-poll-results";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Navbar from "./components/navbar";
import Error from "./pages/error"
function App() {
    return (
        <div>
        
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/reserve-value" element={<ReserveValue />} exact />
                <Route
                    path="/reserve-card"
                    element={<ReserverTheCard />}
                    exact
                />
                <Route
                    path="/view-share-certificate"
                    element={<ViewShareCertificate />}
                    exact
                />
                <Route
                    path="/view-poll-results"
                    element={<ViewPollResults />}
                    exact
                />
                <Route path="/login" element={<Login />} exact />
                <Route path="/register" element={<Register />} exact />
                <Route element={<Error/>} />
            </Routes>
        </div>
    );
}

export default App;
