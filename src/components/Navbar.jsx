import {
  Box,
  Flex,
  IconButton,
  Button,
  Image,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isActive = (path) => location.pathname === path;

  const menuItems = (
    <>
      <Button
        as={RouterLink}
        to="/"
        bg={isActive("/") ? "pink.200" : "transparent"}
        color="black"
        rounded="xl"
        _hover={{ bg: "pink.300" }}
        h={7}
        px={8}
        onClick={onClose}
      >
        HOME
      </Button>
      <Button
        as={RouterLink}
        to="/projects"
        bg={isActive("/projects") ? "pink.200" : "transparent"}
        color="black"
        rounded="xl"
        _hover={{ bg: "pink.300" }}
        h={7}
        px={8}
        onClick={onClose}
      >
        PROJECTS
      </Button>
      <Button
        as={RouterLink}
        to="/courses"
        bg={isActive("/courses") ? "pink.200" : "transparent"}
        color="black"
        rounded="xl"
        _hover={{ bg: "pink.300" }}
        h={7}
        px={8}
        onClick={onClose}
      >
        COMPLETED COURSES
      </Button>
      <Button
        as={RouterLink}
        to="/about"
        bg={isActive("/about") ? "pink.200" : "transparent"}
        color="black"
        rounded="xl"
        _hover={{ bg: "pink.300" }}
        h={7}
        px={8}
        onClick={onClose}
      >
        ABOUT ME
      </Button>
    </>
  );

  return (
    <Box position="sticky" top="0" zIndex="1000">
      <Box bg="#FFF6E3" py={4} px={4}>
        <Flex h={16} align="center" justify="center" position="relative">
          <IconButton
            size="md"
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            position="absolute"
            left={4}
            color="#FFF6E3"
            bg="pink.200"
            _hover={{ bg: "#B3E5FC" }}
          />
          <Image src="src/images/logo.png" alt="My Logo" h="60px" />
        </Flex>
      </Box>

      <Box bg="#B3E5FC" display={{ base: "none", md: "block" }}>
        <Flex h={12} align="center" justify="center">
          <HStack as="nav" spacing={4}>
            {menuItems}
          </HStack>
        </Flex>
      </Box>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={4} mt={10} align="stretch">
              {menuItems}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
