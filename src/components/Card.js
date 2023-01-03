import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack spacing="10px" borderRadius="2xl" bg="white">
      <Box boxSize="1xl" boxShadow="inner" borderRadius="2xl">
        <Image src={imageSrc} boxShadow="xl" borderRadius="2xl" />
      </Box>
      <VStack spacing="10px" p={5} align="left">
        <Heading size="md" color="black">
          {title}
        </Heading>

        <Text size="sm" color="grey">
          {description}
        </Text>
        <HStack spacing="10px">
          <Text color="black">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
