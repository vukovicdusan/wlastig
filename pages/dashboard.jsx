import React from "react";
import AuthGuard from "../components/AuthGuard";

const dashboard = () => {
  return (
    <AuthGuard>
      <div>dashboard</div>
    </AuthGuard>
  );
};

export default dashboard;
