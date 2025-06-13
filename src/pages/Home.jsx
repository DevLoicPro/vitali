import {
	Sparkles,
	BookOpen,
	Leaf,
	Brain,
	ChevronRight,
	Menu,
	X,
	User,
	Lock,
	Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-teal-50 to-indigo-100 p-4 sm:p-8 flex flex-col">
			{/* Hero Section */}
			<motion.header
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center mb-16 max-w-3xl mx-auto"
			>
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className="inline-block bg-teal-100 text-teal-700 px-4 py-1 rounded-full mb-6"
				>
					Nouveauté: Quiz sur l'écologie
				</motion.div>

				<h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
					Explorez la{" "}
					<span className="bg-gradient-to-r from-teal-600 to-indigo-700 bg-clip-text text-transparent">
						science de la vie
					</span>{" "}
					et notre environnement
				</h1>

				<p className="mt-2 text-lg text-gray-600 mb-8">
					Découvrez la biologie, l'écologie et l'hygiène à travers des exercices
					interactifs, des quiz captivants et une bibliothèque riche en
					ressources.
				</p>

				<div className="flex flex-col sm:flex-row justify-center gap-4">
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="px-8 py-3 bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg transition-all flex justify-center items-center gap-2"
					>
						Commencer maintenant <ChevronRight size={18} />
					</motion.button>

					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="px-8 py-3 bg-white border-2 border-teal-500 text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-colors"
					>
						Découvrir les fonctionnalités
					</motion.button>
				</div>
			</motion.header>

			{/* Features Grid */}
			<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow mb-16 max-w-7xl mx-auto w-full">
				<Feature
					icon={<Sparkles className="text-indigo-500" size={48} />}
					title="Quiz Interactifs"
					description="Testez vos connaissances en temps réel avec nos quiz dynamiques et ludiques."
					actionText="Lancer un quiz"
					delay={0.1}
				/>
				<Feature
					icon={<BookOpen className="text-teal-500" size={48} />}
					title="Bibliothèque Riche"
					description="Accédez à des centaines de ressources pour approfondir chaque sujet."
					actionText="Explorer les ressources"
					delay={0.2}
				/>
				<Feature
					icon={<Leaf className="text-green-500" size={48} />}
					title="Éco-Responsable"
					description="Contenus engagés pour la préservation de notre planète."
					actionText="Découvrir"
					delay={0.3}
				/>
				<Feature
					icon={<Brain className="text-indigo-500" size={48} />}
					title="Apprentissage Profond"
					description="Approfondissez vos compétences avec des exercices progressifs."
					actionText="Commencer"
					delay={0.4}
				/>
			</main>

			{/* Stats Section */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				className="bg-white rounded-2xl shadow-sm p-8 mb-16 max-w-7xl mx-auto w-full"
			>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					<StatCard value="10K+" label="Utilisateurs actifs" color="teal" />
					<StatCard value="500+" label="Quiz disponibles" color="indigo" />
					<StatCard value="1.2K+" label="Ressources" color="green" />
					<StatCard value="98%" label="Satisfaction" color="purple" />
				</div>
			</motion.div>

			{/* Testimonials */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.7, duration: 0.5 }}
				className="mb-16 max-w-7xl mx-auto w-full"
			>
				<h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
					Ce qu'en disent nos utilisateurs
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<Testimonial
						text="Les quiz interactifs m'ont permis de mieux comprendre la biologie cellulaire. Une plateforme incroyable !"
						author="Marie L."
						role="Étudiante en biologie"
					/>
					<Testimonial
						text="Les ressources sur l'écologie sont exceptionnelles. Parfait pour mon travail de recherche."
						author="Thomas D."
						role="Chercheur en environnement"
					/>
					<Testimonial
						text="L'interface est intuitive et les contenus de qualité. Je recommande à tous mes collègues."
						author="Sophie R."
						role="Professeur de SVT"
					/>
				</div>
			</motion.div>

			{/* CTA Section */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8, duration: 0.5 }}
				className="bg-gradient-to-r from-teal-500 to-indigo-600 rounded-3xl p-8 mb-16 max-w-5xl mx-auto w-full"
			>
				<div className="flex flex-col md:flex-row items-center justify-between gap-8">
					<div className="text-white">
						<h3 className="text-2xl font-bold mb-3">
							Prêt à commencer votre voyage d'apprentissage ?
						</h3>
						<p className="opacity-90">
							Rejoignez notre communauté de passionnés de science et d'écologie.
						</p>
					</div>

					<div className="flex gap-4">
						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href="#"
							className="px-6 py-3 bg-white text-teal-600 font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2"
						>
							<User size={18} />Register
						</motion.a>

						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href="#"
							className="px-6 py-3 bg-indigo-700 text-white font-semibold rounded-full hover:bg-indigo-800 transition-colors flex items-center gap-2"
						>
							<Lock size={18} />Login
						</motion.a>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

function Feature({ icon, title, description, actionText, delay = 0 }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: delay + 0.3, duration: 0.5 }}
			whileHover={{
				y: -10,
				boxShadow:
					"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
			}}
			className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-gray-100 transition-all"
		>
			<motion.div
				whileHover={{ rotate: 10, scale: 1.1 }}
				className="mb-4 p-3 bg-gradient-to-br from-teal-50 to-indigo-50 rounded-xl"
			>
				{icon}
			</motion.div>
			<h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
			<p className="text-gray-600 mb-6 flex-grow">{description}</p>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className="px-5 py-2 bg-gradient-to-br from-teal-50 to-indigo-50 text-teal-700 font-medium rounded-full hover:from-teal-100 hover:to-indigo-100 transition-colors w-full flex items-center justify-center gap-2"
			>
				{actionText} <ChevronRight size={16} />
			</motion.button>
		</motion.div>
	);
}

function StatCard({ value, label, color = "teal" }) {
	const colorClasses = {
		teal: "text-teal-600",
		indigo: "text-indigo-600",
		green: "text-green-600",
		purple: "text-purple-600",
	};

	return (
		<div className="flex flex-col items-center">
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className={`text-3xl font-bold ${colorClasses[color]} mb-2`}
			>
				{value}
			</motion.div>
			<div className="text-gray-600">{label}</div>
		</div>
	);
}

function Testimonial({ text, author, role }) {
	return (
		<motion.div
			whileHover={{ y: -5 }}
			className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
		>
			<div className="flex items-center mb-4">
				{[...Array(5)].map((_, i) => (
					<svg
						key={i}
						className="w-5 h-5 text-yellow-400"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
				))}
			</div>
			<p className="text-gray-600 mb-6 italic">"{text}"</p>
			<div>
				<div className="font-medium text-gray-800">{author}</div>
				<div className="text-sm text-gray-500">{role}</div>
			</div>
		</motion.div>
	);
}
