const puppeteer = require('puppeteer'); // Full Puppeteer
const ethers = require('ethers');

function generateWallet() {
  const wallet = ethers.Wallet.createRandom();
  return wallet.address;
}

async function runAirdropBot() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  for (let i = 1; i <= 1000; i++) {
    console.log(`🔁 Loop #${i} starting...`);

    const walletAddress = generateWallet();
    console.log(`🔐 Wallet Address: ${walletAddress}`);

    try {
      // Step 1: Go to site
      await page.goto('https://initdrop.app?ref=0xd3dfdybax6', { waitUntil: 'domcontentloaded' });

      // Step 2: Enter wallet address
      await page.waitForSelector('input#address', { timeout: 5000 });
      await page.type('input#address', walletAddress, { delay: 20 }); // Human-like typing
      await page.click('button[type="submit"]');

      // Step 3: Wait for success message
      await page.waitForSelector('li[data-type="success"]', { timeout: 4000 });
      console.log('✅ Referral rewards distributed!');

      // Step 4: Logout
      await page.waitForSelector('button.bg-gradient-to-r', { timeout: 3000 });
      await page.click('button.bg-gradient-to-r');
      console.log('🔒 Logged out.');

      // Step 5: Clear cookies and local storage
      const client = await page.target().createCDPSession();
      await client.send('Storage.clearDataForOrigin', {
        origin: 'https://initdrop.app',
        storageTypes: 'all',
      });
      await page.deleteCookie(...(await page.cookies()));

      // Step 6: Wait briefly and reload for next loop
      await page.waitForTimeout(1000); // was 2000
      await page.reload({ waitUntil: 'domcontentloaded' });
      console.log(`✅ Loop #${i} completed.\n`);

      // Shorter wait between loops
      await page.waitForTimeout(2000); // was 4000

    } catch (err) {
      console.error(`❌ Error in loop ${i}: ${err.message}`);
    }
  }

  await browser.close();
}

runAirdropBot().catch(console.error);
// -------------------------------------------------------------------------------------------------------------/
// const puppeteer = require('puppeteer'); // use full puppeteer, not puppeteer-core
// const ethers = require('ethers');

// function generateWallet() {
//   const wallet = ethers.Wallet.createRandom();
//   return wallet.address;
// }

// async function runAirdropBot() {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();

//   for (let i = 1; i <= 1000; i++) {
//     console.log(`🔁 Loop #${i} starting...`);

//     const walletAddress = generateWallet();
//     console.log(`🔐 Wallet Address: ${walletAddress}`);

//     try {
//       // Step 1: Go to site
//       await page.goto('https://initdrop.app?ref=0xd3dfdybax6', { waitUntil: 'domcontentloaded' });

//       // Step 2: Wait for input & submit wallet
//       await page.waitForSelector('input#address', { timeout: 10000 });
//       await page.type('input#address', walletAddress);
//       await page.click('button[type="submit"]');

//       // Step 3: Wait for success toast
//       await page.waitForSelector('li[data-type="success"]', { timeout: 7000 });
//       console.log('✅ Referral rewards distributed!');

//       // Step 4: Click logout button
//       await page.waitForSelector('button.bg-gradient-to-r', { timeout: 5000 });
//       await page.click('button.bg-gradient-to-r');
//       console.log('🔒 Logged out.');

//       // Step 5: Clear cookies + local storage
//       const client = await page.target().createCDPSession();
//       await client.send('Storage.clearDataForOrigin', {
//         origin: 'https://initdrop.app',
//         storageTypes: 'all',
//       });
//       await page.deleteCookie(...(await page.cookies()));

//       // Step 6: Reload page for next loop
//       await page.waitForTimeout(2000);
//       await page.reload({ waitUntil: 'domcontentloaded' });
//       console.log(`✅ Loop #${i} completed.\n`);

//       // Optional: delay between loops
//       await page.waitForTimeout(4000);

//     } catch (err) {
//       console.error(`❌ Error in loop ${i}: ${err.message}`);
//     }
//   }

//   await browser.close();
// }

// runAirdropBot().catch(console.error);
