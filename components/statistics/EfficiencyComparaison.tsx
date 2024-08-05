"use client";
import { Bar, BarChart, CartesianGrid, XAxis, Cell } from "recharts";
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

interface ChartDataItem {
  group: string;
  progress: number;
}

interface EfficiencyComparisonCardProps {
  className?: string;
  chartData: ChartDataItem[];
  title?: string;
  description?: string;
}

const getBarColor = (progress: number) => {
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
    label: "Project Progress: ",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function EfficiencyComparisonCard({
  className,
  chartData,
  title = "Project Progress Comparison",
  description = "Comparison of project progress (Phase #) among groups",
}: EfficiencyComparisonCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
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
    </Card>
  );
}