import { createContext, useContext, useEffect, useState } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => Promise<void>;
};

type InviteProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: InviteProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // TODO: Complete this
  const login = async () => {
    setIsAuthenticated(true);
  };

  const value: AuthContextType = {
    isAuthenticated,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider!');
  }

  return context;
};
