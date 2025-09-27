import {
  Box,
  Flex,
  Image,
  Text,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";

const swotData = [
  {
    title: "STRENGTH",
    desc: "I am detail-oriented and always eager to learn new technologies.",
    color: "#FFCCEA",
  },
  {
    title: "WEAKNESS",
    desc: "Sometimes I focus too much on details and forget the big picture.",
    color: "#FFF6E3",
  },
  {
    title: "OPPORTUNITY",
    desc: "I have chances to join exciting projects and collaborate with talented people.",
    color: "#BFECFF",
  },
  {
    title: "THREAT",
    desc: "The fast pace of technology requires continuous adaptation.",
    color: "#EEEAFF",
  },
];

export default function About() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex direction="column" align="center" p={6} bg="purple.50" minH="100vh">
      <Box bg="white" p={6} rounded="xl" shadow="md" maxW="1200px" w="full">
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "flex-start" }}
          gap={8}
        >
          <Box>
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              boxSize="300px"
              objectFit="cover"
              rounded="md"
              mb={{ base: 4, md: 0 }}
            />
            <Box mt={4}>
              <Text>
                <b>Name:</b> Nawawan Thaichim
              </Text>
              <Text>
                <b>Nickname:</b> Woon
              </Text>
              <Text>
                <b>Age:</b> 22
              </Text>
            </Box>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} flex="1">
            {swotData.map((item, index) => (
              <Box
                key={index}
                bg={item.color}
                p={6}
                rounded="md"
                textAlign="center"
                transition="all 0.3s"
                _hover={{
                  transform: !isMobile ? "scale(1.05)" : undefined,
                }}
              >
                <Text fontWeight="bold">{item.title}</Text>
                <Text fontSize="sm" mt={2}>
                  {item.desc}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </Flex>
  );
}
