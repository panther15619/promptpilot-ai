async function improvePrompt() {

    const input =
    document.getElementById("userInput").value;

    const result =
    document.getElementById("result");

    if (!input.trim()) {
        result.innerHTML =
        "Please enter a prompt.";
        return;
    }

    result.innerHTML =
    "🤖 Thinking...";

    try {

        const response =
        await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                method: "POST",

                headers: {
                    "Authorization":
                    `Bearer ${OPENROUTER_API_KEY}`,

                    "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({

                    model:
                    "deepseek/deepseek-chat-v3-0324:free",

                    messages: [

                        {
                            role: "system",
                            content:
                            `You are PromptPilot AI.

Your job is to transform simple user requests into detailed professional prompts.

Return ONLY the improved prompt.

Do not explain anything.`
                        },

                        {
                            role: "user",
                            content: input
                        }

                    ]

                })

            }
        );

        const data =
        await response.json();

        result.innerHTML =
        data.choices[0].message.content;

    }

    catch (error) {

        result.innerHTML =
        "❌ Error connecting to AI.";

        console.error(error);

    }

}
