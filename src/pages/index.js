// Importando os hooks e componentes necessários do React, Next.js e Chakra UI
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, FormControl, FormLabel, Input, useToast, Spinner, Heading, Link as ChakraLink } from '@chakra-ui/react';

// Definindo o componente Login
export default function Login() {
  // Definindo os estados para o nome de usuário, senha e status de carregamento
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Obtendo os hooks do roteador e do toast
  const router = useRouter();
  const toast = useToast();

  // Definindo a função para lidar com o login
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevenindo o comportamento padrão do formulário
    setIsLoading(true); // Atualizando o status de carregamento

    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulando o tempo de carregamento

    setIsLoading(false); // Atualizando o status de carregamento
    toast({ // Exibindo um toast de sucesso
      title: "Login efetuado com sucesso.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    router.push('/balance'); // Redirecionando o usuário para a página de balanço
  };

  // Renderizando o componente Login
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" backgroundColor="gray.200">
      {/* Ajustando o título para ser responsivo e centralizado */}
      <Heading mb={4} textAlign="center" maxW="90%" mx="auto">Acesso ao Sistema Controle de Estoque</Heading>
      <Box p={8} maxWidth="500px" boxShadow="lg">
        <form onSubmit={handleLogin}>
          <FormControl>
            <FormLabel>Nome de usuário:</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              backgroundColor="white"
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Senha:</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              backgroundColor="white"
            />
          </FormControl>
          <Button colorScheme="teal" type="submit" width="full" mt={4}>
            {isLoading ? (
              <Spinner/> // Exibindo um spinner se estiver carregando
            ) : (
              'Login' // Exibindo o texto "Login" se não estiver carregando
            )}
          </Button>
          <ChakraLink href="/register" textDecoration="none" mt={4} textAlign="center" display="block">Cadastre-se</ChakraLink>
        </form>
      </Box>
    </Box>
  );
}