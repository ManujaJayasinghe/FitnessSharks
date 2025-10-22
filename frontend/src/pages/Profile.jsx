import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="sticky top-0 z-50 px-6 py-4 text-white shadow-2xl bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-pink-400">🦈</span>
            <h1 className="text-2xl font-bold">Your Profile</h1>
          </div>
          <button 
            onClick={() => navigate('/')} 
            className="px-6 py-2 font-semibold transition bg-pink-500 rounded-full hover:bg-pink-600"
          >
            Back to Home
          </button>
        </div>
      </header>

      <main className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="p-8 bg-white shadow-xl rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 font-bold text-blue-900 bg-pink-300 rounded-full text-2xl">
                {(user?.fullName || user?.email || 'U').slice(0, 1).toUpperCase()}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-900">{user?.fullName || user?.email}</h2>
                <p className="text-gray-600">Member since {new Date(user?.signupTime || user?.loginTime).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="text-sm font-semibold text-blue-700">Full Name</div>
                <div className="text-lg font-bold text-blue-900">{user?.fullName || '—'}</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="text-sm font-semibold text-blue-700">Email</div>
                <div className="text-lg font-bold text-blue-900">{user?.email}</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="text-sm font-semibold text-blue-700">Phone</div>
                <div className="text-lg font-bold text-blue-900">{user?.phone || '—'}</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="text-sm font-semibold text-blue-700">Last Login</div>
                <div className="text-lg font-bold text-blue-900">{user?.loginTime ? new Date(user.loginTime).toLocaleString() : '—'}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}



