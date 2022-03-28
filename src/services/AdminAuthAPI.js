const AdminAuthAPI = () => {
    const isAuthenticated = () => {
      return localStorage.getItem("adminAuth") ? true : false;
    };
  
    const logout = () => {
      localStorage.removeItem("adminAuth");
    };
  
    return {
      isAuthenticated,
      logout,
    };
  };
  
  export default AdminAuthAPI();
