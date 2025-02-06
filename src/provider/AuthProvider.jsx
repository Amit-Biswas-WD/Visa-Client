import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children}) => {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    
  const valueInfo = {
    name: "anu",
  };

  return (
    <AuthContext.Provider value={valueInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
