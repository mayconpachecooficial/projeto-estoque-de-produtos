// Importações necessárias
import {
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { useSidebarContext } from "../contexts/SidebarContext";
import { FiMenu } from "react-icons/fi";

// Componente Header
const Header = () => {
  // Verificação do tipo de dispositivo
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  // Extração da função onOpen do contexto
  const { onOpen } = useSidebarContext();

  // Renderização do componente
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1120}
      h="20"
      mx="auto"
      px="2"
      py="2"
      align="center"
      boxShadow="0 1px 0 #ccc"
      color="gray.500"
      fontWeight="bold"
    >
      {/* // Renderização condicional do botão de menu para dispositivos móveis */}
      {isMobile && (
        <IconButton
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          variant="unstyled"
          fontSize="20"
          mr="2"
        ></IconButton>
      )}
      {/* // Texto do cabeçalho */}
      <Text>Dev Class</Text>
      {/* // Área do usuário */}
      <Flex ml="auto">
        <HStack>
          <Text>Maycon Pacheco</Text>
          <Avatar size="mp" name="maycon pacheco" />
        </HStack>
      </Flex>
    </Flex>
  );
};

// Exportação do componente
export default Header;