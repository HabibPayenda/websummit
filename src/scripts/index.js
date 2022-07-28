const menu = document.getElementById('menu');
const mobileNav = document.getElementById('openNav');

menu.addEventListener('click', () => {
  mobileNav.style.display = 'flex';
});

const mobileNavClose = document.getElementById('close');
mobileNavClose.addEventListener('click', () => {
  mobileNav.style.display = 'none';
});

const speakers = [
  {
    name: 'Barr Moses',
    profession: 'Co-founder & CEO at Monte Carlo',
    details: 'Barr is co-founder of data reliability company Monte Carlo. Monte Carlo builds and operates an end-to-end data observability platform, and is backed by Accel, GGV, Redpoint, Iconiq Growth, Salesforce Ventures, IVP, and other top Silicon Valley investors.',
    img: 'url("https://web-summit-avenger.imgix.net/production/avatars/original/f7c2bb7417bcecc3fa80736d537400710d81f3db.jpeg?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300")',
  },
  {
    name: 'Sebastien Borget',
    profession: 'Co-founder & Chief Operating Officer at The Sandbox',
    details: 'Sebastien describes himself as an entrepreneur and dad, with 13 years of experience in growing startups, including working at the cutting edge of bringing blockchain tech into the gaming experience.',
    img: 'url("https://web-summit-avenger.imgix.net/production/avatars/original/d8a0130592e770dd857392ac371c7e49eef3bfc2.jpeg?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300")',
  },
  {
    name: 'Geoff Ralston',
    profession: 'President at Y Combinator',
    details: 'Geoff is the President of Y Combinator and has been with YC since 2011. Prior to YC, he built one of the first web mail services, RocketMail which became Yahoo Mail in 1997.',
    img: 'url("https://web-summit-avenger.imgix.net/production/avatars/original/b3fff122ecc854146751f1f67e993861731f5d6d.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300")',
  },
  {
    name: 'April Koh',
    profession: 'CEO at Spring Health',
    details: 'April is the co-founder and CEO of Spring Health, a comprehensive mental health benefit for employers and health plans. Spring Health is currently valued at more than US$2 billion. April was recognised by Forbes as the youngest woman to run a unicorn.',
    img: 'url("https://web-summit-avenger.imgix.net/production/avatars/original/3a87d87da572c063fdc104ed4fa630f347286114.jpg?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300")',
  },
  {
    name: 'Anna Sainsbury',
    profession: 'Co-founder & CEO at GeoComply',
    details: 'In 2011, Anna co-founded GeoComply, a tech unicorn providing state-of-the-art geolocation security solutions.',
    img: 'url("https://web-summit-avenger.imgix.net/production/avatars/original/e3fcac17a3b93a937e48fb3aa5784e34e5406f4b.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300")',
  },
  {
    name: 'Emmett Shear',
    profession: 'Co-founder & CEO at Twitch',
    details: 'Emmett is the founder and CEO of Twitch. Prior to launching Twitch in 2011, Emmett had co-founded its predecessor, Justin.tv, in 2007. Emmett holds a degree in computer science from Yale University, and was named in Forbes’ 30 Under 30 list in 2012.',
    img: 'url("https://web-summit-avenger.imgix.net/production/avatars/original/1a5f7b3427f500b70b2d2273a1964af9e7488cdf.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300")',
  },
];

const cardContainer = document.getElementById('speakersGrid');

speakers.forEach((speaker) => {
  const speakerCard = document.createElement('div');
  speakerCard.classList.add('speakerCard');
  const speakerImg = document.createElement('div');
  speakerImg.style.backgroundImage = speaker.img;
  speakerImg.classList.add('speakerCard--imageContainer');
  const speakerCardContaint = document.createElement('div');
  speakerCardContaint.classList.add('speakerCard--content');
  const speakerCardContaintTitle = document.createElement('h4');
  speakerCardContaintTitle.classList.add('speakerCard--content--title');
  speakerCardContaintTitle.innerText = speaker.name;
  const speakerCardContentTextOne = document.createElement('p');
  speakerCardContentTextOne.classList.add('speakerCard--content--textOne');
  speakerCardContentTextOne.innerText = speaker.profession;
  const borderLine2 = document.createElement('div');
  borderLine2.classList.add('borderLine2');
  const speakerCardContentTextTwo = document.createElement('p');
  speakerCardContentTextTwo.classList.add('speakerCard--content--textTwo');
  speakerCardContentTextTwo.innerText = speaker.details;

  speakerCardContaint.append(speakerCardContaintTitle);
  speakerCardContaint.append(speakerCardContentTextOne, borderLine2, speakerCardContentTextTwo);

  speakerCard.append(speakerImg, speakerCardContaint);
  cardContainer.append(speakerCard);
});
