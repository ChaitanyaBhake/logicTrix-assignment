import { X } from 'lucide-react';
import React from 'react';

const layout = ({ children }) => {
  return (
    <div className="bg-white rounded-lg w-screen max-w-screen">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-xl font-semibold text-blue-600">
          CONFIGURE WELCOME MESSAGE
        </h2>
        <button className="text-blue-600 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>
      </div>
      {children}
    </div>
  );
};

export default layout;
