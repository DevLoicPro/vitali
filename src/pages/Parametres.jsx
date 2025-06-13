import React, { useState, useEffect } from "react";

const mockUserData = {
  username: "loic_vitali",
  email: "loic@example.com",
  subscriptionExpiry: "2025-12-31",
  coursesEnrolled: 5,
  quizzesTaken: 12,
  exercisesCompleted: 24,
  notificationsEnabled: true,
  darkMode: false,
};

const Parametres = () => {
  const [user, setUser] = useState(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    // Simuler récupération des données user (API ou localStorage)
    setUser(mockUserData);
    setNotificationsEnabled(mockUserData.notificationsEnabled);
    setDarkMode(mockUserData.darkMode);
    setUserInfo({
      username: mockUserData.username,
      email: mockUserData.email,
    });
  }, []);

  const handleSaveChanges = () => {
    setUser({
      ...user,
      username: userInfo.username,
      email: userInfo.email,
    });
    setIsEditing(false);
  };

  // Calcul du nombre de jours restants à partir de la date d'expiration
  const calculateDaysLeft = (dateStr) => {
    const today = new Date();
    const expiryDate = new Date(dateStr);
    const diffTime = expiryDate - today;
    return Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);
  };

  if (!user)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-vitali-primary"></div>
      </div>
    );

  const daysLeft = calculateDaysLeft(user.subscriptionExpiry);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <div className="relative bg-gradient-to-r from-teal-500 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden mb-10 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
  {/* Effets visuels */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-500/20"></div>
  <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-indigo-500/20"></div>
  
  <div className="relative p-8 md:p-10 z-10">
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
      <div className="flex-1 mb-6 lg:mb-0">
        <div className="flex items-center">
          <div className="mr-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Paramètres de l'élève</h1>
            <p className="text-indigo-100 mt-2 max-w-lg">
              Personnalisez votre expérience d'apprentissage et gérez vos informations personnelles
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
        <div className="relative">
          <div className="bg-gradient-to-r bg-gradient-to-r from-teal-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-md">
            {user.username.charAt(0).toUpperCase()}
          </div>
          <div className="absolute -bottom-2 -right-2 bg-green-400 border-2 border-white rounded-full w-5 h-5"></div>
        </div>
        <div className="ml-4">
          <p className="text-white font-semibold text-lg flex items-center">
            {user.username}
            <span className="ml-2 bg-indigo-800 text-indigo-100 text-xs px-2 py-1 rounded-full">Élève</span>
          </p>
          <p className="text-indigo-200 text-sm mt-1 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            {user.email}
          </p>
        </div>
      </div>
    </div>
    
    <div className="mt-8 pt-6 border-t border-white/20">
      <div className="flex flex-wrap gap-3">
        {['Profil complet', 'Sécurité', 'Notifications', 'Préférences'].map((item, index) => (
          <span 
            key={index} 
            className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium cursor-pointer transition-all hover:bg-white/20"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Colonne de gauche */}
        <div className="lg:col-span-2 space-y-8">
          {/* Section infos utilisateur */}
          <section className="bg-white rounded-2xl shadow-lg p-6 transition-all hover:shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-vitali-dark">
                <span className="bg-vitali-primary w-3 h-3 rounded-full inline-block mr-2"></span>
                Informations personnelles
              </h2>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="text-vitali-primary hover:text-vitali-secondary font-medium flex items-center"
              >
                {isEditing ? (
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Annuler
                  </span>
                ) : (
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    Modifier
                  </span>
                )}
              </button>
            </div>
            
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom d'utilisateur
                  </label>
                  <input
                    type="text"
                    value={userInfo.username}
                    onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vitali-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vitali-primary focus:border-transparent"
                  />
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleSaveChanges}
                    className="bg-vitali-primary hover:bg-vitali-secondary text-white font-medium py-2 px-6 rounded-lg transition-colors"
                  >
                    Enregistrer les modifications
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center py-2 border-b border-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vitali-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Nom d'utilisateur</p>
                    <p className="font-medium">{user.username}</p>
                  </div>
                </div>
                
                <div className="flex items-center py-2 border-b border-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vitali-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vitali-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Abonnement</p>
                    <p className={`font-semibold ${daysLeft > 15 ? "text-green-600" : daysLeft > 5 ? "text-yellow-600" : "text-red-600"}`}>
                      {daysLeft} jour{daysLeft > 1 ? "s" : ""} restant{daysLeft > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Section statistiques */}
          <section className="bg-white rounded-2xl shadow-lg p-6 transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-vitali-dark mb-6">
              <span className="bg-vitali-primary w-3 h-3 rounded-full inline-block mr-2"></span>
              Statistiques d'apprentissage
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-gradient-to-br from-blue-50 to-vitali-soft p-5 rounded-xl border border-blue-100 flex flex-col items-center">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <p className="text-4xl font-extrabold text-vitali-primary">{user.coursesEnrolled}</p>
                <p className="mt-2 font-semibold text-gray-700">Cours suivis</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-vitali-soft p-5 rounded-xl border border-green-100 flex flex-col items-center">
                <div className="bg-green-100 p-3 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <p className="text-4xl font-extrabold text-vitali-primary">{user.quizzesTaken}</p>
                <p className="mt-2 font-semibold text-gray-700">Quiz réalisés</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-vitali-soft p-5 rounded-xl border border-purple-100 flex flex-col items-center">
                <div className="bg-purple-100 p-3 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <p className="text-4xl font-extrabold text-vitali-primary">{user.exercisesCompleted}</p>
                <p className="mt-2 font-semibold text-gray-700">Exercices terminés</p>
              </div>
            </div>
          </section>
        </div>
        
        {/* Colonne de droite */}
        <div className="space-y-8">
          {/* Section préférences */}
          <section className="bg-white rounded-2xl shadow-lg p-6 transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-vitali-dark mb-6">
              <span className="bg-vitali-primary w-3 h-3 rounded-full inline-block mr-2"></span>
              Préférences
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vitali-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <div>
                    <p className="font-medium">Activer les notifications</p>
                    <p className="text-sm text-gray-500">Recevoir des alertes et mises à jour</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={notificationsEnabled}
                    onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-vitali-primary"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vitali-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <div>
                    <p className="font-medium">Mode sombre</p>
                    <p className="text-sm text-gray-500">Interface en thème sombre</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-vitali-primary"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vitali-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium">Rapports hebdomadaires</p>
                    <p className="text-sm text-gray-500">Recevoir un résumé hebdomadaire</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-vitali-primary"></div>
                </label>
              </div>
            </div>
          </section>
          
          {/* Section sécurité */}
          <section className="bg-white rounded-2xl shadow-lg p-6 transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-vitali-dark mb-6">
              <span className="bg-vitali-primary w-3 h-3 rounded-full inline-block mr-2"></span>
              Sécurité
            </h2>
            
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vitali-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  <span className="font-medium">Changer le mot de passe</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vitali-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="font-medium">Authentification à deux facteurs</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vitali-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="font-medium">Sessions actives</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </section>
          
          {/* Bouton de déconnexion */}
          <button className="w-full flex items-center justify-center p-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-xl shadow-lg transition-all transform hover:scale-[1.02]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
            </svg>
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parametres;