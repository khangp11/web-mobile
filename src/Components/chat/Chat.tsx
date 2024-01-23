import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

interface Message {
    user: string;
    text: string;
    timestamp: Date;
}

const Chat: React.FC = () => {
    const [user, setUser] = useState<string>('User 1');
    const [text, setText] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    useEffect(() => {
        socket.on('newMessage', (newMessage: Message) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        fetchMessages();
    }, [messages]);

    const fetchMessages = async () => {
        const response = await axios.get<Message[]>('http://localhost:3001/api/messages');
        setMessages(response.data);
    };

    const sendMessage = async () => {
        if (user && text) {
            await axios.post('http://localhost:3001/api/messages', { user, text, isAdmin });
            setText('');
        }
    };
    const authenticateUser = (username: string, password: string) => {
        setIsAdmin(username === 'admin' && password === 'adminpassword');
    };
    const handleAdminLogin = () => {
        authenticateUser('admin', 'adminpassword');
        setUser('Admin');
    };

    return (
        <div className="flex flex-col h-screen w-72">
            <div className="flex-grow p-4 overflow-auto">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`${message.user === user ? 'justify-start' : 'self-start'
                            } mb-4 max-w-3/4`}
                    >
                        <div className="">
                            {message.user !== user && (
                                <div className="flex-shrink-0">
                                    <img
                                        src={`https://i.pravatar.cc/40?u=${message.user}`}
                                        alt="User Avatar"
                                        className="w-4 h-4 rounded-full"
                                    />
                                </div>
                            )}
                            <div
                                className={`ml-3 ${message.user === user
                                    ? 'text-gray-800 text-end'
                                    : 'text-gray-800 '
                                    } `}
                            >
                                {message.text}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center p-4 bg-gray-200">
                <input
                    type="text"
                    placeholder=""
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="mr-2 p-2 border border-gray-400 rounded flex-grow"
                />
                <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded">
                    Send
                </button>
            </div>
            {isAdmin && (
                <div>
                    admin
                </div>
            )}
            <button onClick={handleAdminLogin}>Log in as Admin</button>
        </div>
    );
};
export default Chat;
