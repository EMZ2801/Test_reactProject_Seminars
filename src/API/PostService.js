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
  }