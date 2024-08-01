import React from 'react';
import path from "path";
import { promises as fs } from "fs";
import {z} from "zod";
import { taskSchema } from '@/components/table/data/schema';
import { DataTable } from '@/components/table/components/data-table';
import { columns } from '@/components/table/components/columns';

async function getTasks() {
  const filePath = path.join(process.cwd(), 'components', 'table', 'data', 'tasks.json');
  const data = await fs.readFile(filePath);

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}
export default async function GroupListPage() {

  const tasks = await getTasks()
  return (
    <>
      <DataTable data={tasks} columns={columns} />
    </>
  )

}
