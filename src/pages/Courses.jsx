import { useState } from "react";
import {
  Box,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { coursesData } from "../data/courses";

export default function Courses() {
  const semesters = Object.keys(coursesData);
  const [selectedSemester, setSelectedSemester] = useState(semesters[0]);

  const semesterCourses = coursesData[selectedSemester];

  const calculableCourses = semesterCourses.filter(
    (c) => c.grade !== "S" && c.grade !== "U"
  );

  const totalCredits = calculableCourses.reduce((sum, c) => sum + c.credit, 0);

  const gradePoints = {
    A: 4.0,
    "B+": 3.5,
    B: 3.0,
    "C+": 2.5,
    C: 2.0,
    "D+": 1.5,
    D: 1.0,
    F: 0,
  };

  const gpa =
    calculableCourses.reduce(
      (sum, c) => sum + gradePoints[c.grade] * c.credit,
      0
    ) / (totalCredits || 1); 

  return (
    <Box bg="#f3eaff" minH="100vh" py={7} px={4}>
      <VStack spacing={6} maxW="800px" mx="auto">
        <HStack>
          <Text fontWeight="bold">Semester :</Text>
          <Select
            w="120px"
            size="sm"
            bg="white"
            borderRadius="md"
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
          >
            {semesters.map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
          </Select>
        </HStack>

        <Box
          bg="white"
          borderRadius="md"
          boxShadow="md"
          overflow="hidden"
          w="100%"
        >
          <Table variant="simple">
            <Thead bg="#FFCCEA">
              <Tr>
                <Th>Code</Th>
                <Th>Course</Th>
                <Th isNumeric>Credit</Th>
                <Th>Grade</Th>
              </Tr>
            </Thead>
            <Tbody>
              {semesterCourses.map((c) => (
                <Tr key={c.code}>
                  <Td>{c.code}</Td>
                  <Td>{c.course}</Td>
                  <Td isNumeric>{c.credit}</Td>
                  <Td>{c.grade}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          <Box
            display="flex"
            justifyContent="space-between"
            bg="#f9f9f9"
            px={4}
            py={3}
            borderTop="1px solid"
            borderColor="gray.200"
          >
            <Text fontWeight="bold">Accumulated Credits (GPA only)</Text>
            <HStack spacing={8}>
              <Text>{totalCredits}</Text>
              <Text>{gpa.toFixed(2)}</Text>
            </HStack>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}
