import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "p-3 transition-colors rounded-[2.5rem] flex items-center justify-center";
  const variants = {
    primary: "bg-[#2A3324] text-[#E3E7E0] hover:bg-[#5C715E]",
    secondary: "bg-[#5C715E] text-[#E3E7E0] hover:bg-[#2A3324]",
    outline: "bg-transparent text-[#2A3324] border border-[#2A3324] hover:bg-[#2A3324] hover:text-[#E3E7E0]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
