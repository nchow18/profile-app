import React, { useState } from 'react';
import '../css/Portfolio.css';
import ProjectDetails from '../components/Project/ProjectDetails';
import Auth from '../utils/Auth';
import Projects from './Projects';

function Portfolio() {

  const [top] = useState([
    {
      name: 'King Seafood',
      link: 'https://king-seafood-2021-1.herokuapp.com/products',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/king.png',
      github: 'https://github.com/nchow18/king-seafood',
      label: 'king-port',
      details: 'A freshly designed web application for the company Kings Seafood 18, who required a seafood website that can allow customers to view, search and purchase their products, with options of either logging in or as a gueset for storing their items in a shopping cart',
      year: '2021'
    },
    {
      name: 'Envoy',
      link: 'https://envoy-guide.herokuapp.com/',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/envoy.png',
      github: 'https://github.com/Envoy-products',
      label: 'envoy-port',
      details: 'A web application that allows users to add and comment on environmental products in the market',
      year: '2021'
    },
    {
      name: 'Woof',
      link: 'https://woof-2021.herokuapp.com',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/woof.png',
      github: 'https://github.com/woof-board/woof',
      label: 'woof-port',
      details: 'A React App that is up to date with the latest trend of e-commerce product delivery.  Consumers can request for a dog walker to walk their dog, and in turn, a registered Dog Walker will be chosen based on their availibility and rating.  The top feature is live tracking of the Dog Walker using Mobile GPS',
      tech: 'test',
      year: '2021'
    }
  ])

  const [categories] = useState([
    {
      name: 'Day Scheduler',
      link: 'https://nchow18.github.io/work-day-scheduler/',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/scheduler.png',
      github: 'https://github.com/nchow18/work-day-scheduler',
      label: 'day-schedule',
      details: 'This App allows users to store their current day scheduling, with colour coordinated past, present and future schedules will be displayed based on urgency',
      tech: 'LocalStorage, API',
      year: '2021'
    },
    {
      name: 'Tech Blog',
      link: 'https://tech-blog-2021.herokuapp.com/',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/tech.png',
      github: 'https://github.com/nchow18/tech-blog',
      label: 'tech-port',
      details: 'A Tech Blog where users can share, create and update comments to users and forums and discuss about various matters',
      tech: 'Express-Handlebars, MySQL2, Sequelize, Bcrypt, Dotenv',
      year: '2021'
    },
    {
      name: 'Mortgages',
      link: 'https://nchow18.github.io/mortgages/',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/mortgage.png',
      github: 'https://github.com/nchow18/mortgages',
      label: 'mortgages-port',
      details: 'A Basic mortgage website that displays mortgage information and allows users to sign-up for updates',
      tech: 'Html, CSS',
      year: '2021'
    },
    {
      name: 'Screen Genius',
      link: 'https://screen-genius.github.io/',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/screen.png',
      github: 'https://screen-genius.github.io/',
      label: 'screen-port',
      details: 'A web based API that allows any user to add, remove and search for movie titles based on genres and ratings',
      tech: 'LocalStorage, Web API',
      year: '2021'
    },
    {
      name: 'Google Book Search',
      link: 'https://book-search-google-2021.herokuapp.com',
      img: '',
      github: 'https://github.com/nchow18/book-search',
      label: 'book-search',
      details: 'This is an app that works with REACT to show how elements are shown with using useState and it is also connected to server side GraphQL database. This displays the uses of Mutations and Queries between client/server and production/development stages. This site allows you to create users, log in, search for books, save and delete books in your profile.',
      tech: 'React, GraphQL Database',
      year: '2021'
    },
    {
      name: 'Travel Expense Tracker',
      link: 'https://travel-expense-2021.herokuapp.com',
      img: '',
      github: 'https://github.com/nchow18/travel-expense-tracker',
      label: 'expense-tracker',
      details: 'This is an app with the use of indexedDB and service workers, to help increase app functionality with or without internet on your mobile device for tracking your travel expenses.',
      tech: 'IndexedDB, Service Workers',
      year: '2021'
    },
    {
      name: 'Progressive Web Food App',
      link: 'https://nchow18.github.io/progressive-web-app/',
      img: '',
      github: 'https://github.com/nchow18/progressive-web-app/tree/develop',
      label: 'progressive-app',
      details: 'An App that is stored on your device as an App, that can be easily accessible without loading a browser independently',
      tech: 'Progressive Web Development, Service Worker',
      year: '2021'
    },
    {
      name: 'Pizza App',
      link: '',
      img: '',
      github: 'https://github.com/nchow18/pizza-hunt',
      label: 'pizza-app',
      details: 'A web application that helps a pizza business store, create and share pizza orders for purchasing',
      tech: 'MySQL Database',
      year: '2021'
    },
    {
      name: 'Task Master',
      link: 'https://nchow18.github.io/taskmaster-pro/',
      img: '',
      github: 'https://github.com/nchow18/taskmaster-pro',
      label: 'task-master',
      details: 'Web Application to help users locally store their tasks on a device',
      tech: 'LocalStorage',
      year: '2021'
    },
    {
      name: 'Note Taker',
      link: 'https://hidden-ravine-62234.herokuapp.com',
      img: '',
      github: 'https://github.com/nchow18/Note-Taker',
      label: 'note-taker',
      details: 'A Web Application to help store and display your current and past notes',
      tech: 'Express.js',
      year: '2021'
    },
    {
      name: 'Weather Dashboard',
      link: 'https://nchow18.github.io/weather-dashboard/',
      img: '',
      github: 'https://github.com/nchow18/weather-dashboard',
      label: 'weather-dashboard',
      details: 'A Web Application that searches and displays the 5 day weather forecast for the desired location',
      tech: 'Server Side API',
      year: '2021'
    },
    // {
    //   name: '',
    //   link: '',
    //   img: '',
    //   github: '',
    //   label: '',
    //   details: '',
    //   tech: '',
    // }
  ])

  const [currentProject, setCurrentProject] = useState(categories[0]);
  const [isPortfolioModal, setPortfolioModal] = useState(false)

  return (
    <>
      {isPortfolioModal ? (
        <section className="archive-container">
          <span onClick={() => {setPortfolioModal(false)}}><i className="fas fa-arrow-left"></i>Back to Portfolio</span>
          <span>Projects Archive</span>
          <span>A list of small accomplishments</span>
          <div className="archive-section">
            <b>Year</b>
            <b>Title</b>
            <b>Built With</b>
            <b>Link</b>
            {categories.map((category) => (
              <>
                <span className="year-text">{category.year}</span>
                <span className="name-text">{category.name}</span>
                <span className="tech-text">{category.tech}</span>
                <span>
                  <i className="far fa-folder-open" onClick={() =>{window.open(category.link)}}></i>
                  <i class="fab fa-github" onClick={() =>{window.open(category.github)}}></i>
                </span>
              </>
            ))}
          </div>
        </section>
      ) : (
        <section className="project-container">
          <div>
            <span>Featured Projects</span>
            {top.map((link) => (
              <div className="project-section">
                <img src={link.img} alt={link.name} onClick={() =>{window.open(link.link)}}/>
                <div>
                  <span><b>{link.name}</b></span>
                  <p>{link.details}</p>
                  <i className="far fa-folder-open" onClick={() =>{window.open(link.link)}}></i>
                  <i class="fab fa-github" onClick={() =>{window.open(link.github)}}></i>
                </div>
              </div>
            ))}
          </div>
          <div className="others-container">
            <span>Other Awesome Projects</span>
            <p onClick={() => {setPortfolioModal(true)}}>View Archive</p>
            <div className="other-projects">
              {categories.map((link) => (
              <div className="others-section">
                <div>
                  <i className="far fa-folder-open" onClick={() =>{window.open(link.link)}}></i>
                  <i class="fab fa-github" onClick={() =>{window.open(link.github)}}></i>
                </div>
                  <span><b>{link.name}</b></span>
                  <p>{link.details}</p>
                  <p>{link.tech}</p>
              </div>
              ))}
            </div>
          </div>
        </section>            
      )}
    </>

  );
}
export default Portfolio;
