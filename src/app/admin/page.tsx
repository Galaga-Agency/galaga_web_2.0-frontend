"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      if (localStorage.getItem("admin-auth") === "true") {
        setIsAuthenticated(true);
      } else {
        router.push("/admin/login");
      }
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) return <p>Redirecting...</p>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button
        onClick={() => {
          localStorage.removeItem("admin-auth");
          router.push("/admin/login");
        }}
      >
        Logout
      </button>
      <a href="/admin/new-post">Create New Post</a>
    </div>
  );
};

export default AdminDashboard;
