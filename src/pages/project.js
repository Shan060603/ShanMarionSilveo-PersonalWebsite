"use client";

import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  useColorModeValue,
  Heading,
  IconButton,
  Text,
  Link,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import TopNav from "../components/topnav";

const MotionBox = motion(Box);

// Project data with frontend and backend repo links
const projects = [
  {
    title: "Asset Management System",
    description:
      "A web-based application for managing and tracking assets, including inventory management, asset tracking, asset assigning, and reporting.",
    images: [
      "https://i.imgur.com/4qgIdnV.jpeg",
      "https://i.imgur.com/DPkSfEw.jpeg",
      "https://i.imgur.com/fqLG0Od.jpeg",
      "https://i.imgur.com/GSgXaEq.jpeg",
      "https://i.imgur.com/MavAgA0.jpeg",
    ],
    frontendUrl:
      "https://github.com/TechnoPH-OJTs/asset-management-system-frontend",
    backendUrl:
      "https://github.com/TechnoPH-OJTs/asset-management-system-backend",
  },
  {
    title: "2 Factor Authentication Register",
    description:
      "Secure registration system that supports two-factor authentication using OTP and QR codes for better user protection.",
    images: [
      "https://i.imgur.com/BqjwXwx.png",
      "https://i.imgur.com/jSTOf5L.png",
    ],
    frontendUrl: "https://github.com/yourusername/2fa-frontend",
    backendUrl: "https://github.com/yourusername/2fa-backend",
  },
  {
    title: "Carpass and Parking Management System",
    description:
      "Automates the registration and tracking of vehicle entries, exits, and parking history in residential and commercial facilities.",
    images: [
      "https://i.imgur.com/TWmIL6e.png",
      "https://i.imgur.com/9GpdeBD.png",
    ],
    frontendUrl: "https://github.com/yourusername/carpass-frontend",
    backendUrl: "https://github.com/yourusername/carpass-backend",
  },
  {
    title: "Water and Laundry System",
    description:
      "Manages usage records and schedules for water distribution and laundry machines in shared housing facilities.",
    images: [
      "https://i.imgur.com/kL6D5FV.png",
      "https://i.imgur.com/zv4Wlxu.png",
    ],
    frontendUrl: "https://github.com/yourusername/laundry-frontend",
    backendUrl: "https://github.com/yourusername/laundry-backend",
  },
];

// Carousel component
const ProjectCarousel = ({
  title,
  description,
  images,
  frontendUrl,
  backendUrl,
}) => {
  const [current, setCurrent] = useState(0);
  const headingColor = useColorModeValue("gray.800", "gray.100");
  const cardBg = useColorModeValue("white", "gray.800");

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Flex
      maxW="6xl"
      mx="auto"
      direction="column"
      align="center"
      justify="center"
      mb={10}
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
        position="relative"
      >
        <Heading size={{ base: "lg", md: "xl" }} mb={2} color={headingColor}>
          {title}
        </Heading>

        <Text color={useColorModeValue("gray.600", "gray.300")} mb={2}>
          {description}
        </Text>

        {/* GitHub links */}
        <HStack spacing={6} justify="left" mb={4}>
          <Link
            href={frontendUrl}
            color="teal.500"
            fontWeight="medium"
            isExternal
            _hover={{ textDecoration: "underline" }}
          >
            Frontend Code
          </Link>
          <Link
            href={backendUrl}
            color="teal.500"
            fontWeight="medium"
            isExternal
            _hover={{ textDecoration: "underline" }}
          >
            Backend Code
          </Link>
        </HStack>

        {/* Image Carousel */}
        <Image
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          w="100%"
          objectFit="contain"
          borderRadius="md"
          mb={4}
        />

        <Flex
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
          width="100%"
          px={{ base: 2, sm: 4 }}
          justify="space-between"
          pointerEvents="none"
          zIndex={1}
        >
          <IconButton
            aria-label="Previous"
            icon={<ChevronLeftIcon />}
            onClick={prev}
            size={{ base: "xs", sm: "sm" }}
            bg="rgba(0,0,0,0.4)"
            color="white"
            _hover={{ bg: "rgba(0,0,0,0.6)" }}
            pointerEvents="auto"
            borderRadius="full"
          />
          <IconButton
            aria-label="Next"
            icon={<ChevronRightIcon />}
            onClick={next}
            size={{ base: "xs", sm: "sm" }}
            bg="rgba(0,0,0,0.4)"
            color="white"
            _hover={{ bg: "rgba(0,0,0,0.6)" }}
            pointerEvents="auto"
            borderRadius="full"
          />
        </Flex>
      </MotionBox>
    </Flex>
  );
};

export default function CVPage() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const headingColor = useColorModeValue("gray.800", "gray.100");

  return (
    <>
      <TopNav />
      <Box
        bg={bg}
        minH="100vh"
        py={{ base: 6, md: 10 }}
        px={{ base: 4, md: 16 }}
      >
        <Heading
          size={{ base: "lg", md: "xl" }}
          mb={{ base: 4, md: 6 }}
          color={headingColor}
          textAlign="center"
        >
          Projects
        </Heading>

        {projects.map((project, idx) => (
          <ProjectCarousel
            key={idx}
            title={project.title}
            description={project.description}
            images={project.images}
            frontendUrl={project.frontendUrl}
            backendUrl={project.backendUrl}
          />
        ))}
      </Box>
    </>
  );
}
