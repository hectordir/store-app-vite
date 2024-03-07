import { VStack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";

interface HeaderProps {
  header: {
    title: string;
    thumbnail: string;
    id: number;
  };
}

export const ProductDetailsHeader = ({ header }: HeaderProps) => {
  const { thumbnail, title, id } = header;
  return (
    <VStack>
      <Text>Producto Numero : #{id}</Text>
      <Image src={thumbnail} alt={title} />
    </VStack>
  );
};
