import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, Users, ChevronRight, Layers, Bookmark, List, X, Leaf, BookText, FileText, BarChart2, Plus, Search, Filter, Download, Eye, Settings, BarChart } from 'lucide-react';

export default function Course() {
  const [selectedSequence, setSelectedSequence] = useState(null);
  const [activeSequenceTab, setActiveSequenceTab] = useState('Séances');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Tous');
  
  const sequences = [
    {
      id: 'SEQ-001',
      title: 'Introduction à la biologie',
      description: 'Découverte des fondamentaux de la biologie moderne et des principes de la vie',
      duration: '8 heures',
      progress: 75,
      participants: 24,
      color: 'bg-gradient-to-r from-teal-100 to-indigo-100',
      iconColor: 'text-teal-600',
      sessions: [
        {
          title: 'Cellules et organites',
          duration: '2 heures',
          content: 'Structure et fonction des cellules, organites cellulaires et leurs rôles',
          resources: 12,
          progress: 90
        },
        {
          title: 'Photosynthèse',
          duration: '3 heures',
          content: 'Processus de transformation de la lumière en énergie chimique',
          resources: 8,
          progress: 65
        },
        {
          title: 'Chaîne alimentaire',
          duration: '2.5 heures',
          content: 'Relations trophiques entre les organismes dans un écosystème',
          resources: 10,
          progress: 40
        }
      ],
      modules: [
        {
          title: 'Bases de l\'hygiène',
          duration: '6 heures',
          content: 'Principes fondamentaux de l\'hygiène personnelle et environnementale'
        },
        {
          title: 'Pratiques éco-responsables',
          duration: '4 heures',
          content: 'Méthodes pour réduire son impact environnemental au quotidien'
        }
      ],
      category: 'Biologie'
    },
    {
      id: 'SEQ-002',
      title: 'Écosystèmes et biodiversité',
      description: 'Étude des interactions entre les organismes et leur environnement',
      duration: '12 heures',
      progress: 45,
      participants: 18,
      color: 'bg-gradient-to-r from-indigo-100 to-purple-100',
      iconColor: 'text-indigo-600',
      sessions: [
        {
          title: 'Biomes terrestres',
          duration: '3 heures',
          content: 'Classification et caractéristiques des principaux biomes de la planète',
          resources: 15,
          progress: 30
        },
        {
          title: 'Espèces menacées',
          duration: '2.5 heures',
          content: 'Enjeux de la conservation des espèces en voie de disparition',
          resources: 9,
          progress: 55
        }
      ],
      modules: [
        {
          title: 'Protection des habitats',
          duration: '5 heures',
          content: 'Stratégies pour préserver les écosystèmes naturels'
        }
      ],
      category: 'Écologie'
    },
    {
      id: 'SEQ-003',
      title: 'Préservation de l\'environnement',
      description: 'Stratégies et techniques pour la conservation des ressources naturelles',
      duration: '10 heures',
      progress: 20,
      participants: 32,
      color: 'bg-gradient-to-r from-emerald-100 to-teal-100',
      iconColor: 'text-emerald-600',
      sessions: [
        {
          title: 'Gestion des déchets',
          duration: '3 heures',
          content: 'Méthodes de tri, recyclage et réduction des déchets',
          resources: 11,
          progress: 25
        },
        {
          title: 'Énergies renouvelables',
          duration: '4 heures',
          content: 'Panorama des solutions énergétiques durables',
          resources: 14,
          progress: 15
        }
      ],
      modules: [
        {
          title: 'Agriculture durable',
          duration: '6 heures',
          content: 'Pratiques agricoles respectueuses de l\'environnement'
        },
        {
          title: 'Consommation responsable',
          duration: '3 heures',
          content: 'Comment faire des choix éclairés en tant que consommateur'
        }
      ],
      category: 'Développement durable'
    },
    {
      id: 'SEQ-004',
      title: 'Génétique fondamentale',
      description: 'Principes de base de l\'hérédité et de la variation génétique',
      duration: '14 heures',
      progress: 60,
      participants: 22,
      color: 'bg-gradient-to-r from-cyan-100 to-blue-100',
      iconColor: 'text-cyan-600',
      sessions: [
        {
          title: 'ADN et chromosomes',
          duration: '3.5 heures',
          content: 'Structure et fonction de l\'ADN et des chromosomes',
          resources: 14,
          progress: 80
        },
        {
          title: 'Mécanismes de l\'hérédité',
          duration: '4 heures',
          content: 'Transmission des caractères héréditaires',
          resources: 10,
          progress: 45
        }
      ],
      modules: [
        {
          title: 'Applications génétiques',
          duration: '6 heures',
          content: 'Utilisations pratiques des connaissances génétiques'
        }
      ],
      category: 'Biologie'
    }
  ];

  const sequenceTabs = ['Séances', 'Modules', 'Ressources', 'Statistiques'];
  const filters = ['Tous', 'Biologie', 'Écologie', 'Développement durable'];

  // Filtrer les séquences
  const filteredSequences = sequences.filter(sequence => {
    const matchesSearch = sequence.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          sequence.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'Tous' || sequence.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-indigo-100 p-4 sm:p-6">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* En-tête */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              <Layers className="text-teal-600" size={28} />
              Gestion des cours
            </h1>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Parcourez les séquences pédagogiques et accédez à leur contenu détaillé
            </p>
          </div>
        </div>

        {/* Barre de recherche et filtres */}
        {!selectedSequence && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm p-5 mb-6"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher une séquence..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2 flex-wrap">
                {filters.map(filter => (
                  <motion.button
                    key={filter}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      activeFilter === filter
                        ? 'bg-gradient-to-r from-teal-500 to-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {selectedSequence ? (
            <motion.div
              key="sequence-detail"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              {/* En-tête de séquence */}
              <div className={`p-6 ${sequences.find(s => s.id === selectedSequence)?.color}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <button 
                      onClick={() => setSelectedSequence(null)}
                      className="flex items-center text-gray-600 hover:text-teal-600 mb-4"
                    >
                      <ChevronRight className="rotate-180 mr-1" size={18} />
                      Retour aux séquences
                    </button>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${sequences.find(s => s.id === selectedSequence)?.color} border border-white/50`}>
                        <BookOpen className={sequences.find(s => s.id === selectedSequence)?.iconColor} size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {sequences.find(s => s.id === selectedSequence)?.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mt-2 max-w-3xl">
                      {sequences.find(s => s.id === selectedSequence)?.description}
                    </p>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-3 shadow-sm flex flex-col items-center"
                  >
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Progression</div>
                      <div className="text-xl font-bold text-teal-600">
                        {sequences.find(s => s.id === selectedSequence)?.progress}%
                      </div>
                    </div>
                    <div className="mt-2 flex gap-2">
                      <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        <Settings size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        <Download size={18} className="text-gray-600" />
                      </button>
                    </div>
                  </motion.div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Clock className="mr-2 text-gray-500" size={18} />
                    <span>{sequences.find(s => s.id === selectedSequence)?.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Users className="mr-2 text-gray-500" size={18} />
                    <span>{sequences.find(s => s.id === selectedSequence)?.participants} participants</span>
                  </div>
                  <div className="flex items-center text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Leaf className="mr-2 text-gray-500" size={18} />
                    <span>{sequences.find(s => s.id === selectedSequence)?.category}</span>
                  </div>
                </div>
              </div>
              
              {/* Onglets de séquence */}
              <div className="border-b border-gray-200 px-6">
                <div className="flex gap-6 overflow-x-auto">
                  {sequenceTabs.map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveSequenceTab(tab)}
                      className={`py-4 font-medium relative whitespace-nowrap
                        ${activeSequenceTab === tab 
                          ? 'text-teal-600' 
                          : 'text-gray-500 hover:text-gray-700'}
                      `}
                    >
                      {tab}
                      {activeSequenceTab === tab && (
                        <motion.div 
                          layoutId="sequenceTabIndicator"
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-t-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Contenu de séquence */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {activeSequenceTab === 'Séances' && (
                    <motion.div
                      key="sessions"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="text-xl font-bold text-gray-800">Séances du cours</h4>
                        <button className="text-teal-600 font-medium flex items-center gap-1">
                          <Plus size={16} /> Ajouter une séance
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {sequences.find(s => s.id === selectedSequence)?.sessions.map((session, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-b from-teal-50 to-indigo-50 rounded-xl border border-gray-200 p-5 hover:border-teal-300 transition-all shadow-sm"
                          >
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="text-lg font-semibold text-gray-800">{session.title}</h4>
                              <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                                {session.duration}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-4">{session.content}</p>
                            
                            <div className="mb-4">
                              <div className="flex justify-between text-xs text-gray-600 mb-1">
                                <span>Progression</span>
                                <span>{session.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <motion.div 
                                  className={`h-2 rounded-full ${
                                    session.progress === 100 ? 'bg-teal-500' : 
                                    session.progress > 70 ? 'bg-indigo-500' : 
                                    session.progress > 40 ? 'bg-amber-500' : 'bg-rose-500'
                                  }`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${session.progress}%` }}
                                  transition={{ duration: 1, delay: 0.3 }}
                                />
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <div className="flex items-center text-sm text-gray-500">
                                <Bookmark className="mr-1" size={14} />
                                {session.resources} ressources
                              </div>
                              <div className="flex gap-2">
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="px-3 py-1.5 bg-gray-100 font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-1"
                                >
                                  <Eye size={16} />
                                </motion.button>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="px-4 py-1.5 bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-medium rounded-lg hover:shadow-md transition-all flex items-center gap-1"
                                >
                                  Accéder <ChevronRight size={16} />
                                </motion.button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  {activeSequenceTab === 'Modules' && (
                    <motion.div
                      key="modules"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="text-xl font-bold text-gray-800">Modules complémentaires</h4>
                        <button className="text-teal-600 font-medium flex items-center gap-1">
                          <Plus size={16} /> Ajouter un module
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {sequences.find(s => s.id === selectedSequence)?.modules.map((module, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-b from-indigo-50 to-purple-50 rounded-xl border border-gray-200 p-5 hover:border-indigo-300 transition-all shadow-sm"
                          >
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="text-lg font-semibold text-gray-800">{module.title}</h4>
                              <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                                {module.duration}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-6">{module.content}</p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center text-sm text-gray-500">
                                <BookOpen className="mr-1" size={14} />
                                Contenu théorique
                              </div>
                              <div className="flex gap-2">
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="px-3 py-1.5 bg-gray-100 font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-1"
                                >
                                  <Eye size={16} />
                                </motion.button>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-md transition-all flex items-center gap-1"
                                >
                                  Explorer <ChevronRight size={16} />
                                </motion.button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  {activeSequenceTab === 'Ressources' && (
                    <motion.div
                      key="resources"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="text-xl font-bold text-gray-800">Ressources pédagogiques</h4>
                        <button className="text-teal-600 font-medium flex items-center gap-1">
                          <Plus size={16} /> Ajouter une ressource
                        </button>
                      </div>
                      <div className="py-4">
                        <div className="text-center mb-8">
                          <div className="inline-block bg-gradient-to-r from-teal-50 to-indigo-50 p-5 rounded-2xl mb-4">
                            <List className="text-indigo-500" size={48} />
                          </div>
                          <h4 className="text-xl font-bold text-gray-700 mb-2">
                            Ressources de la séquence
                          </h4>
                          <p className="text-gray-600 max-w-md mx-auto">
                            Toutes les ressources pour cette séquence seront disponibles ici.
                            Documents, vidéos, et supports complémentaires.
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                          <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-b from-teal-50 to-indigo-50 rounded-xl p-5 border border-gray-200 shadow-sm"
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <div className="bg-teal-100 p-2 rounded-lg">
                                <BookText className="text-teal-600" size={24} />
                              </div>
                              <h5 className="font-semibold text-gray-800">Documents PDF</h5>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">
                              Supports de cours, fiches de révision et documents de référence au format PDF.
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-500">12 documents disponibles</div>
                              <button className="text-teal-600 font-medium flex items-center gap-1">
                                Voir <ChevronRight size={16} />
                              </button>
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-b from-indigo-50 to-purple-50 rounded-xl p-5 border border-gray-200 shadow-sm"
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <div className="bg-indigo-100 p-2 rounded-lg">
                                <FileText className="text-indigo-600" size={24} />
                              </div>
                              <h5 className="font-semibold text-gray-800">Présentations</h5>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">
                              Diaporamas de présentation utilisés pendant les séances de cours.
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-500">8 présentations disponibles</div>
                              <button className="text-indigo-600 font-medium flex items-center gap-1">
                                Voir <ChevronRight size={16} />
                              </button>
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-b from-emerald-50 to-teal-50 rounded-xl p-5 border border-gray-200 shadow-sm"
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <div className="bg-emerald-100 p-2 rounded-lg">
                                <BarChart2 className="text-emerald-600" size={24} />
                              </div>
                              <h5 className="font-semibold text-gray-800">Infographies</h5>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">
                              Représentations visuelles de données et concepts complexes.
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-500">5 infographies disponibles</div>
                              <button className="text-emerald-600 font-medium flex items-center gap-1">
                                Voir <ChevronRight size={16} />
                              </button>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {activeSequenceTab === 'Statistiques' && (
                    <motion.div
                      key="stats"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="text-xl font-bold text-gray-800">Statistiques de la séquence</h4>
                        <button className="text-teal-600 font-medium flex items-center gap-1">
                          <Download size={16} /> Exporter les données
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-b from-teal-50 to-indigo-50 rounded-2xl p-6">
                          <h5 className="font-bold text-gray-800 mb-4">Progression des participants</h5>
                          <div className="h-64 flex items-end justify-between gap-2">
                            {[65, 40, 80, 30, 90, 55, 75, 45].map((value, index) => (
                              <div key={index} className="flex flex-col items-center">
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: `${value}%` }}
                                  transition={{ duration: 1, delay: index * 0.1 }}
                                  className={`w-8 rounded-t-lg ${
                                    value > 70 ? 'bg-teal-500' : 
                                    value > 50 ? 'bg-indigo-500' : 
                                    value > 30 ? 'bg-amber-500' : 'bg-rose-500'
                                  }`}
                                />
                                <span className="text-xs mt-2 text-gray-500">Étud. {index + 1}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-b from-indigo-50 to-purple-50 rounded-2xl p-6">
                          <h5 className="font-bold text-gray-800 mb-4">Répartition des activités</h5>
                          <div className="flex justify-center items-center h-64">
                            <div className="relative w-48 h-48">
                              <div className="absolute inset-0 rounded-full border-[20px] border-teal-400"></div>
                              <div className="absolute inset-0 rounded-full border-[20px] border-indigo-400 rotate-90"></div>
                              <div className="absolute inset-0 rounded-full border-[20px] border-purple-400 rotate-180"></div>
                              <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold text-gray-800">78%</span>
                                <span className="text-sm text-gray-600">complétion</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-b from-emerald-50 to-teal-50 rounded-2xl p-6 mt-6">
                        <h5 className="font-bold text-gray-800 mb-4">Engagement des étudiants</h5>
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-3xl font-bold text-gray-800">4.8</span>
                            <span className="text-gray-600">/5 en moyenne</span>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600">
                          Les étudiants sont très engagés dans cette séquence, avec une participation active 
                          dans les discussions et une excellente rétention des connaissances.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="sequence-list"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredSequences.map((sequence, idx) => (
                  <motion.div
                    key={sequence.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden cursor-pointer transition-all hover:shadow-lg"
                    onClick={() => setSelectedSequence(sequence.id)}
                  >
                    <div className={`p-5 ${sequence.color}`}>
                      <div className="flex justify-between items-start">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${sequence.color} border border-white/50`}>
                          <BookOpen className={sequence.iconColor} size={24} />
                        </div>
                        <span className="px-3 py-1 bg-white text-gray-600 rounded-full text-sm font-medium shadow-sm">
                          {sequence.id}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{sequence.title}</h3>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs">
                          {sequence.category}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{sequence.description}</p>
                      
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center text-gray-600 text-sm">
                          <Clock className="mr-1 text-gray-500" size={16} />
                          <span>{sequence.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Users className="mr-1 text-gray-500" size={16} />
                          <span>{sequence.participants}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Progression</span>
                          <span>{sequence.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div 
                            className={`h-2 rounded-full ${
                              sequence.progress === 100 ? 'bg-teal-500' : 
                              sequence.progress > 70 ? 'bg-indigo-500' : 
                              sequence.progress > 40 ? 'bg-amber-500' : 'bg-rose-500'
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${sequence.progress}%` }}
                            transition={{ duration: 1, delay: 0.3 }}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-5 py-4 bg-gradient-to-r from-teal-50 to-indigo-50 border-t border-gray-100 text-teal-600 font-medium flex items-center justify-between">
                      <span>Voir le contenu</span>
                      <ChevronRight size={18} />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {filteredSequences.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-2xl shadow-sm p-12 text-center"
                >
                  <div className="inline-block bg-gradient-to-r from-teal-50 to-indigo-50 p-6 rounded-2xl mb-6">
                    <BookOpen className="text-teal-600" size={48} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Aucune séquence trouvée</h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    Aucune séquence ne correspond à votre recherche. Essayez de modifier vos filtres ou votre recherche.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setSearchTerm(''); setActiveFilter('Tous'); }}
                    className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-medium rounded-lg hover:shadow-md transition-all"
                  >
                    Réinitialiser les filtres
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </div>
  );
}