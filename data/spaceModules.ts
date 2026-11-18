import type { ModuleData, Question } from './types';

// ─── MODULE 11: Příbuzná po B + Tvrdé souhlásky (Planet Borealis) ─────────────
const module11: ModuleData = {
  id: 11,
  name: 'Planet Borealis: B + Tvrdé souhlásky',
  icon: '🌍',
  difficulty: 2,
  badge: 'Průzkumník Borealisu',
  badgeIcon: '🌍',
  description: 'Příbuzná slova po B a tvrdé souhlásky v jedné větě!',
  color: 'from-purple-400 to-indigo-600',
  questions: [
    {
      id: 'm11q1', type: 'A',
      sentence: 'Malá r_ba plave v čistém rybníku.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'R_BA: R je tvrdá souhláska, píšeme vždy Y.',
    },
    {
      id: 'm11q2', type: 'A',
      sentence: 'Babička b_dlí v domku u lesa.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'B_DLÍ: příbuzné se slovem BYDLET (vyjmenované po B), píšeme Y.',
    },
    {
      id: 'm11q3', type: 'B',
      sentence: 'Sova je v noci ___ jak šedý stín.',
      options: ['bystrá', 'bistrá', 'bystria', 'bistria'], correct: 'bystrá',
      explanation: 'BYSTRÁ: příbuzné se slovem BYSTRÝ (vyjmenované po B), píšeme Y.',
    },
    {
      id: 'm11q4', type: 'C',
      text: 'Bidlíme u babičky na prázdninách.',
      isCorrect: false, wrongWord: 'Bidlíme', correctWord: 'Bydlíme',
      explanation: 'B_DLÍME: příbuzné se slovem BYDLET (vyjmenované po B), píšeme Y!',
    },
    {
      id: 'm11q5', type: 'D',
      groups: ['Tvrdá souhláska → Y', 'Příbuzné po B → Y'],
      words: [
        { word: 'ryba', group: 0 }, { word: 'bylina', group: 1 },
        { word: 'kytka', group: 0 }, { word: 'bydlet', group: 1 },
        { word: 'dým', group: 0 }, { word: 'bystrý', group: 1 },
      ],
    },
    {
      id: 'm11q6', type: 'F',
      sentence: 'Malá r_ba b_dlí v rybníce.',
      blanks: [
        { label: 'tvrdá souhláska R', options: ['i', 'y'], correct: 'y' },
        { label: 'příbuzné po B (bydlet)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'R_BA: R je tvrdá souhláska! B_DLÍ: příbuzné se slovem BYDLET (po B).',
    },
    {
      id: 'm11q7', type: 'F',
      sentence: 'K_tka je b_strá jako malá tygřice.',
      blanks: [
        { label: 'tvrdá souhláska K', options: ['i', 'y'], correct: 'y' },
        { label: 'příbuzné po B (bystrý)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'K_TKA: K je tvrdá souhláska! B_STRÁ: příbuzné se slovem BYSTRÝ (po B).',
    },
    {
      id: 'm11q8', type: 'F',
      sentence: 'B_linka voní a d_m stoupá z komína.',
      blanks: [
        { label: 'příbuzné po B (bylina)', options: ['i', 'y'], correct: 'y' },
        { label: 'tvrdá souhláska D', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'B_LINKA: příbuzné se slovem BYLINA (po B)! D_M: D je tvrdá souhláska.',
    },
    {
      id: 'm11q9', type: 'F',
      sentence: 'T_gr b_dlí v džungli a je velmi b_strý.',
      blanks: [
        { label: 'tvrdá souhláska T', options: ['i', 'y'], correct: 'y' },
        { label: 'příbuzné po B (bydlet)', options: ['i', 'y'], correct: 'y' },
        { label: 'příbuzné po B (bystrý)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'T_GR: T je tvrdá souhláska! B_DLÍ: příbuzné se slovem BYDLET! B_STRÝ: příbuzné se slovem BYSTRÝ.',
    },
  ],
};

// ─── MODULE 12: Příbuzná po L a M + Měkké souhlásky (Planet Lyra) ─────────────
const module12: ModuleData = {
  id: 12,
  name: 'Planet Lyra: L + M + Měkké souhlásky',
  icon: '🟣',
  difficulty: 2,
  badge: 'Hvězdný pěvec Lyry',
  badgeIcon: '🎵',
  description: 'Vyjmenovaná po L a M, plus měkké souhlásky: vždy I!',
  color: 'from-violet-500 to-purple-700',
  questions: [
    {
      id: 'm12q1', type: 'A',
      sentence: 'L_žař sjíždí rychle ze svahu dolů.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'L_ŽAŘ: příbuzné se slovem LYŽE (vyjmenované po L), píšeme Y.',
    },
    {
      id: 'm12q2', type: 'A',
      sentence: 'Ž_rafa je nejštíhlejší zvíře na světě.',
      options: ['i', 'y'], correct: 'i',
      explanation: 'Ž_RAFA: Ž je měkká souhláska, píšeme vždy I.',
    },
    {
      id: 'm12q3', type: 'B',
      sentence: 'V létě ___ létá kolem lampy.',
      options: ['hmyz', 'hmis', 'hmyc', 'hmíz'], correct: 'hmyz',
      explanation: 'HMYZ: vyjmenované slovo po M, píšeme Y.',
    },
    {
      id: 'm12q4', type: 'C',
      text: 'Lytko mě bolí po závodě.',
      isCorrect: false, wrongWord: 'Lytko', correctWord: 'Lýtko',
      explanation: 'L_TKO: příbuzné se slovem LÝKO (vyjmenované po L), píšeme dlouhé Ý!',
    },
    {
      id: 'm12q5', type: 'D',
      groups: ['Příbuzné po L nebo M → Y', 'Měkká souhláska → I'],
      words: [
        { word: 'lyže', group: 0 }, { word: 'žirafa', group: 1 },
        { word: 'myš', group: 0 }, { word: 'číslice', group: 1 },
        { word: 'lýtko', group: 0 }, { word: 'šiška', group: 1 },
      ],
    },
    {
      id: 'm12q6', type: 'F',
      sentence: 'L_žař si um_l ruce mýdlem před závodem.',
      blanks: [
        { label: 'příbuzné po L (lyžař)', options: ['i', 'y'], correct: 'y' },
        { label: 'příbuzné po M (mýt)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'L_ŽAŘ: příbuzné se slovem LYŽE (po L)! UM_L: příbuzné se slovem MÝT (po M).',
    },
    {
      id: 'm12q7', type: 'F',
      sentence: 'Ž_rafa a m_š jsou kamarádi.',
      blanks: [
        { label: 'měkká souhláska Ž', options: ['i', 'y'], correct: 'i' },
        { label: 'vyjmenované po M (myš)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'Ž_RAFA: Ž je měkká souhláska, píšeme I! M_Š: vyjmenované slovo po M.',
    },
    {
      id: 'm12q8', type: 'F',
      sentence: 'Bl_skavice osvětlila m_dlo na polici.',
      blanks: [
        { label: 'příbuzné po L (blýskat)', options: ['í', 'ý'], correct: 'ý' },
        { label: 'vyjmenované po M (mýdlo)', options: ['í', 'ý'], correct: 'ý' },
      ],
      explanation: 'BL_SKAVICE: příbuzné se slovem BLÝSKAT (po L), dlouhé Ý! M_DLO: vyjmenované MÝDLO po M.',
    },
    {
      id: 'm12q9', type: 'F',
      sentence: 'Š_ška padá ze stromu a l_žař ji sbírá.',
      blanks: [
        { label: 'měkká souhláska Š', options: ['i', 'y'], correct: 'i' },
        { label: 'příbuzné po L (lyžař)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'Š_ŠKA: Š je měkká souhláska, píšeme I! L_ŽAŘ: příbuzné se slovem LYŽE (po L).',
    },
  ],
};

// ─── MODULE 13: Vyjmenovaná po P a S + Předpony s-/z- (Planet Pyxis) ──────────
const module13: ModuleData = {
  id: 13,
  name: 'Planet Pyxis: P + S + předpony s-/z-',
  icon: '🧡',
  difficulty: 2,
  badge: 'Navigátor Pyxidu',
  badgeIcon: '🧭',
  description: 'Vyjmenovaná po P a S plus záludné předpony s-/z-!',
  color: 'from-orange-400 to-red-600',
  questions: [
    {
      id: 'm13q1', type: 'A',
      sentence: 'Honzík je p_šný na svůj pěkný výkres.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'P_ŠNÝ: příbuzné se slovem PÝCHA (vyjmenované po P), píšeme Y.',
    },
    {
      id: 'm13q2', type: 'A',
      sentence: 'Maminka _pívá při vaření oběda.',
      options: ['s', 'z'], correct: 'z',
      explanation: '_PÍVÁ: předpona Z- (zpívat = začátek zpěvu, změna stavu).',
    },
    {
      id: 'm13q3', type: 'B',
      sentence: 'Lesní lupič se nazývá ___.',
      options: ['pytlák', 'pitlák', 'pytlik', 'pitlik'], correct: 'pytlák',
      explanation: 'PYTLÁK: vyjmenované slovo po P, píšeme Y.',
    },
    {
      id: 'm13q4', type: 'C',
      text: 'Honzík zbalil kufr na výlet.',
      isCorrect: false, wrongWord: 'zbalil', correctWord: 'sbalil',
      explanation: '_BALIL: předpona S- (sbalit = dát věci dohromady). Předpona Z- by byla špatně!',
    },
    {
      id: 'm13q5', type: 'D',
      groups: ['Předpona s- (dohromady)', 'Předpona z- (změna stavu)'],
      words: [
        { word: 'sbalit', group: 0 }, { word: 'zpívat', group: 1 },
        { word: 'sestoupit', group: 0 }, { word: 'zkazit', group: 1 },
        { word: 'sklidit', group: 0 }, { word: 'zjistit', group: 1 },
      ],
    },
    {
      id: 'm13q6', type: 'F',
      sentence: 'P_šný s_n šel ráno do školy.',
      blanks: [
        { label: 'příbuzné po P (pýcha)', options: ['i', 'y'], correct: 'y' },
        { label: 'vyjmenované po S (syn)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'P_ŠNÝ: příbuzné se slovem PÝCHA (po P)! S_N: vyjmenované slovo SYN po S.',
    },
    {
      id: 'm13q7', type: 'F',
      sentence: 'Pytlák _balil p_l do pytlíku.',
      blanks: [
        { label: 'předpona s-/z-', options: ['s', 'z'], correct: 's' },
        { label: 'vyjmenované po P (pyl)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: '_BALIL: předpona S- = dohromady! P_L: vyjmenované slovo PYL po P.',
    },
    {
      id: 'm13q8', type: 'F',
      sentence: 'S_n _pívá a táta ho poslouchá.',
      blanks: [
        { label: 'vyjmenované po S (syn)', options: ['i', 'y'], correct: 'y' },
        { label: 'předpona s-/z-', options: ['s', 'z'], correct: 'z' },
      ],
      explanation: 'S_N: vyjmenované slovo SYN po S! _PÍVÁ: předpona Z- (zpívat).',
    },
    {
      id: 'm13q9', type: 'F',
      sentence: 'P_šný s_n _kazil svátek mámě.',
      blanks: [
        { label: 'příbuzné po P (pýcha)', options: ['i', 'y'], correct: 'y' },
        { label: 'vyjmenované po S (syn)', options: ['i', 'y'], correct: 'y' },
        { label: 'předpona s-/z-', options: ['s', 'z'], correct: 'z' },
      ],
      explanation: 'P_ŠNÝ: příbuzné po P! S_N: vyjmenované po S! _KAZIL: předpona Z- (zkazit = pokazit).',
    },
  ],
};

// ─── MODULE 14: Vyjmenovaná po V a Z + Předpony s-/z- (Planet Vela) ───────────
const module14: ModuleData = {
  id: 14,
  name: 'Planet Vela: V + Z + předpony s-/z-',
  icon: '🔵',
  difficulty: 3,
  badge: 'Kapitán Vely',
  badgeIcon: '⚓',
  description: 'Vyjmenovaná po V a Z, a předpony s-/z- najednou!',
  color: 'from-blue-400 to-cyan-600',
  questions: [
    {
      id: 'm14q1', type: 'A',
      sentence: 'Sova a v_r jsou noční ptáci.',
      options: ['í', 'ý'], correct: 'ý',
      explanation: 'V_R: vyjmenované slovo VÝR po V, píšeme dlouhé Ý.',
    },
    {
      id: 'm14q2', type: 'A',
      sentence: 'Ve škole se učíme český jaz_k.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'JAZ_K: vyjmenované slovo JAZYK po Z, píšeme Y.',
    },
    {
      id: 'm14q3', type: 'B',
      sentence: 'Vlci v noci ___.',
      options: ['vyjí', 'vijí', 'vyji', 'viji'], correct: 'vyjí',
      explanation: 'VYJÍ: příbuzné se slovem VÝT (vyjmenované po V), píšeme Y.',
    },
    {
      id: 'm14q4', type: 'C',
      text: 'Brsi přijde léto a bude krásně.',
      isCorrect: false, wrongWord: 'Brsi', correctWord: 'Brzy',
      explanation: 'BRZ_: vyjmenované slovo BRZY po Z, píšeme Y!',
    },
    {
      id: 'm14q5', type: 'D',
      groups: ['Vyjmenované po V nebo Z', 'Předpona z- (změna stavu)'],
      words: [
        { word: 'výr', group: 0 }, { word: 'zpívat', group: 1 },
        { word: 'jazyk', group: 0 }, { word: 'zkazit', group: 1 },
        { word: 'brzy', group: 0 }, { word: 'zjistit', group: 1 },
      ],
    },
    {
      id: 'm14q6', type: 'F',
      sentence: 'V_r v_je celou noc na měsíc.',
      blanks: [
        { label: 'vyjmenované po V (výr)', options: ['í', 'ý'], correct: 'ý' },
        { label: 'příbuzné po V (výt)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'V_R: vyjmenované VÝR po V, dlouhé Ý! V_JÍ: příbuzné se slovem VÝT (po V), krátké Y.',
    },
    {
      id: 'm14q7', type: 'F',
      sentence: 'Jaz_k nám pomáhá _pívat v hodinách.',
      blanks: [
        { label: 'vyjmenované po Z (jazyk)', options: ['i', 'y'], correct: 'y' },
        { label: 'předpona s-/z-', options: ['s', 'z'], correct: 'z' },
      ],
      explanation: 'JAZ_K: vyjmenované JAZYK po Z! _PÍVAT: předpona Z- (zpívat).',
    },
    {
      id: 'm14q8', type: 'F',
      sentence: 'S_n brz_ _balí věci a jede k babičce.',
      blanks: [
        { label: 'vyjmenované po S (syn)', options: ['i', 'y'], correct: 'y' },
        { label: 'vyjmenované po Z (brzy)', options: ['i', 'y'], correct: 'y' },
        { label: 'předpona s-/z-', options: ['s', 'z'], correct: 's' },
      ],
      explanation: 'S_N: vyjmenované SYN po S! BRZ_: vyjmenované BRZY po Z! _BALÍ: předpona S- (sbalit).',
    },
    {
      id: 'm14q9', type: 'F',
      sentence: 'V_r brz_ v_je celou noc.',
      blanks: [
        { label: 'vyjmenované po V (výr)', options: ['í', 'ý'], correct: 'ý' },
        { label: 'vyjmenované po Z (brzy)', options: ['i', 'y'], correct: 'y' },
        { label: 'příbuzné po V (výt)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'V_R: vyjmenované VÝR po V! BRZ_: vyjmenované BRZY po Z! V_JE: příbuzné se slovem VÝT (po V).',
    },
  ],
};

// ─── MODULE 15: Záludná slova (Planet Crypta) ─────────────────────────────────
const module15: ModuleData = {
  id: 15,
  name: 'Planet Crypta: Záludná slova',
  icon: '🔍',
  difficulty: 3,
  badge: 'Detektiv Crypty',
  badgeIcon: '🕵️',
  description: 'Méně obvyklá vyjmenovaná slova: pýr, lýko, mýval, sysel a další!',
  color: 'from-slate-500 to-gray-700',
  questions: [
    {
      id: 'm15q1', type: 'A',
      sentence: 'Zahradník vytrhuje p_r ze záhonku.',
      options: ['í', 'ý'], correct: 'ý',
      explanation: 'P_R: vyjmenované slovo PÝR po P, píšeme dlouhé Ý.',
    },
    {
      id: 'm15q2', type: 'A',
      sentence: 'M_val pere potravu u potoka večer.',
      options: ['í', 'ý'], correct: 'ý',
      explanation: 'M_VAL: vyjmenované slovo MÝVAL po M, píšeme dlouhé Ý.',
    },
    {
      id: 'm15q3', type: 'B',
      sentence: 'Malé zvíře, co žije v norách, se jmenuje ___.',
      options: ['sysel', 'sisel', 'sycel', 'sicel'], correct: 'sysel',
      explanation: 'SYSEL: vyjmenované slovo po S, píšeme Y.',
    },
    {
      id: 'm15q4', type: 'C',
      text: 'Sicharavý vítr fouká z hor.',
      isCorrect: false, wrongWord: 'Sicharavý', correctWord: 'Sychravý',
      explanation: 'S_CHRAVÝ: vyjmenované slovo SYCHRAVÝ po S, píšeme Y!',
    },
    {
      id: 'm15q5', type: 'D',
      groups: ['Vyjmenované po P nebo L', 'Vyjmenované po M nebo S'],
      words: [
        { word: 'pýr', group: 0 }, { word: 'mýval', group: 1 },
        { word: 'lýko', group: 0 }, { word: 'sychravý', group: 1 },
        { word: 'pýcha', group: 0 }, { word: 'sysel', group: 1 },
      ],
    },
    {
      id: 'm15q6', type: 'F',
      sentence: 'M_val pere potravu a s_sel čeká v noře.',
      blanks: [
        { label: 'vyjmenované po M (mýval)', options: ['í', 'ý'], correct: 'ý' },
        { label: 'vyjmenované po S (sysel)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'M_VAL: vyjmenované MÝVAL po M, dlouhé Ý! S_SEL: vyjmenované SYSEL po S.',
    },
    {
      id: 'm15q7', type: 'F',
      sentence: 'Za s_chravého počasí p_r rychle roste.',
      blanks: [
        { label: 'vyjmenované po S (sychravý)', options: ['i', 'y'], correct: 'y' },
        { label: 'vyjmenované po P (pýr)', options: ['í', 'ý'], correct: 'ý' },
      ],
      explanation: 'S_CHRAVÝ: vyjmenované SYCHRAVÝ po S! P_R: vyjmenované PÝR po P, dlouhé Ý.',
    },
    {
      id: 'm15q8', type: 'F',
      sentence: 'S_ček sedí na stromě a sbírá p_l.',
      blanks: [
        { label: 'vyjmenované po S (sýček)', options: ['í', 'ý'], correct: 'ý' },
        { label: 'vyjmenované po P (pyl)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'S_ČEK: vyjmenované SÝČEK po S, dlouhé Ý! P_L: vyjmenované PYL po P.',
    },
    {
      id: 'm15q9', type: 'F',
      sentence: 'L_ko ze stromu a p_r ze zahrady jsou záludná slova.',
      blanks: [
        { label: 'vyjmenované po L (lýko)', options: ['í', 'ý'], correct: 'ý' },
        { label: 'vyjmenované po P (pýr)', options: ['í', 'ý'], correct: 'ý' },
      ],
      explanation: 'L_KO: vyjmenované LÝKO po L, dlouhé Ý! P_R: vyjmenované PÝR po P, dlouhé Ý.',
    },
  ],
};

// ─── MODULE 16: Kombinace B + L + M (Planet Tria) ─────────────────────────────
const module16: ModuleData = {
  id: 16,
  name: 'Planet Tria: B + L + M najednou',
  icon: '🟡',
  difficulty: 3,
  badge: 'Trojúhelník Trie',
  badgeIcon: '🔺',
  description: 'Vyjmenovaná po B, L a M: všechno v jedné větě!',
  color: 'from-yellow-400 to-orange-500',
  questions: [
    {
      id: 'm16q1', type: 'A',
      sentence: 'Bl_skavice osvětlila celé nebe.',
      options: ['í', 'ý'], correct: 'ý',
      explanation: 'BL_SKAVICE: příbuzné se slovem BLÝSKAT (vyjmenované po L). Písmeno L je před Ý!',
    },
    {
      id: 'm16q2', type: 'A',
      sentence: 'Babička um_la velké okno mýdlem.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'UM_LA: příbuzné se slovem MÝT (vyjmenované po M), píšeme Y.',
    },
    {
      id: 'm16q3', type: 'B',
      sentence: 'Celý dům byl ___.',
      options: ['blýskavý', 'bliskavý', 'bliščavý', 'blízkavý'], correct: 'blýskavý',
      explanation: 'BLÝSKAVÝ: příbuzné se slovem BLÝSKAT (vyjmenované po L). L je před Ý.',
    },
    {
      id: 'm16q4', type: 'C',
      text: 'Bilina voní a lyžař ji sbírá.',
      isCorrect: false, wrongWord: 'Bilina', correctWord: 'Bylina',
      explanation: 'B_LINA: příbuzné se slovem BYLINA (vyjmenované po B), píšeme Y!',
    },
    {
      id: 'm16q5', type: 'D',
      groups: ['Příbuzné po B nebo L', 'Vyjmenované po M'],
      words: [
        { word: 'bylina', group: 0 }, { word: 'myš', group: 1 },
        { word: 'lyže', group: 0 }, { word: 'hmyz', group: 1 },
        { word: 'blýskat', group: 0 }, { word: 'mýdlo', group: 1 },
      ],
    },
    {
      id: 'm16q6', type: 'F',
      sentence: 'L_žař si um_l ruce mýdlem.',
      blanks: [
        { label: 'příbuzné po L (lyžař)', options: ['i', 'y'], correct: 'y' },
        { label: 'příbuzné po M (mýt)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'L_ŽAŘ: příbuzné se slovem LYŽE (po L)! UM_L: příbuzné se slovem MÝT (po M).',
    },
    {
      id: 'm16q7', type: 'F',
      sentence: 'B_strý l_žař si um_je ruce před závodem.',
      blanks: [
        { label: 'příbuzné po B (bystrý)', options: ['i', 'y'], correct: 'y' },
        { label: 'příbuzné po L (lyžař)', options: ['i', 'y'], correct: 'y' },
        { label: 'příbuzné po M (mýt)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'B_STRÝ: příbuzné po B! L_ŽAŘ: příbuzné po L! UM_JE: příbuzné se slovem MÝT (po M).',
    },
    {
      id: 'm16q8', type: 'F',
      sentence: 'M_val b_dlí u potoka a bl_ská se nad ním.',
      blanks: [
        { label: 'vyjmenované po M (mýval)', options: ['í', 'ý'], correct: 'ý' },
        { label: 'příbuzné po B (bydlet)', options: ['i', 'y'], correct: 'y' },
        { label: 'příbuzné po L (blýskat)', options: ['í', 'ý'], correct: 'ý' },
      ],
      explanation: 'M_VAL: vyjmenované MÝVAL po M! B_DLÍ: příbuzné se slovem BYDLET (po B)! BL_SKÁ: příbuzné se slovem BLÝSKAT (po L).',
    },
    {
      id: 'm16q9', type: 'F',
      sentence: 'B_linka voní a l_žaři ji rádi nosí domů.',
      blanks: [
        { label: 'příbuzné po B (bylina)', options: ['i', 'y'], correct: 'y' },
        { label: 'příbuzné po L (lyžař)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'B_LINKA: příbuzné se slovem BYLINA (po B)! L_ŽAŘI: příbuzné se slovem LYŽE (po L).',
    },
  ],
};

// ─── MODULE 17: Kombinace P + S + V + Z (Planet Quatra) ───────────────────────
const module17: ModuleData = {
  id: 17,
  name: 'Planet Quatra: P + S + V + Z',
  icon: '🌸',
  difficulty: 3,
  badge: 'Čtyřhvězdný rytíř',
  badgeIcon: '🌟',
  description: 'Vyjmenovaná po P, S, V a Z: čtyři skupiny najednou!',
  color: 'from-pink-400 to-rose-600',
  questions: [
    {
      id: 'm17q1', type: 'A',
      sentence: 'P_šná princezna si zpívala písničku.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'P_ŠNÁ: příbuzné se slovem PÝCHA (vyjmenované po P), píšeme Y.',
    },
    {
      id: 'm17q2', type: 'A',
      sentence: 'Brz_ přijde jaro a les ozelení.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'BRZ_: vyjmenované slovo BRZY po Z, píšeme Y.',
    },
    {
      id: 'm17q3', type: 'B',
      sentence: 'Sýček sedí na větvi a hlídá plný ___.',
      options: ['pytel', 'pitel', 'pytiel', 'picel'], correct: 'pytel',
      explanation: 'PYTEL: vyjmenované slovo po P, píšeme Y.',
    },
    {
      id: 'm17q4', type: 'C',
      text: 'Sichravý vítr sfouknul list ze stromu.',
      isCorrect: false, wrongWord: 'Sichravý', correctWord: 'Sychravý',
      explanation: 'S_CHRAVÝ: vyjmenované slovo SYCHRAVÝ po S, píšeme Y!',
    },
    {
      id: 'm17q5', type: 'D',
      groups: ['Vyjmenované po P nebo S', 'Vyjmenované po V nebo Z'],
      words: [
        { word: 'pyšný', group: 0 }, { word: 'výr', group: 1 },
        { word: 'syn', group: 0 }, { word: 'jazyk', group: 1 },
        { word: 'pyl', group: 0 }, { word: 'brzy', group: 1 },
      ],
    },
    {
      id: 'm17q6', type: 'F',
      sentence: 'P_šný s_n _pívá ve sboru.',
      blanks: [
        { label: 'příbuzné po P (pýcha)', options: ['i', 'y'], correct: 'y' },
        { label: 'vyjmenované po S (syn)', options: ['i', 'y'], correct: 'y' },
        { label: 'předpona z-', options: ['s', 'z'], correct: 'z' },
      ],
      explanation: 'P_ŠNÝ: příbuzné po P! S_N: vyjmenované po S! _PÍVÁ: předpona Z- (zpívat).',
    },
    {
      id: 'm17q7', type: 'F',
      sentence: 'V_r a s_r se rýmují!',
      blanks: [
        { label: 'vyjmenované po V (výr)', options: ['í', 'ý'], correct: 'ý' },
        { label: 'vyjmenované po S (sýr)', options: ['í', 'ý'], correct: 'ý' },
      ],
      explanation: 'V_R: vyjmenované VÝR po V! S_R: vyjmenované SÝR po S. Obě mají dlouhé Ý!',
    },
    {
      id: 'm17q8', type: 'F',
      sentence: 'S_n _balil p_l do pytlíku na výlet.',
      blanks: [
        { label: 'vyjmenované po S (syn)', options: ['i', 'y'], correct: 'y' },
        { label: 'předpona s-/z-', options: ['s', 'z'], correct: 's' },
        { label: 'vyjmenované po P (pyl)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'S_N: vyjmenované SYN po S! _BALIL: předpona S- = dohromady! P_L: vyjmenované PYL po P.',
    },
    {
      id: 'm17q9', type: 'F',
      sentence: 'V_r s_r nesnědl a _pívá si.',
      blanks: [
        { label: 'vyjmenované po V (výr)', options: ['í', 'ý'], correct: 'ý' },
        { label: 'vyjmenované po S (sýr)', options: ['í', 'ý'], correct: 'ý' },
        { label: 'předpona z-', options: ['s', 'z'], correct: 'z' },
      ],
      explanation: 'V_R: vyjmenované VÝR po V! S_R: vyjmenované SÝR po S! _PÍVÁ: předpona Z- (zpívat).',
    },
  ],
};

// ─── MODULE 18: Předpony s-/z- + vyjmenovaná dohromady (Planet Nexus) ─────────
const module18: ModuleData = {
  id: 18,
  name: 'Planet Nexus: Předpony + vyjmenovaná',
  icon: '🧩',
  difficulty: 4,
  badge: 'Architekt Nexu',
  badgeIcon: '🔗',
  description: 'Předpony s-/z- a vyjmenovaná v jedné větě: pro opravdové experty!',
  color: 'from-teal-400 to-emerald-600',
  questions: [
    {
      id: 'm18q1', type: 'A',
      sentence: 'Maminka _pívá při vaření večeře.',
      options: ['s', 'z'], correct: 'z',
      explanation: '_PÍVÁ: předpona Z- (zpívat = začátek zpěvu, změna stavu).',
    },
    {
      id: 'm18q2', type: 'A',
      sentence: 'Děti _balily spacáky na tábor.',
      options: ['s', 'z'], correct: 's',
      explanation: '_BALILY: předpona S- (sbalit = dát věci dohromady).',
    },
    {
      id: 'm18q3', type: 'B',
      sentence: 'Pytlák ___ pytel plný pýru.',
      options: ['sbalil', 'zbalil', 'sbolil', 'zbolil'], correct: 'sbalil',
      explanation: 'SBALIL: předpona S- (sbalit = dohromady). Předpona Z- by byla chybná!',
    },
    {
      id: 'm18q4', type: 'C',
      text: 'Pytlák zbíral pytel plný pyl.',
      isCorrect: false, wrongWord: 'zbíral', correctWord: 'sbíral',
      explanation: '_BÍRAL: předpona S- (sbírat = shromažďovat). Předpona Z- by změnila smysl!',
    },
    {
      id: 'm18q5', type: 'D',
      groups: ['Předpona s- (dohromady)', 'Předpona z- (změna stavu)'],
      words: [
        { word: 'sbalit', group: 0 }, { word: 'zpívat', group: 1 },
        { word: 'sbírat', group: 0 }, { word: 'zkazit', group: 1 },
        { word: 'sklidit', group: 0 }, { word: 'zjistit', group: 1 },
      ],
    },
    {
      id: 'm18q6', type: 'F',
      sentence: '_balil p_l do pytlíku a _pívá cestou.',
      blanks: [
        { label: 'předpona s-/z-', options: ['s', 'z'], correct: 's' },
        { label: 'vyjmenované po P (pyl)', options: ['i', 'y'], correct: 'y' },
        { label: 'předpona s-/z-', options: ['s', 'z'], correct: 'z' },
      ],
      explanation: '_BALIL: předpona S- = dohromady! P_L: vyjmenované PYL po P! _PÍVÁ: předpona Z- (zpívat).',
    },
    {
      id: 'm18q7', type: 'F',
      sentence: 'S_n _balil věci a _pívá na cestu.',
      blanks: [
        { label: 'vyjmenované po S (syn)', options: ['i', 'y'], correct: 'y' },
        { label: 'předpona s-/z-', options: ['s', 'z'], correct: 's' },
        { label: 'předpona s-/z-', options: ['s', 'z'], correct: 'z' },
      ],
      explanation: 'S_N: vyjmenované SYN po S! _BALIL: předpona S-! _PÍVÁ: předpona Z-!',
    },
    {
      id: 'm18q8', type: 'F',
      sentence: 'P_šný král _kazil svátek a s_n byl smutný.',
      blanks: [
        { label: 'příbuzné po P (pýcha)', options: ['i', 'y'], correct: 'y' },
        { label: 'předpona s-/z-', options: ['s', 'z'], correct: 'z' },
        { label: 'vyjmenované po S (syn)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'P_ŠNÝ: příbuzné po P! _KAZIL: předpona Z- = změna stavu! S_N: vyjmenované SYN po S.',
    },
    {
      id: 'm18q9', type: 'F',
      sentence: 'S_r _kazil a s_n ho hodil do koše.',
      blanks: [
        { label: 'vyjmenované po S (sýr)', options: ['í', 'ý'], correct: 'ý' },
        { label: 'předpona s-/z-', options: ['s', 'z'], correct: 'z' },
        { label: 'vyjmenované po S (syn)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'S_R: vyjmenované SÝR po S, dlouhé Ý! _KAZIL: předpona Z-! S_N: vyjmenované SYN po S.',
    },
  ],
};

// ─── MODULE 19: Tři jevy v jedné větě (Planet Suprema) ────────────────────────
const module19: ModuleData = {
  id: 19,
  name: 'Planet Suprema: Tři jevy najednou',
  icon: '⚡',
  difficulty: 4,
  badge: 'Šampion Supremy',
  badgeIcon: '⚡',
  description: 'Tři různé jevy v jedné větě: nejvyšší obtížnost před finále!',
  color: 'from-amber-400 to-yellow-600',
  questions: [
    {
      id: 'm19q1', type: 'A',
      sentence: 'B_strý lyžař zpívá veselou písničku na sjezdovce.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'B_STRÝ: příbuzné se slovem BYSTRÝ (po B). Lyžař (po L) a zpívá (z-) jsou v textu správně.',
    },
    {
      id: 'm19q2', type: 'A',
      sentence: 'Sova v_je a syn ji poslouchá z bytu.',
      options: ['i', 'y'], correct: 'y',
      explanation: 'V_JE: příbuzné se slovem VÝT (po V). Syn (po S) a bytu (po B) jsou správně napsány.',
    },
    {
      id: 'm19q3', type: 'C',
      text: 'Pyšný syn zbalil kufr a zpíval nadšeně.',
      isCorrect: false, wrongWord: 'zbalil', correctWord: 'sbalil',
      explanation: '_BALIL: předpona S- (sbalit = dohromady)! Pyšný (po P) a syn (po S) jsou správně.',
    },
    {
      id: 'm19q4', type: 'D',
      groups: ['Píšeme Y (tvrdá / vyjmenovaná souhláska)', 'Píšeme I (měkká souhláska)'],
      words: [
        { word: 'ryba', group: 0 }, { word: 'žirafa', group: 1 },
        { word: 'pyl', group: 0 }, { word: 'číslice', group: 1 },
        { word: 'výr', group: 0 }, { word: 'šiška', group: 1 },
      ],
    },
    {
      id: 'm19q5', type: 'F',
      sentence: 'B_strý l_žař si um_je ruce mýdlem.',
      blanks: [
        { label: 'příbuzné po B (bystrý)', options: ['i', 'y'], correct: 'y' },
        { label: 'příbuzné po L (lyžař)', options: ['i', 'y'], correct: 'y' },
        { label: 'příbuzné po M (mýt)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'B_STRÝ: příbuzné po B! L_ŽAŘ: příbuzné po L! UM_JE: příbuzné se slovem MÝT (po M).',
    },
    {
      id: 'm19q6', type: 'F',
      sentence: 'P_šný s_n _pívá v sadě.',
      blanks: [
        { label: 'příbuzné po P (pýcha)', options: ['i', 'y'], correct: 'y' },
        { label: 'vyjmenované po S (syn)', options: ['i', 'y'], correct: 'y' },
        { label: 'předpona z-', options: ['s', 'z'], correct: 'z' },
      ],
      explanation: 'P_ŠNÝ: příbuzné po P! S_N: vyjmenované po S! _PÍVÁ: předpona Z-.',
    },
    {
      id: 'm19q7', type: 'F',
      sentence: 'Ž_rafa b_dlí daleko a _balí si trávu na cestu.',
      blanks: [
        { label: 'měkká souhláska Ž', options: ['i', 'y'], correct: 'i' },
        { label: 'příbuzné po B (bydlet)', options: ['i', 'y'], correct: 'y' },
        { label: 'předpona s-/z-', options: ['s', 'z'], correct: 's' },
      ],
      explanation: 'Ž_RAFA: Ž je měkká souhláska, I! B_DLÍ: příbuzné po B! _BALÍ: předpona S- (dohromady).',
    },
    {
      id: 'm19q8', type: 'F',
      sentence: 'V_r v_je v noci a brz_ umlkne.',
      blanks: [
        { label: 'vyjmenované po V (výr)', options: ['í', 'ý'], correct: 'ý' },
        { label: 'příbuzné po V (výt)', options: ['i', 'y'], correct: 'y' },
        { label: 'vyjmenované po Z (brzy)', options: ['i', 'y'], correct: 'y' },
      ],
      explanation: 'V_R: vyjmenované VÝR po V! V_JE: příbuzné se slovem VÝT (po V)! BRZ_: vyjmenované BRZY po Z.',
    },
    {
      id: 'm19q9', type: 'F',
      sentence: 'Š_ška padá a bl_skavice osvítí m_vala.',
      blanks: [
        { label: 'měkká souhláska Š', options: ['i', 'y'], correct: 'i' },
        { label: 'příbuzné po L (blýskat)', options: ['í', 'ý'], correct: 'ý' },
        { label: 'vyjmenované po M (mýval)', options: ['í', 'ý'], correct: 'ý' },
      ],
      explanation: 'Š_ŠKA: Š je měkká souhláska, I! BL_SKAVICE: příbuzné BLÝSKAT po L! M_VALA: vyjmenované MÝVAL po M.',
    },
  ],
};

// ─── MODULE 20: Šampion vesmíru (Planet Ultima) ────────────────────────────────
// Questions are generated dynamically from modules 11–19
const module20: ModuleData = {
  id: 20,
  name: 'Planet Ultima: Šampion vesmíru',
  icon: '👑',
  difficulty: 4,
  badge: 'Šampion vesmíru',
  badgeIcon: '👑',
  description: '20 otázek ze všech vesmírných planetů: finální kosmická výzva!',
  color: 'from-yellow-400 to-amber-500',
  questions: [], // filled dynamically
};

export const SPACE_MODULES: ModuleData[] = [
  module11, module12, module13, module14, module15,
  module16, module17, module18, module19, module20,
];

// Generate 20 random questions from modules 11-19 for Module 20
export function generateModule20Questions(): Question[] {
  const sourceMods = SPACE_MODULES.slice(0, 9); // modules 11-19
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

  // Shuffle all 20
  return pool.sort(() => Math.random() - 0.5);
}
