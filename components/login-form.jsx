"use client";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import useLogin from "@/app/_hooks/useLogin"; // Custom hook for login
import { useRouter } from "next/navigation";
import { z } from "zod"; // Import Zod for validation
import { zodResolver } from "@hookform/resolvers/zod"; // For integration with react-hook-form

// Define Zod schema for form validation
const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address") // Email validation rule
    .nonempty("Email is required"), // Ensures email is not empty
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long") // Password length rule
    .nonempty("Password is required"), // Ensures password is not empty
});

export function LoginForm({ className, ...props }) {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema), // Integrating Zod with react-hook-form
  });

  const { isLoading, login } = useLogin();
  const router = useRouter();

  const onSubmit = (data) => {
    login(data, {
      onSuccess: (user) => {
        router.push("/");
      },
      onError: (error) => {
        reset();
      },
    });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              {/* Email Field */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <Button disabled={isLoading} type="submit" className="w-full">
                {isLoading ? "Loading..." : "Login"}
              </Button>
            </div>

            <div className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link href="/signup" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
