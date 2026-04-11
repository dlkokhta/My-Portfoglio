import { NextResponse } from "next/server";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  try {
    const { messages, projectName, projectDescription, projectTechnologies } =
      await req.json();

    if (!messages || !projectName) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const systemPrompt = `You are an AI assistant on Dimitri's developer portfolio. A visitor is asking about the project "${projectName}" that Dimitri built.

Project description:
${(projectDescription as string[]).map((d: string) => `- ${d}`).join("\n")}

Technologies used: ${(projectTechnologies as string[]).join(", ")}

Rules:
- Refer to the developer as "Dimitri" or "Dimitri Kokhtashvili".
- Never say "I built" or "I created" — always say "Dimitri built", "Dimitri chose", etc.
- Be friendly, concise, and knowledgeable about this project.
- ONLY answer questions related to this specific project ("${projectName}"): its features, tech choices, challenges, architecture, or development process.
- If a question is unrelated to this project, politely decline: "I can only answer questions about this project here."
- Keep replies under 120 words.`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: systemPrompt },
            ...(messages as Message[]),
          ],
          max_tokens: 200,
          temperature: 0.7,
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("Groq API error:", err);
      throw new Error("Groq API request failed");
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    console.error("CHAT ERROR:", error);
    return NextResponse.json(
      { error: "Failed to get response" },
      { status: 500 }
    );
  }
}
