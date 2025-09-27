import {
  Box,
  Flex,
  Image,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Stack,
} from "@chakra-ui/react";

export default function ProjectCard({
  title,
  description,
  responsibilities,
  github,
  image,
  research,
  youtube,
  circuit,
}) {
  return (
    <Box bg="white" borderRadius="md" boxShadow="md" p={6} mb={4}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
      >
        {image && (
          <Image
            src={image}
            alt={title}
            boxSize={{ base: "100%", md: "300px" }}
            objectFit="cover"
            borderRadius="md"
            mb={{ base: 4, md: 0 }}
            mr={{ md: 4 }}
          />
        )}

        <Box flex="1">
          <Text fontWeight="bold" fontSize="xl" mb={2}>
            {title}
          </Text>

          {description && (
            <Text fontSize="md" color="gray.700" mb={3}>
              {description}
            </Text>
          )}
          <Stack spacing={2}>
            {github && (
              <Link href={github} color="blue.500" fontWeight="bold" isExternal>
                View on GitHub
              </Link>
            )}

            {research && (
              <Link
                href={research}
                color="blue.500"
                fontWeight="bold"
                isExternal
              >
                View on Research
              </Link>
            )}

            {youtube && (
              <Link
                href={youtube}
                color="blue.500"
                fontWeight="bold"
                isExternal
              >
                View on Youtube
              </Link>
            )}

            {circuit && (
              <Link
                href={circuit}
                color="blue.500"
                fontWeight="bold"
                isExternal
              >
                View on Circuit
              </Link>
            )}
          </Stack>

          {responsibilities && responsibilities.length > 0 && (
            <Box>
              <Text fontWeight="semibold" mb={2}>
                Current Responsibilities:
              </Text>
              <UnorderedList spacing={2}>
                {responsibilities.map((item, idx) => (
                  <ListItem key={idx}>{item}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
