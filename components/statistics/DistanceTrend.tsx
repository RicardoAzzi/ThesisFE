"use client";
import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const fullChartData = [
  { week: "Week 1", "Group 1": 100 },
  { week: "Week 2", "Group 1": 100 },
  { week: "Week 3", "Group 1": 100 },
  { week: "Week 4", "Group 1": 100 },
  { week: "Week 5", "Group 1": 100 },
  { week: "Week 6", "Group 1": 100 }
];

const chartConfig = {
  "Group 1": {
    label: "Group 1",
    color: "#FF5733", // Red
  },
} satisfies ChartConfig;

interface DistanceTrendChartProps {
  className?: string;
  weeksToDisplay: number;
}

export function DistanceTrendChart({ className, weeksToDisplay }: DistanceTrendChartProps) {

  const chartData = fullChartData.slice(0, weeksToDisplay);

  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <CardTitle>Group Participation Rate</CardTitle>
        <CardDescription>Percentage of active participation by each group over {weeksToDisplay} week(s)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="week"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickFormatter={(value) => `${value}%`}
              domain={[0, 100]}
              tickCount={6}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            {Object.keys(chartConfig).map((group) => (
              <Line
                key={group}
                dataKey={group}
                type="monotone"
                stroke={chartConfig[group].color}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}