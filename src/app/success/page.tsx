// app/success/page.tsx
import { Suspense } from "react";
import SuccessClient from "@/components/SuccessClient";

export default function SuccessPage() {
  return (
    <Suspense fallback={<p className="text-center py-10">Loading...</p>}>
      <SuccessClient />
    </Suspense>
  );
}
