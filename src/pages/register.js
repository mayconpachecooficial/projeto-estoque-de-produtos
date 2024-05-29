// Importando os hooks e componentes necessários
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, FormControl, FormLabel, Input, useToast, Spinner, Heading, Link as ChakraLink } from '@chakra-ui/react';

// Definindo o componente Register
export default function Register() {
  // Definindo os estados para o nome de usuário, senha e status de carregamento
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Inicializando o hook useRouter para navegação e useToast para notificações
  const router = useRouter();
  const toast = useToast();

  // Definindo a função para lidar com o registro
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 2000)); // Simula o tempo de carregamento

    setIsLoading(false);
    toast({
      title: "Registro efetuado com sucesso.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    router.push('/');
  };

  // Renderizando o componente Register
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" backgroundColor="gray.200">
      {/* Ajustando o título para ser responsivo e centralizado */}
      <Heading mb={4} textAlign="center" maxW="90%" mx="auto">Registro no Sistema Controle de Estoque</Heading>
      <Box p={8} maxWidth="500px" boxShadow="lg">
        <form onSubmit={handleRegister}>
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
              <Spinner/>
            ) : (
              'Registrar'
            )}
          </Button>
          <ChakraLink href="/" textDecoration="none" mt={4} textAlign="center" display="block">Faça Seu Login</ChakraLink>
        </form>
      </Box>
    </Box>
  );
}