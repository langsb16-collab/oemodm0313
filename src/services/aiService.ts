import { GoogleGenAI } from "@google/genai";
import { RFQ, Factory } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function analyzeRFQ(rfq: Partial<RFQ>) {
  const model = "gemini-3-flash-preview";
  const prompt = `
    Analyze the following manufacturing request (RFQ) and provide:
    1. A list of 3-5 critical manufacturing requirements.
    2. Potential production risks (e.g., material shortages, certification needs).
    3. Recommended factory certifications.
    4. Estimated lead time range.

    RFQ Details:
    Product: ${rfq.productName}
    Category: ${rfq.category}
    Quantity: ${rfq.quantity}
    Description: ${rfq.description}

    Return the analysis in JSON format with the following structure:
    {
      "requirements": ["string"],
      "risks": ["string"],
      "recommendedCertifications": ["string"],
      "estimatedLeadTime": "string"
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("AI Analysis Error:", error);
    return null;
  }
}

export async function matchFactories(rfq: RFQ, factories: Factory[]) {
  const model = "gemini-3-flash-preview";
  const factoryList = factories.map(f => ({
    id: f.id,
    name: f.name,
    categories: f.categories,
    capacity: f.capacity,
    certifications: f.certifications
  }));

  const prompt = `
    Match the following RFQ with the best factories from the provided list.
    Provide a "Matching Score" (0-100) for each factory and a brief reason.

    RFQ: ${JSON.stringify(rfq)}
    Factories: ${JSON.stringify(factoryList)}

    Return the results in JSON format:
    {
      "matches": [
        { "factoryId": "string", "score": number, "reason": "string" }
      ]
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    return JSON.parse(response.text || '{"matches": []}');
  } catch (error) {
    console.error("AI Matching Error:", error);
    return { matches: [] };
  }
}
