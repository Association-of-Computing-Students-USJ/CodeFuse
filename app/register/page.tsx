"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RegisterPage() {
  const router = useRouter();

  // Redirect to home page immediately since registration is closed
  useEffect(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-4">
          Registration Closed
        </h1>
        <p className="text-gray-300">Redirecting to home page...</p>
      </div>
    </div>
  );
}
