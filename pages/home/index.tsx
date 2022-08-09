import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Banner from "../../components/Banner";
import Divider from "../../components/Divider";
import Header from "../../components/Header";
import Items from "../../components/List/Items";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Banner />
      <Items />

      <Divider />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
    </>
  );
};

export default Home;
