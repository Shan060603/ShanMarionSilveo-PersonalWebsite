"use client";

import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Stack,
  Image,
  useColorModeValue,
  Tag,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import TopNav from "../components/topnav";

const MotionBox = motion(Box);

export default function HomePage() {
  const textColor = useColorModeValue("gray.800", "gray.100");
  const subTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <>
      <TopNav />
      <Box
        minH="100vh"
        bg={useColorModeValue("gray.50", "gray.900")}
        color={textColor}
        px={{ base: 4, md: 16 }}
        py={{ base: 6, md: 10 }}
      >
        <Flex
          maxW="6xl"
          mx="auto"
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          gap={12}
        >
          {/* Left Content */}
          <MotionBox
            flex="1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Stack
              spacing={4}
              fontSize="lg"
              textAlign={{ base: "center", md: "left" }}
            >
              <Heading as="h1" size="lg" lineHeight="short">
                Hello, I&apos;m Shan Marion Silveo
                <br />
                Welcome to my Personal Website.
              </Heading>

              <Text>
                I&apos;m a graduate of{" "}
                <Text as="span" color="red.500" fontWeight="medium">
                  Central Philippine University
                </Text>{" "}
                with a Bachelors degree in Computer Science.
              </Text>

              <Text>
                I am a passionate software developer who enjoys building
                full-stack applications. I have a strong interest in web
                development, particularly in Next.js, React, and Node.js
                frameworks. I love creating intuitive and responsive user
                interfaces while ensuring robust backend functionality.
              </Text>

              <Box>
                <Heading size="md" mb={2}>
                  Skills & Tools
                </Heading>
                <Flex
                  wrap="wrap"
                  justify={{ base: "center", md: "flex-start" }}
                  gap={2}
                >
                  {[
                    "JavaScript",
                    "React",
                    "Node.js",
                    "Next.js",
                    "Express",
                    "MongoDB",
                    "Chakra UI",
                    "C#",
                    "Github",
                    "Git",
                    "HTML",
                    "CSS",
                    "Figma",
                    "VS Code",
                    "Visual Studio",
                    "Postman",
                    "MySQL",
                    "Python",
                    "Pycharm",
                  ].map((skill) => (
                    <Tag key={skill} colorScheme="blue">
                      {skill}
                    </Tag>
                  ))}
                </Flex>
              </Box>

              <Box>
                <Text fontSize="sm" color={subTextColor}>
                  If you&apos;re looking to work with me, feel free to email me
                  at{" "}
                  <Text as="span" fontWeight="medium" color={textColor}>
                    shan.silveo@gmail.com
                  </Text>
                </Text>
              </Box>
            </Stack>
          </MotionBox>

          {/* Right Content */}
          <MotionBox
            flex="1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Flex direction="column" align="center">
              <Box
                w={{ base: "200px", md: "256px" }}
                h={{ base: "260px", md: "350px" }}
                borderRadius="full"
                overflow="hidden"
                boxShadow="lg"
                bg="gray.200"
              >
                <Image
                  src="https://i.imgur.com/mGf04Cl.jpeg"
                  alt="Shan Marion Silveo"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Box>

              <Flex mt={6} gap={6} color="gray.500">
                <Link
                  href="https://github.com/Shan060603"
                  aria-label="Github"
                  _hover={{ color: "blue.400" }}
                  isExternal
                >
                  <Github size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/shan-marion-silveo-950926291"
                  aria-label="LinkedIn"
                  _hover={{ color: "blue.700" }}
                  isExternal
                >
                  <Linkedin size={24} />
                </Link>
              </Flex>
            </Flex>
          </MotionBox>
        </Flex>
      </Box>
    </>
  );
}
