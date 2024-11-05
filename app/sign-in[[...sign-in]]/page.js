import { SignIn } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center p-5">
      <div>sign-in</div>
      <SignIn />
    </div>
  );
}
