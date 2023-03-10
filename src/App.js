import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar2 from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./contexts/github/GithubContext";
import { AlertProvider } from "./contexts/alert/AlertContext";

function App() {
    return (
        <GithubProvider>
            <AlertProvider>
                <Router>
                    <div className="d-flex flex-column justify-content-between min-vh-100">
                        <Navbar2 />
                        <main className="container position-relative fs-4 px-3 pb-3">
                            <Alert />
                            <Routes>
                                <Route path="/" element={<Home />}></Route>
                                <Route path="/about" element={<About />}></Route>
                                <Route path="/user/:login" element={<User />}></Route>
                                <Route path="/notfound" element={<NotFound />}></Route>
                                <Route path="/*" element={<NotFound />}></Route>
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </AlertProvider>
        </GithubProvider>
    );
}

export default App;
