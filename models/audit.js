import { AUDIT_DATA } from "../data/audit_api_response.js";

export default class Audit {
  constructor() {}

  getData() {
    return AUDIT_DATA;
  }
}