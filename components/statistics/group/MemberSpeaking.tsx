"use client";
import React from 'react';
import { Pie, PieChart, Legend, Cell, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { name: "Ricardo Alkazzi", speakingTime: 45 },
  { name: "Graham Hanna", speakingTime: 10 },
  { name: "May Lim", speakingTime: 30 },
  { name: "Clem Wong", speakingTime: 5 },
  { name: "Erica Leonar", speakingTime: 10 },
];

const COLORS = ["#8884d8", "#8dd1e1", "#82ca9d", "#a4de6c", "#d0ed57"];

export function MemberSpeakingTimeChart({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <CardTitle>Member Speaking Time Proportions</CardTitle>
        {/* <CardDescription>Proportion of speaking time by each member</CardDescription> */}
      </CardHeader>
      <CardContent className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={chartData} dataKey="speakingTime" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend layout="vertical" align="right" verticalAlign="middle" />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
