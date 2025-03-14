import { LLM_SERVER } from "../config.js";
import fetch from "node-fetch";

export const fetchSummary = async (req, res) => {
  const { query } = req.body;
  console.log(query);
  try {
    const response = await fetch(`${LLM_SERVER}/get-summary`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: error.message || 'An error occurred while fetching the summary.' });
  }
};