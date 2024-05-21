import { facebook, gameImg, habr, linkedin, telegram, vcru, x, youtube } from "."


const publicationCards = [
  {
    purpleText: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    title: '5 dolor',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo ligula eget',
  },
  {
    purpleText: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    title: 'amet',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo',
  },
  {
    purpleText: 'Lorem ipsum dolor',
    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo`,
    title: '13 sit',
    content: "Lorem ipsum dolor sit '\n amet, consectetuer adipiscing elit",
  },
  {
    purpleText: 'опишите задачу',
    text: 'Отправляя форму, вы соглашаетесь  на обработку персоналных',
    title: 'a 7 adipiscing',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo eget',
  },
]

const userDescriptionDatas = [
  {
    count: 20,
    title: ' + ',
    content: ['Lorem', 'Ipsum Dolor'],
  },
  {
    count: 50,
    title: ' + ',
    content: ['Consectetuer', 'adipiscing'],
  },
  {
    count: 187,
    title: ' + sit',
    content: ['Lorem', 'Ipsum Dolor'],
  },
  {
    count: 5,
    title: ' amet',
    content: ['Consectetuer', 'adipiscing'],
  },
  {
    count: 30,
    title: ' + ',
    content: ['Lorem', 'Ipsum Dolor'],
  },
]

const topicTitles = [
  'Lorem ipsum', 'Dolor amet', 'Sit amet', 'Consectetuer', 'Donec quam', 'ullamcorper'
]


const carLocationList = [
  {
    date: '29 февраля 2024',
    mark: './assets/vcru.png',
    title: 'The More Important the Work, the More Important the Rest',
    text: 'Physiological respiration involves the mechanisms that ensure that the composition of the functional',
    photo: './assets/car1.png',
    btntitle: 'Читать на VC',
    arrowIcon: './assets/arrow.png',
  },
  {
    date: '27 декабря 2023',
    mark: './assets/vcru.png',
    title: 'The More Important the Work, the More Important the Rest',
    text: "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves",
    photo: './assets/car2.png',
    btntitle: 'Читать на VC',
    arrowIcon: './assets/arrow.png',
  },
  {
    date: '21 декабря 2023',
    mark: './assets/vcru.png',
    title: 'How to design a product that can grow itself 10x in year:',
    text: 'For athletes, high altitude produces two contradictory effects on performance. For explosive events ',
    photo: './assets/car3.png',
    btntitle: 'Читать на VC',
    arrowIcon: './assets/arrow.png',
  },
  {
    date: '13 декабря 2023',
    mark: './assets/youtube.png',
    title: 'The More Important the Work, the More Important the Rest',
    text: "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves",
    photo: './assets/car4.png',
    btntitle: 'Cмотреть на YouTube',
    arrowIcon: './assets/arrow.png',
  },
  {
    date: '7 октября 2023',
    mark: './assets/aaa.png',
    title: 'The More Important the Work, the More Important the Rest',
    text: 'The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a s',
    photo: './assets/car5.png',
    btntitle: 'Читать на Habr',
    arrowIcon: './assets/arrow.png',
  },
  {
    date: '22 марта 2024',
    mark: './assets/aaa.png',
    title: 'Understanding color theory: the color wheel and finding complementary colors',
    text: 'The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a s',
    photo: './assets/car6.png',
    btntitle: 'Читать на Habr',
    arrowIcon: './assets/arrow.png',
  }
]

const circleIcon = [
  telegram, vcru, habr, facebook, linkedin, x, youtube
]


const events = [
  {
    title: 'Understanding color theory: the color wheel and finding',
    description: 'In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in wh',
    createdDate: '27 января 2024',
    createdTime: '10:00',
    location: 'ONLINE SCHOOL',
  },
  {
    title: 'Understanding color theory: the color wheel and finding complementary',
    description: 'Physiological respiration involves the mechanisms that ensure that the composition of the functional',
    createdDate: '12 февраля 2024',
    createdTime: '19:00',
    location: 'London',
  },
]


const historyBox = [
  {
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget',
    imgUrl: '',
    date: '22.02.2024',
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget',
    imgUrl: '',
    date: '22.02.2024',
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget',
    imgUrl: gameImg,
    date: '22.02.2024',
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget',
    imgUrl: '',
    date: '22.02.2024',
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget',
    imgUrl: '',
    date: '22.02.2024',
  },
]

export { publicationCards, userDescriptionDatas, topicTitles, carLocationList, historyBox, circleIcon, events }