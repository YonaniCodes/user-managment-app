import { Badge } from "@/components/ui/badge";

export default function MyBadge({ className, title }) {
  let variant =
    title === "Banned"
      ? "destructive"
      : title === "Inactive"
      ? "secondary"
      : "";
  console.log(variant, "knlm;,");

  return (
    <>
      <Badge className={className} variant={variant}>
        {title}
      </Badge>
    </>
  );
}
