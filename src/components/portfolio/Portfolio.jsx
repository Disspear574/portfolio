import './portfolio.css'

import P1 from '../../assets/portfolio1.jpg'
import P2 from '../../assets/portfolio2.jpg'
import P3 from '../../assets/portfolio3.jpg'
import P4 from '../../assets/portfolio4.jpg'
import P5 from '../../assets/portfolio5.png'
import P6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
 return (
    <section>
      <h5>My Resent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
         {
            data.map(({id, image, title, github, demo}) => {
               return (
                  <article key={id} className="portfolio__item">
                     <div className="portfolio__item-img">
                        <img src={image} alt={title} />
                     </div>
                     <h3>{title}</h3>
                     <div className="portfolio__item-cta">
                        <a href={github} className="btn" target='_blank' rel='noreferrer'>Github</a>
                        <a href={demo} className="btn btn-primary" target='_blank' rel='noreferrer'>Demo</a>
                     </div>
                     </article>
               )
            })
         }
      </div>
    </section>
 )
}

export default Portfolio


const data = [
   {
      id: 1,
      image: P1,
      title: 'Brand & Visual Design',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
   },
   {
      id: 2,
      image: P2,
      title: 'Animation creation',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
   },
   {
      id: 3,
      image: P3,
      title: 'Interaction Design',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
   },
   {
      id: 4,
      image: P4,
      title: 'Mobile App Design',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
   },
   {
      id: 5,
      image: P5,
      title: 'Creation of infographics',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
   },
   {
      id: 6,
      image: P6,
      title: 'Web App development',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
   },
]