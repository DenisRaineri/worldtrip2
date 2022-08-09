import { Flex, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justifyContent="center"
    >
      <Image src="logo.svg" alt="logo" mx="auto" w={["81px", "184px"]} />
    </Flex>
  );
}
