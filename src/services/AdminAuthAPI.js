const AdminAuthAPI = () => {
    const isAuthenticated = () => {
      return localStorage.getItem("adminAuth") ? true : false;
    };
  
    const logout = () => {
      localStorage.removeItem("adminAuth");
      localStorage.removeItem("adminIdentifier");
    };
  
    return {
      isAuthenticated,
      logout,
    };
};
  
export default AdminAuthAPI();
