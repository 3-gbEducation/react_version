import './assets/css/style-liberty.css';
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
			</Switch>
			<Footer />
		</>
	);
}

export default App;
