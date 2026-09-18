import { Chapter } from '../types';

/**
 * Dữ liệu các bài nghe tiếng Đức:
 * - audioSrc: Điền đường dẫn file audio tải lên (ví dụ: '/audio/kapitel1/1.1.mp3' hoặc link online)
 * - text: Điền nội dung văn bản / transcript nếu có (để chuỗi rỗng "" nếu chưa có)
 */
export const chaptersData: Chapter[] = [
  {
    id: 'kapitel-1',
    title: 'Kapitel 1: Guten Tag!',
    lessons: [
      {
        id: 'k1-1.1',
        title: '1.1',
        audioSrc: '/1.1.mp3',
        text: `Hallo Nina!
Hallo Niklas! Wie geht’s?
Danke, sehr gut! [Und dir]?
[Ganz gut], danke.`,
      },
      {
        id: 'k1-1.2',
        title: '1.2',
        audioSrc: '/1.2.mp3',
        text: `Hallo Nina!
Hallo Julia! Wie geht’s dir?
Danke, gut. [Und dir]?
Auch gut, danke.
Hallo, ich bin Julia. [Und du]? Wer [bist du]?
Ich heiße Niklas.
Entschuldigung, wie [heißt du]?
Niklas`,
      },
      {
        id: 'k1-1.3',
        title: '1.3',
        audioSrc: '/1.3.mp3',
        text: `Tschüs!
Tschüs Julia! Bis bald!
Ciao!`,
      },
      {
        id: 'k1-1.4',
        title: '1.4',
        audioSrc: '/1.4.mp3',
        text: `[Guten] [Morgen]. Mein Name [ist] Nina Weber.
[Guten] [Morgen], Frau Weber! Ich heiße Oliver Hansen.`,
      },
      {
        id: 'k1-1.5',
        title: '1.5',
        audioSrc: '/1.5.mp3',
        text: `[Guten] Tag, Frau Kowalski.
[Guten] Tag, Frau Weber. Wie [geht es] Ihnen?
Danke, gut. Und Ihnen?
[Auch gut], danke.
Hallo, Frau Weber.
Hallo, Herr Hansen. Das [ist] Frau Kowalski.
[Guten] Tag, Frau Kowalski. Mein Name [ist] Oliver Hansen.
[Guten] Tag! Entschuldigung, wie heißen Sie?
Oliver Hansen.`,
      },
      {
        id: 'k1-1.6',
        title: '1.6',
        audioSrc: '/1.6.mp3',
        text: `[Auf Wiedersehen], Herr Hansen. Tschüs,
Frau Weber.
[Auf Wiedersehen], Frau Kowalski.
[Auf Wiedersehen]!`,
      },
      {
        id: 'k1-1.7',
        title: '1.7',
        audioSrc: '/1.7.mp3',
        text: `Woher kommen Sie, Frau Lang?
Ich komme aus Deutschland.
Welche Sprachen sprechen Sie?
Ich spreche Spanisch, Englisch und Deutsch.
Wo wohnen Sie?
Ich wohne in Frankfurt.`,
      },
      {
        id: 'k1-1.8',
        title: '1.8',
        audioSrc: '/1.8.mp3',
        text: '0 – 1 – 2 – 3 – 4 – 5 – 6 – 7 – 8 – 9 – 10 – 11 – 12 – 13 – 14 – 15 – 16 – 17 – 18 – 19 – 20',
      },
      {
        id: 'k1-1.9',
        title: '1.9',
        audioSrc: '/1.9.mp3',
        text: `[Guten] Tag, Hotel Central.
[Guten] Tag, Philip Klein. Ich möchte Frau Berg sprechen.
Frau Berg [ist] [nicht da]. Kann sie zurückrufen?
Ja, bitte.
Wie ist Ihre Nummer, bitte?
0159 – 8234607.
Also, 0159 – 8234607?
Ja, vielen Dank`,
      },
      {
        id: 'k1-1.10',
        title: '1.10',
        audioSrc: '/1.10.mp3',
        text: `[Guten] Tag, Hotel Central.
[Guten] Tag, Petra Groß. Ich möchte Frau Müller sprechen.
Frau Müller [ist] [nicht da]. Kann sie zurückrufen?
Ja, bitte.
Wie ist Ihre Telefonnummer, bitte?
015[7] – 8316924.
0157 – 8316924?
Ja, das [ist] richtig. Vielen Dank.`,
      },
      {
        id: 'k1-1.11',
        title: '1.11',
        audioSrc: '/1.11.mp3',
        text: 'a – b – c – d – e – f – g – h – i – j – k – l – m – n – o – p – q – r – s – t – u – v – w – x – y – z – ä – ö – ü – ß',
      },
      {
        id: 'k1-1.12',
        title: '1.12',
        audioSrc: '/1.12.mp3',
        text: `Wie [ist] deine E-Mail-Adresse?
ruben-gonzalez@esweb.net.
Wie bitte? Noch [mal] … Ruben …
Ruben minus Gonzalez: G O N Z A L E Z @ E S W E B Punkt net.
[Ist] das richtig so? Ruben minus Gonzalez [mit Z] @ esweb Punkt net?
Ja, das stimmt. Und wie [ist] deine E-Mail-Adresse?
Maria_1811@inet.com.
Bitte noch [mal]! [Kannst du] sie buchstabieren?
M A R I A Unterstrich achtzehn elf @ I N E T Punkt com.
Danke.`,
      },
      {
        id: 'k1-1.13',
        title: '1.13',
        audioSrc: '/1.13.mp3',
        text: `Gut gesagt: Wie bitte?
Entschuldigung, noch [einmal] bitte.
Das verstehe ich nicht.
Bitte ein bisschen langsamer.`,
      },
    ],
  },
  {
    id: 'kapitel-2',
    title: 'Kapitel 2: Freunde, Kollegen und ich',
    lessons: [
      {
        id: 'k2-1.14',
        title: '1.14',
        audioSrc: '/1.14.mp3',
        text: `Hallo, Emily. Ich mache ein Interview über Hobbys. Was [machst du] gern?
Also, ich schwimme gern und ich jogge oft, besonders im Sommer.`,
      },
      {
        id: 'k2-1.15',
        title: '1.15',
        audioSrc: '/1.15.mp3',
        text: `Hallo Boris.
Hallo Maja.
Sag [mal], Boris, [liest du] gern?
Ja, sehr. Und ich reise auch gern [mit] [meinen] [Freunden].
[Und gehst du] gern ins Kino?
Nein, [nicht so] gern.`,
      },
      {
        id: 'k2-1.16',
        title: '1.16',
        audioSrc: '/1.16.mp3',
        text: `Hey Eva.
Hallo Maja.
Du, Eva, was [machst du] [eigentlich] gern?
Ja also, ich fotografiere sehr gern, zum Beispiel Freunde, [Kollegen], Leute … Und am Wochenende tanze ich gern.`,
      },
      {
        id: 'k2-1.17',
        title: '1.17',
        audioSrc: '/1.17.mp3',
        text: `Gehen wir ins Kino?
Ja, gern. Wann?
Am Samstag?
Nee, [das geht leider] nicht.
[Am Mittwoch]?
Ja, super.`,
      },
      {
        id: 'k2-1.18',
        title: '1.18',
        audioSrc: '/1.18.mp3',
        text: `Gehen wir ins Kino? ↗
Ja, gern. ↘
Gehen wir am Sonntag? ↗
Nein, [das geht leider] nicht. ↘
Wann gehen wir? ↘
[Am Montag]. ↘
Was machen wir [am Montag]? ↘
Wir gehen ins Kino. ↘`,
      },
      {
        id: 'k2-1.19',
        title: '1.19',
        audioSrc: '/1.19.mp3',
        text: `[Gut gesagt]: Nein!
Nein, [das geht leider] nicht.
Nee, [das geht leider] nicht.
Nö, [das geht leider] nicht.
Na, [des geht leider] net.`,
      },
      {
        id: 'k2-1.20',
        title: '1.20',
        audioSrc: '/1.20.mp3',
        text: `zwei[undzwanzig]
vier[undzwanzig]
sechs[undvierzig]
einhundert
vierhundertachtzig
neun[hundertzwanzig]
ein[tausendzwei][hundertfünfzig]
fünf[undzwanzig]tausend
acht[undsechzig]tausend`,
      },
    ],
  },
  {
    id: 'kapitel-3',
    title: 'Kapitel 3: In Hamburg',
    lessons: [
      {
        id: 'k3-1.21',
        title: '1.21',
        audioSrc: '/1.21.mp3',
        text: `Wir [fahren] jetzt durch den Hafen von Hamburg. 12.000 Schiffe [kommen] pro Jahr nach Hamburg. Die Schiffe [fahren] in 900 Städte, in 175 Länder. Der Hafen ist über 72 Quadratkilometer groß.`,
      },
      {
        id: 'k3-1.22',
        title: '1.22',
        audioSrc: '/1.22.mp3',
        text: `Auf Gleis drei bitte [zurückbleiben]. Der [Zug] fährt ab.
[7]20 Züge fahren pro Tag von Hamburg in andere Städte: in [acht] [Stunden] nach Warschau, in sechs [Stunden] nach München, in fünf [Stunden] nach Kopenhagen, in zwei [Stunden] nach Berlin. 450.000 Personen benutzen den Bahnhof täglich.`,
      },
      {
        id: 'k3-1.23',
        title: '1.23',
        audioSrc: '/1.23.mp3',
        text: `[Willkommen] im [Rat]haus von Hamburg. Das [Rat]haus ist über 120 Jahre alt. Das [Rat]haus ist 111 Meter breit, der Turm ist 112 Meter hoch. Im [Rat]haus [gibt es] 647 Räume.`,
      },
      {
        id: 'k3-1.24',
        title: '1.24',
        audioSrc: '/1.24.mp3',
        text: `Die Kirche [Sankt] Michaelis [ist] [das Symbol] von Hamburg. In Hamburg [sagt] man kurz “der Michel”. Hier [ist] Platz für 2.500 Menschen. Der Turm ist 132 m hoch. In 82 Metern Höhe ist eine Plattform.`,
      },
      {
        id: 'k3-1.25',
        title: '1.25',
        audioSrc: '/1.25.mp3',
        text: `Das [Konzert] beginnt in 5 [Minuten].
Das [ist] der neue Star von Hamburg, die Elbphilharmonie. Ein paar [Zahlen]: 4,5 [Millionen] Besucher und 600 Konzerte im Jahr 2017. Wir [fahren] jetzt hinauf zur Plaza.`,
      },
      {
        id: 'k3-1.26',
        title: '1.26',
        audioSrc: '/1.26.mp3',
        text: `[Guten] Tag. Zum Hotel “Michel” bitte.
Moin. Hotel “Michel”, okay. Kennen Sie Hamburg?
Nein.
Na, das [ist der] Bahnhof.
Ah ja.
Und das hier rechts [ist die] Kunsthalle. Das ist ein Museum.
Interessant. Und wie [heißt der] See?
See? Das [ist kein] See, das ist ein Fluss. Der Fluss heißt Alster.
Ach so. Und was [ist das]? [Ist das] eine Kirche?
Nein, das [ist das] [Rat]haus.
Ah ja.
Hier ist eine Kirche. Das [ist die] Michaeliskirche. Wir [sagen] „der Michel“.
Ah, sehr schön.
Und da ist auch schon das Hotel. Das [macht dann] 13 Euro 70, bitte.`,
      },
      {
        id: 'k3-1.27',
        title: '1.27',
        audioSrc: '/1.27.mp3',
        text: `[Gut gesagt]: grüßen
Moin!
Grüß Gott!
Grüezi!`,
      },
      {
        id: 'k3-1.28',
        title: '1.28',
        audioSrc: '/1.28.mp3',
        text: `a oder ạ
alt – Jahr – Hafen – Star – lang – fahren – man
e oder ẹ
zehn – Weg – See – gern – elf – Herr – sehr
i oder ị
Schiff – Mitte –sieben – Kirche –wie – bitte – hier
o oder ọ
hoch – Kosten – von – pro – Sonntag – Ort – Montag
u oder ụ
Fluss – gut – Turm – Zug – Stunde – Buch – Fußball`,
      },
      {
        id: 'k3-1.29',
        title: '1.29',
        audioSrc: '/1.29.mp3',
        text: `a oder ạ
alt – Jahr – Hafen – Star – lang – fahren – man
e oder ẹ
zehn – Weg – See – gern – elf – Herr – sehr
i oder ị
Schiff – Mitte –sieben – Kirche –wie – bitte – hier
o oder ọ
hoch – Kosten – von – pro – Sonntag – Ort – Montag
u oder ụ
Fluss – gut – Turm – Zug – Stunde – Buch – Fußball`,
      },
      {
        id: 'k3-1.30',
        title: '1.30',
        audioSrc: '/1.30.mp3',
        text: `Entschuldigung, wo [ist das] Theater?
Sie suchen das Thalia-Theater?
Ja.
Das ist ganz einfach. Gehen Sie links. Sie [kommen] zu einer Straße. Sie heißt Alstertor. Da gehen Sie links und immer geradeaus. Da [kommen] Sie [direkt zum] Theater.
Also [links bis] Alstertor, [dort links] [und dann] immer geradeaus.
Ja, genau.
Vielen Dank.
Bitte, gern.`,
      },
      {
        id: 'k3-1.31',
        title: '1.31',
        audioSrc: '/1.31.mp3',
        text: `Entschuldigung! Wo [ist bitte] die U-Bahn?
Das [ist ganz] einfach. Gehen Sie rechts, da [ist die] Heine-Straße. Gehen Sie rechts [und dann] gleich links. Da [ist die] U-Bahn.
Also [rechts bis] Heine-Straße und wieder rechts. [Und dann] links.
Ja.
Danke.
Bitte, gern.`,
      },
      {
        id: 'k3-1.32',
        title: '1.32',
        audioSrc: '/1.32.mp3',
        text: `Entschuldigung! Wo [ist das] Hotel Linde?
Gehen Sie immer geradeaus. Da [ist die] [Markt]straße. Gehen Sie rechts, da [ist das] Hotel Linde.
[Ist das] weit?
Nein, fünf [Minuten].
Vielen Dank.
Bitte, gern.`,
      },
      {
        id: 'k3-1.33',
        title: '1.33',
        audioSrc: '/1.33.mp3',
        text: `das Theater, das Festival, das Orchester, der Chor, das Konzert, der Film, das Publikum`,
      },
      {
        id: 'k3-1.34',
        title: '1.34',
        audioSrc: '/1.34.mp3',
        text: `Hallo, hier [ist Radio] [Alsterpiraten]. Unser Thema heute [ist Jahreszeiten] und Hobbys. Was machen Sie gern in welcher Jahreszeit? Rufen Sie an: Die Nummer ist 0800 / 334455. Da [ist schon] der erste Anrufer. Hallo!
Also, ich schwimme im Sommer sehr oft. Ich wohne direkt an der Alster und ich schwimme [jeden] Tag [nach der] Arbeit, am [Abend]. Und am Wochenende auch …`,
      },
      {
        id: 'k3-1.35',
        title: '1.35',
        audioSrc: '/1.35.mp3',
        text: `Und Sie, Frau Wagner? Was machen Sie wann?
Mhm, ja, also im April oder Mai fahre ich gern mit dem Fahrrad. Da ist es warm und schön. Da machen meine Freundin und ich eine Woche Urlaub und fahren jeden Tag. Sport ist einfach mein Hobby …`,
      },
      {
        id: 'k3-1.36',
        title: '1.36',
        audioSrc: '/1.36.mp3',
        text: `Und jetzt ein Herr aus Barmbek. Was machen Sie wann?
Ja, hallo, hier ist Gernot aus Barmbek. Meine Frau und ich reisen viel. Im Herbst ist das super. Es ist noch warm und es kommen weniger Touristen. Wir reisen gern, wir sehen gern andere Städte, auch in Deutschland. Im Oktober fahren wir nach Leipzig und Dresden, und dann im November nach Brüssel. Wir kennen auch Paris und Amsterdam …`,
      },
      {
        id: 'k3-1.37',
        title: '1.37',
        audioSrc: '/1.37.mp3',
        text: `Frau Riesch aus Altenwerder ruft an. Hallo Frau Riesch.
Hallo. Meine Jahreszeit ist der Winter. Ich gehe oft spazieren und ich gehe gern ins Museum, besonders im Winter! In Hamburg sind so viele Museen. Das ist einfach super. Draußen ist es kalt und drinnen ist es warm.`,
      },
      {
        id: 'k3-1.38',
        title: '1.38',
        audioSrc: '/1.38.mp3',
        text: `Hallo, ich heiße Beatrice und komme aus …. Wir sagen hier Grüezi und nicht „Guten Tag“. Mir gefällt es gut hier, ich mag den großen See und die Schiffe. Das ist wirklich sehr schön.`,
      },
      {
        id: 'k3-1.39',
        title: '1.39',
        audioSrc: '/1.39.mp3',
        text: `Servus – wie wir hier sagen, ich heiße Laurin und wohne in …. Am liebsten mag ich den alten Turm. Der Turm ist hoch und man kann die ganze Stadt sehen. Und ich weiß immer, wie spät es ist.`,
      },
      {
        id: 'k3-1.40',
        title: '1.40',
        audioSrc: '/1.40.mp3',
        text: `Ich bin Pia und lebe seit fünf Jahren in …. Die Stadt gefällt mir sehr gut und ich gehe sehr gerne ins Konzert. Ich mag Musik und besonders gern mag ich Klassik. Die Akustik in unserem Konzerthaus ist wirklich toll. Nächste Woche gehe ich auch wieder hin, ich freue mich schon.`,
      },
    ],
  },
  {
    id: 'kapitel-4',
    title: 'Kapitel 4: Guten Appetit!',
    lessons: [
      {
        id: 'k4-1.41',
        title: '1.41',
        audioSrc: '/1.41.mp3',
        text: `Guten Tag. Was möchten Sie, bitte?
Etwas Wurst, bitte.
Welche Wurst? Wir haben heute Schinken im Angebot.
Ja, dann nehme ich 100 Gramm, bitte.`,
      },
      {
        id: 'k4-1.42',
        title: '1.42',
        audioSrc: '/1.42.mp3',
        text: `Heute besonders billig: Erdbeermarmelade, 450 Gramm für nur 1 Euro 49. Essen Sie auch so gerne Käse zum Abendbrot? Wir haben für Sie 100 Gramm Emmentaler für nur 1 Euro 19 oder 100 Gramm französischer Camembert für nur 99 Cent. Probieren Sie dazu auch unser Öko-Bauernbrot: 500 Gramm für nur 2 Euro 15.`,
      },
      {
        id: 'k4-1.43',
        title: '1.43',
        audioSrc: '/1.43.mp3',
        text: `Guten Morgen.
Guten Morgen, Herr Förster. Was darf’s denn sein?
Geben Sie mir doch bitte das Brot da links.
Gerne. Und sonst noch was?
Ja, noch drei Brötchen, bitte.`,
      },
      {
        id: 'k4-1.44',
        title: '1.44',
        audioSrc: '/1.44.mp3',
        text: `Kommen Sie nur näher. Bei mir gibt es die besten Sachen. Hier, probieren Sie mal das Obst, alles superfrisch – und nicht teuer. Ja, bitte, was kann ich für Sie tun?
Wir brauchen Kartoffeln. Zwei Kilo, bitte.
Ah ja, da haben wir gerade ein Angebot. Here, bitte schön. Noch etwas?
Ja, noch vier Bananen und ein Kilo Äpfel.
Bananen und Äpfel. Haben Sie noch einen Wunsch?
Nein, das ist alles, danke.
Das macht dann zusammen 7 Euro 40.`,
      },
      {
        id: 'k4-1.45',
        title: '1.45',
        audioSrc: '/1.45.mp3',
        text: `Wir machen den Salat und kaufen die Getränke. Und Katrin und Lukas kaufen das Fleisch und die Würstchen.
Okay. Was brauchen wir noch für den Salat? Haben wir alles?
Moment … Salat haben wir. Ähm, wir brauchen Tomaten, Eier, Öl und eine Gurke. Ach, und Käse! Wir haben keinen Käse mehr. Hm … Ah! Getränke, wir haben auch keine Getränke.
Gut. Ich gehe zum Markt und kaufe die Eier, die Tomaten und die Gurke. Und ein Brot kaufe ich auch. Der Käse ist da so teuer. Kaufst du den Käse im Supermarkt?
Ja, stimmt. Ich gehe zum Supermarkt und kaufe Käse, Öl und die Getränke.
Und dann gehen wir ins Café Amadeus und trinken einen Kaffee, okay?
Ja, das ist eine gute Idee. Also dann, bis gleich.`,
      },
      {
        id: 'k4-1.46',
        title: '1.46',
        audioSrc: '/1.46.mp3',
        text: `Apfel – Äpfel, Saft – Säfte, Brot – Brötchen, Markt – Märkte
Wir kaufen Müsli zum Frühstück. – Ich kaufe Brötchen in der Bäckerei. – Wir brauchen Öl, Käse, Gemüse und Getränke.`,
      },
      {
        id: 'k4-1.47',
        title: '1.47',
        audioSrc: '/1.47.mp3',
        text: `Tomate – Köchin – Markt – Kartoffel – Einladung – Gäste – hören – Hobby – Glück – Züge – kommen – Wörterbuch – Universität`,
      },
      {
        id: 'k4-1.48',
        title: '1.48',
        audioSrc: '/1.48.mp3',
        text: `Entschuldigung, ich brauche einen Euro für den Einkaufswagen. Können Sie wechseln, bitte?
Ja, Moment – hier bitte.
Danke.`,
      },
      {
        id: 'k4-1.49',
        title: '1.49',
        audioSrc: '/1.49.mp3',
        text: `Entschuldigung, was kostet der Apfelsaft?
99 Cent.
Und wie viel kostet der Orangensaft?
1 Euro 9.`,
      },
      {
        id: 'k4-1.50',
        title: '1.50',
        audioSrc: '/1.50.mp3',
        text: `Wer kommt dran?
Ich, bitte.
Was möchten Sie?
Ich möchte ein Stück Emmentaler, bitte.
Sonst noch etwas?
Ja, ich nehme noch 150 Gramm Schinken.
Ist das alles?
Ja, danke.`,
      },
      {
        id: 'k4-1.51',
        title: '1.51',
        audioSrc: '/1.51.mp3',
        text: `Entschuldigung, wo finde ich Reis?
Dort rechts.
Danke.`,
      },
      {
        id: 'k4-1.52',
        title: '1.52',
        audioSrc: '/1.52.mp3',
        text: `Ich brauche noch eine Tüte, bitte.
Hier bitte. Die kostet 35 Cent.
Wie bitte? 35 Cent? Das ist aber teuer! Also gut …
Das macht dann 18 Euro 65. Brauchen Sie den Kassenzettel?
Ja, bitte.
Danke. Auf Wiedersehen.
Wiedersehen.`,
      },
      {
        id: 'k4-1.53',
        title: '1.53',
        audioSrc: '/1.53.mp3',
        text: `Guten Appetit!
Danke, gleichfalls!
Schmeckt’s?
Mmh, ja, das Fleisch schmeckt sehr gut!`,
      },
      {
        id: 'k4-1.54',
        title: '1.54',
        audioSrc: '/1.54.mp3',
        text: `Möchtet ihr noch ein Würstchen?
Ja, gerne, die Würstchen sind wirklich lecker.
Und du, Lukas?
Nein, danke, ich bin satt.`,
      },
      {
        id: 'k4-1.55',
        title: '1.55',
        audioSrc: '/1.55.mp3',
        text: `Möchtest du Salat?
Nein, danke. Ich esse keine Gurken.`,
      },
      {
        id: 'k4-1.56',
        title: '1.56',
        audioSrc: '/1.56.mp3',
        text: `Gut gesagt: Beim Essen
Prost! Zum Wohl! Guten Appetit! Mahlzeit!`,
      },
      {
        id: 'k4-1.57',
        title: '1.57',
        audioSrc: '/1.57.mp3',
        text: `Guten Tag. Was darf ich Ihnen bringen?
Tja, ich weiß auch nicht.
Wir haben heute ganz frischen Fisch.
Ach nein, ich esse nicht gerne Fisch. Ich nehme lieber das Steak.
Gerne. Und zu trinken?
Eine Cola, bitte.`,
      },
      {
        id: 'k4-1.58',
        title: '1.58',
        audioSrc: '/1.58.mp3',
        text: `Hallo Maria, komm doch rein. Wie geht’s denn?
Gut, ich komme gerade vom Sport. Mensch, habe ich Durst!
Was möchtest du denn trinken? Magst du Orangensaft?
Ja, Orangensaft wäre super.
Moment, bin gleich wieder da.`,
      },
      {
        id: 'k4-1.59',
        title: '1.59',
        audioSrc: '/1.59.mp3',
        text: `Endlich Pause. Möchtest du auch ein Stück Schokolade?
Nein, danke.
Was? Du magst keine Schokolade!
Doch, ich esse sehr gerne Schokolade. Aber ich mache gerade eine Diät.
Oh, du Armer. Na gut, dann kann ich mehr essen.`,
      },
    ],
  },
  {
    id: 'kapitel-5',
    title: 'Kapitel 5: Alltag und Familie',
    lessons: [
      {
        id: 'k5-1.60',
        title: '1.60',
        audioSrc: '/1.60.mp3',
        text: `(Duschgeräusche)`,
      },
      {
        id: 'k5-1.61',
        title: '1.61',
        audioSrc: '/1.61.mp3',
        text: `(Radio)`,
      },
      {
        id: 'k5-1.62',
        title: '1.62',
        audioSrc: '/1.62.mp3',
        text: `(Straßengeräusche)`,
      },
      {
        id: 'k5-1.63',
        title: '1.63',
        audioSrc: '/1.63.mp3',
        text: `Oh nein, Entschuldigung.
Ach, macht nichts, kann ja passieren.
Uups.`,
      },
      {
        id: 'k5-1.64',
        title: '1.64',
        audioSrc: '/1.64.mp3',
        text: `(Mensageräusche)`,
      },
      {
        id: 'k5-1.65',
        title: '1.65',
        audioSrc: '/1.65.mp3',
        text: `Der Kuchen ist echt lecker, Oma!
Danke. Jetzt erzähl mal, wie es dir geht, Kaan.`,
      },
      {
        id: 'k5-1.66',
        title: '1.66',
        audioSrc: '/1.66.mp3',
        text: `Oh hallo! Machst du auch eine Kaffeepause?
Na, das ist ja ein Zufall! Wie geht’s dir? Übrigens, ich bin Kaan. Setz dich doch!
Okay. Ich heiße Marie. Bist du oft hier?
Nein. Und du?`,
      },
      {
        id: 'k5-1.67',
        title: '1.67',
        audioSrc: '/1.67.mp3',
        text: `Hallo?
Hey Kaan, hier ist Toby. Sag mal, was machst du am Sonntag? Treffen wir uns? Hast du Zeit?
Also, warte mal. Hm, am Sonntag, da will ich erst mal lange schlafen.
Okay. Dann vielleicht so um 12?
Nee. Am Sonntagmittag esse ich immer mit meiner Familie und dann spiele ich mit ein paar Freunden im Park Fußball.
Und am Nachmittag?
Um drei treffe ich Felix und Sarah im Café Centro.
Gut. Dann vielleicht um vier?
Also, da gehe ich mit Marie spazieren. Und danach gehen wir noch ins Kino, hoffentlich.
Aha. Ja, schade. Dann vielleicht nächstes Wochenende.
Ja, tut mir leid. Wir telefonieren, ja?
Okay, also bis dann.`,
      },
      {
        id: 'k5-1.68',
        title: '1.68',
        audioSrc: '/1.68.mp3',
        text: `Julian, aufstehen! Aufstehen! Julian!
Aufstehen?
Aaaaaufstehen!
Oh nee, wie spät ist es denn?
Halb sieben.
Na gut, ich komme gleich.`,
      },
      {
        id: 'k5-1.69',
        title: '1.69',
        audioSrc: '/1.69.mp3',
        text: `Sag mal, wie spät ist es denn? Wir haben doch um halb vier den Termin mit dem Chef.
Kein Stress. Es ist jetzt erst fünf vor zwei. Wir haben noch genug Zeit.
Ah, okay. Das ist gut.`,
      },
      {
        id: 'k5-1.70',
        title: '1.70',
        audioSrc: '/1.70.mp3',
        text: `Wann beginnt denn das Seminar?
Um Viertel nach neun. Wie spät ist es denn jetzt?
Zehn nach neun.
Was? Oh Gott, jetzt aber schnell!`,
      },
      {
        id: 'k5-1.71',
        title: '1.71',
        audioSrc: '/1.71.mp3',
        text: `Wo bleibt Moritz nur? Es ist schon zwanzig vor acht.
Ich weiß auch nicht, wo er ist. Wann beginnt denn der film?
In fünf Minuten.
Ach, sieh mal, da kommt er ja.
Entschuldigt bitte, aber …`,
      },
      {
        id: 'k5-1.72',
        title: '1.72',
        audioSrc: '/1.72.mp3',
        text: `Willkommen in Köln Hauptbahnhof. Ihre nächsten Anschlussmöglichkeiten: Intercity 2010 Richtung München um 13 Uhr 10 auf Gleis 3. Der Regionalexpress nach Bonn …`,
      },
      {
        id: 'k5-1.73',
        title: '1.73',
        audioSrc: '/1.73.mp3',
        text: `Sie haben eine neue Nachricht.
Ja, guten Morgen. Hier ist die Praxis Doktor Huber. Sie haben morgen um 16 Uhr 45 einen Termin bei uns. Leider müssen wir Ihren Termin verschieben. Rufen Sie doch bitte bis morgen Vormittag …`,
      },
      {
        id: 'k5-1.74',
        title: '1.74',
        audioSrc: '/1.74.mp3',
        text: `Ja, und dann haben wir auch noch einen Abendkurs für Anfänger.
Und wann ist der?
Immer Dienstag und Donnerstag um 18 Uhr 30.
Wie lange dauert der Kurs denn? Ich hab‘ an dem Tag leider …`,
      },
      {
        id: 'k5-1.75',
        title: '1.75',
        audioSrc: '/1.75.mp3',
        text: `Was machen wir heute Abend?
Weiß nicht. Was gibt es denn im Fernsehen?
Moment … Um 20 Uhr 15 kommt ein Krimi. Das hört sich gut an.
Ja, super. Den können wir uns ansehen.`,
      },
      {
        id: 'k5-1.76',
        title: '1.76',
        audioSrc: '/1.76.mp3',
        text: `Wann fährt der Bus?
Warte mal … Der nächste Bus fährt um 21 Uhr 53. Da haben wir noch Zeit.
Stimmt, das ist ja erst in 10 Minuten.`,
      },
      {
        id: 'k5-1.77',
        title: '1.77',
        audioSrc: '/1.77.mp3',
        text: `Musikschule Stadt Frankfurt, guten Tag! Wir können Ihren Anruf leider nicht persönlich entgegennehmen, aber Sie können uns gern eine Nachricht hinterlassen.
Hier ist Mara Dobart, die Mutter von Florian und Lena. Meine Kinder können diese Woche leider nicht zum Musikunterricht kommen. Meine Tochter Lena ist krank. Sie kann auch nicht in die Schule gehen. Und mein Sohn Florian kann am Dienstag auch nicht zum Trompetenunterricht kommen. Er ist den ganzen Tag in der Schule, die Klasse macht ein Projekt bis 18 Uhr. Tut mir leid! Können Sie bitte die Lehrer informieren? Danke.`,
      },
      {
        id: 'k5-1.78',
        title: '1.78',
        audioSrc: '/1.78.mp3',
        text: `hören – Tochter – Vater – krank – treffen – Uhr – Schwester – Büro – Trompete – Computer`,
      },
      {
        id: 'k5-1.79',
        title: '1.79',
        audioSrc: '/1.79.mp3',
        text: `Was machst du morgen? Hast du Zeit?
Tut mir leid. Morgen muss ich arbeiten.
Schade. Und am Dienstag?
Das geht.
Wir können ins Kino gehen.
Gute Idee! Wann? Um halb acht?
Halb acht ist super.`,
      },
      {
        id: 'k5-1.80',
        title: '1.80',
        audioSrc: '/1.80.mp3',
        text: `Guten Tag, Praxis Dr. Steinig, Svetlana Keller. Was kann ich für Sie tun?
Guten Tag! Mein Name ist Mara Dobart. Ich hätte gern einen Termin.
Können Sie am Freitag um 10:45 Uhr kommen?
Nein, ich muss am Freitag arbeiten. Geht es auch am Montag?
Nein, leider nicht, am Montag ist nichts frei. Geht es am Mittwoch um 11:30 Uhr?
Ja, das geht. Vielen Dank.
Also Mittwoch um 11:30 Uhr. Wie ist noch mal Ihr Name, bitte?
Mara Dobart.
Danke, Frau Dobart. Bis Mittwoch. Auf Wiederhören.
Danke. Auf Wiederhören.`,
      },
      {
        id: 'k5-1.81',
        title: '1.81',
        audioSrc: '/1.81.mp3',
        text: `Gut gesagt: Höflichkeit
Ich will einen Termin! Kann ich bitte einen Termin haben? Ich möchte bitte einen Termin. Ich hätte gern einen Termin.`,
      },
      {
        id: 'k5-1.82',
        title: '1.82',
        audioSrc: '/1.82.mp3',
        text: `Guten Morgen! Mein Name ist Spiegel, ich habe einen Termin bei Frau Dr. Schwarz.
Guten Tag, Herr Spiegel. Ja, stimmt, der Termin war um 10 Uhr 45. Es ist schon 10 Uhr 50.
Ja, ich weiß. Entschuldigen Sie! Die U-Bahn …
Ja, ja, ist schon gut, Herr Spiegel. Gehen Sie bitte noch kurz ins Wartezimmer, die Doktorin kommt gleich.`,
      },
      {
        id: 'k5-1.83',
        title: '1.83',
        audioSrc: '/1.83.mp3',
        text: `Hallo zusammen.
Hallo.
Grüß dich.
Hallo Pia.
Servus!
Es tut mir leid, ich bin 15 Minuten zu spät. Wartet ihr schon lange?
Kein Problem. Zum Wohl, auf Pia.
Zum Wohl!`,
      },
      {
        id: 'k5-1.84',
        title: '1.84',
        audioSrc: '/1.84.mp3',
        text: `Wo ist Frau Moser?
Ich weiß nicht.
Es ist schon 10 nach 9. Wir beginnen ohne Frau Moser.
Oh, Entschuldigung, tut mir leid. Der Bus …
Wir warten schon 10 Minuten, Frau Moser. Jetzt können wir endlich beginnen.`,
      },
      {
        id: 'k5-1.85',
        title: '1.85',
        audioSrc: '/1.85.mp3',
        text: `Oh Mensch … Wo ist er denn? Das Essen ist schon lange fertig.
Ja, echt. Ich habe Hunger!
Ah, da kommt er! Hallo, da bist du ja endlich. Komm rein!
Hallo, Lena. Entschuldigung, ich bin eine halbe Stunde zu spät. Es tut mir so leid.
Na ja … Ich hoffe, das Essen ist jetzt nicht kalt …
Hallo Leo. Da bist du ja. Schön, jetzt können wir essen.`,
      },
    ],
  },
  {
    id: 'kapitel-6',
    title: 'Kapitel 6: Zeit mit Freunden',
    lessons: [
      {
        id: 'k6-1.86',
        title: '1.86',
        audioSrc: '/1.86.mp3',
        text: `Der Winter ist da, der Spaß im Schnee geht los. Die Skiwelt Hochberg startet am 25. November. Es gibt gratis Ski und Snowboards zum Testen. DJ Mudase ist auch dabei.`,
      },
      {
        id: 'k6-1.87',
        title: '1.87',
        audioSrc: '/1.87.mp3',
        text: `Wer ist dran?
Du!
Ich brauche eine Vier. Eins. Nur eine Eins. Keine Vier. Ich habe nie Glück!
Fünf! Eins, zwei, drei, vier, fünf! Und tschühüss.
Immer ich. Das ist so gemein! Kurz vor dem Ziel muss ich raus.`,
      },
      {
        id: 'k6-1.88',
        title: '1.88',
        audioSrc: '/1.88.mp3',
        text: `Pause machen, Freunde treffen, einen Kaffee trinken? Das Café Anna in der Keplerstraße ist der richtige Ort für Sie. Wir backen unsere Kuchen selbst. Im Café „Anna“ bekommen Sie feine Sachen in bester Qualität.`,
      },
      {
        id: 'k6-1.89',
        title: '1.89',
        audioSrc: '/1.89.mp3',
        text: `Was machst du heute Abend? Hast du schon was vor?
Nein, nichts Besonderes.
Ich möchte heute einen Film sehen. Hast du auch Lust? Kommst du zu mir?
Oh ja, das ist eine gute Idee. Wann?
In zwei Stunden, um sieben?
Ja, gut. Was möchtest du denn sehen? Und kann ich etwas mitbringen?`,
      },
      {
        id: 'k6-1.90',
        title: '1.90',
        audioSrc: '/1.90.mp3',
        text: `Marc, wann hast du denn Geburtstag?
Im Herbst – am 22.9. Und meine Freundin Susanne hat nur zwei Tage nach mir Geburtstag!
Genau, ich habe am 24.9. – und meine Schwester Laura hat da auch Geburtstag!
Echt? So ein Zufall!
Nein, wir sind Zwillinge. Und du, Sven?
Ich habe am 31.12. Geburtstag.
Oh! Da machst du bestimmt eine große Party!
Nein, eigentlich nicht. Aber meine Frau Lena feiert sehr gern, sie hat nämlich am 29.2. Geburtstag.
So ein Pech für Lena! Da hat sie nur alle vier Jahre Geburtstag.`,
      },
      {
        id: 'k6-1.91',
        title: '1.91',
        audioSrc: '/1.91.mp3',
        text: `Herr Rauter hat im April Geburtstag. Herr Reuter feiert im Juni seinen Geburtstag. Herr Reiter hat im März Geburtstag. Frau Beimer feiert ihren Geburtstag im Mai. Frau Beumer hat im August Geburtstag. Frau Baumer feiert ihren Geburtstag auch im August.`,
      },
      {
        id: 'k6-1.92',
        title: '1.92',
        audioSrc: '/1.92.mp3',
        text: `Meine Freundin Leela hat im Mai Geburtstag. Mein Freund Klaus hat auch im Mai Geburtstag. Klaus und Leela feiern zusammen am 9. Mai. Heute feiert mein Freund Paul Geburtstag. Wann hat deine Freundin Laura Geburtstag?`,
      },
      {
        id: 'k6-1.93',
        title: '1.93',
        audioSrc: '/1.93.mp3',
        text: `Guten Abend.
Hallo. Wir möchten bestellen.
Ja, gern. Was möchten Sie trinken?
Für mich bitte eine Apfelsaftschorle. Und für dich, Leela? Ich lade dich ein.
Oh, danke! Bitte eine Cola.
Und was möchten Sie essen?
Für mich bitte einen Salat mit Käse.
Gern. Und für Sie?
Für mich bitte eine Pizza mit Gemüse.
Also: ein Salat mit Käse und einmal Pizza mit Gemüse.
Können Sie auch Wasser für den Hund bringen?
Für wen?
Für den Hund, er hat auch Durst.
Ja, natürlich, ich bringe gleich Wasser für ihn.`,
      },
      {
        id: 'k6-1.94',
        title: '1.94',
        audioSrc: '/1.94.mp3',
        text: `Was möchten Sie trinken?
Für mich bitte eine Apfelsaftschorle. Und für dich, Leela? Ich lade dich ein.
Oh, danke! Bitte eine Cola.
Und was möchten Sie essen?
Für mich bitte einen Salat mit Käse.
Gern. Und für Sie?
Für mich bitte eine Pizza mit Gemüse. Können Sie auch Wasser für den Hund bringen?
Ja, natürlich, ich bringe gleich Wasser für ihn.`,
      },
      {
        id: 'k6-1.95',
        title: '1.95',
        audioSrc: '/1.95.mp3',
        text: `Entschuldigung, können wir bitte zahlen?
Einen Moment, bitte. So, zusammen oder getrennt?
Zusammen!
Das macht dann 25,30 €.
Stimmt so.
Danke!`,
      },
      {
        id: 'k6-1.96',
        title: '1.96',
        audioSrc: '/1.96.mp3',
        text: `Gut gesagt: Trinkgeld geben
Das macht 18 Euro 90.
Stimmt so.
Das macht 17 Euro 90.
19, bitte. / Machen Sie 19 Euro, bitte.
Danke.`,
      },
      {
        id: 'k6-1.97',
        title: '1.97',
        audioSrc: '/1.97.mp3',
        text: `Hallo Leela, hier ist Caro!
Hi Caro! Wie geht’s?
Super, und dir? Wie war das Essen mit Jan? Ist das Restaurant toll?
Also, der Abend war super. Das Essen war nicht so gut, aber es war billig!
Was? Ist das „Figaro“ nicht teuer?
Das „Figaro“ schon, aber wir waren nicht dort. Wir waren im Café „Europa“.
Warum das denn?
Jan hatte Tobi, seinen Hund, dabei und im „Figaro“ sind Hunde verboten!
Das ist ja schade! Und wie war es im Café?
Na ja, das Essen war okay, aber die Pizza war kalt. Und die Getränke waren warm. Aber der Kellner war nett.
Oh je. Hattet ihr denn Spaß?
Ja, zuerst hatten wir so Hunger. Und der Hund hatte Durst und war nervös. Aber dann war es schön. Jan ist sehr lustig und wir hatten viel Spaß.
Das klingt gut! Wann trefft ihr euch wieder?
Heute leider nicht. … Aber am Wochenende. Da gehen wir spazieren – mit Tobi in den Park. Da sind Hunde nicht verboten!`,
      },
      {
        id: 'k6-1.98',
        title: '1.98',
        audioSrc: '/1.98.mp3',
        text: `Und jetzt noch unsere Tipps für August und September in Deutschland, Österreich und der Schweiz.
Zuerst etwas für alle Sportfans: Erfurt bietet wieder einen Marathon, in der Stadt und auch viel in der Natur. Termin ist der 18.8. Sie können sich jetzt anmelden. Das Startgeld für den Halbmarathon ist 33 Euro und für den Marathon 39 Euro.
Sie möchten nicht Sport machen, aber sehen? Dann gehen Sie doch zum Champions-League-Spiel Bayern München gegen den FC Basel. Sie spielen am 19. September in der Allianz Arena in München. Das Spiel beginnt um 20 Uhr 45. Karten gibt es noch für 80 Euro.
Wenn Sie im August in Zürich sind, dann können Sie jeden Abend um 21 Uhr einen Film im Open-Air-Kino am Zürichsee sehen. Es gibt dieses Jahr auch zwei Termine für ein Double Feature, und zwar am 15.8. und am 22.8. Die Tickets kosten 12 Franken, die Double Features 15 Franken.
Und hier noch ein Kulturtipp für Sie: Sie möchten nachts ins Museum? Dann gehen Sie am 28.8. zur langen Museumsnacht in Berlin. Alle Museen sind von 19 Uhr bis 3 Uhr in der Früh geöffnet. Ein Ticket kostet 13 Euro.
Zum Schluss noch etwas für Musikfans. Mark Foster kommt nach Wien. Das Konzert ist am 16.9. um 20 Uhr. Es gibt noch Tickets ab 49 Euro.
Weitere Infos natürlich im Internet unter www.hitradio.de.`,
      },
    ],
  },
  {
    id: 'kapitel-7',
    title: 'Kapitel 7: Arbeitsalltag',
    level: 'A1.2',
    lessons: [
      {
        id: 'k7-2.1',
        title: '2.1',
        audioSrc: '/2.1.mp3',
        text: `Gespräch 1
Guten Morgen.
Morgen! Einen Kaffee zum Mitnehmen, bitte.
Groß oder klein?
Groß.
Alles klar. Das macht dann 3,60 €.
Hier bitte. Haben Sie keinen Zucker?
Doch. Hier steht er.
Ah, danke.`,
      },
      {
        id: 'k7-2.2',
        title: '2.2',
        audioSrc: '/2.2.mp3',
        text: `Gespräch 2
Morgen, Adnan.
Hallo Laura. Wie geht‘s?
Danke, gut. Und dir?
Auch alles gut. Sehen wir uns später?
Klar, wir haben einen Termin bei der Firma Pohl.
Ja, stimmt. Um drei. Dann bis später!
Bis dann, ich hole dich ab.
Super!`,
      },
      {
        id: 'k7-2.3',
        title: '2.3',
        audioSrc: '/2.3.mp3',
        text: `Gespräch 3
Hallo!
Guten Morgen. Sind Sie Herr Demir?
Ja, genau. Adnan Demir.
Ich habe ein Paket für Sie. Können Sie bitte hier unterschreiben?
Natürlich, gern.
Und hier Ihr Paket.
Danke schön. Und einen schönen Tag noch!
Tschüs.`,
      },
      {
        id: 'k7-2.4',
        title: '2.4',
        audioSrc: '/2.4.mp3',
        text: `Gespräch 4
Entschuldigung!
Ja, bitte?
Können Sie mir vielleicht helfen? Ich brauche ein Ticket zum Hauptbahnhof.
Zum Hauptbahnhof. Sie brauchen ein Ticket für eine Zone. Das kostet 1,80 €.
Alles klar. Danke sehr!
Bitte sehr!`,
      },
      {
        id: 'k7-2.5',
        title: '2.5',
        audioSrc: '/2.5.mp3',
        text: `Hi Rita!
Morgen, Adnan. Hallo Elias, komm rein.
Du, Rita, ich hole Elias heute etwas später.
Kein Problem. Wir haben ja bis sechs geöffnet.
Super. Ich denke, ich bin so um fünf Uhr da.
Alles klar, dann bis später!
Tschüs, Rita! Viel Spaß, Elias!`,
      },
      {
        id: 'k7-2.6',
        title: '2.6',
        audioSrc: '/2.6.mp3',
        text: `Laura, möchtest du auch einen Kaffee trinken?
Gern, dann kann ich auch gleich etwas fragen.
Was hast du denn für Fragen?
Also, ich möchte nächste Woche am Mittwoch frei haben. Was muss ich da machen?
Du musst mit der Chefin sprechen. Warum möchtest du denn Urlaub nehmen?
Ach, ich fahre mit einer Freundin und einem Freund zu einem Konzert nach Stuttgart. Wir fahren mit dem Auto und wollen dort übernachten.
Ah, schön.
Kann ich am Dienstag auch schon um 15 Uhr gehen?
Hm, das ist nicht so gut. Die Arbeitszeit ist eigentlich bis 16 Uhr. Aber sprich mit deinen Kollegen und mit der Chefin. Vielleicht ist es okay für sie.
Hoffentlich. Und unsere Besprechung heute Nachmittag: Fahren wir mit U-Bahn oder mit dem Bus?
Hm, gute Frage. Die Firma von dem Kunden ist nicht im Zentrum. Vielleicht fahren wir mit der U-Bahn und dann mit dem Taxi.
Und mit wem sprechen wir da?
Mit dem Chef, Herrn Palko, und mit einer Assistentin. Herr Palko ist sehr nett.
Ich bin schon neugierig. Und dann noch eine Frage. Morgen habe ich Geburtstag.
Echt? Wie schön!
Ja, und ich möchte gern mit allen Mitarbeitern feiern. Ich bringe einen Schokoladenkuchen mit.
Super, dann können wir am Vormittag zusammen feiern.`,
      },
      {
        id: 'k7-2.7',
        title: '2.7',
        audioSrc: '/2.7.mp3',
        text: `Schorle
Tisch
Bus
essen`,
      },
      {
        id: 'k7-2.8',
        title: '2.8',
        audioSrc: '/2.8.mp3',
        text: `Fest
stehen
Dienstag
Start
meistens
Stress
Obst
vorstellen
Frühstück
stimmen
lustig
Durst`,
      },
      {
        id: 'k7-2.9',
        title: '2.9',
        audioSrc: '/2.9.mp3',
        text: `Hey, guten Morgen!
Guten Morgen, Tom! Fährst du immer mit diesem Bus?
Ja, aber du fährst doch eigentlich mit dem Fahrrad ins Büro, oder?
Ja, das stimmt, aber heute ist das Wetter nicht so gut.
Schön, dann können wir ja ein bisschen reden auf dem Weg in die Firma. Wo ist jetzt eigentlich dein neues Büro?
Ich bin jetzt im 3. Stock, im Raum 318.
Ah ja. Zusammen mit Marie?
Ja, genau. Und wie läuft es bei dir?
Ganz gut. Ich hatte viel Stress in den letzten Tagen, aber heute ist ein ruhiger Tag ohne Stress, glaube ich.
Echt? Da hast du ja Glück.
Ja, ich habe heute Vormittag nur einen Termin bei der Bank. Wir müssen über neue Projekte sprechen. Und dann can ich in Ruhe am Computer arbeiten: Mails schreiben und so weiter.
Na, das klingt ja gut.
Ja, der Termin dauert auch nur ungefähr eine Stunde. Das ist echt gut. Und du?
Ach, heute ist auch ein ganz normaler Arbeitstag. Zuerst muss ich zur Post gehen, dann habe ich einen Kundentermin und dann muss ich zusammen mit Kollegen eine Präsentation planen.
Ah, für das große Meeting nächste Woche?
Genau. Um 15 Uhr habe ich einen sehr wichtigen Termin mit dem Chef.
Mit Herrn Schmidt?
Ja. Und du kennst ihn ja …
Und dann muss ich noch einen Bericht schreiben.
Das klingt aber nach Stress. Da kannst du heute wahrscheinlich nicht um 17 Uhr nach Hause gehen.
Ja, es wird wohl spät. Ah, wir sind ja schon da. Gehen wir noch zusammen bis zur Firma?
Ja, klar.`,
      },
      {
        id: 'k7-2.10',
        title: '2.10',
        audioSrc: '/2.10.mp3',
        text: `Gut gesagt: Probleme mit Medien
Ich habe kein Netz.
Das WLAN ist so langsam.
Ich bin seit Tagen offline.
Mist, mein Akku ist leer.`,
      },
      {
        id: 'k7-2.11',
        title: '2.11',
        audioSrc: '/2.11.mp3',
        text: `1.
Ist das wieder heiß heute, oder?
Ja, das stimmt. Zum Arbeiten etwas zu heiß. Da möchte man lieber an den See oder ins Schwimmbad gehen.
Oh ja, ein toller Sommer dieses Jahr. Also, einen schönen Tag noch!
Danke, Ihnen auch!
2.
Alles klar?
Ja, ja, alles gut. Sag mal, hast du gestern auch das Fußballspiel gesehen?
Ja, das war echt spannend, oder?
Zum Glück haben wir gewonnen. Das 3:2 war ja wichtig. Nächste Woche spielen wir dann gegen Stuttgart.
Am Samstag, oder? Du, ich muss los. Bis später.
Ja, bis dann.
3.
Guten Morgen!
Guten Morgen! Na, wie war das Wochenende?
Sehr schön. Wir hatten Familienbesuch und das ist ja immer schön, aber auch ein bisschen anstrengend. Und bei Ihnen?
Auch gut, danke. Wir waren in Berlin und haben Freunde besucht.
Ah, das klingt auch gut.
Ja, es war wirklich nett. Also, bis später.
Tschüs.`,
      },
    ],
  },
  {
    id: 'kapitel-8',
    title: 'Kapitel 8: Gesundheit',
    level: 'A1.2',
    lessons: [
      {
        id: 'k8-2.12',
        title: '2.12',
        audioSrc: '/2.12.mp3',
        text: `Nachricht 1
Hi, Thomas hier. Du, ich finde dein Experiment okay – also, gesund … Aber ist es nicht langweilig? Du gehst jeden Abend früh ins Bett … Wir vermissen dich schon! Gesund leben ist ja okay, aber die Freunde vergessen? Das finde ich nicht okay. Also komm! Am Freitag gehen wir wieder ins „Nightlife“ – Wir warten auf dich!!!`,
      },
      {
        id: 'k8-2.13',
        title: '2.13',
        audioSrc: '/2.13.mp3',
        text: `Nachricht 2
Hallo Annika, ich bin’s, Claire. Na, wie geht’s dir? Ich finde dein Experiment echt gut! Du machst das super. Ich will auch mehr Sport machen, das ist so wichtig, aber alleine ist es langweilig … hm … Ich will heute schwimmen gehen. Hast du Lust? Bitte komm mit! Um halb sieben, okay? Tschüs.`,
      },
      {
        id: 'k8-2.14',
        title: '2.14',
        audioSrc: '/2.14.mp3',
        text: `Nachricht 3
Ja hallo, ich bin‘s, Mama. Wie geht es dir? Du isst ja jetzt so wenig und machst so viel Sport! Ich weiß nicht … Ist das wirklich gut für dich? Das ist gefährlich … Geht es dir gut? Hast du am Wochenende Zeit? Komm doch zu uns. Ich koche dir etwas. Dein Lieblingsessen! Melde dich.`,
      },
      {
        id: 'k8-2.15',
        title: '2.15',
        audioSrc: '/2.15.mp3',
        text: `Also, Svenja, wir machen jetzt einen Fitness-Test.
Okay. Hoffentlich bin ich fit genug.
Ich muss erst das Gerät einstellen. Wie alt bist du?
Ich bin jetzt 27.
Alles klar. Und wie groß bist du?
1,75 m.
Und dann brauche ich bitte noch dein Gewicht. Wie viel wiegst du?
Oh, das möchte ich eigentlich nicht sagen.
Entschuldige, aber das brauche ich für den Test.
Also gut, ungefähr 73 kg.
Gut, dann machen wir jetzt zuerst den Fitness-Test.`,
      },
      {
        id: 'k8-2.16',
        title: '2.16',
        audioSrc: '/2.16.mp3',
        text: `Kommen Sie zum neuen Fitness-Studio Bause in der Hauptstraße 27 in Buchheim. Trainieren Sie bei uns – mit Erfolg! 
Wir haben ein neues Sommerprogramm für Sie – im Sportclub Tegel am Marktplatz in Dorfen. Kommen Sie zum Sportclub Tegel! 
Nach dem Winter wieder fit werden – das geht ganz einfach im Fitness-Studio Karo. Sie finden uns in Kösnitz im Sportzentrum.`,
      },
      {
        id: 'k8-2.17',
        title: '2.17',
        audioSrc: '/2.17.mp3',
        text: `p: die Pause, die Suppe, der Körper
b: der Bauch, das Bein, das Buch
t: der Tag, die Fitness, das Bett
d: duschen, die Schokolade, du
k: die Kinder, die Kekse, lecker
g: gut, joggen, gesund`,
      },
      {
        id: 'k8-2.18',
        title: '2.18',
        audioSrc: '/2.18.mp3',
        text: `Frau Pohn, bitte.
Guten Tag, Klimke.
Guten Tag, Frau Doktor Klimke. Pohn.
Was ist los, Frau Pohn?
Ich hatte einen Unfall mit dem Fahrrad. Mein Knie tut weh.
Legen Sie sich da hin, bitte. Tut das weh?
Ja, ein bisschen. Aua!
Ich muss die Wunde sauber machen. Dann mache ich einen Verband.
Wann muss ich den Verband wechseln?
Immer morgens und abends. Bewegen Sie das Bein nur wenig. Ich gebe Ihnen auch ein Rezept für eine Salbe.
Dann gehe ich gleich zur Apotheke und hole die Salbe. Muss ich noch einmal zur Kontrolle kommen?
Nein, aber bei Problemen kommen Sie bitte gleich. Auf Wiedersehen und gute Besserung.
Vielen Dank. Auf Wiedersehen.`,
      },
      {
        id: 'k8-2.19',
        title: '2.19',
        audioSrc: '/2.19.mp3',
        text: `Gut gesagt: Das tut weh!
Au! Aua! Autsch! Ahh!`,
      },
      {
        id: 'k8-2.20',
        title: '2.20',
        audioSrc: '/2.20.mp3',
        text: `Herr Doktor, ich habe Bauchschmerzen! Und mir ist so schlecht.
Wo genau tut es denn weh?
Ja, hier. Da auch, überall.
Wie lange haben Sie die Schmerzen schon?
Seit gestern!
Was haben Sie denn gestern Abend gegessen?
Abendbrot, ganz normal, wie immer.
Essen Sie heute nichts. Aber Sie dürfen viel trinken. Tee, Kamillentee ist gut. Sie müssen drei Tage zu Hause bleiben.
Aber, ich muss arbeiten!
Nein. Sie dürfen nicht arbeiten. Bleiben Sie zu Hause.
Aber es ist so wichtig.`,
      },
      {
        id: 'k8-2.21',
        title: '2.21',
        audioSrc: '/2.21.mp3',
        text: `Wie lange sind Sie schon krank?
Schon drei Tage.
Setzen Sie sich. Ich muss Sie untersuchen. Sagen Sie “Aah”.
“Ooooh”. 
Haben Sie auch Fieber?
Ja. Heute Morgen hatte ich 38,6.
Und husten? Müssen Sie oft husten?
Ja.
Das ist eine Erkältung, alle sind im Moment erkältet. Ich gebe Ihnen ein Rezept für Hustensaft. Den müssen Sie abends nehmen.
Darf ich baden?
Nein. Mit Fieber dürfen Sie nicht baden oder Ihre Haare waschen. Kurz duschen, das geht. Und rauchen Sie nicht!
Und wie lange darf …?`,
      },
      {
        id: 'k8-2.22',
        title: '2.22',
        audioSrc: '/2.22.mp3',
        text: `Was ist das Problem, Herr Köck?
Mein Arm tut weh, ich kann ihn nicht richtig bewegen.
Legen Sie sich mal hin, bitte. Ich nehme mal Ihren Arm. Tut das weh?
Ja, ein bisschen.
Und diese Bewegung? Geht das?
Aua! Das tut so weh.
Ich muss Sie ins Krankenhaus schicken. Sie bekommen eine Überweisung. Ich gebe Ihnen auch noch ein Rezept. Nehmen Sie zwei Mal pro Tag eine Tablette gegen die Schmerzen.
Okay, dann gehe ich gleich ins Krankenhaus.`,
      },
    ],
  },
  {
    id: 'kapitel-9',
    title: 'Kapitel 9: Meine Wohnung!',
    level: 'A1.2',
    lessons: [
      {
        id: 'k9-2.23',
        title: '2.23',
        audioSrc: '/2.23.mp3',
        text: `1. Tja, ich bin Journalistin. Wenn ich zu Hause bin, bin ich da eigentlich die meiste Zeit im…. Ich arbeite da am Computer, schreibe E-Mails, recherchiere Informationen im Internet und schreibe die Texte für die Zeitung. 
2. Also, die ganze Familie sitzt da jeden Abend zusammen. Wir kochen, essen etwas Gutes, sitzen alle an einem großen Tisch und erzählen. Die …. ist eigentlich das Zentrum unserer Wohnung. 
3. Nach einem langen Tag an der Uni entspanne ich total gern in meinem …. Es ist sehr klein, aber schön. Ich habe ein sehr bequemes Sofa, da kann man gut lesen oder Filme sehen. 
4. Im Sommer bin ich besonders oft und gern auf dem ….. Also, natürlich nur, wenn das Wetter schön ist. Man kann in der Sonne sitzen, lesen, Kaffee trinken. Und am Wochenende grillen wir oft.`,
      },
      {
        id: 'k9-2.24',
        title: '2.24',
        audioSrc: '/2.24.mp3',
        text: `Schau mal hier, das klingt gut. Elegante Wohnung im Zentrum mit Balkon, 6. Stock mit Aufzug. Das ist doch super, oder?
Ja, aber lies mal weiter: 950 Euro Miete!
Oh, stimmt, die ist zu teuer. Hmh, und die hier ...`,
      },
      {
        id: 'k9-2.25',
        title: '2.25',
        audioSrc: '/2.25.mp3',
        text: `So, wie machen wir das jetzt? Hmh, ich denke, den Computer, den stellen wir in die Küche. Da ist es schön hell, da kann ich gut arbeiten.
In die Küche? Mensch, Carla, jetzt haben wir endlich ein Arbeitszimmer. Und der Computer kommt natürlich ins Arbeitszimmer.
Findest du? Na gut. Aber den Fernseher stellen wir ins Schlafzimmer. Da kann ich im Bett fernsehen. Das ist doch sehr gemütlich!
Was? Also wirklich nicht. Der Fernseher muss natürlich ins Wohnzimmer! Wir haben doch ein neues Sofa, da kann man super fernsehen!
Aber dann stellen wir die Lampe ins Wohnzimmer. Neben das Sofa.
Die Lampe? Nein, die brauche ich im Schlafzimmer. Ich will am Abend noch lesen. Aber dieses Regal hier stellen wir in den Flur. Da ist viel Platz.
Das Regal? Auf keinen Fall! Das Regal stellen wir ins Arbeitszimmer. Das ist viel zu groß für den Flur. Aber den Kühlschrank können wir in den Flur stellen. Dann haben wir in der Küche mehr Platz.
Den Kühlschrank in den Flur? Warum das denn? Den Kühlschrank stellen wir natürlich in die Küche! Kühlschränke stehen immer in der Küche.
Mensch, Alex, du bist immer so langweilig.
Also, Carla, wirklich!`,
      },
      {
        id: 'k9-2.26',
        title: '2.26',
        audioSrc: '/2.26.mp3',
        text: `Carla Schneider.
Hallo Carla, hier ist Vanessa.
Ach, hallo Vanessa, wie geht’s dir?
Ja, gut. Du, vielen Dank für die Einladung zu eurer Party.
Gerne. Ich hoffe, du kommst?
Ja, natürlich. Aber an welchem Samstag ist die Feier denn? In der Einladung steht gar kein Datum.
Oh nein, wirklich? Also, am 3. Juni.
Und um wie viel Uhr?
Oh Mann! Steht das auch nicht in der Nachricht? Also, um 19 Uhr.
Super. Dann sehen wir uns am Samstag. Du, sag mal, …`,
      },
      {
        id: 'k9-2.27',
        title: '2.27',
        audioSrc: '/2.27.mp3',
        text: `Hallo Philipp, hallo Vanessa, schön, dass ihr da seid!
Hallo Carla, danke für die Einladung. Hier, das ist ein Geschenk für euch.
Danke, das ist aber nett! Kommt rein!
Super, hier ist ja schon richtig was los.
Soll ich euch mal die Wohnung zeigen?
Oh ja, gern. Komm Philipp, Carla zeigt uns die Wohnung.
Echt? Ah, gut ...
Das Wohnzimmer ist ja super und die Küche auch. Toll, das ist alles so hell. Die Wohnung ist wirklich schön!
Ja, uns gefällt es hier auch gut. Na ja, die Lampe hier in der Küche finde ich nicht so schön. Da suchen wir noch was anderes.
Also, ich finde die Lampe lustig.
Ach, die Lampe ist doch toll, sie ist nicht langweilig.
Stimmt, sie ist nicht langweilig, aber hässlich. Na ja, wir suchen noch eine. Viele Lampen sind zu teuer. Und hier ist unser Schlafzimmer. Es ist sehr groß und hell.
Das stimmt. Und das Bild über dem Fernseher sieht schön aus.
Findest du? Das Bild ist von Alex. Ich mag es nicht besonders, aber Alex findet es toll. So, und hier geht es dann auf die Terrasse. Die ist klein, aber fein.
Ui, das ist ja schön. Habt ihr hier auch Sonne?
Ach, nett. – Schön, die Terrasse.
Ja, das ist Südwesten. Da haben wir ab zwei Uhr Sonne – bis abends. Die Terrasse ist wirklich super. Wir brauchen noch neue Möbel für die Terrasse. Der Tisch hier ist nicht mehr schön. Der ist schon so alt und auch kaputt. Aber die Sachen kaufen wir erst später.
Ja, klar. Ach, die Terrasse ist ganz toll. Findest du nicht, Philipp?
Doch, doch, die Terrasse ist echt schön.
Ja, dann gehen wir mal wieder rein …
So, das war noch das Badezimmer. Jetzt kennt ihr die Wohnung.
Super, sehr schön! Ich finde die Wohnung echt gemütlich.
Ja, schön ist es hier.
Danke! So, hier ist das Büfett. Bitte, nehmt euch was zu essen und zu trinken.
Vielen Dank. Das sieht ja lecker aus.`,
      },
      {
        id: 'k9-2.28',
        title: '2.28',
        audioSrc: '/2.28.mp3',
        text: `Gut gesagt: Begeisterung ausdrücken
Das ist ganz toll.
Ich finde das echt super.
Das finde ich wirklich schön.
Das sieht total gut aus.`,
      },
      {
        id: 'k9-2.29',
        title: '2.29',
        audioSrc: '/2.29.mp3',
        text: `1. gemütlich 
2. mehr 
3. hell 
4. sehr 
5. Teppich 
6. Regal 
7. Idee 
8. neben 
9. steht 
10. reden 
11. Zentrum 
12. Bett`,
      },
      {
        id: 'k9-2.30',
        title: '2.30',
        audioSrc: '/2.30.mp3',
        text: `Der Student wohnt in einem Apartment im Zentrum.
Der Herd steht neben dem Regal.
Der Sessel ist gemütlich. Er steht vor dem Fenster.`,
      },
      {
        id: 'k9-2.31',
        title: '2.31',
        audioSrc: '/2.31.mp3',
        text: `1. Im Hochhaus zu Hause
Ich wollte nie in einem Hochhaus wohnen, aber jetzt finde ich es echt toll. Man kann über die ganze Stadt sehen. Die Zimmer sind hell. Das ist super! Was nicht so gut ist? Hier wohnen so viele Menschen. Meine Nachbarn kenne ich leider nicht, das finde ich nicht so schön.`,
      },
      {
        id: 'k9-2.32',
        title: '2.32',
        audioSrc: '/2.32.mp3',
        text: `2. Cool – wohnen im Loft
Ich liebe meine Wohnung – ich wohne in einem Loft. Der Raum ist wirklich groß und die Fenster auch. Ich finde das wirklich cool! Ich habe so viel Platz hier und alles ist hell. Eigentlich ist alles super ... Na ja, okay, im Winter ist die Wohnung oft kalt. Das ist eben so.`,
      },
      {
        id: 'k9-2.33',
        title: '2.33',
        audioSrc: '/2.33.mp3',
        text: `3 Hallo Herr Nachbar!
Wir haben jetzt endlich unser Haus! Gut, es ist ein Reihenhaus, aber es ist ein Haus mit Garten. Der Garten ist klein, aber die Kinder können dort spielen und wir können grillen – das ist super. Was ist nicht so gut? Na ja, die Häuser sehen alle gleich aus, das ist ein bisschen langweilig. Und noch etwas ist nicht gut: Im Garten ist man nie wirklich allein. Manchmal mag ich das nicht.`,
      },
      {
        id: 'k9-2.34',
        title: '2.34',
        audioSrc: '/2.34.mp3',
        text: `4 Altbauwohnung in der Stadt
Wir – also mein Mann, meine beiden Kinder und ich – wohnen hier schon seit acht Jahren. Die Wohnung finden wir echt schön, die Zimmer sind groß und die Decken hoch. Die Nachbarn sind sehr nett – man kennt sich. Aber etwas ist nicht so toll: Man hört die Nachbarn und sie hören uns, besonders die Kinder. Und es gibt keinen Aufzug, nur eine Treppe.`,
      },
      {
        id: 'k9-2.35',
        title: '2.35',
        audioSrc: '/2.35.mp3',
        text: `5 Fachwerkhaus – alles klein
Meine Frau und ich wohnen in einem Fachwerkhaus im Zentrum von Lüneburg. Das Haus ist nicht groß, aber es hat Geschichte: Es ist schon über 200 Jahre alt. Das finde ich total interessant. Das Haus ist auch sehr schön und gemütlich. Aber die Zimmer sind klein und leider etwas dunkel. Und man muss an einem so alten Haus immer was machen. Nächstes Jahr möchte ich das Badezimmer neu machen. Da ist alles alt und hässlich.`,
      },
      {
        id: 'k9-2.36',
        title: '2.36',
        audioSrc: '/2.36.mp3',
        text: `Stell den Computer ins Schlafzimmer, bitte.
Bringt den Herd in die Küche, bitte.
Bring die Lampe bitte ins Arbeitszimmer.
Bitte stellt das Regal in den Flur.
Stellt den Sessel ins Wohnzimmer.
Bitte bring den Teppich ins Schlafzimmer.`,
      },
      {
        id: 'k9-2.37',
        title: '2.37',
        audioSrc: '/2.37.mp3',
        text: `Lied “Like, like” von Einshoch 6.`,
      },
    ],
  },
  {
    id: 'kapitel-10',
    title: 'Kapitel 10: Studium und Beruf',
    level: 'A1.2',
    lessons: [
      {
        id: 'k10-2.38',
        title: '2.38',
        audioSrc: '/2.38.mp3',
        text: `Hallo, ist hier ist Martina Horvath von Radio “Vier”. Heute reden wir über Beruf und Arbeit. Sind Sie zufrieden? Macht Ihr Beruf Spaß? Rufen Sie an: 0800 – 26 24 22. Oh, da ist schon ein Anruf. Hallo, wer spricht da?
Mein Name ist Julia Wimmer. Ich segle sehr gern, Segeln ist auch mein Beruf. Ich bin Segellehrerin. Da bin ich fast jeden Tag im Freien, bei jedem Wetter.
Wirklich?
Na ja, fast. Aber ich bin sehr gern draußen. Segeln ist cool und ich kann damit mein Geld verdienen.
Was gefällt Ihnen denn nicht so gut, Frau Wimmer?
Im Winter kann ich nur Kurse für die Segelschüler geben, aber ich can nicht mit ihnen segeln. Dann habe ich auch einen Job als Kellnerin. Das ist auch okay, aber macht nicht so viel Spaß.
Vielen Dank und ciao! Und wir haben schon den nächsten Anruf. Wer ist dran, bitte?
Hier ist Miriam Sommer. Ich habe noch keinen Beruf, aber ich arbeite auch viel. Ich studiere. Viele Leute denken, Studenten arbeiten nicht und machen nur Party. Aber das stimmt không. Ich lerne gerade für eine Prüfung. Ich kann lernen, wo ich will, das ist super. Ich lerne gern draußen im Freien.
Und was finden Sie nicht so gut?
Na ja, ich verdiene noch kein Geld.
Und was machen Sie nach dem Studium, Frau Sommer?
Ich studiere Informatik und möchte dann als Informatikerin arbeiten.
Vielen Dank. Unser Thema heute: “Macht Ihr Beruf Spaß?” Rufen Sie an: 0800 – 26 24 22. Ah, es klingelt. Wer spricht, bitte?
Beatrix Hattich.
Hallo, Frau Hattich. Was machen Sie beruflich?
Ich bin Architektin. Mein Beruf macht mir viel Spaß. Wir sind ein super Team, die Kollegen sind sehr nett. Aber oft haben wir aber auch Stress. Dann male ich, das ist mein Hobby. Manchmal verkaufe ich auch ein Bild, aber ich bin keine Künstlerin. Malen ist không mein Beruf.
Danke, Frau Hattich. Und noch ein Anruf. Wer spricht, bitte?
Stefan Schmidinger.
Wie geht es Ihnen im Beruf, Herr Schmidinger?
Mein Hobby ist Reisen und es ist auch mein Beruf. Ich bin Reiseführer.
Wo sind Sie denn gerade?
Im Moment in Heidelberg. Der Beruf ist schön, aber ich bin nicht oft zu Hause und habe wenig Zeit für meine Freunde.
Was macht Ihnen denn besonders Spaß?
Ich reise gern. Ich sehe so viele Städte und auch andere Länder. Das mag ich. Und ich habe auch oft nette Leute in der Reisegruppe.
Danke, Herr Schmidinger. Da ist noch ein Anruf. Hallo, wer ist dran?
Hier ist Sven Kolb, hallo. Also, ähm, ich bin Erzieher, ich arbeite in einem Kindergarten. Die Kinder in unserer Gruppe sind drei bis sechs Jahre alt. Ich mag Kinder, ich arbeite gern mit Kindern. Aber leider verdiene ich nicht so gut. Das ist echt schade. Dabei ist mein Beruf so wichtig.
Danke, Herr Kolb. Und jetzt wieder Musik von den …`,
      },
      {
        id: 'k10-2.39',
        title: '2.39',
        audioSrc: '/2.39.mp3',
        text: `Hallo Daniel, du bist ja immer noch in der Uni?!
Ja, das war heute ein langer Tag. Für dich wohl auch.
Ja, ich muss grade so viel machen. Ich habe zuerst für ein Seminar recherchiert und dann habe ich bis jetzt Statistik gelernt. Du auch?
Nein, Statistik ist vorbei, ich habe die Prüfung vor ein paar Tagen gemacht.
Und, war sie schwer?
Es geht. So schwer war sie nicht. Heute habe ich den ganzen Tag eine Präsentation gemacht.
Und was machst du jetzt? Willst du heute noch trainieren?
Nein, heute habe ich nur ein bisschen Fußball gespielt, gestern habe ich im Studio trainiert. Hast du heute auch gearbeitet?
Ja, heute früh, 3 Stunden in der Bäckerei.
Oh, du arbeitest in einer Bäckerei? Macht das Spaß?
Es geht. Ich fange am Morgen schon um 6:00 Uhr an. Aber ich muss Geld verdienen. Einen Moment bitte. Hallo? Morgen? Ja, das geht. Bis morgen um sechs. Ciao.
Das war die Chefin. Morgen früh muss ich auch arbeiten. Arbeitest du auch neben dem Studium?
Nur in den Ferien. Ich habe vor dem Studium vier Jahre lang gearbeitet. Ich habe also noch ein bisschen Geld.
Ach so!`,
      },
      {
        id: 'k10-2.40',
        title: '2.40',
        audioSrc: '/2.40.mp3',
        text: `Ich habe vor dem Studium vier Jahre lang gearbeitet. Ich habe also noch ein bisschen Geld.
Ach so! Wo hast du denn gearbeitet?
Nach der Schule habe ich Arbeit bei einer Bank gefunden.
Wirklich? Und wie war die Arbeit?
Ganz gut, vor allem das Geld war gut. Aber es hat auch Probleme gegeben. Es war nicht einfach. Ich habe auch zu viel gearbeitet und ich habe meine Freunde kaum gesehen. Ich hatte nie Zeit und viel Stress.
Oh je.
Ich habe dann vier Wochen Urlaub genommen, das war gut. Und im Urlaub habe ich meine Freundin Maya getroffen. Es war klar, ich muss etwas anderes machen. Und jetzt studiere ich.
Und, ist das besser?
Ja klar, jetzt schon. Aber dann nach dem Studium? Da weiß ich noch nicht, was …`,
      },
      {
        id: 'k10-2.41',
        title: '2.41',
        audioSrc: '/2.41.mp3',
        text: `1. heiß 
2. er 
3. aus 
4. Hund`,
      },
      {
        id: 'k10-2.42',
        title: '2.42',
        audioSrc: '/2.42.mp3',
        text: `Hallo Hanna, hast du heute Abend Zeit?
Hans hat heute zu Hause gearbeitet.
Herr Huber arbeitet im Hotel „Hilber“ in Hamburg.`,
      },
      {
        id: 'k10-2.43',
        title: '2.43',
        audioSrc: '/2.43.mp3',
        text: `Firma Hölke, guten Tag. Sie sprechen mit Tom Müller.
Guten Tag, hier ist Claudia Lange. Ich habe Ihre Anzeige gesehen. Sie suchen eine Sekretärin. Ich habe eine Frage zu der Anzeige.
Tut mir leid. Da kann ich Ihnen nicht helfen. Sie müssen mit Frau Selmicz sprechen.
Entschuldigung, das habe ich nicht verstanden. Können Sie den Namen bitte wiederholen?
Selmicz. S E L M I C Z.
Danke. Können Sie mich mit Frau Selmicz verbinden?
Frau Selmicz ist heute leider nicht da. Können Sie morgen noch einmal anrufen?
Ja, natürlich. Können Sie mir die Durchwahl von Frau Selmicz geben?
Ja, das ist die 4319.
Vielen Dank.
Bitte. Auf Wiederhören.
Auf Wiederhören.`,
      },
      {
        id: 'k10-2.44',
        title: '2.44',
        audioSrc: '/2.44.mp3',
        text: `Gut gesagt: Am Telefon
Hallo?
Tschüs!
Müller.
Auf Wiederhören.`,
      },
      {
        id: 'k10-2.45',
        title: '2.45',
        audioSrc: '/2.45.mp3',
        text: `1
Bitte alle Statisten auf die Bühne. Die Proben beginnen in 10 Minuten. Achtung, bitte. Alle …
Ich arbeite jeden Sommer als Statist bei den Bregenzer Festspielen. Also, ich bin kein Schauspieler, ich muss keinen Text lernen und nichts sagen. Aber ich bin jeden Abend auf der Bühne, ich mag Opern sehr. Das ist wirklich toll und interessant, aber man verdient nicht viel Geld. Es ist mehr ein Hobby.
2
Guten Tag. Ich hätte gern einen Stollen und fűnf Lebkuchen.
Gerne, die Dame. Das macht dann 18,50 €. Brauchen Sie eine Tüte?
Ich arbeite hier in Dresden auf dem Striezelmarkt, so heißt bei uns der Weihnachtsmarkt. Meine Frau und ich, wir haben hier einen Stand und wir verkaufen den berühmten Dresdner Stollen. Stollen wollen die Leute immer kaufen und das ist natürlich gut für uns. Und die vier Wochen Arbeit auf dem Striezelmarkt machen jedes Jahr wieder Spaß.
3
So, Vorsicht bitte! Vorsicht, heiß! Entschuldigung, Achtung bitte. So! Also, zwei halbe Hendel – für wen sind die? Ich arbeite jedes Jahr als Kellnerin auf der Wiesn – also auf dem Oktoberfest. Man braucht viel Kraft: Wir tragen 20 Kilo, denn die Gläser sind schwer. Nach der Arbeit bin ich wirklich sehr müde und alles tut weh. Aber ich verdiene in den zweieinhalb Wochen viel. Und es ist auch lung. Die Leute sind alle gut gelaunt und feiern.`,
      },
    ],
  },
  {
    id: 'kapitel-11',
    title: 'Kapitel 11: Die Jacke gefällt mir!',
    level: 'A1.2',
    lessons: [
      {
        id: 'k11-2.46',
        title: '2.46',
        audioSrc: '/2.46.mp3',
        text: `Gespräch 1
Hallo Hanna, hallo Felix. Alles klar?
Hallo Lena! Ja, alles klar. Die Party ist toll!
Ja, danke für die Einladung!
Wow, Hanna, das Kleid ist echt schön!
Danke – es ist ganz neu!`,
      },
      {
        id: 'k11-2.47',
        title: '2.47',
        audioSrc: '/2.47.mp3',
        text: `Gespräch 2
Hallo Hanna, hallo Felix. Alles klar?
Hallo Lena! Ja, alles klar. Die Party ist toll!
Ja, danke für die Einladung!
Oh, dein T-Shirt, neu? Das sieht schon etwas alt aus, oder?
Ja, stimmt! Ich war extra noch einkaufen, ein neues T-Shirt! Es ist da hinten in der Tüte …
Aber: Das T-Shirt muss warten … Felix und ich wollen tanzen.
Ach so … Na dann, viel Spaß!`,
      },
      {
        id: 'k11-2.48',
        title: '2.48',
        audioSrc: '/2.48.mp3',
        text: `Mensch, ich brauche echt was Neues zum Anziehen.
Schau doch mal im Internet unter www.topanziehen.de, da gibt’s super Sachen.
Gut, dann mach ich das gleich mal. www.topanziehen.de, gut, Herren … Oh, echt cool.`,
      },
      {
        id: 'k11-2.49',
        title: '2.49',
        audioSrc: '/2.49.mp3',
        text: `Hab’ ich doch gesagt. Hier, dieses T-Shirt ist doch total schön.
Welches?
Das T-Shirt ganz rechts in Schwarz.
Ja, stimmt, das ist ganz gut. Und wie wäre dieses Hemd hier? Das sieht doch toll aus.
Also wirklich nicht, das ist ja schrecklich.
Also, ich find’s gut.
Aber hier, schau mal, the Pullover ist doch toll.
Welcher?
Dieser hier.
Der? Blau, rot, grün? Nee, der ist viel zu bunt. Das mag ich nicht.
Ja, ja. Du magst immer nur schwarz oder grau.
Ja, warum nicht? Wow, hier diese Hose. Super, oder?
Also, ich weiß nicht, die ist ja auch wieder schwarz. Das finde ich echt langweilig. Geh mal weiter runter. Hier, schau mal, die Jeans. Die sieht gut aus.
Welche meinst du?
Diese hier?
Nee, die mag ich überhaupt nicht.
Hose, Pulli, T-Shirt … Was suchst du eigentlich?
Ach, keine Ahnung. Ich brauche einfach mal wieder was Neues. Ich meine irgendwas Cooles …`,
      },
      {
        id: 'k11-2.50',
        title: '2.50',
        audioSrc: '/2.50.mp3',
        text: `Sieh mal, der Mantel ist doch toll, oder?
Welcher Mantel?
Na, dieser hier.
Findest du? Also, ich finde diese Jacke hier viel besser.
Welche Jacke meinst du?
Diese?
Nein, die ist nicht schön.
Ach, Andreas! Du findest echt gar nichts schön!
Quatsch! Schau mal: Wie findest du diesen Hut hier? Der ist super! Und dann brauche ich noch ein T-Shirt in Schwarz. So, Hut und T-Shirt in den Warenkorb und zur Kasse gehen. Fertig!`,
      },
      {
        id: 'k11-2.51',
        title: '2.51',
        audioSrc: '/2.51.mp3',
        text: `1. bekommen – mitkommen
2. einkaufen – verkaufen
3. aufstehen – verstehen`,
      },
      {
        id: 'k11-2.52',
        title: '2.52',
        audioSrc: '/2.52.mp3',
        text: `1. kaufen – Ich habe ein T-Shirt gekauft.
2. verkaufen – Er hat den Hut verkauft.
3. einkaufen – Hast du heute schon eingekauft?`,
      },
      {
        id: 'k11-2.53',
        title: '2.53',
        audioSrc: '/2.53.mp3',
        text: `Guten Tag!
Guten Tag! Kann ich Ihnen helfen?
Ja, bitte. Ich suche einen Pullover.
Welche Größe brauchen Sie?
Ich habe meistens XL, manchmal auch nur L.
Kommen Sie mit, bitte. Wie finden Sie den Pullover hier?
Hm, ich weiß nicht. Grün steht mir nicht so gut. Haben Sie den auch in Blau?
Einen Moment, bitte. Hier ist er in Blau. Wie gefällt Ihnen der?
Oh ja, der ist gut. Wie viel kostet er?
Er ist sehr günstig, nur 49,90 Euro. Probieren Sie ihn doch mal an. Und? Passt Ihnen der Pullover?
Nicht so richtig. Er ist zu weit. Ich habe ihn wieder ausgezogen. Haben Sie den auch in L?
Ja, ich hole ihn. Hier, bitte. Und? Ist das die richtige Größe?`,
      },
      {
        id: 'k11-2.54',
        title: '2.54',
        audioSrc: '/2.54.mp3',
        text: `1
Oh, diese Jacke gefällt mir sehr gut.
Ich glaube, sie passt dir nicht, sie ist zu groß!
Ich probiere sie mal an.
2
Können Sie uns helfen, bitte? Die Hose gefällt meinem Sohn, aber sie passt ihm nicht.
Einen Moment, bitte.
3
Dieses Kleid steht dir richtig gut.
Ja, es gefällt mir sehr. Aber es ist zu teuer.
Ja, schade.`,
      },
      {
        id: 'k11-2.55',
        title: '2.55',
        audioSrc: '/2.55.mp3',
        text: `Also, was brauchen wir noch? Die Schuhe haben wir schon mal, das ist gut.
Ich brauche unbedingt noch ein Parfüm.
Okay. Das gibt es im Erdgeschoss. Da ist die Parfümerie. Und ich brauch‘ noch ein Duschgel, das kann ich auch dort kaufen.
Und dann brauchst du noch einen Schal.
Einen Schal? Ich hab‘ doch einen.
Aber der passt nicht zum Anzug.
Ja, ja. Dann gehen wir nachher in den zweiten Stock. Da finden wir bestimmt etwas. Und wir brauchen noch einen USB-Stick.
Ach, stimmt. Das hab‘ ich schon vergessen. Und dann gehen wir gleich danach in den 5. Stock.
Was brauchst du da?
Eine Tasse Kaffee. Hast du auch Lust? Brauchen wir sonst noch was?
Ja, ein Geschenk für Luzi. Vielleicht eine schöne Tasse? Sie trinkt doch so gern Tee.
Eine Tasse? Nein, das find‘ ich nicht gut. Aber Tee, das ist gut. Weißt du was? Wir fangen am besten mit dem Kaffee ganz oben an.
Gute Idee. Dann fahren wir gleich in den 5. Stock.`,
      },
      {
        id: 'k11-2.56',
        title: '2.56',
        audioSrc: '/2.56.mp3',
        text: `Gut gesagt: Ich hab’ …
Ich such’ das Café …
Das ist im 5. Stock.
Ich brauch‘ Papier. Wo find‘ ich das?
Das gibt’s bei den Schreibwaren im Erdgeschoss.
Wo find‘ ich bitte Sportschuhe?
Im fünften Stock.`,
      },
    ],
  },
  {
    id: 'kapitel-12',
    title: 'Kapitel 12: Ab in den Urlaub!',
    level: 'A1.2',
    lessons: [
      {
        id: 'k12-2.57',
        title: '2.57',
        audioSrc: '/2.57.mp3',
        text: `Ach, das ist ja auch nett. Das muss ich auch mal wieder anziehen … Ja, das nehme ich mit. Und der Pulli, hm, wenn es mal nicht so warm ist …
So, jetzt bin ich fertig – nur noch alles in den Koffer. Mist, passt nicht alles rein. Also noch mal …
Schatz? Bist du schon fertig mit Packen?
Nein, noch nicht ganz. Ich brauche aber nicht mehr lang. Sag mal, nimmst du Badesachen mit? Vielleicht gehen wir ja mal schwimmen.
Ach komm, wir gehen hier auch nie schwimmen – das kannst du doch hierlassen. Wir wollen doch die Stadt ansehen. Ach … Mensch … Der Koffer geht nicht zu. Na, dann muss ich halt ein paar Sachen hierlassen. Sag mal, brauchen wir eine Winterjacke?
Nein, so kalt ist es noch nicht. Und wenn es kalt ist, gehen wir ja auch mal in ein Café.
Ja super, gute Idee. Dann lasse ich die Winterjacke hier. Aber die Regenjacke nehme ich mit.
Klar. Ich habe auch einen Regenschirm. Hast du den Reiseführer dabei?
Ja, natürlich. Also, ich habe jetzt einfach zwei Hosen, einen Rock, drei T-Shirts, zwei Blusen und einen Pulli eingepackt. Meinst du, das reicht?
Klar. Und wenn uns was fehlt, können wir es uns ja kaufen. Wir fahren ja nicht in die Wüste!
Stimmt.`,
      },
      {
        id: 'k12-2.58',
        title: '2.58',
        audioSrc: '/2.58.mp3',
        text: `Guten Abend. Wir haben ein Zimmer auf den Namen Burger reserviert.
Guten Abend, einen Moment bitte … Ja, hier habe ich Sie. Können Sie mir das hier bitte noch ausfüllen?
Ja, natürlich.
Danke. Und hier ist die Karte für Ihr Zimmer. Das Zimmer ist im dritten Stock, der Lift ist gleich hier rechts.
Danke. Sagen Sie: Wir sind zum ersten Mal hier in Basel und wir kennen uns gar nicht aus. Was gibt es denn für Sehenswürdigkeiten? Können Sie uns ein paar Tipps geben?
Aber gerne. Da gibt es ganz viel, was Sie machen können. Sie können zum Beispiel in der Altstadt spazieren gehen oder eine Stadtführung machen.
Ach, ich weiß nicht, da muss man immer so viel gehen …
Oder Sie machen eine Stadttour mit einem Oldtimer-Tram – das macht wirklich Spaß. Die Tour startet um 10:30 Uhr oder um 11:45 Uhr und dauert eine Stunde. Sie sehen die Altstadt, den Marktplatz und noch viel mehr. Abfahrt ist am Centralbahnplatz. Ich habe hier einen Prospekt für Sie.
Danke. Ach, das sieht ja nett aus.
Soll ich Sie gleich anmelden?
Ach, ja. Was denkst du?
Ja, das sieht gut aus. Um 10:30 Uhr ist gut.
Gerne, dann melde ich Sie gleich an.
Und was machen wir danach?
Interessieren Sie sich auch für Museen?
Ja.
Also, das Kunstmuseum Basel ist sehr bekannt. Es ist die älteste öffentliche Kunstsammlung der Welt. Seit 1661 kann man hier Bilder ansehen.
Hm – gibt es auch etwas Moderneres?
Ja, da kann ich Ihnen das Vitra Design Museum empfehlen. Es ist ein sehr bekanntes Museum für Design und Architektur. Es ist nicht direkt in Basel, sondern in Weil am Rhein. Sie können mit dem Bus dorthin fahren.
Das hört sich toll an! Also, wir frühstücken zuerst gemütlich hier im Hotel, dann machen wir die Stadttour und danach fahren wir zum Museum, einverstanden?
Ja, super!
Und was machen wir später? Wo können wir am Abend denn etwas essen?
Vielleicht möchten Sie typisches Essen aus Basel probieren? Da kann ich das Restaurant Löwenzorn empfehlen. Da kann man gut essen in historischen Räumen.
Ja, das klingt gut.
Na, da haben wir ja ein volles Programm: Zuerst Frühstück, dann die Stadtführung, danach ins Museum und später essen. Und was machen wir nach dem Essen?
Theater?
Nein, zum Schluss gehen wir noch in einen Club. Und übermorgen schauen wir mal.
Okay! Vielen Dank und gute Nacht.
Gerne. Gute Nacht.`,
      },
      {
        id: 'k12-2.59',
        title: '2.59',
        audioSrc: '/2.59.mp3',
        text: `Sag mal, wie kommen wir denn jetzt zu der Stadttour?
Keine Ahnung. Schau doch mal auf dem Handy nach.
Ja, mache ich. Wie heißt nochmal der Platz? Centralbahnplatz?
Ja, ich glaube schon.
Okay … Also, wo sind wir denn jetzt? Ah, hier. Also schau.
Hm?
Wir sind hier und da ist die Abfahrt. Siehst du? Also, wir können mit der Tram fahren. Wir gehen zur Haltestelle „Bankverein“. Da steigen wir in die Tram ein. Und am Centralbahnplatz steigen wir wieder aus.
Das ist ja einfach. Und da muss man nicht umsteigen?
Nein, die Tram fährt direkt. Warte, das ist die Nummer 8 und die Nummer 10.
Super, dann mal los! Ähm … und wie kommt man jetzt von hier zur Tram?`,
      },
      {
        id: 'k12-2.60',
        title: '2.60',
        audioSrc: '/2.60.mp3',
        text: `1. vorstellen 
2. Frühstück 
3. warten 
4. vor 
5. Video 
6. Film 
7. vier 
8. wir 
9. viele`,
      },
      {
        id: 'k12-2.61',
        title: '2.61',
        audioSrc: '/2.61.mp3',
        text: `Fotograf fährt nach Frankfurt.
Wir wollen im Winter wandern.
Volker vergisst immer das Verb „verkaufen“ auf Spanisch.
Wollen wir vier vielleicht im Februar nach Wien fahren?`,
      },
      {
        id: 'k12-2.62',
        title: '2.62',
        audioSrc: '/2.62.mp3',
        text: `Gut gesagt: Wetter
Mann, ist das heiß!
So eine Hitze!
So ein Mistwetter!
Es schüttet!`,
      },
    ],
  },
  {
    id: 'a2.1-kapitel-1',
    title: 'Kapitel 1: Das bin ich.',
    level: 'A2.1',
    lessons: [
      {
        id: 'k1-1.1',
        title: '1.1',
        audioSrc: '/a2.1_1.1.mp3',
        text: `Hallo, ich heiße Marie. Also, meine Familie ist ziemlich groß. Ich habe drei Schwestern und einen Bruder. In meiner Freizeit will ich mich entspannen. Ich spiele Gitarre, das ist mein Hobby. Und ich liebe Bücher und lese sehr viel. Manchmal lese ich auch ein Buch auf Englisch. Ich habe auch Spanisch in der Schule gelernt, aber das habe ich alles vergessen. Ich spreche nur Deutsch und Englisch.`,
      },
      {
        id: 'k1-1.2',
        title: '1.2',
        audioSrc: '/a2.1_1.2.mp3',
        text: `Ach ja, es ist viel passiert. Letztes Jahr habe ich zum Beispiel meinen Freund kennengelernt. Eine Freundin von mir hatte Geburtstag und hat eine Party gefeiert. Da habe ich Jan zum ersten Mal getroffen. Wir haben den ganzen Abend geredet und getanzt. Na ja, und dann haben wir uns gleich am nächsten Tag wiedergesehen. Und seitdem treffen wir uns fast jeden Tag. Im Sommer sind wir zusammen für eine Woche in die Berge gefahren. Dort sind wir jeden Tag gewandert, das hat mir gut gefallen. Mein Job ist oft stressig und im Urlaub habe ich mich richtig ausgeruht. Hm, was noch …? Ach ja, ich mache ja viel Sport. Ich gehe ins Fitness-Studio und jogge viel. Und letztes Jahr bin ich zum ersten Mal einen Marathon gelaufen. Ich hab‘ natürlich nicht gewonnen, aber das Mitmachen war toll. Und ich war letztes Jahr zum ersten Mal in Berlin! Ich bin mit einer Freundin gefahren und wir haben viele Sehenswürdigkeiten besichtigt. Geschlafen haben wir in einer Jugendherberge, so war es nicht so teuer. Mal sehen, welche Reisen ich dieses Jahr mache.`,
      },
      {
        id: 'k1-1.3',
        title: '1.3',
        audioSrc: '/a2.1_1.3.mp3',
        text: `1. Tochter
2. machen
3. echt
4. möchten
5. nach
6. nicht
7. Kirche
8. besuchen`,
      },
      {
        id: 'k1-1.4',
        title: '1.4',
        audioSrc: '/a2.1_1.4.mp3',
        text: `ch wie ich
durch – sprechen – manchmal – vielleicht – Bücher
ch wie acht
Wochenende – Sprache – Hochzeit – Buch – kochen`,
      },
      {
        id: 'k1-1.5',
        title: '1.5',
        audioSrc: '/a2.1_1.5.mp3',
        text: `Gut gesagt: Kurzformen in Nachrichten
Das mache ich. Mach ich.
Ich komme gern. Komme gern.
Ich habe dich lang nicht gesehen. Lang nicht gesehen.
Es ist alles da. Alles da.`,
      },
      {
        id: 'k1-1.6',
        title: '1.6',
        audioSrc: '/a2.1_1.6.mp3',
        text: `Hallo Lea!
Hi Ben. Wie war dein Urlaub?
Schön, aber viel zu kurz, leider. Und wie geht’s deinem Vater?
Er war richtig krank. Aber jetzt geht es ihm wieder ein bisschen besser.
Das ist gut. Und wie geht’s dir?
Alles okay. Du, ich möchte dich mal wieder sehen. Dann musst du mir von deinem Urlaub erzählen. Gehen wir zusammen essen? Vielleicht am Wochenende?
Oh ja, gern.
Hast du am Samstagabend Zeit?
Schade, da geht es leider nicht, weil ich zu einem Konzert gehe. Ich habe Tickets für Felix Jaehn in der „TonHalle“.
Cool! Und am Sonntag? Geht es da? Wir können zum Brunch gehen, ins „Central“ am Karlsplatz. Hast du Lust?
Das ist eine gute Idee. Wann möchtest du dort sein?
So um elf, geht das?
Geht es auch ein bisschen später? Dann kann ich am Vormittag noch schwimmen.
Ist zwölf Uhr gut?
Ja, das passt. Dann sehen wir uns am Sonntag im „Central“.
Ja, genau, am Sonntag um 12. Das ist doch super.
Ich freue mich. Ciao, Lea.
Ciao.`,
      },
      {
        id: 'k1-1.7',
        title: '1.7',
        audioSrc: '/a2.1_1.7.mp3',
        text: `Hast du es auch schon gehört, Gloria? In der Vorstadt gibt es ein neues Lokal, das “lichtlos”. Man kann dort Kaffee trinken und auch essen, aber es ist total dunkel, ohne Licht, eben lichtlos.
Warst du schon dort, Nele?
Nein, aber ein paar Freunde von mir. Es hat ihnen super gefallen. Man isst und trinkt, aber man sieht nichts dabei, gar nichts. Ich möchte da auch gern mal hingehen. Kommst du mit?
Ich weiß nicht, ich finde das ziemlich komisch: Plötzlich ist das Licht aus.
Nein, nein, da ist es immer dunkel. Komm, das wird spannend!
Und wie findet man seinen Platz?
Die Kellnerinnen und Kellner nehmen dich an der Hand und bringen dich zum Tisch.
Und wie bestellt man? Man kann ja keine Speisekarte lesen.
Das macht man beim Eingang, an der Rezeption. Dort bezahlt man auch nach dem Essen.
Aber Essen ohne Licht, das ist schon komisch. Da kann man das Essen auf dem Teller gar nicht finden. Das sieht bestimmt dumm aus.
Das macht doch nichts, du siehst nichts, aber alle anderen sehen auch nichts. Ich finde das interessant. Man muss da ganz anders aufpassen. Das möchte ich erleben.
Wann willst du denn da hin?
Vielleicht am Freitag in zwei Wochen. Hast du am 22. Zeit?
Moment, am Freitag … am 22. … Ja, das geht. Wir können auch Ole und Simon fragen. Vielleicht kommen sie auch mit.
Das ist eine gute Idee. Ich reserviere uns gleich mal einen Tisch …`,
      },
    ],
  },
  {
    id: 'a2.1-kapitel-2',
    title: 'Kapitel 2: Nach der Schulzeit',
    level: 'A2.1',
    lessons: [
      {
        id: 'k2-1.8',
        title: '1.8',
        audioSrc: '/a2.1_1.8.mp3',
        text: `Hallo Ayla, wie geht’s?
Ganz gut. Und dir?
Auch gut. Schön so ein Klassentreffen. Jetzt sind es schon fünf Jahre, dass wir Abitur gemacht haben. Sag mal, was hast du denn nach der Schule gemacht? Du wolltest doch Kunst studieren, oder?
Genau, ich wollte etwas Kreatives machen. Zuerst habe ich ein Praktikum bei einer Werbeagentur gemacht, also in der Grafik-Abteilung.
Ach, wirklich? Und, hat dir das Spaß gemacht?
Ja, das hat mir sehr gut gefallen, und deshalb habe ich dann in Augsburg Grafik studiert.
Ah, gut. Und was machst du jetzt?
Jetzt arbeite ich seit einem Jahr als Grafikerin bei einer Zeitschrift. Das ist toll. Und du?
Also, ich habe nach der Schule …`,
      },
      {
        id: 'k2-1.9',
        title: '1.9',
        audioSrc: '/a2.1_1.9.mp3',
        text: `Du, Luis, was hast du eigentlich nach der Schule gemacht? Hast du gleich eine Ausbildung angefangen?
Nee, nach der Schule habe ich erst mal überhaupt nicht gewusst, was ich machen soll: eine Ausbildung oder studieren? Ich hatte keine Ahnung. Dann bin ich ein Jahr durch Südamerika gereist.
Echt? Klingt ja interessant. Wie war das?
Echt cool. Ich habe viel gesehen und viele Leute aus der ganzen Welt kennengelernt.
Und was machst du jetzt?
Na ja, ich bin zurückgekommen und habe erst noch zwei Jahre auf Messen gejobbt. Und jetzt mache ich eine Ausbildung zum Altenpfleger. Das gefällt mir total gut. Und sag mal, was machst du denn jetzt?
Ich bin seit ein paar Jahren …`,
      },
      {
        id: 'k2-1.10',
        title: '1.10',
        audioSrc: '/a2.1_1.10.mp3',
        text: `Hey Simone, was machst du denn jetzt? Hast du nicht eine Ausbildung gemacht? Was war das noch mal?
Nee. Nach der Schule war ich erst mal ein Jahr als Au-pair in England.
Ach, Au-pair in England. Interessant.
Ja, ich studiere Informatik und ohne Englisch geht da gar nichts. Und in der Schule war ich ja nicht so gut in Englisch.
Wo studierst du denn?
In Dresden. Sag mal, hast du eigentlich Leo getroffen?
Ja, letzte Woche erst …`,
      },
      {
        id: 'k2-1.11',
        title: '1.11',
        audioSrc: '/a2.1_1.11.mp3',
        text: `Na, was hast du denn nach der Schule gemacht, Pablo?
Na ja, ich wollte schnell Geld verdienen. Deshalb habe ich als Verkäufer in einem großen Sportgeschäft gearbeitet.
Und bist du da immer noch?
Nee, nach drei Jahren wollte ich doch etwas anderes tun.
Und was?
Ich mache jetzt eine Ausbildung zum Hotelkaufmann. Das ist klasse! Und ich reise ja selbst auch gern.
In welchem Hotel denn? Hier in der Stadt?
Ja, im Hotel am Marktplatz. Kennst du …?`,
      },
      {
        id: 'k2-1.12',
        title: '1.12',
        audioSrc: '/a2.1_1.12.mp3',
        text: `Ach, Frida, wir haben uns ja lange nicht gesehen.
Ja, das stimmt.
Wolltest du nicht Medizin studieren?
Doch. Ich wollte gleich nach der Schule an die Uni, aber ich habe ja keinen Studienplatz bekommen.
Echt? Wie schade!
Ja, aber dann habe ich einfach erst mal eine Ausbildung zur Krankenschwester gemacht.
Und, hat dir das Spaß gemacht?
Ja, das war gut und hat mir noch mal gezeigt, dass Medizin das Richtige für mich ist. Und nach drei Jahren Ausbildung habe ich endlich einen Studienplatz für Medizin bekommen. In Ulm. Also, jetzt studiere ich doch noch.
Ach, das ist ja super.
Und du?
Also, ich habe erst einmal …`,
      },
      {
        id: 'k2-1.13',
        title: '1.13',
        audioSrc: '/a2.1_1.13.mp3',
        text: `Gut gesagt: Sie sind überrascht.
Physik und Musik waren meine Lieblingsfächer.
Ach, nee!
Wir hatten jeden Tag Sportunterricht.
Echt?
Wir sind erst um 9 Uhr zur Schule gegangen.
Ehrlich?
Wir hatten nie Hausaufgaben!
Ach, komm!`,
      },
      {
        id: 'k2-1.14',
        title: '1.14',
        audioSrc: '/a2.1_1.14.mp3',
        text: `1. Schule
2. heute
3. Medizin
4. Weg
5. Hausaufgabe
6. sehr
7. Geschichte
8. Note
9. Idee
10. Beruf
11. Gespräch
12. wollte`,
      },
      {
        id: 'k2-1.15',
        title: '1.15',
        audioSrc: '/a2.1_1.15.mp3',
        text: `1. Nach der Schule durfte ich meine Freunde besuchen.
2. Ich habe am Nachmittag viele Kurse gemacht.
3. Ich musste auch am Wochenende lernen.`,
      },
      {
        id: 'k2-1.16',
        title: '1.16',
        audioSrc: '/a2.1_1.16.mp3',
        text: `Hallo zu unserer Sendung zum Thema „Schule aus – und nun?“. Letzte Woche haben wir Ihnen Schülerinnen und Schüler präsentiert, die erst einmal ein Jahr Pause gemacht haben. Diese Woche erzählen Maike, Vida und Sara von ihrer Entscheidung. Alle drei haben gleich mit einer Arbeit oder einem Studium begonnen. Maike, du hast eine Ausbildung angefangen, oder?
Genau, ich mache jetzt seit einem Jahr eine Ausbildung als Gärtnerin. Die dauert insgesamt drei Jahre.
Warum hast du dich dafür entschieden?
Das hat mehrere Gründe: Erstens wollte ich gern gleich nach der Schule Geld verdienen und allein wohnen. Und zweitens liebe ich die Natur und Blumen und bin gern draußen. Ich muss auch lernen und am Ende eine Prüfung machen, aber das ist schon okay.
Was gefällt dir besonders gut?
Die Ausbildung ist sehr praktisch, das ist perfekt für mich.
Und du, Sara? Im FSJ, also dem Freiwilligen Sozialen Jahr, bekommst du auch schon etwas Geld, oder?
Ja, aber nur ein bisschen und das war nicht der Grund für meine Entscheidung. Ich wollte einfach nicht gleich nach der Schule wieder lernen. Später mache ich dann wahrscheinlich eine Ausbildung oder vielleicht studiere ich. Ich weiß es noch nicht. Ich habe ja jetzt noch ein Jahr Zeit für die Entscheidung.
Erzähl uns doch mal kurz, was du so machst.
Also, ich mache ein Soziales Jahr. Ich betreue Tatjana, sie ist 12 und sits im Rollstuhl. Sie ist witzig und wir verstehen uns gut. Ich bringe sie zur Schule und helfe ihr in der Freizeit. Ihre Eltern arbeiten beide und haben noch einen fünf Jahre alten Sohn. Für mich ist die soziale Arbeit eine tolle Erfahrung.
Danke, Sara. Darüber sprechen wir gleich noch länger. Aber jetzt erst mal zu Vida. Vida, du hast direkt nach der Schule dein Studium begonnen. Jetzt bist du schon seit zwei Jahren an der Uni. Wolltest du keine Pause nach der Schule?
Nein, ich habe gleich mit dem Studium angefangen. Also, ein paar Monate hatte ich schon Pause, da war ich mit Freunden in Kroatien. Aber dann bin ich von München nach Leipzig gezogen, da war für mich alles neu. Nächstes Jahr mache ich ein Auslandssemester in den Niederlanden. Also, langweilig ist mir nicht.
Das glaube ich. Und was studierst du?
Internationales Recht, also Jura. Das klingt für andere vielleicht anstrengend und ich muss wirklich viel lernen, aber für mich ist es perfekt. Meine Eltern unterstützen mich und finanzieren die Wohnung, denn für einen Job habe ich eigentlich keine Zeit.
Ihr seid alle drei glücklich mit eurer Wahl. Habt ihr denn Tipps für die Schülerinnen und Schüler, die …?`,
      },
      {
        id: 'k2-1.17',
        title: '1.17',
        audioSrc: '/a2.1_1.17.mp3',
        text: `Na, Vida, wie ist es denn eigentlich an der Universität?
Ach, eigentlich ist alles gut. Ich finde das Studentenleben in Leipzig toll! Ich habe viele neue Freunde gefunden und meine Kurse sind spannend. Warum fragst du denn, Alex?
Ach, Fabian und ich überlegen gerade, was wir nach der Schule machen.
Ach ja, ihr seid ja in zwei Monaten mit der Schule fertig.
Das stimmt und ich möchte eigentlich bald eine Ausbildung anfangen. Alex findet das nicht gut.
Genau! Nach dem Schulstress braucht man doch eine Pause, zum Beispiel kann man eine Reise machen.
Das sehe ich anders. Man macht doch nach der Schule sowieso etwas ganz anderes. Deshalb braucht man keine Pause. Wie war das bei dir, Vida? Du hast doch auch gleich studiert.
Also, ich habe schon acht Wochen Urlaub gemacht, danach etwas gejobbt und im Herbst dann gleich studiert. Das war für mich richtig, denke ich. Was willst du denn machen, Alex?
Also, ich weiß noch gar nicht, was ich machen will. Studieren? Ausbildung? Urlaub?
Hm, du kannst ja einfach jobben und reisen, da gibt es viele Programme. Das ist eine gute Alternative zum Studium, finde ich.
So einfach ist das nicht. Man verliert Zeit und alle Freunde haben später schon eine Arbeit und nur du, Alex, bist noch nicht fertig. Dann bist du traurig und unzufrieden.
Das stört mich nicht. Studieren und arbeiten – das kommt früh genug. Das ist meine Meinung. Du kannst das ja anders machen.
Ich habe eine Idee. Ihr könnt mich ja in Leipzig besuchen und ich zeige euch mein Studentenleben dort.
Das ist eine super Idee. Fabian, hast du auch Zeit?`,
      },
    ],
  },
  {
    id: 'a2.1-kapitel-3',
    title: 'Kapitel 3: Immer online?',
    level: 'A2.1',
    lessons: [
      {
        id: 'k3-1.18',
        title: '1.18',
        audioSrc: '/a2.1_1.18.mp3',
        text: `Hi Sven! Willst du auch einen Tee?
Danke, gern. Was machst du denn gerade?
Ach, da gibt es so eine Online-Umfrage zum Thema „Medien“.
Echt? Und was sind das für Fragen?
Na, zum Beispiel, was ich gestern online gemacht habe.
Und?
Na, beim Frühstück lese ich ja immer die Zeitung online und in der Arbeit musste ich Artikel recherchieren und lesen.
Und wahrscheinlich E-Mails schreiben.
Genau, in der Arbeit lese und schreibe ich bestimmt so ein bis zwei Stunden E-Mails. Mindestens! Und in der Freizeit checke ich auch noch meine privaten Mails …
Machst du das auch in der Arbeit?
Nee, dafür habe ich gar keine Zeit. Aber in der Pause oder wenn ich mit der U-Bahn fahre, da habe ich ja mein Smartphone. Oder abends auf meinem Tablet.
Und abends hast du wahrscheinlich wieder eine Serie geschaut und dein Handyspiel gespielt?
Gestern Abend nicht, aber eigentlich hast du ja recht. Gestern war ich mit Matthias essen, aber ein paar Minuten habe ich bestimmt auch mal was gespielt … Und du, bist du immer online?
Immer online? Na ja, also gestern habe ich ein paar Fotos gepostet und Nachrichten geschrieben. Und sonst? Ach ja, ich habe mir ein paar Songs runtergeladen.
Und du hast doch bestimmt eine Serie gesehen?
Ja, schon. Kevin war abends da. Wir haben zuerst ein paar Videos angesehen und danach noch so eine coole Serie.
Und das war alles. Nicht mehr?
Puh, also natürlich habe ich was im Internet gelesen. Ach ja, Kevin und ich haben noch Kinotickets gekauft.
Na, also bist du ja auch ganz schön viel online.
Klar, ich habe ja auch nie was anderes gesagt!`,
      },
      {
        id: 'k3-1.19',
        title: '1.19',
        audioSrc: '/a2.1_1.19.mp3',
        text: `Mhm, das sind aber viele Laptops hier. Da weiß man ja gar nicht, was man nehmen soll.
Kauf doch ein Tablet. Das ist viel leichter als ein Laptop. Und praktischer ist es auch.
Findest du? Auf dem Laptop kann man aber besser schreiben und der Bildschirm is größer.
Aber ein Laptop kostet mehr als ein Tablet. Tablets sind billiger als Laptops.
Das stimmt. Aber ich arbeite lieber mit einem Laptop. Also, ich glaube, der hier ist gut. Wo ist denn hier ein Verkäufer? Ah, hallo, Entschuldigung, …?`,
      },
      {
        id: 'k3-1.20',
        title: '1.20',
        audioSrc: '/a2.1_1.20.mp3',
        text: `Warum willst du denn noch in den Buchladen? Hast du keinen E-Book-Reader?
Nee, habe ich nicht. Ich weiß, E-Books sind praktischer als Bücher. Aber ich mag Bücher lieber.
Hast du es denn schon mal ausprobiert? Ich hab‘ seit einem Jahr einen E-Book-Reader und find‘ ihn super.
Aber viele E-Books sind doch auch nicht billiger als Bücher.
Das stimmt, neue Bücher nicht. Aber es gibt viel kostenlos oder ganz billig. Und nachts lesen ist viel angenehmer. Man braucht keine Lampe und stört niemanden.
Hmm, vielleicht probiere ich es mal aus. Kannst du mir deinen E-Book-Reader mal leihen? Dann …`,
      },
      {
        id: 'k3-1.21',
        title: '1.21',
        audioSrc: '/a2.1_1.21.mp3',
        text: `Was wünschst du dir eigentlich zum Geburtstag?
Vielleicht eine Uhr. Meine gefällt mir nicht mehr.
Aber dann eine Smartwatch, oder? Die kann viel mehr als eine Uhr.
Du meinst beim Sport und so?
Nein, nicht nur. Da bekommst du Nachrichten und hast auch andere Apps drauf. Das ist fast wie ein Tablet, nur viel, viel kleiner.
Sind Smartwatches nicht superteuer?
Nein, die sind nicht unbedingt teurer. Komm, wir schauen mal im Internet nach. Vielleicht gefällt dir da was …`,
      },
      {
        id: 'k3-1.22',
        title: '1.22',
        audioSrc: '/a2.1_1.22.mp3',
        text: `Kauf doch ein Tablet. Das ist viel leichter als ein Laptop. Und praktischer ist es auch.
Findest du? Auf dem Laptop kann man aber besser schreiben und der Bildschirm ist größer.
Aber ein Laptop kostet mehr als ein Tablet. Tablets sind billiger als Laptops.
Das stimmt. Aber ich arbeite lieber mit einem Laptop.`,
      },
      {
        id: 'k3-1.23',
        title: '1.23',
        audioSrc: '/a2.1_1.23.mp3',
        text: `Gut gesagt: Beim Sprechen Zeit gewinnen.
Er macht lieber Fotos von Tieren als von – ähm …, wie sagt man gleich? – Landschaften.
Für das Projekt haben sie – warte mal – eine, eine Umfrage gemacht.
Sie entwickeln gerade, ein, ein Dings, für das Smartphone. Wie heißt das?`,
      },
      {
        id: 'k3-1.24',
        title: '1.24',
        audioSrc: '/a2.1_1.24.mp3',
        text: `So, hier ist einmal das Schnitzel mit Pommes und Salat.
Ja, das ist für mich – danke.
Und die Spaghetti mit Lachs für Sie.
Vielen Dank. Hm, das sieht ja lecker aus. Guten Appetit!
Ja, ich habe echt Hunger! Guten Appetit.
Ach, Moment. Warte mal kurz, noch nicht essen, ich mache noch ein Foto von deinem Schnitzel.
Ach, jetzt leg doch das Handy weg. Ich habe Hunger und will jetzt essen.
Nur ganz kurz, das sieht so lecker aus!
So, können wir jetzt essen?
Ja, fang ruhig an, ich poste das nur noch schnell.
Oh Mann, Konsti, das nervt echt! Willst du hier mit mir essen oder deinen Freunden Fotos schicken? Glaubst du wirklich, dass die das interessant finden?
Ach, jetzt sei doch nicht so! Ich bin doch schon fertig. Also, guten Appetit.
N‘ Guten!`,
      },
      {
        id: 'k3-1.25',
        title: '1.25',
        audioSrc: '/a2.1_1.25.mp3',
        text: `1. www.balder.de
2. www.beiser.at
3. www.wenger.ch
4. www.willner.ch
5. www.walter.at
6. www.bachmann.de
7. www.busch.de
8. www.wock.at`,
      },
      {
        id: 'k3-1.26',
        title: '1.26',
        audioSrc: '/a2.1_1.26.mp3',
        text: `1 Wann willst du das Buch bezahlen? 
2 Wahrscheinlich will er wieder ein E-Book. 
3 Warum willst du den Blogbeitrag nicht lesen? 
4 Wer braucht wie oft sein Handy? 
5 Wo bist du am Wochenende? 
6 Warum hat Ben die Nachricht nicht beantwortet?`,
      },
      {
        id: 'k3-1.27',
        title: '1.27',
        audioSrc: '/a2.1_1.27.mp3',
        text: `Und, wie hat dir der Film gefallen?
Sehr gut! Ich finde, die Schauspieler waren super.
Ja, vor allem der Junge hat wirklich toll gespielt. Aber ich fand den Film auch ein bisschen langweilig.
Langweilig? Echt??? Nein, das finde ich gar nicht. Ich finde die Geschichte sehr interessant. Ich kann mir richtig gut vorstellen, wie die Kindheit damals war. Und der Film war lustig, ich habe viel gelacht! Aber er war auch sehr traurig. Solche Filme mag ich gern.
Ja, du hast schon recht, schlecht war der Film nicht. Aber ich finde es einfach nicht so gut, dass der Film nur um das Leben von einer Person geht. Ich bin kein Fan von Autobiografien.
Ach, du hast doch immer irgendetwas zu meckern.
Ja, ja, ich weiß! Aber die Schauspieler waren wirklich toll! Sollen wir noch etwas trinken gehen?
Ja, gerne, komm.`,
      },
      {
        id: 'k3-1.28',
        title: '1.28',
        audioSrc: '/a2.1_1.28.mp3',
        text: `Hallo und herzlich willkommen zu unserer Sendung “Kino aktuell”.
Ich beginne heute mit ein paar Informationen zum Filmland Deutschland.
Jedes Jahr kommen sicher fünf bis zehn populäre deutsche Filme in die Kinos. Aber insgesamt gibt es viel mehr deutsche Filme, nämlich 250 pro Jahr.
28 Millionen Kinobesucher in Deutschland sehen deutsche Filme.
Sehen Sie auch gern deutsche oder internationale Filme? Dann ist das Programm auf einem Filmfestival, zum Beispiel der Berlinale, für Sie interessant.
Der beste Film gewinnt dort den Goldenen Bären.
Oder Sie recherchieren: Welcher Film hat die Lola gewonnen? Die Lola ist ein anderer deutscher Filmpreis.
Viele Filme kommen aus den Filmstudios Babelsberg bei Berlin. Die gibt es schon seit 1912, also schon über ein Jahrhundert lang.
In München gibt es die Bavaria Filmstudios und eine bekannte Universität, die Hochschule für Fernsehen und Film.
Kennen Sie zum Beispiel Wim Wenders? Der Regisseur hat hier studiert, ebenso wie viele andere bekannte Schauspieler und Regisseure.
Aber jetzt zu den Filmstarts: Doris Dörrie hat wieder …`,
      },
    ],
  },
  {
    id: 'a2.1-kapitel-4',
    title: 'Kapitel 4: Große und kleine Gefühle',
    level: 'A2.1',
    lessons: [
      {
        id: 'k4-1.29',
        title: '1.29',
        audioSrc: '/a2.1_1.29.mp3',
        text: `Hallo und herzlichen Glückwunsch! Erster Platz! Darf ich fragen: Wie fühlen Sie sich jetzt?
Ja, unglaublich, das ist wirklich der Wahnsinn. Ich bin so stolz! Ich hab‘ es geschafft!
Wie oft sind Sie denn schon einen Marathon gelaufen?
Oh, noch nicht so oft, drei Mal. Ach, ich bin so glücklich! Ich kann es gar nicht glauben: Ich habe gewonnen!
Ja, Sie sind die Siegerin! Wissen Sie schon Ihre Zeit?
Nein, die weiß ich noch gar nicht.
4 Stunden und 28 Minuten!
Wow, super, so gut war ich noch nie!
Na dann, herzlichen Glückwunsch noch mal!
Dann gehen Sie jetzt mal lieber zur Siegerehrung und holen Sie sich Ihre Medaille. Viel Spaß!
Vielen Dank, ja, danke!`,
      },
      {
        id: 'k4-1.30',
        title: '1.30',
        audioSrc: '/a2.1_1.30.mp3',
        text: `Oh, Linus, du hast aber eine schöne Schultüte. Hast du die selbst gebastelt?
Mhm.
Und, bist du aufgeregt? Heute ist dein erster Schultag! Toll, oder? Junge, jetzt beginnt der Ernst des Lebens.
Hm. Mama, darf ich jetzt die Schultüte aufmachen?
Nein, noch nicht. Die machst du erst nach der Schule auf.
Was ist denn da drin? Weißt du das schon?
Nein, es ist ja eine Überraschung. Aber ich hoffe, dass Schokolade drin ist. Und Spielsachen!
Na ja, vielleicht … So, jetzt geht’s los! Komm, nimm deinen Schulranzen, wir gehen rein.`,
      },
      {
        id: 'k4-1.31',
        title: '1.31',
        audioSrc: '/a2.1_1.31.mp3',
        text: `Ja, also ich freue mich sehr, dass Sie alle gekommen sind und ich möchte mich bei Ihnen bedanken. Ich bin ja erst seit drei Wochen hier in der Firma. Sie alle haben mich sehr freundlich aufgenommen. Das war wirklich toll. Ich bin sehr froh, dass ich so nette Kolleginnen und Kollegen habe. Vielen Dank auch für Ihre Geduld, denn ich habe Ihnen allen in den letzten Wochen viele Fragen gestellt.
Ach, das war doch nicht schlimm. Das ist doch ganz normal!
Danke. Bitte greifen Sie zu. Und bedienen Sie sich bitte bei den Getränken. Es ist von allem genug da.
Vielen Dank.`,
      },
      {
        id: 'k4-1.32',
        title: '1.32',
        audioSrc: '/a2.1_1.32.mp3',
        text: `Hallo?
Hi Tim, ich bin’s. Und, alles klar?
Hallo Alia, ja, alles okay. Und bei dir?
Auch alles gut. Ähm, du, sag mal, du hast doch bald Geburtstag … Machst du jetzt eigentlich eine Party oder nicht? Hast du dich entschieden?
Ach, ich bin irgendwie viel zu spät dran mit allem. Vielleicht will ich eine Feier machen, aber ich weiß nicht, wann und wo.
Na, vielleicht kann ich dir ja helfen. Und klar machst du eine Feier! Ich erinnere mich noch gut an letztes Jahr, die Party war doch super!
Ja, vielleicht. Hast du eine Idee?
Warum feierst du nicht bei dir zu Hause? Jeder bringt was zu Essen mit, dann ist es doch gar nicht so viel Arbeit.
Ja, aber du kennst doch unseren Nachbarn. Der mag uns nicht und schimpft immer, dass wir so laut sind … Ich glaube, da kann ich nicht zu Hause feiern. Das gibt nur Ärger. Ich will ja, dass die Leute auf meiner Party Spaß haben, sich unterhalten und tanzen.
Ach so – hm. Vielleicht kannst du in einer Bar feiern? Weißt du denn schon, wie viele Leute du einladen willst?
Ich weiß noch nicht, vielleicht 30 oder 40 Personen. Aber ich weiß ja auch gar nicht, wer Zeit hat.
Also komm, jetzt sei mal nicht so negativ! Hast du heute Abend Zeit? Wir können uns doch treffen und deine Party richtig planen.
Echt? Das ist wirklich nett. Danke!
Na also! Treffen wir uns im „Café Kosmos“ um halb acht?
Im „Café Kosmos“? Das ist eine super Idee – vielleicht kann ich ja auch da feiern.
Das können wir ja dann nachher gleich fragen. Also, ich freue mich schon sehr auf die Party!
Super, bis heute Abend!
Ciao!`,
      },
      {
        id: 'k4-1.33',
        title: '1.33',
        audioSrc: '/a2.1_1.33.mp3',
        text: `Aua! Pass doch auf! Du bist auf meinen Fuß getreten!
Oh! Entschuldige bitte. Das tut mir leid!
Hmm. Das macht nichts.
Ähm – geht es wieder?
Ja, ja, keine Sorge. Es geht schon wieder.
Es tut mir wirklich leid. Kann ich dir ein Wasser holen?
Nein, danke, es ist alles okay.
Entschuldige, das darf doch nicht wahr sein. Immer passiert mir sowas … So ein Pech!
Also, jetzt geht es wirklich wieder. Komm, wir tanzen, okay?`,
      },
      {
        id: 'k4-1.34',
        title: '1.34',
        audioSrc: '/a2.1_1.34.mp3',
        text: `Du, Tim, schau mal, wer hier ist!
Was? Wer? Wow, das gibt‘s doch nicht! Steve!!! Oh Mann, wir haben uns ja schon ewig nicht mehr gesehen!
Hallo Tim. Ich freue mich auch.
Ich denke, du lebst in Singapur!
Ja, aber ich bin gerade hier und besuche meine Eltern. Und da hat mir Alia gesagt, dass du eine Party machst.
Cool! Mensch, erzähl mal, wie geht es dir denn so?
Gut, danke! Hey, wir haben uns sicher 10 Jahre nicht mehr gesehen, oder?
Ja, ich glaube auch, zehn Jahre. Auf dem Klassentreffen haben wir uns das letzte Mal gesehen.
Ja, die Zeit vergeht! Schade, dass wir uns so wenig sehen.
Hauptsache, wir feiern jetzt! Prost!
Prost!
Hey Alia, komm mal her! Wahnsinn! Das ist ja toll, ich freue mich riesig!!! Danke, dass du Steve Bescheid gesagt hast!
Ist doch klar! So ein Glück, dass er gerade in Deutschland ist!`,
      },
      {
        id: 'k4-1.35',
        title: '1.35',
        audioSrc: '/a2.1_1.35.mp3',
        text: `Gut gesagt: Wie unangenehm!
Oh, ist das peinlich!
Ist nicht so schlimm.
Das ist mir so unangenehm.
Das tut mir schrecklich leid.
Schon gut.`,
      },
      {
        id: 'k4-1.36',
        title: '1.36',
        audioSrc: '/a2.1_1.36.mp3',
        text: `1. Heute ist Tims Party. (fröhlich)
2. Heute ist Tims Party. (ärgerlich)
3. Heute ist Tims Party. (traurig)
4. Heute ist Tims Party. (gestresst)`,
      },
      {
        id: 'k4-1.37',
        title: '1.37',
        audioSrc: '/a2.1_1.37.mp3',
        text: `1. lalalalalala (ärgerlich)
2. lalalalalala (gestresst)
3. lalalalalala (traurig)
4. lalalalalala (fröhlich)`,
      },
      {
        id: 'k4-1.38',
        title: '1.38',
        audioSrc: '/a2.1_1.38.mp3',
        text: `1. Wie toll!
2. Na und?
3. Wie schön!
4. Wie schade!
5. Super!
6. Das tut mir leid!`,
      },
      {
        id: 'k4-1.39',
        title: '1.39',
        audioSrc: '/a2.1_1.39.mp3',
        text: `Ach schade, dass die Kieler Woche schon wieder vorbei ist.
Ja, es war schön, aber es waren viel zu viele Leute da. Überall war es eng und voll. Das hat mir nicht gefallen.
Stimmt, aber mir gefällt es, wenn Menschen aus der ganzen Welt zu so einem Fest kommen. Es war richtig international, überall hat man unterschiedliche Sprachen gehört.
Und das Essen war auch so international. Ich habe viele verschiedene Sachen probiert. Aber das war manchmal ganz schön teuer, oder?
Ja, aber ich habe auch billige Sachen gefunden. Sag mal, warst du auf einem Konzert?
Klar, Musikveranstaltungen gefallen mir immer besonders gut. Ich war insgesamt auf vier Konzerten. Und du?
Ich war auf keinem Konzert. Ich finde die Segelboote und die Regatta toll, mehr brauche ich nicht. Aber das Feuerwerk am Ende war super, oder?
Ja, das war wunderbar!`,
      },
    ],
  },
  {
    id: 'a2.1-kapitel-5',
    title: 'Kapitel 5: Leben in der Stadt',
    level: 'A2.1',
    lessons: [
      {
        id: 'k5-1.40',
        title: '1.40',
        audioSrc: '/a2.1_1.40.mp3',
        text: `Ich arbeite hier schon seit vier Jahren und ich mag meine Arbeit. Aber der Job ist nicht einfach. Meine Arbeitszeiten sind immer unterschiedlich: Mal arbeite ich von sechs bis zwei Uhr, mal habe ich Nachtdienst von Viertel vor neun bis Viertel nach sechs – oder ich arbeite am Nachmittag von eins bis Viertel nach neun abends. Das ist schon anstrengend, aber auch toll. Wenn ich Spätdienst hab‘, kann ich am Vormittag viel erledigen und die Geschäfte sind leer, weil alle anderen arbeiten. Das schönste an meinem Beruf als Krankenpfleger ist, dass ich Leuten helfen kann. In einer Stadt wie Wien mit so vielen Menschen ist mein Beruf wichtig: Es werden immer Leute krank und natürlich gibt es auch jeden Tag Unfälle.`,
      },
      {
        id: 'k5-1.41',
        title: '1.41',
        audioSrc: '/a2.1_1.41.mp3',
        text: `Also, viele Menschen denken, dass mein Beruf langweilig ist. Das stimmt aber gar nicht. Mir gefällt mein Beruf hier im Bürgeramt: Ich habe viel Kontakt mit Menschen und erlebe jeden Tag Überraschungen. Die Leute kommen zu mir, weil sie Dokumente brauchen, und ich berate sie und gebe Ihnen die Dokumente, wenn alles in Ordnung ist. Da passiert jeden Tag etwas Neues. Letzte Woche zum Beispiel habe ich einer Frau geholfen, alle Formulare für Ihren Pass zusammenzustellen. Sie war so froh, dass ich ihr geholfen habe.`,
      },
      {
        id: 'k5-1.42',
        title: '1.42',
        audioSrc: '/a2.1_1.42.mp3',
        text: `Ich bin Müllmann, das ist ein Traumberuf von vielen Kindern. Erwachsene wählen diesen Beruf eher selten. Aber: Besonders in einer großen Stadt ist unsere Arbeit sehr wichtig. Ohne uns gäbe es riesengroße Probleme. Zum Glück haben die Leute inzwischen viel mehr Respekt vor unserer Arbeit. Ich glaube, das ist so, weil die Menschen viel mehr an die Natur denken. Außerdem gibt es seit einiger Zeit eine Kampagne für unsere Arbeit. Die ist informativ und gleichzeitig sehr lustig. Die Leute grüßen mich und meine Kollegen jetzt oft freundlich. Wir merken, dass sie froh sind, dass wir uns um den Müll kümmern und alles sauber machen. Mein Beruf ist nicht leicht, aber ich mag ihn. Ich bin viel unterwegs und draußen und kenne mich in der Stadt gut aus. Nur im Winter oder wenn es regnet, träume ich manchmal von einem Bürojob.`,
      },
      {
        id: 'k5-1.43',
        title: '1.43',
        audioSrc: '/a2.1_1.43.mp3',
        text: `Guten Tag, mein Name ist Valentina Sanzin. Ich habe einen Termin mit Herrn Badura.
Ach, hallo Frau Sanzin, ich bin Kassian Badura. Schön, dass Sie da sind. Setzen wir uns doch am besten hier hin.
Danke.
Also, dann erzählen Sie doch mal: Haben Sie schon Erfahrung im Gastronomiebereich?
Ja, also, ich habe in Argentinien schon in zwei Restaurants gearbeitet. Im ersten habe ich drei Jahre gearbeitet, zwei bis drei Mal in der Woche abends. Im zweiten Restaurant habe ich ein Jahr lang gearbeitet, dann bin ich nach Wien gekommen. Die Arbeit im Restaurant macht mir viel Spaß und ich möchte auch hier gerne in einem Restaurant arbeiten.
Na, das hört sich doch gut an. Dann erzähle ich Ihnen ein bisschen über unser Restaurant. Also, unser Restaurant ist klein, aber fein. Die Leute kommen zu uns, weil sie gut essen möchten. Wir haben zwei Köche, die abwechselnd arbeiten, und immer zwei Helfer in der Küche. An der Bar ist auch immer eine Person und im Service arbeiten zwei bis drei Personen.
Hmm.
Wie oft können Sie denn bei uns arbeiten?
Ich bin flexibel, ich arbeite gern drei bis vier Mal in der Woche abends. Die Wochentage sind mir egal. Ich kann so arbeiten, wie es nötig ist. Das ist kein Problem für mich.
Das ist gut. Können Sie also auch spontan arbeiten? Bei schönem Wetter sitzen die Leute auch draußen und wir brauchen mehr Personal.
Ja, natürlich. Das kann ich machen.
Sehr gut. Können Sie denn nächsten Donnerstag um 17:00 Uhr kommen und zur Probe arbeiten? So ungefähr bis 22:00 Uhr?
Ja, sehr gerne. Wie ist das mit der Kleidung? Was soll ich anziehen?
Also, die Kellnerinnen und Kellner tragen hier alle immer ein Hemd oder eine Bluse in Weiß und eine Hose oder einen Rock in Schwarz. Das ist wichtig. Am besten haben Sie auch immer noch ein T-Shirt oder eine Bluse in Weiß hier – wenn mal ein kleiner Unfall passiert …
Okay, ja, das bringe ich gleich am Donnerstag mit. Und darf ich fragen, wie es mit der Bezahlung ist?
Ja, natürlich. Also, wir zahlen pro Stunde 12,50 Euro und da kommt dann noch das Trinkgeld dazu.
Alles klar, das ist in Ordnung.`,
      },
      {
        id: 'k5-1.44',
        title: '1.44',
        audioSrc: '/a2.1_1.44.mp3',
        text: `Guten Tag, mein Name ist Sanzin.
Freut mich!
Und das hier ist Frau Weber.
Schön, Sie kennenzulernen.`,
      },
      {
        id: 'k5-1.45',
        title: '1.45',
        audioSrc: '/a2.1_1.45.mp3',
        text: `Nr. 43 zum Schalter 4, bitte, Nr. 43 Schalter 4.
Morgen!
Guten Morgen. Ich brauche einen neuen Pass.
Haben Sie Ihren alten Pass, ein Foto und das Formular?
Ja. Here bitte.
Gut. Jetzt muss ich noch die Angaben im Formular prüfen. Die Adresse ist immer noch Seidengasse 4a, Frau Nowak?
Ja.
Wie alt ist das Foto?
Das ist ganz neu. Ich war letzte Woche beim Fotografen. Auf der Rückseite ist auch das Datum. Wann bekomme ich den neuen Pass? Ich brauche ihn bald.
Das dauert maximal eine Woche, meistens sind es sogar nur 5 Tage. Sie können auch einen Express-Pass in zwei Tagen bekommen, aber das ist teurer. Das kostet 100 Euro, der normale Preis ist 75 Euro 90.
Eine Woche ist kein Problem.
Überweisen Sie den Betrag am besten noch heute.
Ja, das mache ich.
Gut, dann brauche ich hier Ihre Unterschrift. Und dann noch Ihre Fingerabdrücke.`,
      },
      {
        id: 'k5-1.46',
        title: '1.46',
        audioSrc: '/a2.1_1.46.mp3',
        text: `Guten Tag. Was kann ich für Sie tun?
Meine Bankkarte ist weg.
Haben Sie die Karte verloren?
Nein, ich wollte Geld abheben und der Automat hat meine Karte nicht zurückgegeben. Ich habe die PIN vergessen und dreimal falsch eingetippt.
Wo und wann ist das passiert?
Gerade jetzt, direkt hier am Eingang.
Wissen Sie Ihre IBAN?
Puh, die IBAN weiß ich nicht auswendig, aber meine Kontonummer ist 812 409 211.
Moment, das haben wir gleich. Volksbank Wien, acht eins zwei – vier null neun – zwei eins eins, richtig?
Ja.
Herr Christian Varga?
Ja, genau.
Ich kann die Karte leider nicht aus dem Automaten holen, Herr Varga. Aber Sie können sie morgen ab 9:00 Uhr bei uns abholen.
Geht das nicht früher?
Nein, leider. Und bringen Sie bitte einen Ausweis mit: Ihren Pass oder den Personalausweis. Aber noch eine Frage: Brauchen Sie auch eine neue PIN?
Nein, jetzt weiß ich die Nummer wieder. Aber leider zu spät.`,
      },
      {
        id: 'k5-1.47',
        title: '1.47',
        audioSrc: '/a2.1_1.47.mp3',
        text: `Ja, bitte?
Ich möchte einen Diebstahl melden. Man hat mir die Geldbörse gestohlen.
Meine Kollegin ist gleich für Sie da.
Danke.
Guten Tag! Was ist das Problem?
Man hat mir die Geldbörse gestohlen.
Wann und wo ist das passiert?
In der U-Bahn-Station am Karlsplatz, vor ca. 15 Minuten.
Da müssen wir ein Protokoll machen. Ihr Name?
Lars Ziegler.
Ziegler mit i e?
Ja.
Haben Sie einen Ausweis dabei?
Nein, der ist auch in der Geldbörse.
Was war denn alles drin?
Mein Personalausweis, die Bankkarte, die Kreditkarte, der Führerschein und ungefähr 150 Euro.
Wie ist das passiert?
Ich bin aus der U-Bahn ausgestiegen, aus der U1. Und da waren viele Leute. Jemand hat an meiner Jacke gezogen und ist gleich weggelaufen.`,
      },
      {
        id: 'k5-1.48',
        title: '1.48',
        audioSrc: '/a2.1_1.48.mp3',
        text: `Könnte ich mal telefonieren, bitte?
Könntest du mir bitte helfen?
Gib mir bitte kurz dein Buch.
Könnten Sie das bitte fertig machen?
Kannst du bitte die Musik ausmachen?
Könntet ihr bitte zu mir kommen?`,
      },
      {
        id: 'k5-1.49',
        title: '1.49',
        audioSrc: '/a2.1_1.49.mp3',
        text: `Könnte ich mal telefonieren, bitte?
Könntest du mir bitte helfen?
Gib mir bitte kurz dein Buch.
Könnten Sie das bitte fertig machen?
Kannst du bitte die Musik ausmachen?
Könntet ihr bitte zu mir kommen?`,
      },
      {
        id: 'k5-1.50',
        title: '1.50',
        audioSrc: '/a2.1_1.50.mp3',
        text: `Fff, meine Füße tun weh, wir sind schon so viel gelaufen. Was machen wir jetzt?
Wir wollten doch auch zur Universität. Nehmen wir einfach die U-Bahn.
Ach, fahren wir doch lieber mit der Straßenbahn, da sieht man auch was.
Ja, okay. Da vorne bei der Oper ist eine Haltestelle.
Können wir bis zur Uni fahren?
Nicht ganz, wir fahren den Ring entlang und beim Parlament müssen wir aussteigen.
Ring?
Die Ringstraße. Hören wir einfach rein in die App. Die Ringstraße ist die schönste Straße von Wien. An der Ringstraße stehen viele wichtige Gebäude. Fast alle sind in den Jahren zwischen 1850 und 1880 entstanden. Die Staatsoper wurde 1869 eröffnet. Die Architekten waren … Siehst du den kleinen Park? Ich glaube, das ist der Burggarten.
Burgring.
An der Ringstraße stehen auch die beiden großen Museen, das Kunsthistorische und das Naturhistorische. Hinter dem Maria-Theresien-Platz ist das neue Museumsquartier.
Da können wir morgen hingehen, ins Museumsquartier. Und der große Platz da, guck mal, das muss der Heldenplatz sein. Davon habe ich schon gelesen. Möchtest du die Informationen hören?
Nein, ich schaue einfach.
Ring, Volkstheater.
Da rechts ist der Volksgarten.
Ahh, da ist der. Da gehen wir heute Nacht hin, in die Clubdisco.
Genau.
Parlament, Rathaus.
Oh, wir müssen aussteigen. Dann gehen wir durch den Rathauspark zur Universität. Das ist nicht weit.`,
      },
      {
        id: 'k5-1.51',
        title: '1.51',
        audioSrc: '/a2.1_1.51.mp3',
        text: `Man hört und liest immer wieder, dass man in Wien sehr, sehr gut leben kann. Mara, finden Sie das auch?
Das kann ich nicht sagen. Ich wohne schon sehr lange in Wien und habe nie in einer anderen Großstadt gelebt. Das Leben hier in Wien ist wirklich gut. Das Wasser ist gut, ich muss nie Wasser in Flaschen kaufen. Die Stadt ist sauber. Die U-Bahn, die Straßenbahnen und die Busse funktionieren gut.
Gibt es auch negative Dinge? Was finden Sie nicht so gut?
Hm, in der Innenstadt sind zu viele Touristen, fast 8 Millionen pro Jahr, hab‘ ich gehört. Viele Leute vermieten deshalb ihre Wohnungen an Besucher und die Mieten werden immer teurer. Und im Winter ist das Wetter nicht so angenehm: Es gibt viel Wind und oft Nebel. Aber ich bin sehr gern Wienerin!
Vielen Dank. Und Sie, Filip, stimmen Sie zu, dass man in Wien sehr gut leben kann?
Ja, ich lebe jetzt schon 10 Jahre hier und möchte nicht mehr weggehen.
Warum sind Sie nach Wien gekommen?
Ich habe eine Stelle bei der UNO bekommen. Ich finde, Wien ist jetzt internationaler als vor 10 Jahren. Das gefällt mir. Und es gibt gute Schulen für meine Kinder.
Was gefällt Ihnen nicht so gut?
Ich denke, viele Leute in Wien sind nicht zufrieden. Sie sehen die Dinge immer nur negativ. Das verstehe ich nicht.
Vielen Dank.`,
      },
    ],
  },
  {
    id: 'a2.1-kapitel-6',
    title: 'Kapitel 6: Arbeitswelten',
    level: 'A2.1',
    lessons: [
      {
        id: 'k6-1.52',
        title: '1.52',
        audioSrc: '/a2.1_1.52.mp3',
        text: `Du hast ja noch gar nichts von der Fahrt nach Köln erzählt. Wie war’s mit deiner Klasse?
Es war anstrengend, aber gut. Ich bin ja gern mit den Schülern unterwegs, es ist so anders als in der Schule. Aber vorher muss man alles organisieren …
Ich weiß, das machst du nicht gern. Du bist lieber in der Klasse.
In der Klasse und draußen. Am liebsten mache ich mit den Schülern Projekte. Das macht ihnen Spaß, sie arbeiten selbst und ich kann sie beraten. Da lernen sie auch am meisten. Aber …
Aber was?
Die Schule beginnt viel zu früh am Morgen. Um 8:00 Uhr sind die Schüler noch nicht wach. Das ist einfach blöd, für die Schüler und die Lehrer. Aber wenigstens muss ich meistens nicht am Wochenende arbeiten wie du.
Na ja, der letzte Monat war schon stressig. Diese Baustelle ist einfach schwierig, aber das Haus muss in drei Monaten fertig sein. Ich muss da die Termine einhalten. Das nervt manchmal, klar, aber es ist einfach so.
Letzten Samstag hast du den ganzen Tag gearbeitet. Das finde ich immer schade.
Das passiert nicht oft, das finde ich überhaupt nicht schlimm. Ich kann ja dann an einem anderen Tag später beginnen oder ganz frei machen.
Du schon, aber ich nicht. Wir haben so wenig Zeit zusammen.
Wenn dieses Haus fertig ist, dann wird es wieder besser. Und wir haben den Urlaub. Ich kann dieses Jahr drei Wochen am Stück freimachen und habe dann immer noch zwei Wochen in diesem Jahr. Na ja, deine Ferien sind natürlich länger.
Ist ja schon gut. Ich weiß ja, dass alle denken, wir Lehrer haben zu viel Urlaub und Ferien.
Egal, ich wollte dich nur ein bisschen ärgern. Und ich mag meinen Job ja, aber ich mag es einfach nicht, wenn ich auf einer Baustelle die Arbeit von anderen kontrollieren muss. Das ist mega stressig, da gibt es oft Probleme. Zu den Behörden gehen und verhandeln, das braucht Zeit und Geduld. Das macht mir eigentlich Spaß.
Du, sag mal, wann …`,
      },
      {
        id: 'k6-1.53',
        title: '1.53',
        audioSrc: '/a2.1_1.53.mp3',
        text: `Wir dürfen den Zug nach Wiesbaden nicht verpassen, die Firma Berg ist ein wichtiger Kunde. Hast du die Fahrkarten gekauft?
Puh, das habe ich komplett vergessen. Ich habe gestern nur an der Präsentation gearbeitet und nicht mehr an die Fahrkarten gedacht.
Du hast doch die App. Kauf schnell die Karten und reservier uns zwei Sitzplätze. Die Züge sind immer sehr voll.
Mist, mein Akku ist fast leer. Komm, wir kaufen sie am Automaten.
Oje, bei den Automaten stehen aber viele Leute.
Schau, am Schalter ist nichts los. Und ich schreibe noch schnell Isa, dass ich heute Abend nicht da bin und erst morgen wieder nach Hause komme. Ich habe es ihr heute Morgen nicht gesagt.
Hast du auch vergessen, wohin wir heute fahren?
Ich glaube, zur Firma Wiesbaden in Berg.
Haha. Oh, wir sind ja schon dran.`,
      },
      {
        id: 'k6-1.54',
        title: '1.54',
        audioSrc: '/a2.1_1.54.mp3',
        text: `Guten Morgen.
Guten Morgen, zwei Fahrkarten nach Wiesbaden, bitte.
Gerne. Wann möchten Sie fahren?
Jetzt gleich, um halb 10.
Der nächste Zug fährt um 9:37 Uhr auf Gleis 5. Einfach oder hin und zurück?
Hin und zurück, bitte. Fährt der Zug direkt oder müssen wir umsteigen?
Sie müssen in Mannheim umsteigen, um 11:33 Uhr kommen Sie in Wiesbaden an. Und wann möchten Sie zurückfahren?
Morgen, am besten so um neun.
9:02 Uhr? Ankunft in Stuttgart 11:08 Uhr, umsteigen in Frankfurt.
Ja, das ist gut.
Möchten Sie auch Plätze reservieren?
Ja, bitte.
Fahren Sie erste oder zweite Klasse?
Zweite Klasse.
Wo möchten Sie sitzen? Gang oder Fenster?
Zwei Plätze nebeneinander, bitte.
Gut. Haben Sie beide eine BahnCard?
Ich habe keine. Und du, Andreas?
Ich auch nicht.
Das macht dann 204 Euro für beide. Zahlen Sie mit Kreditkarte?
Ja, bitte.
Hier sind Ihre Tickets … und der Beleg. Vielen Dank und eine gute Reise.
Danke. Auf Wiedersehen. Jetzt aber schnell zum Zug.
Kein Stress. Wir haben noch drei Minuten.`,
      },
      {
        id: 'k6-1.55',
        title: '1.55',
        audioSrc: '/a2.1_1.55.mp3',
        text: `So, endlich Feierabend.
Das ist doch gut gelaufen heute, oder?
Ja, ich bin ziemlich zufrieden. Und jetzt gehen wir erst mal zum Hotel.
Ja, find‘ ich gut. Aber schauen wir doch mal, was hier heute Abend so los ist.
Also, was ist los in Wiesbaden … Hier, Rheintheater Wiesbaden, Der Besuch der alten Dame.
Hä? Was ist das?
Wie? Das kennst du nicht? Ein Theaterstück von Friedrich Dürrenmatt. Kennst du den etwa auch nicht?
Doch, den Namen hab‘ ich schon mal gehört. Aber heute Abend ins Theater? Nee, David, also wirklich nicht. Wir können doch ein bisschen Sport machen. Ich such‘ mal ein Fitness-Studio. Hier, das sieht doch nicht schlecht aus: Fit plus, auch für Tagesgäste, und hier schreiben sie „professionelle Trainer“.
Aber das sagen doch alle Studios. Ich bin wirklich zu müde für Sport. Da mache ich lieber noch ein bisschen Kultur. Wir können doch mal in eine Ausstellung gehen, Deutsche Malerei von Max Ernst bis Gerhard Richter.
Geöffnet von 10 bis 17 Uhr! Die haben schon geschlossen. Hm, dann eher ein Konzert. Ah, hier, schau mal, Konzerte, Musik, Namika und ihre Band. Das klingt gar nicht schlecht. Vielleicht gibt es noch Tickets.
Namika? Nee, die mag ich nicht. Wollen wir nicht einfach nur was essen gehen?
Na gut, gehen wir erst mal essen. Restaurants gibt‘s ja genug. Und dann gehen wir in einen Club.
Ja, das machen wir. Ich hab‘ auch schon eine Idee.`,
      },
      {
        id: 'k6-1.56',
        title: '1.56',
        audioSrc: '/a2.1_1.56.mp3',
        text: `einem – ihren – dem – einen – unseren – im – deinem`,
      },
      {
        id: 'k6-1.57',
        title: '1.57',
        audioSrc: '/a2.1_1.57.mp3',
        text: `1. Der Mann von Marlies hilft im Geschäft mit. 
2. Manchmal fährt Marlies mit dem Auto nach Memmingen. 
3. Mit seinem neuen Lastwagen fährt Markus in andere Länder. 
4. Seinen schönen Lastwagen möchte er nicht mehr gegen den alten Job tauschen.`,
      },
      {
        id: 'k6-1.58',
        title: '1.58',
        audioSrc: '/a2.1_1.58.mp3',
        text: `Firma IT Perfekt, mein Name ist Christina Mönch. Was kann ich für Sie tun?
Äh ja, hallo, kann ich Herrn Weis sprechen?
Wie ist denn Ihr Name, bitte?
Lindner, Lars Lindner.
Einen Moment, bitte. Ich verbinde. Tut mir leid, Herr Lindner, Herr Weis ist heute krank.
Ach so.
Kann ich Ihnen vielleicht weiterhelfen?
Ah ja, also, wir haben hier ein Computerproblem im Laden. Du, Manni, sag mal, was ist noch mal mit den Computern los?
Das Rechnungsprogramm läuft nicht auf den neuen Computern.
Ja, also, das Rechnungsprogramm läuft nicht auf den neuen Computern. Herr Weis hat gesagt, er kommt vorbei, wenn es Probleme gibt. Aber jetzt ist er ja nicht da!
Gut, dann gebe ich Ihnen jetzt mal die Telefonnummer von einem anderen Kollegen im Außendienst.
Ja, in Ordnung.
Haben Sie etwas zu schreiben?
Äh, Moment, gleich. So, jetzt.
Also, die Nummer von Herrn Petri ist 0162 – 901 301 492. Er kann sicher auch …
Ja, ja, hab‘ ich notiert. Also, tschüs.
Wiederhören.`,
      },
      {
        id: 'k6-1.59',
        title: '1.59',
        audioSrc: '/a2.1_1.59.mp3',
        text: `Firma IT Perfekt, mein Name ist Christina Mönch. Was kann ich für Sie tun?
Ja, guten Tag. Mein Name ist Sascha Klein. Kann ich bitte mit Herrn Weis sprechen?
Einen Moment, ich verbinde. Tut mir leid, Herr Klein, Herr Weis ist heute krank. Kann ich Ihnen vielleicht weiterhelfen?
Ja, also gut. Wir haben hier bei uns im Laden ein Problem mit der neuen Computeranlage. Herr Weis hat gesagt, er kann vorbeikommen, wenn es Probleme gibt.
Gut, dann gebe ich Ihnen jetzt mal die Telefonnummer von einem anderen Kollegen im Außendienst. Haben Sie etwas zu schreiben?
Äh, ja.
Also, die Nummer von Herrn Petri ist 0162 – 901 301 492. Er kann sicher auch noch heute bei Ihnen vorbeikommen und das Problem dann hoffentlich lösen.
Sehr gut. Ich wiederhole noch mal die Nummer: 0162 – 901 301 492.
Ja, genau.
Super, vielen Dank.
Gerne. Auf Wiederhören.
Auf Wiederhören.`,
      },
      {
        id: 'k6-1.60',
        title: '1.60',
        audioSrc: '/a2.1_1.60.mp3',
        text: `Gut gesagt: Rückmeldung geben
Ach so!
Ja, in Ordnung.
Ah, ja.
Also gut.`,
      },
      {
        id: 'k6-1.61',
        title: '1.61',
        audioSrc: '/a2.1_1.61.mp3',
        text: `Lied “Alles, was zählt” von Namika`,
      },
      {
        id: 'k6-1.62',
        title: '1.62',
        audioSrc: '/a2.1_1.62.mp3',
        text: `Und, habt ihr schon alle Geschenke für Weihnachten?
Was, jetzt schon? Nein! Wir haben doch noch drei Wochen Zeit.
Ach ja, aber die Zeit ist schnell vorbei … Letztes Jahr ist mir ja was passiert, das glaubt ihr nicht.
Echt? Was denn? Erzähl doch mal.
Ja, also, das war so. Ich war – wie immer – viel zu spät dran mit den Geschenken. Das Wetter war ganz schlecht, kalt und es hat geschneit, aber ich musste los.
Einen Tag vor Weihnachten noch schnell in die Stadt. Mann, ich sag euch, da war was los! Ich war wirklich nicht der Einzige! Da waren so viele Leute und alle haben auch noch ein Geschenk gesucht … Das Schlimme war, dass ich gar keine Idee hatte, was ich meiner Mutter schenken soll. Ich bin also hierhin und dorthin gegangen und habe dann am Schluss ein tolles Buch gefunden. Eines über die Berge mit schönen Fotos und interessanten Texten und so. Das war ein super Geschenk für meine Mutter! Also bin ich an die Kasse gegangen und habe es bezahlt. Das Buch war echt schwer und nach der langen Suche hatte ich Hunger und Durst. Ich habe in einer Pizzeria schnell etwas gegessen und getrunken. Dann ist mir eingefallen, dass ich auch noch kein Geschenk für meinen Bruder habe. Also bin ich noch mal los, war in vielen Geschäften und habe ihm am Ende ein T-Shirt gekauft. Dann bin ich nach Hause gefahren. Tja, und zu Hause habe ich gemerkt, dass ich das Buch irgendwo vergessen habe.
Oh nein! So was Blödes!
Das darf doch nicht wahr sein! Und, hast du es zurückbekommen?
Tja, die Geschäfte hatten alle schon zu, da konnte ich nicht mehr anrufen. Dann habe ich bei der Pizzeria angerufen – aber auch da war keiner mehr! Und es war ein Tag vor Weihnachten!!!
Und dann?
Dann hat es plötzlich an der Tür geklingelt. Ich mache auf und da steht meine Nachbarin mit einer Tüte in der Hand und sagt: „Ist das Ihr Buch?“
Was, echt? Wie geht denn das?
Ja, lustig, oder? Ich habe die Tüte einfach vor der Haustür vergessen. Ich habe sie wohl auf den Boden gestellt, weil ich den Haustürschlüssel gesucht habe.`,
      },
      {
        id: 'k6-1.63',
        title: '1.63',
        audioSrc: '/a2.1_1.63.mp3',
        text: `Also, wie ist das jetzt mit dem Picknick? Wann können wir das denn machen?
Also, ich finde am Samstag um 11:00 Uhr ist eine gute Zeit. Da können wir einen Brunch machen.
Ich weiß nicht, am Samstag müssen bestimmt viele noch einkaufen und so. Wollen wir uns nicht lieber am Sonntag um 11:00 Uhr treffen?
Ja, da hast du recht. Sonntag finde ich auch gut.
Okay, und wer bringt was mit?
Also, ich denke, jeder bringt etwas zu trinken für sich selbst mit und das Essen teilen wir auf.
Ja, das finde ich gut.
Okay, dann kaufe ich Käse.
Mh, lecker! Aber ich denke, wir müssen das nicht genau festlegen. Jeder bringt einfach irgendetwas mit und alle dürfen davon essen.
Aber dann haben wir am Ende fünf Mal Nudelsalat!
Nein, das glaube ich nicht. Es bringt doch immer jeder was anderes mit.
Ja, okay, wenn du meinst. Wie machen wir das mit Tellern, Gläsern oder Bechern? Soll das auch jeder für sich selbst mitbringen?
Ja, das find‘ ich gut. Und Decken oder Kissen.
Super, dann haben wir alles. Ich freue mich schon! Ach, wo treffen wir uns eigentlich?
Ach so, ja. Hm … Am Kiosk im Park? Den kennt doch jeder.
Ja, das ist eine gute Idee.
Ja, so machen wir’s.`,
      },
    ],
  },
  {
    id: 'a2.2-kapitel-7',
    title: 'Kapitel 7: Ganz schön mobil',
    level: 'A2.2',
    lessons: [
      {
        id: 'k7-2.1',
        title: '2.1',
        audioSrc: '/a2.2_2.1.mp3',
        text: `1
Ah, super, die U-Bahn kommt gleich. Am Max-Weber-Platz steige ich dann in die Tram.
2
Und jetzt noch zum Verkehr: Es ist immer noch viel los auf den Straßen. Am Isartor nach einem Unfall Stau in alle Richtungen. Auf dem mittleren Ring …
So ein Mist! Wo fahr‘ ich denn jetzt am besten? Komm, Navi, sag mir mal schnell einen besseren Weg. Jetzt rechts abbiegen. Danach in 50 Metern links abbiegen.
Na, hoffentlich geht das dann schneller.
3
Nächster Halt: “Am Gasteig”.
4
Wie immer! Leon ist echt nie pünktlich. Ich rufe ihn jetzt mal an. Das Konzert geht ja gleich los. Die Nummer ist vorübergehend nicht erreichbar. The Number you have dialed …
5
Geht es hier nie weiter? Warum fahren die nicht? Ist das nervig! Immer ist so viel Verkehr und immer steh‘ ich im Stau, wenn ich es eilig habe. Jetzt fahrt doch mal, Mensch! Das gibt es doch nicht! Halloooo?!?
6
Jetzt aber schnell. Hoffentlich schaffe ich es noch. Tamara ist bestimmt sauer.`,
      },
      {
        id: 'k7-2.2',
        title: '2.2',
        audioSrc: '/a2.2_2.2.mp3',
        text: `Da bist du ja endlich! War so viel Verkehr?
Ja, total. Und am Isartor war auch noch ein Stau.
Und was hast du dann gemacht?
Ich habe ja ein Navi. Das hat einen anderen Weg gefunden.
Und, war der andere Weg schneller?
Ja, schon. Aber dann hab‘ ich keinen Parkplatz gefunden.
Oh, und wo stehst du jetzt?
Im Parkhaus. Und bei dir? Hat alles geklappt?
Ja, keine Verspätung bei der U-Bahn. Und die Straßenbahn ist auch gleich gekommen.
Ah, gut. Das nächste Mal fahre ich auch nicht mit dem Auto.
Komm, jetzt müssen wir uns wirklich beeilen.
Oh ja, du hast recht. Das Konzert beginnt gleich.`,
      },
      {
        id: 'k7-2.3',
        title: '2.3',
        audioSrc: '/a2.2_2.3.mp3',
        text: `Gut gesagt: Sie sind ungeduldig.
Jetzt steht der Zug schon eine halbe Stunde! Mensch, wann geht es weiter?
Wird die blöde Ampel denn nie grün!? Ist das nervig! Das dauert ja ewig!`,
      },
      {
        id: 'k7-2.4',
        title: '2.4',
        audioSrc: '/a2.2_2.4.mp3',
        text: `Hallo Meike!
Hallo Jana! Super, dass du nach München kommst. Und natürlich kannst du bei mir übernachten, dann haben wir mehr Zeit.
Oh, super, das freut mich!
Du kommst mittags an, oder?
Ja, warte kurz … Der Zug kommt um 11:37 Uhr an.
Okay, da muss ich leider noch arbeiten. Aber du kannst einfach allein zu mir kommen. Den Wohnungsschlüssel gebe ich der Nachbarin, Frau Schröter. Die ist immer da.
Cool, danke dir. Sag mal, wie komme ich noch mal am schnellsten zu dir? Letztes Mal sind wir am Bahnhof rechts gegangen, oder?
Ja, genau, du gehst einfach aus dem Bahnhof raus und dann am Kaufhaus vorbei. Hinter dem Kaufhaus gehst du an der zweiten Straße links und dann bis zum Park. Du gehst dann einfach durch den Park, immer geradeaus. Am Ende vom Park ist schon meine Straße. Die Hausnummer 12 ist gegenüber vom Park.
Okay, wie lange dauert das?
Zu Fuß brauchst du ungefähr zehn Minuten. Hast du viel Gepäck?
Nein, nur einen Rucksack. Das ist kein Problem. Und wann kommst du nach Hause?
Ich hoffe, dass ich um halb zwei da sein kann. Dann können wir noch was essen gehen, okay?
Ja, super. Bis Montag also.
Ja, bis Montag.`,
      },
      {
        id: 'k7-2.5',
        title: '2.5',
        audioSrc: '/a2.2_2.5.mp3',
        text: `1. Parkhaus
2. Kundenservice
3. Führerschein
4. Verkehrsmittel
5. Wohnungsschlüssel
6. Stadtbesichtigung
7. Platzreservierung
8. Wegbeschreibung`,
      },
      {
        id: 'k7-2.6',
        title: '2.6',
        audioSrc: '/a2.2_2.6.mp3',
        text: `Eine Geschichte aus dem Zug? Ja, da weiß ich was. Das kennt ja jeder: Man sitzt im Zug, möchte lesen oder arbeiten, aber es geht nicht, weil zum Beispiel eine lustige und laute Reisegruppe im Zug ist oder weil jemand laut telefoniert – wie die Geschäftsfrau letzte Woche im Zug. Sie hat sehr laut telefoniert und über Details wie Zahlen, Probleme in der Firma mit Geschäftspartnern oder auch mit Kollegen gesprochen. Alle im Abteil konnten und mussten mithören. Nach einiger Zeit hat die Geschäftsfrau plötzlich gesagt: „Ach, entschuldige, ich muss jetzt Schluss machen. Ich schreibe dir alles andere in einer Mail.“ Mein Nachbar hat geklatscht, ich habe sofort mitgemacht und dann haben fast alle Leute im Wagen geklatscht. Ich glaube, so schnell telefoniert die Frau nicht mehr laut im Zug …`,
      },
      {
        id: 'k7-2.7',
        title: '2.7',
        audioSrc: '/a2.2_2.7.mp3',
        text: `Eine Zug-Geschichte von mir? Ach ja. Ich fahre viel mit dem Zug: Ich pendle jeden Morgen nach Frankfurt zur Arbeit. Einmal war ich morgens sehr spät dran. Ich hatte es eilig und der Zug war schon am Gleis und sollte gleich losfahren. Ich bin, so schnell ich konnte, zum Zug gelaufen und hineingesprungen. Geschafft! Direkt hinter mir sind die Türen zugegangen und der Zug ist losgefahren. Ich habe mich auf einen Platz gesetzt und ein Buch gelesen. An der dritten oder vierten Haltestelle habe ich aus dem Fenster gesehen. Wo war ich? Ich habe den Bahnhof noch nie gesehen! Ich habe meinen Nachbarn gefragt: „Entschuldigung, ist das der Zug nach Frankfurt?“ – „Frankfurt? Nein, der Zug fährt nach Hamburg.“ Ich bin in den falschen Zug gestiegen! An dem Tag bin ich zwei Stunden zu spät zur Arbeit gekommen.`,
      },
      {
        id: 'k7-2.8',
        title: '2.8',
        audioSrc: '/a2.2_2.8.mp3',
        text: `Letzte Woche war ich mal wieder mit der S-Bahn auf dem Weg zur Arbeit. Am Ostbahnhof hat der Zug sehr lange gestanden und die Türen sind nicht zugegangen. Ich war nervös, denn ich hatte einen wichtigen Termin. Was war da schon wieder los??? Dann ist eine Durchsage gekommen und alle im Zug mussten lachen, ich auch. Die Durchsage war ungefähr so: „Gehen Sie bitte aus der Tür, wir können sonst nicht weiterfahren! Wenn Sie auf einen Freund warten möchten, fahren Sie bitte mit dem Auto!“ Das war lustig, aber zu meinem Termin bin ich an diesem Tag trotzdem zu spät gekommen.`,
      },
      {
        id: 'k7-2.9',
        title: '2.9',
        audioSrc: '/a2.2_2.9.mp3',
        text: `Eine lustige Zug-Geschichte? Ja, also, ich war mal im ICE von Augsburg nach Berlin unterwegs. Alles war in Ordnung. Auf einmal hat es eine Durchsage gegeben: “Sehr geehrte Fahrgäste, im Moment haben wir leider Verspätung. Wir kommen 20 Minuten später in Berlin an. Wir möchten aber gerne pünktlich sein, also fahren wir jetzt schneller und hoffen, dass wir doch noch pünktlich ankommen.” Kurz vor dem Bahnhof in Berlin ist dann die nächste Durchsage gekommen: “Sehr geehrte Fahrgäste, wir sind jetzt 10 Minuten zu früh in Berlin. Leider ist unser Gleis noch nicht frei. Wir kommen deshalb auf Gleis 7 an und nicht auf Gleis 15.” Alle Leute im Zug haben gelacht.`,
      },
    ],
  },
  {
    id: 'a2.2-kapitel-8',
    title: 'Kapitel 8: Gelernt ist gelernt!',
    level: 'A2.2',
    lessons: [
      {
        id: 'k8-2.10',
        title: '2.10',
        audioSrc: '/a2.2_2.10.mp3',
        text: `Finn Steger
Ich kann gut schwimmen, ich schwimme super schnell. Ulli hat mir Schwimmen gezeigt. Ulli ist die Mama von meiner Freundin Clara. Ich wollte so gut schwimmen wie Clara. Ich habe es zuerst mit Papa probiert. Das hat keinen Spaß gemacht, aber mit Ulli habe ich Spaß im Wasser. Sie hat mir gezeigt, wie es geht. Am Anfang wollte ich nicht ins Wasser springen, ich hatte ein bisschen Angst. Aber dann habe ich es einfach so wie Clara gemacht. Clara springt auch immer ins Wasser. Es ist total leicht und ich kann es jetzt echt gut.`,
      },
      {
        id: 'k8-2.11',
        title: '2.11',
        audioSrc: '/a2.2_2.11.mp3',
        text: `Moritz Ambach
Vor fünf Jahren war ich beruflich in China und weil mich das Land so fasziniert hat, wollte ich unbedingt Chinesisch lernen. Zuerst habe ich allein gelernt, also mit so einem Computerprogramm. Das war aber absolut nichts für mich, so allein vor dem Computer ohne Lehrer und andere Leute. Also habe ich einen Kurs gemacht. Und dann noch einen und noch einen. Jetzt mache ich den zehnten Kurs. Es macht Spaß, aber es ist nicht leicht, besonders die Aussprache und die Schrift natürlich. Da heißt es: üben, üben, üben …`,
      },
      {
        id: 'k8-2.12',
        title: '2.12',
        audioSrc: '/a2.2_2.12.mp3',
        text: `Miriam Polat
Ich wollte schon immer einen Garten haben. Vor drei Jahren sind wir in dieses Viertel gezogen und da gibt es die „Gartenfreunde“, also einen Gemeinschaftsgarten. Alle Mitglieder pflanzen und pflegen einen Teil gemeinsam und alle haben auch einen kleinen Teil für sich allein. Ich habe zuerst gedacht, das ist alles ganz leicht und habe einfach Blumen und Gemüse gepflanzt. Im ersten Jahr ist viel kaputt gegangen. Ich habe dann viel in Büchern gelesen und auch immer wieder die anderen gefragt. Im zweiten Jahr war es dann schon besser und jetzt sieht mein Gartenteil ziemlich gut aus.`,
      },
      {
        id: 'k8-2.13',
        title: '2.13',
        audioSrc: '/a2.2_2.13.mp3',
        text: `Gut gesagt: Ich verstehe das nicht.
Oh je! Ich kapier das nicht!
Ich check‘s nicht! Kannst du es mir noch mal erklären?
Ich blick‘s nicht! Ich lerne besser morgen weiter.`,
      },
      {
        id: 'k8-2.14',
        title: '2.14',
        audioSrc: '/a2.2_2.14.mp3',
        text: `Frau Duda, Sie sind freiberufliche Übersetzerin. Erzählen Sie doch mal von Ihrer Arbeit. Was für Aufträge gibt es da?
Ich bekomme ganz unterschiedliche Aufträge. Mal übersetze ich Dokumente für Behörden, mal Verträge für Firmen, mal Werbetexte. Das ist wirklich sehr unterschiedlich.
Welche Aufträge machen Ihnen denn am meisten Spaß?
Filme. Ich habe gerade die Übersetzung von einem Kinderfilm fertig gemacht. Der ist wirklich süß!
Filme, das klingt ja interessant. Was für ein Filmprojekt möchten Sie denn gern mal übersetzen?
Einen Film mit meinem Lieblingsschauspieler. Bradley Cooper in einem lustigen Film mit viel Herz und Schmerz.
Wenn wir schon bei Filmen sind: Welcher deutsche Film gefällt Ihnen denn am besten?
Das kann ich gar nicht so genau sagen, viele Filme sind gut. Vielleicht „Das Leben der Anderen“. Den habe ich öfter gesehen.
Und wie lange dauert es, wenn Sie einen Film übersetzen? Mit was für einem Film sind Sie am schnellsten fertig?
Am schnellsten? Ganz einfach: ein Stummfilm, ganz ohne Worte. Nein, im Ernst: Wenn eine Übersetzung gut werden soll, dann braucht man Zeit. Schnell ist nicht immer auch gut.`,
      },
      {
        id: 'k8-2.15',
        title: '2.15',
        audioSrc: '/a2.2_2.15.mp3',
        text: `1a. Ich habe einen neuen Auftrag. 
1b. Ich hatte schon viele Aufträge. 
2a. Das war ein schöner Tag. 
2b. Ich wünsche dir schöne Tage. 
3a. Benno ist ein guter Freund. 
3b. Ich besuche meine Freunde. 
4a. Kommst du heute Abend? 
4b. Ich mag die warmen Abende im Sommer. 
5a. Wo warst du im Urlaub? 
5b. Die Urlaube am Meer waren immer schön. 
6a. “machen” ist ein wichtiges Verb. 
6b. Sie hat heute viele neue Verben gelernt.`,
      },
      {
        id: 'k8-2.16',
        title: '2.16',
        audioSrc: '/a2.2_2.16.mp3',
        text: `1. Der letzte Arbeitstag! Heute Abend beginnt der Urlaub! 
2. Komm am Montag und unterschreib den Vertrag. 
3. Bleib doch noch und hilf mir! 
4. Gib mir bitte mehr Zeit für den Auftrag.`,
      },
      {
        id: 'k8-2.17',
        title: '2.17',
        audioSrc: '/a2.2_2.17.mp3',
        text: `Schönen Nachmittag, liebe Hörerinnen und Hörer. Ich begrüße Sie zur heutigen Sendung “In unserer Stadt”. Ich habe heute einen Gast: Andreas Stamm vom Verein “Nachbarn für Nachbarn”.
Guten Tag!
Herr Stamm, was machen Sie denn im Verein?
Also, bei “Nachbarn für Nachbarn” gibt es viele Projekte, eigentlich für jedes Alter und viele unterschiedliche Interessen. Ich bin im Repair-Café aktiv. Ich organisiere die Treffen dort und helfe auch bei den Reparaturen.
Und was ist das genau, ein Repair-Café?
Also, das ist ein super Projekt. Wie viele Geräte haben Sie denn zum Beispiel zu Hause, die ein bisschen kaputt sind und die Sie eigentlich wegwerfen wollen?
Äh, also, ich weiß nicht genau, aber im Moment ist meine Kaffeemaschine kaputt und …
Ja, sehen Sie. Und Sie haben eben nie gelernt, wie man sie reparieren kann. Wenn Sie in unserem Viertel wohnen, können Sie Ihre Kaffeemaschine zu uns bringen und wir reparieren sie dann – entweder mit Ihnen zusammen oder auch alleine.
Das ist ja toll! Und was kostet das dann?
Die Reparatur selbst kostet nichts. Wenn wir Material dafür brauchen und bestellen, dann müssen Sie das natürlich zahlen. Aber das besprechen wir dann alles gemeinsam.
Klingt super! Kann man denn alles reparieren?
Nein, leider nicht. Aber wir versuchen fast alles. Wenn wir etwas wirklich nicht reparieren können, dann helfen wir bei der Wahl von einem neuen Gerät.
Das ist ein toller Service. Wer kann denn alles bei Ihnen mitmachen?
Im Prinzip jeder. Sie sagen uns, was Sie gut können, und wir kontaktieren Sie dann, wenn wir Ihre Hilfe brauchen.
Und kann man bei Ihnen auch lernen, wie man etwas repariert?
Auf alle Fälle. Wir erklären gern alles und freuen uns über interessierte Nachbarn. Egal, ob Sie Hilfe brauchen oder anbieten: Auf unserer Webseite stehen immer alle Infos.
Dann habe ich noch eine ganz praktische Frage: Wo ist eigentlich das Café?
Das Café ist neben der Sporthalle. Kommen Sie einfach am Dienstag oder Freitag zwischen 17 und 20 Uhr vorbei!
Das klingt toll! Vielen Dank, dass Sie in der Sendung waren.
Gern. Danke, es hat Spaß gemacht.
Jetzt machen wir eine kurze Pause, dann geht es gleich weiter mit unserem …`,
      },
      {
        id: 'k8-2.18',
        title: '2.18',
        audioSrc: '/a2.2_2.18.mp3',
        text: `Hallo, ich möchte euch heute ein Projekt vorstellen. Ich habe das Projekt „Lernkoffer“ gewählt, weil es mir gut gefällt und weil ein Freund von mir aktiv mitmacht.
Nun, was ist das genau, das Projekt „Lernkoffer“?
Freiwillige Erwachsene helfen Schülern und Schülerinnen mit ihrem speziellen Lernkoffer beim Lernen.
Ich möchte drei wichtige Punkte von „Lernkoffer“ vorstellen. Zuerst stelle ich euch das Projekt vor und erkläre, wie es funktioniert. Dann spreche ich über die Gründe, warum es das Projekt gibt, und meine Meinung dazu.
Zum ersten Punkt: Das Projekt funktioniert so: Zusammen mit Schulen haben Freiwillige Lernkoffer für verschiedene Klassen zusammengestellt. Die Freiwilligen nehmen zuerst an einem Wochenendkurs teil, dann können sie mit dem Lernkoffer in die Schulen gehen. Dort helfen sie am Nachmittag Schülern in kleinen Gruppen. Die Schüler können sich vormittags für die Gruppenarbeit anmelden.
Ich gebe euch ein Beispiel: Eine Schülerin war krank und versteht jetzt das Thema im Unterricht nicht. Der Lehrer hat keine Zeit, ihr alles noch mal zu erklären – der oder die Freiwillige aber schon!
Der zweite Punkt: Warum gibt es das Projekt?
Oft sind die Klassen zu groß und der Lehrer oder die Lehrerin kann nicht immer alles so erklären, dass alle es verstehen. Die Freiwilligen unterstützen also die Lehrenden in ihrer Arbeit und erklären am Nachmittag alles noch mal in Ruhe. So bekommen die Schüler und Schülerinnen mehr Zeit zum Lernen und können bei Schwierigkeiten nachfragen. Das ist sehr nützlich und macht allen Spaß.
Und zum dritten Punkt: Was ist wichtig?
Die Lehrenden und Freiwilligen sprechen regelmäßig miteinander. Ich finde diese Gespräche wichtig, denn nur so kann die Arbeit im Projekt erfolgreich sein. Die Schüler und Schülerinnen finden es auf alle Fälle toll.
Mir gefällt besonders, dass im Projekt “Lernkoffer” die schwächeren Schüler und Schülerinnen schnell Hilfe bekommen und wieder mehr Spaß in der Schule haben. Was kann noch wichtiger sein?
Also, kurz gesagt: Das Projekt hilft Schülern und Lehrern und ich hoffe, dass es das Projekt noch viele Jahre lang gibt. Vielen Dank! Habt ihr noch Fragen?`,
      },
    ],
  },
  {
    id: 'a2.2-kapitel-9',
    title: 'Kapitel 9: Sportlich, sportlich',
    level: 'A2.2',
    lessons: [
      {
        id: 'k9-2.19',
        title: '2.19',
        audioSrc: '/a2.2_2.19.mp3',
        text: `Warum machen so viele Leute Sport? Was ist ihre Motivation? Darüber reden wir mit drei sportlichen Personen. Schön, dass ihr da seid. Beginnen wir mit Alina? Wie wichtig ist Sport für dich?
Zuerst einmal danke für die Einladung. Sport ist sehr wichtig für mich, besonders Teamsport. Deshalb spiele ich auch schon 15 Jahre lang Fußball.
Wie wichtig ist dir der Erfolg? Willst du immer gewinnen?
Na klar. Jede Spielerin, jedes Team ist gern erfolgreich und gewinnt gern. Aber wenn wir gut spielen und die Gegnerinnen besser sind und gewinnen, dann ist das eben so. Ich freue mich dann einfach über das gute Spiel.
Wie oft in der Woche ziehst du die Fußballschuhe an? Und hast du noch andere Hobbys?
Na ja, drei Mal in der Woche haben wir Training und am Wochenende ein Spiel.
Bleibt da noch Zeit für was anderes?
Ja, zwei Mal pro Woche gehe ich vor der Arbeit zum Yoga. Mir ist wichtig, dass ich fit und gesund bleibe.
Ein dichtes Programm für Alina. Und wie ist es bei dir, Milan? Wie wichtig ist Sport für dich?
Ziemlich wichtig. Ich surfe gern, das finde ich total spannend. Und ich treffe gern meine Surfer-Freunde. Auf dem Surfbrett denke ich gar nicht mehr an die Arbeit. Der Job ist ganz weit weg. Ich gehe zwei, drei Mal jede Woche nach der Arbeit zum Eisbach.
Zum Eisbach?
Ja, das ist ein kleiner Fluss mitten in München, da kann man gut surfen.
Und sonst? Hast du noch andere Hobbys?
Ja, Kajak fahren. Ich fahre fast an jedem Wochenende. Am liebsten auf wilden Flüssen.
Ist das nicht gefährlich?
Man muss schon aufpassen. Man merkt aber auch, wo die eigene Grenze ist und was man noch trainieren muss. Das gehört zum Sport dazu. Ich will immer besser werden.
Du bist ja sehr viel am Wasser. Was machst du im Winter?
Da gehe ich langlaufen. Ich bin einfach immer gern draußen, in der Natur. Bei jedem Wetter.
Interessant, vielen Dank, Milan. Und du, Saskia? Was ist denn dein Sport?
Tennis. Ich spiele gern und bin in einem Tennisclub. Im Sommer trainiere ich draußen, im Winter in der Halle.
Wie wichtig ist für dich Erfolg?
Na ja. Ich trainiere viel und möchte meine Spiele auch gewinnen. Aber am liebsten spiele ich Doppel mit meiner Partnerin. Zu zweit macht das Spielen und Gewinnen noch mehr Spaß.
Bleibt dir noch Zeit für andere Hobbys?
Nicht viel, aber das ist mir egal. Ich bin in meiner Freizeit gern aktiv, Sport ist für mich einfach wichtig und macht mir viel Spaß. Im Winter gehe ich auch gern langlaufen. Und als Kind bin ich geritten, aber das ist vorbei.
Wir sprechen gleich noch mehr über die Faszination von Sport, aber jetzt zuerst einmal Musik. Was passt da besser als Queen mit We are the Champions.`,
      },
      {
        id: 'k9-2.20',
        title: '2.20',
        audioSrc: '/a2.2_2.20.mp3',
        text: `1
Und jetzt rein damit.
Ohhh, nein.
Doch, doch!
Ja, du schaffst es!
JAAAAAAAA!!!
Tor, Tor! 1 zu 0, endlich!
Das war großartig.
Wahnsinn, ist das gut! Das ist das Tor des Jahres!
Ich glaub‘ es nicht, das ist super!!!
In der 37. Minute schafft es …`,
      },
      {
        id: 'k9-2.21',
        title: '2.21',
        audioSrc: '/a2.2_2.21.mp3',
        text: `2
Das kann doch nicht wahr sein! Die erste Halbzeit war super und dann?! Dann verlieren sie!
Ja, echt blöd! Aber jetzt kann man auch nichts mehr machen.
Ja, eben, jetzt nicht mehr. Aber vorhin, in der zweiten Halbzeit … Die müssen doch besser spielen!
Aber echt! Das ist wirklich eine Katastrophe. So schade nach dem guten Start! Das Spiel war mega schlecht!
Ja, das ist echt schade.
Das nächste Mal klappt es bestimmt.
Ja, vielleicht beim nächsten Mal.
Sicher. Sie sind doch immer noch die Besten.
Ja, ja.`,
      },
      {
        id: 'k9-2.22',
        title: '2.22',
        audioSrc: '/a2.2_2.22.mp3',
        text: `3
Mann, bin ich froh, dass alle Spieler wieder fit sind.
Genau, heute haben wir richtig gute Chancen.
Ich hoffe, dass wir heute gewinnen.
Ja, heute brauchen wir einen Sieg. Bisher hatte die Mannschaft ja nicht so viel Glück.
Ja, hoffentlich schaffen sie es!
Olé, olé, olé, olé, olé …`,
      },
      {
        id: 'k9-2.23',
        title: '2.23',
        audioSrc: '/a2.2_2.23.mp3',
        text: `Gut gesagt: Aussagen verstärken
Das ist super toll!
Das war wahnsinnig gut!
Das finde ich so blöd!
Das Spiel war mega schlecht!`,
      },
      {
        id: 'k9-2.24',
        title: '2.24',
        audioSrc: '/a2.2_2.24.mp3',
        text: `1. reiten 
2. Tore 
3. drei 
4. großartig 
5. Freizeit 
6. langlaufen 
7. Fußball 
8. Helm 
9. schlecht 
10. langweilig`,
      },
      {
        id: 'k9-2.25',
        title: '2.25',
        audioSrc: '/a2.2_2.25.mp3',
        text: `1. Alexandra Maria Lara 
2. Eric Frenzel 
3. Karoline Herfurth 
4. Moritz Bleibtreu 
5. Patrick Lange 
6. Daniel Brühl`,
      },
      {
        id: 'k9-2.26',
        title: '2.26',
        audioSrc: '/a2.2_2.26.mp3',
        text: `Oh, meine Cousine … Hallo Selina!
Hi Amelie, hast du gerade Zeit oder machst du schon wieder Sport?
Klar, ich bin gerade im Fitness-Studio. Aber kein Problem, ich habe Zeit. Und du? Hast du dich endlich im Fitness-Studio angemeldet?
Ähm, nein. Letzte Woche musste ich so viel arbeiten, da war wirklich keine Zeit …
Ach Selina, es ist immer das Gleiche mit dir. Wie lange erzählst du mir jetzt schon, dass du unbedingt mehr Sport machen willst? Das ist doch jetzt mindestens schon ein Jahr her.
Ja, ja, ich weiß. Schlimm, oder? Nächste Woche melde ich mich an, versprochen, Amelie!
Ach komm, ich glaube das nicht mehr. Wollen wir mal zusammen Sport machen? Zu zweit ist es doch einfacher. Da macht man dann wirklich was.
Ich weiß nicht … Du bist so sportlich und ich habe doch gar keine Kondition.`,
      },
      {
        id: 'k9-2.27',
        title: '2.27',
        audioSrc: '/a2.2_2.27.mp3',
        text: `Ach, Quatsch, Selina! Ich habe einen Vorschlag: Wir gehen in den Hochseilgarten. Das macht total viel Spaß. Geht es bei dir am Samstag?
Nein, da habe ich leider keine Zeit.
Wie wäre es mit Sonntag? Komm, das wird lustig!
Ach, ich weiß nicht. Wollen wir nicht lieber im Park spazieren gehen und dann ins Kino? Im Hochseilgarten braucht man bestimmt viel Kondition.
Also, so schlimm kann es im Hochseilgarten nicht sein, der ist ja auch für Kinder. Ich habe eine Idee: Wir gehen in den Hochseilgarten und danach ins Kino. Wollen wir das so machen?
Okay, dann machen wir es so. Aber ich suche den Film aus!
Klar! Mach dir keine Sorgen, wir haben am Sonntag bestimmt viel Spaß!
Gut, bis Sonntag! Ciao.
Ciao, bis dann.`,
      },
      {
        id: 'k9-2.28',
        title: '2.28',
        audioSrc: '/a2.2_2.28.mp3',
        text: `Sankt Peter-Ording an der Nordsee. Wer diesen Namen hört, der denkt an Wasser, Wind und lange Strände. Und vielleicht an den Leuchtturm. Er ist das Symbol von Sankt Peter-Ording. Der Ort ist beliebt bei Urlaubern und Sportlern. Aber viele denken auch an Gesundheit: Die Luft ist hier sehr gut. Viele Leute erholen sich hier von Krankheiten und hoffen, dass sie bald wieder ganz gesund werden.
Aber zuerst ein paar Fakten zum Ort selbst.
Sankt Peter-Ording hat ziemlich genau 4.000 Einwohner. Im Ort gibt es eine Grundschule und die Nordseeschule, eine Gesamtschule mit circa 700 Schülerinnen und Schülern. Außerdem gibt es im Ort 17.000 Betten für Touristen, jedes Jahr kommen circa 400.000 Personen für einen kurzen oder längeren Urlaub hierher.
So weit also die Daten zum Ort. Aber was machen die Touristen hier? Beginnen wir mit den Sportlern.
Die Nordsee und der Wind, das gehört zusammen. Kitesurfer lieben die Strände. Im Sommer bieten mehrere Surfschulen Kurse für Kitesurfer an. Für Anfänger ist es am besten, wenn es nur ein bisschen windig ist. Gute Surfer lieben starken Wind. Dann fahren sie schnell und fliegen sogar über dem Wasser. Manche Surfer sind auch im Herbst und Winter auf dem Meer. Sie lieben es, wenn nur wenige Leute da sind.
Nicht nur Kitesurfer fühlen sich hier wohl. Es gibt Badestrände, man kann im Meer schwimmen oder am Strand und durch die Dünen wandern, laufen oder Fahrrad fahren.
Viele Menschen fahren mit dem Auto in den Ort – zu viele. Dann müssen sie auch noch lange einen Parkplatz suchen. Viel entspannter ist es mit dem Zug. Jede Stunde fahren Züge zwischen Sankt Peter-Ording und Husum. Im Zug kann man auch bequem das Fahrrad mitnehmen. Es fahren jedes Jahr mehr Menschen mit dem Zug, aber noch mehr nehmen das Auto.
Wie gesagt, Sankt Peter-Ording ist nicht nur für Urlauber und sportlich aktive Personen attraktiv. Viele kommen auch hierher, weil sie wieder gesund werden wollen.`,
      },
      {
        id: 'k9-2.29',
        title: '2.29',
        audioSrc: '/a2.2_2.29.mp3',
        text: `Hey, ich hab‘ euch ja lange nicht gesehen. Wart ihr im Urlaub?
Ja, wir sind erst gestern zurückgekommen.
Und? Habt ihr euch gut erholt?
Na ja, wir waren diesmal sehr aktiv. Wir sind eine ganze Woche lang gewandert, von Oberstdorf bis nach Meran, über die Alpen.
Wahnsinn! Das ist doch so weit.
Na ja, 120 km und über 6.000 Höhenmeter, über Berge und Täler.
Uh, das ist bestimmt schrecklich anstrengend.
Na ja, wir waren am Abend schon müde. Aber die Tagestouren waren unterschiedlich lang. Am vierten Tag waren wir fast neun Stunden unterwegs. Das war der längste Abschnitt. Und an zwei Tagen sind wir nur vier bis fünf Stunden gewandert.
Nur 4 bis 5 Stunden? Das ist nichts für mich. Aber euch ist es gut gegangen?
Ja, schon. Ines hatte keine Probleme. Aber ich hatte die letzten drei Tage Schmerzen in den Füßen. Ich habe wirklich gute Wanderschuhe, die habe ich schon lang. Aber eine Woche lang jeden Tag viele Stunden gehen, das war einfach zu viel. Aber dass wir nach jeder Tagestour die Füße in kaltes Wasser gesteckt haben, das hat ein bisschen geholfen.
Na ja, ich war am Abend super müde. Aber ich konnte trotzdem nicht so gut schlafen.
Wo habt ihr denn übernachtet?
Man wandert ja von Hütte zu Hütte. Und Hütten sind nun mal einfach und keine Hotels. Viele Leute schlafen zusammen in einem Raum und ein paar Mal hatten wir nur kaltes Wasser zum Waschen oder Duschen. Aber das Essen war eigentlich immer gut. Vor allem das Frühstück.
Wenn man richtig Hunger hat, dann schmeckt fast jedes Essen. Nach dem Frühstück haben wir Essen für unterwegs mitgenommen. Das musste man am Abend vorher bestellen und bezahlen. Und natürlich haben wir sehr viel zu trinken eingepackt. Da wird der Rucksack schnell sehr schwer.
Stimmt, daran hab‘ ich gar nicht gedacht. Hattest du auch einen schweren Rucksack, Ines?
Klar! Ich habe circa 10 Kilo getragen, Florian etwas mehr. Aber das Tragen war ehrlich gesagt nicht so schlimm. Es war nur unangenehm, wenn es geregnet hat und der Rucksack nass und dadurch schwerer war.
War das Wetter schlecht?
Ja, an den ersten zwei Tagen hat es geregnet. Und dann, am dritten Tag, war auf den Bergen oben die Sonne und unten im Tal waren noch Wolken und Nebel. Das hat so schön ausgesehen! Moment, ich zeig dir ein Foto. Hier, guck!
Oh, das sieht ja wahnsinnig toll aus. Was hat euch am besten gefallen?
Ich war so glücklich, als wir am höchsten Punkt waren, auf 3.000 Metern. Die Aussicht ist dort fantastisch! Die hohen Berge auf allen Seiten, einfach toll! Und ich habe gewusst, dass wir am Abend dann im Tal unten ein Zimmer in einem Gasthaus haben, ein Zimmer für uns beide allein mit Dusche und WC. Das war ein perfekter Tag!
Ja, es war wirklich sehr schön, die Berge rundherum waren so cool. Noch schöner war nur der Moment, als ich Meran gesehen habe. Da habe ich gewusst, dass wir die Tour gut geschafft haben und ich muss nicht mehr weiterwandern.`,
      },
    ],
  },
  {
    id: 'a2.2-kapitel-10',
    title: 'Kapitel 10: Zusammen leben',
    level: 'A2.2',
    lessons: [
      {
        id: 'k10-2.30',
        title: '2.30',
        audioSrc: '/a2.2_2.30.mp3',
        text: `1
Ich wohne mit meiner Frau auf der Hallig Südfall in der Nordsee, weil ich hier arbeite. Südfall ist eine ganz kleine Insel, sie gehört zum Nationalpark Wattenmeer. Ich bin Biologe. Für mich sind die Vögel hier besonders interessant. Es ist oft einsam, denn wir wohnen nur zu zweit hier. Die wichtigsten Personen sind für uns unsere erwachsenen Kinder. Sie leben in Kiel, aber wir sind immer in Kontakt – über Telefon oder sie besuchen uns. Und natürlich sind meine Kollegen vom Nationalpark auch sehr wichtig. Es dürfen nur wenige Touristen auf die Insel, weil sie zum Nationalpark gehört.`,
      },
      {
        id: 'k10-2.31',
        title: '2.31',
        audioSrc: '/a2.2_2.31.mp3',
        text: `2
Unser Hausboot ist einfach gemütlich, die Räume sind nicht hoch und auch nicht besonders groß, aber in unserer Wohngemeinschaft hat natürlich jeder ein eigenes Zimmer. Die Küche und das Bad teilen wir uns. Für uns ist das perfekt, die Atmosphäre ist einfach toll, auch wenn es im Winter ein bisschen kalt ist. Dafür kann man im Sommer die Füße ins Wasser hängen, wenn es heiß ist. Freunde kommen uns oft besuchen, weil sie es interessant finden, wie wir wohnen. Und wir finden es immer schön, wenn wir Besuch haben.`,
      },
      {
        id: 'k10-2.32',
        title: '2.32',
        audioSrc: '/a2.2_2.32.mp3',
        text: `3
Man braucht eigentlich nicht viel. Deshalb wollten meine Freundin und ich ein kleines, einfaches Haus. Wir haben es selbst gebaut. Wir haben genug Platz, es gibt alles, was wir brauchen, aber man muss natürlich gut organisieren. Jede Sache, jeder Gegenstand hat seinen Platz. Man muss immer aufräumen. Viele Leute verstehen nicht, dass wir zusammen auf so wenig Platz leben. Aber meine Freundin ist der wichtigste Mensch in meinem Leben, für mich ist das kein Problem. In ein paar Monaten bekommen wir ein Kind. Ich weiß nicht, wie das wird. Kann man als Familie in so einem kleinen Haus wohnen?`,
      },
      {
        id: 'k10-2.33',
        title: '2.33',
        audioSrc: '/a2.2_2.33.mp3',
        text: `4
Ich lebe mit meiner Familie auf einem alten Bauernhof, weit weg vom Dorf und von der Stadt. Für uns ist das Leben hier schön so, wie es ist. Wir brauchen den Stress und Lärm einer Stadt nicht. Viele Leute denken, dass das Leben hier langweilig ist. Aber ich habe ja den ganzen Tag Arbeit, da wird mir nicht langweilig. Wir haben viele Tiere. Um die müssen wir uns kümmern. Die Nachbarn sind wichtig, wenn man so weit weg vom Dorf lebt. Und wir haben gute Nachbarn in der Umgebung. Jeder hilft dem anderen, wenn er Hilfe braucht.`,
      },
      {
        id: 'k10-2.34',
        title: '2.34',
        audioSrc: '/a2.2_2.34.mp3',
        text: `5
Für mich ist die Wagenburg der ideale Wohnort. Das Leben ist einfach, aber schön. Natürlich ist es auch anstrengend. Man muss zum Beispiel Wasser holen und im Winter ist es ziemlich kalt. Im Sommer sind wir fast immer draußen. Wir machen dann viel zusammen. Wir organisieren auch Konzerte und Kunstprojekte. Die Bewohner sind wie eine große Familie, das ist super. Es ist immer jemand da, wenn man nicht allein sein will und mit jemandem sprechen möchte. Wir essen oft zusammen und wir entscheiden alles gemeinsam.`,
      },
      {
        id: 'k10-2.35',
        title: '2.35',
        audioSrc: '/a2.2_2.35.mp3',
        text: `Gespräch 1
Guten Abend, Herr Olsen.
Oh, hallo, Frau Morena.
Es ist 24 Uhr und die Musik ist sehr laut. Das geht wirklich nicht. Ich muss morgen arbeiten und ich kann bei diesem Lärm nicht schlafen.
Oh, Verzeihung. Das tut mir leid. Ist es schon so spät?
Ja, wie gesagt, Mitternacht.
Ich habe gar nicht auf die Uhr gesehen. Und die Musik ist wohl wirklich ein bisschen zu laut. Ich mache sie gleich leiser.
Okay, danke.
Oder wollen Sie reinkommen und mit uns feiern?
Nein, ich muss früh aufstehen. Also, dann …`,
      },
      {
        id: 'k10-2.36',
        title: '2.36',
        audioSrc: '/a2.2_2.36.mp3',
        text: `Gespräch 2
Ach, Herr Wolny, guten Morgen. Gut, dass ich Sie treffe.
Guten Morgen, Frau Gromer.
Könnten Sie mir einen Gefallen tun?
Ja, gerne.
Wir fahren am Samstag für eine Woche nach Italien. Könnten Sie unsere Blumen gießen?
Kein Problem. Das mache ich gern.
Ach, vielen Dank. Haben Sie kurz Zeit? Dann kommen Sie doch gleich mit rein, dann zeige ich Ihnen alles.
Ja, gut.
Also, die Blumen hier im Wohnzimmer brauchen viel Wasser und diese Pflanze …`,
      },
      {
        id: 'k10-2.37',
        title: '2.37',
        audioSrc: '/a2.2_2.37.mp3',
        text: `Komm, Melly, trink einen Kaffee mit uns.
Ja, gern. Ich brauche eine Pause.
Kennst du Melly? Sie macht ein Semester bei uns.
Jetzt schon! Hi Melly, ich bin Lea. Wo hast du bisher studiert?
In Fribourg.
Spricht man da nicht Französisch?
Französisch und Deutsch. Aber als ich mit sechs in die Schule gekommen bin, da konnte ich nur Französisch.
Warum kannst du dann so gut Deutsch?
Meine beste Freundin ist aus Zürich nach Fribourg gezogen. Wenn ich sie getroffen habe, haben wir meistens Deutsch geredet. Als ich dann 14 war, habe ich die Schule gewechselt. Ich war dann in einer zweisprachigen Schule mit Französisch und Deutsch.
Und hast du manche Dinge nur in der einen oder in der anderen Sprache gemacht?
Das weiß ich nicht so genau … Doch, ich habe immer französische Musik gehört, wenn es mir nicht so gut gegangen ist, wenn ich ein bisschen traurig war.
Wie findest du eigentlich Heidelberg?
Als ich zum ersten Mal hier war, vor ein paar Jahren, da hat es mir super gefallen. Es gefällt mir jetzt auch noch gut. Aber wenn man hier wohnt, dann …`,
      },
      {
        id: 'k10-2.38',
        title: '2.38',
        audioSrc: '/a2.2_2.38.mp3',
        text: `1. Melly kommt aus der Schweiz.
2. Melly und Vera sind Studentinnen.
3. Sie haben ihre Wohnungen getauscht.
4. Vera vermisst ihre Freundinnen.`,
      },
      {
        id: 'k10-2.39',
        title: '2.39',
        audioSrc: '/a2.2_2.39.mp3',
        text: `1. Melly hat vor einem Monat mit ihrem Studium in Heidelberg begonnen.
2. Sie studiert an der Uni und arbeitet abends in einem Café.
3. Vera hat sich in Fribourg verirrt und musste nach dem Weg fragen.
4. Vera hat in der Schule nicht so gut Französisch gesprochen.`,
      },
      {
        id: 'k10-2.40',
        title: '2.40',
        audioSrc: '/a2.2_2.40.mp3',
        text: `Hallo Anne, hier ist Nina.
Hallo Nina. Na, was gibt‘s Neues?
Also, ich habe tolle Neuigkeiten. Unsere Katze hat Junge bekommen!
Echt? Das ist ja super. Wie süß!
Total! Und jetzt suchen wir einen Platz für die Kleinen. Habt ihr vielleicht Interesse?
Ein Kätzchen? Oh, das geht leider nicht. Weißt du, René und ich, wir sind so viel unterwegs. Die Katze wäre so viel allein. Tut mir echt leid. Aber frag doch mal Tanja.
Ach so. Na gut. Hallo Tanja, hier ist Nina.
Hi Nina. Lange nichts gehört. Wie geht es dir?
Du, eigentlich super. Wir haben gerade junge Kätzchen und da habe ich an dich gedacht!
An mich? Na, ich mag Katzen ja wirklich wahnsinnig gern, aber Dirk hat eine Katzenallergie. Ganz schlimm. Leider …
Echt? Das habe ich ja gar nicht gewusst! Dann geht das natürlich nicht!
Nee, leider nicht. Aber frag doch mal Sven.
Gute Idee. Der ist ja ein echter Tierfan! Also bis dann! Danke.
Sven Rieger.
Hi Sven, hier ist Nina.
Hallo. Wie geht‘s?
Eigentlich gut. Du weißt doch, wir haben junge Kätzchen und jetzt suche ich gerade ein neues Zuhause.
Junge Kätzchen? Eigentlich total gern, aber ich kann nicht!
Warum? Hast du etwa auch eine Allergie?
Nee, zum Glück nicht. Und ich finde Katzen super – aber mein Vermieter erlaubt es nicht.
Das ist aber schade. Hast du eine Idee, wen ich noch fragen kann?
Vielleicht Markus und Inge …`,
      },
      {
        id: 'k10-2.41',
        title: '2.41',
        audioSrc: '/a2.2_2.41.mp3',
        text: `Gut gesagt: Kosenamen
Mausi, komm zum Mittagessen! Ach, Mäuschen, jetzt komm doch endlich!
Da bist du ja endlich, mein Hasilein! Wo warst du so lange?
Entschuldigung, Bärchen. Es war so viel Verkehr!`,
      },
    ],
  },
  {
    id: 'a2.2-kapitel-11',
    title: 'Kapitel 11: Wie die Zeit vergeht!',
    level: 'A2.2',
    lessons: [
      {
        id: 'k11-2.42',
        title: '2.42',
        audioSrc: '/a2.2_2.42.mp3',
        text: `Opa, sag mal, als du 10 warst, da bist du doch auch in die Schule gegangen?
Ja, klar. Genauso wie du jetzt. Nur hatten wir kaum Hausaufgaben und lernen musste ich auch nicht viel.
Echt? Warum muss ich dann Hausaufgaben machen?
Na, wir hatten vielleicht nicht viele Hausaufgaben, aber ich musste zu Hause immer viel helfen. Das war so 1960, meine Mutter hatte doch einen kleinen Kiosk und da habe ich mitgeholfen. Das habe ich wirklich gern gemacht! Und wenn ich frei hatte, dann war ich mit meinen Freunden draußen und wir haben zusammen gespielt. Manchmal waren wir den ganzen Nachmittag unterwegs – und das alles ohne Handy und so.
Und als du älter warst?
Mit so 16, 17 Jahren hat mich eigentlich nur Musik interessiert. Da waren grade die Beatles total beliebt und ich war oft auf Konzerten. 1966 war ich sogar auf einem Beatles-Konzert … Das war toll!
Nach der Schule habe ich dann auch das Studium angefangen, aber die ersten Jahre hat mich das nicht besonders interessiert. Mit Anfang 20 waren meine Freunde und ich viel lieber mit unserem VW-Bus unterwegs – und Oma war da auch schon dabei. Wir haben uns nämlich 1972 an der Uni kennengelernt!
So lange kennt ihr euch schon?
Ja, genau.
Oh ja, wir haben viele Seminare zusammen gemacht.
Und habt ihr dann auch gleich geheiratet?
Also nicht gleich, aber schon bald, warum auch nicht? Wir wollten beide eine Familie. Zuerst haben wir beide noch gearbeitet, aber mit den Kindern bin ich dann zehn Jahre zu Hause geblieben.
Das war damals in den Achtzigern noch öfter so. Ich habe nur am Wochenende geholfen und manchmal abends.
Ja, leider. Und am Wochenende wollte Opa immer Ausflüge machen. Wir hatten manchmal gar keine Lust, aber Opa wollte was Schönes erleben.
Na, euch hat es doch auch Spaß gemacht!
Ja, ja. Nur dein Vater hatte andere Pläne, als er ein Teenager war.
Echt? Jetzt will er immer mit uns Ausflüge machen …
Ja, ja. Als dein Papa und dein Onkel dann groß waren, haben Oma und ich beide viel gearbeitet. Wir waren Ende 40 und da sind gerade Computer neu gewesen, das war eine spannende Zeit. Mir hat die Arbeit mit Computern sofort total Spaß gemacht!
Und seit wann arbeitet ihr nicht mehr?
Seit fünf Jahren!
Aber Oma will nicht, dass ich die ganze Zeit zu Hause bin, …
Ja.
…, deshalb spiele ich wieder Gitarre. Du kennst doch meine Band!
Ja, klar! Und was machst du jetzt eigentlich am liebsten?
Jetzt? In dieser Sekunde? Sitze ich am liebsten mit dir und Oma im Garten und unterhalte mich mit euch. Komm, ich zeig dir …`,
      },
      {
        id: 'k11-2.43',
        title: '2.43',
        audioSrc: '/a2.2_2.43.mp3',
        text: `Stress, Stress, Stress. Sie kennen das, liebe Hörerinnen und Hörer. Wir hätten alle gern mehr Zeit, aber es gibt immer was zu tun. Wir haben uns mal umgehört, warum viele Leute keine Zeit haben und wofür sie gern mehr Zeit hätten.
Ja, also, Zeit habe ich sehr wenig. Ich bin Krankenschwester und arbeite oft auch in der Nacht oder am Wochenende. Wenn ich dann nach Hause komme, muss ich natürlich erst mal schlafen. Mein Mann hat ganz normale Arbeitszeiten. Wir haben also wirklich wenig gemeinsame Zeit. Außerdem haben wir drei Kinder. Die Organisation von unserem Alltag ist oft ganz schön schwierig. Ich würde gern mal wieder mit meinem Mann ins Kino oder ins Theater gehen … oder zum Wandern in die Berge. Aber für Hobbys bleibt im Moment einfach keine Zeit, leider. Ich würde auch gern mehr lesen, aber meistens bin ich zu müde, wenn ich zu Hause bin.
Ich habe ein kleines Geschäft in der Innenstadt. Ich mache da alles allein. Tagsüber stehe ich im Geschäft und verkaufe und am Abend muss ich noch die Büroarbeit machen, also Bestellungen, Rechnungen usw. Da bleibt natürlich nicht mehr viel Zeit übrig. Ich komme meistens erst abends um neun nach Hause. Richtig frei habe ich nur am Sonntag und dann bin ich meistens so müde, dass ich gar nichts mache. Ich würde gern mehr Sport machen, mich mehr bewegen. Das wäre auch für meine Gesundheit besser. Ja, ich hätte wirklich gern mehr Zeit. Ich würde gern mehr mit meinen Freunden machen, auch mal unter der Woche, einfach mehr Zeit mit ihnen verbringen.
Tja, mehr Zeit wäre schön! Aber wie soll das gehen? Ich bin Studentin und ich arbeite halbtags in einem Büro. Also, wenn ich nicht arbeite, bin ich an der Uni oder ich muss lernen. Ich wäre gern schon mit meinem Studium fertig. Dann hätte ich mehr Zeit für andere Dinge, zum Beispiel Reisen. Ich würde gern öfter verreisen, auch mal nur für ein Wochenende in andere Städte. Und wenn ich mehr Zeit hätte, dann hätte ich auch gern einen Hund. Dann würde ich auch mehr spazieren gehen.
Ja, die liebe Zeit. Warum haben Sie so wenig davon? Und wofür hätten Sie gern mehr Zeit? Rufen Sie uns an unter 0800 4520402. Und jetzt erst mal ein bisschen Musik.`,
      },
      {
        id: 'k11-2.44',
        title: '2.44',
        audioSrc: '/a2.2_2.44.mp3',
        text: `Ja, das war echt ein toller Tag.
Stimmt. Und diesen Samstag machen wir doch die Kajak-Tour, oder, Linda?
Ja, genau. Ich freue mich schon total auf den Ausflug. Aber wie machen wir es denn genau. Wann wollen wir losfahren? Vielleicht um elf?
Ne, lieber nicht, das ist so spät. Wollen wir nicht lieber schon um neun Uhr fahren? Dann sind wir so um zehn Uhr da und haben den ganzen Tag Zeit.
Okay. Mereth, geht das bei dir?
Klar, gern. Aber ich hoffe, wir müssen nicht wieder auf dich warten, Thilo! Wie beim letzten Mal!
Nein, nein, das schaffe ich schon. Also, um neun Uhr, am besten direkt am Bahnhof. Einverstanden?
Ja, das wäre super. Ich habe gerade nachgeschaut: Um 9:18 Uhr fährt der Zug. Denkst du an die Tickets, Thilo? Die wolltest du doch kaufen.
Genau, um die Tickets kümmere ich mich. Linda, könntest du denn beim Bootsverleih anrufen?
Das habe ich schon gemacht und drei Kajaks reserviert. Ben und seine Freundin wollen auch mitkommen. Passt euch das?
Natürlich. Ich rufe ihn morgen an und bespreche alles mit ihm. Und wer kümmert sich um das Essen? Erinnert ihr euch an den letzten Ausflug? Da hat jeder etwas mitgebracht und das war total lecker. Wir könnten das doch wieder so machen, oder?
Ich finde, Mereths Idee ist super! Ich kann Brote für alle mitbringen. Und Linda, könntest du wieder einen Kuchen backen?
Klar, gern. Was für einen Kuchen wollt ihr denn?
Am besten deinen Apfelkuchen, der ist immer so gut! Und Thilo, würdest du bitte noch deine Kamera mitnehmen? Du machst immer so schöne Fotos.
Ja, klar. Das wollte ich sowieso. Kommt eigentlich Milan mit?
Nee, er schafft es leider nicht. Ich habe gestern mit ihm gesprochen. Er hat eine Prüfung und ist echt traurig, dass er nicht mitkommen kann.
Das ist wirklich schade!
Mhm. Dann haben wir alles besprochen, oder? Oder habt ihr noch andere Vorschläge, was wir …?`,
      },
      {
        id: 'k11-2.45',
        title: '2.45',
        audioSrc: '/a2.2_2.45.mp3',
        text: `Gut gesagt: Mitleid ausdrücken
Ich muss noch total viel für die Prüfung lernen.
Oh je, du Arme!
Beim Ausflug hat es die ganze Zeit geregnet.
Oh, schade.
Linda hat ihre Geldbörse verloren.
Mann, das tut mir leid.
Ich habe Kopfschmerzen. Ich glaube, ich kann heute nicht mit ins Kino kommen.
Ach, Mensch, das ist ja blöd!`,
      },
      {
        id: 'k11-2.46',
        title: '2.46',
        audioSrc: '/a2.2_2.46.mp3',
        text: `1. Linda möchte mit ihren [Freunden] einen Ausflug machen. 
2. Linda möchte mit ihren Freunden einen [Ausflug] machen. 
3. Sie sind [vier] Stunden mit dem Kajak gefahren. 
4. Sie sind vier Stunden mit dem [Kajak] gefahren.`,
      },
    ],
  },
  {
    id: 'a2.2-kapitel-12',
    title: 'Kapitel 12: Gute Unterhaltung!',
    level: 'A2.2',
    lessons: [
      {
        id: 'k12-2.47',
        title: '2.47',
        audioSrc: '/a2.2_2.47.mp3',
        text: `1
Da war ich letztes Jahr. Das war toll, ich habe eine interessante Führung mitgemacht und habe viel vom Schloss gesehen. Aber es war zu voll, sooooo viele Leute, das war ein bisschen stressig.
Hast du Fotos gemacht?`,
      },
      {
        id: 'k12-2.48',
        title: '2.48',
        audioSrc: '/a2.2_2.48.mp3',
        text: `2
Manchmal schaue ich mir ja gern die Videos an, aber eigentlich spiele ich lieber selbst.
Ja, aber ich finde es immer ziemlich lustig. Manchmal braucht er so lang, wenn er etwas finden möchte.`,
      },
      {
        id: 'k12-2.49',
        title: '2.49',
        audioSrc: '/a2.2_2.49.mp3',
        text: `3
Weißt du, was Anna gerade liest? „Die unendliche Geschichte“. Das habe ich als Kind auch so gern gelesen. Diese Fantasiewelt war so toll.
Ich habe auch das Buch gelesen und den Film gesehen – mir hat beides super gefallen.`,
      },
      {
        id: 'k12-2.50',
        title: '2.50',
        audioSrc: '/a2.2_2.50.mp3',
        text: `4
Wollen wir am Wochenende mal wieder ins Museum gehen? Ich war schon lange nicht mehr in der Kunsthalle.
Sehr gern. Es ist gerade eine tolle Ausstellung über Fotokunst. Und die alten Bilder und Gemälde sehe ich auch immer wieder gern. Um 11 Uhr gibt es da immer eine Führung. Wollen wir da nicht mitgehen?`,
      },
      {
        id: 'k12-2.51',
        title: '2.51',
        audioSrc: '/a2.2_2.51.mp3',
        text: `5
Oh, du siehst aber müde aus.
Ach, ich habe gestern „Babylon Berlin“ angesehen, also einige Folgen. Die Serie ist echt spannend und interessant, wie Berlin so vor 100 Jahren war. Unglaublich! Da bin ich natürlich viel zu spät ins Bett gekommen …`,
      },
      {
        id: 'k12-2.52',
        title: '2.52',
        audioSrc: '/a2.2_2.52.mp3',
        text: `Bald ist das Semester vorbei und ich habe echt wieder Lust auf ein Festival. Du auch, Lina?
Total. Ich würde echt gern mal nach Wacken fahren, da ist es bestimmt super!
Nach Wacken? Ich weiß nicht. Die spielen da eher so Metal, oder?
Genau! Hardrock und Metal. Ich finde die Musik toll, weil sie so schnell und laut ist. Die Atmosphäre dort ist auch cool, das haben mir Freunde erzählt. Warte, ich schaue das mal kurz nach …
Na ja, die Stimmung ist auf Festivals doch immer super!
Also, das ist Anfang August, drei Tage lang.
Und wie viel kosten die Karten?
Oh, ein Drei-Tages-Ticket kostet 220 Euro!
Und dann noch die Fahrt dahin und übernachten und so.
Hm, ja, das ist vielleicht zu teuer. Was gibt es denn noch für gute Festivals?
Also, ich höre ja gern Rockmusik. Und vor ein paar Jahren war ich bei Rock im Park.
Stimmt, das ist ja auch total bekannt.
Ja, es war super dort. Das ist meistens so im Juni.
Wo ist das nochmal genau? Bei Frankfurt?
Nee, in Nürnberg. Da wohnen auch Freunde von mir, da könnten wir übernachten.
Und wie teuer sind die Tickets?
Also, so ein normales Ticket kostet 149 Euro.
Für einen Tag?
Nee, für drei Tage. Das geht ja noch.
Ja, es geht, aber vielleicht gibt es noch ein kleineres Festival? Das ist bestimmt billiger.
Mein Bruder wohnt in Diepholz. Die haben da ein kleines Festival mit gemischter Musik: Indie, Rock, Elektro.
Das klingt auch gut. Wann ist das denn genau?
Also, dieses Jahr ist es vom … warte, hier steht’s … vom 1. bis 4. August, also vier Tage. Und es ist voll günstig.
Echt? Wie viel kostet es denn?
Für vier Tage nur 90 Euro. Aber warte mal … Mist, es ist schon ausverkauft.
Schade! Aber dann fahren wir doch nach Nürnberg! Also, wenn wir bei deinen Freunden übernachten können.
Ja, ich schreibe ihnen gleich mal.
Und ich frage die Nachbarn, ob sie meine Katze nehmen können. Hoffentlich haben sie Zeit!`,
      },
      {
        id: 'k12-2.53',
        title: '2.53',
        audioSrc: '/a2.2_2.53.mp3',
        text: `Gut gesagt: etwas/was
Hast du was?
Ja. Ich habe schon seit 2 Tagen Kopfschmerzen.
Du bist so still. Ist was?
Mhm … Ich muss dir was sagen.
So was! Jetzt habe ich schon wieder den Schlüssel vergessen!`,
      },
      {
        id: 'k12-2.54',
        title: '2.54',
        audioSrc: '/a2.2_2.54.mp3',
        text: `Wer spielt auf dem Festival?
Namika.
Wer spielt da?
Namika, eine deutsche Sängerin. Sie hat „Lieblingsmensch” gesungen.
Was hat sie gesungen?
„Lieblingsmensch“. Warum kennst du das Lied denn nicht?
Warum ich das nicht kenne? Vielleicht, weil ich nie Radio höre …`,
      },
      {
        id: 'k12-2.55',
        title: '2.55',
        audioSrc: '/a2.2_2.55.mp3',
        text: `Herzlich willkommen zur Ausstellung „Tiere in der Kunst“ hier im Kunstmuseum. Sie sehen in der Ausstellung viele Bilder von Tieren aus verschiedenen Jahrhunderten. Aber beginnen wir mit der Frage: Haben Maler schon immer Tiere gemalt? Oder ist das eine moderne Idee?
Nein, die Idee ist nicht neu. Schon immer haben Künstler Tiere gemalt. Früher haben sie die Tiere zuerst genau angesehen und dann in ihren Zimmern oder im Atelier gezeichnet. So hat auch Albrecht Dürer 1502 den berühmten Hasen gemalt: Der Hase war beim Malen nicht dabei.
Im 19. Jahrhundert waren Tierbilder sehr beliebt, weil die Menschen die Tiere jetzt in Zoos und Tierparks ansehen konnten. Es hat aber noch keine Fotoapparate gegeben, deshalb haben die Leute damals sehr gerne Bilder gekauft, die wie Fotos ausgesehen haben. Erst in dieser Zeit haben die Maler ihre Tierbilder direkt bei den Tieren gemalt. Sie haben also die Tiere tatsächlich gesehen und dabei gezeichnet.
Im 20. Jahrhundert wird die Fotografie Alltag. Es ist nicht mehr so wichtig, dass die Tiere auf den Bildern realistisch aussehen, denn dafür hat man Fotos. Den Malern geht es jetzt mehr um neue Ideen und Kreativität. Die Künstler verwenden zum Beispiel bunte Farben und malen die Tiere abstrakt und nicht mehr realistisch.
Ja, und in der heutigen Kunst, im 21. Jahrhundert also, sind die Tiere auch oft wie Menschen dargestellt. Das bedeutet, die Tiere machen Sachen, die eigentlich nur Menschen machen. Sie machen z. B. Autorennen, sehen fern oder fahren in den Urlaub.`,
      },
      {
        id: 'k12-2.56',
        title: '2.56',
        audioSrc: '/a2.2_2.56.mp3',
        text: `Dann kommen wir noch zu unseren Kulturnachrichten. Diese Woche möchten wir euch zwei Musikveranstaltungen empfehlen. Hört ihr gern Popmusik? Mögt ihr Gute-Laune-Musik? Dann könnt ihr noch Tickets für das Mark-Forster-Konzert am Sonntagabend bekommen. Mark Forster spielt ab 19 Uhr in der Stadthalle. Es gibt nur noch wenige Tickets für 50 Euro, also entscheidet euch schnell!
Und wer von euch Popmusik mag, aber auch Reggae und Rockmusik – wer sich also nicht für einen Musikstil entscheiden kann, der geht am besten zum Sommerfestival im Park. Das Festival ist am Samstag und Sonntag im Stadtpark. Der Eintritt kostet nur 15 Euro pro Tag. Es spielen Bands aus der Stadt, jeweils ab 17 Uhr. Das Wetter soll super werden, das ist also eine perfekte Möglichkeit zum Feiern!`,
      },
      {
        id: 'k12-2.57',
        title: '2.57',
        audioSrc: '/a2.2_2.57.mp3',
        text: `Gleich hören wir eine Sinfonie von Wolfgang Amadeus Mozart, dem vielleicht bekanntesten Komponisten aus Österreich. Er wurde am 27. Januar 1756 in Salzburg geboren und hat schon mit vier Jahren Klavier und Violine gelernt, zusammen mit seiner Schwester. Auch sein Vater war Komponist und so hat auch der kleine Mozart schon früh mit dem Komponieren begonnen. In seiner Kindheit musste er viel reisen und Konzerte geben, später war er zum Teil angestellt, zum Teil hat er freiberuflich gearbeitet. Er hat zahlreiche Opern, Sinfonien und Konzerte geschrieben. Im Dezember 1791 ist er schwer krank geworden und am 5. Dezember gestorben. Er wurde nur 35 Jahre alt. Seine Musik lebt heute noch mit uns und wir spielen jetzt die Sinfonie Nummer 25. Viel Freude beim Zuhören!`,
      },
      {
        id: 'k12-2.58',
        title: '2.58',
        audioSrc: '/a2.2_2.58.mp3',
        text: `[Gedicht: Hausspruch von Gina Ruck-Pauquèt]`,
      },
      {
        id: 'k12-2.59',
        title: '2.59',
        audioSrc: '/a2.2_2.59.mp3',
        text: `[Gedicht: Wie wohnen die Kinder der Erde? von James Krüss]`,
      },
    ],
  },
  {
    id: 'b1.1-kapitel-1',
    title: 'Kapitel 1: Gute Reise!',
    level: 'B1.1',
    lessons: [
      {
        id: 'k1-1.1',
        title: '1.1',
        audioSrc: '/b1.1_1.1.mp3',
        text: `Hey Maja!
Hallo Maja! Du bist ja wieder zurück aus dem Urlaub!
Ja, leider.
Und, wie war’s?
Sehr schön. Wir waren an der Ostsee, auf Rügen. Die Insel ist so toll! Wir hatten da ein kleines Ferienhaus. Und das Wetter war auch meistens gut. Das war echt Glück.
Da würde ich auch gern mal hinfahren.
Ja, das solltest du echt machen. Das Ferienhaus war sehr nah am Strand, wir mussten nur fünf Minuten laufen. Wir haben es auch schon im Februar gebucht. In den Sommerferien ist immer sehr viel los.
Was, du hast schon im Winter gebucht!?! Ich will mich nicht schon so früh entscheiden, wo ich Urlaub mache. Ich fahre lieber einfach los.
Echt? Das kann ich nicht. Ich buche meinen Urlaub immer ein paar Monate vorher. Dann ist alles organisiert und ich weiß, wo ich schlafe. Wo warst du denn dieses Jahr, Liam?
Also, ich bin mit dem Zug durch Europa gefahren. Das war super. Nur ich und mein Rucksack. Ich habe immer spontan entschieden, wo ich als Nächstes hinfahre. Zuerst war ich kurz in Salzburg, von dort bin ich direkt weiter nach Wien und nach zwei Tagen weiter nach Prag.
Wow! Und das machst du so ganz allein?
Ich fahre allein los, ja. Aber man lernt schnell Leute kennen, die auch mit dem Rucksack reisen. Sag mal, Thomas, wo warst du eigentlich?
Na ja, meine Frau und ich, wir fahren erst im Herbst weg. Wir fahren immer mit dem Wohnwagen an die Mosel.
Immer? Wie oft wart ihr denn schon dort?
Acht Mal. Wir sind immer auf demselben Campingplatz. Es ist wirklich schön dort. Wir kennen uns jetzt schon gut aus, kennen gute Restaurants und die schönsten Wanderwege am Fluss entlang und durch die Weinberge. Und wir treffen Leute, die auch jedes Jahr kommen. Die Landschaft ist so schön. Für uns ist das perfekt.
Immer an den gleichen Ort, das könnte ich nicht. Ach, ich muss euch noch was erzählen. Wir haben auf Rügen …`,
      },
      {
        id: 'k1-1.2',
        title: '1.2',
        audioSrc: '/b1.1_1.2.mp3',
        text: `Hallo, guten Tag.
Guten Tag.
Guten Tag.
Was kann ich für Sie tun?
Ja, also. Wir würden im August gern zusammen Urlaub machen. Aber da gibt es ein Problem. Ich möchte mich gern erholen und ausruhen, am liebsten an der Ostsee.
Und ich würde lieber einen Stadturlaub machen, am liebsten in Berlin!
Jetzt suchen wir etwas, das uns beiden gefällt.
Wir wollen uns einfach mal erkundigen, was für Angebote Sie so haben.
Hm, also zur Erholung kann ich Ihnen Rügen empfehlen. Wir haben da wunderschöne Ferienwohnungen auf der Insel, direkt am Strand. Da können Sie sich entspannen und es gibt auch schöne Wege zum Radfahren. Und vielleicht wollen Sie auf dem Weg dorthin auch ein paar Tage in Berlin bleiben.
Das klingt nicht schlecht. Was kostet denn so eine Ferienwohnung?
Wann wollen Sie denn fahren?
In der zweiten Woche im August.
Da ist Hochsaison. Da kostet eine Ferienwohnung für zwei Personen zwischen 700 und 840 Euro pro Woche.
Okay, aber eine Woche Rügen … Haben Sie noch andere Angebote?
Natürlich. Wie wäre es denn mit diesem Wellnesshotel in Berlin? Da hätten Sie ganz viel Erholung und sind trotzdem mitten in Berlin.
Das ist doch eine gute Idee! Was meinst du, Paula?
Ja, das könnte passen.
Kann man im Hotel auch Sport machen?
Ja, natürlich. Sie können das Schwimmbad und den großen Fitnessraum zu jeder Zeit benutzen. Das ist alles im Preis enthalten.
Und was kostet das?
Für eine Woche 710 Euro mit Übernachtung und Frühstück, pro Person.
Eine ganze Woche in der Stadt … Ist das nicht zu viel? Was meinst du, Anna?
Hm, nein, ich denke nicht.
Sie können auch schöne Touren machen, zum Beispiel eine Tagestour zum Spreewald. Und wenn Sie einfach faulenzen wollen, dann fahren Sie raus zum Wannsee. Das geht ganz einfach.
Oh ja, davon habe ich auch schon gehört.
Aber ich habe auch noch ein anderes Angebot: Sie können fünf Tage auf einem Schiff buchen, von Berlin aus durch den Spreewald. Da können Sie die schönen kleinen Orte besuchen. Die Tour kostet 1.250 Euro per Person, mit Vollpension.
Das klingt auch gut, aber das ist zu teuer für uns.
Und ich habe keine Lust, immer auf einem Schiff zu sein. Am besten finde ich …`,
      },
      {
        id: 'k1-1.3',
        title: '1.3',
        audioSrc: '/b1.1_1.3.mp3',
        text: `… Am besten finde ich das Wellnesshotel in Berlin. Wir können die Stadt besichtigen, ausgehen und uns dann im Hotel erholen und entspannen.
Ja, das ist wohl am besten. Wo liegt denn das Hotel?
Mitten in Berlin, die Lage ist einfach perfekt. Ich zeige es Ihnen mal. Sehen Sie?
Oh ja, das sieht gut aus. Dann buchen wir doch am besten gleich, oder, Paula?
Ja, das machen wir.
Gut, dann brauche ich jetzt noch ein paar Daten von Ihnen.`,
      },
      {
        id: 'k1-1.4',
        title: '1.4',
        audioSrc: '/b1.1_1.4.mp3',
        text: `Gut gesagt: Wenn etwas nicht gut läuft
1
Regen, Regen, Regen und alles ist total nass! Ich habe keinen Bock mehr!
Ja, ich mag auch nicht mehr. Aber morgen wird das Wetter bestimmt wieder gut.
2
Oh nein, so ein Mist! Erst regnet es zehn Tage am Stück und jetzt ist auch noch das Auto kaputt. Der ganze Urlaub ist im Eimer!
Oh Mann, heute geht echt alles schief! Was machen wir jetzt?`,
      },
      {
        id: 'k1-1.5',
        title: '1.5',
        audioSrc: '/b1.1_1.5.mp3',
        text: `1. Affing
2. Finkenstein
3. Dinklage
4. Haren
5. Lienen
6. Singhofen`,
      },
      {
        id: 'k1-1.6',
        title: '1.6',
        audioSrc: '/b1.1_1.6.mp3',
        text: `1. reisen, planen, ankommen, entspannen
2. die Wohnung, bringen, langweilig, die Stimmung
3. funktionieren, denken, krank, bedanken`,
      },
      {
        id: 'k1-1.7',
        title: '1.7',
        audioSrc: '/b1.1_1.7.mp3',
        text: `Durchsage 1
Bitte Vorsicht am Gleis 21, der Intercity aus Stuttgart mit Weiterfahrt nach Bremen über Essen, Dortmund und Münster fährt ein. Am Gleis 21, Vorsicht bitte.
Durchsage 2
Auf Gleis 17 fährt ein der verspätete ICE 241 aus Münster mit Weiterfahrt über Köln, Mannheim und Heidelberg nach Stuttgart. Abfahrt mit acht Minuten Verspätung um 13 Uhr 28.
Durchsage 3
Der ICE 214 nach München über Köln, Frankfurt, Mannheim und Stuttgart hat 10 Minuten Verspätung, Abfahrt aus Gleis 12. Wir bitten um Verständnis.`,
      },
      {
        id: 'k1-1.8',
        title: '1.8',
        audioSrc: '/b1.1_1.8.mp3',
        text: `Auf Gleis 17 fährt ein der verspätete ICE 241 aus Münster mit Weiterfahrt über Köln, Mannheim und Heidelberg nach Stuttgart. Abfahrt mit acht Minuten Verspätung um 13 Uhr 28.`,
      },
      {
        id: 'k1-1.9',
        title: '1.9',
        audioSrc: '/b1.1_1.9.mp3',
        text: `1. Am Flughafen
Eine Durchsage für die Fluggäste aus New York, Flug LH 2577. Die Anzeige in der Gepäckhalle ist defekt. Bitte holen Sie Ihr Gepäck von Band 15 ab, nicht von Band 11. Passengers from New York …`,
      },
      {
        id: 'k1-1.10',
        title: '1.10',
        audioSrc: '/b1.1_1.10.mp3',
        text: `2. Am Bahnhof
An Gleis 11, Einfahrt des EC aus Mailand mit Weiterfahrt nach Stuttgart, bitte Vorsicht an Gleis 11. Achtung, hier eine Durchsage für die Passagiere nach Nürnberg. Der Regionalexpress um 17:11 Uhr fällt wegen einer technischen Störung leider aus. Ihre nächste Verbindung nach Nürnberg ist der ICE 526 um 17:44 Uhr von Gleis 23. Ihre Fahrkarten sind ohne Aufpreis gültig. Wir danken für Ihr Verständnis.`,
      },
      {
        id: 'k1-1.11',
        title: '1.11',
        audioSrc: '/b1.1_1.11.mp3',
        text: `3. Im Zug
Wir begrüßen Sie im ICE 526 nach Dortmund, unser nächster Halt ist Nürnberg. Das Bordrestaurant befindet sich in der Mitte des Zuges zwischen der 1. und der 2. Klasse. Dort begrüßen Sie Marcel Lewandoski und sein Team zu den “Österreichischen Wochen”. Lassen Sie sich überraschen. Unser mobiles Serviceteam bringt Ihnen gern auch kalte und warme Getränke an den Platz. Wir wünschen gute Fahrt.`,
      },
      {
        id: 'k1-1.12',
        title: '1.12',
        audioSrc: '/b1.1_1.12.mp3',
        text: `4. An der Bushaltestelle
Verehrte Fahrgäste der Linie 46, der nächste Bus fährt heute außerplanmäßig nur bis zur U-Bahn-Haltestelle Mögeldorf. Fahrgäste mit dem Ziel Tiergarten fahren bitte bis zur Haltestelle Mögeldorf und nehmen von dort die Straßenbahnlinie 5. Wir bitten um Ihr Verständnis.`,
      },
      {
        id: 'k1-1.13',
        title: '1.13',
        audioSrc: '/b1.1_1.13.mp3',
        text: `Sehr geehrte Fahrgäste, aufgrund eines Verkehrsunfalls können die Linien 16, 17 und 18 die Haltestelle “Hauptbahnhof” im Moment nicht anfahren. Bitte fahren Sie mit der U-Bahn-Linie 2 oder 4 bis zum Marktplatz. Dort können Sie in die Straßenbahn umsteigen und normal weiterfahren. Ich wiederhole: Die Straßenbahnen Nummer 16, 17 und 18 halten im Moment nicht am Hauptbahnhof. Bitte nutzen Sie die U-Bahn-Linie 2 oder 4, fahren Sie bis zum Marktplatz und steigen Sie dort in die Straßenbahn um.`,
      },
    ],
  },
  {
    id: 'b1.1-kapitel-2',
    title: 'Kapitel 2: Das ist ja praktisch!',
    level: 'B1.1',
    lessons: [
      {
        id: 'k2-1.14',
        title: '1.14',
        audioSrc: '/b1.1_1.14.mp3',
        text: `Schön, dass Sie wieder bei unserer Sendung „Sonntagsfrühstück“ dabei sind. Heute haben wir diese spannende Frage an Sie: Welche moderne Entwicklung oder welches Gerät macht Ihr Leben leichter?“ Wahrscheinlich haben Sie noch keinen Roboter zu Hause, aber vielleicht schon einen Sprachassistenten? Oder Sie sind ein großer Fan Ihrer Smartwatch? Rufen Sie uns an und erzählen Sie uns davon. Hier ist auch schon der erste Anrufer. Guten Morgen, Herr Wallner?
Guten Morgen! Also, ich habe gerade eine neue Tür bekommen. Die kann man mit Fingerprint, also mit dem Fingerabdruck, öffnen. Ich finde das super, früher habe ich doch manchmal meinen Schlüssel vergessen und das ist jetzt kein Problem mehr.
Das stimmt, der Schlüssel ist sozusagen immer dabei.
Genau, immer dabei, aber ich muss nichts tragen. Das ist auch super, wenn ich joggen gehe. Ich habe keine Tasche dabei und keinen Schlüssel, der mich stört.
Und wie ist es in der Arbeit, gibt es da auch etwas Neues, einen tollen neuen Computer vielleicht?
Na ja, einen Laptop hat ja heute jeder, das ist nichts Besonderes. Aber meine Firma hat vor einem Jahr für alle Mitarbeiter Steh-Sitz-Tische gekauft. Am Anfang habe ich gedacht: „So ein Unsinn!“
Und jetzt?
Jetzt möchte ich auf keinen Fall darauf verzichten. Ich stehe oft, wenn ich arbeite. Manchmal nur für eine Viertelstunde, aber ich bin abends nicht mehr so müde und habe auch keine Rückenschmerzen mehr.
Vielen Dank, Herr Wallner! Da ist auch schon die nächste Anruferin. Hallo, mit wem spreche ich?
Hallo, hier ist Carmen Esposito. Also, wir haben uns gerade zusammen mit Freunden ein Lastenfahrrad gekauft. Da ist keine moderne Technik dabei, aber für den Alltag ist das eine echte Hilfe.
Erzählen Sie doch mal kurz: Wann nutzen Sie denn das Fahrrad?
Also, zum Beispiel zum Einkaufen. Man hat wirklich viel Platz für den Einkauf und braucht das Auto nicht. Es ist natürlich viel billiger als ein Auto und für die Umwelt und die Gesundheit gut. Was will man mehr?
Das klingt gut. Vielleicht probiere ich das auch mal aus. Gibt es noch etwas aus Ihrem Alltag, das Sie praktisch finden?
Hm, ja, das ist unser Sprachassistent. Ich weiß schon, manche mögen das nicht, aber ich finde ihn praktisch. Ich spreche einfach und das Ding macht, was ich will: Es spielt meine Musik, es kann mir was erzählen, man kann sich fast mit ihm unterhalten. Also, mir macht das Spaß.
Vielen Dank! Und wir nehmen noch einen Anrufer vor dem nächsten Lied dran. Guten Morgen! Was für ein modernes Gerät finden Sie toll?
Also, ich bin ja eher ein Technik-Fan und finde meine neuen Kopfhörer super. Die sind mit Bluetooth und haben eine tolle Qualität. Musik hören macht da einfach noch mehr Spaß, keine blöden Kabel mehr. Man kann auch super damit tanzen. Gestern war ich in einer Silent Disco, das war echt witzig.
Was ist denn eine Silent Disco? Das kenne ich gar nicht.
Da hört man die Musik nicht über Lautsprecher, sondern alle haben Kopfhörer auf und jeder wählt die Musik selbst aus. Man tanzt also wie in der Disco mit allen zusammen, aber jeder hört seine eigene Musik.
Danke, dass Sie angerufen haben! Jetzt hören wir ein bisschen Musik und danach geht es mit den nächsten Anrufern weiter.`,
      },
      {
        id: 'k2-1.15',
        title: '1.15',
        audioSrc: '/b1.1_1.15.mp3',
        text: `Samstagvormittag in der Stadt. Es ist wie immer sehr voll. Was machen all die Menschen hier? Wir haben mal nachgefragt.
Ja, ich bin viel unterwegs und ständig ist der Akku von meinem Handy leer. Das ist blöd, weil mich dann Freunde und Familie nicht erreichen können und ich auch nicht telefonieren kann. Deswegen bin ich jetzt schnell in die Stadt gefahren: Ich brauche unbedingt eine Powerbank, dann kann ich mein Handy immer aufladen. Hier in dem Laden gibt es sicher welche.
Also, diesen Kopfhörer habe ich jetzt seit zwei Jahren, aber er geht nicht mehr richtig. Manchmal ist die Musik ganz leise und manchmal höre ich gar nichts. Jetzt bin ich gerade auf dem Weg zu dem Laden, wo ich den Kopfhörer gekauft habe. Ich hoffe, die können den dort reparieren, denn ich möchte eigentlich keinen neuen kaufen.
Ich muss dringend etwas umtauschen, darum bin ich in die Stadt gefahren. Diesen Lautsprecher habe ich gestern gekauft, aber er funktioniert nicht. Wie kann denn ein neuer Lautsprecher gleich kaputt sein? Na ja, der Umtausch ist ja sicher kein Problem.
Also, mein Handy ist schon ziemlich alt, aber es funktioniert noch gut. Ich will auch nicht ständig neue Dinge kaufen. Aber jetzt ist das Ladekabel kaputt. Ich kann mein Handy nicht mehr richtig laden, sodass ich ein neues kaufen muss. Mal sehen, was sie im Laden so da haben.
Ach, ich brauche einen neuen USB-Stick. Ich finde meinen einfach nicht mehr. Ich weiß zwar nicht, wie es passiert ist, aber ich habe ihn wohl irgendwo verloren und muss jetzt schnell einen neuen kaufen. Und wenn ich schon hier im Zentrum bin, erledige ich auch gleich noch ein paar andere Dinge.`,
      },
      {
        id: 'k2-1.16',
        title: '1.16',
        audioSrc: '/b1.1_1.16.mp3',
        text: `Guten Tag!
Guten Tag!
Kann ich Ihnen helfen?
Ja. Dieser Lautsprecher hier ist kaputt. Aber ich habe ihn erst gestern gekauft.
Kann ich ihn bitte mal sehen?
Ja, klar. Hier, bitte.
Haben Sie ihn denn auch geladen?
Natürlich. Das habe ich gleich als Erstes gemacht. Aber er funktioniert einfach nicht. Ich weiß nicht, ob man ihn reparieren kann. Ich möchte den Lautsprecher auf jeden Fall umtauschen.
Haben Sie den Kassenzettel noch?
Ja, Moment. Hier ist er.
Möchten Sie denn ein neues Gerät oder das Geld zurück?
Also, ich möchte das Geld zurück. Ich glaube, ich kaufe lieber ein ganz anderes Modell. Aber da muss ich mich erst noch mal informieren.
In Ordnung. Dann nehme ich jetzt das Gerät und hier ist Ihr Geld.
Vielen Dank.
Gerne. Auf Wiedersehen.
Auf Wiedersehen.`,
      },
      {
        id: 'k2-1.17',
        title: '1.17',
        audioSrc: '/b1.1_1.17.mp3',
        text: `1. die Heizung
2. genutzt
3. jetzt
4. nichts
5. trotz
6. zwei`,
      },
      {
        id: 'k2-1.18',
        title: '1.18',
        audioSrc: '/b1.1_1.18.mp3',
        text: `Gut gesagt: Markennamen für Produkte
Hatschi! Entschuldigung, hast du mal ein Tempo für mich?
Ja, hier, bitte sehr. Brauchst du auch ein Aspirin? Ich kann dir gern eines geben.
Nein, danke.`,
      },
    ],
  },
  {
    id: 'b1.1-kapitel-3',
    title: 'Kapitel 3: Veränderungen',
    level: 'B1.1',
    lessons: [
      {
        id: 'k3-1.19',
        title: '1.19',
        audioSrc: '/b1.1_1.19.mp3',
        text: `… und jetzt wieder zum Thema unserer Sendung „Veränderungen“. Rufen Sie uns an und erzählen Sie uns von Veränderungen, die Sie besonders wichtig oder interessant finden – zum Beispiel in Ihrem Beruf oder in Ihrem Alltag. Ah, da ist auch schon unser erster Anrufer. Hallo?
Ja, guten Abend, hier ist Ernst Lüdke.
Guten Abend, Herr Lüdke. Was ist denn für Sie eine wichtige Veränderung?
Also, meine Schulzeit ist schon sehr lange her, ich war in den 50er-Jahren in der Volksschule. Und das war in einer kleinen Stadt und die Klasse war sehr groß. Die Lehrer waren auch sehr streng.
Könnten Sie uns ein Beispiel nennen?
Also, wir mussten immer das machen, was die Lehrer gesagt haben. Disziplin war sehr wichtig. Wenn man etwas nicht gemacht hat, dann hat man eine Strafe bekommen. Deshalb hatten eigentlich alle Schüler Angst vor den Lehrern.
Heute hört man eigentlich nur, dass es Probleme mit der Disziplin gibt. Die Schüler machen angeblich oft, was sie wollen, und nicht, was der Lehrer oder die Lehrerin will.
Ja, aber heute arbeiten die Lehrer ganz anders. Sie nutzen Medien wie zum Beispiel Tablets oder Computer und die Kinder sollen viel selbstständig machen und in Gruppen arbeiten. Früher hat der Lehrer geredet und wir haben zugehört und geschrieben – das war‘s!
Danke, Herr Lüdke!`,
      },
      {
        id: 'k3-1.20',
        title: '1.20',
        audioSrc: '/b1.1_1.20.mp3',
        text: `Als Nächstes ist Isabel Eickhoff am Apparat. Guten Abend, Frau Eickhoff!
Hallo, also, ich wollte etwas zur Arbeitswelt sagen. Wir haben eine Bäckerei und sind ein Familienbetrieb. Früher haben alle Bäckereien so wie wir gearbeitet, aber jetzt gibt es kaum noch Bäcker wie uns.
Was meinen Sie damit genau?
Also, heutzutage gibt es fast nur noch Großbäckereien – das sind eigentlich schon Brotfabriken. Alles ist automatisiert, es gibt nur noch wenige Bäcker oder auch Arbeiter. Diese Großbäckereien können natürlich unter ganz anderen Bedingungen produzieren als wir in unserer Bäckerei. Wir machen noch vieles von Hand wie schon vor 100 Jahren.
Das ist sicher sehr viel Arbeit und auch anstrengend, oder?
Ja und nein. Natürlich sind die Arbeitszeiten nicht ideal, aber Brot, Brötchen und Kuchen zu backen ist eine tolle Tätigkeit und sehr vielseitig. In den Großbäckereien arbeitet man in Schichten und die Leute dort betreuen nur wenige Arbeitsschritte. Das wäre mir zu monoton.
Und was sagen die Kunden?
Also, die Kunden schätzen unsere Qualität, aber die Konkurrenz ist meist billiger und vieles schmeckt auch gut. Das ist oft nicht leicht, aber wir wollen weiter so arbeiten.
Vielen Dank, Frau Eickhoff, und weiterhin viel Erfolg mit Ihrer Bäckerei!`,
      },
      {
        id: 'k3-1.21',
        title: '1.21',
        audioSrc: '/b1.1_1.21.mp3',
        text: `Und unsere nächste Anruferin ist Emma Lawson. Hallo, welche Veränderung finden Sie interessant?
Ja, hallo. Also, ich finde die Entwicklungen im Bereich der Medizin faszinierend.
Ach, sind Sie im medizinischen Bereich tätig?
Ja, ich bin Krankenpflegerin und außerdem sehe ich gern historische Serien. In der Serie „Charité“ geht es um das berühmte Berliner Krankenhaus vor 150 Jahren und wenn ich das mit heute vergleiche, hat sich wahnsinnig viel verändert. Aber eine Sache hat sich zum Glück nicht verändert: gute Ärzte und Pflegekräfte gab es schon immer!
Stimmt. Aber können Sie uns da ein paar Beispiele für Veränderungen nennen?
Also, zum Glück können wir heutzutage zahlreiche Krankheiten problemlos heilen, die damals für viele tödlich waren. Das liegt an verschiedenen Dingen wie zum Beispiel an besserer Hygiene und Medikamenten wie Antibiotika. Und natürlich auch an den medizinischen Geräten, die es heute gibt. Die Diagnosen wurden dadurch viel genauer und zum Beispiel für Operationen sind Kameras heutzutage eine große Hilfe.
Was gibt es denn für Unterschiede beim Personal, zum Beispiel für Pflegekräfte wie Sie?
Also, es gab damals deutlich mehr Personal und viele weibliche Pflegekräfte, aber keine Ärztinnen. Wahrscheinlich hatten die Pflegekräfte deshalb nicht so viel Stress wie wir heute. Aber die Ausbildung ist heute besser und sicher auch schwieriger, denn auch Pflegekräfte müssen viel wissen und die Geräte bedienen können.
Danke, Frau Lawson. Wer ruft uns noch an und erzählt von Familie, Essen oder Mode früher und heute? Jetzt gibt es aber erst mal ein bisschen Musik von …`,
      },
      {
        id: 'k3-1.22',
        title: '1.22',
        audioSrc: '/b1.1_1.22.mp3',
        text: `Hallo und herzlich willkommen bei „Talk um Sieben“. Heute ist unser Thema „Neue Liebe, neues Glück“ und ich habe zwei Gäste: Herrn Dr. Kammerer, Psychologe und Paartherapeut, und Dr. Davide Romano. Er ist vor zwei Jahren für seine Liebe nach Leipzig gezogen und hat in Italien alles aufgegeben. Herr Romano, erzählen Sie doch kurz, wie es Ihnen in Deutschland so geht?
Ja, zuerst mal hallo. Es geht mir im Moment sehr gut. Ich bin glücklich verheiratet und fühle mich wohl in Leipzig.
War das von Anfang an so?
Nein, der Anfang war eher schwer. Ich war in Italien schon als Arzt tätig und hatte viele Freunde. Hier in Leipzig musste ich noch mal neu anfangen und das ist nicht so leicht. Zum Glück habe ich ein Jahr lang in Hamburg studiert, deshalb konnte ich ziemlich gut Deutsch.
Können Sie denn in Leipzig als Arzt arbeiten?
Also, das hat etwas gedauert. Eine feste Stelle habe ich erst nach einem Jahr bekommen.
Herr Kammerer, wie sehen Sie das? Die Arbeit aufgeben für die große Liebe – lohnt sich das?
Das muss jeder für sich entscheiden. Natürlich ist nach einem Umzug manches schwierig, das ist ja ganz normal. Man sollte vorher prüfen, wo und wie man am neuen Wohnort arbeiten kann. Meist ergeben sich Chancen, aber eine gute Stelle ist sehr wichtig.
Warum ist das so wichtig?
Damit man dann nicht finanziell vom Partner oder der Partnerin abhängig ist.
Genau. Also, mir ist meine Unabhängigkeit und damit meine Arbeit sehr wichtig.
Man braucht ja auch eine sinnvolle Beschäftigung. Wenn man keine Arbeit hat und nur zu Hause sitzt, dann ist bald die große Krise da und man streitet sich.
Und wie sieht es mit Freunden und Familie aus? Verliert man auch Freundschaften?
So würde ich das nicht sagen. Ich wohne jetzt weit weg von zu Hause, deshalb sehe ich meine Freunde selten. Wir haben aber noch viel Kontakt und besuchen uns auch. Ich fahre zwei, drei Mal pro Jahr zu meinen Eltern und einige meiner Freunde besuchen mich regelmäßig in Deutschland.
Eben. Man kann auch befreundet bleiben, wenn man sich nicht oft sieht. Und man findet in der neuen Heimat ja auch neue Freunde.
Genau. Es ist auch vieles interessanter, weil man an einem neuen Ort lebt. Der Alltag wird nicht langweilig und das gefällt mir gut.
Das kann ich mir gut vorstellen. Herr Romano, was ist Ihnen denn schwer gefallen?
Hm, also, das war die Zeit nach einigen Monaten, als die erste Begeisterung vorbei war. Das war schon schwierig. Da habe ich meine Heimat vermisst und mich nicht so gut gefühlt.
Das ist auch sehr typisch. Bei den meisten tritt dieses Gefühl auf. Aber das Gute daran ist, dass es auch wieder weggeht.
Liebe Zuhörerinnen und Zuhörer, gleich sprechen wir weiter mit unseren beiden Gästen. Was denken Sie? Rufen Sie uns an und erzählen Sie uns Ihre Geschichten.`,
      },
      {
        id: 'k3-1.23',
        title: '1.23',
        audioSrc: '/b1.1_1.23.mp3',
        text: `Gut gesagt: Zuneigung ausdrücken
Das ist so lieb, dass du das für mich gemacht hast.
Aber klar. Ich hab‘ dich einfach gern.
Ich mag dich doch auch!
Ich freu‘ mich so, dass du da bist.
Ich freu‘ mich auch! Ich hab‘ dich lieb.
Ich dich auch!`,
      },
      {
        id: 'k3-1.24',
        title: '1.24',
        audioSrc: '/b1.1_1.24.mp3',
        text: `1. die Arbeitszeit
2. die Unterrichtsform
3. der Zeitungsbericht
4. das Schutzprojekt
5. die Selbstständigkeit
6. das Nahrungsmittel
7. der Lebenslauf
8. die Entscheidung`,
      },
      {
        id: 'k3-1.25',
        title: '1.25',
        audioSrc: '/b1.1_1.25.mp3',
        text: `Noch ein Glas Wasser?
Nein, danke, alles bestens. Was hast du denn da liegen?
Das ist der Schlüssel von meinem ersten Auto.
Was? Den hast du noch?
Ja, der ist mir gestern beim Aufräumen wieder in die Hände gekommen. Den werf‘ ich auch nicht weg. Ich war damals Ende 20, Tobias war schon in der Schule und am Nachmittag im Hort. Ich habe da wieder voll gearbeitet. Das Auto habe ich nicht nur für die Arbeit gebraucht, auch privat war es praktisch. Wir konnten am Wochenende wegfahren oder auch in den Urlaub. Alles war ein bisschen einfacher. Oft war ich da auch das private Taxi für Tobias: Kindergeburtstage, Musikschule, Sport und und und. Du, ich mach‘ uns schnell einen Kaffee.
Ja, danke, ich nehme gern noch einen. Der ist wirklich sehr gut. Oh, so eine Espressokanne hatte ich auch mal.
Ich mag den Kaffee so einfach am liebsten – seit meinem ersten Urlaub in Italien. Wir waren auf einem Campingplatz und unsere Zeltnachbarn haben uns zu einem Kaffee eingeladen. Da habe ich so einen guten Kaffee bekommen. Ich konnte es kaum glauben – und das beim Camping! Natürlich habe ich auch gleich so eine Espressokanne gekauft. Ob das gut für mich war, weiß ich nicht?
Warum?
Na ja, ich habe seitdem immer öfter Kaffee getrunken. Und mein Geschmack hat sich verändert. Ein richtiger Kaffee muss stark sein – und schwarz! Mein Arzt sieht das ein bisschen anders.
Was ich dich noch fragen wollte: Das E-Bike vor der Haustür, ist das von dir?
Ja, und ich finde es ziemlich genial. In der Stadt fahre ich nur noch wenig Auto, mit dem E-Bike bin ich fast genauso schnell. Ich muss keinen Parkplatz suchen, stecke nicht so oft im Stau und für die Umwelt ist es auch besser. Das kommt noch dazu.
Was machst du, wenn es regnet? Oder im Winter?
Es regnet ja nicht immer und der Winter ist auch nicht so lang. Ich habe mir auch gute Kleidung zum Radfahren gekauft. Ich bin jetzt viel mehr draußen und habe mehr Bewegung – fast jeden Tag. Am Wochenende mache ich auch mal Ausflüge mit Hanne. Die kennst du doch, oder? Die ist genauso glücklich mit dem E-Bike wie ich.
Das klingt ja gut. Das muss ich mir auch mal überlegen, ob …`,
      },
    ],
  },
  {
    id: 'b1.1-kapitel-4',
    title: 'Kapitel 4: Arbeitswelt',
    level: 'B1.1',
    lessons: [
      {
        id: 'k4-1.26',
        title: '1.26',
        audioSrc: '/b1.1_1.26.mp3',
        text: `Frau Mersa, was ist in Ihrem Beruf wichtig? Es ist ja kein leichter Beruf.
Das stimmt! Als Mechatronikerin macht man manchmal auch körperlich schwere Arbeit. Die Teile von den Maschinen wiegen oft richtig viel. Und man wird oft schmutzig.
Gibt es noch etwas, das für Ihren Beruf besonders wichtig ist?
Man muss genau sein, muss sehr exakt arbeiten. Und man muss immer eine Lösung finden. Das gefällt mir, ich bin kreativ.
Ist das genug, genau und kreativ zu sein?
Na ja, ich habe einfach Spaß an Technik. Das ist das Wichtigste. Und Elektronik gehört zu Technik einfach dazu.
Wie haben Sie gemerkt, dass Mechatronikerin Ihr Beruf ist?
Ich fahre gern Motorrad und habe ein altes Motorrad repariert. Da habe ich gemerkt, dass mir Technik viel Spaß macht.
Was haben Sie vorher gemacht?
Ich habe zuerst einmal Abitur gemacht und danach gleich begonnen, Chemie zu studieren.
Hat Ihnen das nicht gefallen?
Doch, es war schon gut. Das Studium hat Spaß gemacht, deshalb habe ich auch lange studiert. Und ich habe in den Ferien gearbeitet, später auch neben dem Studium.
Was für einen Nebenjob hatten Sie denn?
Zuerst war ich Briefträgerin, für drei Jahre, immer zwei Monate lang im Sommer. Das war ein guter Job.
Muss man da nicht früh aufstehen?
Doch, doch. Ich musste um halb fünf aufstehen und um halb sechs in der Postzentrale sein. Das war schon hart. Aber ich war gegen Mittag fertig und hatte dann frei.
Sie sagten, dass sie später auch neben dem Studium gearbeitet haben. Was haben Sie noch gemacht?
Ich war auch eine Zeit lang Taxifahrerin. Da habe ich ganz gut verdient, vor allem durch das Trinkgeld. Und ich hatte immer viel Kontakt mit Menschen.
Warum haben Sie gerade als Taxifahrerin gejobbt?
Da konnte ich am Abend und in der Nacht arbeiten, eben neben dem Studium.
Und dann waren Sie mit dem Studium fertig und Chemikerin?
Ja, genau, zwei Jahre lang war ich bei einer großen Firma angestellt. Da habe ich im Labor Kontrollen und Analysen von Stoffen gemacht.
Warum sind Sie nicht Chemikerin geblieben?
Ich habe im Labor immer dieselben Tests durchgeführt. Es war immer dieselbe Arbeit, keine Abwechslung. Das hat mich nicht glücklich gemacht.
Und dann haben Sie Ihre Lust an Technik entdeckt? Stimmt‘s?
Ja, genau. Deshalb habe ich auch beschlossen, dass ich noch mal was Neues lernen will. Ich habe eine Ausbildung zur Mechatronikerin angefangen. Drei Jahre Ausbildung und daneben die Berufsschule. Das habe ich noch keine Minute bereut.`,
      },
      {
        id: 'k4-1.27',
        title: '1.27',
        audioSrc: '/b1.1_1.27.mp3',
        text: `1
Hey Boris, machst du auch gerade Pause? Wie geht’s denn so?
Es geht so, es ist leider echt stressig diese Woche. Ich hätte gern Zeit für eine längere Pause, aber ich muss gleich wieder an den Computer.
Ach, du Armer! Was musst du denn so dringend machen?
Ich hab‘ gleich noch eine Besprechung.
Was für eine Besprechung?
Ach, es geht um den Auftrag in Schweden. Der ist superwichtig, sagt der Chef. Darum fragt er auch ständig nach: „Habt ihr das schon gemacht und das? Und ist das Programm auch vorbereitet?“ Die Unterlagen habe ich fertig, aber der Chef möchte die Präsentation noch mal mit mir ansehen. Und in einer Stunde kommen noch die zwei Geschäftspartner aus Schweden dazu.
Herr Jeschke, kommen Sie bitte zu mir ins Büro?
Ja, bin schon auf dem Weg.`,
      },
      {
        id: 'k4-1.28',
        title: '1.28',
        audioSrc: '/b1.1_1.28.mp3',
        text: `2
Hätten Sie kurz Zeit, mir zu helfen?
Natürlich. Was ist denn das Problem?
Für die Besprechung heute brauche ich dringend die Präsentation über unsere Firma. Aber ich kann sie nirgends auf unserem Server finden. Wenn das eine Datei von mir wäre, würde ich sie sofort finden. Aber so?
Ah, das macht doch nichts. Das Problem kenne ich selbst. Ich suche auch oft Dateien. Aber wo die Präsentation liegt, weiß ich.
Super, wo denn?
Hier unter V:, bei „Allgemeines“. Klicken Sie da mal drauf.
Okay. Ah ja, da „Präsentationen“, in dem Ordner ist sie bestimmt.
Genau, gehen Sie mal in den Ordner, da ist es dann gleich die erste Datei.
Danke, dann kann ich die Besprechung jetzt weiter vorbereiten.
Gern! Und viel Erfolg!`,
      },
      {
        id: 'k4-1.29',
        title: '1.29',
        audioSrc: '/b1.1_1.29.mp3',
        text: `3
Hast du noch nicht Feierabend, Boris?
Nein, leider nicht. Ich muss noch was fertig machen. Wir hatten ja heute die Besprechung mit den Geschäftspartnern aus Schweden.
Ja, stimmt! Und? Wie war‘s?
Ich denke, ganz gut. Aber ich muss noch was für morgen früh vorbereiten, da habe ich noch mal eine Besprechung.
Okay. Also, ich mache jetzt Schluss. Ich denke, ich kann dich nicht mitnehmen, oder?
Nein, danke, das ist nett, aber es dauert leider noch länger. Schade, wenn diese Besprechung nicht wäre, würde ich auch nach Hause gehen. Aber morgen Abend mache ich früher Feierabend, da können wir zusammen fahren.
Na, dann störe ich nicht länger. Mach nicht mehr so lang und dann noch einen schönen Feierabend. Ciao!
Tschüs, bis morgen!`,
      },
      {
        id: 'k4-1.30',
        title: '1.30',
        audioSrc: '/b1.1_1.30.mp3',
        text: `Und? Ist das in Ordnung so, Frau Schütz?
Oh nein! Das ist ja schrecklich. Ich wollte doch eine hellbraune Tönung und keine rote!
Na ja, ein bisschen Rot ist schon dabei, aber mehr Braun. Und das steht Ihnen doch gut.
Ich sehe doch selbst, dass das Rot ist. So geht das nicht.
Es ist mir ja auch unangenehm, dass die Farbe ein bisschen anders geworden ist.
Und was machen wir jetzt? Diese Farbe wollte ich nicht.
Wir können noch einmal nachtönen, aber das dauert dann noch mal eine Stunde …
Ich hab‘ zwar keine Zeit, aber so kann ich nicht rumlaufen. Dann machen Sie das, aber bitte jetzt die richtige Farbe …`,
      },
      {
        id: 'k4-1.31',
        title: '1.31',
        audioSrc: '/b1.1_1.31.mp3',
        text: `Technik Brunner, guten Tag! Sie sprechen mit Vera Hobel.
Guten Tag, Frau Hobel. Hier ist Kreidl.
Guten Tag, Herr Kreidl.
Frau Hobel, es gibt ein Problem. Wir haben die Ware noch nicht bekommen und brauchen sie ganz dringend.
Oje. Was ist da passiert? Ich habe die bestellte Ware schon vor zwei Tagen weggeschickt.
Aber sie ist immer noch nicht hier! Und wir brauchen sie ganz dringend.
Ich verstehe und es tut mir auch sehr leid. Ich kümmere mich sofort darum. Da gibt es wohl ein Problem beim Kurierdienst.
Die Ware muss morgen früh unbedingt bei uns sein.
Ich tu, was ich kann, und Sie hören spätestens in einer halben Stunde von mir. Auf Wiederhören, Herr Kreidl.`,
      },
      {
        id: 'k4-1.32',
        title: '1.32',
        audioSrc: '/b1.1_1.32.mp3',
        text: `Gut gesagt: emotionaler sprechen mit doch
Entschuldigen Sie bitte die Verspätung.
Das macht doch nichts.
Das ist doch kein Problem.
Ich habe gestern dem Chef aus Versehen Saft über die Jacke geschüttet.
Echt? Das ist doch peinlich!
Ja, aber er war echt cool. Er hat gleich gesagt: „Das ist doch nicht so schlimm.“`,
      },
      {
        id: 'k4-1.33',
        title: '1.33',
        audioSrc: '/b1.1_1.33.mp3',
        text: `1a und b
Entschuldigen Sie bitte!
Macht nichts.
2a und b
Das ist mir wirklich peinlich.
Das kann doch mal passieren.
3a und b
Das war keine Absicht.
Kein Problem.`,
      },
      {
        id: 'k4-1.34',
        title: '1.34',
        audioSrc: '/b1.1_1.34.mp3',
        text: `Ach, hallo Piet, wie geht’s?
Hi Marco, ganz gut. Und dir? Mira hat gesagt, dass du einen Job suchst.
Ja, das stimmt. Ich suche einen Job. Ich muss neben dem Studium einfach auch ein bisschen Geld verdienen. Ich habe ja jetzt ein Zimmer im Wohnheim und meine Eltern möchten nicht die komplette Miete zahlen. Ich muss auch einen Teil selbst bezahlen. Weißt du zufällig einen Job?
Hm, puh …
Also, vormittags bin ich ja immer in der Uni, aber dreimal die Woche könnte ich am Nachmittag arbeiten. Und am Wochenende habe ich auch Zeit.
Und an was für einen Job hast du gedacht?
Keine Ahnung. Vielleicht in einem Büro. Oder in einem Hotel. Hauptsache, die Arbeitszeiten passen und das Team ist nett. Wo arbeitest du denn jetzt?
Ach, ich arbeite immer noch als Interviewer bei dieser Marketingagentur. Es ist ganz okay …`,
      },
      {
        id: 'k4-1.35',
        title: '1.35',
        audioSrc: '/b1.1_1.35.mp3',
        text: `Computerschule Big, Perez, guten Tag!
Guten Tag, mein Name ist Marco Baumann. Ich habe gelesen, dass Sie jemanden für die Büroorganisation suchen. Ist das noch aktuell?
Ja, die Stelle ist noch nicht besetzt.
Ach, das ist ja schön. Diese Stelle ist sehr interessant für mich.
Haben Sie denn schon in diesem Bereich gearbeitet?
Ja, letztes Jahr habe ich ein halbes Jahr bei der Firma Boisner und Co gearbeitet und dort alle möglichen Büroarbeiten erledigt. Und im Winter habe ich ein Praktikum bei einer Sprachschule gemacht.
Das ist sehr gut, denn Sie sollten auch ein bisschen Erfahrung mitbringen.
Ich würde gern wissen, wie die Arbeitszeiten sind. Ich bin ja Student und muss auch an die Uni. Suchen Sie jemanden für vormittags oder nachmittags?
Wir sind da ziemlich flexibel. Wir brauchen jemanden, der 15 Stunden bei uns arbeitet. Das kann am Vormittag oder am Nachmittag sein. Nur am Freitagnachmittag müssten Sie immer hier sein, weil das Büro sonst nicht besetzt wäre.
Ah ja, das würde für mich gut passen. Können Sie mir auch sagen, wie hoch der Stundenlohn ist?
Ja, natürlich. Wir zahlen 14,50 Euro pro Stunde. Ich würde vorschlagen, Sie kommen persönlich bei uns vorbei. Dann lernen wir uns kennen und können genau über die Aufgaben bei uns im Büro sprechen.
Oh ja, gerne.
Passt Ihnen Mittwoch, der 10. Mai?
Moment. … Ja, das geht. Um wie viel Uhr soll ich bei Ihnen sein?
Um 16 Uhr. Ist das möglich?
Ja, kein Problem. Gut, dann vielen Dank und bis nächsten Mittwoch.
Bitte. Auf Wiederhören.
Auf Wiederhören.`,
      },
    ],
  },
  {
    id: 'b1.1-kapitel-5',
    title: 'Kapitel 5: Umweltfreundlich',
    level: 'B1.1',
    lessons: [
      {
        id: 'k5-1.36',
        title: '1.36',
        audioSrc: '/b1.1_1.36.mp3',
        text: `Was kochen wir denn heute?
Ich weiß nicht. Vielleicht gibt es was Gutes im Angebot? Komm, wir schauen mal hier.
Hmm, Hühnerfleisch … Wir könnten doch Huhn mit Zitrone machen.
Okay. Schau mal, das Fleisch hier ist total billig. Sollen wir das nehmen?
Ach, ich weiß nicht. Lass uns lieber Bio-Fleisch kaufen.
Puh, das ist immer so teuer.
Ich weiß. Aber dafür essen wir ja echt selten Fleisch.
Okay. So, dann brauchen wir auch noch Salat. Komm. Also, ich weiß nie, ob ich die Bio-Paprika aus Spanien oder irgendwo anders her kaufen soll oder die normalen Paprika aus der Region.
Keine Ahnung, was da besser ist.
Also, lass uns den Salat und die Paprika aus der Region nehmen. Immerhin sind die nicht hier in den Supermarkt geflogen.
Okay, du hast recht. Boah, ich versteh‘ echt nicht, warum das hier immer alles in Plastik eingepackt sein muss. Das gibt‘s doch nicht!
Ja, echt total blöd. Guck mal, hier die Gurke ist ohne Verpackung. Immerhin. Haben wir noch Zitronen zu Hause?
Ja, ich glaube schon. Nehmen wir auch noch ein paar Flaschen Wasser mit?
Nö, die sind so schwer. Ich hab‘ keine Lust, so viel zu tragen. Außerdem können wir doch auch Leitungswasser trinken. Das kommt aus dem Hahn in der Küche und ist billiger und umweltfreundlicher.
Na gut, aber eine Flasche Orangensaft nehme ich noch.
Okay. Komm, da ist die Kasse.`,
      },
      {
        id: 'k5-1.37',
        title: '1.37',
        audioSrc: '/b1.1_1.37.mp3',
        text: `1. Man kann [Glasflaschen] verwenden.
2. Man kann Glasflaschen [doppelt so oft] verwenden.
3. Man kann Glasflaschen doppelt so oft wie [Plastikflaschen] verwenden.
4. Man kann Glasflaschen doppelt so oft wie [Plastikflaschen] verwenden, aber sie sind [schwerer].`,
      },
      {
        id: 'k5-1.38',
        title: '1.38',
        audioSrc: '/b1.1_1.38.mp3',
        text: `1a. Man kann regionale Produkte auf dem Markt kaufen.
1b. Man kann regionale Produkte auf dem Markt kaufen, man findet sie aber auch im Supermarkt.
2a. Unnötige Verpackungen sind nicht gut für die Umwelt.
2b. Unnötige Verpackungen sind nicht gut für die Umwelt, weil sie das Müllproblem verstärken.`,
      },
      {
        id: 'k5-1.39',
        title: '1.39',
        audioSrc: '/b1.1_1.39.mp3',
        text: `Gut gesagt: Smalltalk über das Wetter
Ach, hallo Herr Batic!
Hallo Frau Schreiner! Was für ein Wetter heute, oder?
Ja, aber wirklich! Bei dem Regen möchte man gar nicht vor die Tür gehen!
Na ja, wenigstens ist die Vorhersage für morgen besser.
Ja, zum Glück!
Was für ein Wetter heute!
Ja, endlich wieder Sonne! So ein Traumwetter!
Ja, und morgen ist Samstag und das Wetter soll so bleiben.
Wirklich? Das ist ja toll!`,
      },
      {
        id: 'k5-1.40',
        title: '1.40',
        audioSrc: '/b1.1_1.40.mp3',
        text: `Die Aussichten für morgen: Auch am Dienstag wird es noch einmal sehr heiß. Die Temperaturen erreichen Werte um die 32 Grad. Allerdings weht ein zum Teil starker Wind aus westlicher Richtung. Am Abend muss örtlich mit starken Gewittern gerechnet werden.`,
      },
      {
        id: 'k5-1.41',
        title: '1.41',
        audioSrc: '/b1.1_1.41.mp3',
        text: `Auch morgen ist von der Sonne kaum etwas zu sehen. Die Höchsttemperaturen bewegen sich zwischen minus 4 und minus 1 Grad. Dabei kommt es im Laufe des Tages immer wieder zu Schneefällen. Ab Mittwoch gibt es eine Wetterbesserung und örtlich scheint auch für längere Zeit die Sonne.`,
      },
      {
        id: 'k5-1.42',
        title: '1.42',
        audioSrc: '/b1.1_1.42.mp3',
        text: `Bis zum Mittag kommt die Sonne nicht richtig durch und es ist wolkig bei Höchsttemperaturen um die 14 Grad. Erst am Mittag lockert sich die Wolkendecke auf. Es wird sonnig und am Nachmittag steigen die Werte auf bis zu 20 Grad. In den nächsten Tagen weht ein leichter Wind.`,
      },
      {
        id: 'k5-1.43',
        title: '1.43',
        audioSrc: '/b1.1_1.43.mp3',
        text: `Das Wetter: In der Nacht zum Sonntag breiten sich Nebel und Hochnebel erneut aus. Das Regenrisiko liegt bei 95 Prozent. Der Regen wandert nur ganz allmählich ostwärts. Es weht ein schwacher, an der See auch mäßiger Wind aus unterschiedlichen Richtungen. Die Tiefstwerte liegen zwischen 8 und 10 Grad.`,
      },
      {
        id: 'k5-1.44',
        title: '1.44',
        audioSrc: '/b1.1_1.44.mp3',
        text: `In unserem heutigen Beitrag zur Themenwoche „Engagement für Mensch und Natur“ geht es um einen ganz besonderen Sport. Haben Sie schon mal von Plogging gehört? In Plogging stecken zwei Wörter: das englische Wort „Jogging“ und das schwedische Verb „plocka upp“, das bedeutet „aufheben“. Beim Plogging joggt man also und sammelt dabei Müll.
Plogging ist super, man benötigt nicht viel dafür: Joggingschuhe, einen Müllbeutel, ein Paar festere Handschuhe und vielleicht eine Greifzange. Beim Plogging oder auch Ploggen muss man gar nicht unbedingt joggen. Viele gehen auch nur wandern oder walken und sammeln dabei Müll auf. Ich finde es super, dass man draußen an der frischen Luft ist, sich bewegt und auch noch was Gutes für die Umwelt tut.
Ja, und das ist dringend nötig, denn viele werfen Plastikverpackungen, Flaschen, Dosen und anderen Müll einfach irgendwohin. Aber wie funktioniert der Sport? Geht jeder einfach alleine ploggen?
Also, man kann natürlich auch alleine unterwegs sein, aber mehr Spaß macht es mit anderen zusammen. Einfach Freunde fragen, ob sie mitmachen wollen. Oder man schaut ins Internet, da findet man viele Gruppen, die sich über neue Mitglieder freuen.
Also, nix wie los! Die großen Vorteile vom Plogging sind, dass man an der frischen Luft Ausdauer und Kondition trainiert – also etwas für die Gesundheit tut – und dass man gleichzeitig die Umwelt schützt. Probiert es doch einfach mal aus. Viel Spaß!`,
      },
    ],
  },
  {
    id: 'b1.1-kapitel-6',
    title: 'Kapitel 6: Blick nach vorn',
    level: 'B1.1',
    lessons: [
      {
        id: 'k6-1.45',
        title: '1.45',
        audioSrc: '/b1.1_1.45.mp3',
        text: `Nummer 1
Also, ich kann mir gut vorstellen, dass es in der Zukunft nur noch wenige Autos gibt. Der Verkehr in den Städten ist ja auch jetzt schon eine Katastrophe, nur Stau und schlechte Luft. Deshalb muss es bald Alternativen geben. Ich weiß nicht, ob das Drohnen sein werden, aber ich kann es mir gut vorstellen. Und ich glaube auch, dass das gar nicht mehr so lange dauern wird. Vielleicht ist es schon in 10 Jahren so weit.
Nummer 2
Ich habe mal im Fernsehen eine Reportage über diese Chips gesehen. Das gibt es ja schon. Man kann damit Türen öffnen, alle Passwörter sind gespeichert, man kann damit bezahlen und so weiter. Das ist bestimmt praktisch! Ich finde die Vorstellung aber komisch, etwas unter der Haut zu haben. Aber wahrscheinlich ist das in ein paar Jahren total normal, auch für mich.
Nummer 3
Wohnen auf dem Mars? Nein, das passiert höchstens in Science-Fiction-Filmen. Wie soll das denn gehen? Man kann nicht atmen und da wachsen ja auch keine Früchte und kein Gemüse und so weiter. Wie soll überhaupt jemand auf einem anderen Planeten leben? Ich glaube, das bleibt eine Fantasie.`,
      },
      {
        id: 'k6-1.46',
        title: '1.46',
        audioSrc: '/b1.1_1.46.mp3',
        text: `Ach, wo ist denn jetzt schon wieder diese Rechnung? Das gibt es doch nicht, die muss doch hier sein. Mist! Ich muss einfach öfter aufräumen! Damit fange ich jetzt sofort an!
Kennen Sie das? Wie oft haben wir uns schon vorgenommen, etwas zu ändern? Und wie oft haben wir es dann auch wirklich geändert? Sehr oft bleibt es bei den guten Vorsätzen. Aber warum ist das so? Die Antwort ist eigentlich ganz einfach: Der Mensch ist ein Gewohnheitstier. Wenn wir gewohnt sind, etwas zu tun – oder eben nicht zu tun, dann ist das für uns einfach. Unsere Gewohnheiten zu ändern ist für uns schwer. Was können wir also tun, damit zum Beispiel auf dem Schreibtisch nicht immer so ein Chaos ist?
So, ich räume jetzt sofort den Schreibtisch auf. Dann kann ich auch gleich noch im Regal Ordnung machen. Und überhaupt: Ich ändere ab jetzt mein Leben. Schluss mit süßen und fettigen Sachen! Und … und beim Fitness-Studio melde ich mich auch gleich an. Außerdem könnte ich heute noch das Sommerfest mit den Kollegen organisieren. Und ab heute lasse ich abends das Handy aus. So, das ziehe ich jetzt durch!
Hm, ob das funktioniert? Vermutlich nicht und warum? Das sind einfach viel zu viele Vorsätze auf einmal. Fangen Sie klein an! Nehmen Sie sich nicht vor, Ihr ganzes Leben sofort zu ändern. Machen Sie kleine, aber realistische Pläne wie zum Beispiel, wichtige Papiere sofort aufräumen und nicht achtlos auf den Schreibtisch zu legen. Nehmen Sie sich also Dinge vor, die Sie leicht in Ihren Alltag integrieren können. Nur wenn wir etwas regelmäßig machen, kann es eine Gewohnheit werden und nur dann fühlen wir uns unwohl, wenn wir es nicht machen. Wir müssen uns dann gar nicht überwinden.
Ach, ich wollte doch gestern noch den neuen Praktikanten anrufen und Herrn Takis habe ich auch nicht zurückgerufen. Mann, das Regal im Büro ist auch noch nicht aufgeräumt, aber im Fitness-Studio bin ich jetzt Mitglied. Ich bin so stolz auf mich! Ich mache ab sofort viel mehr Sport.
„Mehr Sport“ – das klingt gut. Aber was heißt das genau? Diesen Plan kann ich ganz problemlos von einem Tag auf den nächsten schieben. Heute bin ich zu müde. Kein Problem, ich mache einfach morgen mehr Sport. Morgen hat es auch nicht geklappt? Egal, am Wochenende mache ich dafür doppelt so viel … Das ist ein zweiter häufiger Fehler: Die guten Vorsätze sind nicht konkret genug. Fassen Sie Ihre Vorsätze in Zahlen: Sagen Sie nicht „mehr Sport“, sondern z. B. „jeden Tag 20 Minuten Bewegung“. Das ist realistisch und Sie können jeden Tag klar erkennen, ob Sie Ihr Ziel erreicht haben. Eventuell finden Sie ja auch einen Freund, Kollegen oder Nachbarn, der mit Ihnen zusammen Sport macht. Das macht mehr Spaß und man findet nicht so leicht Ausreden.
So, jetzt ist das Regal endlich dran. So viel Staub! Hm, wohin tu ich das jetzt? Ach, erst mal hier unten ins Regal. Und was ist das? … Das kann ich sicher mal brauchen. Ach, ich weiß gar nicht, wohin ich das alles tun soll! Egal, ich stelle einfach alles wieder zurück ins Regal.
Ich vermute, so schnell wird niemand mehr versuchen, dieses Regal aufzuräumen. Das ist ein weiterer häufiger Fehler: Man will alles schnell und sofort und ist ungeduldig. Das Chaos im Regal ist nicht in einer halben Stunde entstanden. Warum sollte man es in einer halben Stunde beseitigen können? Haben Sie also Geduld mit sich und den Dingen und nutzen Sie die Zeit auch, um gleichzeitig etwas Schönes zu tun: Beim Aufräumen kann man zum Beispiel sehr gut Musik hören. Wenn Sie Kopfhörer tragen, ist das auch im Büro kein Problem. So macht das Aufräumen Spaß und es fällt leichter, es öfter zu tun. Also, bleiben Sie dran und vergessen Sie nicht: Mit kleinen Schritten kann man Großes bewegen. Das ist der Schlüssel zum Erfolg.`,
      },
      {
        id: 'k6-1.47',
        title: '1.47',
        audioSrc: '/b1.1_1.47.mp3',
        text: `1. genießen
2. der Stress
3. groß
4. außer
5. heißen
6. lassen
7. der Spaß
8. passen
9. der Schluss
10. der Gruß`,
      },
      {
        id: 'k6-1.48',
        title: '1.48',
        audioSrc: '/b1.1_1.48.mp3',
        text: `Hey Diego, wie geht’s? Alles gut? Du siehst so gestresst aus.
Hi Alex! Ja, das bin ich auch, ehrlich gesagt. Ich komme gerade von der Arbeit und der Bus war wieder so voll und eng. Und natürlich standen wir auch wieder im Stau. Ich finde das echt anstrengend. Aber mit dem Rad ist es einfach zu weit bis zum Büro.
Das kenne ich. Ich fahre ja immer mit der U-Bahn zur Arbeit und da ist es echt auch immer so voll. Aber so ist es eben in der Stadt. Hier leben einfach so viele Menschen.
Aber trotzdem muss sich da dringend mal was ändern. Ich muss auch unbedingt noch mal mit meiner Chefin sprechen. Vielleicht kann ich zwei oder drei Tage in der Woche ins Homeoffice gehen. Dann spare ich mir den Weg.
Ja, mach das.
Oder vielleicht ziehe ich auch einfach um. Irgendwo in einen kleinen Ort. Da bekommt man wenigstens auch noch eine bezahlbare Wohnung. Hier steigen die Preise ja ständig.
Ja, das ist echt ein Problem. Der Staat müsste auch einfach mehr bauen.
Aber es gibt ja auch kaum noch Platz in der Stadt für neue Häuser und Wohnungen!
Ach komm, jetzt haben wir genug geschimpft. Lass uns erst mal einen Kaffee bestellen.
Okay, du hast ja recht.`,
      },
      {
        id: 'k6-1.49',
        title: '1.49',
        audioSrc: '/b1.1_1.49.mp3',
        text: `Gut gesagt: Vorfreude ausdrücken
Ach, ab morgen habe ich endlich Urlaub. Ich kann es kaum erwarten!
Oh, du hast es gut. Ich zähle schon die Tage bis zum Sommer.
Na, die Zeit vergeht bestimmt schnell. Wann ist es denn endlich so weit? Wann beginnt dein Urlaub?
Am 13.6. Wenn doch nur schon Juni wäre!`,
      },
      {
        id: 'k6-1.50',
        title: '1.50',
        audioSrc: '/b1.1_1.50.mp3',
        text: `[Lied “Kaum erwarten” von Wincent Weiss]`,
      },
    ],
  },
  {
    id: 'b1.2-kapitel-7',
    title: 'Kapitel 7: Zwischenmenschliches',
    level: 'B1.2',
    lessons: [
      {
        id: 'k7-2.1',
        title: '2.1',
        audioSrc: '/b1.2_2.1.mp3',
        text: `Gespräch 1
Also, ich bin jetzt ziemlich k. o.
Ich auch, aber das Spiel heute hat echt Spaß gemacht … und war anstrengend!
Stimmt! Ich muss mich leider etwas beeilen. Ich gehe gleich noch mit Freunden ins Kino.
Boah, da hätte ich jetzt keine Lust drauf. Ich freue mich auf mein Sofa zu Hause.
Dann bis nächste Woche, oder?
Ach, gut, dass du fragst! Ich bin dann für zwei Wochen nicht da. Ich fahre mit meiner Familie ans Meer.
Echt? Cool. Wohin fahrt ihr denn?
Wir wollen an die Ostsee. Hoffentlich spielt das Wetter mit.
Ach, bestimmt. Dann erzählst du mir danach davon. Ich wollte auch schon lange mal an die Ostsee.
Klar, mache ich. Dir jetzt einen schönen Abend. Tschüs!
Danke, dir auch. Ciao!`,
      },
      {
        id: 'k7-2.2',
        title: '2.2',
        audioSrc: '/b1.2_2.2.mp3',
        text: `Gespräch 2
Könnt ihr euch noch an meinen alten Schulfreund Adrian erinnern? Der war doch früher nach der Schule oft hier bei uns.
Adrian? War das der, der dann mit seiner Familie nach Spanien gezogen ist?
Und du hattest doch einen Riesenstreit mit ihm, oder?
Genau, wir haben auch seitdem kein Wort mehr gesprochen. Aber jetzt hat er mich letzte Woche kontaktiert. Er will nämlich heiraten und hat mich eingeladen.
Echt? Aber ihr habt doch gar keinen Kontakt mehr?
Ja, ich finde das auch ein bisschen komisch. Ich freue mich über die Einladung, aber ich weiß nicht, ob ich hingehen soll. Wir kennen uns doch eigentlich gar nicht mehr und der Streit damals hat mich echt verletzt.
Aber vielleicht versteht ihr euch dann ja wieder. Das wäre doch schön! Ihr wart mal so gut befreundet …
Da hast du recht, vielleicht fahre ich wirklich hin.
Und was macht er jetzt so? Hat er noch was erzählt?`,
      },
      {
        id: 'k7-2.3',
        title: '2.3',
        audioSrc: '/b1.2_2.3.mp3',
        text: `Gespräch 3
Ah, Morgen, Frau Katz.
Hallo, Herr Aksoy. Wie war der Urlaub?
Ach, traumhaft! Wir haben uns super erholt und viel Sport gemacht. Danke noch mal fürs Blumengießen.
Aber gern, das ist doch selbstverständlich!
Wie geht es Ihnen denn?
Ach, ich hätte auch so gern Urlaub. Im Moment ist es in der Arbeit leider sehr stressig.
Ja, ich fürchte, auf mich wartet am Montag auch ganz schön viel Arbeit. Also dann, noch einen schönen Tag.
Danke, ebenfalls!
Wiedersehen!`,
      },
      {
        id: 'k7-2.4',
        title: '2.4',
        audioSrc: '/b1.2_2.4.mp3',
        text: `Sag mal, Matilda, kommst du eigentlich aus Freiburg?
Nee, ich wohne erst seit einem Jahr hier. Als ich mit dem Studium fertig war, habe ich mich hier beworben. Ich fand Freiburg schon immer total schön. Und ich hatte Glück, ich habe gleich eine Stelle gefunden. Und nach einer Woche in einer Pension hatte ich auch eine Wohnung.
Und hast du dich hier schon gut eingelebt?
Also, am Anfang war‘s schon ziemlich schwer. Ich hatte mich so auf mein neues Leben hier gefreut. Diese tolle Stadt, die tolle Umgebung und alles. Aber ich kannte hier überhaupt niemanden. In der Arbeit war auch niemand so ungefähr in meinem Alter und ich wusste so gar nicht, wie ich mir hier einen neuen Freundeskreis aufbauen sollte. Ich habe mich ziemlich einsam gefühlt und meine alten Freunde sehr vermisst.
Das kann ich mir vorstellen. Aber offensichtlich hat sich das ja dann geändert.
Ja, genau. Ich habe in der Arbeit einen Aushang für ein Netzwerk unter Nachbarn gesehen. Da habe ich mich dann gleich mal angemeldet.
Ein Netzwerk für Nachbarn? Was ist denn das?
Das ist ein Online-Netzwerk für alle Leute, die in einem Stadtteil wohnen. Wenn man zum Beispiel etwas zum Verschenken hat, kann man das dort posten oder wenn man bei irgendetwas Hilfe braucht und so weiter. Und ich habe mir gedacht, warum soll man das Netzwerk nicht auch nutzen, um Leute kennenzulernen?
Aha, und wie hast du das gemacht?
Na ja, meine idea war, Menschen zusammenzubringen. Ich dachte, dass vielleicht auch Menschen, die schon länger in Freiburg wohnen, mal neue Leute kennenlernen wollen. Also habe ich eine Einladung ins Netzwerk gestellt: Ich habe acht Leute zum Abendessen zu mir nach Hause eingeladen. Anmelden konnte man sich über das Netzwerk. Die Idee kam gut an. Es haben sich sofort Leute angemeldet.
War das nicht komisch, mit fremden Leuten beim Essen zu sitzen?
Am Anfang schon, aber ganz schnell unterhalten sich alle und meistens werden es wirklich interessante Abende. Viele fanden meine Idee toll und jetzt organisieren auch andere Nachbarn diese Abendessen. Damit es nicht so viel Arbeit für die Gastgeber ist, machen wir es jetzt immer so: Jeder, der kommt, bringt etwas mit, also zum Beispiel einen Salat oder die Nachspeise oder Getränke.
Klingt echt super.
Ja, ist es auch. Ich war bestimmt auf zehn verschiedenen Abendessen in meinem Viertel. Natürlich findet man nicht immer jeden interessant und sympathisch. Aber ich habe so total nette Menschen kennengelernt. Mit einigen Leuten hat sich eine richtige Freundschaft entwickelt und wir unternehmen jetzt auch oft etwas am Wochenende. Und deshalb fühle ich mich jetzt hier in Freiburg richtig wohl. Und übrigens habe ich auch Josephine so kennengelernt.
Ach, echt? Schau mal, wer da kommt! Hi Josephine!`,
      },
      {
        id: 'k7-2.5',
        title: '2.5',
        audioSrc: '/b1.2_2.5.mp3',
        text: `Gespräch A
Hallo!
Ah, da bist du ja endlich! Wir warten schon ewig.
Ach, ‘tschuldigung, ich war in der Stadt und dann noch kurz bei Dennis. Da haben wir noch was am Computer gespielt …
Kurz ist gut … Und was hast du dir schon wieder gekauft? Dein Schrank ist doch schon voll!
Regt euch doch nicht gleich so auf! In der Sporthalle war ein Flohmarkt, da war alles echt billig und es gab coole Sachen.
Vielleicht solltest du dann selbst mal etwas verkaufen auf dem Flohmarkt. Du hast einfach keinen Platz mehr.
Das ist echt nicht euer Problem! Mit meinem Geld kann ich ja wohl machen, was ich will.
Seit du jobbst, gibst du wirklich viel Geld aus. Willst du nicht mal was sparen? Es dauert noch zehn Minuten, bis wir essen können. Könntest du bitte schnell den Tisch decken?
Ja, mach ich gleich. Ich bring nur schnell die „vielen“ neuen Sachen in mein Zimmer.`,
      },
      {
        id: 'k7-2.6',
        title: '2.6',
        audioSrc: '/b1.2_2.6.mp3',
        text: `Gespräch B
Du bist ja immer noch nicht fertig. Ich dachte, wir wollen jetzt los.
Du, ich bin so müde. Im Büro war es heute so anstrengend. Ich würde gerne zu Hause bleiben.
Seitdem du die neue Stelle hast, bist du immer müde und erschöpft. Ich hatte mich so auf heute Abend gefreut. Ich wünsche mir wirklich, dass wir mehr zusammen unternehmen.
Komm schon, wir finden bestimmt einen Kompromiss. Ich habe gerade echt so viel Stress. Warum kann ich nicht lesen, während du mit deinen Freunden unterwegs bist? Und wir gehen einfach am Wochenende zusammen aus, okay?
Na gut, wenn du meinst. Ist auch nicht so schlimm. Ich kann dich auch irgendwie verstehen. Dann mach du dir einen schönen Abend und ich treffe mich mit Jakob, Lisa und Aylin.
Gut. Sei mir bitte nicht böse und sag schöne Grüße. Wir machen dann am Samstag was Schönes, zum Beispiel …`,
      },
      {
        id: 'k7-2.7',
        title: '2.7',
        audioSrc: '/b1.2_2.7.mp3',
        text: `Gespräch C
Sag mal, Julia, hast du gestern eigentlich das Bad geputzt?
Äh, gestern? War ich mit Badputzen dran? Ich hab‘ doch schon am Wochenende für alle gekocht!
Das war auch total lecker! Aber du warst gestern mit Putzen dran, nächste Woche bin ich dran.
Das tut mir echt leid, aber ich hab‘s einfach vergessen.
Ja, einmal vergessen ist ja im Prinzip okay. Aber seitdem du hier wohnst, hast du das schon sehr oft vergessen. Und wie sieht es eigentlich hier aus? Das ist doch unser gemeinsames Wohnzimmer. Muss da wirklich so viel rumliegen? Wir sollen uns doch alle wohlfühlen.
Jetzt übertreibst du aber etwas! Ich bin ja noch hier und mach‘ gleich Ordnung. Entschuldige bitte, ich bin einfach nicht so ordentlich …
Also, wenn es dir hilft, kann ich dich gern nächstes Mal daran erinnern. Du kannst doch zum Beispiel putzen oder aufräumen, während du mit deinem Freund telefonierst.
Stimmt, seit Simon im Ausland studiert, telefonieren wir oft und lang. Ich probiere das jetzt gleich aus und rufe ihn an.
Das ist super! Und nicht vergessen, du wolltest gleich das Bad putzen.
Ja, ja, klar! Und bevor ich telefoniere, mache ich uns noch einen Kaffee, einverstanden?
Perfekt!`,
      },
      {
        id: 'k7-2.8',
        title: '2.8',
        audioSrc: '/b1.2_2.8.mp3',
        text: `1
Ich muss jetzt gehen.
Warte!
Ich muss jetzt gehen.
Warte mal!
2
Ihr seid schon wieder zu spät!
Du hast recht.
Ihr seid schon wieder zu spät!
Du hast ja recht.
3
Lina ist noch im Büro.
Wann kommt sie?
Lina ist noch im Büro.
Wann kommt sie denn?
4
Warum kommt Mark nicht?
Er ist krank.
Warum kommt Mark nicht?
Er ist wohl krank.
5
Wir besuchen euch bald!
Das ist schön!
Wir besuchen euch bald!
Das ist aber schön!`,
      },
      {
        id: 'k7-2.9',
        title: '2.9',
        audioSrc: '/b1.2_2.9.mp3',
        text: `Warte mal!
Du hast ja recht.
Wann kommt sie denn?
Er ist wohl krank.
Das ist aber schön!`,
      },
      {
        id: 'k7-2.10',
        title: '2.10',
        audioSrc: '/b1.2_2.10.mp3',
        text: `Gut gesagt: Sprichwörter
Ich habe zwei Karten für das Konzert in der Stadthalle für morgen Abend. Kommst du mit?
Woher hast du denn plötzlich die Karten?
Ach, eigentlich wollten meine Schwester und ihr Freund hin. Jetzt haben sie sich gestritten und wollen nicht gehen.
Tja, wenn zwei sich streiten, freut sich der Dritte.
Warum hast du denn so gute Laune?
Ach, ich habe heute das Tennisturnier gewonnen. Meine Freunde waren sicher, dass ich das nicht schaffe, aber heute hat alles gepasst und ich habe besser gespielt als alle anderen.
Tja, wer zuletzt lacht, lacht am besten.
Du, wollen wir am Wochenende Maria in Frankfurt besuchen? Sie hat uns eingeladen.
Wir wollten doch eigentlich zusammen in die Berge …
Aber das können wir doch auch noch wann anders machen. Komm, es wird bestimmt lustig.
Na gut, wie sagt man so schön? Die Klügere gibt nach!`,
      },
      {
        id: 'k7-2.11',
        title: '2.11',
        audioSrc: '/b1.2_2.11.mp3',
        text: `Der Löwe und der Bär
Ein Fuchs war auf Jagd, weil er hungrig war. Er war noch nicht lange unterwegs, als er einen lauten Streit hörte. Ein Bär und ein Löwe stritten miteinander: „Die Beute gehört mir, ich habe den jungen Hirsch gefangen.“ „Nein!“, brüllte der Löwe zornig zurück. „Du lügst! Ich war als Erster hier!“ Dann biss der Löwe den Bären mit seinen scharfen Zähnen und die beiden kämpften miteinander. Der Fuchs war klug und dachte: „Wenn die beiden vom Streiten müde sind, so können sie mir nichts mehr tun und ich bekomme die Beute.“ Endlich waren die beiden Feinde kraftlos und konnten sich nicht mehr bewegen. Der Fuchs ging an ihnen vorbei und holte sich die Beute. Er sagte höflich: „Danke, meine Herren, sehr freundlich, wirklich sehr freundlich!“ Dann lachte er und ging mit dem Hirsch davon.`,
      },
    ],
  },
  {
    id: 'b1.2-kapitel-8',
    title: 'Kapitel 8: Rund um Körper und Geist',
    level: 'B1.2',
    lessons: [
      {
        id: 'k8-2.12',
        title: '2.12',
        audioSrc: '/b1.2_2.12.mp3',
        text: `Person A
Also, ich versuche insgesamt, den Stress zu reduzieren. Nach der Arbeit gehe ich spazieren oder treffe meine Freunde. Ich glaube, Entspannung ist ganz wichtig. Außerdem fahre ich jeden Tag mit dem Fahrrad zur Arbeit, das sind acht Kilometer. Zweimal pro Woche gehe ich ins Fitness-Studio, im Sommer auch mal schwimmen. Und ich versuche, regelmäßig genug zu schlafen.
Person B
Sport macht mir keinen Spaß und das ist auch viel zu anstrengend. Außerdem kann man sich da leicht verletzen. Ich habe zum Beispiel einen Kollegen, der hat sich beim Fußballspielen ganz schlimm am Fuß verletzt. Jetzt ist er vier Wochen krankgeschrieben … Also, für mich ist das nix. Da entspanne ich mich lieber auf dem Sofa und sehe Sport im Fernsehen. Und dazu eine kalte Cola und eine Tüte Chips, das mag ich wirklich gern. Am liebsten spiele ich aber am Computer, da vergesse ich auch den Stress der Arbeit.
Person C
Wenn ich nicht so viel Sport machen würde, würde ich meinen Alltag nicht schaffen: früh aufstehen, Frühstück für alle machen, dann schnell zur Arbeit. In der Arbeit hab‘ ich immer super viel Stress, oft schaff‘ ich nicht alles. Nach der Arbeit muss ich dann noch einkaufen oder andere Dinge erledigen. Und oft muss ich auch noch abends arbeiten. Für Freunde hab‘ ich leider total wenig Zeit. Oft kann ich dann auch nicht gut schlafen. Deshalb mache ich sehr viel Sport, aber meistens erst spät abends.`,
      },
      {
        id: 'k8-2.13',
        title: '2.13',
        audioSrc: '/b1.2_2.13.mp3',
        text: `Gespräch 1
Guten Morgen, Herr Krause!
Guten Morgen!
Na, wie geht es Ihnen heute?
Ach, ich bin froh, dass die Operation vorbei ist. Aber Schmerzen habe ich immer noch.
Das ist ganz normal und dauert auch noch ein paar Tage. Jetzt frühstücken Sie erst mal, dann geht es Ihnen bestimmt besser.
Ich habe eigentlich gar keinen Appetit.
Sie sollten wirklich etwas essen, dann haben Sie auch wieder mehr Kraft. Und um 11 Uhr müssen Sie zum Physiotherapeuten.
Aha. Warum denn das?
Der erklärt Ihnen, welche Übungen Sie machen müssen, damit Sie sich bald wieder normal bewegen können.
Hmm. Bringt das wirklich etwas? So ein bisschen Gymnastik?
Also, ich kann Ihnen nur dringend raten, die Gymnastik zu machen. Sonst dauert alles viel länger.
Hm, na gut.
Brauchen Sie noch Hilfe bei irgendetwas?
Ja, das wäre sehr nett. Ich möchte mir die Haare waschen. Ich weiß nicht, ob ich das allein schaffe.
Also, ich kann Ihnen gern zeigen, wie Sie das am besten machen.
Und beim Anziehen habe ich noch Probleme. Ich kann mir die Hose nicht anziehen.
Das machen wir nach dem Frühstück. Sie brauchen mich nur zu rufen, wenn ich Ihnen helfen soll.
Das ist nett, vielen Dank!
Und … ich muss Sie warnen: Wenn Sie jetzt wieder nichts essen, dann verbessert sich Ihr Zustand viel langsamer. Ihr Körper braucht die Energie!
Okay, dann frühstücke ich jetzt mal …`,
      },
      {
        id: 'k8-2.14',
        title: '2.14',
        audioSrc: '/b1.2_2.14.mp3',
        text: `Gespräch 2
Hi Nik, wie geht‘s, wie steht‘s? Hast du noch Schmerzen?
Hallo Juliana. Na, langsam geht es besser. Ich denke, in ein paar Tagen brauche ich keine Schmerztabletten mehr zu nehmen. Aber mir ist natürlich auch ein bisschen langweilig hier.
Oh, was kann ich für dich tun? Soll ich dir ein paar Zeitschriften kaufen?
Danke, das wäre toll. Und vielleicht noch ein spannendes Buch.
Und sonst noch etwas? Soll ich dir auch etwas zu essen mitbringen?
Nein, danke, das ist nicht nötig. Aber vielleicht könntest du ja bei mir zu Hause vorbeifahren und meinen Laptop holen.
Warum brauchst du denn deinen Laptop? Willst du etwa arbeiten? Das ist nicht gut für dich, du musst dich ausruhen!
Nein, nein, aber dann kann ich ein paar Filme oder Serien sehen. Und meine Musik ist auch auf dem Laptop.
Okay. Und sonst noch etwas?
Also, ein paar Wünsche hätte ich schon noch …
Ja??
Nein, nein, das war nur ein Witz. Komm, gehen wir einen Kaffee in der Cafeteria trinken. Ich zahle! Und du brauchst mir nur ein bisschen zu helfen …
Aber klar doch. Dann mal los.`,
      },
      {
        id: 'k8-2.15-2.16',
        title: '2.15 + 2.16',
        audioSrc: '',
        text: `Ich höre im Moment oft Salsa.
Salsa? Hast du gerade gute Laune?
Ja, aber ich höre auch Tango.
Warum hörst du Tango? Ist Tango nicht eher traurige Musik?
Tango kann sowohl traurig als auch fröhlich sein.
Hm, ich höre lieber Rock und Pop.`,
      },
      {
        id: 'k8-2.17',
        title: '2.17',
        audioSrc: '/b1.2_2.17.mp3',
        text: `Gut gesagt: Wenn man etwas vergessen hat
Wie heißt noch mal „Zunge“ auf Englisch? Das fällt mir gerade nicht ein. Weißt du das vielleicht, Sophia?
Ne, keine Ahnung.
Weißt du noch, wie der tolle Film mit Matt Damon heißt? Ich komme gerade nicht drauf.
Puh, da bin ich wirklich überfragt. Ich gehe eigentlich nie ins Kino.
Ach, mir liegt es auf der Zunge. War das nicht irgendwas mit „bourne“?
Wie gesagt, keine Ahnung!`,
      },
      {
        id: 'k8-2.18',
        title: '2.18',
        audioSrc: '/b1.2_2.18.mp3',
        text: `Herzlich willkommen zu unserer Radiodiskussion zum Thema „Lernen lernen“. Heute ist der Lerncoach Dr. Gregor Schellbach mein Gast, außerdem Frau Ina Dahlmeyer, die als Lehrerin an einer Gesamtschule unterrichtet.
Guten Morgen.
Hallo!
Frau Dahlmeyer, ist eigentlich der Vormittag die beste Zeit zum Lernen?
Also, die erste Stunde, also morgens um 8 Uhr, ist in der Regel nicht günstig, da die meisten Schülerinnen und Schüler noch müde sind. Aber spätestens nach der ersten Pause sind dann alle wach. Wenn die Kinder sich in der Pause bewegen, dann ist das am besten.
Das ist auch meine Erfahrung. Aber ob man morgens oder abends lernt, spielt eigentlich keine Rolle. Man muss wach und ausgeschlafen sein und das kann individuell zu sehr unterschiedlichen Zeiten sein.
Danke, Herr Dr. Schellbach. Jeder lernt ja unterschiedlich, aber warum lernt man unterschiedliche Dinge auch unterschiedlich gut? Zum Beispiel kann ich mir die Texte meiner Lieblingslieder problemlos merken, bei historischen Jahreszahlen fällt es mir normalerweise schwer.
Wenn es einem schwerfällt, sich bestimmte Dinge zu merken, dann kann man die sogenannte „Locimethode“ anwenden – da verbindet man Lernstoff mit vertrauten Orten oder Wegen. Man stellt sich also zum Beispiel eine Sache oder eine Zahl an einem bestimmten Ort vor – zum Beispiel in der eigenen Küche in einem Regal – und kann sie sich so besser merken. Und bei den Liedtexten ist es so, dass das Lied die Emotionen anspricht. Man ist so begeistert und möchte den Text verstehen und lernen, damit man mitsingen kann – und so lernt man schneller, vielleicht sogar ganz unbewusst.
Bei Schulstoff ist das natürlich oft schwer. Es ist viel Lernmaterial und das enthält auch schwierige Themen, die die Kinder nicht interessieren. Da sind verschiedene Dinge wichtig: Erstens beim Lernen verschiedene Sinne anzusprechen, also Lernstoff nicht nur zu hören oder zu lesen, sondern auch mitzuschreiben und direkt anzuwenden, also beim Sprachenlernen zum Beispiel gleich selbst zu sprechen. Bei schwierigen Themen, also bei Biologie oder bei Grammatikthemen hilft es, jemand anderem davon zu erzählen oder es zu erklären – dann merkt man sich das viel besser.
Also, meine Lehrer damals in der Schule haben immer gesagt, dass wir ganz viel Wiederholen sollen. Und zwar nicht alles auf einmal, sondern in Abschnitten und mit Pausen. Die Pausen fanden wir Schüler natürlich am besten.
Das ist natürlich immer noch richtig. Ich zeige den Schülerinnen und Schülern auch solche Tricks und Methoden, wie man lernen kann. Das klappt sehr gut.
Vielleicht können wir das konkretisieren. Was mache ich zum Beispiel beim Sprachenlernen, wenn ich mir ein Wort einfach nicht merken kann?
Da gibt es ganz verschiedene Möglichkeiten, die man ausprobieren kann. Ich empfehle meinen Klassen zum Beispiel, diese Wörter ganz absichtlich zu verwenden, und zwar in einem ungewöhnlichen Kontext: Sie sollen eine Fantasie-Geschichte schreiben oder ein Märchen. Das macht den meisten viel Spaß und ist effektiv.
Also, man soll wiederholen, man soll Neues in kleinen Einheiten und mit Fantasie lernen, mit verschiedenen Sinnen. Das klingt auch schon wieder alles recht kompliziert.
Nein, das soll es natürlich nicht sein. Wir Lehrkräfte helfen ja auch! Aber Sie haben schon recht, jeder Lernende sollte sich auch mit den eigenen Stärken und Schwächen beschäftigen. Was für ein Lerntyp ist man überhaupt? Kann man sich z. B. Dinge leichter merken, wenn man sie liest, hört oder schreibt? Wenn man das weiß, dann kann man auch das eigene Lernen deutlich effektiver gestalten.
Wir sind alle unterschiedliche Lerntypen und viele Tipps helfen allen, aber welche Methode für einen selbst die beste ist, muss man rausfinden.
Danke, das war schon mal sehr interessant! Wir unterbrechen unsere Diskussion kurz für einen neuen Song von …`,
      },
    ],
  },
  {
    id: 'b1.2-kapitel-9',
    title: 'Kapitel 9: Kunststücke',
    level: 'B1.2',
    lessons: [
      {
        id: 'k9-2.19',
        title: '2.19',
        audioSrc: '/b1.2_2.19.mp3',
        text: `Das Landesmuseum in Innsbruck zeigt ab Freitag dieser Woche eine neue Schau „Stadt der Kunst“. Aus diesem Grund fragen wir von Radio 6020 unsere Hörerinnen und Hörer, wo ihnen in Innsbruck Kunst begegnet. Was sind Ihre liebsten Kunstwerke in Innsbruck und warum? Rufen Sie uns an: 0800 / 60 20 60 20. Wir sind gespannt, was Sie uns erzählen. Ah, da haben wir schon die erste Hörerin in der Leitung. Bitte, Frau Ritter.
Guten Tag! Ich finde ja, dass es in Innsbruck viele Kunstwerke im öffentlichen Raum gibt, vor allem viele schöne Gebäude. Ich meine damit nicht nur die Altstadt und das Goldene Dachl, es gibt auch schöne neue Gebäude. Ich mag neue Architektur, wenn sie gut ist. Mir gefallen besonders die Stationen der Hungerburgbahn. Ich fahre ja fast täglich damit, weil ich oben im Stadtteil Hungerburg wohne und in der Altstadt arbeite. Die runden Formen, das grüne Glas, der Blick in die Landschaft, das ist einfach schön. Wo sonst kann man direkt vom Stadtzentrum aus in die Berge hinauffahren? Aber nicht alles Neue gefällt mir. Der neue Landhausplatz ist einfach nur Beton, alles ist grau. Das ist gut für die Skater, das stimmt, aber schön ist es nicht.
Danke, Frau Ritter. Und wir haben einen weiteren Hörer. Wer spricht bitte?
Ja, hallo, hier ist der Clemens.
Hallo. Was gefällt dir am besten, Clemens? Wo ist für dich das interessanteste Kunstwerk?
Es gibt nicht nur ein Kunstwerk, es gibt mehrere. Ich liebe einfach die Graffiti vom HNRX. Die sind wahnsinnig gut, immer wieder findet man auf einer Mauer etwas Neues von ihm. Da ist immer eine Überraschung dabei. Ich finde es einfach super, wenn er nicht nur Obst auf einen Spieß steckt, sondern auch eine Espressokanne. Er hat so witzige Ideen! Ich freue mich auch, dass er international so viel Erfolg hat und trotzdem noch in Innsbruck neue Werke sprayt. Ich liebe seine Graffiti auch, weil er sein Handwerk kann: Kunst kommt von „können“ und er kann das, was er macht.
Danke, Clemens. Dann hoffen wir doch, dass HNRX bald wieder eine neue Fläche findet, wo er aktiv wird. Unsere nächste Anruferin ist Frau Walde. Hallo?
Ja, grüß Gott! Also, ich kann die beiden Anrufer von vorhin nicht verstehen. Es gibt doch so schöne Kunst in Innsbruck. Warum gefällt denen das moderne Zeug? Das macht doch das schöne Innsbruck nur kaputt.
Unsere Frage ist: Was sind Ihre liebsten Kunstwerke in Innsbruck? Was gefällt Ihnen denn am besten, Frau Walde?
Da ist der Leopoldsbrunnen, das ist Kunst. Die wunderbaren Figuren um den Brunnen und oben die Statue von Kaiser Leopold auf dem Pferd. Das ist so alt und immer noch so schön. Das Wasser plätschert, es ist im Schatten angenehm, perfekt. Der Platz ist ja eigentlich auch sehr schön, so gegenüber von der Hofburg. Aber jetzt haben sie da so ein modernes Gebäude hingestellt, das Haus der Musik. Ich kann nur sagen: Fürchterlich! Schade um den schönen Platz. Ich kann mich nur mit dem Rücken zu dem Ding hinsetzen, damit ich es nicht sehen muss.
Vielen Dank, Frau Walde! Wir machen eine kurze Pause, aber Sie können natürlich weiterhin anrufen: Radio 6020. Unsere Nummer ist 0800 / 60 20 60 20.`,
      },
      {
        id: 'k9-2.20',
        title: '2.20',
        audioSrc: '/b1.2_2.20.mp3',
        text: `Schau mal, die sehen ja aus wie wir!
Wie meinst du das? Sollen das Personen sein? Ich kann nichts erkennen.
Doch, schau mal, links ist die Frau und rechts der Mann.
Ach, stimmt. Und es heißt ja auch „Er und Sie“. Na, das passt ja.
Das Bild gefällt mir total gut. Es ist abstrakt, aber man kann die Dinge doch genau erkennen.
Na ja, ich finde es eher langweilig. Das ist irgendwie nicht mein Geschmack.
Aha.
Was meinst du mit „Aha“? Gefällt dir das Bild nicht?
Ich weiß nicht. Ich finde es ziemlich durcheinander.
Echt? Ich finde es wirklich super. Das ist ein besonders gutes Beispiel für abstrakte Kunst.
Naja, ich finde es seltsam, dass der Mann kein richtiges Gesicht hat. Was das wohl bedeuten soll?
Vielleicht ist das sein Hinterkopf und die Frau schaut ihn an.
Ja, könnte sein. Oder er ist blind vor Liebe?
Puh, ja, vielleicht. Komm, lass uns weitergehen. Und was hältst du von dem Bild da drüben …?
„Er und Sie“ von Heimrad Prem. Hm.
Das finde ich besonders gut.
Naja, mich spricht es eigentlich nicht an.
Also, ich finde es relativ witzig. Was denkst du, sind die beiden verliebt? Ich glaube, sie halten sich an der Hand, oder? Und die Farben … Der Hintergund ist rosa. Da hat der Künstler wirklich passende Farben gewählt. Das gefällt mir richtig gut.
Ne, das ist wirklich nichts für mich. Komm, schau mal da drüben, das gefällt mir besser.`,
      },
      {
        id: 'k9-2.21',
        title: '2.21',
        audioSrc: '/b1.2_2.21.mp3',
        text: `1a
ist bekannt
b
ist aktiv
2a
mit Ideen
b
mit Freunden
3a
altes Radio
b
altes Auto
4a
jeden Morgen
b
jeden Abend
5a
von uns
b
von dir`,
      },
      {
        id: 'k9-2.22',
        title: '2.22',
        audioSrc: '/b1.2_2.22.mp3',
        text: `1
Es ist nicht einfach, alles allein zu organisieren. Wir arbeiten deshalb in einem Team.
2
Es macht uns Spaß, ein eigenes Theaterstück zu schreiben und auf der Bühne active zu sein.
3
Am Abend ist unser Kurs und danach gehen wir noch alle gemeinsam essen.`,
      },
      {
        id: 'k9-2.23',
        title: '2.23',
        audioSrc: '/b1.2_2.23.mp3',
        text: `Hallo und herzlich willkommen beim Schlaufunk, am Mikrofon wie immer eure Alina Wenders. Heute geht es um Impro-Theater und ich freue mich sehr, hier bei mir im Studio einen sehr netten Gast zu haben. Ich begrüße Andreas Wolf aus München. Er ist Mitbegründer des Impro-Theaters „fastfood“ und ein echter Experte. Hallo Andreas!
Hallo!
Andreas, vielleicht kannst du uns kurz erzählen oder erklären, was eigentlich Impro-Theater ist und woher die Idee kommt.
Impro ist ja die Abkürzung für Improvisation, also etwas Unvorhergesehenes, etwas, was ich noch nicht weiß. Und genau das ist der Unterschied zum normalen Theater, was ich so kenne, mit Texten und Inszenierung. Beim Improtheater weiß ich überhaupt nicht – oder weiß der Spieler auch nicht –, was er spielt, sondern sehr oft wartet er einfach auf die Vorgaben, zum Beispiel vom Publikum. Da wird ein Wort reingewerfen und dann spielt er eine Szene.
Mhm, das klingt auf jeden Fall interessant. Wann hast du denn „fastfood“ gegründet?
Wir haben „fastfood“ 1992 gegründet, als Studenten, und haben mit der Theaterform experimentiert, weil die damals noch gar nicht bekannt war, vor allem nicht in Deutschland. In den englischsprachigen Ländern schon ein bisschen.
Mhm.
Und dann wurden wir plötzlich so erfolgreich, ohne dass das geplant war, sozusagen auch spontan, und haben dann als Studenten schon unser Geld damit verdient und sind dabei geblieben.
Okay. Du hast eben erzählt, das ist alles spontan und das Publikum wirft auch Ideen ein. Das heißt, das ist eigentlich der große Unterschied für die Schauspielerinnen und Schauspieler zum normalen Theater, dass sie keinen Text haben.
Genau, und deswegen haben sie sich selbst. Sie müssen also sehr genau aufpassen, was der Partner für ein Spielangebot macht. Also, ein Spielangebot kann sein, dass er sich zum Beispiel auf einen Stuhl setzt und einen Satz sagt. Eine Begrüßung zum Beispiel.
Mhm.
Wenn mein Gedanke woanders ist, dann höre ich die Begrüßung gar nicht und sag irgendwie, was mir dazu einfällt, und dann werden die Zuschauer sagen: „Hm, langweilig! Die verstehen sich nicht.“
Macht keinen Sinn.
Macht keinen Sinn, genau. Deswegen muss ich genau zuhören als Spielpartner. Er begrüßt mich. Wer ist der denn eigentlich? Was für eine Spielfigur? Und genau darauf eingehen und reagieren. Und so spielen wir Pingpong in den Szenen, hin und her und so entstehen die Geschichten: immer genau zuhören und auf den Partner reagieren.
Das klingt spannend. Da hab‘ ich gleich Lust, das auch mal auszuprobieren. Könnte ich das lernen, also Impro-Theater?
Ja, das kannst du … Genau, das kannst du lernen. Das ist eigentlich nicht schwer, denn eigentlich machst du‘s – oder wir beide machen es jetzt schon hier, indem wir uns miteinander unterhalten und eigentlich keinen Plan haben, was wir jetzt genau sagen. Die Sätze entstehen im Gespräch und ich kann ja höchstens so drei Sekunden ungefähr vordenken. Der Rest passiert einfach. Und dann muss ich ja wieder warten, wie du drauf reagierst, damit ich wieder darauf reagiere, und dann haben wir ein gutes Gespräch. Und ein gutes Gespräch heißt, ich habe auf dich gehört und antworte auf dich. Und bin nicht bei meinen Gedanken und das macht gutes Improvisationstheater auch aus, dass ich genau höre, was sagt eigentlich der andere und darauf reagiere.
Das stimmt. Aber es gibt tatsächlich auch Kurse, richtig?
Genau.
In denen ihr den Interessierten zeigt, wie man das lernen kann.
Genau, wir haben 1994 unsere Improschule gegründet und das Ziel damals war, weil man Improvisation noch gar nicht kannte, dass wir den Menschen mal zeigen: Das ist keine Zauberei, was wir auf der Bühne machen. Das können nicht nur „geniale“ Menschen, sondern jeder kann improvisieren. Und diese Prinzipien kann man in unseren Kursen lernen. Die bauen aufeinander auf, in der Fastfood-Improschule.
Das heißt, jeder ist eigentlich ein kleiner Schauspieler.
Das kann er dann werden, genau.`,
      },
      {
        id: 'k9-2.24',
        title: '2.24',
        audioSrc: '/b1.2_2.24.mp3',
        text: `Ich glaub‘, ich würde jetzt gern mal mit dir eine Impro-Geschichte ausprobieren. Hast du Lust?
Ja, klar!
Also, ich gebe dir das Genre vor, du beginnst eine Geschichte und ich sage dir nach und nach ein paar Begriffe, die du spontan in die Geschichte einbauen musst.
Okay.
Also, natürlich kennst du die Begriffe nicht. Das heißt, liebe Zuhörerinnen und Zuhörer, wir haben die Begriffe wirklich nicht abgesprochen.
Ne.
Bist du bereit, Andreas?
Ja, okay.
Also, ich hätte gerne einen Krimi von dir.
Okay. Dann hätte ich gerne von dir den Ort, den Schauplatz, an dem dieser Krimi spielt. Also, es kann ja ein ganz ungewöhnlicher Schauplatz sein.
Dann nehmen wir doch mal … ein Kaufhaus!
Ein Kaufhaus. Gut. In einem der großen Kaufhäuser der Stadt hatte sich Philipp wie jeden Tag stundenlang aufgehalten. Er liebte es, in Kaufhäuser zu gehen. Nach der Schule streunte er durch die verschiedenen Abteilungen, schaute sich verschiedene Sachen an, die ihm gefielen, las Bücher stundenlang in irgendeiner Ecke …
Die Biene.
… und verfolgte zum Beispiel, wenn eine Biene sich ins Kaufhaus verflogen hatte. Wie gestern, als er dieser Biene folgte und sah, wie sie in der Damenabteilung eine Verkäuferin stach und sie auf der Stelle wegen einer Bienenallergie tot umfiel.
Der Topf.
In diesem Moment sahen die Menschen nur Philip, der einen Topf in der Hand hielt, den er noch aus der Haushaltswarenabteilung mitgenommen hatte, und eigentlich wieder zurückbringen wollte, aber er wurde als Dieb sofort festgenommen vom Warenhaus-Detektiv, dem Herrn Schmidt.
Die Rose.
Herr Schmidt nahm ihn mit in sein fensterloses Büro und klagte Philipp des Totschlags an der Verkäuferin an. „Ja, Sie haben den Topf über den Kopf geschlagen.“ Und in dem Moment sah Philipp eine Rose in der Ecke liegen. Er dachte: „Mensch, hören Sie mal, Herr Privat-Dete…, Herr WarenhausDetektiv! Schauen Sie mal, eine Rose!“
Die Umleitung.
In dem Moment dachte der Detektiv nur an die Umleitung, die er doch gelegt hatte, wo die Leute doch nicht in den 3. Stock sollten, weil sie dort … weil dort umgebaut worden war und dort die kleinen Rosenkarten verkauft worden sind. Er wollte Philipp dabehalten, wollte aber gleichzeitig hochgehen, denn die Umleitung war nicht fertig. Es war kein Schild da. Womöglich würden die Leute die Rolltreppe hochgehen und in die Abteilung strömen …
Der Schatten.
Er war hin- und hergerissen. Er schaute weg. In dem Moment verschwand Philipp aus der Tür. Er … Der Warenhaus-Detektiv sah nur noch einen Schatten, hechtete hinterher, hielt Philipp fest … und in dem Moment begann Philipp zu weinen. „Ich war es nicht, es war eine Biene!“ Der Warenhaus-Detektiv sah, dass Philipp ja erst 13 Jahre alt war, ein Junge. Konnte er es wirklich gewesen sein? Und als er das Opfer noch einmal genau untersuchte, die Frau aus der Damenabteilung, sah er, dass sie gar keinen blauen Fleck oder irgendeine Schädelverletzung hatte, sondern einen dicken runten Pickel an ihrem Oberarm, der durch den Stich einer Biene verursacht worden war. Er entschuldigte sich bei Philipp, gab ihm noch eine Rose mit und so konnte Philipp erleichtert nach Hause gehen.
Das war ziemlich beeindruckend.
Danke schön.
Vielen Dank!
Danke auch.`,
      },
      {
        id: 'k9-2.25',
        title: '2.25',
        audioSrc: '/b1.2_2.25.mp3',
        text: `Die Gedanken sind frei, wer kann sie erraten? Sie fliegen vorbei wie nächtliche Schatten. Kein Mensch kann sie wissen, kein Jäger erschießen. Es bleibet dabei: Die Gedanken sind frei!
Und sperrt man mich ein im finsteren Kerker, das alles sind rein vergebliche Werke. Denn meine Gedanken zerreißen die Schranken und Mauern entzwei: Die Gedanken sind frei!`,
      },
      {
        id: 'k9-2.26',
        title: '2.26',
        audioSrc: '/b1.2_2.26.mp3',
        text: `Gut gesagt: Gedanken
Oh nein, ich habe deinen Geburtstag vergessen! Es tut mir so leid.
Mach dir mal keine Gedanken. Ich habe deinen Geburtstag bestimmt auch schon mal vergessen.
Möchtest du in unserem Chor mitsingen?
Eigentlich gerne, aber darüber muss ich mir erst noch Gedanken machen. Ich habe so wenig Zeit und singe ja schon in einer Band.
Hey, hallo Gina, kennst du mich nicht mehr?
Ach, Leana, hallo! Entschuldige bitte, ich war total in Gedanken.
Hast du eigentlich was von Bruno gehört?
Hm, es geht ihm leider nicht so gut. Seine Band gibt es nicht mehr, weil der Sänger nach Hamburg gezogen ist. Das macht ihn ziemlich traurig.
Na, hoffentlich kommt er bald wieder auf andere Gedanken oder findet eine neue Band.`,
      },
      {
        id: 'k9-2.27',
        title: '2.27',
        audioSrc: '/b1.2_2.27.mp3',
        text: `Ja, guten Tag, hier spricht Martha Kozlowski von der Park-Klinik. Sie haben ja übermorgen einen OP-Termin bei uns. Herr Dr. Müller hat Ihnen beim letzten Termin sicher schon alles erklärt, aber wir möchten sichergehen, dass alles gut klappt. Bitte seien Sie am Donnerstagmorgen so gegen acht Uhr bei uns – und zwar unbedingt nüchtern. Das heißt, Sie dürfen am Morgen nichts essen oder trinken, auch keinen Kaffee oder Tee. Dann brauchen wir noch Ihre Versichertenkarte und am besten bringen Sie bequeme Kleidung mit, zum Beispiel Jogginghose und T-Shirt. Sie haben ja nur eine kleine OP und können, wenn alles gut läuft, nach ein paar Stunden wieder nach Hause. Wir möchten Ihnen empfehlen, sich von jemandem abholen zu lassen. Natürlich können Sie auch allein ein Taxi nehmen, aber eine Begleitung ist eigentlich immer besser. Falls Sie noch Fragen haben, rufen Sie uns an – ansonsten sehen wir uns am Donnerstag um acht Uhr hier bei uns in der Klinik.`,
      },
      {
        id: 'k9-2.28',
        title: '2.28',
        audioSrc: '/b1.2_2.28.mp3',
        text: `Hallo, hier ist Rosa vom Malatelier Künstler-AG. Sie hatten dieses Wochenende ja den Kurs „Malen in der Natur“ gebucht. Leider ist Herr Fröhlich, unser Mallehrer, erkrankt und wir haben keinen Ersatz für ihn gefunden. Wir müssen den Kurs also verschieben. Der neue Termin ist in einem Monat, also am 1. und 2. Juni. Hoffentlich haben Sie dann Zeit. Falls nicht, erstatten wir Ihnen natürlich die Gebühr zurück oder Sie können einen anderen Kurs bei uns buchen. Unsere Kurse finden Sie wie immer online unter www.malatelier-kuenstlerag.de. Bitte geben Sie uns auf alle Fälle bis zum 15. Mai Bescheid, damit wir entsprechend planen können. Und bitte entschuldigen Sie nochmals die Verschiebung! Falls Sie noch Fragen zu unserem Kursangebot haben, dann melden Sie sich einfach bei uns.`,
      },
    ],
  },
  {
    id: 'b1.2-kapitel-10',
    title: 'Kapitel 10: Miteinander',
    level: 'B1.2',
    lessons: [
      {
        id: 'k10-2.29',
        title: '2.29',
        audioSrc: '/b1.2_2.29.mp3',
        text: `Person 1
Hm, das wichtigste in einer Gesellschaft? Ich glaube, für mich ist das Meinungsfreiheit, also, dass alle sagen dürfen, was sie denken. Aber natürlich nur, was nicht gegen die Würde von anderen Menschen verstößt oder respektlos ist – das finde ich auch sehr wichtig! Ja, und damit eine Demokratie funktioniert, müssen die Menschen mitbestimmen können, z. B. durch Wahlen. Außerdem finde ich sehr wichtig, dass man reisen kann, wohin man will. Mein Opa zum Beispiel hat in der DDR gelebt und erzählt immer, dass er nie nach Italien oder Spanien reisen konnte. Das finde ich schlimm. Auf diese Freiheit will ich nicht verzichten.
Person 2
Hm, das ist eine schwierige Frage, vieles ist wichtig. Aber ich glaube, ich finde Sicherheit am wichtigsten. Ich möchte mich frei bewegen können und will keine Angst haben, nachts nach Hause zu gehen. Ich könnte nicht in einer Stadt leben, wo es sehr viel Kriminalität gibt. Sicherheit kann aber auch bedeuten, dass man einen einigermaßen sicheren Arbeitsplatz hat. Das finde ich auch wichtig.
Person 3
Na ja, ich denke, Hilfsbereitschaft ist sehr wichtig. Viele Leute kümmern sich nur um sich selbst und merken gar nicht, dass andere vielleicht Hilfe brauchen. Oder sie wollen nicht helfen. Aber das ist doch nicht in Ordnung. Wenn ich einen Unfall habe oder in einer gefährlichen Situation bin, dann hoffe ich, dass mir jemand hilft. Wenn es in der Schule Ärger gibt zwischen Schülern, versuche ich immer zu helfen.`,
      },
      {
        id: 'k10-2.30',
        title: '2.30',
        audioSrc: '/b1.2_2.30.mp3',
        text: `Wo bleibt er denn, unser Simon? Ich hab‘ ihm doch gesagt, dass ich ihn heute früher abholen muss.
Der fühlt sich halt wohl, genauso wie meine Lara. Die macht das schon zum dritten Mal und will jeden Tag dabei sein.
Ich habe ja gedacht, dass Simon noch fast zu klein ist – er ist ja erst acht geworden. Aber kein Problem. Ich glaub‘s ja gar nicht, aber er steht sogar gern auf, wenn er hierher kommt.
Sie haben halt einfach Spaß, gell?
Das kann man wohl sagen.
Aber sie lernen auch eine ganze Menge. Lara hat verstanden, dass das Geld nicht vom Himmel fällt, dass sie zuerst etwas einnehmen muss, bevor sie es ausgeben kann. Und sie hat auch kapiert, dass es so etwas wie Pflichten gibt. In der Bäckerei hat sie zwei Tage lang gebacken und verkauft. Das gehört eben auch dazu, dass man seinen Job konsequent macht.
Simon nimmt seine Jobs auch sehr ernst. Gestern, als es so heiß war, hat er ein paar Stunden lang Wasser verteilt, nicht nur in der Wasserbar, sondern im ganzen Gebiet von MiniMünchen. Er will auch in so vielen Betrieben wie möglich sein. Sie haben fast ein bisschen Stress hier, stimmt’s?
Den Stress möchte ich auch haben!
Ich glaube, am liebsten ist er in der Spaßfabrik. Da machen sie selbst neue Spiele. Da können sie kreativ sein und gemeinsam was entwickeln. Sowas hätte ich auch gern gemacht, als ich Kind war. Was macht Ihre Tochter denn am liebsten?
Lara ist besonders gern im Forschungszentrum. Da machen sie im Labor Versuche und entdecken Neues. Da ist sie ganz begeistert, ganz im Gegensatz zur Schule. Dort hasst sie Biologie und Chemie.
Hier ist es einfach viel lustiger, ne?
Ja, ja, wenn man es nicht machen muss!
Ach, da kommt er ja! Hallo, mein Schatz! Also, dann einen schönen Tag noch. Wir sehen uns hier bestimmt wieder.
Ja, das kann gut sein. Ciao!`,
      },
      {
        id: 'k10-2.31',
        title: '2.31',
        audioSrc: '/b1.2_2.31.mp3',
        text: `Gut gesagt: Partikel bei Fragen
Schade, dass es das früher nicht gab, stimmt’s?
Ach, ich weiß nicht. Wir hatten auch viel Spaß.
Sie geht doch morgen auch wieder hin, oder?
Nein, erst übermorgen.
Endlich Feierabend. Heute war‘s super anstrengend, ne?
Allerdings! Ich bin auch völlig fertig.
Am Samstag machen wir mal nichts, gell?
Ja, gern. Ein Tag auf dem Sofa klingt perfekt.`,
      },
      {
        id: 'k10-2.32',
        title: '2.32',
        audioSrc: '/b1.2_2.32.mp3',
        text: `1
Finden Sie das Projekt Mini-München interessant oder uninteressant?
Für die Kinder ist es schon spannend.
2
Möchten Sie mehr über das Projekt erfahren oder haben Sie genug Informationen bekommen?
Ich glaube, dass ich jetzt genug weiß.
3
Hätten Sie als Kind gern bei MiniMünchen mitgemacht oder lieber nicht?
Das weiß ich nicht.`,
      },
      {
        id: 'k10-2.33',
        title: '2.33',
        audioSrc: '/b1.2_2.33.mp3',
        text: `1
Willst du den Text morgen oder nächste Woche schreiben?
2
Hast du dich schon für ein Projekt entschieden oder überlegst du noch?
3
Bist du gern dabei oder musst du mitmachen?`,
      },
      {
        id: 'k10-2.34',
        title: '2.34',
        audioSrc: '/b1.2_2.34.mp3',
        text: `Guten Morgen. Ich halte heute eine Präsentation zum Thema „EU – Worum geht es da eigentlich?“ Ich möchte beim Anfang beginnen: Warum wurde die EU eigentlich gegründet? Und was ist seitdem passiert?
Könntest du bitte lauter sprechen?
Oh, Entschuldigung, klar, mache ich. Ich möchte in meiner Präsentation einen kurzen Überblick darüber geben, warum es die EU überhaupt gibt und was seit der Gründung der EU passiert ist. Geht es so besser? Können mich alle hören?
Ja!
Ja, so ist es super.
Also, zu meiner ersten Frage: Warum gibt es eigentlich die EU? Nach dem Zweiten Weltkrieg hatten viele Länder in Europa ein großes Ziel: nie wieder Krieg. Sie beschlossen, besser zusammenzuarbeiten. Sie wollten gemeinsam bessere Möglichkeiten für … einen gegenseitigen Austausch und Handel schaffen. Sie waren sich einig, dass – ähm … Entschuldigung, jetzt habe ich den Faden verloren … Also, noch mal: Die Länder waren sich einig, dass Länder, die wirtschaftlich gut zusammenarbeiten, keinen Grund haben, einen Krieg zu führen. 1951 war es dann so weit: Sechs Länder unterschrieben einen Vertrag, der das Ziel hatte, dass keines der Länder mehr Kriegswaffen herstellt, um sie gegen ein anderes Land aus dieser Gruppe einzusetzen. Diese sechs Länder waren Belgien, Deutschland, Frankreich, Italien, Luxemburg und die Niederlande. 1957 unterzeichneten diese sechs Länder dann noch zwei weitere Verträge: einen Vertrag, in dem es um eine europäische Wirtschaftsgemeinschaft ging, und einen zum Thema Atomkraft. Ups, einen kleinen Moment, bitte. Nach und nach traten dieser – ähm – Gemeinschaft immer mehr Länder bei. Zuerst kamen 1973 Großbritannien, Irland und Dänemark dazu. 1992 waren es bereits zwölf Länder. Diese Länder gründeten dann mit dem Vertrag von Maastricht – der wurde am 7. 2. 1992 unterschrieben – die Europäische Union, die EU. Zur Europäischen Union gehören heute 27 Länder. Großbritannien ist im Januar 2020 ausgetreten. 
Um in Frieden zusammenzuleben, muss jeder den anderen so akzeptieren, wie er ist. Jedes Land lebt nach seinen eigenen Traditionen, seiner Sprache und seiner Kultur. Deshalb heißt das Motto der EU „In Vielfalt geeint“ und die wichtigsten Werte für die EU-Mitgliedsstaaten sind: die Würde des Menschen und die Menschenrechte, Demokratie, Freiheit, Toleranz und Solidarität. Das finde ich toll, allerdings habe ich schon das Gefühl, dass sich die EU-Länder ähnlicher geworden sind, z. B. bei der Mode oder beim Musikgeschmack. Ich finde es ein bisschen schade, dass in fast allen Ländern Europas in den Innenstädten immer wieder die gleichen Geschäfte sind. Das war früher, glaube ich, anders. Damit komme ich zum zweiten Punkt: „Was ist seit der Gründung der EU passiert?“ Ganz einfach – sehr viel! Viele EU-Länder benutzen jetzt dieselbe Währung, den Euro. Das ist für mich persönlich eine der tollsten Veränderungen. Wenn ich zum Beispiel nach Italien oder Spanien reise, muss ich nicht – wie meine Eltern früher – Geld wechseln und kompliziert rumrechnen, bis ich weiß, wie viel etwas kostet. 
Oh, ich glaube, das konnte man jetzt nicht gut verstehen. Also, ich wollte sagen, dass das mit dem Euro für mich die beste Veränderung ist. Ich finde es sehr angenehm, dass man in Italien oder Spanien nicht mehr lange rechnen muss, bis man weiß, wie viel etwas kostet. Außerdem wurde man früher an jeder Grenze kontrolliert und musste seinen Ausweis zeigen. Meine Eltern erzählen immer von den langen Staus an den Grenzen in den Sommerferien … Heute können die EU-Bürger und - Bürgerinnen innerhalb der EU im Normalfall ohne Grenzkontrollen reisen. Sie können zudem ganz problemlos in anderen EU-Ländern studieren und arbeiten.
Abschließend möchte ich noch einmal zusammenfassen, dass das wichtigste Ziel der EU ist, Kriege zu vermeiden. Und dass sich seit dem Bestehen der EU vieles verbessert hat. Ich persönlich bin froh, dass es die EU gibt und Deutschland ein Mitgliedsstaat ist. Auch wenn es manchmal Kritik an der Politik der EU gibt, zum Beispiel, dass Entscheidungsprozesse so lange dauern. Ich finde es toll, dass man jetzt in Europa so einfach reisen kann und viele Länder den Euro haben. Herzlichen Dank für eure Aufmerksamkeit. Gibt es noch Fragen?`,
      },
    ],
  },
  {
    id: 'b1.2-kapitel-11',
    title: 'Kapitel 11: Stadt, Land, Fluss',
    level: 'B1.2',
    lessons: [
      {
        id: 'k11-2.35',
        title: '2.35',
        audioSrc: '/b1.2_2.35.mp3',
        text: `Person 1
Ich kenne fast jede Ecke in der Stadt, weil ich durch meine Arbeit überall hinkomme. Ich bin Fahrradkurier, mein Arbeitsplatz sind die Straßen von Leipzig. Ich kenne alle Ecken, nicht nur die bekannten Straßen in der Innenstadt oder die Hauptstraßen mit viel Verkehr. Ich transportiere Dinge bis maximal 5 Kilo in meinen Rucksack. Oft bin ich für Apotheken unterwegs und bringe Medikamente oder ich fahre für Betriebe und Büros. Ich kenne inzwischen die schnellsten Wege von A nach B, Navi und GPS brauche ich nur selten, vielleicht für eine Adresse ganz am Rand der Stadt. Ich wohne in einer Straße mit vielen alten Häusern. In meinem Stadtviertel wurden inzwischen viele Häuser renoviert, aber das Haus, in dem ich wohne, noch nicht und es hat keinen Aufzug. Aber dafür ist die Miete ziemlich günstig. Leipzig ist einfach meine Stadt. Ich möchte nicht weg von hier.
Person 2
Ich bin nach Leipzig gekommen, weil mich die Firma hierher geschickt hat. Zuerst hab‘ ich gedacht, dass ich nicht lange bleibe. Aber dann habe ich schnell eine Wohnung in einem schönen Viertel gefunden – die ist auch billiger als in Berlin. Die Lage ist gut und der Weg zur Arbeit ist auch viel kürzer. Mein Büro liegt mitten in der Fußgängerzone, das ist praktisch. Jetzt bin ich schon drei Jahre hier und mag die Stadt inzwischen richtig gern. Nach der Arbeit treffe ich mich oft mit Freunden. Es gibt so viele tolle Cafés in Leipzig und schöne kleine Läden mit interessanten Schaufenstern. Ich wohne jetzt richtig gern hier. Als Berlinerin hab‘ ich zuerst gedacht, dass es in Leipzig langweilig ist. Aber es gibt eine richtig gute Szene für Musik und Kunst, das Kunstkraftwerk oder das Kunstzentrum Spinnerei oder auch das Werk 2. Dort, wo früher die Industrie war, gibt es jetzt Clubs und Galerien. Das Angebot an Musik ist echt riesig, jeden Tag ist etwas los. Ich bin besonders gern im Werk 2: die Konzerte, die Atmosphäre auf dem alten Fabrikgelände, die Kneipe, die Leute. Das ist einfach toll.
Person 3
Ob die Leute Leipzig jetzt gut oder schlecht finden, ist mir egal. Ich fühl‘ mich hier wohl. Ich lebe ohne Auto, aber ich fahre für mein Leben gern Motorrad. Am Wochenende mache ich allein oder mit meinen Kumpels Touren in der Umgebung. Ich liebe die Geschwindigkeit, das Tempo auf einer Straße mit vielen Kurven: Was kann schöner sein? Es gibt auch superschöne Seen in der Region und mit dem Motorrad bin ich schnell dort und brauche nicht lange einen Parkplatz zu suchen. In der Stadt bin ich oft öffentlich unterwegs, mit Bus und Straßenbahn. Ich wohne in einem Hochhaus am Stadtrand. Also, der Stadtteil und die Lage sind ja nicht so schön, aber ich wohne gern da. Ich habe vom elften Stock eine schöne Aussicht und die Nachbarn in den beiden anderen Wohnungen auf unserem Stock sind einfach super. Wir kennen uns und wenn jemand was braucht, dann helfen wir uns auch gegenseitig. Ich will auf keinen Fall von hier weg. Auch weil ich zwei total coole Billard-Kneipen bei mir in der Nähe habe. Das ist neben dem Motorrad das wichtigste: mit meinen Kumpels Pool oder Snooker spielen und dann vielleicht noch durch ein oder zwei andere Kneipen ziehen. Was will man mehr?`,
      },
      {
        id: 'k11-2.36',
        title: '2.36',
        audioSrc: '/b1.2_2.36.mp3',
        text: `Die nächste Nachricht betrifft die beliebte Frage, welche Städte die höchste Lebensqualität haben. Die USamerikanische Firma Kisi hat eine studie veröffentlicht, in der die Work-Life-Balance von 40 ausgewählten Städten untersucht wurde. Dabei wurden die Themenbereiche „Intensität der Arbeit“, „Institutionen der Gesellschaft“ und „Lebensqualität der Stadt“ untersucht. Das Ergebnis dieses Städterankings ist auf den ersten Blick vielleicht überraschend. An der ersten Stelle liegt nämlich die finnische Hauptstadt Helsinki. Arbeitnehmerinnen und Arbeitnehmer bekommen hier die meiste Elternzeit, nämlich zusammen 1.127 Tage, und sie haben 30 Urlaubstage im Jahr. Die Arbeitszeit ist im Durchschnitt 40,2 Stunden pro Woche. Das ist im internationalen Vergleich recht wenig. Dazu kommt ein gutes Gesundheits- und Bildungssystem. Die vielen Grünflächen in Helsinki und die Lage am Meer tragen auch dazu bei, dass die Stadt auf den ersten Platz kam. An der zweiten Stelle liegt München. München punktet besonders damit, dass die Arbeitslosigkeit im internationalen Vergleich sehr niedrig ist. Im Gegensatz zu Helsinki haben Arbeitnehmerinnen und Arbeitnehmer aber nur 20 Tage Urlaub pro Jahr. Die Menschen in München können sich sehr sicher fühlen, die öffentliche Sicherheit hat München den zweiten Platz gebracht.
Auf Helsinki und München folgt an der dritten Stelle die norwegische Hauptstadt Oslo. Die durchschnittliche Arbeitszeit ist nur 38,9 Stunden pro Woche. Dahinter liegt Hamburg auf Platz vier und Stockholm auf Platz fînf. Stockholm hat besonders wenig Luftverschmutzung. An der sechssten Stelle liegt Berlin, der Freizeitwert hat Berlin besonders viele Punkte gebracht. Nach Berlin folgt Zürich auf Platz sieben. Die Grünflächen und der Zürichsee haben viel zu dieser Platzierung beigetragen, außerdem das gute Schulsystem. Barcelona liegt auf Platz acht und Paris auf Platz neun. An der zehnten Stelle ist das kanadische Vancouver gelandet. Vielleicht fragen Sie sich jetzt, wo Wien liegt, das in anderen Städterankings oft auf den vorderen Plätzen landet: Wien war nicht unter den 40 Städten, die für die Studie ausgewählt wurden. So, nun geht es weiter mit Musik, und zwar dem neuen Hit von …`,
      },
      {
        id: 'k11-2.37',
        title: '2.37',
        audioSrc: '/b1.2_2.37.mp3',
        text: `Liebe Hörerinnen und Hörer, gerade haben wir von einem internationalen Städteranking berichtet. Vier Städte aus den deutschsprachigen Ländern liegen dabei in den Top Ten, genauer sogar unter den besten sieben. Heute haben wir Gäste zugeschaltet, die in den Städten München, Hamburg, Berlin und Zürich leben oder lange gelebt haben: Frau Lea Winter aus München, …
Grüß Gott!
…, Herrn Jens Ende aus Hamburg, …
Moin!
…, Frau Jella Božović aus Berlin …
Guten Tag!
… und Herrn Urs Odermatt aus Zürich.
Grüezi!
Schönen Tag Ihnen allen und danke, dass Sie sich Zeit für uns nehmen. Beginnen wir gleich mit Ihnen, Frau Winter? Lebt es sich wirklich so gut in München?
Ja, in München kann man sehr gut leben, keine Frage. In der Studie heißt es auch, dass München eine Stadt ist, wo man besonders sicher lebt. Das glaube ich allerdings nicht. Es gibt auch in München Ecken, wo ich mich sehr unsicher fühle. München liegt in dem Ranking aber so gut, weil die Arbeitslosigkeit niedrig ist. Das ist natürlich schön. Das heißt aber auch, dass immer mehr Menschen in München arbeiten wollen und eine Wohnung brauchen. Die Mieten und die Preise für Wohnungen sind deshalb extrem hoch. Die Attraktivität der Stadt hat schon zwei Seiten, eine gute und eine weniger gute.
Gilt das so ähnlich auch für Hamburg, Herr Ende?
Na klar. Man hat in Hamburg viele Wohnungen gebaut – im Hafenviertel, aber die sind schon sehr, sehr teuer. Aber Hamburg ist auch auf diesem guten Platz, weil es ein gutes Sozialsystem gibt. Die Stadtregierung versucht, ein attraktives Angebot für alle Bürgerinnen und Bürger zu machen: für die Kinderbetreuung, für sozial schwache Personen, für Leute mit weniger Geld. Das finde ich so toll an Hamburg. Und natürlich ist die Stadt für Besucher attraktiv – mit dem großen Kulturangebot, dem Hafen, den Geschäften. Das bringt der Stadt auch Geld und Wohlstand. Und das Alltagsleben ist ziemlich entspannt, finde ich.
Gibt es auch etwas Negatives in Hamburg?
Also, das Hamburger Wetter ist ja bekannt, leider. Darf ich es sagen? Das Hamburger Schietwetter, also viel Regen und Wind. Das hat zum Glück keine Rolle gespielt bei diesem Ranking.
Und nun zu Ihnen, Frau Bozović. Was sagen Sie als Berlinerin dazu, dass zwei andere deutsche Städte vor der Hauptstadt liegen?
Das ist mir echt egal. Ich finde die beiden Punkte sehr schön, die Berlin nach vorne gebracht haben. Der erste Punkt sind die tollen Freizeitmöglichkeiten: von Clubs über Kulturangebote bis zu Grünflächen und Seen. Welche Großstadt hat denn schon so was wie den Wannsee so nah? Der zweite Punkt ist für mich als Arbeitnehmerin noch viel wichtiger: Viele Firmen beginnen recht spät am Morgen. Der durchschnittliche Arbeitsbeginn ist um 9:53 Uhr. Das ist doch toll!
Stimmt! Erreicht Zürich auch einen so guten Platz, weil man länger schlafen kann? Was meinen Sie, Herr Odermatt?
Nein, davon weiß ich nichts. Eher liegt Zürich vorne, weil es kaum Arbeitslosigkeit gibt. Die Grünflächen bringen Zürich ebenfalls Punkte im Ranking, die sind schon sehr schön. Und natürlich der Zürichsee. Dazu kommt, dass das Schul- und Gesundheitssystem in der Schweiz sehr gut ist. Was die Work-Life-Balance betrifft, da ist Zürich nicht so gut: Hier arbeiten die Arbeitnehmer im Durchschnitt 42,9 Stunden pro Woche; länger als in vielen anderen Städten und Ländern. Zürich ist aber auch eine Stadt, wo das Leben sehr teuer ist. Trotzdem haben diese beiden Punkte es nicht geschafft, das Ergebnis nach unten zu ziehen.
Vielen Dank! Jetzt haben wir einen ersten Eindruck bekommen, was für dieses Ranking wichtig war. Wir reden gleich noch weiter über …`,
      },
      {
        id: 'k11-2.38',
        title: '2.38',
        audioSrc: '/b1.2_2.38.mp3',
        text: `Ich wohne in Köln, mir gefällt die Stadt sehr gut. Ich verstehe allerdings nicht, warum sie in sämtlichen Rankings immer so weit hinten liegt. Ich kann mir keine schönere Stadt vorstellen. Warum gefällt es mir in Köln so gut? Die Antwort ist ganz einfach: Hier gibt es schöne Museen, viele gute Theater und Kinos, kleine Cafés, den Rhein mit den vielen Schiffen und und und. Noch wichtiger ist, dass hier meine Freunde wohnen. Außerdem habe ich eine sehr gute Arbeitsstelle.`,
      },
      {
        id: 'k11-2.39',
        title: '2.39',
        audioSrc: '/b1.2_2.39.mp3',
        text: `Gut gesagt: Schweizerdeutsche Ausdrücke
Entschuldigung, ich suche eine Autowerkstatt.
Eine Garage? Also, hier in der Nähe ist leider keine.
Aha. Und wissen Sie, wo man hier Fahrräder leihen kann?
Velos gibt es gleich hier um die Ecke bei „Züri rollt“.
Ah, danke.
Entschuldigung, ich brauche noch einen Fahrschein.
Billetts gibt es hier am Automaten.
Darf man hier parken?
Nein, parkieren ist hier nicht erlaubt.`,
      },
    ],
  },
  {
    id: 'b1.2-kapitel-12',
    title: 'Kapitel 12: Geld regiert die Welt?',
    level: 'B1.2',
    lessons: [
      {
        id: 'k12-2.40',
        title: '2.40',
        audioSrc: '/b1.2_2.40.mp3',
        text: `Szene 1
Das war ja megacool! Dein Motorrad ist echt der Wahnsinn.
Ja, und die Maschine macht wirklich Spaß! Es hat sich echt gelohnt, so lange zu sparen. Dafür habe ich gerne auf vieles verzichtet. Ist ja schon nicht billig … Aber ich kann einfach super abschalten, wenn ich unterwegs bin. Da kann ich einfach allen Stress und Ärger vergessen.
Ja, das klingt gut. Wollen wir nächstes Wochenende wieder zusammen eine Tour machen?
Ja, klar. Wenn das Wetter gut ist, gerne.
Szene 2
Oh, süß, ist das dein Hund?
Ja, das bin ich mit Luna – sie spielt so gerne mit Stöckchen oder Bällen. Und mir macht das auch riesig Spaß!
Ja, das sieht man, dass ihr Spaß habt.
Ich finde ihre gute Laune immer so ansteckend. Sie ist immer so stolz, wenn sie den Stock geholt hat … Ach, manchmal denke ich, mehr brauche ich nicht zum Glücklichsein: Nur schöne Natur und Luna, mit der ich draußen sein kann.
Naja, ein bisschen mehr braucht man, glaube ich, schon als einen süßen Hund und die Natur … Aber ich würde gerne mal mit euch mitkommen, wenn ihr spazieren geht.
Klar, wir gehen oder joggen ja jeden Tag eine große Runde. Komm doch morgen einfach mit. Kannst du um halb sechs?
Halb sechs? Ja, das passt. Ich komme mit.
Szene 3
Also, das finde ich echt super, dass wir uns alle treffen und endlich mal wieder zusammen sind.
Ja, endlich kommen wir mal wieder alle zusammen. Das ist ja jetzt schon wieder so lange her! Also, eigentlich gibt es für mich nichts Schöneres, als mit euch zusammen zu sein, mich mit euch zu unterhalten und mit euch zu lachen. Perfekt, mehr brauche ich nicht!
Haha, jetzt übertreibst du aber. Aber es stimmt schon. Es ist einfach schön, euch zu treffen!
Eben. Also, auf uns!
Szene 4
Oh, wow, das ist aber ein tolles Wohnzimmer. Überhaupt, eure Wohnung ist echt schick!
Ja, das ist uns wichtig. Ich meine, man verbringt ja viel Zeit in den eigenen vier Wänden. Da nehmen wir auch gerne mal ein bisschen mehr Geld in die Hand. Wir arbeiten ja auch beide viel.
Mhm.
Das ist natürlich schon irgendwie auch Luxus, aber das ist es uns wert. Wir sind beide sehr gerne zu Hause und da möchten wir einfach, dass hier alles so richtig schön ist. Da wollen wir keine Kompromisse machen.
Ja, und als Nächstes leisten wir uns eine neue Küche. Komm, ich zeig dir mal die alte …`,
      },
      {
        id: 'k12-2.41',
        title: '2.41',
        audioSrc: '/b1.2_2.41.mp3',
        text: `Gespräch 1
Bank24, Manuel Schmidt, was kann ich für Sie tun?
Ja, guten Tag, hier ist Nina Ramon. Ich möchte gern ein Konto eröffnen und habe noch ein paar Fragen zu den Konditionen. Bieten Sie denn verschiedene Konten an?
Ja. Haben Sie ein festes Einkommen? Dann würde unser klassisches Girokonto für Sie passen. Wenn Sie mehr als 800 Euro Einkommen im Monat haben, verlangen wir keine Kontoführungsgebühren.
Entschuldigung, was genau meinen Sie mit Kontoführungsgebühr?
Für manche Konten müssen unsere Kunden eine kleine Gebühr bezahlen. Das Girokonto ist aber bei einem Einkommen über 800 Euro für Sie kostenlos. Sie bekommen dann eine Bankkarte, mit der Sie überall kostenlos zahlen können.
Und wie ist es mit Geld abheben? Ist das auch kostenlos?
Leider nein, weil wir eine Internetbank sind und keine Filialen haben. Es kommt also darauf an, bei welcher Bank Sie das Geld abheben und auch, wie viel. Je höher der Betrag ist, desto höher ist auch die Gebühr.
Oh, das klingt aber nicht gut.
Nun, auf den ersten Blick vielleicht. Aber deshalb bieten wir Ihnen auch gleichzeitig noch eine kostenlose Kreditkarte.
Die muss ich dann nicht extra beantragen?
Nein, die bekommen Sie automatisch und mit der können Sie in allen EuroLändern kostenlos Geld abheben.
Das klingt doch schon viel besser. Und wie ist es mit den Kontoauszügen?
Wir setzen da ganz auf das OnlineBanking. Auf unserer Webseite haben Sie immer einen aktuellen Überblick über Ihre finanzielle Situation, können selbst überweisen und bekommen Ihre Kontoauszüge as PDF.
Hoffentlich ist das nicht kompliziert …
Nein, nein, es ist ganz einfach. Wenn Sie es ein paar Mal benutzt haben, werden Sie sehen, wie praktisch und leicht das ist. Und sonst können Sie uns jederzeit anrufen.
Alles klar. Und wie kann ich jetzt mein Konto eröffnen?
Am besten gehen Sie auf unsere Webseite. Dort finden Sie das Antragsformular unter …`,
      },
      {
        id: 'k12-2.42',
        title: '2.42',
        audioSrc: '/b1.2_2.42.mp3',
        text: `Gespräch 2
Hallo Herr Richter, Sie haben ja heute einen Termin bei mir.
Ja, genau. Hallo Frau Simic.
Setzen Sie sich doch. Was kann ich für Sie tun?
Also, ich habe ja schon lange ein Konto bei Ihnen und bisher keinen Kredit gebraucht. Aber jetzt wollen wir uns eine neue Küche für unsere Wohnung kaufen. Unsere alte ist schon über 20 Jahre alt.
Ja, das can ich gut verstehen. Und das ist nicht ganz billig …
Genau, und dafür möchte ich gern einen Kredit aufnehmen.
Wie hoch soll der Kredit denn sein?
Also, ich denke, 5.000 Euro sollten genügen. Wir haben da ein echtes Schnäppchen gefunden.
Gut, das heißt Kredithöhe 5.000 Euro. Und wie schnell möchten Sie den Kredit zurückzahlen? Je höher die monatliche Rate ist, desto schneller haben Sie den Kredit zurückgezahlt.
Hm, ich weiß nicht, ich könnte so 400 Euro monatlich zurückzahlen. Vielleicht innerhalb eines Jahres?
Gut … Also, mit Zinsen würde es etwas länger dauern, das wären dann 14 Monate.
Okay. Wie hoch sind denn die Zinsen?
Ab 2.000 Euro zahlen Sie bei uns nur 3,99 % Zinsen. Wenn die Kreditsumme höher ist, dann werden die Zinsen niedriger, zum Beispiel zahlen Sie bei einem Kredit über 7.500 Euro nur noch 3,69 % Zinsen.
Nein, so viel brauche ich nicht.
Dann prüfe ich noch kurz Ihr monatliches Einkommen. … Ja, das passt. Da können wir Ihnen gern einen Kredit über 5.000 Euro geben.
Sehr schön, dass das klappt.
Dann füllen wir doch gleich die Dokumente aus und Sie können dann heute schon unterschreiben.
Und wann bekomme ich das Geld?
Zum nächsten Ersten ist es auf Ihrem Konto, das wird automatisch überwiesen. Also, Herr Richter, dann drucke ich jetzt die Unterlagen aus und anschließend …`,
      },
      {
        id: 'k12-2.43',
        title: '2.43',
        audioSrc: '/b1.2_2.43.mp3',
        text: `Gut gesagt: Kurzsätze mit je …, desto …
Du, kannst du mir bitte das Geld überweisen, das ich dir letzte Woche geliehen habe?
Hm, das waren doch 20 Euro, oder? Wenn du willst, kann ich es dir gleich geben.
Das wäre super! Je schneller, desto besser!
Guten Tag, ich möchte gern mein Konto bei Ihnen kündigen.
Selbstverständlich. Zu welchem Termin möchten Sie denn kündigen?
Also eigentlich je früher, desto lieber. Ich habe nämlich schon ein neues Konto.`,
      },
      {
        id: 'k12-2.44',
        title: '2.44',
        audioSrc: '/b1.2_2.44.mp3',
        text: `Schau mal hier, hast du diesen Artikel gelesen?
Meinst du den über die Globalisierung? Ja, der ist ganz interessant. Da geht‘s vor allem darum, wie sich unsere Wirtschaft verändert hat. Also, zum Beispiel, dass überall die großen Marken dominieren. Auf der ganzen Welt kann man zum Beispiel T-Shirts von den gleichen Modemarken kaufen, alle tragen die gleichen Sneakers usw.
Ja, aber Globalisierung ist ja nicht nur negativ. Globalisierung bedeutet für mich auch, dass die Technik sich heutzutage viel schneller weiterentwickelt als früher. Was gestern modern war, ist heute schon wieder alt. Das geht total schnell. Das hat ja auch was Gutes.
Zum Beispiel?
Na ja, Geräte werden ja dadurch auch ständig verbessert.
Stimmt. Mobilität ist aber auch ein wichtiges Stichwort bei Globalisierung. Man muss heute viel flexibler sein als früher, also im Beruf meine ich. Ein Leben lang bei einer Firma – das gibt es eigentlich nicht mehr, oder?
Ja, klar, was ja aber auch eine Chance ist. Man kann heute viel leichter irgendwo im Ausland arbeiten.
Da hast du natürlich recht.
Ach, das wollte ich dir noch erzählen: …`,
      },
      {
        id: 'k12-2.45',
        title: '2.45',
        audioSrc: '/b1.2_2.45.mp3',
        text: `1
zahlen – bezahlen – die Bezahlung
2
fahren – erfahren – die Erfahrung
3
ändern – verändern – die Veränderung
4
sprechen – versprechen – das Versprechen`,
      },
      {
        id: 'k12-2.46',
        title: '2.46',
        audioSrc: '/b1.2_2.46.mp3',
        text: `1
der Markt – der Weltmarkt
2
das Wort – das Passwort
3
der Name – der Benutzername
4
der Betrag – der Geldbetrag
5
der Auftrag – der Dauerauftrag
6
die Gebühr – die Kontoführungsgebühr`,
      },
      {
        id: 'k12-2.47',
        title: '2.47',
        audioSrc: '/b1.2_2.47.mp3',
        text: `Wo hab‘ ich das denn jetzt hingelegt? Ist der Platz noch frei?
Hallo zusammen.
Hi.
Ist hier noch frei?
Klar, setz dich.
Ach, ich hab‘ meinen Stift vergessen.
So, können wir anfangen? Sind alle da?
Entschuldigung.
Also, heute müssen wir den Besuch der Kunden aus Brasilien besprechen. Die können ja jetzt zum Glück doch persönlich kommen und das ist schon in drei Wochen.
Ähm, ja, das ist super. Wann kommen die denn jetzt genau?
Ich meine, am dritten, also am Mittwoch, oder?
Ja, also, am Mittwoch kommen sie hier in die Firma, aber ihr Flieger landet schon am Dienstag um … Moment … ah, hier: Am Dienstag, den 2. um 18:25 Uhr landen sie. Und dann bleiben sie bis Samstag.
Okay. Also, ich könnte sie am Dienstag vom Flughafen abholen. Ich kenne die drei ja alle gut. Oder möchte das jemand anderes machen?
Also, ich kann da wirklich nicht. Nein, das muss jemand anders machen.
Ne, also, ich finde es super, wenn du sie abholen kannst.
Klar, das mache ich gerne. Soll ich dann mit ihnen noch etwas unternehmen? Essen gehen oder so?
Ja, das wäre natürlich nett. Also, wir müssen heute ja noch viele Punkte besprechen. Vielleicht könnten wir den Besuch unserer Kunden in einer Arbeitsgruppe planen?
Ja, das ist eine gute Idee. Also, ich kann da gerne mitmachen.
Danke, Rainer. Wer macht noch mit?
Ich bin natürlich auch dabei. Und brauchen wir noch eine Unterkunft oder ist da schon was gebucht?
Ich glaube, Frau Sokolowski hat schon im Hotel „Peter“ reserviert. Das ist gleich um die Ecke und ganz in Ordnung. Ich kann mal nachfragen, ob das erledigt ist, und gebe euch dann Bescheid.
Okay, dann können wir zum nächsten Punkt kommen.
Ähm, Entschuldigung, ich hab‘ noch eine Frage zum Kundenbesuch. Welche Programmpunkte stehen denn schon fest?
Na, natürlich die Firmenbesichtigung und dann am Donnerstag die Besprechung mit der Geschäftsführung und dem Abteilungsleiter. Es geht da ja um einen Großauftrag …
Ja, klar, aber ich finde schon, dass wir uns was einfallen lassen müssen, damit sich unsere Gäste auch wohlfühlen. Also, ich finde, wir müssen uns ein gutes Programm überlegen und auch was von der Stadt zeigen und so.
Ja, das ist sehr gut. Könnten Sie mit Frau Gluck aus dem Controlling klären, wie viel Geld wir dafür ausgeben können?
Ja, alles klar. Habt ihr nachher gleich Zeit, dass wir die Aufgaben besprechen und verteilen können?
Ja, das passt für mich.
Ja, für mich auch. Dann bleiben wir einfach noch hier und besprechen das nachher.
Prima, vielen Dank. Dann können wir jetzt zum nächsten Punkt auf der Tagesordnung …`,
      },
      {
        id: 'k12-2.48',
        title: '2.48',
        audioSrc: '/b1.2_2.48.mp3',
        text: `Der Radwechsel
Bertolt Brecht

Ich sitze am Straßenhang.
Der Fahrer wechselt das Rad.
Ich bin nicht gern, wo ich herkomme.
Ich bin nicht gern, wo ich hinfahre.
Warum sehe ich den Radwechsel
Mit Ungeduld?`,
      },
      {
        id: 'k12-2.49',
        title: '2.49',
        audioSrc: '/b1.2_2.49.mp3',
        text: `Der kleine Unterschied
Mascha Kaléko

Es sprach zum Mister Goodwill
ein deutscher Emigrant:
„Gewiss, es bleibt dasselbe,
sag ich nun land statt Land,
sag ich für Heimat homeland
und poem für Gedicht.
Gewiss, ich bin sehr happy:
Doch glücklich bin ich nicht.“`,
      },
    ],
  },
  {
    id: 'bo-tro',
    title: 'Bổ trợ',
    level: 'Bổ trợ',
    lessons: [
      {
        id: 'bt-track-1',
        title: 'Track 1',
        audioSrc: '/track1.mp3',
        text: `1. Mein Name ist Tim und ich komme aus Deutschland.
Ich bin zwanzig Jahre alt und ich wohne in Berlin.
2. Mein Name ist Maria und ich komme aus Österreich.
Ich bin dreißig Jahre alt und ich wohne in Wien`,
      },
      {
        id: 'bt-track-2',
        title: 'Track 2',
        audioSrc: '/track2.mp3',
        text: `Ich bin Student. Ich spreche Deutsch, Englisch und Spanisch. Meine Hobbys sind Sport und Kochen.
Ich bin Ärztin. Ich spreche Deutsch und Englisch. Meine Hobbys sind Tanzen und Lesen.`,
      },
      {
        id: 'bt-track-3',
        title: 'Track 3',
        audioSrc: '/track3.mp3',
        text: `Hallo. Mein Name ist Max.
Hallo Max. Ich heiße Anna. Wohnst du hier in Berlin?
Nein, ich wohne in Hamburg. Und du?
Ich wohne in Berlin, aber ich komme aus Russland. Ich spreche Russisch und Deutsch. Was bist du von Beruf, Max?
Ich bin Ingenieur. Und du?
Ich bin Architektin. Wie alt bist du?
Ich bin 32 Jahre alt. Und du?
Ich bin 34 Jahre alt. Mein Hobby ist Singen. Was sind deine Hobbys?
Ich lese und tanze gern.`,
      },
      {
        id: 'bt-track-4',
        title: 'Track 4',
        audioSrc: '/track4.mp3',
        text: `Wie heißen Sie?
Wie alt sind Sie?
Was sind Sie von Beruf?
Woher kommen Sie?
Was sind Ihre Hobbys?
Wo wohnen Sie?
Welche Sprachen sprechen Sie?`,
      },
      {
        id: 'bt-track-5',
        title: 'Track 5',
        audioSrc: '/track5.mp3',
        text: `Mein Name ist Melanie Berti und ich bin 25 Jahre alt.
Ich komme aus der Schweiz, aber ich wohne jetzt in Hamburg.
Ich spreche Deutsch, Französisch und Italienisch.
Ich arbeite als Journalistin. Meine Hobbys sind Fußball und ich schwimme gern.`,
      },
      {
        id: 'bt-track-6',
        title: 'Track 6',
        audioSrc: '/track6.mp3',
        text: `Das ist Luca Rossi.
Er kommt aus Italien und er lebt in Rom.
Er ist 27 Jahre alt und Techniker von Beruf.
Er spricht Italienisch und Englisch. Seine Hobbys sind Basketball und Lesen.`,
      },
      {
        id: 'bt-track-7',
        title: 'Track 7',
        audioSrc: '/track7.mp3',
        text: `A – B – C – D – E – F – G – H – I – J – K – L – M – N – O – P – Q – R – S – T – U – V – W – X – Y – Z – Ä – Ö – Ü – ß`,
      },
      {
        id: 'bt-track-8',
        title: 'Track 8',
        audioSrc: '/track8.mp3',
        text: `Person A
Guten Tag, wie ist Ihr Name, bitte?
Hallo, mein Name ist Candela Rodriguez.
Wie buchstabiert man Ihren Vornamen?
C – A – N – D – E – L - A
Danke. Und wie buchstabiert man Ihren Nachnamen?
R – O – D – R – I – G – U – E – Z
Vielen Dank.

Person B
Guten Tag, wie ist Ihr Name, bitte?
Guten Tag, mein Name ist Jakub Kowalski.
Wie buchstabiert man Ihren Vornamen?
J – A – K – U – B
Danke. Und wie buchstabiert man Ihren Nachnamen?
K – O – W – A – L – S – K – I
Vielen Dank.`,
      },
      {
        id: 'bt-track-9',
        title: 'Track 9',
        audioSrc: '/track9.mp3',
        text: `das Schwimmbad – die Bäckerei – das Fahrrad – die Schule – der Bahnhof – der Flughafen – das Hotel – das Auto`,
      },
      {
        id: 'bt-track-10',
        title: 'Track 10',
        audioSrc: '/track10.mp3',
        text: `1. Wie viel Uhr ist es?
Es ist jetzt halb fünf.
2. Wie viel kostet dieser Pulli?
29 Euro.
3. Was möchten Sie, bitte?
Ich nehme ein Brot und drei Brötchen.
4. Entschuldigung, wo ist das Restaurant Rio?
Das Restaurant ist in der Müllerstraße.
5. Welcher Bus fährt zum Schwimmbad?
Nehmen Sie die Linie 33.`,
      },
      {
        id: 'bt-track-11',
        title: 'Track 11',
        audioSrc: '/track11.mp3',
        text: `Beispiel
Guten Tag, mein Name ist Nina Müller.
Guten Tag, Frau Müller und herzlich willkommen in unserem Hotel. Sie haben Zimmer 303. Hier ist Ihr Schlüssel.
Danke. Gibt es einen Aufzug?
Nein, leider nicht. Moment, ich helfe Ihnen mit dem Koffer.
Vielen Dank.

1. Guten Morgen, ich möchte diesen Kuchen hier, bitte.
Den hier mit Schokolade?
Ja, genau.
Sonst noch etwas?
Nein danke, das ist alles.
Das macht dann 6,50 Euro, bitte.

2. Entschuldigung, was kostet diese Hose?
Die ist im Angebot, nur 25 Euro.
Oh, schön, kann ich die mal probieren?
Ja, gern.

3. Entschuldigung, ich suche das Restaurant „Bella Italia“. Kennen Sie das?
Bella Italia ... Ach, da gehen Sie einfach hier geradeaus und dann bei dem Hotel links. Da ist das Restaurant.
Vielen Dank.

4. Also, dann treffen wir uns in einer Stunde.
Wie spät ist es denn jetzt?
Viertel nach vier.
Was? So spät schon? Okay, dann gehe ich jetzt. Bis später!
Okay, tschüs.

5. Was wünschen Sie, bitte?
Ich nehme das Hähnchen, bitte.
Mit Nudeln oder Kartoffeln?
Gibt es auch Salat?
Ja, natürlich.
Dann bitte mit Salat.

6. Welcher Bus fährt denn zum Marktplatz? Die Linie 12, oder?
Nein, nein, die Linie 12 fährt zum Bahnhof. Warte mal, was steht denn hier auf dem Plan? Ah ja, wir müssen die Linie 20 nehmen.
20? Dann komm, schnell!`,
      },
      {
        id: 'bt-track-12',
        title: 'Track 12',
        audioSrc: '/track12.mp3',
        text: `1. Entschuldigung, wo ist die Post?
2. Entschuldigung, wo ist das Hotel Alpina?
3. Entschuldigung, wo ist die Schule?
4. Entschuldigung, wo ist das Restaurant?
5. Entschuldigung, wo ist der Bahnhof?`,
      },
      {
        id: 'bt-track-13',
        title: 'Track 13',
        audioSrc: '/track13.mp3',
        text: `1. Entschuldigung, Wo ist die Post?
Gehen Sie geradeaus und dann links. Da ist die Post.
2. Entschuldigung, wo ist das Hotel Alpina?
Gehen Sie links und dann geradeaus. Da ist das Hotel Alpina.
3. Entschuldigung, wo ist die Schule?
Gehen Sie rechts und dann links. Da ist die Schule.
4. Entschuldigung, wo ist das Restaurant?
Gehen Sie geradeaus und dann links. Da ist das Restaurant.
5. Entschuldigung, wo ist der Bahnhof?
Gehen Sie rechts und dann geradeaus. Da ist der Bahnhof.`,
      },
      {
        id: 'bt-track-14',
        title: 'Track 14',
        audioSrc: '/track14.mp3',
        text: `1. Heute im Angebot: Frische Tomaten – ein Kilo nur 2,30 Euro.
2. Besonders günstig diese Woche: Ein Kilo Äpfel für 2,05 Euro.
3. Trinken Sie auch gern am Morgen eine schöne Tasse Kaffee? Dann greifen Sie zu: die 500-Gramm-Packung Kaffee für nur 6,50 Euro.
4. Nur diese Woche: 500 Gramm Zucker für nur 79 Cent.
5. Dieser Preis ist toll: 100 Gramm Schinken heute für nur 1,99 Euro. Dieses Angebot gilt nur heute, liebe Kunden.`,
      },
      {
        id: 'bt-track-15',
        title: 'Track 15',
        audioSrc: '/track15.mp3',
        text: `1. Entschuldigung, was kostet die Milch?
95 Cent.
Und wie viel kostet der Apfelsaft?
1,20 Euro.`,
      },
      {
        id: 'bt-track-16',
        title: 'Track 16',
        audioSrc: '/track16.mp3',
        text: `2. Guten Tag.
Guten Tag.
Was möchten Sie?
Ich nehme 200 Gramm Schinken.`,
      },
      {
        id: 'bt-track-17',
        title: 'Track 17',
        audioSrc: '/track17.mp3',
        text: `3. Entschuldigung, wo finde ich Nudeln?
Dort links.
Danke.`,
      },
      {
        id: 'bt-track-18',
        title: 'Track 18',
        audioSrc: '/track18.mp3',
        text: `4. Bitte schön?
Ich möchte ein Kilo Birnen, bitte.
Noch etwas?
Danke, das ist alles.`,
      },
      {
        id: 'bt-track-19',
        title: 'Track 19',
        audioSrc: '/track19.mp3',
        text: `5. Ich brauche Bananen. Was kostet ein Kilo?
Drei Euro.
Oh, das ist teuer.`,
      },
      {
        id: 'bt-track-20',
        title: 'Track 20',
        audioSrc: '/track20.mp3',
        text: `6. Ich möchte fünf Äpfel.
Das macht 1 Euro 50.`,
      },
      {
        id: 'bt-track-21',
        title: 'Track 21',
        audioSrc: '/track21.mp3',
        text: `1. Was möchten Sie, bitte?
2. Die Butter kostet 1,20 Euro.
3. Zucker ist hier rechts.
4. Noch etwas?
5. Nein, Fisch haben wir nicht.`,
      },
      {
        id: 'bt-track-22',
        title: 'Track 22',
        audioSrc: '/track22.mp3',
        text: `1. Haben Sie auch Fleisch?
2. Sind die Äpfel aus Italien?
3. Haben Sie Oliven?
4. Schmecken die Birnen gut?
5. Ist das Brot noch warm?`,
      },
      {
        id: 'bt-track-23',
        title: 'Track 23',
        audioSrc: '/track23.mp3',
        text: `1. Guten Tag, was möchten Sie?
Ich hätte gern 100 Gramm Schinken.
Gern. Noch etwas?
Ja, ich nehme auch 100 Gramm Salami.
Ist das alles?
Ja, danke, das ist alles.

2. Guten Morgen. Was darf’s sein?
Guten Morgen. Ich nehme 200 Gramm Käse.
Gern. Noch etwas?
Ja. Haben Sie Oliven?
Ja, hier.
Dann nehme ich noch 150 Gramm Oliven. Das ist alles.`,
      },
      {
        id: 'bt-track-24',
        title: 'Track 24',
        audioSrc: '/track24.mp3',
        text: `1. Wie viel kostet ein Kilo Äpfel?
Es kostet 2 Euro 39.
2. Wann schließt der Supermarkt?
Er schließt um 19:30 Uhr.
3. Wann ist der Markt?
Markt ist immer am Donnerstag.
4. Wo ist die Kasse?
Die Kasse ist hier links.
5. Was möchten Sie, bitte?
Ich möchte vier Brötchen.`,
      },
      {
        id: 'bt-track-25',
        title: 'Track 25',
        audioSrc: '/track25.mp3',
        text: `Beispiel
Achtung an Gleis vier: Auf Gleis vier fährt ein: IntercityExpress 433 nach Hamburg Hauptbahnhof. Planmäßige Abfahrt 16:54 Uhr. Bitte Vorsicht bei der Einfahrt.

1. Liebe Fahrgäste. Bitte beachten Sie: Unser Zug-Restaurant schließt heute bereits um 17 Uhr. Warme und kalte Getränke bekommen Sie aber auch später noch an unserem Automaten in der Zugmitte.

2. Verehrte Fahrgäste, wegen des starken Windes kommt der ICE aus Stuttgart mit Weiterfahrt nach München circa 15 Minuten später als geplant.

3. Liebe Kunden, die Geschäfte im Bahnhof bieten Ihnen heute eine Sonderaktion. Kaufen Sie alle Produkte mit 10% Rabatt. Nur heute, greifen Sie zu!

4. Achtung – eine Durchsage: Frau Müller, bitte kommen Sie zur Information. Ihre Tochter wartet hier auf Sie. Frau Müller bitte zur Information.`,
      },
      {
        id: 'bt-track-26',
        title: 'Track 26',
        audioSrc: '/track26.mp3',
        text: `1. Morgen fahre ich mit dem Zug nach Köln. Der Zug fährt um 18:21 Uhr ab und kommt um 20:09 Uhr in Köln an. Am Bahnhof nehme ich dann den Bus und fahre zu meiner Freundin.`,
      },
      {
        id: 'bt-track-27',
        title: 'Track 27',
        audioSrc: '/track27.mp3',
        text: `2. Ich fahre am Sonntag nach Regensburg. Kommst du mit? Die Fahrkarte kostet nur 28 Euro für zwei Personen.`,
      },
      {
        id: 'bt-track-28',
        title: 'Track 28',
        audioSrc: '/track28.mp3',
        text: `3. Kannst du mich zum Bahnhof fahren? Mein Fahrrad ist kaputt und in einer halben Stunde fährt mein Zug.`,
      },
      {
        id: 'bt-track-29',
        title: 'Track 29',
        audioSrc: '/track29.mp3',
        text: `4. Hast du die Durchsage gehört? Unser Zug kommt fünfzehn Minuten später. Dann können wir ja noch schnell ein Wasser und eine Cola kaufen.`,
      },
      {
        id: 'bt-track-30',
        title: 'Track 30',
        audioSrc: '/track30.mp3',
        text: `5. Wo treffen wir uns morgen? Unser Zug fährt von Gleis 4. Wollen wir uns direkt dort treffen? Oder bei der Uhr am Eingang?`,
      },
      {
        id: 'bt-track-31',
        title: 'Track 31',
        audioSrc: '/track31.mp3',
        text: `Wir müssen noch die Fahrkarten kaufen. Wo ist hier ein Automat? Ach komm, wir gehen schnell zum Schalter. Da stehen nicht viele Leute.`,
      },
      {
        id: 'bt-track-32',
        title: 'Track 32',
        audioSrc: '/track32.mp3',
        text: `Mit dem Zug brauchen wir fast fünf Stunden nach Hamburg. Das ist wirklich lang. Wir müssen jetzt noch Brötchen und Getränke kaufen.`,
      },
      {
        id: 'bt-track-33',
        title: 'Track 33',
        audioSrc: '/track33.mp3',
        text: `1. Der Zug fährt um 12:04 Uhr ab.
2. Der Zug kommt um 14:09 Uhr an.
3. Die Fahrkarte kostet 45 Euro.
4. Der Zug fährt auf Gleis 5.
5. Der Zug ist pünktlich.`,
      },
      {
        id: 'bt-track-34',
        title: 'Track 34',
        audioSrc: '/track34.mp3',
        text: `1. Wann fährt der nächste Zug nach Stuttgart?
Der nächste Zug fährt um 13:45 Uhr.
2. Wie viel kostet eine Fahrkarte nach Stuttgart?
57 Euro.
3. Auf welchem Gleis fährt der Zug?
Auf Gleis 13.
4. Wann kommt der Zug in Stuttgart an?
Um 15:57 Uhr.`,
      },
      {
        id: 'bt-track-35',
        title: 'Track 35',
        audioSrc: '/track35.mp3',
        text: `Guten Tag. Eine Fahrkarte nach Berlin, bitte.
Hin und zurück?
Nur hin, bitte. Wie viel kostet das?
61 Euro, bitte. Der nächste Zug nach Berlin fährt in 10 Minuten, um 13:51 Uhr.
Und wann kommt der Zug in Berlin an?
Um 17:10 Uhr.
Super, vielen Dank.`,
      },
      {
        id: 'bt-track-36',
        title: 'Track 36',
        audioSrc: '/track36.mp3',
        text: `1. Guten Tag. Was möchten Sie trinken?
Ich nehme eine Cola, bitte.
Und Sie?
Ich möchte einen Tomatensaft.
Tut mir leid. Wir haben keinen Tomatensaft.
Okay, dann möchte ich einen Orangensaft.
Gut, kommt sofort.`,
      },
      {
        id: 'bt-track-37',
        title: 'Track 37',
        audioSrc: '/track37.mp3',
        text: `2. Guten Abend. Was darf ich Ihnen bringen?
Guten Abend. Ich hätte gern die Pizza Salami.
Gern. Und zum Trinken?
Ein Wasser, bitte.
Und Sie?
Für mich bitte den Reis mit Gemüse und eine Limonade.
Vielen Dank.`,
      },
      {
        id: 'bt-track-38',
        title: 'Track 38',
        audioSrc: '/track38.mp3',
        text: `3. Guten Tag. Was möchten Sie, bitte?
Hallo. Was können Sie mir empfehlen?
Wir haben einen ganz frischen Apfelkuchen. Und der Schokoladenkuchen ist auch sehr gut.
Dann nehme ich den Schokoladenkuchen. Mit Sahne, bitte.
Möchten Sie auch etwas trinken?
Ja, einen Kaffee.`,
      },
      {
        id: 'bt-track-39',
        title: 'Track 39',
        audioSrc: '/track39.mp3',
        text: `1. Guten Tag. Was möchten Sie trinken?
Ich nehme eine Cola, bitte.
Und Sie?
Ich möchte einen Tomatensaft.
Tut mir leid. Wir haben keinen Tomatensaft.
Okay, dann möchte ich einen Orangensaft.
Gut, kommt sofort.`,
      },
      {
        id: 'bt-track-40',
        title: 'Track 40',
        audioSrc: '/track40.mp3',
        text: `2. Guten Abend. Was darf ich Ihnen bringen?
Guten Abend. Ich hätte gern die Pizza Salami.
Gern. Und zum Trinken?
Ein Wasser, bitte.
Und Sie?
Für mich bitte den Reis mit Gemüse und eine Limonade.
Vielen Dank.`,
      },
      {
        id: 'bt-track-41',
        title: 'Track 41',
        audioSrc: '/track41.mp3',
        text: `3. Guten Tag. Was möchten Sie, bitte?
Hallo. Was können Sie mir empfehlen?
Wir haben einen ganz frischen Apfelkuchen. Und der Schokoladenkuchen ist auch sehr gut.
Dann nehme ich den Schokoladenkuchen. Mit Sahne, bitte.
Möchten Sie auch etwas trinken?
Ja, einen Kaffee.`,
      },
      {
        id: 'bt-track-42',
        title: 'Track 42',
        audioSrc: '/track42.mp3',
        text: `1. Ich hätte gern eine Cola und ich nehme den Apfelkuchen.
2. Ich möchte einen Orangensaft und ich hätte auch gern das Eis, aber ohne Sahne.
3. Ich nehme das Hähnchen mit Pommes frites und ich möchte auch ein Wasser.`,
      },
      {
        id: 'bt-track-43',
        title: 'Track 43',
        audioSrc: '/track43.mp3',
        text: `1. Guten Abend. Was darf ich Ihnen bringen?
Und zum Trinken?
2. Hallo. Was hätten Sie gern?
Möchten Sie auch etwas essen?
Tut mir leid. Das haben wir heute nicht.`,
      },
      {
        id: 'bt-track-44',
        title: 'Track 44',
        audioSrc: '/track44.mp3',
        text: `Hast du heute Zeit?
Wann? Heute Abend?
Ja, wir könnten schwimmen gehen. Das Schwimmbad hat heute bis um 10 Uhr geöffnet.
Schwimmen? Keine Lust. Gehen wir doch lieber ins Kino. Da laufen gerade echt gute Filme, zum Beispiel der neue Film mit Daniel Brühl.
Ah ja, den möchte ich auch sehen. Wann treffen wir uns dann?
Hmm, der Film beginnt um halb acht. Dann treffen wir uns um sieben am Bahnhof und gehen dann zusammen zum Kino.
Okay, alles klar. Dann bis später. Tschüs.
Tschüs.`,
      },
      {
        id: 'bt-track-45',
        title: 'Track 45',
        audioSrc: '/track45.mp3',
        text: `Hast du am Wochenende Zeit?
Ja, am Samstag. Was möchtest du machen?
Ich möchte wandern gehen. Kommst du mit?
Gute Idee. Und später machen wir ein Picknick.
Super. Wann treffen wir uns?
Um zehn Uhr am Bahnhof?
Alles klar.`,
      },
      {
        id: 'bt-track-46',
        title: 'Track 46',
        audioSrc: '/track46.mp3',
        text: `1. Wann rufst du mich an?
Um halb fünf. Oder ist das zu spät?
Nein, nein, das ist okay.

2. Wann holst du mich ab?
Um Viertel nach fünf. Warte am besten vorm Haus, ich komme mit dem Auto.

3. Wie spät ist es jetzt?
Kurz vor fünf.
Was? Schon so spät?

4. Wir gehen doch heute mit Maria und Maxim ins Kino. Wann müssen wir da losgehen?
Hm, um zwanzig vor fünf. Dann kommen wir pünktlich.`,
      },
      {
        id: 'bt-track-47',
        title: 'Track 47',
        audioSrc: '/track47.mp3',
        text: `1. Wann gehen wir ins Kino?
Um halb acht.

2. Wann treffen wir uns?
Um vier?
Nein, das geht nicht. Fünf Uhr ist besser.

3. Um wie viel Uhr gehen wir in das Restaurant?
Ich arbeite bis halb sieben. Hmm, sieben Uhr ist gut.
Okay, bis später.

4. Ich gehe heute joggen. Kommst du mit?
Klar. Wann?
Nach dem Kurs, also um Viertel nach vier.
Okay. Um halb fünf habe ich keine Zeit, dann komme ich das nächste Mal mit.

5. Wann gehen wir heute ins Schwimmbad?
Um Viertel vor acht? Dann können wir zwei Stunden schwimmen. Das Schwimmbad schließt um 22 Uhr.
Okay.

6. Heute kommen meine Eltern zum Essen.
Ah ja, stimmt.
Wann bist du zu Hause? Du musst mir helfen.
Ich arbeite bis vier. Dann bin ich um halb fünf zu Hause.`,
      },
      {
        id: 'bt-track-48',
        title: 'Track 48',
        audioSrc: '/track48.mp3',
        text: `Wie viel Uhr ist es?
Wann gehen wir ins Kino?
Wann arbeitest du?
Wann gehen wir ins Schwimmbad?
Wann machen wir Sport?
Wie spät ist es?
Wann machen wir unser Picknick?`,
      },
      {
        id: 'bt-track-49',
        title: 'Track 49',
        audioSrc: '/track49.mp3',
        text: `1. Hallo, hier ist Maria. Ich gehe heute Abend mit Greta ins Kino. Kommst du mit? Ruf mich mal an. Meine neue Nummer ist 0172 – 901 422 951. Also noch mal 0172 – 901 422 951. Bis später!

2. Hi Lilli, hier ist Jakob. Du, wir gehen heute doch nicht ins Theater. Wir treffen uns im Café am Marktplatz. Da kannst du vom Bahnhof hinlaufen. Das ist nicht weit. Tschüs!

3. Hallo Lukas, ich kann dich leider nicht abholen, mein Auto ist kaputt. Nimm einfach die U3 am Marienplatz und fahr bis zur Universität. Dann musst du noch fünf oder sechs Minuten gehen. Bis dann!

4. Hier ist Cem. Wo bist du denn? Ich warte jetzt schon fünfzehn Minuten auf dich. Also, in fünf Minuten gehe ich, dann musst du den Weg zu Elenas Party allein finden. Ciao!

5. Hi, hier ist Lena. Du, am Freitag muss ich zu meinen Eltern fahren und komme erst am Samstag spät zurück. Aber am Sonntag können wir uns treffen. Vielleicht machen wir ein Picknick? Ruf mich mal zurück, tschüs!`,
      },
      {
        id: 'bt-track-50',
        title: 'Track 50',
        audioSrc: '/track50.mp3',
        text: `1. Hallo Luisa, wie geht’s?
Hallo Victor. Na ja, es geht. Ich habe schon seit Tagen so Kopfschmerzen.
Wirklich? Du musst viel Wasser trinken. Das hilft. Und du musst viel spazieren gehen. Frische Luft ist wichtig.
Danke, Victor. Das probiere ich. Kommst du gleich mit in den Park?
Ja, gern.`,
      },
      {
        id: 'bt-track-51',
        title: 'Track 51',
        audioSrc: '/track51.mp3',
        text: `2. Hallo Pietro. Was ist denn los?
Mein Zahn tut so weh. Aua, aua.
Wirklich? Und seit wann?
Ach, schon seit drei Tagen.
Aber warum gehst du denn nicht zum Zahnarzt?
Na ja, ich habe Angst.
Du musst zum Zahnarzt gehen. Warte mal, ich rufe da gleich mal an.`,
      },
      {
        id: 'bt-track-52',
        title: 'Track 52',
        audioSrc: '/track52.mp3',
        text: `3. Hallo Jan, gehen wir heute zusammen ins Fitnessstudio?
Nein, ich kann nicht. Mein Bauch tut weh.
Oh, dann musst du viel Tee trinken und eine Suppe essen. Das hilft. Und leg dich ins Bett. Entspannung ist auch wichtig.
Okay, das mache ich. Ich rufe dich morgen an, okay?
Ja, okay. Gute Besserung!
Danke.`,
      },
      {
        id: 'bt-track-53',
        title: 'Track 53',
        audioSrc: '/track53.mp3',
        text: `4. Ah Maria, wie geht es dir?
Ach, nicht so gut. Ich habe Halsschmerzen. Hast du eine Idee, was da hilft?
Hm, trink eine heiße Zitrone. Und du musst ein bis zwei Tage zu Hause bleiben.
Meinst du? Okay, dann rufe ich gleich mal im Büro an.
Ja, das ist das Beste. Ich hatte letzte Woche auch Halsschmerzen und ...`,
      },
      {
        id: 'bt-track-54',
        title: 'Track 54',
        audioSrc: '/track54.mp3',
        text: `1. Hallo Luisa, wie geht’s?
Hallo Victor. Na ja, es geht. Ich habe schon seit Tagen so Kopfschmerzen.
Wirklich? Du musst viel Wasser trinken. Das hilft. Und du musst viel spazieren gehen. Frische Luft ist wichtig.
Danke, Victor. Das probiere ich. Kommst du gleich mit in den Park?
Ja, gern.`,
      },
      {
        id: 'bt-track-55',
        title: 'Track 55',
        audioSrc: '/track55.mp3',
        text: `2. Hallo Pietro. Was ist denn los?
Mein Zahn tut so weh. Aua, aua.
Wirklich? Und seit wann?
Ach, schon seit drei Tagen.
Aber warum gehst du denn nicht zum Zahnarzt?
Na ja, ich habe Angst.
Du musst zum Zahnarzt gehen. Warte mal, ich rufe da gleich mal an.`,
      },
      {
        id: 'bt-track-56',
        title: 'Track 56',
        audioSrc: '/track56.mp3',
        text: `3. Hallo Jan, gehen wir heute zusammen ins Fitnessstudio?
Nein, ich kann nicht. Mein Bauch tut weh.
Oh, dann musst du viel Tee trinken und eine Suppe essen. Das hilft. Und leg dich ins Bett. Entspannung ist auch wichtig.
Okay, das mache ich. Ich rufe dich morgen an, okay?
Ja, okay. Gute Besserung!
Danke.`,
      },
      {
        id: 'bt-track-57',
        title: 'Track 57',
        audioSrc: '/track57.mp3',
        text: `4. Ah Maria, wie geht es dir?
Ach, nicht so gut. Ich habe Halsschmerzen. Hast du eine Idee, was da hilft?
Hm, trink eine heiße Zitrone. Und du musst ein bis zwei Tage zu Hause bleiben.
Meinst du? Okay, dann rufe ich gleich mal im Büro an.
Ja, das ist das Beste. Ich hatte letzte Woche auch Halsschmerzen und ...`,
      },
      {
        id: 'bt-track-58',
        title: 'Track 58',
        audioSrc: '/track58.mp3',
        text: `Ich habe Bauchschmerzen.
Mein Kopf tut weh.
Ich habe Zahnschmerzen.
Mein Rücken tut weh.
Ich schlafe schlecht.
Ich habe Fieber.`,
      },
      {
        id: 'bt-track-59',
        title: 'Track 59',
        audioSrc: '/track59.mp3',
        text: `Praxis Doktor Hartmann, Meier, guten Tag.
Guten Tag. Mein Name ist Florin Kaiser. Ich möchte einen Termin, bitte.
Gern. Am Dienstag um 14:45 Uhr?
Am Dienstag muss ich arbeiten. Kann ich am Mittwochnachmittag kommen?
Am Mittwochnachmittag ist die Praxis geschlossen. Donnerstag 16:30 Uhr?
Ja, das geht. Vielen Dank.
Danke, Herr Kaiser. Bis Donnerstag, auf Wiederhören.
Auf Wiederhören.`,
      },
      {
        id: 'bt-track-60',
        title: 'Track 60',
        audioSrc: '/track60.mp3',
        text: `Hallo Sonja, komm rein.
Hallo! Schön, dass ich eure neue Wohnung endlich sehe!
Ich zeige dir gleich alles. Also, hier ist das Wohnzimmer.
Oh, schön, so hell. Und mit Balkon.
Und das ist die Küche. Da mache ich uns gleich einen Kaffee.
Toll.
Hier ist unser Schlafzimmer.
Oh, so groß.
Daneben ist gleich das Bad.
Ah, gut, mit Fenster. Das ist wirklich eine schöne Wohnung.
Danke. Ich bin auch froh, dass wir ...`,
      },
      {
        id: 'bt-track-61',
        title: 'Track 61',
        audioSrc: '/track61.mp3',
        text: `Guten Tag. Wie kann ich Ihnen helfen?
Guten Tag. Ich suche ein neues Sofa.
Gern. Kommen Sie bitte. Unsere Sofas stehen dort rechts.
Oh, das Bild ist aber schön.
Das ist ganz billig, nur 25 Euro.
Das ist ein guter Preis für so ein schönes Bild, aber ich brauche ja kein Bild.
So, hier sind unsere Sofas. Wie gefällt Ihnen dieses Sofa?
Ach, die Farbe ist okay, aber es ist viel zu klein.
Dann vielleicht dieses hier?
Ach, ich weiß nicht ... Oh, der Tisch ist sehr schön. Wie viel kostet der?
Moment ... Der ist im Angebot, nur 175 Euro.
Na ja, das ist ein bisschen teuer. Aber der Tisch gefällt mir wirklich gut.
Der passt auch sehr gut zu diesem Sofa.
Das ist richtig. Aber ich denke, ich muss erst meine Frau fragen, was sie denkt.
Machen Sie das. Das ist kein Problem. Sie finden alle unsere Möbel im Internet. Da können Sie Ihrer Frau ja die Sofas und den Tisch zeigen.
Ja, so mache ich das. Ich zeige meiner Frau alles und dann komme ich morgen wieder. Vielen Dank für Ihre Hilfe.`,
      },
      {
        id: 'bt-track-62',
        title: 'Track 62',
        audioSrc: '/track62.mp3',
        text: `Wie findest du das Sofa?
Wie findest du den Tisch?
Wie findest du den Schrank?
Wie findest du das Regal?
Wie findest du den Stuhl?
Wie findest du das Bett?`,
      },
      {
        id: 'bt-track-63',
        title: 'Track 63',
        audioSrc: '/track63.mp3',
        text: `Paula Ivanovic.
Hallo Paula, hier ist Frederik.
Hallo Frederik. Wie geht’s?
Gut, danke. Du, ich habe gehört, dass du eine Wohnung suchst. Also, bei meinen Eltern im Haus ist eine frei.
Echt? In welcher Straße ist denn die Wohnung?
In der Kittlerstraße 60.
Ah, das ist gut. Und wie groß ist die Wohnung?
Die Wohnung hat drei Zimmer.
Das passt gut. Und wie teuer ist sie?
600 Euro im Monat.
Oh, das klingt gut.
Ich gebe dir mal die Telefonnummer vom Vermieter. Dann kannst du da einfach anrufen.
Oh ja, super. Warte, ich hole schnell einen Stift. ... So jetzt.
Die Nummer von Herrn Bergmann ist 89 65 84 71.
Danke, Frederik. Ich rufe Herrn Bergmann gleich mal an.`,
      },
      {
        id: 'bt-track-64',
        title: 'Track 64',
        audioSrc: '/track64.mp3',
        text: `Frederik Huber.
Hallo Frederik, hier ist Paula. Danke noch mal für den Tipp mit der Wohnung.
Ja, bitte. Und? Hast du die Wohnung bekommen?
Ja, habe ich. Toll, oder?
Ja, super. Und bist du schon umgezogen?
Nein, jetzt im Mai muss der Vermieter noch ein paar Dinge in der Wohnung reparieren und im Juni kann ich dann in die Wohnung.
Und ist die Wohnung nicht ein bisschen teuer für dich?
Nein. Die Wohnung hat ja drei Zimmer und dann wohnt meine Schwester auch dort und wir bezahlen die Wohnung zusammen.
Ah, das ist ja gut.
Ja, das ist perfekt. Ich freue mich sehr. Und zur Uni sind es auch nur fünf Minuten zu Fuß.
Ja, ich weiß.
Du, ich mache dann auch eine Party im Juni. Kommst du? Bitte!
Ja, natürlich ...`,
      },
      {
        id: 'bt-track-65',
        title: 'Track 65',
        audioSrc: '/track65.mp3',
        text: `421 Euro
673 Euro
744 Euro
988 Euro
1004 Euro
1577 Euro
1959 Euro
2251 Euro`,
      },
      {
        id: 'bt-track-66',
        title: 'Track 66',
        audioSrc: '/track66.mp3',
        text: `298
335
569
801
1062
1476
1713
1888`,
      },
      {
        id: 'bt-track-67',
        title: 'Track 67',
        audioSrc: '/track67.mp3',
        text: `Die Wohnung hat vier Zimmer, Küche und Bad.
Diese Wohnung hat eine Küche, ein Wohnzimmer und einen Balkon.
Meine Wohnung hat zwei Zimmer, einen Garten und eine Garage.
Paulas Wohnung hat drei Zimmer, einen Balkon und einen Garten.`,
      },
      {
        id: 'bt-track-68',
        title: 'Track 68',
        audioSrc: '/track68.mp3',
        text: `Guten Morgen, Frau Kittferner.
Guten Morgen, Herr Arsenovic. Der Drucker ist immer noch kaputt. Haben Sie schon mit Herrn Fritschke gesprochen?
Nein, er war gestern Nachmittag nicht im Büro.
Dann rufen Sie ihn gleich an, bitte. Ach, und dieses Paket hier, das gehört nicht uns. Bringen Sie es bitte zum Marketing in den 4. Stock.
Ja, mache ich gleich. Und dann schreibe ich eine E-Mail an alle Kollegen. Nächste Woche ist ja unser Sommerfest.
Richtig. Ja, schreiben Sie eine Einladung mit allen wichtigen Informationen. Und bestellen Sie auch gleich alles für das Fest. Wir müssen ja etwas essen und trinken, also Würstchen, Brötchen, Wasser, Cola und so weiter.
Gut, ich schreibe gleich eine Liste.
Ach, und heute Mittag kommen die Kollegen aus Frankfurt. Reservieren Sie bitte einen Tisch im Restaurant. Um 13 Uhr für 6 Personen.
Im Restaurant “Zur Sonne”?
Ja, genau. Und ich habe heute einen Termin mit Frau Hoffmann um 14 Uhr. Können Sie bitte mit ihr telefonieren und ihr sagen, dass ich erst um 15 Uhr komme?
Ja, mache ich.
Und dieses Formular hier müssen Sie noch ausfüllen und dann Frau Greiner faxen, bitte.
Kein Problem. Mache ich dann später.
Gut, dann vielen Dank.
Puh, das ist ja ganz schön viel. Also, dann fange ich mal an ...`,
      },
      {
        id: 'bt-track-69',
        title: 'Track 69',
        audioSrc: '/track69.mp3',
        text: `1. Kann ich einen Kaffee haben?
Ja, natürlich. Ich koche jetzt Kaffee.

2. Können Sie mir einen Bleistift geben?
Ich habe keinen Bleistift.

3. Wie spät ist es, bitte?
Es ist 16 Uhr.

4. Können Sie die Musik ausmachen, bitte?
Oh, Entschuldigung.

5. Bitte hier nicht telefonieren.
Okay, kein Problem.

6. Haben Sie ein Papier für mich?
Ja. Hier bitte.`,
      },
      {
        id: 'bt-track-70',
        title: 'Track 70',
        audioSrc: '/track70.mp3',
        text: `Firma Klopp, Kai Schmidt, guten Tag. Was kann ich für Sie tun?
Frau Paulsen ist nicht da. Aber Sie können mit Herrn Rossi sprechen.
Gerne. Auf Wiederhören.`,
      },
      {
        id: 'bt-track-71',
        title: 'Track 71',
        audioSrc: '/track71.mp3',
        text: `1. Guten Tag, ich brauche ein Zimmer, bitte.
Ein Einzelzimmer oder ein Doppelzimmer?
Ein Einzelzimmer, bitte.
Gern. Wann möchten Sie kommen?
Vom 4. Mai bis zum 6. Mai.`,
      },
      {
        id: 'bt-track-72',
        title: 'Track 72',
        audioSrc: '/track72.mp3',
        text: `2. Hallo, ich möchte ein Doppelzimmer reservieren.
Gern. Mit Frühstück oder mit Halbpension?
Nur mit Frühstück, bitte. Wie viel kostet das Zimmer für eine Nacht?
80 Euro.`,
      },
      {
        id: 'bt-track-73',
        title: 'Track 73',
        audioSrc: '/track73.mp3',
        text: `3. Guten Tag. Ich komme am 10. April nach Hamburg und brauche ein Zimmer.
Kein Problem. Wie lange möchten Sie bleiben?
Eine Woche.`,
      },
      {
        id: 'bt-track-74',
        title: 'Track 74',
        audioSrc: '/track74.mp3',
        text: `Guten Tag. Wie kann ich Ihnen helfen?
Ein Einzelzimmer oder ein Doppelzimmer?
Mit Frühstück?
84 Euro. Wie lange möchten Sie bleiben?
In Ordnung. Hier sind Ihre Schlüssel.`,
      },
      {
        id: 'bt-track-75',
        title: 'Track 75',
        audioSrc: '/track75.mp3',
        text: `1. Und wie ist der Urlaub?
Das Hotel ist sehr schön, aber das Wetter leider nicht. Es regnet sehr viel.
Oh nein. Vielleicht ist es ja nächste Woche besser.
Ja, vielleicht.`,
      },
      {
        id: 'bt-track-76',
        title: 'Track 76',
        audioSrc: '/track76.mp3',
        text: `2. Gefällt es euch denn in Hamburg?
Ja, sehr. Und es ist sehr warm. Die Sonne scheint und wir gehen viel spazieren oder sitzen im Café.
Dann habt ihr ja eine gute Zeit dort.`,
      },
      {
        id: 'bt-track-77',
        title: 'Track 77',
        audioSrc: '/track77.mp3',
        text: `3. Und wie ist das Wetter?
Na ja, es ist kalt und wir haben sehr viel Wind. Wir bleiben fast nur im Hotel.
Dann kannst du ja viel lesen.
Ja, ich habe zehn Bücher mitgenommen.`,
      },
      {
        id: 'bt-track-78',
        title: 'Track 78',
        audioSrc: '/track78.mp3',
        text: `1. Ina, wann bist du geboren?
Am 12.03.1974.

2. Und wann ist Jakob geboren?
Am 19.04.2003.

3. Hey Tamara, wann bist du geboren?
Am 31.01.1999.

4. Finn, wann bist du eigentlich geboren?
Am 09.06.1989.

5. Und wann ist Valentina geboren?
Am 13.08.1978.

6. Du Jimmy, wann bist du denn geboren?
Am 02.02.2002.
Oh, cooles Datum.`,
      },
      {
        id: 'bt-track-79',
        title: 'Track 79',
        audioSrc: '/track79.mp3',
        text: `Am 16.01.1989.
Am 30.05.1976.
Am 04.11.1997.
Am 28.12.2001.
Am 03.06.1969.
Am 19.02.1988.
Am 11.08.1980.
Am 30.07.1972.`,
      },
      {
        id: 'bt-track-80',
        title: 'Track 80',
        audioSrc: '/track80.mp3',
        text: `Hallo Paul, hier ist Tina.
Hallo Tina, wie geht’s?
Gut, danke. Du, ich habe am 17. Juli Geburtstag. Das ist ein Samstag und ich mache eine Party. Kommst du?
Oh, toll. Danke für die Einladung. Ich komme gerne. Um wie viel Uhr denn?
Um 18 Uhr. Ich feiere im Garten. Wir grillen.
Kann ich vielleicht etwas mitbringen?
Ja, klar. Bring doch einen Salat mit. Fleisch und Würstchen kaufe ich.
Gerne. Dann sehen wir uns am 17. Juli. Ich freue mich!
Ich mich auch. Bis dann, tschüs.
Tschüs, Tina.`,
      },
      {
        id: 'bt-track-81',
        title: 'Track 81',
        audioSrc: '/track81.mp3',
        text: `1. Hallo Tina. Herzlichen Glückwunsch!
Danke!
Ich habe auch ein Geschenk für dich. Hier, bitte.
Oh, vielen Dank!`,
      },
      {
        id: 'bt-track-82',
        title: 'Track 82',
        audioSrc: '/track82.mp3',
        text: `2. Hallo Paul, wie geht’s?
Hallo! Danke, gut. Und dir?
Auch gut.`,
      },
      {
        id: 'bt-track-83',
        title: 'Track 83',
        audioSrc: '/track83.mp3',
        text: `3. Möchtest du etwas trinken?
Gerne. Ich möchte eine Cola.
Nimmst du auch ein Stück Kuchen?
Ja, vielen Dank.`,
      },
      {
        id: 'bt-track-84',
        title: 'Track 84',
        audioSrc: '/track84.mp3',
        text: `4. Der Salat ist sehr lecker.
Das finde ich auch.
Möchtest du auch noch etwas?
Nein, danke. Ich habe keinen Hunger mehr.`,
      },
      {
        id: 'bt-track-85',
        title: 'Track 85',
        audioSrc: '/track85.mp3',
        text: `1. Herzlichen Glückwunsch zum Geburtstag!
2. Kann ich eine Freundin mitbringen?
3. Möchtest du etwas trinken?`,
      },
      {
        id: 'bt-track-86',
        title: 'Track 86',
        audioSrc: '/track86.mp3',
        text: `4. Kommst du auch zu der Party von Tina?
5. Ist dieses Geschenk von dir?
6. Kannst du mir mal helfen?
7. Möchtest du ein Stück Kuchen?`,
      },
      {
        id: 'bt-track-87',
        title: 'Track 87',
        audioSrc: '/track87.mp3',
        text: `Wie war die Party bei Tina?
Und wie war das Essen?
War das Wetter auch gut?
Wie war die Musik?`,
      },
      {
        id: 'bt-track-88',
        title: 'Track 88',
        audioSrc: '/track88.mp3',
        text: `Herzlichen Glückwunsch!
Frohe Ostern!
Frohe Weihnachten!
Guten Rutsch!
Ein schönes neues Jahr!`,
      },
      {
        id: 'bt-track-89',
        title: 'Track 89',
        audioSrc: '/track89.mp3',
        text: `Hallo, wir machen eine Umfrage zum Thema Sport. Darf ich euch ein paar Fragen stellen?
Ja, klar. / Ja, kein Problem.
Wie alt seid ihr denn?
Also, ich bin 21.
Und ich bin 23.
Macht ihr Sport?
Ja, ich gehe joggen.
Aha. Und wie oft?
Zweimal oder dreimal pro Woche.
Und wann gehst du joggen? Morgens?
Nein, normalerweise am Nachmittag, wenn ich von der Uni komme.
Und mit wem? Läufst du zusammen mit Freunden?
Ich laufe immer allein. Das finde ich besser.
Und du? Was machst du?
Ich gehe regelmäßig ins Fitnessstudio.
Wie oft gehst du dahin?
Dreimal in der Woche. Und immer am Abend.
Trainierst du allein?
Nein, ich treffe mich dort immer mit zwei Freunden. Dann macht das Training mehr Spaß.
Super, vielen Dank.
Gern. / Tschüs.`,
      },
      {
        id: 'bt-track-90',
        title: 'Track 90',
        audioSrc: '/track90.mp3',
        text: `Fitnessstudio im Zentrum, Christian Schweiger, guten Morgen.
Guten Morgen, mein Name ist Lena Müller. Ich habe eine Frage.
Ja, bitte wie kann ich Ihnen helfen?
Gibt es bei Ihnen auch Tanzkurse?
Ja, wir haben verschiedene Tanzkurse. Was für einen Kurs möchten Sie machen?
Einen Hip-Hop-Kurs.
Der Hip-Hop-Kurs ist immer am Mittwoch.
Und um wie viel Uhr?
Um 18 Uhr.
Und wie viel kostet der Kurs?
Im Monat 20 Euro.
Ah, das klingt gut. Kann ich am Mittwoch kommen und einfach mitmachen?
Ja. Kommen Sie am Mittwoch und machen Sie mit. Das erste Mal kostet nichts.
Ach, das ist ja toll. Muss ich etwas mitbringen?
Nur die normale Sportkleidung, Sportschuhe und ein Handtuch.
Alles klar, vielen Dank. Dann bis Mittwoch.
Ja, gerne. Bis Mittwoch. Tschüs.`,
      },
      {
        id: 'bt-track-91',
        title: 'Track 91',
        audioSrc: '/track91.mp3',
        text: `Fitnessstudio im Zentrum, Christian Schweiger, guten Morgen.
Ja, bitte wie kann ich Ihnen helfen?
Ja, wir haben verschiedene Tanzkurse. Was für einen Kurs möchten Sie machen?
Der Hip-Hop-Kurs ist immer am Mittwoch.
Um 18 Uhr. Im Monat 20 Euro.
Ja. Kommen Sie am Mittwoch und machen Sie mit. Das erste Mal kostet nichts.
Nur die normale Sportkleidung, Sportschuhe und ein Handtuch.
Ja, gerne. Bis Mittwoch. Tschüs.`,
      },
      {
        id: 'bt-track-92',
        title: 'Track 92',
        audioSrc: '/track92.mp3',
        text: `Hallo Caro, hier ist Lena.
Hi Lena, wie geht’s?
Gut. Und dir?
Auch gut.
Du, ich muss echt mehr Sport machen und fit werden.
Und am Wochenende gehe ich in ein neues Fitnessstudio direkt am Bahnhof. Kommst du mit?
Hmm, am Wochenende? Warte mal, ich schaue mal in meinen Kalender.
Hast du am Samstagvormittag Zeit?
Nein, um 9:30 Uhr treffe ich Mila zum Frühstück. Geht bei dir 13 Uhr?
Nein, leider nicht, da esse ich mit meinen Eltern zu Mittag. Und am Samstagnachmittag?
Also, um 15 Uhr spiele ich Tennis mit Ben. Und danach bin ich wahrscheinlich zu müde, glaube ich. Oder hast du dann noch Zeit?
Ich gehe um 19 Uhr mit Phillip ins Kino. Das ist dann nicht genug Zeit. Wie sieht es am Sonntag aus?
Am Sonntag? Ich gehe am Vormittag mit meiner Mutter ins Museum. Wir treffen uns um 10 Uhr.
Am Vormittag habe ich auch keine Zeit. Da besuche ich meine Oma. Ich muss um 11 Uhr bei ihr sein. Und dann muss ich um 15 Uhr zu Claudia. Sie hat Geburtstag und macht ein kleines Fest im Garten. Was machst du am Nachmittag?
Ich treffe Max um 14 Uhr im Park. Wir wollen ein Picknick machen. Aber am Abend habe ich Zeit. Das Fitnessstudio hat doch lange auf, oder?
Ja, bis 22 Uhr. Dann treffen wir uns um 18 Uhr. Passt das?
18 Uhr im Fitnessstudio? Ja, das geht. Super! Schickst du mir noch schnell die Adresse?
Ja, mache ich. Also, bis Sonntag! Ich freue mich! Ciao!
Tschüs, Lena.`,
      },
      {
        id: 'bt-track-93',
        title: 'Track 93',
        audioSrc: '/track93.mp3',
        text: `Machst du keinen Sport?
Hast du am Samstag keine Zeit?
Willst du nicht ins Fitnessstudio gehen?
Spielst du nicht gern Volleyball?
Tanzt du nicht gern?
Gehst du nicht mit ins Schwimmbad?`,
      },
      {
        id: 'bt-track-94',
        title: 'Track 94',
        audioSrc: '/track94.mp3',
        text: `1. Entschuldigung. Ich suche Sportschuhe. Wo finde ich die?
Im dritten Stock.
Danke.`,
      },
      {
        id: 'bt-track-95',
        title: 'Track 95',
        audioSrc: '/track95.mp3',
        text: `2. Kann ich Ihnen helfen?
Ja, ich suche eine Winterjacke.
Welche Größe haben Sie?
Größe 42.`,
      },
      {
        id: 'bt-track-96',
        title: 'Track 96',
        audioSrc: '/track96.mp3',
        text: `3. Wie gefällt Ihnen diese Jacke?
Die Farbe gefällt mir nicht so gut.`,
      },
      {
        id: 'bt-track-97',
        title: 'Track 97',
        audioSrc: '/track97.mp3',
        text: `4. Gibt es diesen Pullover auch in Blau?
Nein, tut mir leid, nur in Grau.`,
      },
      {
        id: 'bt-track-98',
        title: 'Track 98',
        audioSrc: '/track98.mp3',
        text: `5. Entschuldigung, wie viel kostet dieses Kleid? Ich sehe keinen Preis.
Moment ... 59,90 Euro.`,
      },
      {
        id: 'bt-track-99',
        title: 'Track 99',
        audioSrc: '/track99.mp3',
        text: `6. Wie finden Sie diese Bluse?
Schön, aber sie ist zu teuer.`,
      },
      {
        id: 'bt-track-100',
        title: 'Track 100',
        audioSrc: '/track100.mp3',
        text: `7. Haben Sie auch Wanderschuhe?
Nein, leider nicht. Aber im Sportgeschäft Meier finden Sie Wanderschuhe.
Danke.`,
      },
      {
        id: 'bt-track-101',
        title: 'Track 101',
        audioSrc: '/track101.mp3',
        text: `Hallo Jana. Na, wie war dein Wochenende?
Ach, hallo Andi. Schön war‘s. Ich war in Berlin. Das war toll. Zuerst war ich mit einer Freundin in einem Café. Der Kaffee dort war so gut und wir haben endlich mal wieder lange geredet. Und dann waren wir in ein paar Geschäften und ich habe ein neues T-Shirt und eine Hose gekauft.
Das klingt gut. Ich möchte auch mal wieder nach Berlin.
Was hast du denn am Wochenende gemacht?
Ach, zuerst habe ich lange geschlafen. Ich war so müde. Ich hatte so viel Stress in letzter Zeit. Und dann am Samstagnachmittag war ich mit ein paar Freunden im Park. Das war schön.
Und am Sonntag?
Da habe ich eigentlich nicht viel gemacht. Ich habe ein neues Buch und das habe ich den ganzen Tag gelesen. Das war sehr gut und am Abend habe ich mit meiner Familie Pizza gemacht. Die war sehr lecker. Und du? Warst du am Sonntag auch noch in Berlin?
Ja, am Sonntag war ich im Museum und mit meiner Freundin Mittag essen und dann bin ich wieder nach Hause gefahren. Ach, schau mal, da kommt der Bus …`,
      },
      {
        id: 'bt-track-102',
        title: 'Track 102',
        audioSrc: '/track102.mp3',
        text: `Wie war Ihr Wochenende?
Was haben Sie am Samstag gemacht?
Und am Abend?
Und was haben Sie am Sonntag gemacht?`,
      },
      {
        id: 'bt-track-103',
        title: 'Track 103',
        audioSrc: '/track103.mp3',
        text: `Hi Jakob, wie war dein Wochenende? Schön?
Ja, klar. Bei dem Wetter! Am Samstagvormittag war ich im Büro und habe ein bisschen gearbeitet. Dann bin ich in den Park gegangen und habe mit Flo und Christian eine Runde Fußball gespielt. Am Nachmittag habe ich mit Maria ein Eis gegessen und am Abend bin ich ins Kino gegangen. Der Sonntag war ein bisschen langweilig. Ich habe eine Pizza gemacht und danach und am Abend mit meinem Vater Tennis gespielt. Und bei dir? Wie war dein Wochenende?`,
      },
      {
        id: 'bt-track-104',
        title: 'Track 104',
        audioSrc: '/track104.mp3',
        text: `1. Hallo, hier ist Jakob. Du, ich kann heute Abend nicht ins Kino gehen. Ich bin noch im Büro und muss arbeiten. Hast du morgen Zeit? Melde dich. Ciao.
2. Liebe Fahrgäste, die U5 kommt 10 Minuten später. Wir bitten um Entschuldigung.
3. Hi, hier ist Lena. Wir gehen am Samstag tanzen. Valerie ist auch dabei. Kommst du auch mit? Ruf mich mal an!
4. Liebe Gäste, wir schließen jetzt. Morgen ist das Schwimmbad geschlossen. Am Dienstag sind wir wieder ab 8 Uhr für Sie da.`,
      },
      {
        id: 'bt-track-105',
        title: 'Track 105',
        audioSrc: '/track105.mp3',
        text: `1. Entschuldigung, wie viel kostet diese Jacke?
Moment, die Jacken sind heute alle 20 Prozent günstiger ... 24 Euro.
Oh, das ist ja super. Dann nehme ich die. Wo ist denn die Kasse?
Gleich hier links.
Danke.

2. Kann ich Ihnen helfen?
Ja, ich suche das Hotel Rose.
Ah, das ist ganz einfach. Gehen Sie hier geradeaus zum Bahnhof und dann ist links die Post und hinter der Post ist das Hotel Rose.
Vielen Dank.

3. Guten Tag.
Guten Tag. Ich möchte bitte ein Kilo Bananen.
Gerne. Noch etwas? Die Äpfel und Birnen sind heute besonders gut.
Nein, danke. Vielleicht beim nächsten Mal.
Gut. Das macht dann 2,10 Euro, bitte.

4. Guten Abend, ich komme zum Sprachkurs, aber ich weiß nicht, in welchen Raum ich muss.
Der Sprachkurs ist in Raum 304, im 3.Stock. Hier vorne ist der Aufzug.
Danke schön.
Bitte, gerne.

5. Das Schwimmbad ist ja geschlossen! Das verstehe ich nicht. Das öffnet doch normalerweise um 8 Uhr. Wie spät ist es denn jetzt?
Kurz nach 9. Warte mal, hier ist ein Schild ... Ah, heute öffnet es erst um 10, steht hier.

6. Entschuldigung. Wie fahre ich am besten zum Bahnhof? Mit der Straßenbahn?
Nein, mit der Straßenbahn können Sie nur bis zum Marktplatz fahren und dann geht es nur mit dem Bus weiter. Nehmen Sie die U-Bahn: Linie U3 oder U6. Da kommen Sie direkt zum Bahnhof.
Okay, vielen Dank.`,
      },
      {
        id: 'bt-track-106',
        title: 'Track 106',
        audioSrc: '/track106.mp3',
        text: `7. Dies ist eine Kundendurchsage für Frau Meier. Bitte kommen Sie zur Kasse im 1.Stock. Kundin Frau Meier, bitte kommen Sie zur Kasse im ersten Stock.

8. Verehrte Kunden, unser Restaurant im 6.Stock schließt heute bereits um 17 Uhr. Wir bitten dies zu entschuldigen und freuen uns, Sie morgen begrüßen zu dürfen.

9. Achtung auf Gleis 4. Es fährt ein der Intercity 6152 nach Stuttgart. Planmäßige Weiterfahrt um 13:44 Uhr. Bitte Vorsicht bei der Einfahrt.

10. Heute ist es richtig billig: 50 Prozent auf alle Sporthosen, Sport-T-Shirts und Sportschuhe. Im 3.Stock in unserer Sportabteilung. Liebe Kunden, nutzen Sie unser Angebot!`,
      },
      {
        id: 'bt-track-107',
        title: 'Track 107',
        audioSrc: '/track107.mp3',
        text: `11. Hi Florian, Claas hier. Ich kann dich leider morgen nicht vom Bahnhof abholen. Nimm doch einfach den Bus, ja? Die Linie 15 braucht nur 10 Minuten bis zum Marktplatz und von dort musst du noch 5 Minuten laufen. Okay? Bis morgen!

12. Guten Tag, hier ist Marie Bauer. Ich habe am Montag um 15 Uhr einen Termin bei Ihnen. Da kann ich leider nicht kommen. Geht es vielleicht am Dienstag um die gleiche Uhrzeit? Rufen Sie mich doch zurück, bitte. Auf Wiederhören.

13. Hallo Lena, hier ist Pia. Du, ruf mich doch mal hier im Büro an. Die Nummer ist 3894075. Also, bis später dann. Tschüs.

14. Hi, hier ist Moritz. Ich habe am Samstag leider keine Zeit. Ich fahre mit meiner Freundin zu meinen Eltern, meine Oma kommt auch. Tut mir leid, aber ich muss dahin. Ich melde mich, ja? Bis bald!

15. Guten Tag, Sie haben die Praxis von Dr. Dietl erreicht. Wir machen vom 10.7. – 6.8. Sommerurlaub. Ab dem 7.8. sind wir wieder für Sie da.`,
      },
      {
        id: 'bt-track-108',
        title: 'Track 108',
        audioSrc: '/track108.mp3',
        text: `1. Hallo, hier ist Maria. Du, ich kann heute nicht ins Kino gehen. Ich habe Fieber und mein Kopf tut weh. Ich bleibe heute im Bett. Bis bald, tschüs.
2. Liebe Fahrgäste, unser Zugrestaurant ist heute leider geschlossen. Bei unseren Service-Mitarbeitern können Sie aber Kaffee, Tee und andere Getränke kaufen. Wir wünschen eine gute Fahrt.
3. Hi, ich bin’s, Felix. Du, mein Auto macht Probleme, es fährt nicht richtig. Deshalb kann ich dich nicht vom Bahnhof abholen. Nimm die U-Bahn, okay? Bis später!
4. Liebe Kunden, unser Geschäft schließt in 5 Minuten. Morgen sind wir ab 7 Uhr wieder für Sie da. Wir wünschen einen schönen Abend.`,
      },
      {
        id: 'bt-track-109',
        title: 'Track 109',
        audioSrc: '/track109.mp3',
        text: `1. Wie viel kostet das Handy?
Es kostet 99,98 Euro.

2. Wie lange warten Sie schon?
Seit 10 Minuten.

3. Wann fährt der nächste Bus zur Universität?
Er fährt um 12:13 Uhr.

4. Wie schreibt man Ihren Nachnamen?
Ich buchstabiere A-Y-D-I-N.

5. Was ist die Hausaufgabe?
Die Hausaufgabe ist Übung 5 auf Seite 30.`,
      },
      {
        id: 'bt-track-110',
        title: 'Track 110',
        audioSrc: '/track110.mp3',
        text: `Ist das dein Schlüssel?
Möchten Sie etwas essen?
Vielen Dank für das Geschenk!`,
      },
      {
        id: 'bt-track-111',
        title: 'Track 111',
        audioSrc: '/track111.mp3',
        text: `Hast du am Samstag Zeit?
Kann ich Ihnen helfen?
Wo wohnst du?
Wie geht es Ihnen?`,
      },
    ],
  },
];

