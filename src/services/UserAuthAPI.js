const UserAuthAPI = () => {
    const isAuthenticated = () => {
        return localStorage.getItem("calendarOAuth") ? true : false;
      };
    
      const logout = () => {
        localStorage.removeItem("calendarOAuth");
      };
    
      return {
        isAuthenticated,
        logout,
      };
};

export default UserAuthAPI();
