import React, { useState } from 'react';
import Photo0 from '../../assets/img/0.png';
import Photo1 from '../../assets/img/1.png';
import Photo2 from '../../assets/img/2.png';
import Photo3 from '../../assets/img/3.png';
import Photo4 from '../../assets/img/4.png';
import Photo5 from '../../assets/img/5.png';

function Portfolio() {

  const [categories] = useState([
    {
      name: 'Day Scheduler',
      link: 'https://nchow18.github.io/work-day-scheduler/',
      img: Photo0
    },
    {
      name: 'Envoy',
      link: 'https://envoy-guide.herokuapp.com/',
      img: Photo1
    },
    {
      name: 'King Seafood',
      link: 'https://nchow18.github.io/king-seafood/',
      img: Photo2
    },
    {
      name: 'Tech Blog',
      link: 'https://tech-blog-2021.herokuapp.com/',
      img: Photo3
    },
    {
      name: 'Mortgages',
      link: 'https://nchow18.github.io/mortgages/',
      img: Photo4
    },
    {
      name: 'Screen Genius',
      link: 'https://screen-genius.github.io/',
      img: Photo5
    }
  ])

  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="flex-container">
        {categories.map((category, i) => (
          <div className="img-container">
            <li><a href={category.link}>{category.name}</a></li>
            <img className="img-size" alt={category.name} src={category.img} />
          </div>
        ))}
      </div>

    </section>
  );
}
export default Portfolio;
