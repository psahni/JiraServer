import { LLM_SERVER } from "../config.js";
import { AUDIT_DATA } from "../data/audit_api_response.js";
import fetch from "node-fetch";

export const fetchSummary = async (_, res) => {
  try {
    const response = await fetch(`${LLM_SERVER}/get-summary`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: AUDIT_DATA }), // Stringify the body
    });

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();
    console.log(data);

    // Send the response back to the client
    res.status(200).json(data); // Use 200 instead of 201
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: error.message || 'An error occurred while fetching the summary.' });
  }
};