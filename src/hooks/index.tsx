import React from "react";

import { AuthProvider } from "./auth";
import { EcommerceProvider } from "./ecommerce";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <EcommerceProvider>{children}</EcommerceProvider>
  </AuthProvider>
);

export default AppProvider;
