import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

async function main() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    // Read the image
    const imagePath = 'public/esg-framework.png';
    const imageBuffer = fs.readFileSync(imagePath);
    const base64ImageData = imageBuffer.toString('base64');
    
    console.log('Sending image to Gemini for editing...');
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64ImageData,
              mimeType: 'image/png',
            },
          },
          {
            text: 'Remove the text "RMZ SUSTAINABILITY MANAGEMENT STRATEGY" from the image, keeping the background and other elements intact.',
          },
        ],
      },
    });
    
    let imageSaved = false;
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        fs.writeFileSync(imagePath, Buffer.from(base64EncodeString, 'base64'));
        console.log('Successfully saved edited image.');
        imageSaved = true;
        break;
      }
    }
    
    if (!imageSaved) {
      console.log('No image part found in the response.');
      console.log(response.text);
    }
  } catch (err) {
    console.error('Error editing image:', err);
  }
}

main();
