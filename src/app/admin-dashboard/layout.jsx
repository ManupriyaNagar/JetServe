// app/admin/layout.jsx

"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function AdminLayout({ children }) {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the 'isAuthenticated' flag from localStorage to log out the user
    localStorage.removeItem('isAuthenticated');
    router.push('/admin-login'); // Redirect to login page
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="px-6 py-4 border-b">
          <h2 className="text-2xl font-semibold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="px-4 py-6">
          <ul className="space-y-4">
            <li>
              <Link
                href="/admin"
                className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200"
              >
                <span className="ml-2">Dashboard</span>
              </Link>
            </li>
            {/* You can add more admin links here */}
          </ul>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-medium text-gray-800">Dashboard</h1>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
