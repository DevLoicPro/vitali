// DoExercice.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X, BookOpen, Heart, Leaf } from 'lucide-react';

export default function DoExercice({ exercice, onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60 secondes par exercice

  // Questions fictives pour chaque exercice
  const questions = {
    1: [
      {
        id: 1,
        text: "Quel gaz est principalement responsable de l'effet de serre?",
        options: ["CO₂", "Oxygène", "Azote", "Hélium"],
        correct: 0
      },
      {
        id: 2,
        text: "Quelle activité humaine produit le plus de méthane?",
        options: ["Transport", "Agriculture", "Industrie", "Déchets"],
        correct: 1
      }
    ],
    2: [
      {
        id: 1,
        text: "Quel pigment est essentiel à la photosynthèse?",
        options: ["Chlorophylle", "Mélanine", "Carotène", "Hémoglobine"],
        correct: 0
      },
      {
        id: 2,
        text: "Quelle est l'équation générale de la photosynthèse?",
        options: [
          "CO₂ + H₂O → Glucose + O₂",
          "O₂ + Glucose → CO₂ + H₂O",
          "CO₂ + O₂ → Glucose + H₂O",
          "H₂O + Glucose → CO₂ + O₂"
        ],
        correct: 0
      }
    ],
    // Ajoutez des questions pour les autres exercices...
  };

  // Timer pour l'exercice
  useEffect(() => {
    if (timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleFinish();
    }
  }, [timeLeft, showResult]);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    
    // Vérifier la réponse après un court délai
    setTimeout(() => {
      const isCorrect = index === questions[exercice.id][currentQuestion].correct;
      if (isCorrect) setScore(score + 1);
      
      setShowResult(true);
      
      // Passer à la question suivante après 1.5s
      setTimeout(() => {
        if (currentQuestion < questions[exercice.id].length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
          setShowResult(false);
        } else {
          handleFinish();
        }
      }, 1500);
    }, 500);
  };

  const handleFinish = () => {
    // Ici vous pourriez sauvegarder le score dans une base de données
    alert(`Exercice terminé! Votre score: ${score}/${questions[exercice.id].length}`);
    onBack();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const currentQ = questions[exercice.id]?.[currentQuestion] || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-indigo-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        {/* En-tête avec bouton de retour */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-teal-600 hover:text-teal-800"
          >
            <ArrowLeft size={20} /> Retour
          </button>
          
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Carte d'exercice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Barre de progression */}
          <div className="h-2 bg-gray-200">
            <motion.div 
              className="h-full bg-gradient-to-r from-teal-500 to-indigo-600"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions[exercice.id].length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* En-tête */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{exercice.title}</h1>
                <p className="text-gray-600">{exercice.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  exercice.level === 'Facile' ? 'bg-green-100 text-green-700' :
                  exercice.level === 'Moyen' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {exercice.level}
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <BookOpen size={16} />
                <span>Question {currentQuestion + 1}/{questions[exercice.id].length}</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart size={16} className="text-red-400" />
                <span>Score: {score}</span>
              </div>
            </div>
          </div>

          {/* Question actuelle */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {currentQ.text}
            </h2>
            
            <div className="space-y-4">
              {currentQ.options?.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQ.correct;
                
                return (
                  <motion.button
                    key={index}
                    disabled={selectedAnswer !== null}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between
                      ${isSelected && !showResult ? 'border-teal-500 bg-teal-50' : 'border-gray-200 hover:border-teal-300'}
                      ${showResult && isCorrect ? 'border-green-500 bg-green-50' : ''}
                      ${showResult && isSelected && !isCorrect ? 'border-red-500 bg-red-50' : ''}
                    `}
                    whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                    whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isSelected ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span>{option}</span>
                    </div>
                    
                    {showResult && isSelected && (
                      isCorrect ? (
                        <Check size={24} className="text-green-500" />
                      ) : (
                        <X size={24} className="text-red-500" />
                      )
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Section d'engagement écologique */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-2xl p-6 text-white"
        >
          <div className="flex items-center gap-4">
            <Leaf size={32} className="text-white" />
            <div>
              <h3 className="text-lg font-bold mb-1">Votre impact écologique</h3>
              <p className="opacity-90 text-sm">
                En complétant cet exercice, vous contribuez à la plantation d'un arbre.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}