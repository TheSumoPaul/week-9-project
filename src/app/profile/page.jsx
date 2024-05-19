import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
SignedIn;

export default async function Page() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();

  if (userId) {
    // Query DB for user specific information or display assets only to signed in users
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();
  // Use `user` to render user details or create UI elements

  return (
    <div>
      <SignedIn>
        <h2>
          Welcome {user?.firstName} {user?.lastName}!
        </h2>
        <p>
          You are currently signed in with:{" "}
          {user?.emailAddresses[0].emailAddress}
        </p>
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">Sign In</Link>
        <br />
        <Link href="/sign-up">or sign up</Link>
      </SignedOut>
    </div>
  );
}
