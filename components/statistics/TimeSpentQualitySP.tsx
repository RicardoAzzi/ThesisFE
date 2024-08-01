"use client";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, ScatterChart, Scatter, XAxis, YAxis, Tooltip, Legend } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  { group: "Group 1", timeSpent: 2.5, qualityScore: 85 },
  { group: "Group 2", timeSpent: 3.2, qualityScore: 92 },
  { group: "Group 3", timeSpent: 2.1, qualityScore: 78 },
  { group: "Group 4", timeSpent: 3.6, qualityScore: 88 },
  { group: "Group 5", timeSpent: 2.8, qualityScore: 82 },
  { group: "Group 6", timeSpent: 2.2, qualityScore: 75 },
  { group: "Group 7", timeSpent: 3.2, qualityScore: 90 },
  { group: "Group 8", timeSpent: 1.8, qualityScore: 70 },
  { group: "Group 9", timeSpent: 4.1, qualityScore: 95 },
  { group: "Group 10", timeSpent: 1.5, qualityScore: 65 },
  { group: "Group 11", timeSpent: 6.7, qualityScore: 98 },
];

const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#33FFF5", 
  "#FF33F6", "#FFB533", "#33FFDB", "#DB33FF", "#33FF8D"
];

export function ProjectQualityScatterPlot({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <CardTitle>Project Time vs Quality</CardTitle>
        <CardDescription>Relationship between time spent in meetings and project quality score</CardDescription>
      </CardHeader>
      <CardContent>
        <ScatterChart
          width={600}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="timeSpent" name="Time Spent" unit="h" />
          <YAxis type="number" dataKey="qualityScore" name="Quality Score" unit="/100" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          {data.map((entry, index) => (
            <Scatter key={entry.group} name={entry.group} data={[entry]} fill={colors[index]} />
          ))}
        </ScatterChart>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Positive correlation observed <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Higher time investment generally results in better quality scores
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  );
}