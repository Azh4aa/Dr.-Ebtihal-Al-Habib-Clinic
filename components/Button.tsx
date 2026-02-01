import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'gold';
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  icon,
  href 
}) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light hover:shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    gold: "bg-gold text-white hover:bg-gold-dark hover:shadow-xl"
  };

  const content = (
    <>
      {icon && <span className="text-xl">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a 
        href={href}
        className={`${baseStyle} ${variants[variant]} ${className}`}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button 
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;