"use client";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
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
  { week: "Week 1", "Group 1": 80, "Group 2": 100, "Group 3": 75, "Group 4": 60, "Group 5": 80, "Group 6": 100 },
  { week: "Week 2", "Group 1": 100, "Group 2": 80, "Group 3": 75, "Group 4": 80, "Group 5": 100, "Group 6": 80 },
  { week: "Week 3", "Group 1": 75, "Group 2": 100, "Group 3": 100, "Group 4": 80, "Group 5": 75, "Group 6": 100 },
  { week: "Week 4", "Group 1": 100, "Group 2": 80, "Group 3": 75, "Group 4": 100, "Group 5": 80, "Group 6": 75 },
  { week: "Week 5", "Group 1": 80, "Group 2": 100, "Group 3": 100, "Group 4": 75, "Group 5": 100, "Group 6": 80 },
  { week: "Week 6", "Group 1": 100, "Group 2": 100, "Group 3": 80, "Group 4": 100, "Group 5": 75, "Group 6": 100 },
];

const chartConfig = {
  "Group 1": {
    label: "Group 1",
    color: "#FF5733", // Red
  },
  "Group 2": {
    label: "Group 2",
    color: "#33FF57", // Green
  },
  "Group 3": {
    label: "Group 3",
    color: "#3357FF", // Blue
  },
  "Group 4": {
    label: "Group 4",
    color: "#FF33A6", // Pink
  },
  "Group 5": {
    label: "Group 5",
    color: "#33FFF5", // Cyan
  },
  "Group 6": {
    label: "Group 6",
    color: "#FF33F6", // Magenta
  },
} satisfies ChartConfig;

export function DistanceTrendChart({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <CardTitle>Group Participation Rate</CardTitle>
        <CardDescription>Percentage of active participation by each group over weeks</CardDescription>
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
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Average participation up by 5.8% this week <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing participation rates for the last 6 weeks
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  );
}
