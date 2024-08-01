"use client";
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { month: "January", efficiency: 15 },
  { month: "February", efficiency: 14 },
  { month: "March", efficiency: 13 },
  { month: "April", efficiency: 12 },
  { month: "May", efficiency: 11 },
  { month: "June", efficiency: 10 },
];

export function EfficiencyTrends({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <CardTitle>Efficiency Trends</CardTitle>
        <CardDescription>Tracking the efficiency over the past 6 months</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="efficiency" stroke="#ff7300" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="leading-none text-muted-foreground">
            Efficiency trend for the past 6 months
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
