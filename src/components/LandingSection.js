import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import photo from "../images/bin.jpeg"

const greeting = "Hello, I am Benja";
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
    <VStack spacing={16}>
      
    <VStack spacing={4} alignItems="center"> 
    <Avatar src={photo} size="2xl" />
  
    <Heading>{greeting}</Heading>
    </VStack> 
    <VStack spacing={6}> 
    <Heading>
    {bio1}
    </Heading>
    <Heading>
    {bio2}
    </Heading>
    </VStack> 

    </VStack>


  </FullScreenSection>
);

export default LandingSection;
