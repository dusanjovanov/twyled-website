import { redirect } from "next/navigation";

export default function Docs() {
  redirect("/docs/get-started");
  return <></>;
}
