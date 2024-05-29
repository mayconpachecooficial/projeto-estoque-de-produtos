// Importando o hook useDisclosure do Chakra UI React
import { useDisclosure } from "@chakra-ui/react";

// Importando createContext e useContext do React
import { createContext, useContext } from "react";

// Criando um contexto para a Sidebar
const SidebarContext = createContext({});

// Criando um provider para o contexto da Sidebar
export const SidebarProvider = ({ children }) => {
  // Utilizando o hook useDisclosure para controlar a visibilidade da Sidebar
  const disclosure = useDisclosure();

  // Retornando o Provider do contexto da Sidebar com o valor sendo o objeto retornado pelo useDisclosure
  return (
    <SidebarContext.Provider value={disclosure}>
      {children}
    </SidebarContext.Provider>
  );
};

// Criando um hook personalizado para utilizar o contexto da Sidebar
export const useSidebarContext = () => useContext(SidebarContext);