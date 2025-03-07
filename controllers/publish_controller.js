import Confluence from "../models/confluence.js";

export const publishConfluencePage = async (req, res) => {
  try {
    const confluence = new Confluence();
    const data = confluence.publish(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};