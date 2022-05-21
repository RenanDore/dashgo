import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360} /* 360px */
        bg="gray.800"
        p="8" /* 32px - sempre multiplicar por 4 se for px ou dividir por 2 se for rem */
        borderRadius={8} /* 8px */
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="Password" type="password" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
