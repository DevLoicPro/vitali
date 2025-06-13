import React from "react";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Course from './pages/Course'
import Exercices from "./pages/Exercices";
import Quiz from "./pages/Quiz";
import Parametres from "./pages/Parametres";
import PlayQuiz from "./pages/PlayQuiz";
import DoExercice from "./pages/DoExercice";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminDashboard from "./pages/Dashboard";

const App = () => {
	return (
		<Router>
			<div className="min-h-screen w-full h-screen">
				<Nav />
				<main className="w-full min-h-screen py-19">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Acceuil" element={<Home />} />
						<Route path="/Cours" element={<Course />} />
						<Route path="/Exercices" element={<Exercices />} />
						<Route path="/Exercices/:id" element={<DoExercice />} />
						<Route path="/Quiz" element={<Quiz />}></Route>
						<Route path="/Quiz/:id" element={<PlayQuiz />} />
						<Route path="/Parametres" element={<Parametres />} />
						<Route path="/Register" element={<Register />} />
						<Route path="/Login" element={<Login />} />
						<Route path="/Dashboard" element={<AdminDashboard />} />
					</Routes>
				</main>
				<Footer/>
			</div>
		</Router>
	);
};

export default App;
