export const codeMap = {
  install: `npm install twyled`,
  init: `import { createTwyled } from "twyled"

const { twyled, createVariants } = createTwyled({
  colors: {
    primary: "dodgerblue",
    neutral: "#ddd"
  },
  fontSize: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
  },
})`,
  firstComponent: `const Button = twyled("button")
  
<Button>Button</Button>`,
  styleComponent: `<Button
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
</Button>`,
  variants: `const Button = twyled("button", {
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
});`,
  variantsExample: `<Button>Primary medium</Button>
<Button size="large">Primary large</Button>
<Button variant="neutral">Neutral medium</Button>
<Button variant="neutral" size="large">Neutral large</Button>`,
};
