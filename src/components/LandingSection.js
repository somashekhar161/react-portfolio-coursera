import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar
      name="I am Pete!"
      size="2xl"
      src={"https://i.pravatar.cc/150?img=7"}
    />
    <VStack spacing={"23px"}>
      <Heading as="h3" size="md">
        {greeting}
      </Heading>
      <Heading as="h1" size="2xl" noOfLines={1}>
        {bio1}
      </Heading>
    </VStack>
    <Heading as="h1" size="2xl" noOfLines={1}>
      {bio2}
    </Heading>
  </FullScreenSection>
);

export default LandingSection;
