"use client";
import { Highlighter } from "@/Highlighter";
import { createVariants, twyled } from "@/twyled";
import {
  Box,
  ExampleBox,
  Flex,
  Heading1,
  InfoBox,
  InlineCode,
  PageTitle,
  SectionTitle,
  Text,
} from "@/ui";
import { codeMap } from "./codeMap";

export default function GetStarted() {
  return (
    <>
      <Box mb="6">
        <PageTitle>Get started</PageTitle>
        <Text>Twyled is a React UI library optimized for productivity.</Text>
        <Text>
          It has the same benefits of using Tailwind, except you&apos;re using
          props instead of classes. The props are fully typed and themeable.
        </Text>
        <Highlighter language="bash">{codeMap.install}</Highlighter>
      </Box>
      <Box mb="6">
        <SectionTitle>Create twyled</SectionTitle>
        <Text>
          Twyled needs to be initialized first and you do that by calling{" "}
          <InlineCode>createTwyled</InlineCode> and passing it your theme
          object.
        </Text>
        <Text>
          The theme object accepts definitions for your{" "}
          <InlineCode>color</InlineCode> palette,{" "}
          <InlineCode>fontSize</InlineCode>, <InlineCode>spacing</InlineCode>{" "}
          scales...etc. Read more on the Theme page.
        </Text>
        <Highlighter language="js" mb="4">
          {codeMap.init}
        </Highlighter>
        <InfoBox>
          ℹ️ Note: You can use{" "}
          <InlineCode $dark={{ color: "green800" }}>twyled</InlineCode> without
          a theme i.e. you could pass an empty object to{" "}
          <InlineCode $dark={{ color: "green800" }}>createTwyled</InlineCode>.
          But it works much better with a theme -- you get consistent styling
          everywhere and autocompletion for many css values.
        </InfoBox>
      </Box>
      <Box mb="6">
        <SectionTitle>Create a component</SectionTitle>
        <Text>Let&apos;s create a Button component:</Text>
        <Highlighter language="tsx" mb="4">
          {codeMap.firstComponent}
        </Highlighter>
        <Text>This gives us a plain button with default browser styling:</Text>
        <ExampleBox>
          <ExampleBaseButton>Button</ExampleBaseButton>
        </ExampleBox>
        <Text>
          We can style the component by passing props that map to virtually
          every CSS property:
        </Text>
        <Highlighter language="tsx" mb="4">
          {codeMap.styleComponent}
        </Highlighter>
        <Text>The result:</Text>
        <ExampleBox>
          <ExampleBaseButton
            border="0"
            bg="blue600"
            color="white"
            px="2"
            py="1.5"
            fontSize="sm"
            lineHeight="normal"
            rounded="md"
            $hover={{ bg: "blue700" }}
          >
            Button
          </ExampleBaseButton>
        </ExampleBox>
        <SectionTitle>Variants</SectionTitle>
        <Text>
          The button looks fine, but we&apos;re passing too many props and what
          if we wanted to customize it further? We can group and expand these
          styles with <InlineCode>variants</InlineCode>.
        </Text>
        <Highlighter language="js" mb="4">
          {codeMap.variants}
        </Highlighter>
        <Text>
          We use <InlineCode>variants</InlineCode> also by passing props:
        </Text>
        <Highlighter language="tsx" mb="4">
          {codeMap.variantsExample}
        </Highlighter>
        <ExampleBox>
          <Flex gap="3">
            <ExampleButton>Primary medium</ExampleButton>
            <ExampleButton size="large">Primary large</ExampleButton>
            <ExampleButton variant="neutral">Neutral medium</ExampleButton>
            <ExampleButton variant="neutral" size="large">
              Neutral large
            </ExampleButton>
          </Flex>
        </ExampleBox>
        <Text>We can still override the variants:</Text>
        <Highlighter
          language="tsx"
          mb="4"
        >{`<Button bg="purple600" $hover={{ bg: "purple700" }}>
  Primary medium, but purple
</Button>`}</Highlighter>
        <ExampleBox>
          <ExampleButton bg="purple600" $hover={{ bg: "purple700" }}>
            Primary medium, but purple
          </ExampleButton>
        </ExampleBox>
      </Box>
    </>
  );
}

const ExampleBaseButton = twyled("button");

const ExampleButton = twyled("button", {
  defaults: { border: "0" },
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
        lineHeight: "normal",
        rounded: "md",
        fontSize: "sm",
      },
      large: {
        px: "2.5",
        py: "2",
        lineHeight: "normal",
        rounded: "md",
        fontSize: "base",
      },
    },
  }),
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});
