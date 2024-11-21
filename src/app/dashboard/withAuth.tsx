"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthComponent = (props: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem("authToken");
      if (token) {
        setIsAuthenticated(true);
      }
      setLoading(false); // Stop loading after checking authentication
    }, []);

    if (loading) {
      return <div>Loading...</div>; // Show a loading state
    }

    if (!isAuthenticated) {
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold mb-4">You are not authenticated!</h1>
          <Link
            href="/signup"
            className="text-blue-600 hover:underline text-lg font-semibold"
          >
            Go to Login
          </Link>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
