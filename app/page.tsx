"use client";

import { useEffect, useState } from "react";
import AuthForm from "../app/components/AuthForm";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md border border-gray-200">
        <h1 className="text-2xl font-bold text-green-600 mb-4 text-center">
          {isSignUp ? "Create an account" : "Welcome back"}
        </h1>
        <AuthForm isSignUp={isSignUp} />
        <p className="text-center mt-4 text-sm text-gray-400">
          {isSignUp ? "Already have an account?" : "New here?"}{" "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-green-600 underline font-medium"
          >
            {isSignUp ? "Sign in" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
}
