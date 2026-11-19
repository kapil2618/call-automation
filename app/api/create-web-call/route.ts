import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { agent_id } = await req.json();

    if (!agent_id) {
      return NextResponse.json(
        { error: 'Agent ID is required' },
        { status: 400 }
      );
    }

    const response = await fetch('https://api.retellai.com/v3/create-web-call', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RETELL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ agent_id }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Retell API Error Response:', errorData);
      throw new Error(`Retell API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('Failed to generate Retell token:', error);
    return NextResponse.json(
      { error: 'Failed to initialize web call session' }, 
      { status: 500 }
    );
  }
}