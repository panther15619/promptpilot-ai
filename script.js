function improvePrompt() {

    const input =
    document.getElementById("userInput")
    .value
    .toLowerCase();

    let improvedPrompt = "";

    if (
        input.includes("code") ||
        input.includes("website") ||
        input.includes("app") ||
        input.includes("program")
    ) {

        improvedPrompt = `
Act as a senior software engineer.

Task:
${input}

Provide:

1. Solution overview
2. Step-by-step implementation
3. Best coding practices
4. Common mistakes to avoid
5. Example code where appropriate

Be detailed and beginner-friendly.
`;

    }

    else if (
        input.includes("gym") ||
        input.includes("fitness") ||
        input.includes("workout") ||
        input.includes("weight")
    ) {

        improvedPrompt = `
Act as a certified fitness coach.

Task:
${input}

Provide:

1. Weekly plan
2. Exercise recommendations
3. Sets and repetitions
4. Recovery advice
5. Nutrition guidance

Make the plan realistic and effective.
`;

    }

    else if (
        input.includes("football") ||
        input.includes("soccer") ||
        input.includes("winger") ||
        input.includes("striker")
    ) {

        improvedPrompt = `
Act as a professional football coach.

Task:
${input}

Provide:

1. Technical development advice
2. Tactical recommendations
3. Training drills
4. Weekly improvement plan
5. Common mistakes to avoid

Focus on player development.
`;

    }

    else if (
        input.includes("school") ||
        input.includes("college") ||
        input.includes("exam") ||
        input.includes("study")
    ) {

        improvedPrompt = `
Act as an experienced tutor.

Task:
${input}

Provide:

1. Learning strategy
2. Step-by-step explanation
3. Revision techniques
4. Practice exercises
5. Common mistakes students make

Make explanations easy to understand.
`;

    }

    else if (
        input.includes("business") ||
        input.includes("money") ||
        input.includes("startup")
    ) {

        improvedPrompt = `
Act as a business consultant.

Task:
${input}

Provide:

1. Business strategy
2. Growth opportunities
3. Risks
4. Action plan
5. Success metrics

Be practical and realistic.
`;

    }

    else {

        improvedPrompt = `
Act as an expert assistant.

Task:
${input}

Provide:

1. Clear solution
2. Step-by-step guidance
3. Best practices
4. Common mistakes to avoid

Be detailed and professional.
`;

    }

    document.getElementById("result").innerText =
    improvedPrompt;

}
