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

const fullChartData = [
  { week: "Week 1", "Ricardo Alkazzi": 100, "Graham Hanna": 100, "May Lim": 100, "Clem Wong": 100, "Erica Leonar": 100 },
  { week: "Week 2", "Ricardo Alkazzi": 100, "Graham Hanna": 100, "May Lim": 100, "Clem Wong": 100, "Erica Leonar": 100 },
  { week: "Week 3", "Ricardo Alkazzi": 100, "Graham Hanna": 100, "May Lim": 100, "Clem Wong": 100, "Erica Leonar": 100 },
  { week: "Week 4", "Ricardo Alkazzi": 100, "Graham Hanna": 100, "May Lim": 100, "Clem Wong": 100, "Erica Leonar": 100 },
  { week: "Week 5", "Ricardo Alkazzi": 0, "Graham Hanna": 0, "May Lim": 0, "Clem Wong": 0, "Erica Leonar": 0 },
  { week: "Week 6", "Ricardo Alkazzi": 0, "Graham Hanna": 0, "May Lim": 0, "Clem Wong": 0, "Erica Leonar": 0 },
];

interface GroupParticipationChartProps {
  className?: string;
  weeksToDisplay: number;
}

export function GroupParticipationChart({ className, weeksToDisplay }: GroupParticipationChartProps) {
  // Filter the data to show only the first n weeks
  const chartData = fullChartData.slice(0, weeksToDisplay);

  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <CardTitle>Group Member Participation</CardTitle>
        <CardDescription>Participation rate of each member for the first {weeksToDisplay} week(s)</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            {Object.keys(chartData[0]).slice(1).map((member, index) => (
              <Line 
                key={member} 
                type="monotone" 
                dataKey={member} 
                stroke={`hsl(${index * 60}, 70%, 50%)`} // This gives each line a different color
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}