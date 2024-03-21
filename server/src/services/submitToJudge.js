import { json } from "express";
import { config } from "../utils/config.js";
import { prisma } from "../utils/db.js";

const Judge0AuthHeaders = {
  "X-RapidAPI-Key": "1502e8cd51msh56223f667c0608dp1328f3jsnedba58a9edbd",
  "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
};

export const submitToJudge = async (language_id, source_code, stdin) => {
  try {
    const response = await fetch(
      `https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...Judge0AuthHeaders,
        },
        body: JSON.stringify({
          language_id,
          source_code,
          stdin,
        }),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
