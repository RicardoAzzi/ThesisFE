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

interface CoffeeWasteTopicsChartProps {
  className?: string
  topics: ChartDataItem[]
  title?: string
  description?: string
}

const defaultColors = [
  "hsl(152, 80%, 40%)",
  "hsl(33, 80%, 40%)",
  "hsl(351, 80%, 40%)",
  "hsl(206, 80%, 40%)",
  "hsl(271, 80%, 40%)",
  "hsl(0, 0%, 60%)",
]

export function CoffeeWasteTopicsChart({ 
  className, 
  topics,
  title = "Coffee Waste Monetization Topics",
  description = "Current Research Focus Areas"
}: CoffeeWasteTopicsChartProps) {
  // Assign default colors if not provided
  const chartData = topics.map((topic, index) => ({
    ...topic,
    fill: topic.fill || defaultColors[index % defaultColors.length]
  }))

  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
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