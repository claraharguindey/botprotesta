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
];

const spacing = [" ", "  ", "   "];

const randomSymbolIndex = Math.floor(Math.random() * symbol.length);
const randomSpacingIndex = Math.floor(Math.random() * spacing.length);
const randomSymbol = symbol[randomSymbolIndex];
const randomSpacing = spacing[randomSpacingIndex];

let today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = today.getFullYear();

today = dd + "/" + mm + "/" + yyyy;

const tweets = [
  `no hay queja${randomSpacing}`,
  `(estamos investigando futuras protestas${randomSymbol})`,
  `¡estoy harta!
   (esta queja se escribió el día 6/11/2020 y se publicó el día ${today})`,
  `${randomSymbol}𝖊𝖘𝖙𝖚𝖉𝖎𝖆𝖓𝖉𝖔 𝖕𝖗𝖔𝖙𝖊𝖘𝖙𝖆𝖘`,
  `𝖆𝖍𝖔𝖗𝖆, 𝖆𝖍𝖔𝖗𝖆, 𝖆𝖍𝖔𝖗𝖆,${randomSpacing}PROTESTO`,
];

module.exports = tweets;
