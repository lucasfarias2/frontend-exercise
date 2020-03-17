import axios from 'axios';

class ItemService {
  public API_URL: string;

  constructor() {
    this.API_URL = 'http://localhost:8080/api';
  }

  public async fetchItems() {
    const response = await axios.get(`${this.API_URL}/items`);

    return response.data;
  }
}

export default new ItemService();
