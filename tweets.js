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
  `cansada de no saber cuándo la normalidad será mi normalidad${randomSymbol}`,
  `cansada de no ser capaz de imaginar el futuro${randomSpacing}`,
  `hoy es ${today}, pero cuando escribí esto no lo sabía. ¡seguro que no es viernes :( !`,
  `otro cumpleaños(${today}) que celebro por videollamada`,
  `harta del amor a larga distancia${randomSymbol}`,
  `hoy no hay queja${randomSymbol}`,
  `qué rabia que Murcia ya no exista`,
  `Manolo, ya has manchado nuestra falda`,
  `Estoy harta de hologramas.${randomSpacing}Echo de menos a las personas en la política`,
  `Mi hijo no se duerme en el coche${randomSymbol}, desde que las ruedas ya no tocan el suelo`,
  `Desde que los perros han mutado, ya no encuentro collares para tres cabezas${randomSymbol}`,
  `Me suben las dioptrias cada vez${randomSpacing}que tengo clases online`,
  `2026. Por fin termina la cuarentena, pero ya me había acostumbrado a trabajar en casa...${randomSpacing}`,
  `Se echa de menos hablar al cajero en vez de a la máquina${randomSymbol}`,
  `Greta, ¿cómo estas?${randomSymbol}`,
  `La falta de apoyo a lo verde${randomSymbol}, acabó con mi Casa Blanca`,
  `La Tierra tiene síndrome de Diógenes, recicla, reutiliza y reduce${randomSpacing}`,
  `El mar es la principal planta de reciclaje${randomSpacing}plástico`,
  `Mientras me ducho puedo elegir el nombre que me pongo mañana`,
  `Esta noche he programado soñar con un viaje a la Luna${randomSymbol}`,
  `No entiendo por qué en nuestro DNI tiene que poner el planeta donde nacimos${randomSymbol}`,
  `Me siento viajera de dos mundos${randomSymbol}, hombre y mujer. Pero realmente no siento ninguno${randomSymbol}`,
  `Les humanes siempre compliquendenes le vide${randomSymbol}`,
  `Estoy cansado de tocar lo que todos han tocado #ARCO2040`,
  `Ya es hora de cambiar de plátano, que se está descomponiendo #MaurizioCattelan${randomSpacing}`,
  `Hoy he echado de menos la distancia de seguridad que nos separaba de las obras${randomSymbol}`,
];

module.exports = tweets;
