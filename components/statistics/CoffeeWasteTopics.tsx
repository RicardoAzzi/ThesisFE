"use client"

import React from "react"
import { Pie, PieChart, Legend, Cell, ResponsiveContainer } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ChartDataItem {
  topic: string
  projects: number
  fill: string
}

const chartData: ChartDataItem[] = [
  { topic: "Biofuel Production", projects: 6, fill: "hsl(152, 80%, 40%)" },
  { topic: "Organic Fertilizer", projects: 17, fill: "hsl(33, 80%, 40%)" },
  { topic: "Cosmetic Ingredients", projects: 5, fill: "hsl(351, 80%, 40%)" },
  { topic: "Food Additives", projects: 1, fill: "hsl(206, 80%, 40%)" },
  { topic: "Textile Production", projects: 11, fill: "hsl(271, 80%, 40%)" },
  { topic: "Other Applications", projects: 1, fill: "hsl(0, 0%, 60%)" },
]

interface CoffeeWasteTopicsChartProps {
  className?: string
}

export function CoffeeWasteTopicsChart({ className }: CoffeeWasteTopicsChartProps) {
  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <CardTitle>Coffee Waste Monetization Topics</CardTitle>
        <CardDescription>Current Research Focus Areas</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="projects"
                nameKey="topic"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Legend layout="vertical" align="right" verticalAlign="middle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}