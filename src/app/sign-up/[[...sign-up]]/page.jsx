import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <h2>Welcome to Hive! Create your account here.</h2>
      <SignUp />;
    </div>
  );
}
