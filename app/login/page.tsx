import { cookies } from "next/headers";
import { users } from "../lib/mock_data";
import UsersTable from "./UsersTable";
import { stringify } from "querystring";
import { login } from "../lib/actions/auth";

export default function Page() {
  return <UsersTable users={users} handleLogin={login} />;
}
