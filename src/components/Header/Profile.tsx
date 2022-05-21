import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Renan Dore</Text>
        <Text color="gray.300" fontSize="small">
          dore.renan@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Renan Dore"
        src="https://github.com/renandore.png"
      />
    </Flex>
  );
}
