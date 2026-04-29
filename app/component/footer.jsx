"use client";

import { 
  Box, 
  Container, 
  Stack, 
  Text, 
  HStack, 
  Heading, 
  Link, 
  VStack, 
  Separator,
  IconButton,
  Icon
} from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";
import { SiBandlab } from "react-icons/si";

// Custom SVG for Audiomack
const AudiomackIcon = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M17.51 10.151l1.795-1.488L24 11.235l-1.43 1.353-5.06-2.437zM8.84 15.367l-1.012 3.864-4.821-2.493 1.516-1.575 4.317.204zm1.18-8.204l1.373 3.964-5.062 2.458-1.43-1.352 5.119-5.07zm3.179 12.316l-3.35 1.776L0 16.32l1.657-1.637 11.542 4.572zm10.793-5.228l-5.118 5.07-1.373-3.964 5.062-2.458 1.429 1.352zm-12.805-9.726l3.35-1.776L24 7.68l-1.657 1.637-11.542-4.572z"
    />
  </Icon>
);

// Custom SVG for Boomplay
const BoomplayIcon = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18.258V5.742L18.258 12 12 18.258z"
    />
  </Icon>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box bg="gray.950" color="gray.200" mt={20}>
      <Container maxW="container.lg" py={12}>
        <Stack 
          direction={{ base: "column", md: "row" }} 
          justify="space-between" 
          align={{ base: "center", md: "start" }} 
          gap={10}
        >
          {/* Brand/Logo Section */}
          <VStack align={{ base: "center", md: "start" }} gap={4}>
            <Heading size="md" color="teal.400" letterSpacing="widest">
              DEDEIBE GERALDINE
            </Heading>
            <Text fontSize="sm" textAlign={{ base: "center", md: "left" }} maxW="300px">
              Bringing the soul of jazz to the modern era. Follow my journey on all major streaming platforms.
            </Text>
          </VStack>

          {/* Quick Links */}
          <HStack gap={10} align="start">
            <VStack align="start" gap={2}>
              <Text fontWeight="bold" color="white">Explore</Text>
              <Link href="#" variant="plain" _hover={{ color: "teal.400" }}>Home</Link>
              <Link href="#" variant="plain" _hover={{ color: "teal.400" }}>About</Link>
              <Link href="#" variant="plain" _hover={{ color: "teal.400" }}>Tour</Link>
            </VStack>
            <VStack align="start" gap={2}>
              <Text fontWeight="bold" color="white">Contact</Text>
              <Link href="mailto:info@geralidine.com" variant="plain" _hover={{ color: "teal.400" }}>Booking</Link>
              <Link href="#" variant="plain" _hover={{ color: "teal.400" }}>Press Kit</Link>
            </VStack>
          </HStack>

          {/* Music Streaming Links */}
          <VStack align={{ base: "center", md: "end" }} gap={4}>
            <Text fontWeight="bold" color="white">Listen Now</Text>
            <HStack gap={2}>
              {/* Spotify */}
              <IconButton 
                as="a" href="https://spotify.com" target="_blank"
                aria-label="Spotify" variant="ghost" color="green.400" 
                _hover={{ bg: "whiteAlpha.200", color: "green.300" }}
              >
                <FaSpotify size="22px" />
              </IconButton>

              {/* Audiomack */}
              <IconButton 
                as="a" href="https://audiomack.com" target="_blank"
                aria-label="Audiomack" variant="ghost" color="orange.400" 
                _hover={{ bg: "whiteAlpha.200", color: "orange.300" }}
              >
                <AudiomackIcon boxSize="22px" />
              </IconButton>

              {/* Boomplay */}
              <IconButton 
                as="a" href="https://boomplay.com" target="_blank"
                aria-label="Boomplay" variant="ghost" color="blue.400" 
                _hover={{ bg: "whiteAlpha.200", color: "blue.300" }}
              >
                <BoomplayIcon boxSize="24px" />
              </IconButton>

              {/* Bandlab */}
              <IconButton 
                as="a" href="https://bandlab.com" target="_blank"
                aria-label="Bandlab" variant="ghost" color="red.500" 
                _hover={{ bg: "whiteAlpha.200", color: "red.400" }}
              >
                <SiBandlab size="22px" />
              </IconButton>
            </HStack>
          </VStack>
        </Stack>

        <Separator my={10} borderColor="gray.800" />

        <Stack 
          direction={{ base: "column", md: "row" }} 
          justify="space-between" 
          align="center" 
          fontSize="xs" 
          color="gray.600"
        >
          <Text>© {currentYear} Dedeibe Geraldine. All rights reserved.</Text>
          <HStack gap={6}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}