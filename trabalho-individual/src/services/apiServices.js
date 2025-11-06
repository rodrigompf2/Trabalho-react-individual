import api from "./api";

export const getClientes = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    return [];
  }
};

export const postCliente = async (data) => {
  try {
    const response = await api.post("/users", data);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar cliente:", error);
    return null;
  }
};
