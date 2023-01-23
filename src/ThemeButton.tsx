import { IconMoon } from "@tabler/icons";
import { useActions } from "./store";
import { Button } from "./ui";

export const ThemeButton = () => {
  const { toggleTheme } = useActions();

  return (
    <Button
      w={34}
      h={34}
      bg="transparent"
      border="0"
      rounded="full"
      $hover={{ bg: "white" }}
      css={{
        "&:hover": {
          svg: {
            stroke: "black",
          },
        },
      }}
      onClick={toggleTheme}
    >
      <IconMoon size={20} color="white" />
    </Button>
  );
};
