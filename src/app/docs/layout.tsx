"use client";
import { ThemeButton } from "@/ThemeButton";
import { twyled } from "@/twyled";
import { Box, Flex, Header, Heading1, Main, Nav, TwLink } from "@/ui";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header
        bg="gray800"
        h={50}
        px="2"
        gap="4"
        borderBottom="1"
        borderColor="gray700"
      >
        <TwLink href="/">
          <Heading1 fontSize="lg" fontWeight="black" color="green400">
            TWYLED
          </Heading1>
        </TwLink>
        <Box ml="auto">
          <ThemeButton />
        </Box>
      </Header>
      <Flex alignItems="normal" h="calc(100vh - 50px)">
        <Nav bg="gray800" w={300}>
          <ul>
            <ListItem
              color="white"
              fontWeight="semibold"
              fontSize="lg"
              $hover={{ bg: "slate700" }}
            >
              <TwLink
                href="/docs/get-started"
                color="white"
                display="block"
                p="4"
              >
                Get started
              </TwLink>
            </ListItem>
            <ListItem
              color="white"
              fontWeight="semibold"
              fontSize="lg"
              $hover={{ bg: "slate700" }}
            >
              <TwLink href="/docs/props" color="white" display="block" p="4">
                Props
              </TwLink>
            </ListItem>
            <ListItem
              color="white"
              fontWeight="semibold"
              fontSize="lg"
              $hover={{ bg: "slate700" }}
            >
              <TwLink href="/docs/theme" color="white" display="block" p="4">
                Theme
              </TwLink>
            </ListItem>
          </ul>
        </Nav>
        <Main
          px="8"
          py="6"
          flex={1}
          overflowY="scroll"
          $dark={{ bg: "slate800", color: "white" }}
        >
          {children}
        </Main>
      </Flex>
    </>
  );
}

const ListItem = twyled("li");
