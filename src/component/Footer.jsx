import React from 'react';
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
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { title: "Mentions légales", icon: <Lock size={16} className="mr-2" /> },
    { title: "Confidentialité", icon: <Lock size={16} className="mr-2" /> },
    { title: "Contact", icon: <Mail size={16} className="mr-2" /> },
    { title: "FAQ", icon: <BookOpen size={16} className="mr-2" /> },
    { title: "Blog", icon: <BookOpen size={16} className="mr-2" /> },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, url: "#", color: "bg-blue-600" },
    { icon: <Twitter size={20} />, url: "#", color: "bg-sky-500" },
    { icon: <Linkedin size={20} />, url: "#", color: "bg-blue-800" },
  ];

  const features = [
    { icon: <Sparkles size={20} />, title: "Innovation", description: "Solutions avant-gardistes" },
    { icon: <Brain size={20} />, title: "Intelligence", description: "Connaissances approfondies" },
    { icon: <Rocket size={20} />, title: "Performance", description: "Résultats exceptionnels" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-50 to-teal-50 pt-16 pb-8 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3">
                <Leaf className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Vitali</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Transformez votre apprentissage avec nos solutions innovantes et intelligentes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 ${social.color} text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Liens Rapides</h3>
            <ul className="space-y-4">
              {footerLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href="#" 
                    className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    <ChevronRight size={16} className="mr-2 text-teal-500" />
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Restez informé</h3>
            <p className="text-gray-600 mb-4">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités et offres exclusives.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white px-6 py-3 rounded-r-lg font-medium shadow-md hover:shadow-lg transition"
              >
                S'abonner
              </motion.button>
            </div>
            <div className="mt-6 flex items-center text-gray-600">
              <Heart className="text-pink-500 mr-2" size={18} />
              <span>Rejoignez notre communauté de plus de 10 000 apprenants</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {currentYear} Vitali - Tous droits réservés
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-teal-600 text-sm transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-gray-500 hover:text-teal-600 text-sm transition-colors">
              Politique de cookies
            </a>
          </div>
        </div>
      </div>

      {/* Floating decoration */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-indigo-500 opacity-20"></div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;