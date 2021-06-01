import React, { useState } from 'react';
import '../css/Portfolio.css';
import ProjectDetails from '../components/Project/ProjectDetails';
import Auth from '../utils/Auth';

function Portfolio() {

  const [categories] = useState([
    {
      name: 'Day Scheduler',
      link: 'https://nchow18.github.io/work-day-scheduler/',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/main/src/assets/img/0.png',
      github: 'https://github.com/nchow18/work-day-scheduler',
      label: 'day-schedule',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed feugiat erat. Praesent in dignissim justo, posuere scelerisque urna. Morbi accumsan lorem at condimentum facilisis. Vestibulum dictum dolor eget consectetur iaculis. Cras at nunc vel metus scelerisque rutrum sit amet sed nulla. Aliquam eu dolor eget eros convallis rutrum. Maecenas blandit dui ex, a fringilla risus fringilla sagittis.'
    },
    {
      name: 'Envoy',
      link: 'https://envoy-guide.herokuapp.com/',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/main/src/assets/img/1.png',
      github: 'https://github.com/Envoy-products',
      label: 'envoy-port',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed feugiat erat. Praesent in dignissim justo, posuere scelerisque urna. Morbi accumsan lorem at condimentum facilisis. Vestibulum dictum dolor eget consectetur iaculis. Cras at nunc vel metus scelerisque rutrum sit amet sed nulla. Aliquam eu dolor eget eros convallis rutrum. Maecenas blandit dui ex, a fringilla risus fringilla sagittis.'
    },
    {
      name: 'King Seafood',
      link: 'https://king-seafood-2021-1.herokuapp.com/products',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/2.png',
      github: 'https://github.com/nchow18/king-seafood',
      label: 'king-port',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed feugiat erat. Praesent in dignissim justo, posuere scelerisque urna. Morbi accumsan lorem at condimentum facilisis. Vestibulum dictum dolor eget consectetur iaculis. Cras at nunc vel metus scelerisque rutrum sit amet sed nulla. Aliquam eu dolor eget eros convallis rutrum. Maecenas blandit dui ex, a fringilla risus fringilla sagittis.'
    },
    {
      name: 'Tech Blog',
      link: 'https://tech-blog-2021.herokuapp.com/',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/3.png',
      github: 'https://github.com/nchow18/tech-blog',
      label: 'tech-port',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed feugiat erat. Praesent in dignissim justo, posuere scelerisque urna. Morbi accumsan lorem at condimentum facilisis. Vestibulum dictum dolor eget consectetur iaculis. Cras at nunc vel metus scelerisque rutrum sit amet sed nulla. Aliquam eu dolor eget eros convallis rutrum. Maecenas blandit dui ex, a fringilla risus fringilla sagittis.'
    },
    {
      name: 'Mortgages',
      link: 'https://nchow18.github.io/mortgages/',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/4.png',
      github: 'https://github.com/nchow18/mortgages',
      label: 'mortgages-port',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed feugiat erat. Praesent in dignissim justo, posuere scelerisque urna. Morbi accumsan lorem at condimentum facilisis. Vestibulum dictum dolor eget consectetur iaculis. Cras at nunc vel metus scelerisque rutrum sit amet sed nulla. Aliquam eu dolor eget eros convallis rutrum. Maecenas blandit dui ex, a fringilla risus fringilla sagittis.'
    },
    {
      name: 'Screen Genius',
      link: 'https://screen-genius.github.io/',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/5.png',
      github: '',
      label: 'screen-port',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed feugiat erat. Praesent in dignissim justo, posuere scelerisque urna. Morbi accumsan lorem at condimentum facilisis. Vestibulum dictum dolor eget consectetur iaculis. Cras at nunc vel metus scelerisque rutrum sit amet sed nulla. Aliquam eu dolor eget eros convallis rutrum. Maecenas blandit dui ex, a fringilla risus fringilla sagittis.'
    },
    {
      name: 'Woof',
      link: 'https://woof-2021.herokuapp.com',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/6.png',
      github: 'https://github.com/woof-board/woof',
      label: 'woof-port',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed feugiat erat. Praesent in dignissim justo, posuere scelerisque urna. Morbi accumsan lorem at condimentum facilisis. Vestibulum dictum dolor eget consectetur iaculis. Cras at nunc vel metus scelerisque rutrum sit amet sed nulla. Aliquam eu dolor eget eros convallis rutrum. Maecenas blandit dui ex, a fringilla risus fringilla sagittis.'
    }
  ])

  const [currentProject, setCurrentProject] = useState(categories[0]);

  return (
    <section>
      <div className="page-format">
        {categories.map((link) => (
          <div className="input-display"><input key={link.name} type="checkbox" id={link.label} /></div>
        ))}
        <div className="page-content portfolio-content">
        <input type="checkbox" id="portfolio-list" />
          <div className="portfolio-menu">
            <div className="portfolio-dropdown">
              {categories.map((link) => (
                <label key={link.label} for={link.label} onClick={() => (setCurrentProject(link))}><span>{link.name}</span></label>
              ))}
            </div>
            <label htmlFor="portfolio-list"><i class="fas fa-cookie-bite portfolio-icon"></i></label>
          </div>
          <div className="portfolio-container">
              <ProjectDetails 
                categories={categories}
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
                 />
        </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
