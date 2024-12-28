import Link from "next/link";
// import { auth } from "../_lib/auth";

export default async function Navigation() {
  return (
    <nav className="z-10 text-l">
      <ul>
        <li>
          <Link
            href="/login"
            className="hover:text-accent-400 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signun"
            className="hover:text-accent-400 transition-colors"
          >
            SignUp
          </Link>
        </li>
      </ul>
    </nav>
  );
}
