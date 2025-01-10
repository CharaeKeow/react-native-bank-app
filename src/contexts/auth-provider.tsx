import { createContext, useContext, useState } from 'react';
import { authenticateUser } from '../services/authenticate-user';

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

type InviteProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: InviteProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // TODO: Complete this
  const login = async () => {
    const result = await authenticateUser();

    if (result) {
      setIsAuthenticated(result);
    }

    // TODO: Show toaster or alert message to inform user
  };

  const logout = async () => {
    setIsAuthenticated(false);
  };

  const value: AuthContextType = {
    isAuthenticated,
    login,
    logout,
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
