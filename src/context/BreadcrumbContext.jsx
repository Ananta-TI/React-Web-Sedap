import React, { createContext, useContext, useState } from "react";
// Membuat context untuk breadcrumb
const BreadcrumbContext = createContext();
export const useBreadcrumb = () => {
  return useContext(BreadcrumbContext);
};
export const BreadcrumbProvider = ({ children }) => {
  const [breadcrumb, setBreadcrumb] = useState(["Home", "Dashboard"]);
  const updateBreadcrumb = (newBreadcrumb) => {
    setBreadcrumb(newBreadcrumb);
  };
  return (
    <BreadcrumbContext.Provider value={{ breadcrumb, updateBreadcrumb }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};
