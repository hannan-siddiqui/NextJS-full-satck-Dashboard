"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { usePathname } from "next/navigation";
export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClientComponentClient();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session && pathname !== "/auth" ) {
        router.push("/auth"); // Redirect to login if no session is found
      } else {
        setIsLoading(false); // User is authenticated
      }
    };

    checkSession();
  }, [router, supabase]);

  if (isLoading) {
    return <p>Loading...</p>; // Show loading while checking the session
  }

  return <>{children}</>;
}
