// Importações necessárias
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useSidebarContext } from "../contexts/SidebarContext";
import SidebarNav from "./SidebarNav";

// Componente Sidebar
const Sidebar = () => {
  // Extração das funções do contexto da Sidebar
  const { isOpen, onClose } = useSidebarContext();

  // Verificação do tipo de dispositivo
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  // Renderização condicional do componente
  if (isDrawerSidebar) {
    // Renderização para dispositivos móveis
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={() => onClose()}>
        <DrawerOverlay>
          <DrawerContent p="2" onClick={() => onClose()}>
            <DrawerCloseButton />
            <DrawerHeader />

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  // Renderização para dispositivos não móveis
  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
};

// Exportação do componente
export default Sidebar;