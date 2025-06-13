import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Quiz = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Tous');
  
  // Données de quiz améliorées
  const quizData = [
    {
      id: 'qz-101',
      title: 'Biologie Fondamentale',
      description: 'Testez vos connaissances sur les bases de la biologie cellulaire et moléculaire',
      category: 'Biologie',
      difficulty: 'Moyen',
      questions: 15,
      duration: '10 min',
      progress: 65,
      iconColor: 'bg-gradient-to-r from-teal-500 to-indigo-600'
    },
    {
      id: 'qz-102',
      title: 'Écosystèmes & Biodiversité',
      description: 'Découvrez la richesse des écosystèmes terrestres et marins',
      category: 'Écologie',
      difficulty: 'Facile',
      questions: 12,
      duration: '8 min',
      progress: 30,
      iconColor: 'bg-gradient-to-r from-green-500 to-teal-600'
    },
    {
      id: 'qz-103',
      title: 'Photosynthèse Avancée',
      description: 'Maîtrisez les mécanismes complexes de la photosynthèse',
      category: 'Biologie',
      difficulty: 'Difficile',
      questions: 18,
      duration: '15 min',
      progress: 0,
      iconColor: 'bg-gradient-to-r from-emerald-500 to-cyan-600'
    },
    {
      id: 'qz-104',
      title: 'Changement Climatique',
      description: 'Comprenez les causes et conséquences du réchauffement planétaire',
      category: 'Environnement',
      difficulty: 'Moyen',
      questions: 14,
      duration: '12 min',
      progress: 90,
      iconColor: 'bg-gradient-to-r from-blue-500 to-indigo-600'
    },
    {
      id: 'qz-105',
      title: 'Génétique Moléculaire',
      description: 'Explorez les secrets de l\'ADN et de l\'expression génétique',
      category: 'Biologie',
      difficulty: 'Difficile',
      questions: 20,
      duration: '20 min',
      progress: 45,
      iconColor: 'bg-gradient-to-r from-purple-500 to-indigo-600'
    },
    {
      id: 'qz-106',
      title: 'Conservation Marine',
      description: 'Apprenez les enjeux de la protection des océans et de leurs habitants',
      category: 'Écologie',
      difficulty: 'Facile',
      questions: 10,
      duration: '7 min',
      progress: 100,
      iconColor: 'bg-gradient-to-r from-cyan-500 to-teal-600'
    }
  ];

  // Catégories uniques
  const categories = ['Tous', ...new Set(quizData.map(q => q.category))];

  // Filtrer les quiz par catégorie
  const filteredQuizzes = activeCategory === 'Tous' 
    ? quizData 
    : quizData.filter(quiz => quiz.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-indigo-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* En-tête */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <motion.h1 
              className="text-3xl font-bold text-gray-800 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-3 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              Quiz Vitali
            </motion.h1>
            <motion.p 
              className="text-gray-600 mt-2 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Testez vos connaissances en biologie, écologie et sciences environnementales
            </motion.p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-medium rounded-lg hover:shadow-md transition-all flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Créer un quiz
          </motion.button>
        </div>

        {/* Filtres par catégorie */}
        <motion.div 
          className="flex gap-3 mb-8 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {categories.map(category => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Liste des quiz */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {filteredQuizzes.map((quiz, index) => (
            <motion.div
              key={quiz.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all hover:shadow-lg"
              onClick={() => navigate(`/quiz/${quiz.id}`)}
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${quiz.iconColor}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    quiz.difficulty === 'Facile' ? 'bg-green-100 text-green-800' :
                    quiz.difficulty === 'Moyen' ? 'bg-amber-100 text-amber-800' :
                    'bg-rose-100 text-rose-800'
                  }`}>
                    {quiz.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{quiz.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{quiz.description}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {quiz.questions} questions
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {quiz.duration}
                  </div>
                </div>
                
                {quiz.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Votre progression</span>
                      <span>{quiz.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        className={`h-2 rounded-full ${
                          quiz.progress === 100 ? 'bg-teal-500' : 
                          quiz.progress > 70 ? 'bg-indigo-500' : 
                          quiz.progress > 40 ? 'bg-amber-500' : 'bg-rose-500'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${quiz.progress}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                )}
              </div>
              
              <div className={`px-5 py-3 ${
                quiz.progress === 100 
                  ? 'bg-gradient-to-r from-teal-500 to-indigo-600 text-white' 
                  : 'bg-gradient-to-r from-teal-50 to-indigo-50 text-teal-600'
              } flex items-center justify-between`}>
                <span>
                  {quiz.progress === 100 ? 'Quiz complété' : 'Commencer le quiz'}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Section de statistiques */}
        <motion.div 
          className="bg-white rounded-2xl shadow-md p-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Vos statistiques de quiz</h2>
            <button className="text-teal-600 font-medium flex items-center gap-1">
              Voir plus <ChevronRight size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-teal-50 to-indigo-50 rounded-xl p-4 border border-gray-100">
              <div className="text-3xl font-bold text-teal-600 mb-1">24</div>
              <div className="text-gray-600">Quiz complétés</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-gray-100">
              <div className="text-3xl font-bold text-indigo-600 mb-1">87%</div>
              <div className="text-gray-600">Taux de réussite</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-gray-100">
              <div className="text-3xl font-bold text-emerald-600 mb-1">15</div>
              <div className="text-gray-600">Badges obtenus</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-gray-100">
              <div className="text-3xl font-bold text-amber-600 mb-1">3</div>
              <div className="text-gray-600">Quiz en cours</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Quiz;