// src/pages/AdminDashboard.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserPlus, BookOpen, Users, FileText,
  Search, BarChart2, ChevronDown, Filter,
  Download, Plus, Activity, Bookmark,
  UserCheck, X, Menu, ArrowLeft, ArrowRight,
  PieChart, Calendar, File, Eye, Book, List, 
  HelpCircle, Video, Image, FileText as FileDoc, FileUp
} from 'lucide-react';

export default function AdminDashboard() {
  const sections = [
    { name: 'Utilisateurs', icon: Users, count: 1242 },
    { name: 'Classes', icon: BookOpen, count: 45 },
    { name: 'Statistiques', icon: BarChart2, count: null }
  ];

  const [activeSection, setActiveSection] = useState(sections[0].name);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [classView, setClassView] = useState('list'); // 'list', 'create', 'preview', 'lessons'
  const [selectedClass, setSelectedClass] = useState(null);
  const [statsView, setStatsView] = useState('main'); // 'main', 'history'

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fonctions pour les actions
  const handleAddUser = () => {
    alert('Action: Ajouter un utilisateur');
  };

  const handleEditUser = (userEmail) => {
    alert(`Action: Éditer l'utilisateur ${userEmail}`);
  };

  const handleDeleteUser = (userEmail) => {
    if (confirm(`Êtes-vous sûr de vouloir supprimer l'utilisateur ${userEmail}?`)) {
      alert(`Action: Supprimer l'utilisateur ${userEmail}`);
    }
  };

  const handleCreateClass = () => {
    setClassView('create');
  };

  const handlePreviewClass = (classData) => {
    setSelectedClass(classData);
    setClassView('preview');
  };

  const handleManageLessons = (classData) => {
    setSelectedClass(classData);
    setClassView('lessons');
  };

  const handleExport = (format, section) => {
    alert(`Exportation des ${section} en format ${format.toUpperCase()}`);
  };

  const handleViewHistory = () => {
    setStatsView('history');
  };

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
                      setClassView('list');
                      setStatsView('main');
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
                  onClick={() => {
                    setActiveSection(section.name);
                    setClassView('list');
                    setStatsView('main');
                  }}
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
          {activeSection === 'Utilisateurs' && 
            <UsersSection 
              darkMode={darkMode} 
              onAddUser={handleAddUser} 
              onEditUser={handleEditUser} 
              onDeleteUser={handleDeleteUser}
              onExport={(format) => handleExport(format, 'utilisateurs')}
            />
          }
          
          {activeSection === 'Classes' && 
            (classView === 'list' ? 
              <ClassesSection 
                darkMode={darkMode} 
                onCreateClass={handleCreateClass} 
                onPreviewClass={handlePreviewClass} 
                onManageLessons={handleManageLessons}
                onExport={(format) => handleExport(format, 'classes')}
              /> : 
              classView === 'create' ? 
                <CreateClassForm darkMode={darkMode} onCancel={() => setClassView('list')} /> : 
              classView === 'preview' ? 
                <PreviewClass darkMode={darkMode} classData={selectedClass} onBack={() => setClassView('list')} /> : 
              classView === 'lessons' ? 
                <ClassLessonsManager darkMode={darkMode} classData={selectedClass} onBack={() => setClassView('list')} /> : 
                null
            )
          }
          
          {activeSection === 'Statistiques' && 
            (statsView === 'main' ? 
              <StatsSection darkMode={darkMode} onViewHistory={handleViewHistory} /> : 
              <FullHistory darkMode={darkMode} onBack={() => setStatsView('main')} />
            )
          }
        </motion.div>
      </div>
    </div>
  );
}

function UsersSection({ darkMode, onAddUser, onEditUser, onDeleteUser, onExport }) {
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
    { name: 'Henry Ford', email: 'henry@vitali.com', role: 'Élève', status: 'active', lastActive: '1 day ago', joined: '01/06/2024' },
    { name: 'Ivy League', email: 'ivy@vitali.com', role: 'Formateur', status: 'inactive', lastActive: '3 days ago', joined: '10/03/2024' },
    { name: 'Jack Black', email: 'jack@vitali.com', role: 'Élève', status: 'active', lastActive: 'Now', joined: '05/05/2024' },
    { name: 'Karen White', email: 'karen@vitali.com', role: 'Admin', status: 'active', lastActive: '1 hour ago', joined: '15/01/2024' },
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

          <div className="relative">
            <button
              className={`flex items-center px-3 py-2 rounded-xl transition ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 hover:bg-gray-600'
                  : 'border hover:bg-gray-50'
              }`}
            >
              <Download className="mr-1" size={18} />
              <span className="hidden md:inline">Exporter</span>
            </button>
            <div className={`absolute right-0 mt-1 w-40 rounded-xl shadow-lg z-10 ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border'
            }`}>
              <div className="p-2">
                <button
                  className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
                  onClick={() => onExport('excel')}
                >
                  Excel (.xlsx)
                </button>
                <button
                  className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
                  onClick={() => onExport('pdf')}
                >
                  PDF
                </button>
              </div>
            </div>
          </div>

          <button
            className="flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
            onClick={onAddUser}
          >
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
                    <button
                      className={`p-2 rounded-lg ${darkMode ? 'hover:bg-blue-900/50' : 'hover:bg-blue-50'} text-blue-600 dark:text-blue-400`}
                      onClick={() => onEditUser(user.email)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button
                      className={`p-2 rounded-lg ${darkMode ? 'hover:bg-red-900/50' : 'hover:bg-red-50'} text-red-600 dark:text-red-400`}
                      onClick={() => onDeleteUser(user.email)}
                    >
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

function ClassesSection({ darkMode, onCreateClass, onPreviewClass, onManageLessons, onExport }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('Tous');
  const [exportMenuOpen, setExportMenuOpen] = useState(false);
  const levels = ['Tous', 'Seconde', 'Première', 'Terminale'];

  const classes = [
    {
      id: 1,
      title: 'Biologie Seconde',
      level: 'Seconde',
      stream: 'Scientifique',
      students: 30,
      progress: 78,
      duration: '4 semaines',
      lessons: 12,
      lastUpdate: '15/05/2024',
      subject: 'Science SVT',
      lessonsList: [
        { id: 1, type: 'cours', title: 'Introduction à la cellule', files: [] },
        { id: 2, type: 'exercice', title: 'Exercice sur la cellule', files: [] },
        { id: 3, type: 'quiz', title: 'Quiz de la leçon 1', files: [] }
      ]
    },
    {
      id: 2,
      title: 'Physique Terminale S',
      level: 'Terminale',
      stream: 'Scientifique',
      students: 28,
      progress: 65,
      duration: '6 semaines',
      lessons: 18,
      lastUpdate: '22/04/2024',
      subject: 'Physique',
      lessonsList: [
        { id: 1, type: 'cours', title: 'Mécanique quantique', files: [] },
        { id: 2, type: 'exercice', title: 'Problèmes de mécanique', files: [] }
      ]
    },
    {
      id: 3,
      title: 'Littérature Terminale L',
      level: 'Terminale',
      stream: 'Littéraire',
      students: 25,
      progress: 92,
      duration: '3 semaines',
      lessons: 9,
      lastUpdate: '30/04/2024',
      subject: 'Français',
      lessonsList: [
        { id: 1, type: 'cours', title: 'Le romantisme français', files: [] },
        { id: 2, type: 'exercice', title: 'Analyse de texte', files: [] }
      ]
    },
    {
      id: 4,
      title: 'Mathématiques Première S',
      level: 'Première',
      stream: 'Scientifique',
      students: 35,
      progress: 45,
      duration: '8 semaines',
      lessons: 24,
      lastUpdate: '10/05/2024',
      subject: 'Mathématiques',
      lessonsList: [
        { id: 1, type: 'cours', title: 'Algèbre linéaire', files: [] },
        { id: 2, type: 'quiz', title: 'Quiz algèbre', files: [] }
      ]
    },
    {
      id: 5,
      title: 'Histoire-Géo Seconde',
      level: 'Seconde',
      stream: 'Général',
      students: 42,
      progress: 32,
      duration: '10 semaines',
      lessons: 30,
      lastUpdate: '05/05/2024',
      subject: 'Histoire',
      lessonsList: [
        { id: 1, type: 'cours', title: 'La révolution française', files: [] }
      ]
    },
    {
      id: 6,
      title: 'Chimie Première S',
      level: 'Première',
      stream: 'Scientifique',
      students: 38,
      progress: 87,
      duration: '12 semaines',
      lessons: 36,
      lastUpdate: '18/05/2024',
      subject: 'Chimie',
      lessonsList: [
        { id: 1, type: 'cours', title: 'Réactions chimiques', files: [] }
      ]
    },
    {
      id: 7,
      title: 'Philosophie Terminale L',
      level: 'Terminale',
      stream: 'Littéraire',
      students: 22,
      progress: 75,
      duration: '15 semaines',
      lessons: 42,
      lastUpdate: '20/05/2024',
      subject: 'Philosophie',
      lessonsList: [
        { id: 1, type: 'cours', title: 'Les grands penseurs', files: [] }
      ]
    },
  ];

  const filteredClasses = classes.filter(cls =>
    cls.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedLevel === 'Tous' || cls.level === selectedLevel)
  );

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className={`text-2xl font-semibold flex items-center ${darkMode ? 'text-white' : ''}`}>
            <BookOpen className="mr-2 text-green-600" />
            Gestion des Classes (2nde à Terminale)
          </h2>
          <p className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {filteredClasses.length} classes disponibles • {selectedLevel !== 'Tous' && `Niveau: ${selectedLevel}`}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="text-gray-400" size={18} />
            </div>
            <input
              type="text"
              placeholder="Rechercher des classes..."
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
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className={`w-full px-4 py-2 rounded-xl appearance-none ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'border'
              }`}
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <ChevronDown size={16} />
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => setExportMenuOpen(!exportMenuOpen)}
              className={`flex items-center px-3 py-2 rounded-xl transition ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 hover:bg-gray-600'
                  : 'border hover:bg-gray-50'
              } ${exportMenuOpen ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
            >
              <Download className="mr-1" size={18} />
              <span>Exporter</span>
            </button>
            
            <AnimatePresence>
              {exportMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`absolute right-0 mt-1 w-40 rounded-xl shadow-lg z-10 ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border'
                  }`}
                >
                  <div className="p-2">
                    <button
                      className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
                      onClick={() => onExport('excel')}
                    >
                      Excel (.xlsx)
                    </button>
                    <button
                      className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
                      onClick={() => onExport('pdf')}
                    >
                      PDF
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className="flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
            onClick={onCreateClass}
          >
            <Plus className="mr-1" size={18} />
            <span>Nouvelle classe</span>
          </button>
        </div>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredClasses.map((cls, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className={`border rounded-2xl overflow-hidden ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
            } transition-all duration-300 hover:shadow-lg`}
          >
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : ''}`}>{cls.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {cls.level}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      cls.stream === 'Scientifique' 
                        ? darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'
                        : darkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {cls.stream}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {cls.subject}
                    </span>
                  </div>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  cls.progress > 70
                    ? 'bg-green-100 text-green-800 dark:bg-emerald-900/50 dark:text-emerald-300'
                    : cls.progress > 40
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300'
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300'
                }`}>
                  {cls.progress}% complété
                </span>
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Étudiants inscrits</span>
                  <span className={darkMode ? 'text-gray-300' : ''}>{cls.students}</span>
                </div>
                <div className={`w-full rounded-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div
                    className={`h-2 rounded-full ${
                      cls.progress > 70
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                        : cls.progress > 40
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                          : 'bg-gradient-to-r from-amber-500 to-orange-500'
                    }`}
                    style={{ width: `${cls.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="mt-4 flex gap-3 text-sm">
                <div className="flex items-center">
                  <BookOpen size={14} className="mr-1 text-gray-500" />
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{cls.lessons} leçons</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1 text-gray-500" />
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Maj: {cls.lastUpdate}</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  className={`py-2 text-sm rounded-lg flex items-center justify-center gap-1 flex-1 ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'border hover:bg-gray-50'
                  } transition`}
                  onClick={() => onManageLessons(cls)}
                >
                  <Plus size={16} /> Leçons
                </button>
                <button
                  className="py-2 text-sm rounded-lg flex items-center justify-center gap-1 flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90 transition"
                  onClick={() => onPreviewClass(cls)}
                >
                  <Eye size={16} /> Prévisualiser
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CreateClassForm({ darkMode, onCancel }) {
  const levels = ['Seconde', 'Première', 'Terminale'];
  const streams = ['Scientifique', 'Littéraire', 'Général'];
  const subjects = ['Science SVT', 'Physique', 'Chimie', 'Mathématiques', 'Français', 'Histoire', 'Philosophie'];
  
  const [formData, setFormData] = useState({
    title: '',
    level: levels[0],
    stream: streams[0],
    subject: subjects[0],
    duration: '',
    lessons: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Classe créée avec succès!');
    onCancel();
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button 
          onClick={onCancel}
          className="mr-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className={`text-2xl font-semibold ${darkMode ? 'text-white' : ''}`}>
          Créer une Nouvelle Classe
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Titre de la classe
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-xl border ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'
              }`}
              placeholder="Ex: Biologie 6ème"
            />
          </div>
          
          <div>
            <label className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Niveau scolaire
            </label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className={`w-full p-3 rounded-xl border ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'
              }`}
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Filière
            </label>
            <select
              name="stream"
              value={formData.stream}
              onChange={handleChange}
              className={`w-full p-3 rounded-xl border ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'
              }`}
            >
              {streams.map(stream => (
                <option key={stream} value={stream}>{stream}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Matière
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full p-3 rounded-xl border ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'
              }`}
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Durée
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-xl border ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'
              }`}
              placeholder="Ex: 4 semaines"
            />
          </div>
          
          <div>
            <label className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Nombre de leçons
            </label>
            <input
              type="number"
              name="lessons"
              value={formData.lessons}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-xl border ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'
              }`}
              placeholder="Ex: 12"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Description de la classe
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className={`w-full p-3 rounded-xl border ${
              darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'
            }`}
            placeholder="Décrivez le contenu de cette classe..."
          ></textarea>
        </div>
        
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onCancel}
            className={`px-6 py-3 rounded-xl ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'border hover:bg-gray-50'
            } transition`}
          >
            Annuler
          </button>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90 transition"
          >
            Créer la Classe
          </button>
        </div>
      </form>
    </div>
  );
}

function ClassLessonsManager({ darkMode, classData, onBack }) {
  const [lessons, setLessons] = useState(classData.lessonsList || []);
  const [newLesson, setNewLesson] = useState({
    title: '',
    type: 'cours',
    content: '',
    files: []
  });
  const [editingLessonId, setEditingLessonId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Gestion du drag and drop personnalisé
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const validFiles = files.filter(file => {
      const fileType = file.type.split('/')[0];
      const extension = file.name.split('.').pop().toLowerCase();
      return (
        fileType === 'image' || 
        fileType === 'video' || 
        fileType === 'application' && ['pdf', 'doc', 'docx'].includes(extension)
      );
    });

    if (validFiles.length > 0) {
      setNewLesson(prev => ({
        ...prev,
        files: [
          ...prev.files,
          ...validFiles.map(file => ({
            name: file.name,
            type: file.type.split('/')[0],
            size: file.size,
            fileObject: file
          }))
        ]
      }));
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setNewLesson(prev => ({
      ...prev,
      files: [
        ...prev.files,
        ...files.map(file => ({
          name: file.name,
          type: file.type.split('/')[0],
          size: file.size,
          fileObject: file
        }))
      ]
    }));
  };

  const handleAddLesson = () => {
    if (newLesson.title.trim() === '') return;
    
    const updatedLesson = {
      ...newLesson,
      files: newLesson.files.map(file => ({
        name: file.name,
        type: file.type,
        size: file.size
      }))
    };

    if (editingLessonId !== null) {
      setLessons(lessons.map(lesson => 
        lesson.id === editingLessonId ? { ...updatedLesson, id: editingLessonId } : lesson
      ));
      setEditingLessonId(null);
    } else {
      setLessons([...lessons, { ...updatedLesson, id: Date.now() }]);
    }
    
    setNewLesson({ title: '', type: 'cours', content: '', files: [] });
  };

  const handleEditLesson = (lesson) => {
    setNewLesson({
      title: lesson.title,
      type: lesson.type,
      content: lesson.content || '',
      files: lesson.files || []
    });
    setEditingLessonId(lesson.id);
  };

  const handleDeleteLesson = (lessonId) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette leçon ?')) {
      setLessons(lessons.filter(lesson => lesson.id !== lessonId));
    }
  };

  const handleSaveChanges = () => {
    alert('Leçons mises à jour avec succès !');
    onBack();
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button 
          onClick={onBack}
          className="mr-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className={`text-2xl font-semibold ${darkMode ? 'text-white' : ''}`}>
          Gestion des Leçons: {classData.title} ({classData.stream})
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Formulaire pour ajouter/modifier une leçon */}
        <div className={`mb-8 p-6 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
            {editingLessonId ? 'Modifier une Leçon' : 'Ajouter une Nouvelle Leçon'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className={`block mb-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Titre de la leçon
              </label>
              <input
                type="text"
                value={newLesson.title}
                onChange={(e) => setNewLesson({...newLesson, title: e.target.value})}
                className={`w-full p-3 rounded-xl border ${
                  darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white'
                }`}
                placeholder="Ex: Introduction à la cellule"
              />
            </div>
            
            <div>
              <label className={`block mb-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Type de leçon
              </label>
              <select
                value={newLesson.type}
                onChange={(e) => setNewLesson({...newLesson, type: e.target.value})}
                className={`w-full p-3 rounded-xl border ${
                  darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white'
                }`}
              >
                <option value="cours">Cours</option>
                <option value="exercice">Exercice</option>
                <option value="quiz">Quiz</option>
              </select>
            </div>
          </div>
          
          <div className="mb-4">
            <label className={`block mb-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Contenu de la leçon
            </label>
            <textarea
              value={newLesson.content}
              onChange={(e) => setNewLesson({...newLesson, content: e.target.value})}
              rows="4"
              className={`w-full p-3 rounded-xl border mb-4 ${
                darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white'
              }`}
              placeholder="Description détaillée de la leçon..."
            ></textarea>
            
            {/* Zone de drag and drop personnalisée */}
            <div 
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition
                ${isDragging 
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                  : darkMode ? 'border-gray-600' : 'border-gray-300'}
              `}
              onClick={() => document.getElementById('file-input').click()}
            >
              <FileUp className="mx-auto text-gray-400 mb-2" size={24} />
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Glissez-déposez des fichiers ici, ou cliquez pour sélectionner
              </p>
              <p className={`text-xs mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                Formats acceptés: images (JPG, PNG), vidéos (MP4), PDF, documents (DOC, DOCX)
              </p>
              <input 
                id="file-input"
                type="file"
                className="hidden"
                multiple
                onChange={handleFileSelect}
                accept="image/*, video/*, .pdf, .doc, .docx"
              />
            </div>
            
            {/* Aperçu des fichiers ajoutés */}
            {newLesson.files.length > 0 && (
              <div className="mt-4">
                <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Fichiers à ajouter:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {newLesson.files.map((file, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center p-2 rounded-lg ${
                        darkMode ? 'bg-gray-600' : 'bg-gray-100'
                      }`}
                    >
                      {file.type === 'image' && <Image className="mr-2 text-blue-500" size={16} />}
                      {file.type === 'video' && <Video className="mr-2 text-red-500" size={16} />}
                      {file.type === 'application' && <FileDoc className="mr-2 text-red-500" size={16} />}
                      <span className="text-xs truncate max-w-[120px]">{file.name}</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setNewLesson(prev => ({
                            ...prev,
                            files: prev.files.filter((_, i) => i !== index)
                          }));
                        }}
                        className="ml-2 text-red-500"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <button
            onClick={handleAddLesson}
            className={`px-4 py-2 rounded-xl flex items-center ${
              editingLessonId 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90'
            } transition`}
          >
            <Plus className="mr-2" size={16} />
            {editingLessonId ? 'Modifier la Leçon' : 'Ajouter la Leçon'}
          </button>
        </div>

        {/* Liste des leçons existantes */}
        <div className="mb-8">
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
            Leçons de la Classe ({lessons.length})
          </h3>
          
          <div className="space-y-4">
            {lessons.map((lesson, idx) => (
              <div 
                key={idx} 
                className={`p-4 rounded-xl border ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-2">
                      {lesson.type === 'cours' && (
                        <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg mr-3">
                          <Book className="text-blue-500 dark:text-blue-300" size={16} />
                        </div>
                      )}
                      {lesson.type === 'exercice' && (
                        <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg mr-3">
                          <List className="text-green-500 dark:text-green-300" size={16} />
                        </div>
                      )}
                      {lesson.type === 'quiz' && (
                        <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-lg mr-3">
                          <HelpCircle className="text-purple-500 dark:text-purple-300" size={16} />
                        </div>
                      )}
                      <div>
                        <h4 className={`font-medium ${darkMode ? 'text-white' : ''}`}>{lesson.title}</h4>
                        <p className={`text-sm capitalize ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {lesson.type}
                        </p>
                      </div>
                    </div>
                    
                    {lesson.files && lesson.files.length > 0 && (
                      <div className="mt-3">
                        <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Fichiers attachés:
                        </p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {lesson.files.map((file, fileIdx) => (
                            <div 
                              key={fileIdx} 
                              className={`flex items-center px-3 py-1 rounded-lg ${
                                darkMode ? 'bg-gray-600' : 'bg-gray-100'
                              }`}
                            >
                              {file.type === 'image' && <Image className="mr-1 text-blue-500" size={14} />}
                              {file.type === 'video' && <Video className="mr-1 text-red-500" size={14} />}
                              {file.type === 'application' && <FileDoc className="mr-1 text-red-500" size={14} />}
                              <span className="text-xs">{file.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      className={`p-2 rounded-lg ${
                        darkMode ? 'hover:bg-blue-900/50' : 'hover:bg-blue-50'
                      } text-blue-600 dark:text-blue-400`}
                      onClick={() => handleEditLesson(lesson)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button
                      className={`p-2 rounded-lg ${
                        darkMode ? 'hover:bg-red-900/50' : 'hover:bg-red-50'
                      } text-red-600 dark:text-red-400`}
                      onClick={() => handleDeleteLesson(lesson.id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {lessons.length === 0 && (
              <div className={`text-center py-8 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <BookOpen className="mx-auto text-gray-400 mb-3" size={24} />
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Aucune leçon ajoutée à cette classe
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-end gap-4">
          <button
            onClick={onBack}
            className={`px-6 py-3 rounded-xl ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'border hover:bg-gray-50'
            } transition`}
          >
            Annuler
          </button>
          <button
            onClick={handleSaveChanges}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90 transition"
          >
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  );
}

function PreviewClass({ darkMode, classData, onBack }) {
  // Grouper les leçons par type
  const lessonsByType = {
    cours: classData.lessonsList.filter(lesson => lesson.type === 'cours'),
    exercice: classData.lessonsList.filter(lesson => lesson.type === 'exercice'),
    quiz: classData.lessonsList.filter(lesson => lesson.type === 'quiz')
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button 
          onClick={onBack}
          className="mr-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className={`text-2xl font-semibold ${darkMode ? 'text-white' : ''}`}>
          {classData.title} - {classData.stream}
        </h2>
      </div>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border dark:border-gray-700">
        <div className="p-8">
          <div className="mb-8">
            <h4 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>Contenu Pédagogique</h4>
            
            {/* Cours */}
            {lessonsByType.cours.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <Book className="text-blue-500 mr-2" size={20} />
                  <h5 className={`text-lg font-medium ${darkMode ? 'text-white' : ''}`}>Cours</h5>
                </div>
                <div className="space-y-3">
                  {lessonsByType.cours.map((lesson, idx) => (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-xl ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-50'
                      }`}
                    >
                      <div className="font-medium mb-2">{lesson.title}</div>
                      
                      {lesson.files && lesson.files.length > 0 && (
                        <div className="mt-3">
                          <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Ressources:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {lesson.files.map((file, fileIdx) => (
                              <div 
                                key={fileIdx} 
                                className={`flex items-center px-3 py-1 rounded-lg ${
                                  darkMode ? 'bg-gray-600' : 'bg-gray-100'
                                }`}
                              >
                                {file.type === 'image' && <Image className="mr-1 text-blue-500" size={14} />}
                                {file.type === 'video' && <Video className="mr-1 text-red-500" size={14} />}
                                {file.type === 'application' && <FileDoc className="mr-1 text-red-500" size={14} />}
                                <span className="text-xs">{file.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Exercices */}
            {lessonsByType.exercice.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <List className="text-green-500 mr-2" size={20} />
                  <h5 className={`text-lg font-medium ${darkMode ? 'text-white' : ''}`}>Exercices</h5>
                </div>
                <div className="space-y-3">
                  {lessonsByType.exercice.map((lesson, idx) => (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-xl ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-50'
                      }`}
                    >
                      <div className="font-medium mb-2">{lesson.title}</div>
                      
                      {lesson.files && lesson.files.length > 0 && (
                        <div className="mt-3">
                          <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Documents:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {lesson.files.map((file, fileIdx) => (
                              <div 
                                key={fileIdx} 
                                className={`flex items-center px-3 py-1 rounded-lg ${
                                  darkMode ? 'bg-gray-600' : 'bg-gray-100'
                                }`}
                              >
                                <FileDoc className="mr-1 text-red-500" size={14} />
                                <span className="text-xs">{file.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quiz */}
            {lessonsByType.quiz.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <HelpCircle className="text-purple-500 mr-2" size={20} />
                  <h5 className={`text-lg font-medium ${darkMode ? 'text-white' : ''}`}>Évaluations</h5>
                </div>
                <div className="space-y-3">
                  {lessonsByType.quiz.map((lesson, idx) => (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-xl ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-50'
                      }`}
                    >
                      <div className="font-medium mb-2">{lesson.title}</div>
                      
                      {lesson.files && lesson.files.length > 0 && (
                        <div className="mt-3">
                          <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Fichiers:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {lesson.files.map((file, fileIdx) => (
                              <div 
                                key={fileIdx} 
                                className={`flex items-center px-3 py-1 rounded-lg ${
                                  darkMode ? 'bg-gray-600' : 'bg-gray-100'
                                }`}
                              >
                                <FileDoc className="mr-1 text-red-500" size={14} />
                                <span className="text-xs">{file.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsSection({ darkMode, onViewHistory }) {
  // Simuler des données pour les graphiques
  const userActivityData = [65, 59, 80, 81, 56, 55, 40];
  const maxActivity = Math.max(...userActivityData);

  const classDistribution = [
    { name: 'Seconde', value: 35, color: 'bg-green-500' },
    { name: 'Première', value: 28, color: 'bg-blue-500' },
    { name: 'Terminale', value: 22, color: 'bg-purple-500' },
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
          <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-green-800'}`}>1,242</div>
          <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-green-700'}`}>Total Utilisateurs</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className={`p-5 rounded-2xl border ${
            darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100'
          }`}
        >
          <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-blue-800'}`}>45</div>
          <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-blue-700'}`}>Classes Actives</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className={`p-5 rounded-2xl border ${
            darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100'
          }`}
        >
          <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-purple-800'}`}>78%</div>
          <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-purple-700'}`}>Taux d'achèvement</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className={`p-5 rounded-2xl border ${
            darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' : 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-100'
          }`}
        >
          <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-amber-800'}`}>245</div>
          <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-amber-700'}`}>Nouveaux inscrits (mois)</p>
        </motion.div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Activity Chart (Bar Chart) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border'}`}
        >
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Activité des Utilisateurs (7 derniers jours)</h3>
          <div className="h-64 flex items-end justify-around pb-2">
            {userActivityData.map((value, index) => (
              <div
                key={index}
                className={`relative w-8 rounded-t-lg transition-all duration-300 ${
                  darkMode ? 'bg-emerald-600/70' : 'bg-green-500'
                }`}
                style={{ height: `${(value / maxActivity) * 90 + 10}%` }} // Scale bars relative to max, with a minimum height
              >
                <span className={`absolute -top-6 text-xs font-medium w-full text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{value}</span>
              </div>
            ))}
          </div>
          <div className={`flex justify-around text-xs mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day, index) => (
              <span key={index}>{day}</span>
            ))}
          </div>
        </motion.div>

        {/* Class Distribution (Pie Chart Placeholder) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border'}`}
        >
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Répartition des Classes par Niveau</h3>
          <div className="flex justify-center items-center h-64">
            <PieChart size={64} className="text-gray-400 dark:text-gray-600" />
            <div className="ml-8 space-y-2">
              {classDistribution.map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <span className={`w-3 h-3 rounded-full mr-2 ${item.color}`}></span>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </div>
          <p className={`text-center mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Ces données sont simulées et servent d'exemple.
          </p>
        </motion.div>
      </div>

      {/* Recent Activity Feed (Placeholder) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`mt-8 p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border'}`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Activité Récente</h3>
          <button 
            onClick={onViewHistory}
            className="text-sm px-4 py-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90 transition"
          >
            Voir tout l'historique
          </button>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center text-sm">
            <FileText size={18} className="mr-3 text-blue-500" />
            <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Nouvel utilisateur 'Jean Dupont' inscrit.</span>
            <span className={`ml-auto ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Il y a 5 min</span>
          </li>
          <li className="flex items-center text-sm">
            <BookOpen size={18} className="mr-3 text-purple-500" />
            <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Classe 'Biologie 6ème' mise à jour.</span>
            <span className={`ml-auto ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Il y a 1 heure</span>
          </li>
          <li className="flex items-center text-sm">
            <UserCheck size={18} className="mr-3 text-green-500" />
            <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Formateur 'Sophie Leroux' a ajouté 2 nouvelles leçons.</span>
            <span className={`ml-auto ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Il y a 3 heures</span>
          </li>
          <li className="flex items-center text-sm">
            <File size={18} className="mr-3 text-orange-500" />
            <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Rapport mensuel des statistiques généré.</span>
            <span className={`ml-auto ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Hier</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

function FullHistory({ darkMode, onBack }) {
  const historyEntries = [
    { id: 1, action: "Création de la classe 'Biologie 6ème'", user: "Admin Vitali", date: "15/05/2024 10:30" },
    { id: 2, action: "Mise à jour du programme de 'Physique Terminale'", user: "Formateur Dupont", date: "14/05/2024 16:45" },
    { id: 3, action: "Suppression de l'utilisateur 'Jean Martin'", user: "Admin Vitali", date: "14/05/2024 09:15" },
    { id: 4, action: "Ajout de 3 nouvelles leçons dans 'Chimie Première'", user: "Formateur Leroux", date: "13/05/2024 14:20" },
    { id: 5, action: "Génération du rapport mensuel", user: "Système", date: "12/05/2024 23:59" },
    { id: 6, action: "Inscription de 12 nouveaux étudiants", user: "Système", date: "12/05/2024 08:30" },
    { id: 7, action: "Mise à jour des paramètres de sécurité", user: "Admin Vitali", date: "11/05/2024 17:00" },
    { id: 8, action: "Création de la classe 'Écologie 4ème'", user: "Admin Vitali", date: "10/05/2024 11:20" },
    { id: 9, action: "Correction du bug dans le module de statistiques", user: "Développeur", date: "09/05/2024 15:40" },
    { id: 10, action: "Exportation des données utilisateurs en CSV", user: "Admin Vitali", date: "08/05/2024 10:15" },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button 
          onClick={onBack}
          className="mr-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className={`text-2xl font-semibold ${darkMode ? 'text-white' : ''}`}>
          Historique Complet des Activités
        </h2>
      </div>

      <div className={`rounded-2xl shadow-lg overflow-hidden border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
        <div className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} flex justify-between items-center`}>
          <div className="w-1/3 font-medium">Action</div>
          <div className="w-1/3 font-medium">Utilisateur</div>
          <div className="w-1/3 font-medium text-right">Date et Heure</div>
        </div>
        
        <div className="max-h-[70vh] overflow-y-auto">
          {historyEntries.map(entry => (
            <div 
              key={entry.id} 
              className={`flex justify-between items-center p-4 border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'}`}
            >
              <div className="w-1/3">{entry.action}</div>
              <div className="w-1/3">{entry.user}</div>
              <div className="w-1/3 text-right">{entry.date}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button 
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90 transition"
          onClick={onBack}
        >
          Retour aux Statistiques
        </button>
      </div>
    </div>
  );
}