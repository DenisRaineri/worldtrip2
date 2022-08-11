import { Flex, Image } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Flex w="100%" justify="center" alignItems="center">
        <Image src="logo.svg" alt="logo" onClick={() => router.push("/home")} />
      </Flex>
    </>
  );
};

export default Login;
