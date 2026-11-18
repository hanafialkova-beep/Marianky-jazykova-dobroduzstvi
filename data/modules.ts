import type { ModuleData, Question } from './types';

// ─── MODULE 1: Tvrdé souhlásky ───────────────────────────────────────────────
const module1: ModuleData = {
  id: 1,
  name: 'Tvrdé souhlásky',
  icon: '💎',
  difficulty: 1,
  badge: 'Mistr tvrdých souhlásek',
  badgeIcon: '💎',
  description: 'Po písmenech h, ch, k, r, d, t, n píšeme vždy Y!',
  color: 'from-violet-400 to-violet-600',
  questions: [
    {
      id: 'm1q1', type: 'A',
      sentence: 'Malá r_ba plave v rybníku.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'Správně je RYBA: R je tvrdá souhláska, píšeme vždy Y.',
    },
    {
      id: 'm1q2', type: 'A',
      sentence: 'K_tka na okně krásně kvete.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'Správně je KYTKA: K je tvrdá souhláska, píšeme vždy Y.',
    },
    {
      id: 'm1q3', type: 'A',
      sentence: 'Tatínek jede r_chle na kole.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'Správně je RYCHLE: CH je tvrdá souhláska, píšeme vždy Y.',
    },
    {
      id: 'm1q4', type: 'A',
      sentence: 'D_m stoupá z komína.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'Správně je DÝM: D je tvrdá souhláska, píšeme vždy Y.',
    },
    {
      id: 'm1q5', type: 'A',
      sentence: 'Malý t_gr se plíží v džungli.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'Správně je TYGR: T je tvrdá souhláska, píšeme vždy Y.',
    },
    {
      id: 'm1q6', type: 'B',
      sentence: 'Zahradník zasadil ___ do truhlíku.',
      options: ['kytičku', 'kitičku', 'kytyčku', 'kityčku'],
      correct: 'kytičku',
      explanation: 'Správně je KYTIČKU: K je tvrdá souhláska, píšeme Y.',
    },
    {
      id: 'm1q7', type: 'C',
      text: 'Hyena má skvrnatou srst.',
      isCorrect: true,
      explanation: 'Správně! HYENA: H je tvrdá souhláska, píšeme Y. 👍',
    },
    {
      id: 'm1q8', type: 'C',
      text: 'Hidrant stojí na rohu ulice.',
      isCorrect: false,
      wrongWord: 'Hidrant',
      correctWord: 'Hydrant',
      explanation: 'H je tvrdá souhláska: správně je HYDRANT (píšeme Y).',
    },
    {
      id: 'm1q9', type: 'D',
      instruction: 'Zařaď slova do správných skupin:',
      groups: ['Tvrdá souhláska → Y', 'Měkká souhláska → I'],
      words: [
        { word: 'ryba', group: 0 },
        { word: 'číše', group: 1 },
        { word: 'kytka', group: 0 },
        { word: 'žízeň', group: 1 },
        { word: 'chyba', group: 0 },
        { word: 'šiška', group: 1 },
      ],
    },
    {
      id: 'm1q10', type: 'E',
      instruction: 'Najdi chybu ve větě a klikni na špatné slovo:',
      words: ['Malý', 'tigr', 'se', 'plíží', 'džunglí.'],
      errorIndex: 1,
      correctWord: 'tygr',
      explanation: 'T je tvrdá souhláska: správně je TYGR (píšeme Y).',
    },
  ],
};

// ─── MODULE 2: Měkké souhlásky ───────────────────────────────────────────────
const module2: ModuleData = {
  id: 2,
  name: 'Měkké souhlásky',
  icon: '🌸',
  difficulty: 1,
  badge: 'Hvězda měkkých souhlásek',
  badgeIcon: '🌸',
  description: 'Písmena ž, š, č, ř, c, j, ď, ť, ň: po nich píšeme vždy I!',
  color: 'from-pink-400 to-rose-500',
  questions: [
    {
      id: 'm2q1', type: 'A',
      sentence: 'Mám velkou ž_zeň.',
      options: ['i', 'y'], correct: 'i',
      explanation: 'Správně je ŽÍZEŇ: Ž je měkká souhláska, píšeme vždy I.',
    },
    {
      id: 'm2q2', type: 'A',
      sentence: 'Ř_dič zastavil auto.',
      options: ['i', 'y'], correct: 'i',
      explanation: 'Správně je ŘIDIČ: Ř je měkká souhláska, píšeme vždy I.',
    },
    {
      id: 'm2q3', type: 'A',
      sentence: 'J_dlo bylo moc dobré.',
      options: ['i', 'y'], correct: 'i',
      explanation: 'Správně je JÍDLO: J je měkká souhláska, píšeme vždy I.',
    },
    {
      id: 'm2q4', type: 'A',
      sentence: 'Na zahradě je ž_žala.',
      options: ['i', 'y'], correct: 'i',
      explanation: 'Správně je ŽÍŽALA: Ž je měkká souhláska, píšeme vždy I.',
    },
    {
      id: 'm2q5', type: 'A',
      sentence: 'Č_ž zpíval na větvi.',
      options: ['i', 'y'], correct: 'i',
      explanation: 'Správně je ČÍŽ: Č je měkká souhláska, píšeme vždy I.',
    },
    {
      id: 'm2q6', type: 'B',
      sentence: 'Maminka nakrájela ___ do polévky.',
      options: ['cibuli', 'cybuli', 'cibulí', 'cybulí'],
      correct: 'cibuli',
      explanation: 'C je měkká souhláska: správně je CIBULI (píšeme I).',
    },
    {
      id: 'm2q7', type: 'C',
      text: 'Šikovný žák vyluštil hádanku.',
      isCorrect: true,
      explanation: 'Správně! Š je měkká souhláska: ŠIKOVNÝ píšeme s I. 👍',
    },
    {
      id: 'm2q8', type: 'C',
      text: 'Žyrafa má velmi dlouhý krk.',
      isCorrect: false,
      wrongWord: 'Žyrafa',
      correctWord: 'Žirafa',
      explanation: 'Ž je měkká souhláska: správně je ŽIRAFA (píšeme I).',
    },
    {
      id: 'm2q9', type: 'D',
      instruction: 'Zařaď slova do správných skupin:',
      groups: ['Měkká souhláska → I', 'Tvrdá souhláska → Y'],
      words: [
        { word: 'žízeň', group: 0 },
        { word: 'ryba', group: 1 },
        { word: 'číše', group: 0 },
        { word: 'kytka', group: 1 },
        { word: 'jídlo', group: 0 },
        { word: 'dým', group: 1 },
      ],
    },
    {
      id: 'm2q10', type: 'E',
      instruction: 'Najdi chybu ve větě a klikni na špatné slovo:',
      words: ['Malá', 'žyrafa', 'pila', 'vodu', 'u', 'řeky.'],
      errorIndex: 1,
      correctWord: 'žirafa',
      explanation: 'Ž je měkká souhláska: správně je ŽIRAFA (píšeme I).',
    },
  ],
};

// ─── MODULE 3: Vyjmenovaná slova po B ────────────────────────────────────────
const module3: ModuleData = {
  id: 3,
  name: 'Vyjmenovaná po B',
  icon: '🐂',
  difficulty: 2,
  badge: 'Znalec řady B',
  badgeIcon: '🐂',
  description: 'být, bydlit, byk, bystrý, bylina, byt: naučíme se je nazpaměť!',
  color: 'from-amber-400 to-orange-500',
  questions: [
    {
      id: 'm3q1', type: 'A',
      sentence: 'B_k stál na louce.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'BYK je vyjmenované slovo po B, píšeme Y.',
    },
    {
      id: 'm3q2', type: 'A',
      sentence: 'Naše rodina b_dlí v novém bytě.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'BYDLIT je vyjmenované slovo po B, píšeme Y.',
    },
    {
      id: 'm3q3', type: 'A',
      sentence: 'B_strý žák rychle pochopil úkol.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'BYSTRÝ je vyjmenované slovo po B, píšeme Y.',
    },
    {
      id: 'm3q4', type: 'A',
      sentence: 'Kolem cesty rostly b_liny.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'BYLINA je vyjmenované slovo po B, píšeme Y.',
    },
    {
      id: 'm3q5', type: 'A',
      sentence: 'Kobyla b_la velká a silná.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'BÝT je vyjmenované slovo: BYLA píšeme s Y.',
    },
    {
      id: 'm3q6', type: 'B',
      sentence: 'V domě b_dlelo hodně ___.',
      options: ['obyvatel', 'obyvatyl', 'obivatel', 'obyvytel'],
      correct: 'obyvatel',
      explanation: 'OBYVATEL je příbuzné slovo k BYDLIT (vyjmenované po B).',
    },
    {
      id: 'm3q7', type: 'C',
      text: 'Byt je místo, kde bydlíme.',
      isCorrect: true,
      explanation: 'Správně! BYT i BYDLÍME jsou vyjmenovaná slova po B. 👍',
    },
    {
      id: 'm3q8', type: 'C',
      text: 'Kobila je samice koně.',
      isCorrect: false,
      wrongWord: 'Kobila',
      correctWord: 'Kobyla',
      explanation: 'KOBYLA je příbuzné slovo k BYK: píšeme Y.',
    },
    {
      id: 'm3q9', type: 'D',
      instruction: 'Které slovo je napsané správně?',
      groups: ['Správně napsáno ✓', 'Špatně napsáno ✗'],
      words: [
        { word: 'byt', group: 0 },
        { word: 'bit', group: 1 },
        { word: 'bystrý', group: 0 },
        { word: 'bistrý', group: 1 },
        { word: 'bylina', group: 0 },
        { word: 'bilina', group: 1 },
      ],
    },
    {
      id: 'm3q10', type: 'E',
      instruction: 'Najdi chybu ve větě a klikni na špatné slovo:',
      words: ['Malý', 'bik', 'stál', 'na', 'louce', 'a', 'jedl', 'trávu.'],
      errorIndex: 1,
      correctWord: 'byk',
      explanation: 'BYK je vyjmenované slovo po B, píšeme Y.',
    },
  ],
};

// ─── MODULE 4: Vyjmenovaná slova po L a M ────────────────────────────────────
const module4: ModuleData = {
  id: 4,
  name: 'Vyjmenovaná po L a M',
  icon: '🎿',
  difficulty: 2,
  badge: 'Šampion řady L a M',
  badgeIcon: '🎿',
  description: 'lyže, lýtko, lysý: po L. mýdlo, myš, hmyz: po M.',
  color: 'from-sky-400 to-blue-500',
  questions: [
    {
      id: 'm4q1', type: 'A',
      sentence: 'Na l_žích jezdím každou zimu.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'LYŽE je vyjmenované slovo po L, píšeme Y.',
    },
    {
      id: 'm4q2', type: 'A',
      sentence: 'Bolí mě l_tko.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'LÝTKO je vyjmenované slovo po L, píšeme Y.',
    },
    {
      id: 'm4q3', type: 'A',
      sentence: 'M_š snědla sýr.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'MYŠ je vyjmenované slovo po M, píšeme Y.',
    },
    {
      id: 'm4q4', type: 'A',
      sentence: 'Umyj si ruce m_dlem.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'MÝDLO je vyjmenované slovo po M, píšeme Y.',
    },
    {
      id: 'm4q5', type: 'A',
      sentence: 'Hm_z lítá kolem lampy.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'HMYZ je vyjmenované slovo po M, píšeme Y.',
    },
    {
      id: 'm4q6', type: 'B',
      sentence: 'Petr si nasadil ___ a sjel kopec.',
      options: ['lyže', 'liže', 'lyžě', 'lýže'],
      correct: 'lyže',
      explanation: 'LYŽE je vyjmenované slovo po L, píšeme Y (bez háčku).',
    },
    {
      id: 'm4q7', type: 'C',
      text: 'Mýval žije v Americe a umývá si jídlo.',
      isCorrect: true,
      explanation: 'Správně! MÝVAL i UMÝVÁ jsou vyjmenovaná slova po M. 👍',
    },
    {
      id: 'm4q8', type: 'C',
      text: 'Myška snědla kus midla.',
      isCorrect: false,
      wrongWord: 'midla',
      correctWord: 'mýdla',
      explanation: 'MÝDLO je vyjmenované slovo po M, píšeme Y.',
    },
    {
      id: 'm4q9', type: 'D',
      instruction: 'Zařaď vyjmenovaná slova:',
      groups: ['Vyjmenované po L', 'Vyjmenované po M'],
      words: [
        { word: 'lyže', group: 0 },
        { word: 'mýdlo', group: 1 },
        { word: 'lýtko', group: 0 },
        { word: 'myš', group: 1 },
        { word: 'lysý', group: 0 },
        { word: 'hmyz', group: 1 },
      ],
    },
    {
      id: 'm4q10', type: 'E',
      instruction: 'Najdi chybu ve větě a klikni na špatné slovo:',
      words: ['Malý', 'miš', 'spí', 'přes', 'den', 'v', 'jeskyni.'],
      errorIndex: 1,
      correctWord: 'myš',
      explanation: 'MYŠ je vyjmenované slovo po M, píšeme Y.',
    },
  ],
};

// ─── MODULE 5: Vyjmenovaná slova po P a S ────────────────────────────────────
const module5: ModuleData = {
  id: 5,
  name: 'Vyjmenovaná po P a S',
  icon: '🦇',
  difficulty: 2,
  badge: 'Expert řady P a S',
  badgeIcon: '🧀',
  description: 'pýcha, pytel, netopýr: po P. syn, sýr, sýkora: po S.',
  color: 'from-purple-400 to-fuchsia-500',
  questions: [
    {
      id: 'm5q1', type: 'A',
      sentence: 'V p_tli bylo hodně brambor.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'PYTEL je vyjmenované slovo po P, píšeme Y.',
    },
    {
      id: 'm5q2', type: 'A',
      sentence: 'Netop_r létá v noci.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'NETOPÝR je vyjmenované slovo po P, píšeme Ý.',
    },
    {
      id: 'm5q3', type: 'A',
      sentence: 'S_r leží na talíři.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'SÝR je vyjmenované slovo po S, píšeme Y.',
    },
    {
      id: 'm5q4', type: 'A',
      sentence: 'S_kora sedí na větvi.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'SÝKORA je vyjmenované slovo po S, píšeme Y.',
    },
    {
      id: 'm5q5', type: 'A',
      sentence: 'S_n pomáhal tatínkovi na zahradě.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'SYN je vyjmenované slovo po S, píšeme Y.',
    },
    {
      id: 'm5q6', type: 'B',
      sentence: 'Maminka udělala polévku ze ___ zeleniny.',
      options: ['syrové', 'sirové', 'syrový', 'sirovej'],
      correct: 'syrové',
      explanation: 'SYROVÝ je příbuzné slovo k SÝR (vyjmenované po S).',
    },
    {
      id: 'm5q7', type: 'C',
      text: 'Pyšný kohout chodil po dvoře.',
      isCorrect: true,
      explanation: 'Správně! PYŠNÝ je příbuzné slovo k PÝCHA (vyjmenované po P). 👍',
    },
    {
      id: 'm5q8', type: 'C',
      text: 'Sichravé počasí nás zahnalo domů.',
      isCorrect: false,
      wrongWord: 'Sichravé',
      correctWord: 'Sychravé',
      explanation: 'SYCHRAVÝ je vyjmenované slovo po S, píšeme Y.',
    },
    {
      id: 'm5q9', type: 'D',
      instruction: 'Zařaď vyjmenovaná slova:',
      groups: ['Vyjmenované po P', 'Vyjmenované po S'],
      words: [
        { word: 'pýcha', group: 0 },
        { word: 'sýr', group: 1 },
        { word: 'pytel', group: 0 },
        { word: 'syn', group: 1 },
        { word: 'netopýr', group: 0 },
        { word: 'sýkora', group: 1 },
      ],
    },
    {
      id: 'm5q10', type: 'E',
      instruction: 'Najdi chybu ve větě a klikni na špatné slovo:',
      words: ['Velký', 'netopír', 'visel', 'na', 'stropě', 'jeskyně.'],
      errorIndex: 1,
      correctWord: 'netopýr',
      explanation: 'NETOPÝR je vyjmenované slovo po P, píšeme Ý (ne Í).',
    },
  ],
};

// ─── MODULE 6: Vyjmenovaná slova po V a Z ────────────────────────────────────
const module6: ModuleData = {
  id: 6,
  name: 'Vyjmenovaná po V a Z',
  icon: '🦅',
  difficulty: 2,
  badge: 'Vítěz řady V a Z',
  badgeIcon: '🦅',
  description: 'výr, vydra, vysoký: po V. jazyk, brzy, zbytek: po Z.',
  color: 'from-teal-400 to-emerald-500',
  questions: [
    {
      id: 'm6q1', type: 'A',
      sentence: 'V_r houkl v noci.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'VÝR je vyjmenované slovo po V, píšeme Y.',
    },
    {
      id: 'm6q2', type: 'A',
      sentence: 'Budova je v_soká.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'VYSOKÝ je vyjmenované slovo po V, píšeme Y.',
    },
    {
      id: 'm6q3', type: 'A',
      sentence: 'V_dra plave v řece.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'VYDRA je vyjmenované slovo po V, píšeme Y.',
    },
    {
      id: 'm6q4', type: 'A',
      sentence: 'Jak se naz_váš?',
      options: ['i', 'y'], correct: 'y',
      explanation: 'NAZÝVAT je vyjmenované slovo po Z, píšeme Y.',
    },
    {
      id: 'm6q5', type: 'A',
      sentence: 'Brz_ přijde léto.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'BRZY je vyjmenované slovo po Z, píšeme Y.',
    },
    {
      id: 'm6q6', type: 'B',
      sentence: 'Rybář si přál chytit velkou ___.',
      options: ['vydru', 'widru', 'vydri', 'výdru'],
      correct: 'vydru',
      explanation: 'VYDRA je vyjmenované slovo po V, píšeme Y.',
    },
    {
      id: 'm6q7', type: 'C',
      text: 'Vysoká hora tyčí se k nebi.',
      isCorrect: true,
      explanation: 'Správně! VYSOKÁ je vyjmenované slovo po V, píšeme Y. 👍',
    },
    {
      id: 'm6q8', type: 'C',
      text: 'Žvikačka je ve škole zakázána.',
      isCorrect: false,
      wrongWord: 'Žvikačka',
      correctWord: 'Žvýkačka',
      explanation: 'ŽVÝKAT je vyjmenované slovo po V, píšeme Y.',
    },
    {
      id: 'm6q9', type: 'D',
      instruction: 'Zařaď vyjmenovaná slova:',
      groups: ['Vyjmenované po V', 'Vyjmenované po Z'],
      words: [
        { word: 'výr', group: 0 },
        { word: 'jazyk', group: 1 },
        { word: 'vydra', group: 0 },
        { word: 'brzy', group: 1 },
        { word: 'vysoký', group: 0 },
        { word: 'zbytek', group: 1 },
      ],
    },
    {
      id: 'm6q10', type: 'E',
      instruction: 'Najdi chybu ve větě a klikni na špatné slovo:',
      words: ['Malý', 'vir', 'houká', 'v', 'noci', 'v', 'lese.'],
      errorIndex: 1,
      correctWord: 'výr',
      explanation: 'VÝR je vyjmenované slovo po V, píšeme Ý.',
    },
  ],
};

// ─── MODULE 7: Předpony s- a z- ──────────────────────────────────────────────
const module7: ModuleData = {
  id: 7,
  name: 'Předpony s- a z-',
  icon: '🔧',
  difficulty: 3,
  badge: 'Předponový šampion',
  badgeIcon: '🔧',
  description: 'S- (dolů/dohromady) nebo Z- (změna/dokončení)?',
  color: 'from-orange-400 to-red-500',
  questions: [
    {
      id: 'm7q1', type: 'A',
      sentence: 'Musíme _klidit pokojíček.',
      options: ['s', 'z'], correct: 's',
      explanation: 'SKLIDIT: S- píšeme, když sbíráme nebo dáváme věci dohromady.',
    },
    {
      id: 'm7q2', type: 'A',
      sentence: 'Vítr _bourál starý dům.',
      options: ['s', 'z'], correct: 'z',
      explanation: 'ZBOURAL: Z- píšeme, když se něco změní nebo dokončí.',
    },
    {
      id: 'm7q3', type: 'A',
      sentence: 'Tatínek _balil kufr.',
      options: ['s', 'z'], correct: 's',
      explanation: 'SBALIL: S- píšeme, protože kufr dáváme dohromady.',
    },
    {
      id: 'm7q4', type: 'A',
      sentence: 'Kamarádka _pívá krásně.',
      options: ['s', 'z'], correct: 'z',
      explanation: 'ZPÍVÁ: Z- píšeme, protože zpěv je dokončený děj.',
    },
    {
      id: 'm7q5', type: 'A',
      sentence: '_maž chybu z tabule.',
      options: ['s', 'z'], correct: 's',
      explanation: 'SMAŽ: S- píšeme, když stíráme nebo mažeme dolů.',
    },
    {
      id: 'm7q6', type: 'A',
      sentence: 'Maminka _nesla starý stůl z pokoje.',
      options: ['s', 'z'], correct: 's',
      explanation: 'SNESLA: S- píšeme, když neseme věc dolů nebo dohromady.',
    },
    {
      id: 'm7q7', type: 'C',
      text: 'Petr slepil rozbitou vázu.',
      isCorrect: true,
      explanation: 'Správně! SLEPIL: S- píšeme, protože díly dáváme dohromady. 👍',
    },
    {
      id: 'm7q8', type: 'C',
      text: 'Větší dítě zbalilo kufr na výlet.',
      isCorrect: false,
      wrongWord: 'zbalilo',
      correctWord: 'sbalilo',
      explanation: 'SBALIT: S- píšeme, protože věci dáváme dohromady.',
    },
    {
      id: 'm7q9', type: 'D',
      instruction: 'Ke které předponě slovo patří?',
      groups: ['Píšeme S- (dolů/dohromady)', 'Píšeme Z- (změna/konec)'],
      words: [
        { word: 'sbalit', group: 0 },
        { word: 'zbourat', group: 1 },
        { word: 'složit', group: 0 },
        { word: 'zpívat', group: 1 },
        { word: 'sundat', group: 0 },
        { word: 'zlepšit', group: 1 },
      ],
    },
    {
      id: 'm7q10', type: 'E',
      instruction: 'Najdi chybu ve větě a klikni na špatné slovo:',
      words: ['Tatínek', 'zbalil', 'kufr', 'a', 'odjel', 'na', 'cestu.'],
      errorIndex: 1,
      correctWord: 'sbalil',
      explanation: 'SBALIT: S- píšeme, protože kufr dáváme dohromady.',
    },
  ],
};

// ─── MODULE 8: Velké opakování i/y ───────────────────────────────────────────
const module8: ModuleData = {
  id: 8,
  name: 'Velké opakování: i/y',
  icon: '🔁',
  difficulty: 3,
  badge: 'Pravopisný hrdina',
  badgeIcon: '🔁',
  description: 'Smíchané procvičení: tvrdé, měkké i vyjmenovaná najednou!',
  color: 'from-indigo-400 to-violet-600',
  questions: [
    {
      id: 'm8q1', type: 'A',
      sentence: 'R_ba plave v rybníku.',
      options: ['i', 'y'], correct: 'y',
      hint: 'Tip: R je tvrdá souhláska! 💎',
      explanation: 'RYBA: R je tvrdá souhláska, píšeme vždy Y.',
    },
    {
      id: 'm8q2', type: 'A',
      sentence: 'S_kora sedí na větvi.',
      options: ['i', 'y'], correct: 'y',
      hint: 'Tip: sýkora je vyjmenované slovo po S! 📖',
      explanation: 'SÝKORA: vyjmenované slovo po S, píšeme Y.',
    },
    {
      id: 'm8q3', type: 'A',
      sentence: 'B_strý chlapec se usmíval.',
      options: ['i', 'y'], correct: 'y',
      hint: 'Tip: bystrý je vyjmenované slovo po B! 📖',
      explanation: 'BYSTRÝ: vyjmenované slovo po B, píšeme Y.',
    },
    {
      id: 'm8q4', type: 'A',
      sentence: 'M_dlo leží na umyvadle.',
      options: ['i', 'y'], correct: 'y',
      hint: 'Tip: mýdlo je vyjmenované slovo po M! 📖',
      explanation: 'MÝDLO: vyjmenované slovo po M, píšeme Y.',
    },
    {
      id: 'm8q5', type: 'A',
      sentence: 'Netop_r létá nad vysokou budovou.',
      options: ['i', 'y'], correct: 'y',
      hint: 'Tip: netopýr je vyjmenované slovo po P! 📖',
      explanation: 'NETOPÝR: vyjmenované slovo po P, píšeme Ý.',
    },
    {
      id: 'm8q6', type: 'B',
      sentence: 'Na obloze letěl ___ letoun.',
      options: ['rychlý', 'richlý', 'rýchlý', 'rychlí'],
      correct: 'rychlý',
      hint: 'Tip: R je tvrdá souhláska! 💎',
      explanation: 'RYCHLÝ: R je tvrdá souhláska, píšeme Y.',
    },
    {
      id: 'm8q7', type: 'C',
      text: 'Vydra si hraje u řeky.',
      isCorrect: true,
      hint: 'Tip: vydra je vyjmenované slovo po V! 📖',
      explanation: 'Správně! VYDRA: vyjmenované slovo po V, píšeme Y. 👍',
    },
    {
      id: 'm8q8', type: 'C',
      text: 'Bik pasoucí se na louce byl velký.',
      isCorrect: false,
      wrongWord: 'Bik',
      correctWord: 'Byk',
      hint: 'Tip: byk je vyjmenované slovo po B! 📖',
      explanation: 'BYK: vyjmenované slovo po B, píšeme Y.',
    },
    {
      id: 'm8q9', type: 'D',
      instruction: 'Poznáš proč se píše Y?',
      groups: ['Tvrdá souhláska → Y', 'Vyjmenované slovo → Y'],
      words: [
        { word: 'ryba', group: 0 },
        { word: 'sýr', group: 1 },
        { word: 'kytka', group: 0 },
        { word: 'byk', group: 1 },
        { word: 'chyba', group: 0 },
        { word: 'vydra', group: 1 },
      ],
    },
    {
      id: 'm8q10', type: 'E',
      instruction: 'Najdi chybu ve větě a klikni na špatné slovo:',
      words: ['Malá', 'miska', 'snědla', 'všechno', 'jídlo.'],
      errorIndex: 1,
      correctWord: 'myška',
      explanation: 'MYŠ je vyjmenované slovo po M, píšeme MYŠKA (ne miska).',
    },
  ],
};

// ─── MODULE 9: Velké opakování s-/z- a vyjmenovaná ───────────────────────────
const module9: ModuleData = {
  id: 9,
  name: 'Opakování: s/z + vyjmenovaná',
  icon: '🎯',
  difficulty: 3,
  badge: 'Jazykový detektiv',
  badgeIcon: '🎯',
  description: 'Nejtěžší výzva: předpony i vyjmenovaná slova dohromady!',
  color: 'from-rose-400 to-pink-600',
  questions: [
    {
      id: 'm9q1', type: 'A',
      sentence: 'S_n sbalil pytel s bylinami.',
      options: ['i', 'y'], correct: 'y',
      hint: 'Tip: SYN je vyjmenované slovo po S! 📖',
      explanation: 'SYN: vyjmenované slovo po S, píšeme Y.',
    },
    {
      id: 'm9q2', type: 'A',
      sentence: 'Sýkora _pívala celé ráno na větvi.',
      options: ['s', 'z'], correct: 'z',
      hint: 'Tip: ve slově zpívat píšeme Z-, jako u dokončeného děje! 🔧',
      explanation: 'ZPÍVALA: Z- píšeme, protože zpěv je dokončený děj.',
    },
    {
      id: 'm9q3', type: 'A',
      sentence: 'M_dlo leží v koupelně.',
      options: ['i', 'y'], correct: 'y',
      hint: 'Tip: MÝDLO je vyjmenované slovo po M! 📖',
      explanation: 'MÝDLO: vyjmenované slovo po M, píšeme Y.',
    },
    {
      id: 'm9q4', type: 'A',
      sentence: 'Mýdlo _letělo ze stolu dolů.',
      options: ['s', 'z'], correct: 's',
      hint: 'Tip: letět dolů = S-! 🔧',
      explanation: 'SLETĚLO: S- píšeme, když věc padá nebo jde dolů.',
    },
    {
      id: 'm9q5', type: 'A',
      sentence: 'B_strý chlapec sklidil byt.',
      options: ['i', 'y'], correct: 'y',
      hint: 'Tip: BYSTRÝ je vyjmenované slovo po B! 📖',
      explanation: 'BYSTRÝ: vyjmenované slovo po B, píšeme Y.',
    },
    {
      id: 'm9q6', type: 'A',
      sentence: 'Bystrý chlapec _klidil byt.',
      options: ['s', 'z'], correct: 's',
      hint: 'Tip: klidit dohromady = S-! 🔧',
      explanation: 'SKLIDIL: S- píšeme, protože uklízíme a dáváme věci dohromady.',
    },
    {
      id: 'm9q7', type: 'B',
      sentence: 'Netopýr _mizel do vysoké jeskyně.',
      options: ['smizel', 'zmizel', 'smizl', 'zmizl'],
      correct: 'zmizel',
      explanation: 'ZMIZEL: Z- píšeme, protože se stav změnil (zmizel = je pryč).',
    },
    {
      id: 'm9q8', type: 'C',
      text: 'Syn zpíval celé odpoledne písničky.',
      isCorrect: true,
      explanation: 'Správně! SYN (vyjmenované po S) + ZPÍVAL (Z-): obě správně! 👍',
    },
    {
      id: 'm9q9', type: 'C',
      text: 'Síkora zpívala celé ráno.',
      isCorrect: false,
      wrongWord: 'Síkora',
      correctWord: 'Sýkora',
      explanation: 'SÝKORA je vyjmenované slovo po S, píšeme Y (ne I).',
    },
    {
      id: 'm9q10', type: 'E',
      instruction: 'Najdi chybu ve větě a klikni na špatné slovo:',
      words: ['Vydra', 'zbalila', 'zásoby', 'pro', 'zimu.'],
      errorIndex: 1,
      correctWord: 'sbalila',
      explanation: 'SBALIT: S- píšeme, protože zásoby dáváme dohromady.',
    },
  ],
};

// ─── MODULE 10: Finální výzva ─────────────────────────────────────────────────
// Questions are generated dynamically in the app from modules 1-9
const module10: ModuleData = {
  id: 10,
  name: 'Finální výzva: Mistr pravopisu',
  icon: '🏆',
  difficulty: 4,
  badge: 'Legenda pravopisu',
  badgeIcon: '🏆',
  description: '20 otázek, 60 sekund: všechno najednou! Žádné nápovědy!',
  color: 'from-yellow-400 to-amber-500',
  questions: [], // filled dynamically
};

export const MODULES: ModuleData[] = [
  module1, module2, module3, module4, module5,
  module6, module7, module8, module9, module10,
];

export { SPACE_MODULES, generateModule20Questions } from './spaceModules';

// Generate 20 random questions from modules 1-9 for Module 10
export function generateModule10Questions(): Question[] {
  const sourceMods = MODULES.slice(0, 9);
  const pool: Question[] = [];

  // Take 2 random questions from each module (18 total)
  for (const mod of sourceMods) {
    const shuffled = [...mod.questions].sort(() => Math.random() - 0.5);
    pool.push(...shuffled.slice(0, 2));
  }

  // Add 2 more random from the full pool
  const remaining = sourceMods.flatMap(m => m.questions).filter(q => !pool.includes(q));
  const extra = remaining.sort(() => Math.random() - 0.5).slice(0, 2);
  pool.push(...extra);

  // Shuffle all 20 and return without hints
  return pool.sort(() => Math.random() - 0.5).map(q => ({ ...q, hint: undefined }));
}
