<<<<<<< HEAD:client/src/App.js
import './assets/css/style-liberty.css';
import './assets/css/style-starter.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Tutor from './Pages/Tutor';
import Home from './Pages/Home';
import MicroCourses from './Pages/MicroCourses';
import LatestUpadate from './Pages/LatestUpadate';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import Blogs from './Pages/Blogs';
import Login from './Pages/Login';
import Soon from './Pages/Soon';
import SignUp from './Pages/SignUp';
import NotFound from './NotFound';
import Team from './Pages/Team';
import TutorBody from './Pages/TutorComponents/TutorBody';

function App() {
	return (
		<>
			<Header />
			<NavBar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/find-tutor'>
					<Tutor />
				</Route>
				<Route exact path='/latest'>
					<LatestUpadate />
				</Route>
				<Route exact path='/micro-courses'>
					<MicroCourses />
				</Route>
				<Route exact path='/blogs'>
					<Blogs />
				</Route>
				<Route exact path='/contact'>
					<Contact />
				</Route>
				<Route exact path='/about'>
					<AboutUs />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/signup'>
					<SignUp />
				</Route>
				<Route exact path='/soon'>
					<Soon />
				</Route>
				<Route exact path='/team'>
					<Team />
				</Route>
				<Route exact path='/tutors/1-5'>
					<TutorBody category="1-5" />
				</Route>
				<Route exact path='/tutors/6-8'>
					<TutorBody category="6-8" />
				</Route>
				<Route exact path='/tutors/9-10'>
					<TutorBody category="9-10" />
				</Route>
				<Route exact path='/tutors/11-12'>
					<TutorBody category="11-12" />
				</Route>
				<Route exact path='/tutors/programming'>
					<TutorBody category="prog" />
				</Route>
				<Route exact path='/tutors/IT'>
					<TutorBody category="IT" />
				</Route>
				<Route exact path='/tutors/languages'>
					<TutorBody category="languages" />
				</Route>
				<Route exact path ='/*'>
					<NotFound />
				</Route>
			</Switch>
			<Footer />
		</>
	);
=======
import "./assets/css/style-liberty.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Tutor from "./Pages/Tutor";
import Home from "./Pages/Home";
import MicroCourses from "./Pages/MicroCourses";
import LatestUpadate from "./Pages/LatestUpadate";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import Blogs from "./Pages/Blogs";
import Login from "./Pages/Login";
import Soon from "./Pages/Soon";
import ShowBlog from "./Pages/BlogComponent/ShowBlog";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/find-tutor">
          <Tutor />
        </Route>
        <Route exact path="/latest">
          <LatestUpadate />
        </Route>
        <Route exact path="/micro-courses">
          <MicroCourses />
        </Route>
        <Route exact path="/blogs">
          <Blogs />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/soon">
          <Soon />
        </Route>
        <Route exact path={`/blog/:id`}>
          <ShowBlog />
        </Route>
      </Switch>
      <Footer />
    </>
  );
>>>>>>> main:src/App.js
}

export default App;
