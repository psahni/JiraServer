import Audit from "../models/audit.js";

export const index = async (req, res) => {
  try {
    const audit = new Audit();
    const data = audit.getData();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

