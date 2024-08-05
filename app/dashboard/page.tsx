"use client"
import React, { useEffect, useState } from 'react';
import { BellIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { EfficiencyComparisonCard } from '@/components/statistics/EfficiencyComparaison';
import { DistanceTrendChart } from '@/components/statistics/DistanceTrend';
import { ProjectQualityScatterPlot } from '@/components/statistics/TimeSpentQualitySP';
import { CoffeeWasteTopicsChart } from '@/components/statistics/CoffeeWasteTopics';
import { ScrollArea } from '@/components/ui/scroll-area';
type Notification = {
  title: string;
  description: string;
  evidence: string[];
};

type CardProps = React.ComponentProps<typeof Card>;

export function NotificationCard({ className, ...props }: CardProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('http://localhost:5000/notifications');
        if (!response.ok) {
          throw new Error('Failed to fetch notifications');
        }
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have {notifications.length} unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <ScrollArea className="h-[200px] w-full rounded-md">
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : notifications.length === 0 ? (
              <p className="text-center">No notifications available at the moment</p>
            ) : (
              notifications.map((notification, index) => (
                <div
                  key={index}
                  className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{notification.title}</p>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                    {notification.evidence && notification.evidence.length > 0 && (
                      <ul className="list-disc pl-5">
                        {notification.evidence.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
}

export function ButtonDemo() {
  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/run-agents', {
        method: 'POST'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return <Button onClick={handleClick}>Run Agents</Button>;
}

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [topics, setTopics] = useState([]);
  const fetchTopics = async () => {
    try {
      const response = await fetch('http://localhost:5000/topics');
      if (!response.ok) {
        throw new Error('Failed to fetch topics');
      }
      const data = await response.json();
      // Transform the data to match the expected format
      const formattedTopics = data.map((topic, index) => ({
        topic: topic.title,
        projects: 1, // You might want to adjust this if you have actual project counts
      }));
      setTopics(formattedTopics);
    } catch (error) {
      console.error('Error fetching topics:', error);
    }
  };

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

    const fetchDashboardData = async () => {
      try {
        const response = await fetch('http://localhost:5000/dashboard-data');
        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data');
        }
        const data = await response.json();
        console.log(data);
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    checkHealth();
    fetchDashboardData();
    fetchTopics();
  }, []);

  if (!dashboardData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Meeting Overview</h1>
        <ButtonDemo />
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
            <span className="text-blue-500 text-4xl font-bold">{dashboardData.total_groups}</span>
          </CardContent>
        </Card>
        <Card className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 row-span-1 flex flex-col items-center justify-center p-4">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-2xl">Average Attendance</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <span className="text-green-500 text-4xl font-bold">{dashboardData.average_attendance}%</span>
          </CardContent>
        </Card>
        <Card className="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-2 xl:col-span-2 row-span-1 flex flex-col items-center justify-center p-4">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-2xl">Average Meeting Duration</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <span className="text-orange-500 text-4xl font-bold">{dashboardData.average_meeting_duration.toFixed(2)} mins</span>
          </CardContent>
        </Card>

        <Card className="col-span-1 row-span-1 flex flex-col items-center justify-center p-4">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-xl">Discussion Balance Average Score</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <span className="text-purple-500 text-3xl font-bold">{dashboardData.discussion_balance_avg_score}/100</span>
          </CardContent>
        </Card>
        <Card className="col-span-1 row-span-1 flex flex-col items-center justify-center p-4">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-xl">Innovation Index</CardTitle>
          </CardHeader          >
          <CardContent className="flex items-center justify-center">
            <span className="text-yellow-500 text-3xl font-bold">{dashboardData.innovation_index}</span>
          </CardContent>
        </Card>
        <Card className="col-span-1 row-span-1 flex flex-col items-center justify-center p-4">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-xl">Average Project Phase</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="text-center">
              <span className="text-green-500 text-3xl font-bold">{dashboardData.average_project_phase}</span><br />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1 row-span-1 flex flex-col items-center justify-center p-4">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-xl">Average Group Size</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <span className="text-teal-500 text-3xl font-bold">{dashboardData.average_group_size}</span>
          </CardContent>
        </Card>

        <EfficiencyComparisonCard
          className="col-span-2 row-span-1"
          chartData={[
            { group: "Group 1", progress: dashboardData.average_project_phase }
          ]}
          title="Project Progress Comparison"
          description="Comparison of project progress (Phase #) among groups"
        />
        <DistanceTrendChart
          className="col-span-2 row-span-1"
          weeksToDisplay={dashboardData.average_project_phase}
        />

        <ProjectQualityScatterPlot className="col-span-2 row-span-1" />
        <CoffeeWasteTopicsChart
          className="col-span-2 row-span-1"
          topics={topics}
          title="Coffee Waste Topics"
          description="Current Research Focus Areas"
        />

      </div>
    </div>
  );
};

export default Dashboard;