import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MyButtonLink from "../_SHADCN/MyButtonLink";

export default function PleaseLogin() {
  return (
    <Card className="bg-red-100 text-red-800">
      <CardHeader>
        <CardTitle> Hey There! </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center gap-4">
        <CardDescription>please login to see list of users</CardDescription>
        <MyButtonLink title="login" url="/login" />
      </CardContent>
    </Card>
  );
}
