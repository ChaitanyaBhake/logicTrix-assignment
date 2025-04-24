"use client"
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="bg-white rounded-lg w-screen max-w-screen">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-xl font-semibold text-blue-600">
          CONFIGURE WELCOME MESSAGE
        </h2>
        <button
          className="text-blue-600 hover:text-gray-700 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      {children}
    </div>
  );
};

export default layout;
