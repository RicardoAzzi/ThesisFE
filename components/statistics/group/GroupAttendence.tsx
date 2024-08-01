"use client";
import React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { member: "Ricardo Alkazzi", attendance: 90 },
  { member: "Graham Hanna", attendance: 80 },
  { member: "May Lim", attendance: 85 },
  { member: "Clem Wong", attendance: 40 },
  { member: "Erica Leonar", attendance: 10 },
];

export function GroupAttendanceChart({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <CardTitle>Group Member Meeting Attendance Percentage</CardTitle>
        <CardDescription>Attendance rate of each member in the group</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="member" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="attendance" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
