import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { OctagonAlert, Terminal } from "lucide-react";

export default function MyAlert() {
  return (
    <Alert variant="destructive">
      <OctagonAlert className="h-3 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}
