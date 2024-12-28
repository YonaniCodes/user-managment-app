import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MyBadge from "@/app/_SHADCN/MyBadge";
const users = [
  {
    id: "1",
    username: "john_doe",
    email: "john@example.com",
    role: "Admin",
    joinedDate: "2021-01-15",
    lastLogin: "2023-10-01",
    status: "Active",
  },
  {
    id: "2",
    username: "jane_smith",
    email: "jane@example.com",
    role: "User",
    joinedDate: "2022-05-20",
    lastLogin: "2023-09-28",
    status: "Inactive",
  },
  {
    id: "3",
    username: "banned_user1",
    email: "banned1@example.com",
    role: "User",
    joinedDate: "2022-01-10",
    lastLogin: "2023-01-01",
    status: "Banned",
  },
  {
    id: "4",
    username: "banned_user2",
    email: "banned2@example.com",
    role: "User",
    joinedDate: "2022-02-15",
    lastLogin: "2023-02-01",
    status: "Banned",
  },
  // ... additional user objects ...
];

export default function page() {
  return (
    <div className="ml-16 mt-10">
      <div className="text-3xl">All List of Users</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">#</TableHead>
            <TableHead className="w-[150px]">Username</TableHead>
            <TableHead className="w-[200]">Email</TableHead>
            <TableHead className="w-[100px]">Role</TableHead>
            <TableHead className="w-[150px]">Joined Date</TableHead>
            <TableHead className="w-[150px]">Last Login</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.joinedDate}</TableCell>
              <TableCell>{user.lastLogin}</TableCell>
              <TableCell>
                <MyBadge title={user.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
