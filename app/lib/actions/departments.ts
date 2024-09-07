import type { Department } from "../definitions";

const collectionUrl = "http://localhost:3000/api/departments";
const singleEntityUrl = (id: number) =>
  `http://localhost:3000/api/departments/${id}`;

export const getDepartments: () => Promise<Department[]> = async () => {
  const res = await fetch(collectionUrl, {
    cache: "no-store",
  });
  const data = await res.json();
  return data as Department[];
};

export const getDepartment: (id: number) => Promise<Department> = async (
  id: number
) => {
  const res = await fetch(singleEntityUrl(id), {
    cache: "no-store",
  });
  const data = await res.json();
  return data as Department;
};
