import { Flex, Image } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Flex>
        <Image
          src="ogimage.png"
          alt="logo"
          onClick={() => router.push("/home")}
        />
      </Flex>
    </>
  );
};

export default Login;
