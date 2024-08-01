"use client";

import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const attendanceData = [
  { week: "Week 1", attendance: 100, avgMeetingTime: 84, avgTalkingTime: 13 },
  { week: "Week 2", attendance: 100, avgMeetingTime: 65, avgTalkingTime: 12 },
  { week: "Week 3", attendance: 100, avgMeetingTime: 180, avgTalkingTime: 7 },
  { week: "Week 4", attendance: 100, avgMeetingTime: 150, avgTalkingTime: 30 },
  { week: "Week 5", attendance: 80, avgMeetingTime: 44, avgTalkingTime: 24 },
  { week: "Week 6", attendance: 0, avgMeetingTime: 0, avgTalkingTime: 0 },
];

const contributionData = [
  { week: "Week 1", contributions: 10, tasksAssigned: 5, tasksCompleted: 4, questionsAsked: 3, ideasProposed: 2 },
  { week: "Week 2", contributions: 12, tasksAssigned: 6, tasksCompleted: 5, questionsAsked: 2, ideasProposed: 3 },
  { week: "Week 3", contributions: 8, tasksAssigned: 4, tasksCompleted: 3, questionsAsked: 1, ideasProposed: 1 },
  { week: "Week 4", contributions: 15, tasksAssigned: 7, tasksCompleted: 6, questionsAsked: 4, ideasProposed: 5 },
  { week: "Week 5", contributions: 6, tasksAssigned: 3, tasksCompleted: 2, questionsAsked: 1, ideasProposed: 1 },
  { week: "Week 6", contributions: 0, tasksAssigned: 0, tasksCompleted: 0, questionsAsked: 0, ideasProposed: 0 },
];

const roleData = [
  {
    week: "Week 1",
    roles: {
      Leader: 1, "Note-Taker": 0, "Tech Guru": 1, "Idea Generator": 1, "Devil's Advocate": 0, Mediator: 0, Derailer: 0,
      "Quiet Observer": 0, Peacekeeper: 0, Taskmaster: 0, Researcher: 0, Pessimist: 0, Enthusiast: 0, Compromiser: 0
    }
  },
  {
    week: "Week 2",
    roles: {
      Leader: 1, "Note-Taker": 0, "Tech Guru": 1, "Idea Generator": 1, "Devil's Advocate": 1, Mediator: 0, Derailer: 0,
      "Quiet Observer": 0, Peacekeeper: 0, Taskmaster: 0, Researcher: 0, Pessimist: 0, Enthusiast: 0, Compromiser: 0
    }
  },
  {
    week: "Week 3",
    roles: {
      Leader: 1, "Note-Taker": 0, "Tech Guru": 1, "Idea Generator": 1, "Devil's Advocate": 0, Mediator: 0, Derailer: 0,
      "Quiet Observer": 0, Peacekeeper: 0, Taskmaster: 0, Researcher: 0, Pessimist: 0, Enthusiast: 0, Compromiser: 0
    }
  },
  {
    week: "Week 4",
    roles: {
      Leader: 1, "Devil's Advocate": 1, "Tech Guru": 1, "Idea Generator": 1, "Note-Taker": 0, Mediator: 0, Derailer: 0,
      "Quiet Observer": 0, Peacekeeper: 0, Taskmaster: 0, Researcher: 0, Pessimist: 0, Enthusiast: 0, Compromiser: 0
    }
  },
  {
    week: "Week 5",
    roles: {
      Leader: 1, "Note-Taker": 0, "Tech Guru": 1, "Idea Generator": 0, "Devil's Advocate": 0, Mediator: 0, Derailer: 0,
      "Quiet Observer": 0, Peacekeeper: 0, Taskmaster: 0, Researcher: 0, Pessimist: 0, Enthusiast: 0, Compromiser: 0
    }
  },
  {
    week: "Week 6",
    roles: {
      Leader: 1, "Note-Taker": 0, "Tech Guru": 1, "Idea Generator": 1, "Devil's Advocate": 0, Mediator: 0, Derailer: 0,
      "Quiet Observer": 0, Peacekeeper: 0, Taskmaster: 0, Researcher: 0, Pessimist: 0, Enthusiast: 0, Compromiser: 0
    }
  },
];

const roles = Object.keys(roleData[0].roles).map(role => ({ aspect: role }));

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#0088fe"];

const addMinimumValue = (value, min = 0.1) => value === 0 ? min : value;

export function RoleDistributionCard({ className }: { className?: string }) {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [showAllWeeks, setShowAllWeeks] = useState(false);

  const getChartData = () => {
    if (showAllWeeks) {
      return roles.map(role => {
        const data = { aspect: role.aspect };
        roleData.forEach((week, index) => {
          data[week.week] = addMinimumValue(week.roles[role.aspect]);
        });
        return data;
      });
    } else {
      const currentWeek = roleData[currentWeekIndex];
      return roles.map(role => ({
        aspect: role.aspect,
        [currentWeek.week]: addMinimumValue(currentWeek.roles[role.aspect])
      }));
    }
  };

  const chartData = getChartData();

  return (
    <Card className={className}>
      <CardHeader className="text-center relative">
        <CardTitle>{showAllWeeks ? "All Weeks" : roleData[currentWeekIndex].week}</CardTitle>
        <CardDescription>Roles assigned</CardDescription>
        <Button 
          className="absolute top-2 right-2"
          onClick={() => setShowAllWeeks(!showAllWeeks)}
        >
          {showAllWeeks ? "Show Individual Week" : "Show All Weeks"}
        </Button>
      </CardHeader>
      <CardContent className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={chartData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="aspect" />
            <PolarRadiusAxis angle={30} domain={[0, 1]} />
            {showAllWeeks
              ? roleData.map((week, index) => (
                  <Radar
                    key={week.week}
                    name={week.week}
                    dataKey={week.week}
                    stroke={COLORS[index]}
                    fill={COLORS[index]}
                    fillOpacity={0.6}
                  />
                ))
              : (
                <Radar
                  name={roleData[currentWeekIndex].week}
                  dataKey={roleData[currentWeekIndex].week}
                  stroke={COLORS[0]}
                  fill={COLORS[0]}
                  fillOpacity={0.6}
                />
              )
            }
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
      {!showAllWeeks && (
        <CardFooter className="flex justify-center space-x-4">
          <Button onClick={() => setCurrentWeekIndex((currentWeekIndex - 1 + roleData.length) % roleData.length)}>Previous</Button>
          <Button onClick={() => setCurrentWeekIndex((currentWeekIndex + 1) % roleData.length)}>Next</Button>
        </CardFooter>
      )}
    </Card>
  );
}

const StudentDetails = () => {
  return (
    <div className="p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Student Details</h1>
      </div>

      <Table className="mb-6">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Week</TableHead>
            <TableHead>Attendance (%)</TableHead>
            <TableHead>Avg Meeting Time (min)</TableHead>
            <TableHead>Avg Talking Time (min)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {attendanceData.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{data.week}</TableCell>
              <TableCell>{data.attendance}</TableCell>
              <TableCell>{data.avgMeetingTime}</TableCell>
              <TableCell>{data.avgTalkingTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="text-right">Summary of the last 6 weeks</TableCell>
          </TableRow>
        </TableFooter>
      </Table>


      <Table className="mb-6">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Week</TableHead>
            <TableHead>Contributions</TableHead>
            <TableHead>Tasks Assigned</TableHead>
            <TableHead>Tasks Completed</TableHead>
            <TableHead>Questions Asked</TableHead>
            <TableHead>Ideas Proposed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contributionData.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{data.week}</TableCell>
              <TableCell>{data.contributions}</TableCell>
              <TableCell>{data.tasksAssigned}</TableCell>
              <TableCell>{data.tasksCompleted}</TableCell>
              <TableCell>{data.questionsAsked}</TableCell>
              <TableCell>{data.ideasProposed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6} className="text-right">Summary of the last 6 weeks</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <RoleDistributionCard className="col-span-4 row-span-1" />
    </div>
  );
};

export default StudentDetails;
