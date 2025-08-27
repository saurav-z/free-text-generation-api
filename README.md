# ✨ Free AI Text Generation API (100,000 Calls/Day) ⚡

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/saurav-z/free-text-generation-api?style=social)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-orange.svg)
![AI](https://img.shields.io/badge/AI-Generative%20Text-purple.svg)

**🚀 Deploy your own free AI text generation API in minutes!**

</div>

This project lets you deploy your own **free AI text generation API** using Cloudflare Workers, with up to **100,000 API calls per day**. Generate human-like text, summarize articles, or create conversational bots using powerful large language models! 🤖

---

## ✨ Features

* 🆓 **100,000 free API calls per day** (Cloudflare Workers AI free tier)

* ⚡ **Lightning-fast** text generation from prompts

* 🛠️ **Easy to deploy** - no coding experience required

* 🔒 **Secure** with API key authentication

* 🎯 **Multiple AI models** available

---

## 🚀 How It Works

* 📤 You deploy a Cloudflare Worker using the provided `worker.js` file

* 🌐 The Worker exposes a simple API endpoint for text generation

* 🔐 You authenticate using your own API key

* 🤖 The Worker uses Cloudflare's free AI models to generate text

---

## 📋 Setup Instructions

### 1. 🌟 Get a Cloudflare Account

* Sign up at [Cloudflare](https://dash.cloudflare.com/sign-up) if you don't have one

### 2. ⚡ Create a New Worker

* Go to the [Cloudflare Workers dashboard](https://dash.cloudflare.com/workers)

* Click **"Create application"** 🎯

* Choose **"Create Worker"**

* Give it a name like `free-text-generation-api` 📝

* Click **"Deploy"** to create a Hello World worker 🚀

### 3. 🔧 Replace the Worker Code

* In the worker editor, replace the default Hello World code with the `worker.js` code from this repo 📄

* Click **"Save and Deploy"** ✅

### 4. 🔑 Set Up Environment Variables

* In your worker dashboard, go to **"Settings"** > **"Variables"** ⚙️

* Under **"Environment Variables"**, click **"Add variable"** ➕

* Name: `API_KEY` 🏷️

* Value: `your-secret-api-key` (replace with a strong secret key) 🔒

* Click **"Save and Deploy"** 💾

### 5. 🤖 Enable Workers AI

* In the Cloudflare dashboard, go to **"Workers & Pages"** > **"AI"** 🧠

* Enable Workers AI for your account (free tier is enough) 🆓

### 6. 🔗 Add AI Binding to Your Worker

* Go back to your worker's dashboard

* Click on **"Settings"** > **"Variables"** ⚙️

* Scroll down to **"Service bindings"** section

* Click **"Add binding"** ➕

* Variable name: `AI` 🏷️

* Service: Select **"Workers AI"** from dropdown 🤖

* Click **"Save and Deploy"** ✅

> ⚠️ **Important:** Without this AI binding, your worker won't be able to access Cloudflare's AI models!

### 7. 🌐 Get Your Worker URL

* Your worker will be available at: `https://<your-worker-name>.<your-subdomain>.workers.dev` 🔗

* You can find the exact URL in your worker's dashboard 📍

---

## 🎯 Usage

### 🖥️ cURL Example

```bash
curl -X POST https://<your-worker-name>.<your-subdomain>.workers.dev \
  -H "Authorization: Bearer your-secret-api-key" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Write a short poem about a rainy day."}'
```

### 🌐 JavaScript Example

```js
const res = await fetch("https://<your-worker-name>.<your-subdomain>.workers.dev", {
  method: "POST",
  headers: {
    "Authorization": "Bearer your-secret-api-key",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ prompt: "What is the capital of France?" }),
});
const text = await res.text();
console.log(text);
```

---

## 📝 Notes

* 🆓 **Free Tier:** Cloudflare Workers AI free tier allows 100,000 AI requests per day. See [Cloudflare pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/) for details.

* 🎨 **Models:** You can change the model in `worker.js` to use other available models.

* 🔒 **Security:** Keep your API key secret. Rotate it if needed.

---

## 📄 License
MIT License ⭐

---

<div align="center">

**⭐ Star this repo if it helped you! ⭐**

</div>
