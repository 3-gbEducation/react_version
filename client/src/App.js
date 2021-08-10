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
import Admin from './Admin/Admin';

function App() {
	return (
		<>
		<Switch>
			<Route exact path='/'>
				<Header />
				<NavBar />
				<Home />
				<Footer />
			</Route>
			<Route exact path='/find-tutor'>
				<Header />
				<NavBar />
				<Tutor />
				<Footer />
			</Route>
			<Route exact path='/latest'>
				<Header />
				<NavBar />
				<LatestUpadate />
				<Footer />
			</Route>
			<Route exact path='/micro-courses'>
				<Header />
				<NavBar />
				<MicroCourses />
				<Footer />
			</Route>
			<Route exact path='/blogs'>
				<Header />
				<NavBar />
				<Blogs />
				<Footer />
			</Route>
			<Route exact path='/contact'>
				<Header />
				<NavBar />
				<Contact />
				<Footer />
			</Route>
			<Route exact path='/about'>
				<Header />
				<NavBar />
				<AboutUs />
				<Footer />
			</Route>
			<Route exact path='/login'>
				<Header />
				<NavBar />
				<Login />
				<Footer />
			</Route>
			<Route exact path='/signup'>
				<Header />
				<NavBar />
				<SignUp />
				<Footer />
			</Route>
			<Route exact path='/soon'>
				<Header />
				<NavBar />
				<Soon />
				<Footer />
			</Route>
			<Route exact path='/team'>
				<Header />
				<NavBar />
				<Team />
				<Footer />
			</Route>
			<Route exact path='/admin'>
				<Admin />
			</Route>
			<Route exact path ='/*'>
				<Header />
				<NavBar />
				<NotFound />
				<Footer />
			</Route>
		</Switch>
		</>
	);
}

export default App;
