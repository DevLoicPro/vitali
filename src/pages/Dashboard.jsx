// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserPlus, BookOpen, Users, FileText, 
  Search, BarChart2, ChevronDown, Filter, 
  Download, Plus, Activity, Bookmark, 
  UserCheck, X, Menu, ArrowLeft, ArrowRight,
  PieChart, Calendar, File
} from 'lucide-react';

export default function AdminDashboard() {
  const sections = [
    { name: 'Utilisateurs', icon: Users, count: 1242 },
    { name: 'Cours', icon: BookOpen, count: 45 },
    { name: 'Statistiques', icon: BarChart2, count: null }
  ];
  
  const [activeSection, setActiveSection] = useState(sections[0].name);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newAdminMenuOpen, setNewAdminMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-gray-50 to-gray-100'} p-4 md:p-8 flex flex-col transition-colors duration-300`}>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4"
      >
        <div className="flex items-center w-full md:w-auto">
          <button 
            className="md:hidden mr-4 p-2 rounded-lg bg-white dark:bg-gray-800 shadow"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={20} className="dark:text-gray-300" />
          </button>
          <h1 className="text-2xl md:text-3xl font-bold flex items-center">
            <Activity className="text-green-600 mr-2" />
            <span className={darkMode ? 'text-white' : 'text-gray-800'}>Dashboard Admin</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <div className="relative">
            <button
              className="flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full hover:opacity-90 transition-all shadow-lg"
              onClick={() => setNewAdminMenuOpen(!newAdminMenuOpen)}
            >
              <UserPlus className="mr-2" size={18} />
              Nouvel Admin
              <ChevronDown className="ml-2" size={16} />
            </button>
            
            <AnimatePresence>
              {newAdminMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl z-10 overflow-hidden border dark:border-gray-700"
                >
                  <button className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center">
                    <UserPlus className="mr-2 text-green-600" size={16} />
                    <span className="dark:text-gray-300">Administrateur</span>
                  </button>
                  <button className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center">
                    <UserCheck className="mr-2 text-blue-600" size={16} />
                    <span className="dark:text-gray-300">Formateur</span>
                  </button>
                  <button className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center">
                    <Bookmark className="mr-2 text-purple-600" size={16} />
                    <span className="dark:text-gray-300">Élève</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mb-6 bg-white dark:bg-gray-800 rounded-2xl shadow overflow-hidden border dark:border-gray-700"
          >
            <div className="p-4 flex justify-between items-center border-b dark:border-gray-700">
              <h2 className="font-bold dark:text-gray-300">Navigation</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={20} className="dark:text-gray-400" />
              </button>
            </div>
            <ul className="p-2">
              {sections.map((section) => (
                <li key={section.name}>
                  <button
                    onClick={() => {
                      setActiveSection(section.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition flex items-center
                      ${activeSection === section.name
                        ? 'bg-green-100 dark:bg-emerald-900 text-green-700 dark:text-emerald-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}
                    `}
                  >
                    <section.icon className="mr-3" size={18} />
                    {section.name}
                    {section.count !== null && (
                      <span className={`ml-auto text-xs font-bold px-2 py-1 rounded-full ${
                        activeSection === section.name 
                          ? 'bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400' 
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}>
                        {section.count}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex flex-1 gap-4 md:gap-6">
        {/* Sidebar */}
        <motion.nav 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block w-1/4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 h-fit sticky top-6 border dark:border-gray-700"
        >
          <div className="mb-4">
            <h3 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 tracking-wider mb-2">
              Tableau de bord
            </h3>
          </div>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.name}>
                <button
                  onClick={() => setActiveSection(section.name)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all flex items-center
                    ${activeSection === section.name
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-sm'}
                  `}
                >
                  <section.icon className="mr-3" size={18} />
                  {section.name}
                  {section.count !== null && (
                    <span className={`ml-auto text-xs font-bold px-2 py-1 rounded-full ${
                      activeSection === section.name 
                        ? 'bg-white text-emerald-600' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}>
                      {section.count}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Stats summary */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 tracking-wider mb-3">
              Statistiques rapides
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Utilisateurs actifs</span>
                <span className="font-bold dark:text-gray-300">1,024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Cours complétés</span>
                <span className="font-bold dark:text-gray-300">3,247</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Taux d'engagement</span>
                <span className="font-bold text-green-600 dark:text-emerald-400">78%</span>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Main Content */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border dark:border-gray-700"
        >
          {activeSection === 'Utilisateurs' && <UsersSection darkMode={darkMode} />}
          {activeSection === 'Cours' && <CoursesSectionAdmin darkMode={darkMode} />}
          {activeSection === 'Statistiques' && <StatsSection darkMode={darkMode} />}
        </motion.div>
      </div>
    </div>
  );
}

function UsersSection({ darkMode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Tous');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  const roles = ['Tous', 'Élève', 'Formateur', 'Admin'];
  const users = [
    { name: 'Alice Dupont', email: 'alice@vitali.com', role: 'Élève', status: 'active', lastActive: '2h ago', joined: '12/05/2024' },
    { name: 'Bob Martin', email: 'bob@vitali.com', role: 'Formateur', status: 'active', lastActive: 'Aujourd\'hui', joined: '21/04/2024' },
    { name: 'Charlie Bernard', email: 'charlie@vitali.com', role: 'Admin', status: 'active', lastActive: '5m ago', joined: '02/03/2024' },
    { name: 'Diana Ross', email: 'diana@vitali.com', role: 'Élève', status: 'inactive', lastActive: '1 semaine', joined: '30/04/2024' },
    { name: 'Emma Watson', email: 'emma@vitali.com', role: 'Élève', status: 'active', lastActive: 'Hier', joined: '15/05/2024' },
    { name: 'Frank Ocean', email: 'frank@vitali.com', role: 'Formateur', status: 'active', lastActive: '3h ago', joined: '08/04/2024' },
    { name: 'Grace Kelly', email: 'grace@vitali.com', role: 'Admin', status: 'inactive', lastActive: '2 semaines', joined: '22/02/2024' },
  ];
  
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'Tous' || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className={`text-2xl font-semibold flex items-center ${darkMode ? 'text-white' : ''}`}>
            <Users className="mr-2 text-green-600" />
            Gestion des Utilisateurs
          </h2>
          <p className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {filteredUsers.length} utilisateurs trouvés • Page {currentPage} sur {totalPages}
          </p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="text-gray-400" size={18} />
            </div>
            <input
              type="text"
              placeholder="Rechercher utilisateurs..."
              className={`w-full pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:ring-2 ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white focus:ring-emerald-500' 
                  : 'border focus:ring-green-200'
              }`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <button 
              className={`flex items-center px-3 py-2 rounded-xl transition ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' 
                  : 'border hover:bg-gray-50'
              } ${filtersOpen ? 'bg-green-50 border-green-300 dark:bg-emerald-900/50' : ''}`}
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <Filter className="mr-1" size={18} />
              <span className="hidden md:inline">Filtres</span>
            </button>
            
            <AnimatePresence>
              {filtersOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`absolute right-0 mt-2 w-48 rounded-xl shadow-lg z-10 ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border'
                  }`}
                >
                  <div className="p-3 border-b dark:border-gray-700">
                    <h4 className="text-sm font-medium dark:text-gray-300">Filtrer par rôle</h4>
                  </div>
                  <div className="p-2">
                    {roles.map(role => (
                      <button
                        key={role}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                          selectedRole === role 
                            ? 'bg-green-100 text-green-700 font-medium dark:bg-emerald-900 dark:text-emerald-300' 
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'
                        }`}
                        onClick={() => {
                          setSelectedRole(role);
                          setFiltersOpen(false);
                        }}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <button className="flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-xl hover:opacity-90 transition">
            <Plus className="mr-1" size={18} />
            <span className="hidden md:inline">Ajouter</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className={`overflow-x-auto rounded-xl ${darkMode ? 'bg-gray-800' : 'border'}`}>
        <table className="w-full">
          <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold dark:text-gray-300">Utilisateur</th>
              <th className="py-3 px-4 text-left text-sm font-semibold dark:text-gray-300">Rôle</th>
              <th className="py-3 px-4 text-left text-sm font-semibold dark:text-gray-300">Statut</th>
              <th className="py-3 px-4 text-left text-sm font-semibold dark:text-gray-300">Inscription</th>
              <th className="py-3 px-4 text-left text-sm font-semibold dark:text-gray-300">Dernière activité</th>
              <th className="py-3 px-4 text-right text-sm font-semibold dark:text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
            {currentUsers.map((user, idx) => (
              <tr key={idx} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition`}>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className={`${darkMode ? 'bg-gray-600' : 'bg-gray-200'} border-2 border-dashed rounded-xl w-10 h-10`} />
                    <div className="ml-3">
                      <div className={`font-medium ${darkMode ? 'text-white' : ''}`}>{user.name}</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.role === 'Admin' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300' :
                    user.role === 'Formateur' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' :
                    'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center text-sm ${
                    user.status === 'active' ? 'text-green-600 dark:text-emerald-400' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    <span className={`w-2 h-2 rounded-full mr-2 ${
                      user.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                    }`}></span>
                    {user.status === 'active' ? 'Actif' : 'Inactif'}
                  </span>
                </td>
                <td className={`py-3 px-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {user.joined}
                </td>
                <td className={`py-3 px-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {user.lastActive}
                </td>
                <td className="py-3 px-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-blue-900/50' : 'hover:bg-blue-50'} text-blue-600 dark:text-blue-400`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-red-900/50' : 'hover:bg-red-50'} text-red-600 dark:text-red-400`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Affichage de {indexOfFirstItem + 1} à {Math.min(indexOfLastItem, filteredUsers.length)} sur {filteredUsers.length} entrées
        </div>
        <div className="flex gap-2">
          <button 
            className={`px-3 py-1 rounded-lg flex items-center ${
              currentPage === 1 
                ? 'opacity-50 cursor-not-allowed' 
                : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
            } ${darkMode ? 'border-gray-700' : 'border'}`}
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ArrowLeft size={16} className="mr-1" />
            Précédent
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`px-3 py-1 rounded-lg text-sm ${
                page === currentPage
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                  : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
              } ${darkMode ? 'border-gray-700' : 'border'}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          
          <button 
            className={`px-3 py-1 rounded-lg flex items-center ${
              currentPage === totalPages 
                ? 'opacity-50 cursor-not-allowed' 
                : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
            } ${darkMode ? 'border-gray-700' : 'border'}`}
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            Suivant
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

function CoursesSectionAdmin({ darkMode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const categories = ['Toutes', 'Science', 'Santé', 'Environnement', 'Technologie'];
  
  const courses = [
    { 
      title: 'Biologie Intro', 
      category: 'Science', 
      students: 342, 
      progress: 78,
      duration: '4 semaines',
      lessons: 12,
      lastUpdate: '15/05/2024'
    },
    { 
      title: 'Éco-responsabilité', 
      category: 'Environnement', 
      students: 215, 
      progress: 65,
      duration: '6 semaines',
      lessons: 18,
      lastUpdate: '22/04/2024'
    },
    { 
      title: 'Hygiène de base', 
      category: 'Santé', 
      students: 478, 
      progress: 92,
      duration: '3 semaines',
      lessons: 9,
      lastUpdate: '30/04/2024'
    },
    { 
      title: 'Nutrition Avancée', 
      category: 'Santé', 
      students: 156, 
      progress: 45,
      duration: '8 semaines',
      lessons: 24,
      lastUpdate: '10/05/2024'
    },
    { 
      title: 'Chimie Organique', 
      category: 'Science', 
      students: 198, 
      progress: 32,
      duration: '10 semaines',
      lessons: 30,
      lastUpdate: '05/05/2024'
    },
    { 
      title: 'IA pour Débutants', 
      category: 'Technologie', 
      students: 421, 
      progress: 87,
      duration: '12 semaines',
      lessons: 36,
      lastUpdate: '18/05/2024'
    },
  ];
  
const filteredCourses = courses.filter(course => 
  course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
  (selectedCategory === 'Toutes' || course.category === selectedCategory)
);

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className={`text-2xl font-semibold flex items-center ${darkMode ? 'text-white' : ''}`}>
            <BookOpen className="mr-2 text-green-600" />
            Gestion des Cours
          </h2>
          <p className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {filteredCourses.length} cours disponibles • {selectedCategory !== 'Toutes' && `Catégorie: ${selectedCategory}`}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="text-gray-400" size={18} />
            </div>
            <input
              type="text"
              placeholder="Rechercher des cours..."
              className={`w-full pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:ring-2 ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white focus:ring-emerald-500' 
                  : 'border focus:ring-green-200'
              }`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`w-full px-4 py-2 rounded-xl appearance-none ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'border'
              }`}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <ChevronDown size={16} />
            </div>
          </div>
          
          <button className="flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-xl hover:opacity-90 transition">
            <Plus className="mr-1" size={18} />
            <span>Nouveau cours</span>
          </button>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredCourses.map((course, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className={`border rounded-2xl overflow-hidden ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
            } transition-all duration-300 hover:shadow-lg`}
          >
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} border-2 border-dashed w-full h-40`} />
            
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : ''}`}>{course.title}</h3>
                  <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {course.category} • {course.duration}
                  </p>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  course.progress > 70 
                    ? 'bg-green-100 text-green-800 dark:bg-emerald-900/50 dark:text-emerald-300' 
                    : course.progress > 40 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' 
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300'
                }`}>
                  {course.progress}% complété
                </span>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Étudiants inscrits</span>
                  <span className={darkMode ? 'text-gray-300' : ''}>{course.students}</span>
                </div>
                <div className={`w-full rounded-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div 
                    className={`h-2 rounded-full ${
                      course.progress > 70 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                        : course.progress > 40 
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-500' 
                          : 'bg-gradient-to-r from-amber-500 to-orange-500'
                    }`} 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="mt-4 flex gap-3 text-sm">
                <div className="flex items-center">
                  <BookOpen size={14} className="mr-1 text-gray-500" />
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{course.lessons} leçons</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1 text-gray-500" />
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Maj: {course.lastUpdate}</span>
                </div>
              </div>
              
              <div className="mt-4 flex gap-2">
                <button className={`flex-1 py-2 text-sm rounded-lg ${
                  darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'border hover:bg-gray-50'
                } transition`}>
                  Éditer
                </button>
                <button className="flex-1 py-2 text-sm rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90 transition">
                  Prévisualiser
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function StatsSection({ darkMode }) {
  // Simuler des données pour les graphiques
  const userActivityData = [65, 59, 80, 81, 56, 55, 40];
  const maxActivity = Math.max(...userActivityData);
  
  const courseDistribution = [
    { name: 'Science', value: 35, color: 'bg-green-500' },
    { name: 'Santé', value: 28, color: 'bg-blue-500' },
    { name: 'Environnement', value: 22, color: 'bg-purple-500' },
    { name: 'Technologie', value: 15, color: 'bg-amber-500' },
  ];

  return (
    <div className="p-6">
      <h2 className={`text-2xl font-semibold mb-6 flex items-center ${darkMode ? 'text-white' : ''}`}>
        <BarChart2 className="mr-2 text-green-600" />
        Tableau de Statistiques
      </h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className={`p-5 rounded-2xl border ${
            darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-100'
          }`}
        >
          <div className={`text-3xl font-bold ${darkMode ? 'text-emerald-400' : 'text-green-700'}`}>1,242</div>
          <div className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Utilisateurs inscrits</div>
          <div className={`flex items-center text-sm mt-2 ${darkMode ? 'text-emerald-400' : 'text-green-600'}`}>
            <span>↑ 12.4%</span>
            <span className="ml-2">depuis hier</span>
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className={`p-5 rounded-2xl border ${
            darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100'
          }`}
        >
          <div className={`text-3xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>45</div>
          <div className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Cours disponibles</div>
          <div className={`flex items-center text-sm mt-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            <span>↑ 3 nouveaux</span>
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className={`p-5 rounded-2xl border ${
            darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' : 'bg-gradient-to-br from-purple-50 to-violet-50 border-purple-100'
          }`}
        >
          <div className={`text-3xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>3,247</div>
          <div className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Cours complétés</div>
          <div className={`flex items-center text-sm mt-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
            <span>↑ 8.7%</span>
            <span className="ml-2">cette semaine</span>
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className={`p-5 rounded-2xl border ${
            darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' : 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-100'
          }`}
        >
          <div className={`text-3xl font-bold ${darkMode ? 'text-amber-400' : 'text-amber-700'}`}>78%</div>
          <div className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Taux d'engagement</div>
          <div className={`flex items-center text-sm mt-2 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>
            <span>↑ 2.1%</span>
            <span className="ml-2">ce mois</span>
          </div>
        </motion.div>
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className={`p-5 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <h3 className={`font-semibold text-lg mb-4 ${darkMode ? 'text-white' : ''}`}>
            Activité des utilisateurs (7 jours)
          </h3>
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} h-64`}>
            <div className="flex items-end justify-between h-full pt-4">
              {userActivityData.map((height, idx) => {
                const barHeight = (height / maxActivity) * 70;
                return (
                  <div key={idx} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-6 bg-gradient-to-t from-green-500 to-emerald-500 rounded-t"
                      style={{ height: `${barHeight}%` }}
                    ></div>
                    <div className="text-xs mt-2 dark:text-gray-400">
                      {['L', 'M', 'M', 'J', 'V', 'S', 'D'][idx]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className={`p-5 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <h3 className={`font-semibold text-lg mb-4 ${darkMode ? 'text-white' : ''}`}>
            Répartition des cours
          </h3>
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} h-64 flex flex-col md:flex-row items-center justify-center`}>
            <div className="relative w-40 h-40">
              {/* Pie chart */}
              <div className="absolute inset-0 rounded-full border-[20px] border-green-500"></div>
              <div 
                className="absolute inset-0 rounded-full border-[20px] border-blue-500"
                style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 0)' }}
              ></div>
              <div 
                className="absolute inset-0 rounded-full border-[20px] border-purple-500"
                style={{ clipPath: 'polygon(50% 50%, 100% 100%, 50% 100%)' }}
              ></div>
              <div 
                className="absolute inset-0 rounded-full border-[20px] border-amber-500"
                style={{ clipPath: 'polygon(50% 50%, 0 100%, 0 50%)' }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <PieChart className="text-gray-400" size={24} />
              </div>
            </div>
            
            <div className="ml-0 md:ml-8 mt-4 md:mt-0">
              {courseDistribution.map((item, idx) => (
                <div key={idx} className="flex items-center mb-3">
                  <div className={`w-3 h-3 ${item.color} rounded-full mr-2`}></div>
                  <span className="text-sm dark:text-gray-300">{item.name}</span>
                  <span className="ml-auto text-sm font-medium dark:text-gray-300">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Export Section */}
      <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row justify-between items-center ${
        darkMode 
          ? 'bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700' 
          : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200'
      }`}>
        <div>
          <h3 className={`font-semibold ${darkMode ? 'text-white' : ''}`}>Exporter les données</h3>
          <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Téléchargez les statistiques complètes au format CSV ou Excel
          </p>
        </div>
        <div className="flex gap-3 mt-4 sm:mt-0">
          <button className={`flex items-center px-4 py-2 rounded-xl transition ${
            darkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600 text-white' : 'bg-white border hover:bg-gray-50'
          }`}>
            <File className="mr-2" size={16} />
            Format CSV
          </button>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:opacity-90 transition">
            <Download className="mr-2" size={16} />
            Format Excel
          </button>
        </div>
      </div>
    </div>
  );
}