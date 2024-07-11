import { v4 as uuidv4 } from "uuid";

export const data = [
  {
    id: 1,
    questTitle: "<br/> elementining vazifasi nima?",
    variants: [
      {
        label: "A. Yozuvni qalinlashtiradi",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "B. Yozuvning tagini chizadi",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "C. Yozuvni shu element kelgan joydan pastga tushuradi",
        isTrue: true,
        id: uuidv4(),
      },
      {
        label: "D. Yozuvni yozuvni ustidan chizadi",
        isTrue: false,
        id: uuidv4(),
      },
    ],
  },
  {
    id: 2,
    questTitle: "<p></p> elementining vazifasi nima?",
    variants: [
      {
        label: "A. Yozuvni maydalashtiradi",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "B. Hajmi katta yozuvlarda ishlatiladi",
        isTrue: true,
        id: uuidv4(),
      },
      {
        label: "C. Yozuvni yozuvni ustidan chizadi",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "D. yozuvni shu element kelgan joydan pastga tushiradi",
        isTrue: false,
        id: uuidv4(),
      },
    ],
  },
  {
    id: 3,
    questTitle: "<a></a> elementi qanday vazifani bajaradi?",
    variants: [
      {
        label: "A. Saytga havola(link) qoshadi",
        isTrue: true,
        id: uuidv4(),
      },
      {
        label: "B. Yozuvni tagidan chizadi",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "C. Yozuvni yozuvni ustidan chizadi",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "D. Yozuvni kok ranga boyab beradi",
        isTrue: false,
        id: uuidv4(),
      },
    ],
  },
  {
    id: 4,
    questTitle: "<a></a> elementi togri ishlatilgan variantni korsating?",
    variants: [
      {
        label: "A. <a>www.youtube.com</a>",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "B. <a link='https://www.youtube.com'>Youtube</a>",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "C. <a href='https://www.youtube.com'>Youtube</a>",
        isTrue: true,
        id: uuidv4(),
      },
      {
        label: "D. <a href='https://www.youtube.com' />",
        isTrue: false,
        id: uuidv4(),
      },
    ],
  },
  {
    id: 5,
    questTitle: "Yozuvning tagini chizish uchun qaysi elementdan foydalanamiz?",
    variants: [
      {
        label: "A. <u></u>",
        isTrue: true,
        id: uuidv4(),
      },
      {
        label: "B. <li></li>",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "C. <b></b>",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "D. <ul></ul>",
        isTrue: false,
        id: uuidv4(),
      },
    ],
  },
  {
    id: 6,
    questTitle: "Yozuvni italic(qiyshaytirib) font qiluvchi element qaysi?",
    variants: [
      {
        label: "A. <italic></italic>",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "B. <b></b>",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "C. <td></td>",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "D. <i></i>",
        isTrue: true,
        id: uuidv4(),
      },
    ],
  },
  {
    id: 7,
    questTitle: "Block elementlar togri berilgan variantni toping.",
    variants: [
      {
        label: "A. h1, h2, h3, h4, h5, h6, b",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "B. h1, h2, h3, h4, h5, h6, p",
        isTrue: true,
        id: uuidv4(),
      },
      {
        label: "C. a, i, b, u, sub, sup, strong",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "D. h1, h2, h3, h4, h5, h6, sub, sup, strong",
        isTrue: false,
        id: uuidv4(),
      },
    ],
  },
  {
    id: 8,

    questTitle: "Inline elementlar togri berilgan variantni toping.",
    variants: [
      {
        label: "A. h1, h2, h3, h4, h5, h6, b",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "B. h1, h2, h3, h4, h5, h6, p",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "C. a, i, b, u, sub, sup, strong",
        isTrue: true,
        id: uuidv4(),
      },
      {
        label: "D. h1, h2, h3, h4, h5, h6, sub, sup, strong",
        isTrue: false,
        id: uuidv4(),
      },
    ],
  },
  {
    id: 9,
    questTitle: "Qaysi element sayt nomini belgilaydi?",
    variants: [
      {
        label: "A. <site></site>",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "B. <title></title>",
        isTrue: true,
        id: uuidv4(),
      },
      {
        label: "C. <name></name>",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "D. <head></head>",
        isTrue: false,
        id: uuidv4(),
      },
    ],
  },
  {
    id: 10,
    questTitle: "HTML da comment yozish uchun qanday belgi ishlatiladi?",
    variants: [
      {
        label: "A. /* comment */",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "B. <comment></comment>",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "C. <!- comment ->",
        isTrue: false,
        id: uuidv4(),
      },
      {
        label: "D. <!-- comment -->",
        isTrue: true,
        id: uuidv4(),
      },
    ],
  },
];
