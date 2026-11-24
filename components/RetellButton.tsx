'use client';

import { useEffect, useState } from 'react';
import { RetellWebClient } from 'retell-client-js-sdk';
import { Button } from '@/components/ui/button';

const retellWebClient = new RetellWebClient();
const agentId = process.env.NEXT_PUBLIC_RETELL_AGENT_ID;

export default function RetellButton() {
  const [isCalling, setIsCalling] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    retellWebClient.on('call_started', () => {
      setIsCalling(true);
      setIsLoading(false);
    });

    retellWebClient.on('call_ended', () => {
      setIsCalling(false);
    });

    retellWebClient.on('error', (error) => {
      console.error('Retell audio engine error:', error);
      setIsCalling(false);
      setIsLoading(false);
    });

    return () => {
      retellWebClient.removeAllListeners();
    };
  }, []);

  const toggleCall = async () => {
    if (isCalling) {
      retellWebClient.stopCall();
      return;
    }

    setIsLoading(true);

    try {
      if (!agentId) throw new Error('Agent ID is missing from environment variables');

      const response = await fetch('/api/create-web-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agent_id: agentId }),
      });

      if (!response.ok) throw new Error(`Backend returned ${response.status}`);

      const payload = await response.json();

      const token = payload.access_token;
      const callId = payload.call_id;
      const transport = payload.transport;
      const iceServers = payload.ice_servers;

      if (!token || !callId || !transport) {
        throw new Error('Missing critical v3 routing data! See console for raw payload.');
      }

      await retellWebClient.startCall({
        accessToken: token,
        callId: callId,
        transport: transport,
        iceServers: iceServers,
      });
    } catch (error) {
      console.error('Call initialization failed:', error);
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={toggleCall}
      disabled={isLoading}
      variant={isCalling ? 'outline' : 'default'}
      className={`shadow-lg px-8 py-6 text-lg rounded-full ${
        isCalling ? 'animate-pulse' : ''
      }`}
    >
      {isLoading
        ? 'Connecting...'
        : isCalling
        ? 'End Call'
        : 'Test the Receptionist Live'}
    </Button>
  );
}