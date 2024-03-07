import { Image } from "@chakra-ui/react";

interface HeaderProps {
  header: {
    title: string;
    thumbnail: string;
  };
}

export const ProductHeader = ({ header }: HeaderProps) => {
  const { thumbnail, title } = header;
  return (
    <>
      <Image
        src={thumbnail}
        alt={title}
        borderRadius="lg"
        w="260px"
        h="200px"
      />
    </>
  );
};
