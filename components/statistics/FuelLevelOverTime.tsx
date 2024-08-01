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
  { month: "January", fuelLevel: 80 },
  { month: "February", fuelLevel: 75 },
  { month: "March", fuelLevel: 70 },
  { month: "April", fuelLevel: 65 },
  { month: "May", fuelLevel: 60 },
  { month: "June", fuelLevel: 55 },
];

export function FuelLevelOverTime({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <CardTitle>Fuel Level Over Time</CardTitle>
        <CardDescription>Tracking the fuel level over the past 6 months</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="fuelLevel" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="leading-none text-muted-foreground">
              Fuel level trend for the past 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
