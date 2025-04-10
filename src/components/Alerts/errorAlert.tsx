import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { ReactNode } from "react";

export default function AlertError({ children }: { children: ReactNode }) {
  return (
    <Alert
      variant="destructive"
      className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[600px] z-50"
    >
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error!</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
