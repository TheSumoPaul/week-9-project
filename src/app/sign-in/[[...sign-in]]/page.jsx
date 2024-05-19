import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <h2>Welcome back to Hive!</h2>
      <SignIn />;
    </div>
  );
}
