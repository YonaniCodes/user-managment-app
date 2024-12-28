import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MyButtonLink({ url, title, className }) {
  console.log(title, url);
  return (
    <Button asChild>
      <Link className="text-lg" href={url}>
        {title}
      </Link>
    </Button>
  );
}
