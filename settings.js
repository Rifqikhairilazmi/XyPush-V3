/*
   Created By Xiety
   My Contact t.me/Xietyofc 
   XyPush V2.0
*/
const fs = require("fs");
const chalk = require("chalk");

global.nomorOwner = "6289684316740";
global.namaBot = "R,K,AxRIAN Botzz";
global.namaowner = "RIANxR,K,A";
global.packname = `By ${R,K,AxRIAN Botzz}`;
global.sessionName = "session";
global.author = "YT : XieTy";
global.wm = "XyPush";
global.themeemoji = "•";
global.anticall = true;

global.thumb = fs.readFileSync("./image/thumb.jpg");

global.mess = {
    wait: "Wait Kak Lagi Proses",
    success: "Sukses Kak`",
    on: "Sudah Aktif",
    off: "Sudah Off",
    text: "Teks Nya Mana Kak?",
    link: "Link Nya Mana Kak?",
    fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
    group: "Maaf Kak Fitur Ini Hanya Bisa Digunakan Di Dalam Group",
    private: "Maaf Kak Fitur Ini Hanya Bisa Digunakan Di Dalam Private Chat",
    owner: "Maaf Kak Fitur Ini Hanya Bisa Digunakan Sama Owner Bot",
    admin: "Maaf Kak Fitur Ini Hanya Bisa Digunakan Sama Owner Bot",
    badmin: "Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group",
    premium:
        "Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner"
};

global.menu = `
 𝗔𝗕𝗢𝗨𝗧 𝗫𝗬𝗣𝗨𝗦𝗛
- Creator: Xiety
- Bot Name: XyPush
- Build On: 09/12/2023
- Version: 3.0
- Framework: MD || Pairing Code
- Subscribe for Updates: youtube.com/@XieTyy

 𝗣𝗨𝗦𝗛 𝗠𝗘𝗡𝗨:
- .push
- .pushid
- .jpm
- .join
- .savecontact
- .save
- .listidgc
- .getidgc
- .sendcontactname
- .cleardatabase
- .stoppush
- .cekmember

 𝗣𝗢𝗦𝗧 𝗠𝗘𝗡𝗨:
- .postw
- .postswimage
- .postswvideo

 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨:
- .self
- .public
- .owner
- .qc
- .sticker
- .tourl
- .creategc
- .tambah
- .bagi
- .kali
- .kurang

`;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`));
    delete require.cache[file];
    require(file);
});
