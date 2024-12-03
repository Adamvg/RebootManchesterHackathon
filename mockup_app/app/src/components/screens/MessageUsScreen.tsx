import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { PageId } from "../common/PageId";
import { ChatMessage as ChatMessageType } from "../../types/chat";
import { ChatMessage } from "../chat/ChatMessage";

export function MessageUsScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const [message, setMessage] = React.useState("");
    const [messages, setMessages] = React.useState<ChatMessageType[]>([]);
    const scrollViewRef = React.useRef<any>(null);

    const openAIAPIcall = () => {
        if (!message.trim()) return;

        // Add user message
        const newMessage: ChatMessageType = {
            id: Date.now().toString(),
            text: message,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newMessage]);
        setMessage(""); // Clear input

        // Scroll to bottom after message is added
        if (scrollViewRef.current) {
            setTimeout(() => {
                scrollViewRef.current.scrollToVerticalOffset(
                    scrollViewRef.current.scrollableHeight,
                    true
                );
            }, 100);
        }
    };

    return (
        <gridLayout rows="auto, *, auto, auto" className="bg-gray-100">
            {/* Header */}
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Message Us</label>
            </gridLayout>

            {/* Chat View */}
            <scrollView row={1} className="bg-white" ref={scrollViewRef}>
                <stackLayout className="p-4">
                    {messages.map((msg) => (
                        <ChatMessage key={msg.id} message={msg} />
                    ))}
                </stackLayout>
            </scrollView>

            {/* Message Input */}
            <gridLayout row={2} columns="*, auto" className="p-4 bg-white border-t">
                <textField 
                    col={0} 
                    className="bg-gray-100 p-3 rounded-lg mr-2"
                    hint="Write your message here..."
                    text={message}
                    onTextChange={(args) => setMessage(args.value)}
                    returnKeyType="send"
                    onReturnPress={openAIAPIcall}
                />
                <button 
                    col={1} 
                    className="bg-black text-white px-6 py-3 rounded-lg"
                    onTap={openAIAPIcall}
                >
                    Send
                </button>
            </gridLayout>

            {/* Page ID */}
            <contentView row={3}>
                <PageId id="12345678" />
            </contentView>
        </gridLayout>
    );
}