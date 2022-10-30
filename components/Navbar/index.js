import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Hide,
  Image,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { api_origin } from "../../constraint";

export default function Navbar({ session, user }) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="#FFFFFF"
        px={4}
        pos="sticky"
        left="0"
        right="0"
        top="0"
        zIndex="sticky"
        shadow={"md"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <NextLink href="/">
                <Link>
                  <Image src="/Group32.svg" alt="sahaware" />
                </Link>
              </NextLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NextLink href={"/"}>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: "gray.200",
                  }}
                >
                  Home
                </Link>
              </NextLink>
              {/* <NextLink href="/product?page=1"> */}
              <NextLink>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: "gray.200",
                  }}
                >
                  Article
                </Link>
              </NextLink>

              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                }}
                // href={"/riwayat"}
              >
                Create
              </Link>
            </HStack>
          </HStack>

          <Flex alignItems={"center"} justifyContent="space-between">
            <Link href="/cart" paddingTop={"2"}>
              <Icon as={HiShoppingCart} h="50%" w="70%" marginInlineEnd={"5"} />
            </Link>
            {user ? (
              <Hide below="md">
                <Menu>
                  <MenuList>
                    <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Hide>
            ) : (
              <Hide below="md">
                <Button
                  colorScheme="twitter"
                  onClick={() => router.push("/login")}
                >
                  Login
                </Button>
              </Hide>
            )}
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box bg="#FFFFFF" pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NextLink href={"/"}>
                <Link
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: "gray.200",
                  }}
                >
                  Home
                </Link>
              </NextLink>
              {/* <NextLink href="/product?page=1"> */}
              <NextLink>
                <Link
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: "gray.200",
                  }}
                >
                  Article
                </Link>
              </NextLink>

              <Link
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                }}
                // href={"#"}
              >
                create
              </Link>
              {session ? (
                <Button
                  colorScheme="twitter"
                  variant="link"
                  onClick={() => signOut()}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  colorScheme="twitter"
                  variant="link"
                  onClick={() => router.push("login")}
                >
                  Login
                </Button>
              )}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
