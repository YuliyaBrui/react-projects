import '../../assets/styles/card.css';
import { DescriptionCard } from './card-description';
import { RatingCard } from './card-rating';

export interface informCards {
  id: number;
  title: string;
  author: string;
  date: string;
  body: string;
  image: string;
  like: number;
  review: number;
  comments: number;
}
export const cards: informCards[] = [
  {
    id: 1,
    title: 'Explore Göttingen, Lower Saxony’s Heartwarming Small City',
    author: 'Anjel Abriani',
    date: '20.06.2021',
    body: 'Göttingen is a university city with a smell of history, located in Lower Saxony, Germany.  While roaming in the streets of Göttingen, you will come across pigeons having chocolate dropped on the pavements. You will see that they have gotten used to humans so much that they won’t fly away. The city also offers lots of green colour, fresh air, and definitely fewer cars, and no traffic congestion. A humble city which will allow you to enjoy life in its simplest and purest forms.',
    image: './img/1.jpg',
    like: 123,
    review: 11256,
    comments: 12,
  },
  {
    id: 2,
    title: 'Take a Trip to One of Africa’s Vast Desert Countries in Namibia',
    author: 'Yuliya Farsender',
    body: 'Before we start the fun part of this travel guide. I have found a few things you might find helpful in preparation for your Namibian adventure. I shall try to keep these sections short and to the point but there is a lot to know about visiting any country. So I urge you to do your own in depth research wherever you choose to go. Preparation is key to a great vacation. ',
    date: '17.04.2021',
    image: './img/2.jpg',
    like: 123,
    review: 1156,
    comments: 6,
  },

  {
    id: 4,
    title: 'Fascinating Cultural Rituals and Customs in Indonesia',
    author: 'Anjel Abriani',
    date: '20.03.2021',
    body: 'Indonesian culture is founded on basic etiquette principles that inform many traditional rituals. Hierarchical relationships are respected and maintained, with those showing status, power and age preserving superiority in this hierarchy.',
    image: './img/4.jpg',
    like: 123,
    review: 11256,
    comments: 12,
  },
  {
    id: 5,
    title: 'Experience and Embrace Earth’s Edge Around the World',
    author: 'Abdul Mehendi',
    date: '02.02.2021',
    body: 'Travelling is one of the greatest things we can do as humans. We get to experience everything we know from pictures, movies, or songs in real life. And what greater thing than extraordinary moments, breathtaking views, or deeply-felt feelings you will never ever forget? There are many places you can visit where it looks like you’re at the edge of the Earth. And it doesn’t only look like that, it feels like that too. The tingling sensation of standing on a spot makes it seem like the entire world is behind you and you’re looking into the great unknown.',
    image: './img/5.jpg',
    like: 156,
    review: 12356,
    comments: 32,
  },

  {
    id: 7,
    title: 'Yoga Destinations Around the World for the Yoga Lover',
    author: 'Anjel Abriani',
    date: '20.06.2020',
    body: 'It is International Yoga Day and we cannot get enough of the ancient practice.  Yoga is a practice that involves a set of exercises aiming to awaken and refresh a person’s mental, physical and spiritual abilities. It is an effective method to practice when burnout and to relieve stress and humdrum. Yoga is practiced across the globe and has become one of the popular methods of awakening and rejuvenating of late. There are many Yoga destinations across the world that are regularly thronged by Yoga-loving communities and people from different parts of the world.',
    image: './img/7.jpg',
    like: 123,
    review: 11256,
    comments: 37,
  },
  {
    id: 8,
    title: 'Natural Wonders Worldwide You Have to See To Believe In',
    author: 'Izabell Asmont',
    date: '18.06.2019',
    body: 'The world around us is full of magic. It’s everywhere you look, whether it’s love, architecture, human connection, or whatever you define as magic. But the kind of magic that is truly extraordinary is natural magic, natural wonder. It’s amazing to think that something so extraordinary just naturally exists, nobody had to do anything. No human created it, it created itself.',
    image: './img/8.jpg',
    like: 278,
    review: 14256,
    comments: 56,
  },

  {
    id: 10,
    title: 'Weekend Getaway Destinations in India',
    author: 'Anjel Abriani',
    date: '20.04.2019',
    body: 'Planning to go for a holiday for a full week? There are many destinations and tourist places in India which provide luxurious facilities for tourists to enjoy throughout the full week. Be it the beaches or hills, there are numerous destinations where revellers can head to enjoy themselves to their full. Let us look at some of the best weekend getaway destinations in India include the following.',
    image: './img/10.jpg',
    like: 123,
    review: 15786,
    comments: 142,
  },
  {
    id: 11,
    title: 'Five Ancient Temples of Egypt',
    author: 'Saniyya Razack ',
    date: '05.03.2019',
    body: 'Temples have always been a source of ancient history. Egypt is a reservoir of ancient temples, and they take us back through centuries of kings, queens, battles, glory and Egyptian gods. The building of temples dedicated to gods or sometimes themselves were an integral part of their reign and the nation.',
    image: './img/11.jpg',
    like: 560,
    review: 23256,
    comments: 792,
  },
];
export const CardsField = () => (
  <div className="cards-field">
    {cards.map((card) => (
      <div className="card-container">
        <div className="card" key={card.id}>
          <div
            className="card__img"
            style={{ backgroundImage: `url(${card.image})` }}
          />
          <div className="card_info">
            <DescriptionCard
              title={card.title}
              date={card.date}
              author={card.author}
              body={card.body}
            />
            <RatingCard
              like={card.like}
              review={card.review}
              comments={card.comments}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
);
