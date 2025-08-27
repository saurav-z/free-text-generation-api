export default {
    async fetch(request, env) {
        const API_KEY = env.API_KEY;
        const url = new URL(request.url);
        const auth = request.headers.get("Authorization");

        // 🔐 Simple API key check
        if (auth !== `Bearer ${API_KEY}`) {
            return json({ error: "Unauthorized" }, 401);
        }

        // 🚫 Only allow POST requests to /
        if (request.method !== "POST" || url.pathname !== "/") {
            return json({ error: "Not allowed" }, 405);
        }

        try {
            const { prompt } = await request.json();

            if (!prompt) return json({ error: "Prompt is required" }, 400);

            // Choose a model from the list of free text generation models:
            // "@cf/meta/llama-3-8b-instruct"
            // "@cf/mistral/mistral-7b-instruct-v0.2"
            // "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
            // "@cf/meta/llama-2-7b-chat-fp16"
            // "@cf/qwen/qwen1.5-0.5b-chat"
            // "@cf/microsoft/phi-2"

            // 🧠 Generate text from prompt
            const { response } = await env.AI.run(
                "@cf/meta/llama-3-8b-instruct",
                { prompt }
            );

            return json({ response });
        } catch (err) {
            return json({ error: "Failed to generate text", details: err.message }, 500);
        }
    },
};

// 📦 Function to return JSON responses
function json(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { "Content-Type": "application/json" },
    });
}