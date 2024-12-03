import * as React from "react";

export function ChatBotView() {
    return (
        <scrollView>
            <stackLayout className="pb-4">
                {/* Main Calculator Card */}
                <stackLayout className="bg-white rounded-lg mx-4 my-4 p-6">
                    <input 
                        type="text" 
                        className="border border-gray-300 rounded-lg p-4 w-full mb-4" 
                        placeholder="Type your message here..." 
                    />
                    <button className="bg-blue-500 text-white font-bold p-2 rounded-lg text-center w-1/3 self-center mt-2">
                        Send
                    </button>
                </stackLayout>
            </stackLayout>
        </scrollView>
    );
}
