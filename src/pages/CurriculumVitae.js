"use client";

import React from "react";
import {
  Box,
  Flex,
  Image,
  useColorModeValue,
  Heading,
  Button,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import TopNav from "../components/topnav";

const MotionBox = motion(Box);

export default function CVPage() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.800", "gray.100");

  const downloadLink =
    "https://drive.google.com/uc?export=download&id=1RO0oyISmTaJUgZLdQVQDEYI7cG85OF9a";

  return (
    <>
      <TopNav />
      <Box
        bg={bg}
        minH="100vh"
        py={{ base: 6, md: 10 }}
        px={{ base: 4, md: 16 }}
      >
        <Flex
          maxW="6xl"
          mx="auto"
          direction="column"
          align="center"
          justify="center"
        >
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            w="100%"
            boxShadow="lg"
            overflow="hidden"
            borderRadius="md"
            bg={cardBg}
            p={{ base: 4, md: 6 }}
            textAlign="center"
          >
            <Heading
              size={{ base: "lg", md: "xl" }}
              mb={{ base: 4, md: 6 }}
              color={headingColor}
            >
              Curriculum Vitae
            </Heading>
            <Image
              src="https://i.imgur.com/3u4LfQ0.png"
              alt="Curriculum Vitae - Shan Marion Silveo"
              w="100%"
              objectFit="contain"
              borderRadius="md"
              mb={6}
            />
            <Link
              href={downloadLink}
              isExternal
              _hover={{ textDecoration: "none" }}
            >
              <Button colorScheme="blue" size="md">
                Download CV
              </Button>
            </Link>
          </MotionBox>
        </Flex>
      </Box>
    </>
  );
}
