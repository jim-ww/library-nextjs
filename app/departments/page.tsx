import { log } from "console";
import type { Department } from "../lib/definitions";
import Loading from "./loading";

async function getDepartments() {
  const res = await fetch("http://localhost:3000/api/departments", {
    cache: "no-store",
  });
  const data = await res.json();
  return data as Department[];
}

export default async function Page() {
  const departments = await getDepartments();

  return (
    <div>
      {departments.map((dep, idx) => {
        return <Department dep={dep} key={dep.id} />;
      })}
    </div>
  );
}

const Department = ({ dep }: { dep: Department }) => {
  return (
    <div>
      <h1>{dep.name}</h1>
    </div>
  );
};
