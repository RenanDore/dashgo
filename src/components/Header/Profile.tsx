import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Renan Dore</Text>
          <Text color="gray.300" fontSize="small">
            dore.renan@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Renan Dore"
        src="https://github.com/renandore.png"
      />
    </Flex>
  );
}
