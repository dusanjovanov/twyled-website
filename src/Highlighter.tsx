import { Prism } from "react-syntax-highlighter";
import codeTheme from "react-syntax-highlighter/dist/esm/styles/prism/coldark-dark";
import { twyled } from "./twyled";
import { Box } from "./ui";

export const TwPrism = twyled(Prism);

export const Highlighter = twyled(
  ({
    className,
    ...props
  }: {
    children: string;
    language: string;
    className?: string;
  }) => {
    return (
      <Box className={className}>
        <TwPrism
          fontSize="sm"
          rounded="md"
          style={codeTheme}
          customStyle={{ margin: 0 }}
          {...props}
        />
      </Box>
    );
  }
);
