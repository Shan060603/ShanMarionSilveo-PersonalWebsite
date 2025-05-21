"use client";

import React from "react";
import NextLink from "next/link";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/project" },
  { label: "Curriculum Vitae", href: "/CurriculumVitae" },
  { label: "Certificates", href: "/certificate" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  const activeStyle = {
    fontWeight: "bold",
    color: useColorModeValue("blue.600", "blue.300"),
    borderBottom: "2px solid",
    borderColor: useColorModeValue("blue.600", "blue.300"),
  };

  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      px={6}
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={50}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box fontWeight="bold" fontSize="xl">
          Shan Marion Silveo
        </Box>

        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          {navItems.map((nav) => (
            <Link
              as={NextLink}
              key={nav.href}
              href={nav.href}
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              {...(pathname === nav.href ? activeStyle : {})}
            >
              {nav.label}
            </Link>
          ))}
        </HStack>
      </Flex>

      {/* Mobile nav */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={3}>
            {navItems.map((nav) => (
              <Link
                as={NextLink}
                key={nav.href}
                href={nav.href}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.100", "gray.700"),
                }}
                {...(pathname === nav.href ? activeStyle : {})}
                onClick={onClose}
              >
                {nav.label}
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
