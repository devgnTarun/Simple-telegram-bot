const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with the token you received from BotFather
const token = '6878120172:AAEcsKHeAsrBewn0Xz8BqQmQYYd_gfJ0BnA';
// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;

    // Define the cryptocurrency commands
    const cryptoCommands = ['SOL', 'ETH', 'BSC'];

    // Create buttons for each cryptocurrency command
    const menuButtons = cryptoCommands.map((crypto) => {
        return [{ text: `${crypto}`, callback_data: crypto.toLowerCase() }];
    });

    // Send an interactive message with a keyboard
    await bot.sendMessage(chatId, `Welcome to VortexIntel! Please Choose the network you want to deploy on.`, {
        reply_markup: {
            inline_keyboard: menuButtons,
        },
    });
});

// Handle errors
bot.on('polling_error', (error) => {
    console.error(error);
});
