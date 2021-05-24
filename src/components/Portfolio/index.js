import React, { useState } from 'react';
import Photo0 from '../../assets/img/0.png';
import Photo1 from '../../assets/img/1.png';
import Photo2 from '../../assets/img/2.png';
import Photo3 from '../../assets/img/3.png';
import Photo4 from '../../assets/img/4.png';
import Photo5 from '../../assets/img/5.png';
import Photo6 from '../../assets/img/6.png';

function Portfolio() {

  const [categories] = useState([
    {
      name: 'Day Scheduler',
      link: 'https://nchow18.github.io/work-day-scheduler/',
      img: Photo0,
      github: 'https://github.com/nchow18/work-day-scheduler',
    },
    {
      name: 'Envoy',
      link: 'https://envoy-guide.herokuapp.com/',
      img: Photo1,
      github: 'https://github.com/Envoy-products',
    },
    {
      name: 'King Seafood',
      link: 'https://nchow18.github.io/king-seafood/',
      img: Photo2,
      github: 'https://github.com/nchow18/king-seafood',
    },
    {
      name: 'Tech Blog',
      link: 'https://tech-blog-2021.herokuapp.com/',
      img: Photo3,
      github: 'https://github.com/nchow18/tech-blog',
    },
    {
      name: 'Mortgages',
      link: 'https://nchow18.github.io/mortgages/',
      img: Photo4,
      github: 'https://github.com/nchow18/mortgages',
    },
    {
      name: 'Screen Genius',
      link: 'https://screen-genius.github.io/',
      img: Photo5,
      github: '',
    },
    {
      name: 'Woof',
      link: 'https://woof-2021.herokuapp.com',
      img: Photo6,
      github: 'https://github.com/woof-board/woof',
    }
  ])

  return (
    <section id="portfolio">
      <div className="page-blur">
          <div className="page-display-flex">
          <h1>Portfolio</h1>
          <div className="flex-container">
            {categories.map((category, i) => (
              <div className="img-container">
                <li><a href={category.github} className="font-white">{category.name} - GitHub Link</a></li>
                <a href={category.link}><img className="img-size" alt={category.name} src={category.img} /></a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="background-img2"></div>
    </section>
  );
}
export default Portfolio;
