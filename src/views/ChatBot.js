import { useEffect } from 'react';

function ChatbotComponent() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <df-messenger
                intent="WELCOME"
                chat-title="chatbot1"
                agent-id="c49ffd16-7ae4-4da6-a263-04edcb86631f"
                language-code="en">
            </df-messenger>
        </div>
    );
}

export default ChatbotComponent;

