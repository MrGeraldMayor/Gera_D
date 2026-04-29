"use client";




import { 
  Box, 
  Text, 
  Heading, 
  VStack, 
  Container, 
  Separator,
  Image,
  Stack,
  Badge,
  HStack,
  SimpleGrid
} from "@chakra-ui/react";

export default function About() {
  return (
    <Container maxW="container.lg" py={{ base: 10, md: 20 }}>
      {/* Hero Section: Image & Intro */}
      <Stack direction={{ base: "column", md: "row" }} gap={12} align="center" mb={20}>
        <Box flexShrink={0} position="relative">
          <Image 
            src="https://i.postimg.cc/nL5HR3Wv/About.jpg"
            alt="Dedeibe Geraldine" 
            boxSize={{ base: "300px", md: "450px" }}
            objectFit="cover" 
            borderRadius="2xl"
            shadow="2xl"
          />
          <Box 
            position="absolute" 
            top="-10px" 
            left="-10px" 
            boxSize="100%" 
            border="2px solid" 
            borderColor="teal.500" 
            borderRadius="2xl" 
            zIndex="-1"
          />
        </Box>

        <VStack align="start" gap={6}>
          <Box>
            <Badge colorScheme="teal" mb={2} variant="solid">Soul & Jazz Artist</Badge>
            <Heading as="h1" size={{ base: "2xl", md: "3xl" }} letterSpacing="tight">
              Dedeibe Geraldine
            </Heading>
          </Box>
          
          <Separator borderColor="teal.500" />

          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" lineHeight="tall">
            Geraldine Chinonso Dedeibe (Gera D) | Official Biography
Geraldine Chinonso Dedeibe, professionally known as Gera D, is a talented and versatile artist, songwriter, and self-taught music producer. Born on July 30, 2007, in the heart of Lagos, she comes from a multi-talented family where creativity is a shared bond. Her journey into music and production reached a new height in 2023, the same year she graduated from secondary school, as she began to fully embrace her divine gift for composition.
As a truly versatile musician, Gera D has the natural ability to adapt to any track, bringing a unique perspective to every sound she touches. She works with a dedicated efficiency, often composing and producing entire tracks within a few hours or a single day. Guided by her faith, she chooses to create music that is not worldly, focusing instead on themes of motivation, sound advice, and the environment. Her work is fueled by deep passion and feeling, intended to take listeners to another world.
The cherished middle child of the Dedeibe family—situated between her elder sister, Mary Ogechi, and her younger brother, Michael Tochukwu—Geraldine remains grounded in her family values. She is proudly managed by her parents, Mr. and Mrs. Dedeibe, and she credits God as the ultimate source of her extraordinary talent and inspiration.
Beyond her musical pursuits, Geraldine has successfully completed courses in Computer Science and Caregiving, reflecting both her technical mind and her compassionate heart. A collaborator on BandLab, she connects with artists globally while staying true to her mission: to use her gift as a vessel for positive change. Gera D’s ultimate hope is that her music will touch hearts and transform the lives of people for good.
          </Text>

          <HStack gap={6} pt={4}>
            <VStack align="start" gap={0}>
              <Text fontWeight="bold" fontSize="xl">0</Text>
              <Text fontSize="xs" color="gray.500">LIVE SHOWS</Text>
            </VStack>
            <Separator orientation="vertical" height="40px" />
            <VStack align="start" gap={0}>
              <Text fontWeight="bold" fontSize="xl">0</Text>
              <Text fontSize="xs" color="gray.500">MONTHLY LISTENERS</Text>
            </VStack>
          </HStack>
        </VStack>
      </Stack>

      {/* New Section: The Artist's Story (The "About" proper) */}
      <Box pt={10}>
        <Heading size="lg" mb={6} color="teal.600">The Journey So Far</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          <Box>
            <Text fontWeight="bold" fontSize="xl" mb={3}>The Early Years</Text>
            <Text color="gray.700" lineHeight="relaxed">
              Dedeibe musical journey began in her local church choir, where she 
              first discovered the power of gospel and soul. Influenced by legends 
              like Ella Fitzgerald and Erykah Badu, she spent years honing her 
              unique vocal texture and songwriting skills in the underground 
              jazz clubs of her hometown.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="xl" mb={3}>Musical Philosophy</Text>
            <Text color="gray.700" lineHeight="relaxed">
              Music is the language of the unspoken,she says. Her approach to 
              composition is fluid—often starting with a simple bass line or a 
              hummed melody that evolves into a complex tapestry of sound. 
              Currently, she is exploring the intersection of West African 
              highlife and contemporary Neo-soul.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

    </Container>
  );
}