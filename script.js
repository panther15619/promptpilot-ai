function improvePrompt() {

    const input =
    document.getElementById("userInput").value;

    let improvedPrompt = "";

    improvedPrompt = `
Act as an expert assistant.

Your task is:

${input}

Provide:

1. A clear solution
2. Step-by-step guidance
3. Best practices
4. Common mistakes to avoid

Be detailed and professional.
`;

    document.getElementById("result").innerText =
    improvedPrompt;

}
