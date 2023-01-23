"use client";
import { Highlighter } from "@/Highlighter";
import { ThemeButton } from "@/ThemeButton";
import { createVariants, twyled } from "@/twyled";
import {
  Box,
  Flex,
  Header,
  HeaderLink,
  HeaderLinkIcon,
  Heading1,
  Heading2,
  InfoBox,
  Input,
  Label,
  Main,
} from "@/ui";
import { IconBrandGithub } from "@tabler/icons";

export default function Home() {
  return (
    <Box h="100vh" $dark={{ bg: "slate800" }}>
      <Header
        bg="slate800"
        h={50}
        px="2"
        gap="4"
        borderBottom="1"
        borderColor="slate700"
      >
        <Flex>
          <HeaderLinkIcon
            href="https://github.com/dusanjovanov/twyled"
            gap="1"
            target="_blank"
          >
            <IconBrandGithub />
            Github
          </HeaderLinkIcon>
        </Flex>
        <HeaderLink href="/docs/get-started" ml="auto">
          Docs
        </HeaderLink>
        <ThemeButton />
      </Header>
      <Main pt="8" h="calc(100vh - 50px)" overflowY="auto" mx="auto">
        <Box textAlign="center" mb="20">
          <Heading1
            bg="indigo700"
            color="green400"
            textTransform="uppercase"
            fontSize="6xl"
            fontWeight="black"
            rounded="xl"
            mb="2"
            w="fit-content"
            mx="auto"
            py="2"
            px="4"
          >
            Twyled
          </Heading1>
          <Heading2
            fontWeight="normal"
            fontSize="xl"
            p="2"
            $dark={{ color: "white" }}
          >
            Styled components with Tailwind ergonomics
          </Heading2>
        </Box>
        <InfoBox w="fit-content" mx="auto" mb="4">
          🚧 Site is still under construction
        </InfoBox>
        <Flex mx="auto" px="8">
          <Box flex={2}>
            <Highlighter language="tsx">{exampleCode}</Highlighter>
          </Box>
          <Box flex={1} px="8">
            <Box
              bg="slate800"
              color="white"
              $dark={{ bg: "white", color: "black" }}
              p="4"
              rounded="lg"
            >
              <Heading1 fontSize="lg" mb="4">
                Create user
              </Heading1>
              <Flex mb="4" gap="2">
                <Label fontSize="sm" fontWeight="bold">
                  Name
                </Label>
                <Input
                  type="text"
                  defaultValue="Dusan"
                  p="2"
                  rounded="md"
                  border="1"
                />
              </Flex>
              <Flex gap="2">
                <ExampleButton>Create</ExampleButton>
                <ExampleButton variant="neutral">Cancel</ExampleButton>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Main>
    </Box>
  );
}

const exampleCode = `<Box
  bg="slate800"
  color="white"
  $dark={{ bg: "white", color: "black" }}
  p="4"
  rounded="lg"
>
  <Title fontSize="lg" mb="4">Create user</Title>
  <Flex mb="4" gap="2">
    <Label fontSize="sm" fontWeight="bold">
      Name
    </Label>
    <Input
      defaultValue="Dusan"
      p="2"
      rounded="md"
      border="1"
    />
  </Flex>
  <Flex gap="2">
    <Button>Create</Button>
    <Button variant="neutral">Cancel</Button>
  </Flex>
</Box>`;

const ExampleButton = twyled("button", {
  defaults: {
    border: "0",
    rounded: "md",
  },
  variants: createVariants({
    variant: {
      primary: {
        bg: "blue600",
        color: "white",
        $hover: {
          bg: "blue700",
        },
      },
      neutral: {
        bg: "gray200",
        color: "black",
        $hover: {
          bg: "gray300",
        },
      },
    },
    size: {
      medium: {
        px: "2",
        py: "1.5",
        fontSize: "sm",
      },
      large: {
        px: "2.5",
        py: "2",
        fontSize: "base",
      },
    },
  }),
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});
