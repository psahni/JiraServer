import { 
  CONFLUENCE_API_TOKEN, 
  CONFLUENCE_USERNAME, 
  CONFLUENCE_BASE_URL, 
  CONFLUENCE_SPACE_KEY 
} from "../config.js";

const authHeader = `Basic ${btoa(`${CONFLUENCE_USERNAME}:${CONFLUENCE_API_TOKEN}`)}`;

export default class Confluence {    
  constructor() {
    this.payload = {
      type: 'page',
      title: 'API Report v1.0',
      space: { key: CONFLUENCE_SPACE_KEY },
      body: {
        storage: {
          value: "",
          representation: 'storage'
        }
      }
    };
  }

  create() {}

  async publish(data) {
    this.payload.body.storage.value = data;
    console.log("==> Publish confluence Page", this.payload);

    try {
      const response = await fetch(`${CONFLUENCE_BASE_URL}/wiki/rest/api/content`, {
        method: 'POST',
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.payload)
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      console.log('Page created:', data._links.webui);
    } catch (error) {
      
      console.error('Error:', error.message);
    }

  }
}