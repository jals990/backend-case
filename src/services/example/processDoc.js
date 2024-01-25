import api from "../../apis/example";

export async function search(data) {
  const { arg } = data
  try {
    
    const response = await api.get('example',{
      params: {
        id: arg
      }
    });

    return response;
  } catch (error) {
    throw({ code: 403, message: "XXXX - Erro ao obter os dados." })
  }
}
