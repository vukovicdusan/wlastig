import React from "react";
import AuthGuard from "../components/AuthGuard";
import useUser from "../hooks/useUser";

const Dashboard = () => {
  const [user] = useUser();
  console.log(!user ? "no user" : "user");
  if (!user) {
    return <AuthGuard></AuthGuard>;
  } else {
    return <div>dashboard</div>;
  }
};

export default Dashboard;
