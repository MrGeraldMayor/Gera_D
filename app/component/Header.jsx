"use-client"

import { Box, Stack, Image, Text, VStack, Center } from "@chakra-ui/react"
import Main from "../../public/main.png"

export default function Header() {
  return (
    <Center minH="100vh" p={6}>
      <Stack 
        // Mobile: column (top/bottom) | Desktop: row (left/right)
        direction={{ base: "column", md: "row" }} 
        gap={{ base: 8, md: 12 }}
        align="center"
        textAlign={{ base: "center", md: "left" }}
      >
        {/* Image Section */}
        <Box flexShrink={0}>
          <Image 
            src={Main.src} 
            alt="Dedeibe Geraldine Chinonso" 
            // Responsive width: 250px on mobile, 350px on desktop
            boxSize={{ base: "250px", md: "350px" }}
            objectFit="cover" 
            // Removed shadow and explicitly set border to none
            border="none"
            outline="none"
            shadow="none" 
          />
        </Box>

        {/* Text Section */}
        <VStack align={{ base: "center", md: "start" }} gap={2}>
          <Text 
            color="#FF10F0"
            as="h1" 
            fontSize={{ base: "2xl", md: "4xl" }} 
            fontWeight="bolder"
            letterSpacing="tight"
          >
            DEDEIBE GERALDINE CHINONSO
          </Text>
          <Text 
            fontSize={{ base: "md", md: "lg" }} 
            color="fg.muted"
            fontWeight="medium"
          >
            musician | song writer | music producer 
          </Text>
        </VStack>
      </Stack>
    </Center>
  )
}