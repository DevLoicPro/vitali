import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizData } from "../data/data";

const PlayQuiz = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const quiz = quizData.find((q) => q.id === id);

	const [answers, setAnswers] = useState({});

	if (!quiz)
		return (
			<div className="flex flex-col items-center justify-center min-h-screen p-6 bg-vitali-soft">
				<h2 className="text-3xl font-bold mb-4 text-vitali-danger">
					Quiz introuvable 😞
				</h2>
				<button
					onClick={() => navigate("/quiz")}
					className="px-6 py-2 mt-2 bg-vitali-primary text-white rounded-lg hover:bg-blue-700 transition"
				>
					Retour aux quiz
				</button>
			</div>
		);

	const handleAnswer = (qIndex, option) => {
		setAnswers((prev) => ({ ...prev, [qIndex]: option }));
	};

	return (
		<div className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-lg mt-16 mb-16">
			<h1 className="text-4xl font-extrabold mb-8 text-vitali-primary">
				{quiz.title}
			</h1>

			{quiz.questions.map((q, i) => (
				<div key={i} className="mb-10">
					<p className="text-xl font-semibold mb-3 text-vitali-dark">
						{i + 1}. {q.question}
					</p>
					<div className="flex flex-col space-y-3">
						{q.options.map((opt, idx) => (
							<div
								key={idx}
								onClick={() => handleAnswer(i, opt)}
								className={`cursor-pointer rounded-lg border-2 p-4 transition
            ${
							answers[i] === opt
								? "bg-blue-400 text-white border-blue-600 shadow-lg"
								: "border-gray-300 hover:border-vitali-primary"
						}`}
							>
								{opt}
							</div>
						))}
					</div>
				</div>
			))}

			<button
				className="bg-blue-500 text-white py-3 px-8 rounded-xl shadow-md transition"
				onClick={() =>
					alert("Fonctionnalité de soumission bientôt disponible 😉")
				}
			>
				Soumettre mes réponses
			</button>
		</div>
	);
};

export default PlayQuiz;
