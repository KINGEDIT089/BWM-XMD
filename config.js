const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU246qSBT9lUm9So9cBU06GeSiaIsXUMDJSU4JBZRyEwoUO/77hLY73Q9zzvTwVKkq1l611tr7FWQ5rtActWD0CooSN5CgbknaAoERGNdhiEpAgQASCEbAn8xLrB18+cxWL6ETX1ZShPs3RhLytogaYzy4OY6hTRBXPYM7BYr6kGD/N4DGcRbYHndQ9V6SLPdOubgJ87BODHnY7wuTrTV3VlDFGbbyZ3DvECEucRZpRYxSVMJkjtoVxOX36E/mw52Z18dxX58H+9BcrVe9zM0L++g3m5V/ckR3eDun+xUbfY++azU9xzv69OWGMo/bJHTR9ndjRBgYiNtdsNv38ByZkN96D/oVjjIUGAHKCCbtt3W/LBOJ1lQ7kRJ+r+uwvFlj7mSwqn4889PpYTk1D736nFg0/T3iyXYWVd5UZ+Z5g3OtjaB3Nat4eqz4QctM6K3KWDHtzhpH+kp8VX5k5fR/dM/VdXC9LnNup7rKTF8g/Tjjd0shsa/aYBNt1SZojMN1zbja9+jv5Hh4PG7V3dVek5fJ1jswx+Vl5S1uyURI9+nGyM9abRk9+/JJH5K6/B3LYs1WkSoPZuyJk9u93KuDPpex18TcoIXa7CRH7wv98wWxWqTmtYOPUjYxG4dn2gJxclDMr+OaKC9eruHB0G7PXijEl+e3F51QawRgxNwpUKIIV6SEBOdZt8cKAgVg0FjILxF5kxdU03nABy7vu3pf23MxfcMkmbDnYYCuUsheJpC1ZzDqa23+DChQlLmPqgoFU1yRvGwXqKpghCow+vsHBTJ0JQ/junIcQ4EQlxXZZnWR5DD4cPXjEPp+XmfEajNf6RaoBCP6cxsRgrOo6nSsM1j6MW6QEkNSgVEIkwrdKRCgBvuowwPYtRbSrK2sEM2uppYn3oDQckc5zrPHFc4XeC4IwydBOPBP/JDjn4aSBJ+GDCsGAWQGAc8DCuD3nun++fU42YtmJKUah4WNnrDmYXozF7OxDVv/zYaH9qhEARiRskYUOED/VBd2fkLZb3Cz8GpYQ8ItCpfLm0Pi97zoZcHuaXH7BffhKRi9fs4pJQ86vNVqKjPc2gQUSN8iiLuXC/RQEHh6SEviiP+r+vPSyQiL4s8MEUCBDHZ3wc+f9nzxh2HL6nJj/PzZlXv3ogMKEIE4qcAIKEbISEWkaeZ0kr7Qk4msRbISdWJ/ePfRBI+QrXpXsS28o7fwDEXUFF1CuM/aibZKRbLIwlYb9NexLyu3xfO/gIARWGcBl7z0ptzFb6Vd0yxvNekdUXTzLjqnHNxBHfemg+PgouO2qc6utXQbOVxt/Q2urDZampmyETfOHs1naalDE3L+QZGfu2qPDH0t9iJGRIoHp2FPjva54KwzC2HHDaxiKa4G/l6tk1RJvHA7SNSzjnGKmnO09Q/iKdUt0woUNiSxSUo8DWcXVjKYMCzw+tGeb+MheR/L+K1xXt8TF2L0NuXe3fgPzz6jT9+pLwjvU/MX8Rrb/QpJZ8dg1Yki11c5Dqd5MzwJG1WoRXvGSfGyoQ1XlqsbuN9/UKBIIAnzMu1mRXqAgAIJrIj82bo2TlFFYFqAESNy0pBnWHFAgbSVi8IikHx0PJC7b04n4P4PC26WjQ0IAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

