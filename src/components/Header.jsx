import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import {
  MdArrowDropDown,
  MdDriveFileMoveOutline,
  MdLockOutline,
  MdOutlineCloudDone,
  MdOutlineComment,
  MdOutlineVideoCall,
  MdRestore,
  MdStarBorder,
} from "react-icons/md";

export default function Header() {
  return (
    <Flex
      textColor={"#202124"}
      className="header"
      justifyContent={"space-between"}
    >
      <Flex>
        <Flex m={"3"} mr={"1"}>
          <Image src="/images/docs_logo.png" boxSize={"10"} />
        </Flex>
        <Flex flexDirection={"column"} style={{ lineHeight: "25px" }}>
          <Flex mt={"2"}>
            <Text
              textColor={"blackAlpha.700"}
              fontWeight={400}
              fontSize={"lg"}
              pl={"2"}
              style={{ paddingLeft: "4px" }}
            >
              Untitled document
            </Text>
            <Flex cursor={"pointer"} alignItems={"center"} px={"4"}>
              <Icon
                color={"#44494E"}
                mx={"1"}
                boxSize={"5"}
                as={MdStarBorder}
                borderRadius={"full"}
                _hover={{ bgColor: "gray.100" }}
              />
            </Flex>
          </Flex>
          <Flex>
            <UnorderedList
              cursor={"pointer"}
              ml={"0"}
              listStyleType={"none"}
              display={"flex"}
              style={{ fontSize: "90%" }}
            >
              <ListItem
                borderRadius={"md"}
                _hover={{ bgColor: "gray.100" }}
                px={"2"}
                style={{ paddingLeft: "4px" }}
              >
                File
              </ListItem>
              <ListItem
                borderRadius={"md"}
                _hover={{ bgColor: "gray.100" }}
                px={"2"}
              >
                Edit
              </ListItem>
              <ListItem
                borderRadius={"md"}
                _hover={{ bgColor: "gray.100" }}
                px={"2"}
              >
                View
              </ListItem>
              <ListItem
                borderRadius={"md"}
                _hover={{ bgColor: "gray.100" }}
                px={"2"}
              >
                Insert
              </ListItem>
              <ListItem
                borderRadius={"md"}
                _hover={{ bgColor: "gray.100" }}
                px={"2"}
              >
                Format
              </ListItem>
              <ListItem
                borderRadius={"md"}
                _hover={{ bgColor: "gray.100" }}
                px={"2"}
              >
                Tools
              </ListItem>
              <ListItem
                borderRadius={"md"}
                _hover={{ bgColor: "gray.100" }}
                px={"2"}
              >
                Extensions
              </ListItem>
              <ListItem
                borderRadius={"md"}
                _hover={{ bgColor: "gray.100" }}
                px={"2"}
              >
                Help
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
      <Flex style={{ color: "#54575c" }}>
        <Flex alignItems={"center"} className="meet">
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            boxSize={"14"}
            borderRadius={"full"}
            _hover={{ bgColor: "gray.100", cursor: "pointer" }}
            mx={"1"}
          >
            <Icon color={"#44494E"} boxSize={"7"} as={MdRestore} />
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            boxSize={"14"}
            borderRadius={"full"}
            _hover={{ bgColor: "gray.100", cursor: "pointer" }}
            mx={"1"}
          >
            <Icon color={"#44494E"} boxSize={"7"} as={MdOutlineComment} />
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            boxSize={"14"}
            borderRadius={"full"}
            _hover={{ bgColor: "gray.100", cursor: "pointer" }}
            mx={"1"}
          >
            <Icon color={"#44494E"} boxSize={"7"} as={MdOutlineVideoCall} />
            <Icon color={"#44494E"} boxSize={"7"} as={MdArrowDropDown} />
          </Flex>
          <Box mx={"3"}>
            <Button
              color={"#001d35"}
              fontWeight={"400"}
              p={"9px 24px"}
              borderRadius={"3xl"}
              bgColor={"#c2e7ff"}
              font
              leftIcon={<MdLockOutline />}
              _hover={{ boxShadow: "dark-lg" }}
            >
              Share
            </Button>
          </Box>
        </Flex>
        <Flex m={"3"}>
          <Image
            src="/images/profile.jpg"
            borderRadius={"full"}
            boxSize={"10"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
