"use client"
import React, { useEffect } from 'react';
import { BellIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { EfficiencyComparisonCard } from '@/components/statistics/EfficiencyComparaison';
import { DistanceTrendChart } from '@/components/statistics/DistanceTrend';
import { ProjectQualityScatterPlot } from '@/components/statistics/TimeSpentQualitySP';
import { CoffeeWasteTopicsChart } from '@/components/statistics/CoffeeWasteTopics';
const notifications = [
  {
    title: "High Participation",
    description: "Group 1 had the highest team member meeting participation rate at 100%. (5/5)",
  },
  {
    title: "Idea Change",
    description: "Group 2 changed their main idea from 'Solar Power' to 'Wind Energy'.",
  },
  {
    title: "Member Absence",
    description: "A member from Group 3 was not present during the last meeting.",
  },
  {
    title: "Low Participation",
    description: "Group 1 had the lower team member meeting participation rate at 50%. (2/4)",
  },
  {
    title: "Action Item Completed",
    description: "Group 1 completed their assigned action item on time.",
  },
  {
    title: "New Discussion Topic",
    description: "Group 2 introduced a new discussion topic: 'Hydrogen Fuel Cells'.",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function NotificationCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have {notifications.length} unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{notification.title}</p>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
}

const Dashboard = () => {
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch('http://localhost:5000/health-check');
        if (!response.ok) {
          throw new Error('Health check failed');
        }
        const data = await response.json();
        console.log('Health check status:', data.status);
      } catch (error) {
        console.error('Health check error:', error);
      }
    };

    checkHealth();
  }, []);
  return (
    <div className="p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Meeting Overview</h1>
      </div>
      
      <div className="col-span-4 row-span-1 pt-10">
        <NotificationCard className="w-full" />
      </div>
      
      <div className="grid gap-4 grid-rows-[0.5fr_0.5fr_0.5fr_0.5fr_0.5fr] grid-cols-4 mt-4">
        <Card className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 row-span-1 flex flex-col items-center justify-center p-4">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-2xl">Total Number of Groups</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <span className="text-blue-500 text-4xl font-bold">41</span>
          </CardContent>
        </Card>
        <Card className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 row-span-1 flex flex-col items-center justify-center p-4">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-2xl">Average Attendance</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <span className="text-green-500 text-4xl font-bold">65%</span>
          </CardContent>
        </Card>
        <Card className="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-2 xl:col-span-2 row-span-1 flex flex-col items-center justify-center p-4">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-2xl">Average Meeting Duration</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <span className="text-orange-500 text-4xl font-bold">37 mins</span>
          </CardContent>
        </Card>

        <Card className="col-span-1 row-span-1 flex flex-col items-center justify-center p-4">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-xl">Discussion Balance Average Score</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <span className="text-purple-500 text-3xl font-bold">74/100</span>
          </CardContent>
        </Card>
        <Card className="col-span-1 row-span-1 flex flex-col items-center justify-center p-4">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-xl">Innovation Index</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <span className="text-yellow-500 text-3xl font-bold">2.6</span>
          </CardContent>
        </Card>
        <Card className="col-span-1 row-span-1 flex flex-col items-center justify-center p-4">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-xl">Average Project Phase</CardTitle>
            </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="text-center">
              <span className="text-green-500 text-3xl font-bold">3.8</span><br />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1 row-span-1 flex flex-col items-center justify-center p-4">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-xl">Average Group Size</CardTitle>
            </CardHeader>
          <CardContent className="flex items-center justify-center">
            <span className="text-teal-500 text-3xl font-bold">4.4</span>
          </CardContent>
        </Card>

        {/* <Card className="col-span-4 row-span-1 flex flex-col items-center justify-center p-4">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-2xl">Fleet Health Score</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <span className="text-indigo-500 text-4xl font-bold">8.4/10</span>
          </CardContent>
        </Card> */}

        <EfficiencyComparisonCard className="col-span-2 row-span-1" />
        <DistanceTrendChart className="col-span-2 row-span-1" />
        <ProjectQualityScatterPlot className="col-span-2 row-span-1"/>
        <CoffeeWasteTopicsChart className="col-span-2 row-span-1"/>
      </div>
    </div>
  );
};

export default Dashboard;
