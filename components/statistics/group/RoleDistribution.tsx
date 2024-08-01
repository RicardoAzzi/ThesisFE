"use client";
import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const roleData = [
  { name: "Student 1", roles: { Leader: 1, "Idea Generator": 0, "Devil's Advocate": 1, Mediator: 0, "Note-Taker": 1, Derailer: 0, "Quiet Observer": 0, Peacekeeper: 0, Taskmaster: 0, Researcher: 1, Pessimist: 0, Enthusiast: 0, Compromiser: 0, "Tech Guru": 1 } },
  { name: "Student 2", roles: { Leader: 0, "Idea Generator": 1, "Devil's Advocate": 0, Mediator: 0, "Note-Taker": 0, Derailer: 0, "Quiet Observer": 1, Peacekeeper: 1, Taskmaster: 0, Researcher: 1, Pessimist: 1, Enthusiast: 0, Compromiser: 0, "Tech Guru": 0 } },
  { name: "Student 3", roles: { Leader: 1, "Idea Generator": 1, "Devil's Advocate": 0, Mediator: 1, "Note-Taker": 0, Derailer: 0, "Quiet Observer": 0, Peacekeeper: 0, Taskmaster: 0, Researcher: 0, Pessimist: 0, Enthusiast: 1, Compromiser: 1, "Tech Guru": 0 } },
  { name: "Student 4", roles: { Leader: 0, "Idea Generator": 0, "Devil's Advocate": 1, Mediator: 1, "Note-Taker": 1, Derailer: 0, "Quiet Observer": 1, Peacekeeper: 0, Taskmaster: 1, Researcher: 0, Pessimist: 0, Enthusiast: 1, Compromiser: 0, "Tech Guru": 1 } },
  { name: "Student 5", roles: { Leader: 1, "Idea Generator": 1, "Devil's Advocate": 0, Mediator: 0, "Note-Taker": 0, Derailer: 0, "Quiet Observer": 1, Peacekeeper: 0, Taskmaster: 0, Researcher: 1, Pessimist: 1, Enthusiast: 0, Compromiser: 1, "Tech Guru": 0 } },
];

const roles = Object.keys(roleData[0].roles).map(role => ({ aspect: role }));

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#0088fe"];

const addMinimumValue = (value, min = 0.1) => value === 0 ? min : value;

export function RoleDistributionCard({ className }: { className?: string }) {
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
  const [showAllStudents, setShowAllStudents] = useState(false);

  const getChartData = () => {
    if (showAllStudents) {
      return roles.map(role => {
        const data = { aspect: role.aspect };
        roleData.forEach((student, index) => {
          data[student.name] = addMinimumValue(student.roles[role.aspect]);
        });
        return data;
      });
    } else {
      const currentStudent = roleData[currentStudentIndex];
      return roles.map(role => ({
        aspect: role.aspect,
        [currentStudent.name]: addMinimumValue(currentStudent.roles[role.aspect])
      }));
    }
  };

  const chartData = getChartData();

  return (
    <Card className={className}>
      <CardHeader className="text-center relative">
        <CardTitle>{showAllStudents ? "All Students" : roleData[currentStudentIndex].name}</CardTitle>
        <CardDescription>Roles assigned</CardDescription>
        <Button 
          className="absolute top-2 right-2"
          onClick={() => setShowAllStudents(!showAllStudents)}
        >
          {showAllStudents ? "Show Individual" : "Show All Students"}
        </Button>
      </CardHeader>
      <CardContent className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={chartData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="aspect" />
            <PolarRadiusAxis angle={30} domain={[0, 1]} />
            {showAllStudents
              ? roleData.map((student, index) => (
                  <Radar
                    key={student.name}
                    name={student.name}
                    dataKey={student.name}
                    stroke={COLORS[index]}
                    fill={COLORS[index]}
                    fillOpacity={0.6}
                  />
                ))
              : (
                <Radar
                  name={roleData[currentStudentIndex].name}
                  dataKey={roleData[currentStudentIndex].name}
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
      {!showAllStudents && (
        <CardFooter className="flex justify-center space-x-4">
          <Button onClick={() => setCurrentStudentIndex((currentStudentIndex - 1 + roleData.length) % roleData.length)}>Previous</Button>
          <Button onClick={() => setCurrentStudentIndex((currentStudentIndex + 1) % roleData.length)}>Next</Button>
        </CardFooter>
      )}
    </Card>
  );
}
