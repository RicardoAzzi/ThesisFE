"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, Cell } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { group: "Group 1", progress: 1 },
  { group: "Group 2", progress: 4 },
  { group: "Group 3", progress: 3 },
  { group: "Group 4", progress: 5 },
  { group: "Group 5", progress: 2 },
  { group: "Group 6", progress: 4 },
];

const getBarColor = (progress) => {
  if (progress >= 4) {
    return "hsl(120, 100%, 40%)"; // Green
  } else if (progress >= 3) {
    return "hsl(60, 100%, 40%)"; // Yellow
  } else {
    return "hsl(0, 100%, 40%)"; // Red
  }
};

const chartConfig = {
  progress: {
    label: "Project Progress (%)",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function EfficiencyComparisonCard({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <CardTitle>Project Progress Comparison</CardTitle>
        <CardDescription>Comparison of project progress (Phase #) among groups</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="group"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="progress" radius={4}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.progress)} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Average progress up by 5.5% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing project progress comparison for all groups
        </div>
      </CardFooter> */}
    </Card>
  );
}
