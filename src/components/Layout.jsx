// src/Layout.jsx
import { Outlet, Link as RouterLink } from 'react-router-dom'
import { Box, Flex, HStack, Link, Button } from '@chakra-ui/react'

export default function Layout() {
  return (
    <>
      {/* Navbar */}
      <Box bg="teal.500" px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Box color="white" fontWeight="bold">
            MyLogo
          </Box>

          {/* Links */}
          <HStack as="nav" spacing={4}>
            <Link as={RouterLink} to="/" color="white">
              Home
            </Link>
            <Link as={RouterLink} to="/about" color="white">
              About
            </Link>
            <Link as={RouterLink} to="/contact" color="white">
              Contact
            </Link>
          </HStack>

        </Flex>
      </Box>

      {/* Content ของแต่ละหน้า */}
      <Box p={4}>
        <Outlet />
      </Box>
    </>
  )
}
