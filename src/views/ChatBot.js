function ChatbotComponent() {
    return ( 
    <div> 
        <div>Helooo</div>
        <df-messenger 
        intent = "WELCOME"
        chat-title = "chatbot"
        agent-id = "c49ffd16-7ae4-4da6-a263-04edcb86631f"
        language-code = "en">
        </df-messenger> 
    </div>
    );
}

export default ChatbotComponent;
