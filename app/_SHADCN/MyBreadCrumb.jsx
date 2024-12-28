import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import BreadCrumbList from "../../DEFAULT/BreadCrumbList";
export default function MyBreadCrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {BreadCrumbList.map((item, index) => (
          <>
            <BreadcrumbItem key={index}>
              <BreadcrumbLink href={item.link}>{item.title}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
