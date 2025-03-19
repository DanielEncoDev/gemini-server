'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import WelcomeMessage from '@/components/WelcomeMessage';
import MessageInput from '@/components/MessageInput';
import ResponseMessage from '@/components/ResponseMessage';

export default function GeminiPage() {
    const [message, setMessage] = useState('');
    const [user, setUser] = useState();
    const [token, setToken] = useState();
    const [response, setResponse] = useState();
    const router = useRouter();
    const url = process.env.NEXT_PUBLIC_URL_BASE;

    useEffect(() => {
       setUser(localStorage.getItem('user') || 'Test');
       setToken(localStorage.getItem('token') || '');
       if (!localStorage.getItem('token')){
        router.push('/');
       }
    }, []);

    const handleMessage = async (e) => {
        setResponse(null);
        e.preventDefault();
        const response = await fetch(`${url}gemini`, {
            method: 'POST',
            body: JSON.stringify({ message }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
        });
        const data = await response.json();
        setResponse(JSON.parse(data));
        setMessage(''); 
    }

    const handleNewConversation = async (e) => {
        e.preventDefault();
        setResponse(null);
        setMessage('');
    }

    return (
        <div className="h-screen bg-[#1f1f1f] text-white flex flex-col">
            <Header
                user={user}
            />
            <main className="flex-1 relative">
                {response ? 
                    <ResponseMessage
                        response={response}
                    />
                    :
                    <WelcomeMessage
                        user={user}
                    />
                }
                <MessageInput
                    message={message}
                    setMessage={setMessage}
                    handleMessage={handleMessage}
                    handleNewConversation={handleNewConversation}
                />
            </main>
        </div>
    );
} 