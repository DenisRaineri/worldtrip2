import { Flex, Grid, GridItem } from "@chakra-ui/layout";
import ListItem from "./ListItems";

export default function Items() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem>
        <ListItem icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <ListItem icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <ListItem icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <ListItem icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <ListItem icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
