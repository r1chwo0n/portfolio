import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg="#EEEAFF" minH="100vh" py={10}>
      <Box maxW="900px" mx="auto" px={4}>
        <Box
          bg="white"
          borderRadius="xl"
          boxShadow="md"
          p={10}
          textAlign="center"
          mb={10}
        >
          <Heading fontSize={{ base: "3xl", md: "4xl" }} mb={4}>
            “ It’s not over <br /> until I WIN ”
          </Heading>
          <Text color="gray.600" fontStyle="italic">
            Quote by Les Brown
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={5}>
            Status
          </Heading>

          <Box bg="white" borderRadius="xl" boxShadow="md" p={6}>
            <VStack align="start" spacing={6} position="relative">
              <Box
                position="absolute"
                left="10px"
                top="10px"
                bottom="10px"
                w="2px"
                bg="gray.300"
              />

              <Flex align="start" position="relative">
                <Text mr={3}>🔴</Text>
                <Text>
                  I am a cooperative education student currently interning at
                  the Computational Intelligence Research Lab and a fourth-year
                  Computer Engineering student at Chiang Mai University.
                </Text>
              </Flex>

              <Flex align="start" position="relative">
                <Text mr={3}>⚫</Text>
                <Text color={"gray.500"}>
                  During my third year (second semester), I simulated working in
                  a software house through the Software Engineering course,
                  enrolled in two computer engineering electives — Data Mining
                  for Computer Engineering and Modeling and Optimization for Big
                  Data Analytics — and developed the topic and concept for my
                  senior project.
                </Text>
              </Flex>

              <Flex align="start" position="relative">
                <Text mr={3}>⚫</Text>
                <Text color={"gray.500"}>
                  In my third year (first semester), I was first introduced to
                  the world of Computational Intelligence through the course
                  Introduction to Computational Intelligence for Computer
                  Engineering, where I learned about Neural Networks, Fuzzy
                  Systems, Genetic Algorithms, and Swarm Intelligence. I also
                  served as a Teaching Assistant for the Logic and Digital
                  Circuits Laboratory course, applying the knowledge I had
                  previously learned to help guide students.
                </Text>
              </Flex>

              <Flex align="start" position="relative">
                <Text mr={3}>⚫</Text>
                <Text color={"gray.500"}>
                  In my second year, I worked on numerous projects in both
                  hardware and software. I studied Object-Oriented Programming
                  (OOP), which became a core foundation, primarily using Java as
                  it best represents OOP concepts. I also took courses in Data
                  Structures and Algorithms.
                </Text>
              </Flex>

              <Flex align="start" position="relative">
                <Text mr={3}>⚫</Text>
                <Text color={"gray.500"}>
                  I became a full-fledged Computer Engineering student at Chiang
                  Mai University. It was a year of major adjustment as I moved
                  far from home and began relying on myself, doing everything
                  independently. As it was my first year, I mainly studied the
                  fundamental courses I had learned in high school, which made
                  the transition smoother. I also worked on projects with
                  friends, learning through trial and error — encountering bugs
                  and collaborating with 5–6 classmates to solve them. Overall,
                  it was a truly rewarding first year.
                </Text>
              </Flex>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
