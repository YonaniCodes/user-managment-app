import MyButtonLink from "../_SHADCN/MyButtonLink";

export default function ProfileMenue() {
  return (
    <div className="flex gap-4">
      <MyButtonLink
        url="/login"
        className="hover:text-accent-400 transition-colors"
        title="Login"
      />

      <MyButtonLink
        url="/signup"
        // style="hover:text-accent-400 transition-colors"
        title="Signup"
      />
    </div>
  );
}
