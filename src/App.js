import React from "react";
import { useState } from "react";
import "./styles.css";

const books = {
  Fiction: [
    {
      title: "The Lord of the rings",
      rating: "5/5",
      buy:
        "https://www.amazon.in/Lord-Rings-J-R-R-Tolkien/dp/0261102389/ref=sr_1_1?dchild=1&keywords=lord+of+the+rings+series&qid=1608019341&s=books&sr=1-1",
      desc:
        "The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins, who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.",
      img: "https://images-na.ssl-images-amazon.com/images/I/81zqkBcTTCL.jpg"
    },
    {
      title: "Harry Potter Series",
      rating: "4.5/5",
      buy:
        "https://www.amazon.in/Harry-Potter-ChildrenS-Paperback-Boxed/dp/1408856778/ref=sr_1_3?dchild=1&keywords=harry+potter+series&qid=1608019413&s=books&sr=1-3",
      desc:
        "As his eleventh birthday arrives, the time comes for Harry Potter to discover the truth about his magical beginnings – and embark on the enthralling, unmissable adventure that will lead him to Hogwarts School of Witchcraft and Wizardry, his true friends Ron Weasley and Hermione Granger, powerful secrets and a destiny he cannot avoid ...",
      img:
        "https://cdn.vox-cdn.com/thumbor/X1iZwGtOBjHqKt36tEeHWUWFtjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19289131/harry_potter.jpg"
    },
    {
      title: "Hunger Games series",
      rating: "3.5/5",
      buy:
        "https://www.amazon.in/Hunger-Games-Anniversary-Boxed-Books/dp/2018080369/ref=sr_1_1?dchild=1&keywords=hunger+games+series&qid=1608019454&s=books&sr=1-1",
      desc:
        "The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen regards it as a death sentence when she steps forward to take her sister's place in the Games. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weigh survival against humanity and life against love.",
      img:
        "https://upload.wikimedia.org/wikipedia/en/3/39/The_Hunger_Games_cover.jpg"
    }
  ],
  NonFiction: [
    {
      title: "Ikigai",
      rating: "4.5/5",
      buy:
        "https://www.amazon.in/Ikigai-H%C3%A9ctor-Garc%C3%ADa/dp/178633089X/ref=sr_1_1?dchild=1&keywords=ikigai&qid=1608019537&s=books&sr=1-1",
      desc:
        "We all have an ikigai. It's the Japanese word for ‘a reason to live’ or ‘a reason to jump out of bed in the morning’. It’s the place where your needs, desires, ambitions, and satisfaction meet. A place of balance. Small wonder that finding your ikigai is closely linked to living longer. Finding your ikigai is easier than you might think. This book will help you work out what your own ikigai really is, and equip you to change your life. You have a purpose in this world: your skills, your interests, your desires and your history have made you the perfect candidate for something. All you have to do is find it.",
      img: "https://images-na.ssl-images-amazon.com/images/I/71tbalAHYCL.jpg"
    },
    {
      title: "The subtle art of not giving a f*ck",
      rating: "4/5",
      buy:
        "https://www.amazon.in/Subtle-Art-Not-Giving/dp/0062641549/ref=sr_1_3?crid=295WAW9PZRBAA&dchild=1&keywords=the+subtle+art+of+not+giving+a+fck&qid=1608019569&s=books&sprefix=the+subtle%2Cstripbooks%2C342&sr=1-3",
      desc:
        "There are only so many things we can give a damn about so we need to figure out which ones really matter, Manson makes clear. While money is nice, caring about what you do with your life is better, because true wealth is about experience. A much-needed grab-you-by-the-shoulders-and-look-you-in the-eye moment of real talk, filled with entertaining stories and profane, ruthless humor, The Subtle Art of Not Giving a F**k is a refreshing slap for a generation to help them truly lead contented, grounded lives.",
      img: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg"
    },
    {
      title: "The Monk who sold his ferrari",
      rating: "3.5/5",
      buy:
        "https://www.amazon.in/Monk-Who-Sold-His-Ferrari/dp/817992162X/ref=sr_1_3?crid=24DU0S13CHGM1&dchild=1&keywords=the+monk+who+sold+his+ferrari&qid=1608019654&s=books&sprefix=the+monk+who+sold+his+ferrari%2Cstripbooks%2C367&sr=1-3",
      desc:
        "In the book, the reader goes through a spiritual journey and into a very old culture that has gathered much wisdom over the millennia. The book advocates about how to live happily, think deep and rightly, value time and relationships, be more disciplined, follow the heart’s call and live every moment of the life.Written in simple words, the book has turned out to be a bestseller and is more than just an endearing story. Through storytelling, Robin Sharma showcases the miracles and wonders of living a fulfilling life. In the process, the book introduces readers to enlightening yet simple principles that vouch to make life better, happier and more meaningful.",
      img: "https://images-na.ssl-images-amazon.com/images/I/61Iz2yy2CKL.jpg"
    }
  ]
};

export default function App() {
  const booksDict = Object.keys(books);
  const [book, setBooks] = useState("Fiction");
  function bookInputHandler(bookCategory) {
    setBooks(bookCategory);
  }
  return (
    <div className="App">
      <h1 className="heading">Book Recommendations</h1>
      <div>
        {booksDict.map((bookCategory) => (
          <button
            className="btn-book"
            key={bookCategory}
            onClick={() => bookInputHandler(bookCategory)}
          >
            {bookCategory}
          </button>
        ))}
      </div>
      <div>
        {Object.values(books[book]).map((b) => {
          var title = b.title;
          var rating = b.rating;
          var desc = b.desc;
          var buy = b.buy;
          var img = b.img;
          return (
            <div className="main">
              <div className="container">
                <div className="container-card">
                  <h2 className="title">{title}</h2>
                  <img src={img} alt={title} className="book-img" />
                  <p className="desc">{desc}</p>
                  <h3 className="rating">
                    Rating: {rating}
                    <a href={buy} className="link">
                      Buy
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
