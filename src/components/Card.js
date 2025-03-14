import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
    <HStack
     >
      <VStack >
      <Image  src={imageSrc} alt={title} />
        <Heading>{title}</Heading>
        <Text>{description}</Text>     
   <HStack justifyContent="flex-end" >
   <Text as='b'  color='black'>
   see more
   </Text>
   <FontAwesomeIcon icon={faArrowRight} size="1x" color='black' />
   </HStack>    
      </VStack>
    </HStack>
    </>
  );
  
};

export default Card;
