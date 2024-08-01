"use client";
import React from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const chartData = [
    { week: "Week 1", "Ricardo Alkazzi": 95, "Graham Hanna": 20, "May Lim": 75, "Clem Wong": 10, "Erica Leonar": 90 },
    { week: "Week 2", "Ricardo Alkazzi": 90, "Graham Hanna": 25, "May Lim": 78, "Clem Wong": 15, "Erica Leonar": 92 },
    { week: "Week 3", "Ricardo Alkazzi": 92, "Graham Hanna": 30, "May Lim": 80, "Clem Wong": 12, "Erica Leonar": 88 },
    { week: "Week 4", "Ricardo Alkazzi": 88, "Graham Hanna": 22, "May Lim": 82, "Clem Wong": 18, "Erica Leonar": 90 },
    { week: "Week 5", "Ricardo Alkazzi": 93, "Graham Hanna": 27, "May Lim": 85, "Clem Wong": 14, "Erica Leonar": 93 },
    { week: "Week 6", "Ricardo Alkazzi": 94, "Graham Hanna": 32, "May Lim": 88, "Clem Wong": 20, "Erica Leonar": 95 },
  ];
  

export function GroupParticipationChart({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <CardTitle>Group Member Participation</CardTitle>
        <CardDescription>Participation rate of each member over the weeks</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            {Object.keys(chartData[0]).slice(1).map(member => (
              <Line key={member} type="monotone" dataKey={member} stroke="#82ca9d" />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
