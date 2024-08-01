import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import { redirect } from "next/navigation";
export default function Page() {
  redirect('/dashboard');
  return null;
}
