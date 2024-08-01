"use client";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { month: "January", cost: 200 },
  { month: "February", cost: 300 },
  { month: "March", cost: 400 },
  { month: "April", cost: 500 },
  { month: "May", cost: 600 },
  { month: "June", cost: 700 },
];

export function MaintenanceCosts({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <CardTitle>Maintenance Costs</CardTitle>
        <CardDescription>Tracking the maintenance costs over the past 6 months</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cost" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="leading-none text-muted-foreground">
            Maintenance cost trend for the past 6 months
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
