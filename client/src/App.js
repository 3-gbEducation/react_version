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
<<<<<<< Updated upstream
		<>
			<Header />
			<NavBar />
=======
		<React.Fragment>

>>>>>>> Stashed changes
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
				<Route exact path='/tutors/1-5'>
<<<<<<< Updated upstream
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
=======
					<Header />
					<NavBar />
					<TutorBody category='class 1 to 5' />
					<Footer />
				</Route>
				<Route exact path='/tutors/6-8'>
					<Header />
					<NavBar />
					<TutorBody category='class 6 to 8' />
					<Footer />
				</Route>
				<Route exact path='/tutors/9-10'>
					<Header />
					<NavBar />
					<TutorBody category='class 9 to 10' />
					<Footer />
				</Route>
				<Route exact path='/tutors/11-12'>
					<Header />
					<NavBar />
					<TutorBody category='class 11 to 12' />
					<Footer />
				</Route>
				<Route exact path='/tutors/competitive'>
					<Header />
					<NavBar />
					<TutorBody category='competitive' />
					<Footer />
				</Route>
				<Route exact path='/tutors/infoTech'>
					<Header />
					<NavBar />
					<TutorBody category='iT' />
					<Footer />
				</Route>
				<Route exact path='/tutors/languages'>
					<Header />
					<NavBar />
					<TutorBody category='languages' />
					<Footer />
				</Route>
				<Route exact path='/*'>
					<Header />
					<NavBar />
>>>>>>> Stashed changes
					<NotFound />
					<Footer />
				</Route>
			</Switch>
<<<<<<< Updated upstream
			<Footer />
		</>
=======
		</React.Fragment>
>>>>>>> Stashed changes
	);
}

export default App;
