import { SignIn } from "@clerk/nextjs";
export const metadata = {
  title: "Login | SkyLeads",
};
export default function Page() {
  return <SignIn />;
}
