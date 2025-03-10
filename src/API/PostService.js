import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      "http://localhost:5000/seminars",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }

  static async getById(id) {
      const response = await axios.get(`http://localhost:5000/seminars/${id}`);
      return response;
  }

  static async getCommentsByPostId(id) {
    const response = await axios.get(`http://localhost:5000/seminars/${id}/comments`);
      return response;
    }

       // Метод для удаления семинара
  static async deleteSeminar(id) {
    try {
      const response = await axios.delete(`http://localhost:5000/seminars/${id}`);
      return response;
    } catch (error) {
      console.error("Ошибка при удалении семинара", error);
      throw error; // Бросаем ошибку для дальнейшей обработки в компоненте
    }
  }


  // Метод для обновления семинара
  static async updateSeminar(id, updatedData) {
    try {
      const response = await axios.put(
        `http://localhost:5000/seminars/${id}`,
        updatedData
      );
      return response;
    } catch (error) {
      console.error("Ошибка при обновлении семинара", error);
      throw error; // Бросаем ошибку для дальнейшей обработки
    }
  }


  }