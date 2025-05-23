"use client";

import React from "react";
import { createClient } from "../utils/supabase/supabaseClient";
import { useRouter } from "next/navigation";

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
