import { Stack, StackProps, useColorModeValue } from "@chakra-ui/react";

interface ContentLayout extends StackProps {
  children: React.ReactNode;
}
export const ContentLayout = (props: ContentLayout) => {
  const backgroundColor = useColorModeValue("white", "#333333");

  return (
    <Stack
      h={"87.55vh"}
      w={"100%"}
      direction="row"
      flexWrap="wrap"
      spacing={4}
      justifyContent="center"
      backgroundColor={backgroundColor}
      {...props}
    >
      {props.children}
    </Stack>
  );
};
