import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import MyButtonLink from "../_SHADCN/MyButtonLink";

export default function Welcome({ user }) {
  const { username } = user;

  return (
    <Card className="bg-green-100 text-green-800">
      <CardHeader>
        <CardTitle>
          Welcome {username}
          {" :)"}{" "}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center gap-4">
        <CardDescription>
          You have successfully logged in. Welcome to your account!
        </CardDescription>
        <MyButtonLink title="See Users" url="/users" />
      </CardContent>
    </Card>
  );
}
