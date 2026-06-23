async function improvePrompt() {

    const input =
    document.getElementById("userInput").value;

    const result =
    document.getElementById("result");

    if (!input.trim()) {

        result.innerHTML =
        "⚠️ Please enter a prompt.";

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
                    "meta-llama/llama-3.3-8b-instruct:free",

                    messages: [

                        {
                            role: "system",
                            content: `
You are PromptPilot AI.

Your job is to transform weak prompts into powerful professional prompts.

Rules:
- Return ONLY the improved prompt.
- Make it detailed.
- Add structure.
- Add context.
- Add desired output format.
- Add expert role instructions.
- Do not explain your work.
`
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

        console.log(data);

        if (!response.ok) {

            result.innerHTML =
            "❌ " +
            (data.error?.message ||
            "Request failed");

            return;
        }

        result.innerHTML =
        data.choices[0].message.content;

    }

    catch (error) {

        console.error(error);

        result.innerHTML =
        "❌ " + error.message;

    }

}
