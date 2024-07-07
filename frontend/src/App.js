import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './componets/home/home';
import Header from './componets/header/header';
import Footer from './componets/Footer/Footer';
import About from './componets/About/About';
import Projects from './componets/Projects/Projects';
import Contact from './componets/Contact/Contact';
import Login from './componets/Login/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, loadUser } from './action/user';
import Project from './componets/Admin/Project';
import AdminPanel from './componets/Admin/AdminPanel';
import Loader from './componets/Loader/Loader';
import Timeline from './componets/Admin/Timeline';

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  timelines={user.timeline}
                  skills={user.skills}
                />
              }
            />
            <Route path="/about" element={<About about={user.about} />} />
            <Route
              path="/projects"
              element={<Projects projects={user.projects} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />
            <Route
              path="/admin/project"
              element={isAuthenticated ? <Project /> : <Login />}
            />
          </Routes>

          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
