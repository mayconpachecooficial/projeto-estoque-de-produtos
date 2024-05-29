// Importando o ChakraProvider do Chakra UI React
import { ChakraProvider } from "@chakra-ui/react";

// Importando o SidebarProvider do contexto da Sidebar
import { SidebarProvider } from "../contexts/SidebarContext";

// Definindo a função MyApp que é o componente principal do aplicativo
function MyApp({ Component, pageProps }) {
  return (
    // Utilizando o ChakraProvider para fornecer o tema do Chakra UI para todos os componentes filhos
    <ChakraProvider>
      {/* // Utilizando o SidebarProvider para fornecer o estado e as funções de controle da Sidebar para todos os componentes filhos */}
      <SidebarProvider>
        {/* // Renderizando o componente da página atual passando todas as suas props */}
        <Component {...pageProps} />
      </SidebarProvider>
    </ChakraProvider>
  );
}

// Exportando o MyApp como o componente padrão deste módulo
export default MyApp;