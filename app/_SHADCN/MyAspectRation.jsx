import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function MyAspectRation() {
  return (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/%C3%9Arsula_Corber%C3%B3-65339.jpg/330px-%C3%9Arsula_Corber%C3%B3-65339.jpg"
          alt="Image"
          className="rounded-md object-cover"
          fill
        />
      </AspectRatio>
    </div>
  );
}
