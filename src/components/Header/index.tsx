/* HStack -> Horizontal, VStack -> Vertical */
import { Flex } from "@chakra-ui/react";

import { Logo } from "../Header/Logo";
import { NotificationNav } from "../Header/NotificationNav";
import { Profile } from "../Header/Profile";
import { SearchBox } from "../Header/SearchBox";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20" /* 80 px altura */
      mx="auto" /* ficar centralizado */
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
