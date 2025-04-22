# 🚀 INIT Coin Airdrop Bot

This is a fully automated airdrop bot built using **Node.js**, **Puppeteer**, and **Ethers.js**. It repeatedly generates wallet addresses, submits them to the airdrop site, and clears session data to repeat the process — all hands-free.

---

## 🧰 Prerequisites (for Windows users)

Before running the script, make sure you have the following installed:

### 1. Install Node.js
- Download and install from [https://nodejs.org/](https://nodejs.org/)
- After installation, open Command Prompt and run:
  ```bash
  node -v
  npm -v
  ```

### 2. Install Git (optional but recommended)
- Download from [https://git-scm.com/](https://git-scm.com/)

---

## 📦 Setup Instructions

### 1. Clone this repository
```bash
git clone https://github.com/talhajavedcom/INIT-Coin-Airdrop.git
cd INIT-Coin-Airdrop
```

Or just download the ZIP from GitHub and extract it.

### 2. Install dependencies
```bash
npm install
```

This will install:
- `puppeteer`
- `ethers`

> ⚠️ Puppeteer will download Chromium (~200MB) automatically. Make sure you're connected to the internet.

---

## 🚀 How to Run the Bot

```bash
node airdrop-bot.js
```

The bot will:
1. Visit the airdrop website with your referral link.
2. Generate a new ETH wallet using `ethers.js`.
3. Fill the form with the wallet address.
4. Submit it.
5. Wait for confirmation.
6. Log out and clear session data.
7. Repeat the process up to 1000 times (you can change this number in the code).

---

## ⚙️ Configuration

You can tweak these inside `airdrop-bot.js`:

- Change how many loops to run:
  ```js
  for (let i = 1; i <= 1000; i++) {
  ```
- Use headless browser:
  ```js
  puppeteer.launch({ headless: true })
  ```

Set it to `false` if you want to see the browser open and watch the actions live.

---

## 🧠 Notes

- This bot is made for educational purposes.
- Make sure you comply with the site's terms of service.
- If the site structure changes (button names, input IDs), the script may need updates.

---

## 🧑‍💻 Author

**Talha Javed**  
[Portfolio](https://talhajaved.com)  
📧 contact.talhajved@gmail.com
