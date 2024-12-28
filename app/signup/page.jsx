import { SignupForm } from "@/components/signup-form";

export default function Page() {
  return (
    <>
      <div className="fixed inset-0 bg-backdrop-color backdrop-blur-md z-1000 flex items-center justify-center">
        {/* This div serves as the overlay */}
      </div>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-5 z-20 -mt-16">
        <div className="w-full max-w-sm">
          <SignupForm />
        </div>
      </div>
    </>
  );
}
