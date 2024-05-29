import { Container, Text, VStack, Box, Image, Button, HStack, IconButton, Heading } from "@chakra-ui/react";
import { FaHome, FaDollarSign, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Luxury Homes Marketplace
          </Heading>
          <Text fontSize="lg">Buy, Sell, and Rent Luxury Homes with Ease</Text>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1513694203232-719a280e022f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwZXh0ZXJpb3J8ZW58MHx8fHwxNzE2OTg3MTM3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Luxury Home" borderRadius="md" />
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Featured Listings
          </Heading>
          <HStack spacing={4} justify="center">
            <Box borderWidth="1px" borderRadius="md" overflow="hidden" width="300px">
              <Image src="https://images.unsplash.com/photo-1613082294483-fec382d8367e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzE2OTg3MTM4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Home Interior" />
              <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                  Modern Villa
                </Heading>
                <Text>Location: Beverly Hills, CA</Text>
                <Text>Price: $5,000,000</Text>
                <Button mt={4} colorScheme="teal" leftIcon={<FaDollarSign />}>
                  Buy Now
                </Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="md" overflow="hidden" width="300px">
              <Image src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnR8ZW58MHx8fHwxNzE2OTg3MTM4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Luxury Apartment" />
              <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                  Penthouse Suite
                </Heading>
                <Text>Location: New York, NY</Text>
                <Text>Rent: $15,000/month</Text>
                <Button mt={4} colorScheme="teal" leftIcon={<FaHome />}>
                  Rent Now
                </Button>
              </Box>
            </Box>
          </HStack>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Contact Us
          </Heading>
          <Text>If you have any questions, feel free to reach out to us!</Text>
          <Button mt={4} colorScheme="teal" leftIcon={<FaPhone />}>
            Contact Us
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
