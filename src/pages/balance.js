// Importando os componentes necessários do Chakra UI e React
import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

// Importando os componentes Header e Sidebar
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// Definindo o componente Balance
const Balance = () => {
  // Definindo os estados para a lista de produtos, produto filtrado e produtos do combo box
  const [listProducts, setListProducts] = useState([]);
  const [productFiltered, setProductFiltered] = useState("");
  const [cmbProducts, setCmbProducts] = useState([]);

  // Função para construir o array de balanço
  const BuildBalanceArray = () => {
    // Obtendo os dados do localStorage
    const db_stock_outputs = localStorage.getItem("db_stock_outputs")
      ? JSON.parse(localStorage.getItem("db_stock_outputs"))
      : [];

    const db_stock_entries = localStorage.getItem("db_stock_entries")
      ? JSON.parse(localStorage.getItem("db_stock_entries"))
      : [];

    const db_products = localStorage.getItem("db_products")
      ? JSON.parse(localStorage.getItem("db_products"))
      : [];

    // Criando um novo array para armazenar os dados processados
    const newArray = [];

    // Processando os dados dos produtos
    db_products.map((prod) => {
      // Calculando as entradas e saídas para cada produto
      const entries = db_stock_entries
        .filter((item) => item.product_id === prod.id)
        .map((entry) => Number(entry.amount))
        .reduce((acc, cur) => acc + cur, 0);

      const outputs = db_stock_outputs
        .filter((item) => item.product_id === prod.id)
        .map((entry) => Number(entry.amount))
        .reduce((acc, cur) => acc + cur, 0);

      // Calculando o total para cada produto
      const total = Number(entries) - Number(outputs);

      // Adicionando os dados processados ao novo array
      newArray.push({
        product_id: prod.id,
        product_name: prod.name,
        amount: total,
      });

      // Atualizando os estados com os dados processados
      setListProducts(newArray);
      setCmbProducts(newArray);
    });
  };

  // Chamando a função BuildBalanceArray quando o componente é montado
  useEffect(() => {
    BuildBalanceArray();
  }, []);

  // Função para filtrar os produtos
  const handleFilterProducts = () => {
    // Se não houver produto filtrado, definir a lista de produtos como os produtos do combo box
    if (!productFiltered) {
      setListProducts(cmbProducts);
      return;
    }

    // Filtrando os produtos do combo box com base no produto filtrado
    const newArray = cmbProducts.filter(
      (item) => item.product_id === productFiltered
    );

    // Atualizando a lista de produtos com os produtos filtrados
    setListProducts(newArray);
  };

  // Renderizando o componente Balance
  return (
    // Estrutura básica do layout
    <Flex h="100vh" flexDirection="column">
      <Header />

      <Flex w="100%" my="6" maxW={1120} mx="auto" px="6" h="100vh">
        <Sidebar />

        {/* // Conteúdo principal */}
        <Box w="100%">
          {/* // Filtro de produtos */}
          <SimpleGrid minChildWidth={240} h="fit-content" spacing="6">
            <Select
              value={productFiltered}
              onChange={(e) => setProductFiltered(e.target.value)}
            >
              <option value="">Selecione um item</option>
              {cmbProducts &&
                cmbProducts.length > 0 &&
                cmbProducts.map((item, i) => (
                  <option key={i} value={item.product_id}>
                    {item.product_name}
                  </option>
                ))}
            </Select>
            <Button w="40" onClick={handleFilterProducts}>
              FILTRAR
            </Button>
          </SimpleGrid>

          {/* // Tabela de produtos */}
          <Box overflowY="auto" height="80vh">
            <Table mt="6">
              <Thead>
                <Tr>
                  <Th fontWeight="bold" fontSize="14px">
                    Nome
                  </Th>
                  <Th fontWeight="bold" fontSize="14px">
                    Qtd.
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {listProducts.map((item, i) => (
                  <Tr key={i}>
                    <Td color="gray.500">{item.product_name}</Td>
                    <Td color="gray.500">{item.amount}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

// Exportando o componente Balance como padrão deste módulo
export default Balance;