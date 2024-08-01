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
  { month: "January", distance: 500 },
  { month: "February", distance: 600 },
  { month: "March", distance: 700 },
  { month: "April", distance: 800 },
  { month: "May", distance: 900 },
  { month: "June", distance: 1000 },
];

export function DistanceTraveledOverTime({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <CardTitle>Distance Traveled Over Time</CardTitle>
        <CardDescription>Tracking the distance traveled over the past 6 months</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="distance" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="leading-none text-muted-foreground">
            Distance traveled trend for the past 6 months
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
