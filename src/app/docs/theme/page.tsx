"use client";
import { Highlighter } from "@/Highlighter";
import {
  Box,
  Button,
  Flex,
  InfoBox,
  PageTitle,
  SectionTitle,
  Text,
} from "@/ui";
import { defaultColorsTheme } from "twyled";
import { IconCopy } from "@tabler/icons";

const { black, current, inherit, white, transparent, ...colors } =
  defaultColorsTheme;

export default function Theme() {
  return (
    <>
      <PageTitle>Theme</PageTitle>
      <Text>This what the theme object looks like:</Text>
      <Highlighter language="js" mb="4">
        {themeDefCode}
      </Highlighter>
      <SectionTitle>Defining the theme</SectionTitle>
      <Highlighter language="js" mb="4">
        {definingTheThemeCode}
      </Highlighter>
      <InfoBox mb="4">
        ℹ️ Note: You don&apos;t have to define every theme slot.
      </InfoBox>
      <Text>For each theme slot, twyled exports a defaultTheme:</Text>
      <Highlighter language="js" mb="4">
        {themeDefaultsCode}
      </Highlighter>
      <SectionTitle>Default theme</SectionTitle>
      <Text>
        The default theme values are all based on Tailwind&apos;s default theme.
      </Text>
      <SectionTitle fontSize="xl">Colors</SectionTitle>
      <Box
        display="grid"
        overflow="hidden"
        gap="2"
        css={{ gridTemplateColumns: "repeat(10, 1fr)" }}
      >
        {Object.entries(colors).map(([key, value]) => {
          return (
            <Box
              key={key}
              bg={key as any}
              h={30}
              border="1"
              borderColor="slate400"
              rounded="md"
              p="5"
            />
          );
        })}
      </Box>
    </>
  );
}

const themeDefCode = `{
  colors: {},
  spacing: {},
  borderWidth: {},
  borderRadius: {},
  fontSize: {},
  fontFamily: {},
  fontWeight: {},
  lineHeight: {},
  zIndex: {},
  breakpoints: {}
}`;

const definingTheThemeCode = `import { createTwyled } from "twyled"

createTwyled({
  colors: {
    primary: "dodgerblue",
    secondary: "limegreen"
  },
  fontSize: {
    small: "0.8rem",
    medium: "1rem",
    large: "1.2rem"
  }
})`;

const themeDefaultsCode = `import { createTwyled, defaultColorsTheme, defaultFontSizeTheme } from "twyled"

createTwyled({
  colors: {
    ...defaultColorsTheme,
    primary: "dodgerblue",
    secondary: "limegreen"
  },
  fontSize: {
    ...defaultFontSizeTheme,
    small: "0.8rem",
    medium: "1rem",
    large: "1.2rem"
  }
})`;
