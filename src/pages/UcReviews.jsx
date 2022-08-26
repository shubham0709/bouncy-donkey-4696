import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";

const UcReviews = () => {
  return (
    <>
      <Text fontSize="40px" mt="5rem" fontWeight="500" color="#375D75">
        My Hours has changed the way our customers work
      </Text>
      <Text fontSize="20px" mt="5rem">
        We've helped <u>250.000+ people</u> track their work <u>since 2002.</u>
      </Text>
      <Text fontSize="20px">
        {" "}
        Our software <u>does not include employee monitoring</u> and never will.
      </Text>
      <Grid
        mt="5rem"
        templateColumns="repeat(3, 1fr)"
        fontFamily={("Avenir Next", "sans-serif")}
        gap="3%"
        fontSize={"20px"}
      >
        {/* box no 1  */}
        <Flex flexDirection="column">
          <Text>
            "Easy tracking of billable hours across various projects.{" "}
            <Text
              bgGradient="linear(to-r, green.200, green.100)"
              borderRadius="1em 0 1em 0"
              w="-webkit-fit-content"
              padding={"1%"}
              h={"-webkit-fit-content"}
            >
              Makes time tracking for different tasks simple."
            </Text>
            <Text as="cite" fontSize="20px" fontWeight="bold">
              - Paul H., Business Owner
            </Text>
          </Text>
          <br />
          <Text>
            "Ease of use, simplicity, streamlined,{" "}
            <Text
              bgGradient="linear(to-r, green.200, green.100)"
              borderRadius="1em 0 1em 0"
              w="-webkit-fit-content"
              padding={"1%"}
              h={"-webkit-fit-content"}
            >
              it really helped me get my hour tracking in order
            </Text>
            . No negatives for the purpose and scope for which I am using the
            software."
            <br />
            <Text as="cite" fontSize="20px" fontWeight="bold">
              - Arieh F., CFO
            </Text>
          </Text>
          <br />
          <Text>
            <Text
              bgGradient="linear(to-r, green.200, green.100)"
              borderRadius="1em 0 1em 0"
              w="-webkit-fit-content"
              padding={"1%"}
              h={"-webkit-fit-content"}
            >
              "Easy to use for my team members who are remote but hourly
            </Text>
            . My House provides a simple and easy way to record, track and
            manage activity."
            <Text as="cite" fontSize="20px" fontWeight="bold">
              - Thomas S., Head of Customer Success
            </Text>
          </Text>
        </Flex>
        {/* box no-2  */}
        <Flex flexDirection="column" justifyContent="space-around">
          <Text>
            "My Hours is great for keeping track of time spent on different
            projects. It makes completing my mandatory timesheets at the end of
            the week{" "}
            <Text
              bgGradient="linear(to-r, green.200, green.100)"
              borderRadius="1em 0 1em 0"
              w="-webkit-fit-content"
              padding={"1%"}
              h={"-webkit-fit-content"}
            >
              WAY FASTER."
            </Text>
            <Text as="cite" fontSize="20px" fontWeight="bold">
              - Michael B., Manager
            </Text>
          </Text>
          <br />
          <Text>
            "The software is very easy to set up, and you can start using it
            right away to track your time,{" "}
            <Text
              bgGradient="linear(to-r, green.200, green.100)"
              borderRadius="1em 0 1em 0"
              w="-webkit-fit-content"
              padding={"1%"}
              h={"-webkit-fit-content"}
            >
              assigning different hourly rates for different types of work."
            </Text>
            <Text as="cite" fontSize="20px" fontWeight="bold">
              - Naomi S., Marketing Manager
            </Text>
          </Text>
          <br />
          <Text>
            "I really love this time tracking software.{" "}
            <Text
              bgGradient="linear(to-r, green.200, green.100)"
              borderRadius="1em 0 1em 0"
              wisth=""
            >
              It keeps track of all my hours and is really easy to use.
            </Text>{" "}
            I would definitely recommend this software. There is nothing that I
            don't like about this software."
          </Text>
          <Text as="cite" fontSize="20px" fontWeight="bold">
            - Christina C., Paralegal
          </Text>
        </Flex>

        {/* box no-3 */}
        <Flex flexDirection="column" justifyContent="space-around">
          <Text>
            "I've enjoyed using My Hours, and I use it every day.{" "}
            <Text
              bgGradient="linear(to-r, green.200, green.100)"
              borderRadius="1em 0 1em 0"
              wisth=""
            >
              Great tool for tracking my time!
            </Text>
            Great tool for tracking my time!"
          </Text>
          <Text as="cite" fontSize="20px" fontWeight="bold">
            {" "}
            - Cody H., Engineer
          </Text>
          <br />
          <Text>
            "Simple to use, perfect for the price,{" "}
            <Text
              bgGradient="linear(to-r, green.200, green.100)"
              borderRadius="1em 0 1em 0"
              w="-webkit-fit-content"
              padding={"1%"}
              h={"-webkit-fit-content"}
            >
              genuinely the best hour tracker I've used yet."
            </Text>
          </Text>
          <Text as="cite" fontSize="20px" fontWeight="bold">
            - Leah M., Engineer
          </Text>
          <br />
          <Text>
            "This is the{" "}
            <Text
              bgGradient="linear(to-r, green.200, green.100)"
              borderRadius="1em 0 1em 0"
              w="-webkit-fit-content"
              padding={"1%"}
              h={"-webkit-fit-content"}
            >
              easiest-to-use software that
            </Text>{" "}
            I've found in terms of tracking hours and minutes for multiple
            projects."
          </Text>
          <Text as="cite" fontSize="20px" fontWeight="bold">
            - Michelle W., Virtual Assistant
          </Text>
          <br />
          <Text>
            "I love that I can track my hours and use it to{" "}
            <Text
              bgGradient="linear(to-r, green.200, green.100)"
              borderRadius="1em 0 1em 0"
              w="-webkit-fit-content"
              padding={"1%"}
              h={"-webkit-fit-content"}
            >
              generate meaningful reports
            </Text>
            generate meaningful reports to measure time spent. It's intuitive,
            easy-to-use, and highly customizable."
          </Text>
          <Text as="cite" fontSize="20px" fontWeight="bold">
            - Kristen B., Bussines Owner
          </Text>
        </Flex>
      </Grid>
      <Text color="#2775a9" fontSize="35" mb="100" mt="5rem">
        <a href="/my hours/review.html" id="a3">
          Read more reviews
        </a>{" "}
        →
      </Text>
    </>
  );
};

export default UcReviews;
