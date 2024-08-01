import React from 'react';
import Link from 'next/link';
import { BellIcon, CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GroupAttendanceChart } from '@/components/statistics/group/GroupAttendence';
import { GroupParticipationChart } from '@/components/statistics/group/GroupParticipation';
import { RoleDistributionCard } from '@/components/statistics/group/RoleDistribution';
import { MemberSpeakingTimeChart } from '@/components/statistics/group/MemberSpeaking';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const students = [
  { zID: 'z5234567', fullName: 'Ricardo Alkazzi', degree: 'Software Engineering' },
  { zID: 'z5360043', fullName: 'Graham Hanna', degree: 'Electrical Engineering' },
  { zID: 'z5492381', fullName: 'May Lim', degree: 'Mechanical Engineering' },
  { zID: 'z5374219', fullName: 'Clem Wong', degree: 'Civil Engineering' },
  { zID: 'z5237288', fullName: 'Erica Leonar', degree: 'Electical Engineering' },
];

const GroupDashboard = () => {
  return (
    <div className="p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Group Overview</h1>
      </div>

      <Table className="mb-6">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">zID</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Degree</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.zID}>
              <TableCell className="font-medium">{student.zID}</TableCell>
              <TableCell>{student.fullName}</TableCell>
              <TableCell>{student.degree}</TableCell>
              <TableCell className="text-right">
                <Link href={`/dashboard/student-details/${student.zID}`} passHref>
                  <Button variant="outline" size="icon">
                    <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Students</TableCell>
            <TableCell className="text-right">{students.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <div className="grid gap-4 grid-rows-[0.5fr_0.5fr_0.5fr_0.5fr_0.5fr] grid-cols-4 mt-4">
        <GroupAttendanceChart className="col-span-1 row-span-1" />
        <GroupParticipationChart className="col-span-2 row-span-1" />

        <MemberSpeakingTimeChart className="col-span-1 row-span-1" />
        {/* <SentimentAnalysisChart className="col-span-1 row-span-1" /> */}
        {/* <ContributionQualityChart className="col-span-1 row-span-1" /> */}
        {/* <TaskCompletionRateChart className="col-span-1 row-span-1" /> */}

        <RoleDistributionCard className="col-span-4 row-span-1" />
        
        {/* <PeerFeedbackChart className="col-span-2 row-span-1" /> */}
      </div>
    </div>
  );
};

export default GroupDashboard;
