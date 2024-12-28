import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";

export default function MyAvatar({ src, fallback }) {
  return (
    <Avatar className="w-8 h-8">
      <AvatarImage src={src} />
      <AvatarFallback>{fallback.slice(0, 1)}</AvatarFallback>
    </Avatar>
  );
}
