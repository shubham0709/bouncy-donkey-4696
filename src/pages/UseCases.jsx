import React from "react";
import { Box, Button, Grid, Text } from "@chakra-ui/react";
import UcGridbox from "./UcGridbox";
import UcReviews from "./UcReviews";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UseCases = () => {
  return (
    <div>
      {/* banner  */}
      <Navbar />
      <div>
        <Text
          mt="70px"
          marginBottom="20px"
          color="#212529"
          fontSize="72px"
          fontWeight="200"
          outline="none"
        >
          Use cases
        </Text>

        <Text
          fontSize="40px"
          marginBottom="20px"
          fontWeight="600"
          color="#375D75"
        >
          & how My Hours solves problems
        </Text>

        <Text
          fontSize="28px"
          lineHeight="1.5"
          letterSpacing="normal"
          marginTop="20px"
          marginBottom="60px"
          paddingRight="50px"
          paddingLeft="50px"
          color="#375D75"
          width="1200px"
          margin="auto"
        >
          From tracking time, to reporting and invoicing your clients, My Hours
          is there for you the whole time.
        </Text>
      </div>

      {/* button  */}
      <div>
        <Button
          outline={"none"}
          size="lg"
          w="300px"
          h="75px"
          bg={"#3b8fc2"}
          mt="70px"
          textAlign="center"
        >
          <Text fontSize={"larger"} color="#fff" fontWeight="semibold">
            Get Started It's Free
          </Text>
        </Button>
      </div>
      <br />
      <Box w="65%" margin={"auto"} marginTop="200px">
        <Grid templateColumns="repeat(3, 1fr)" gap={5}>
          <UcGridbox />
        </Grid>
        <UcReviews />
      </Box>
      <Footer />
    </div>
  );
};

export default UseCases;
