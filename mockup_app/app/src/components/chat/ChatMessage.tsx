import * as React from "react";
import { ChatMessage as ChatMessageType } from "../../types/chat";

interface ChatMessageProps {
    message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
    const isAI = message.sender === 'ai';
    
    return (
        <gridLayout className={`mb-4 ${isAI ? 'text-left' : 'text-right'}`}>
            <stackLayout 
                className={`p-3 rounded-lg ${
                    isAI ? 'bg-gray-200 mr-auto' : 'bg-black text-white ml-auto'
                }`}
                width="75%"
                horizontalAlignment={isAI ? "left" : "right"}
            >
                <label textWrap={true}>{message.text}</label>
                <label className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </label>
            </stackLayout>
        </gridLayout>
    );
}