import React, { useEffect } from "react";
import AuthGuard from "../components/guard/AuthGuard";

const CreateRecipes = () => {
  const fetchFn = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/home");
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    fetchFn();
  }, []);
  return (
    <AuthGuard>
      <div>create recipes</div>
    </AuthGuard>
  );
};

export default CreateRecipes;
