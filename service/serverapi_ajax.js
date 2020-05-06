/* ServerAPI talks REST with the backend server.
 *
 * All server communication takes place via this singleton module!
 *
 * Calls return promises.
 *
 * (Wish I could use async/await but browser support is still lacking.)
 *
 * My Python REST API server implements this simple movie API:
 * https://github.com/tomimick/restpie3
 */

import axios from "axios";
import https from "https";
import config from "../configs/apis/config";

const PUBLIC_URL = config.domain.blogService + "/v1";

class ServerAPI {
  constructor() {
    this.client = axios.create({
      baseURL: PUBLIC_URL,
      timeout: 20000,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    });
  }

  getCategories() {
    let url = `${PUBLIC_URL}/categories`;
    return this.client.get(url);
  }

  getFeatures() {
    let url = `${PUBLIC_URL}/features`;
    return this.client.get(url);
  }

  getSlug(slug) {
    let url = `${PUBLIC_URL}/${slug}`;
    return this.client.get(url);
  }

  searchByQuery(query) {
    let url = `${PUBLIC_URL}/search`;
    return this.client.get(url, {
      params: {
        query,
      },
    });
  }
}

// export singleton API
const api = new ServerAPI();
export default api;
