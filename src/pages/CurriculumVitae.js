"use client";

import React from "react";
import { Box, Flex, Image, useColorModeValue, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import TopNav from "../components/topnav";

const MotionBox = motion(Box);

export default function CVPage() {
  const bg = useColorModeValue("gray.50", "gray.900");

  return (
    <>
      <TopNav />
      <Box bg={bg} minH="100vh" py={10} px={{ base: 6, md: 16 }}>
        <Flex
          maxW="5xl"
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
            maxW="800px"
            boxShadow="lg"
            overflow="hidden"
            borderRadius="md"
            bg="white"
            p={6}
          >
            <Heading size="xl" mb={6} color="gray.800">
              Curriculum Vitae
            </Heading>
            <Image
              src="https://i.imgur.com/3u4LfQ0.png"
              alt="Curriculum Vitae - Shan Marion Silveo"
              w="100%"
              objectFit="cover"
            />
          </MotionBox>
        </Flex>
      </Box>
    </>
  );
}
