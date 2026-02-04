import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        :root {
          --primary-green: #4ECCA3;
          --dark-blue: #1a3a5c;
          --secondary-green: #3CB371;
          --accent-teal: #2E8B8B;
          --light-green: #E8F5F0;
          --text-dark: #2D3748;
          --text-gray: #718096;
          --warning-yellow: #F6AD55;
        }
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          overflow-x: hidden;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #4ECCA3;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #3CB371;
        }
      `}</style>
      {children}
    </div>
  );
}