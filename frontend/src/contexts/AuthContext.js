import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('fitnessSharksUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('fitnessSharksUser');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (userData) => {
    const userInfo = {
      id: Date.now(), // Simple ID generation for demo
      email: userData.email,
      fullName: userData.fullName || userData.email.split('@')[0], // Use email prefix if no full name
      phone: userData.phone || '',
      userType: userData.userType || 'member',
      loginTime: new Date().toISOString(),
    };
    
    console.log('Setting user in context:', userInfo);
    setUser(userInfo);
    localStorage.setItem('fitnessSharksUser', JSON.stringify(userInfo));
    return userInfo;
  };

  const signup = (userData) => {
    const userInfo = {
      id: Date.now(),
      email: userData.email,
      fullName: userData.fullName,
      phone: userData.phone,
      userType: userData.userType || 'member',
      signupTime: new Date().toISOString(),
    };
    
    console.log('Setting user in context:', userInfo);
    setUser(userInfo);
    localStorage.setItem('fitnessSharksUser', JSON.stringify(userInfo));
    return userInfo;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fitnessSharksUser');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
