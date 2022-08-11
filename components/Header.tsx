import { Flex, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useRouter } from "next/router";

export default function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

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
      {notHomePage && (
        <Link href="/">
          <a>
            <Icon
              as={RiArrowLeftSLine}
              fontSize={[20, 40]}
              justifySelf="start"
            />
          </a>
        </Link>
      )}{" "}
      <Image src="logo.svg" alt="logo" mx="auto" w={["81px", "184px"]} />
    </Flex>
  );
}
