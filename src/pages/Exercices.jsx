import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Leaf, ChevronRight, Brain, Sparkles, 
  Heart, Shield, TreePine, FlaskConical, LeafyGreen 
} from 'lucide-react';
import DoExercice from './DoExercice'; // Import du composant pour faire l'exercice

export default function Exercice() {
  const [selectedExercice, setSelectedExercice] = useState(null);
  const [activeCategory, setActiveCategory] = useState('tous');

  // Catégories d'exercices
  const categories = [
    { id: 'tous', name: 'Tous les exercices', icon: <BookOpen size={18} /> },
    { id: 'ecologie', name: 'Écologie', icon: <Leaf size={18} /> },
    { id: 'biologie', name: 'Biologie', icon: <FlaskConical size={18} /> },
    { id: 'sante', name: 'Santé', icon: <Heart size={18} /> },
    { id: 'biodiversite', name: 'Biodiversité', icon: <LeafyGreen size={18} /> }
  ];

  // Liste des exercices
  const exercices = [
    {
      id: 1,
      title: "Les Gaz à Effet de Serre",
      description: "Comprenez l'impact des différents gaz sur notre environnement.",
      category: "ecologie",
      level: "Facile",
      questionsCount: 5,
      completed: true,
      icon: <Shield size={24} />
    },
    {
      id: 2,
      title: "La Photosynthèse",
      description: "Explorez le processus de transformation de la lumière en énergie.",
      category: "biologie",
      level: "Moyen",
      questionsCount: 8,
      completed: false,
      icon: <Sparkles size={24} />
    },
    {
      id: 3,
      title: "L'Écosystème Forestier",
      description: "Découvrez les interactions entre les espèces en forêt.",
      category: "ecologie",
      level: "Difficile",
      questionsCount: 10,
      completed: false,
      icon: <TreePine size={24} />
    },
    {
      id: 4,
      title: "La Cellule Animale",
      description: "Plongez au cœur de l'unité fondamentale de la vie animale.",
      category: "biologie",
      level: "Moyen",
      questionsCount: 7,
      completed: true,
      icon: <Brain size={24} />
    },
    {
      id: 5,
      title: "Les Énergies Renouvelables",
      description: "Comparez les différentes sources d'énergie propres.",
      category: "ecologie",
      level: "Facile",
      questionsCount: 6,
      completed: false,
      icon: <Leaf size={24} />
    },
    {
      id: 6,
      title: "Le Système Immunitaire",
      description: "Découvrez comment votre corps se défend contre les maladies.",
      category: "sante",
      level: "Difficile",
      questionsCount: 9,
      completed: false,
      icon: <Shield size={24} />
    },
    {
      id: 7,
      title: "Les Chaînes Alimentaires",
      description: "Comprenez les relations entre prédateurs et proies.",
      category: "ecologie",
      level: "Facile",
      questionsCount: 5,
      completed: true,
      icon: <LeafyGreen size={24} />
    },
    {
      id: 8,
      title: "L'ADN et la Génétique",
      description: "Explorez le code source de la vie et son héritage.",
      category: "biologie",
      level: "Moyen",
      questionsCount: 8,
      completed: false,
      icon: <FlaskConical size={24} />
    }
  ];

  // Filtrer les exercices par catégorie
  const filteredExercices = activeCategory === 'tous' 
    ? exercices 
    : exercices.filter(ex => ex.category === activeCategory);

  // Gérer la sélection d'un exercice
  const handleExerciceClick = (exercice) => {
    setSelectedExercice(exercice);
  };

  // Retour à la liste des exercices
  const handleBackToList = () => {
    setSelectedExercice(null);
  };

  // Si un exercice est sélectionné, afficher le composant DoExercice
  if (selectedExercice) {
    return <DoExercice exercice={selectedExercice} onBack={handleBackToList} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-indigo-100 p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* En-tête */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block bg-teal-100 text-teal-700 px-4 py-1 rounded-full mb-6"
          >
            Explorez notre collection
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Exercices de <span className="bg-gradient-to-r from-teal-600 to-indigo-700 bg-clip-text text-transparent">Biologie et Écologie</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Testez vos connaissances et approfondissez votre compréhension du monde vivant et de notre environnement.
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard 
            value={exercices.length} 
            label="Exercices disponibles" 
            color="teal" 
            icon={<BookOpen size={20} />}
          />
          <StatCard 
            value={exercices.filter(e => e.completed).length} 
            label="Complétés" 
            color="green" 
            icon={<CheckCircle size={20} />}
          />
          <StatCard 
            value={exercices.filter(e => e.level === 'Facile').length} 
            label="Niveau facile" 
            color="blue" 
            icon={<Sparkles size={20} />}
          />
          <StatCard 
            value={exercices.filter(e => e.level === 'Difficile').length} 
            label="Niveau difficile" 
            color="purple" 
            icon={<Brain size={20} />}
          />
        </div>

        {/* Liste des exercices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExercices.map((exercice, index) => (
            <motion.div
              key={exercice.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">
                    {exercice.icon}
                    <span className="capitalize">{exercice.category}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    exercice.level === 'Facile' ? 'bg-green-100 text-green-700' :
                    exercice.level === 'Moyen' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {exercice.level}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{exercice.title}</h3>
                <p className="text-gray-600 mb-6">{exercice.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <BookOpen size={16} />
                    <span>{exercice.questionsCount} questions</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {exercice.completed && (
                      <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                        Complété
                      </div>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleExerciceClick(exercice)}
                      className="px-4 py-2 bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-medium rounded-full hover:shadow-md transition-shadow flex items-center gap-1"
                    >
                      {exercice.completed ? 'Refaire' : 'Commencer'} 
                      <ChevronRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-teal-500 to-indigo-600 h-1 w-full"></div>
            </motion.div>
          ))}
        </div>

        {/* Section d'engagement écologique */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-3xl p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">Votre apprentissage fait la différence</h3>
              <p className="opacity-90 max-w-2xl">
                Pour chaque exercice complété, nous plantons un arbre. Contribuez à la reforestation tout en apprenant!
              </p>
            </div>
            
            <div className="flex items-center gap-4 bg-white/20 p-4 rounded-xl">
              <TreePine size={40} className="text-white" />
              <div>
                <div className="text-2xl font-bold">1 248</div>
                <div className="text-sm opacity-80">arbres plantés</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Composant de carte de statistique
function StatCard({ value, label, color = "teal", icon }) {
  const colorClasses = {
    teal: "bg-teal-100 text-teal-700",
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700"
  };
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4"
    >
      <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
        {icon}
      </div>
      <div>
        <div className="text-xl font-bold">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </motion.div>
  );
}

// Composant d'icône de validation
function CheckCircle(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4 12 14.01l-3-3" />
    </svg>
  );
}