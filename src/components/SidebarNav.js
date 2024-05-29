// Importações necessárias
import React, { useState } from "react";
import { Box, Link as ChakraLink, Stack, Text, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

// Componente SidebarNav
const SidebarNav = () => {
  // Extração das funções do roteador
  const { asPath, push } = useRouter();
  // Estado para controle de carregamento
  const [loading, setLoading] = useState(false);
  // Função para exibir toasts
  const toast = useToast();

  // Função para lidar com o logout
  const handleLogout = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulação de chamada de API para logout
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    // Exibição de toast de sucesso
    toast({
      title: "Usuário desconectado com sucesso.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    // Redirecionamento para a página inicial
    push("/");
  };

  // Renderização do componente
  return (
    <Stack spacing="6">
      {/* // Seção de Cadastro */}
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="gray.400">
          CADASTRO
        </Text>
        <Stack>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/" ? "gray.200" : ""}
          >
            <Link href="/produtos">
              <Text fontSize="md" fontWeight="medium" color="gray.500">
                PRODUTOS
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>
      {/* // Seção de Estoque */}
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="gray.400">
          ESTOQUE
        </Text>
        <Stack>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/balance" ? "gray.200" : ""}
          >
            <Link href="/balance">
              <Text fontSize="md" fontWeight="medium" color="gray.500">
                TOTAL
              </Text>
            </Link>
          </ChakraLink>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/stockEntries" ? "gray.200" : ""}
          >
            <Link href="/stockEntries">
              <Text fontSize="md" fontWeight="medium" color="gray.500">
                ENTRADAS
              </Text>
            </Link>
          </ChakraLink>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/stockOutputs" ? "gray.200" : ""}
          >
            <Link href="/stockOutputs">
              <Text fontSize="md" fontWeight="medium" color="gray.500">
                SAÍDAS
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>
      {/* // Seção de Logout */}
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="gray.400">
          SAIR
        </Text>
        <Stack>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/" ? "gray.200" : ""}
            onClick={handleLogout}
            isLoading={loading}
          >
            <Text fontSize="md" fontWeight="medium" color="gray.500">
              SAIR
            </Text>
          </ChakraLink>
        </Stack>
      </Stack>
    </Stack>
  );
};

// Exportação do componente
export default SidebarNav;