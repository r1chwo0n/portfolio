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
    desc: "I am a hardworking and determined individual. When I set my mind on something, I take immediate action without waiting to be 100% ready, as I believe perfection rarely exists and there is always a first time for everything. I consistently complete tasks within the deadlines because I feel uncomfortable missing them. I am also open-minded and eager to learn new things or correct any misunderstandings I have had in the past.",
    color: "#FFCCEA",
  },
  {
    title: "WEAKNESS",
    desc: "I need to improve my attention to detail, as I sometimes overlook small points when focusing too much on the bigger picture. I also need to improve my confidence in expressing myself, since I tend to feel anxious and nervous when presenting in front of large groups. Finally, I need to improve my ability to forgive myself when I make mistakes, as I sometimes dwell on them and it affects my work performance.",
    color: "#FFF6E3",
  },
  {
    title: "OPPORTUNITY",
    desc: "I had the opportunity to meet my thesis advisor during the course Introduction to Computational Intelligence for Computer Engineering (CI). She has been very supportive of my aspirations. Since I have always wanted to develop a game, I consulted her about integrating my passion for game development with the knowledge I gained from CI, which ultimately became the foundation of my senior project. I also had the chance to intern under her guidance, where I learned things beyond the classroom, built connections with lab members, and worked on tasks requiring a high level of precision to ensure they could be used by others.",
    color: "#BFECFF",
  },
  {
    title: "THREAT",
    desc: "My parents often have perspectives different from mine, as they believe their experience gives them greater insight and see me as a fledgling still learning to fly. Whenever I need help making decisions, I usually consult them, which sometimes leaves me feeling uncertain. At times, I believe their excessive concern has caused me to miss certain opportunities. However, they are also the ones who help point out my weaknesses, allowing me to improve and grow.",
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
