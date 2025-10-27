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

          {/* Purchases Section */}
          <div className="mt-8 p-8 bg-white shadow-xl rounded-2xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">My Purchases</h3>
            
            {user?.purchases && user.purchases.length > 0 ? (
              <div className="space-y-4">
                {user.purchases.map((purchase) => (
                  <div key={purchase.id} className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-500">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-blue-900">{purchase.name}</h4>
                      <span className="px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
                        {purchase.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-sm font-semibold text-gray-600">Price</div>
                        <div className="text-lg font-bold text-blue-900">{purchase.price}</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-600">Purchase Date</div>
                        <div className="text-lg font-bold text-blue-900">
                          {new Date(purchase.purchaseDate).toLocaleDateString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-600">Valid For</div>
                        <div className="text-lg font-bold text-blue-900">{purchase.validFor || 'N/A'}</div>
                      </div>
                    </div>
                    
                    {purchase.description && (
                      <p className="text-gray-600 mb-3">{purchase.description}</p>
                    )}
                    
                    {purchase.features && (
                      <div>
                        <div className="text-sm font-semibold text-gray-600 mb-2">Included Features:</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {purchase.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-700">
                              <span className="text-green-500 mr-2">✓</span>
                              {feature}
                            </div>
                          ))}
                        </div>
                        {purchase.features.length > 4 && (
                          <div className="text-sm text-gray-500 mt-2">
                            +{purchase.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🛒</div>
                <h4 className="text-xl font-bold text-gray-600 mb-2">No Purchases Yet</h4>
                <p className="text-gray-500 mb-6">You haven't made any purchases yet. Check out our membership options!</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => navigate('/day-pass')}
                    className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                  >
                    Buy Day Pass
                  </button>
                  <button 
                    onClick={() => navigate('/monthly')}
                    className="px-6 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition"
                  >
                    View Memberships
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}



