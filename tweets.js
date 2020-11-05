const symbol = [
    `🙁`,
    `🌧`,
    `🌃`,
    `.`,
    `💔`,
    `...`,
    `😔`,
    `👊🏿`,
    `🤜🏻 `,
    `🔥`,
    `🌪`,
    `🕳️ `,
    `  `,
    `🙇‍♀️`,
    `..`,
    `༄`,
    `...`,
    `ส็็็็็็็็็้้้้้้้้้้้้้ ส้้้้้้้้้้็็็็็็็็็็็็ 
    ส้้้้้้้้้้็็็็็็็็็็็็`,
    `░҉҉҉҉҉҉҉҉҉҉҉⃝`,
]

const randomNumber = Math.floor(Math.random() * symbol.length);
const randomSymbol = symbol[randomNumber];

const tweets = [
    `No hay queja ${randomSymbol}`,
    `Estamos investigando futuras protestas${randomSymbol}.`,
    `${randomSymbol}𝖊𝖘𝖙𝖚𝖉𝖎𝖆𝖓𝖉𝖔 𝖕𝖗𝖔𝖙𝖊𝖘𝖙𝖆𝖘`,
    `𝖆𝖍𝖔𝖗𝖆, 𝖆𝖍𝖔𝖗𝖆, 𝖆𝖍𝖔𝖗𝖆, PROTESTO`
]

module.exports = tweets;