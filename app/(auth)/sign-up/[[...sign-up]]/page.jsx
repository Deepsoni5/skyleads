import { SignUp } from "@clerk/nextjs";
export const metadata = {
  title: "Signup | SkyLeads",
};
export default function Page() {
  return <SignUp />;
}
