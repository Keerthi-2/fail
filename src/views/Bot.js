import { useEffect } from 'react';

function Bot() {
    useEffect(() => {
        if (!document.querySelector('script[src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
        script.async = true;
        document.head.appendChild(script);
    }

        // return () => {
        //     document.head.removeChild(script);
        // };
    }, []);

    return (
        <div>
            <df-messenger
            chat-title="BRAIN_PALS"
            agent-id="210e3eb6-5391-4daf-8ea5-0135923170a4"
            language-code="en"
            ></df-messenger>
        </div>
    );
}

export default Bot;

