// app/api/chat/route.ts

import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

const anyscale = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
  baseURL: 'https://api.endpoints.anyscale.com/v1',
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    const response = await anyscale.chat.completions.create({
      model: 'meta-llama/Llama-2-70b-chat-hf',
      stream: true,
      messages: messages,
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error('Error fetching chat completion:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
