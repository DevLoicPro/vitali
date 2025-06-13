import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

export default function Register() {
  const plans = [
    { 
      name: 'Basic', 
      price: '€5/mois',
      features: ['Accès aux cours de base', 'Support standard', '1 projet actif']
    },
    { 
      name: 'Standard', 
      price: '€10/mois',
      features: ['Tous les cours', 'Support prioritaire', '5 projets actifs', 'Contenu premium']
    },
    { 
      name: 'Premium', 
      price: '€20/mois',
      features: ['Tous les cours', 'Support 24/7', 'Projets illimités', 'Contenu premium', 'Tutoriels exclusifs']
    },
  ];
  
  const [selectedPlan, setSelectedPlan] = useState(plans[1].name);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Soumission du formulaire
    alert(`Inscription réussie pour le plan ${selectedPlan} !`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-indigo-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Section illustrée */}
        <div className="bg-gradient-to-br from-teal-500 to-indigo-600 text-white p-8 md:w-2/5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold mb-4">Rejoignez notre communauté</h1>
            <p className="mb-6 opacity-90">Accédez à des contenus exclusifs et développez vos compétences</p>
            
            <motion.div 
              className="flex justify-center mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-indigo-400 opacity-30 absolute -top-4 -left-4"></div>
                <div className="w-48 h-48 rounded-full bg-teal-400 opacity-30 absolute -bottom-4 -right-4"></div>
                <div className="w-40 h-40 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
            </motion.div>
            
            <div className="space-y-3 text-left">
              {plans[1].features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-200" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Formulaire */}
        <motion.div 
          className="p-8 md:p-10 md:w-3/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Créez votre compte
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Commencez votre parcours d'apprentissage
          </p>
          
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-0 rounded-lg bg-gray-50 focus:ring-2 focus:ring-teal-500 focus:bg-white focus:outline-none transition-all peer"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-4 top-3 text-gray-500 pointer-events-none transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-xs peer-focus:text-teal-600"
                >
                  Nom complet
                </label>
              </div>
              
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-0 rounded-lg bg-gray-50 focus:ring-2 focus:ring-teal-500 focus:bg-white focus:outline-none transition-all peer"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-4 top-3 text-gray-500 pointer-events-none transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-xs peer-focus:text-teal-600"
                >
                  Adresse email
                </label>
              </div>
              
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  placeholder=" "
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-0 rounded-lg bg-gray-50 focus:ring-2 focus:ring-teal-500 focus:bg-white focus:outline-none transition-all peer"
                />
                <label 
                  htmlFor="password" 
                  className="absolute left-4 top-3 text-gray-500 pointer-events-none transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-xs peer-focus:text-teal-600"
                >
                  Mot de passe
                </label>
              </div>
              
              <div className="relative">
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder=" "
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-0 rounded-lg bg-gray-50 focus:ring-2 focus:ring-teal-500 focus:bg-white focus:outline-none transition-all peer"
                />
                <label 
                  htmlFor="confirmPassword" 
                  className="absolute left-4 top-3 text-gray-500 pointer-events-none transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-xs peer-focus:text-teal-600"
                >
                  Confirmer le mot de passe
                </label>
              </div>
            </div>
            
            {/* Sélection d'abonnement */}
            <div>
              <p className="text-gray-700 mb-3 font-medium">Choisissez votre abonnement :</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {plans.map(plan => (
                  <motion.div
                    key={plan.name}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`cursor-pointer border rounded-xl p-4 transition-all ${
                      selectedPlan === plan.name 
                        ? 'border-teal-500 bg-teal-50 shadow-md' 
                        : 'border-gray-200 hover:border-teal-300'
                    }`}
                    onClick={() => setSelectedPlan(plan.name)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`font-semibold ${
                          selectedPlan === plan.name ? 'text-teal-700' : 'text-gray-800'
                        }`}>
                          {plan.name}
                        </h3>
                        <p className="text-lg font-bold text-gray-800 mt-1">{plan.price}</p>
                      </div>
                      {selectedPlan === plan.name && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="bg-teal-500 rounded-full p-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                    <div className="mt-3">
                      <ul className="text-xs text-gray-600 space-y-1">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-teal-500 mr-1.5 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Affichage du prix */}
            <motion.div 
              className="mt-2 text-center text-lg font-semibold text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={selectedPlan}
            >
              Vous avez choisi : <span className="text-teal-600">{selectedPlan}</span>
            </motion.div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-600">
                  J'accepte les <a href="#" className="text-teal-600 hover:underline">conditions d'utilisation</a> et la <a href="#" className="text-teal-600 hover:underline">politique de confidentialité</a>
                </label>
              </div>
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={!formData.terms}
              className={`w-full mt-2 py-3 font-bold rounded-lg text-white transition-all ${
                formData.terms 
                  ? 'bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 shadow-lg hover:shadow-xl' 
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              <span className="flex items-center justify-center">
                S'inscrire et payer
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.button>
            
            <p className="text-center text-sm text-gray-600 mt-4">
              Vous avez déjà un compte ? <Link to="/Login" className="text-teal-600 font-medium hover:underline">Se connecter</Link>
            </p>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}