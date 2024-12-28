"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MyBadge from "@/app/_SHADCN/MyBadge";
import { useUsers } from "../_hooks/useUsers";
import Spinner from "./Spinner";
export default function UsersTable() {
  const { isLoading, users, error } = useUsers();
  if (isLoading) return <Spinner />;
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
              <TableCell>{user.joinedAt}</TableCell>
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
