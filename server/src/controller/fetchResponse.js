import { prisma } from "../utils/db.js";

export const fetchResponses = async (req, res) => {
  try {
    await prisma.responses.findMany();
  } catch (error) {
    throw new Error("Error fetching responses");
  }
};
