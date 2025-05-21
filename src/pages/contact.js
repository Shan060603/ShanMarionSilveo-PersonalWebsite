"use client";

import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  useColorModeValue,
  Stack,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import TopNav from "../components/topnav";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const MotionBox = motion(Box);

export default function ContactPage() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.800", "gray.100");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const iconColor = useColorModeValue("blue.500", "blue.300");

  return (
    <>
      <TopNav />
      <Box
        bg={bg}
        minH="100vh"
        px={{ base: 6, md: 20 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="auto"
        py={{ base: 4, md: 8 }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          w={{ base: "100%", md: "600px" }}
          maxH="calc(100vh - 64px)" // 64px approx TopNav height + some padding
          overflowY="auto"
          boxShadow="xl"
          borderRadius="xl"
          bg={cardBg}
          p={{ base: 6, md: 12 }}
          css={{
            // Smooth scrolling if content exceeds height
            scrollbarWidth: "thin",
            scrollbarColor: `${iconColor} transparent`,
          }}
        >
          <Heading
            size={{ base: "xl", md: "2xl" }}
            mb={{ base: 6, md: 12 }}
            textAlign="center"
            color={headingColor}
            letterSpacing="wider"
          >
            Get in Touch
          </Heading>

          <Stack spacing={8}>
            <Flex align="center" gap={4}>
              <Icon as={Mail} boxSize={7} color={iconColor} />
              <Box>
                <Text fontWeight="semibold" color={textColor} mb={1}>
                  Email
                </Text>
                <Text
                  color={iconColor}
                  fontSize="lg"
                  fontWeight="medium"
                  _hover={{ textDecoration: "underline" }}
                >
                  shan.silveo@gmail.com
                </Text>
              </Box>
            </Flex>

            <Divider borderColor={useColorModeValue("gray.200", "gray.700")} />

            <Flex align="center" gap={4}>
              <Icon as={Phone} boxSize={7} color={iconColor} />
              <Box>
                <Text fontWeight="semibold" color={textColor} mb={1}>
                  Phone
                </Text>
                <Text fontSize="lg" fontWeight="medium">
                  +63 9951085583
                </Text>
              </Box>
            </Flex>

            <Divider borderColor={useColorModeValue("gray.200", "gray.700")} />

            <Flex align="center" gap={4}>
              <Icon as={MapPin} boxSize={7} color={iconColor} />
              <Box>
                <Text fontWeight="semibold" color={textColor} mb={1}>
                  Location
                </Text>
                <Text fontSize="lg" fontWeight="medium">
                  Iloilo City, Philippines
                </Text>
              </Box>
            </Flex>

            <Divider borderColor={useColorModeValue("gray.200", "gray.700")} />

            <Flex align="center" gap={4}>
              <Icon as={Linkedin} boxSize={7} color={iconColor} />
              <Box>
                <Text fontWeight="semibold" color={textColor} mb={1}>
                  LinkedIn
                </Text>
                <Link
                  href="https://www.linkedin.com/in/shan-marion-silveo-950926291"
                  fontSize="lg"
                  fontWeight="medium"
                  color={iconColor}
                  isExternal
                  _hover={{ textDecoration: "underline" }}
                >
                  https://www.linkedin.com/in/shan-marion-silveo-950926291
                </Link>
              </Box>
            </Flex>

            <Divider borderColor={useColorModeValue("gray.200", "gray.700")} />

            <Flex align="center" gap={4}>
              <Icon as={Github} boxSize={7} color={iconColor} />
              <Box>
                <Text fontWeight="semibold" color={textColor} mb={1}>
                  Github
                </Text>
                <Link
                  href="https://github.com/Shan060603"
                  fontSize="lg"
                  fontWeight="medium"
                  color={iconColor}
                  isExternal
                  _hover={{ textDecoration: "underline" }}
                >
                  https://github.com/Shan060603
                </Link>
              </Box>
            </Flex>
          </Stack>
        </MotionBox>
      </Box>
    </>
  );
}
