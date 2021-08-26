import './assets/css/style-liberty.css';
import './assets/css/style-starter.css';
import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Tutor from './Pages/Tutor';
import Home from './Pages/Home';
import MicroCourses from './Pages/MicroCourses';
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
import LatestUpdate from './Pages/LatestUpdate';

function App() {
	return (
		<React.Fragment>	
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
					<LatestUpdate />
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
				<Route exact path='/tutors/1-5'>
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
					<NotFound />
					<Footer />
				</Route>
			</Switch>
		</React.Fragment>
	);
}

export default App;
