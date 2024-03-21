import { submitToJudge } from "../services/submitToJudge.js";
import { prisma } from "../utils/db.js";

export const CodeSubmit = async (req, res) => {
  try {
    const { username, language, language_id, source_code, stdin } =
      await req.body;

    if (!username || !language || !language_id || !source_code) {
      throw new Error("All fields are required!");
    }

    const compileResult = await submitToJudge(language_id, source_code, stdin);
    console.log(compileResult);
    const db = await prisma.responses.create({
      data: {
        username: username,
        language: language,
        language_id: language_id,
        source_code: source_code,
        stdin: stdin,
        stdout: compileResult.stdout,
        status: compileResult.status.description,
        stderr: compileResult.stderr,
      },
    });

    return res.status(200).json({
      output: compileResult.stdout,
      execution_time: compileResult.time,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
