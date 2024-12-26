import { IoIosCheckmarkCircle } from 'react-icons/io';
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experiences">
        {data.map(({ id, title, content }) => {
          return (
            <article key={id} className="experience__container">
              <h2 className="experience__title">{title}</h2>
              <ul className="experience__specs">
                { content.map(({ id, title, specs }) => {
                  return (
                    <li key={id} className='experience__spec'>
                      <IoIosCheckmarkCircle className='spec__icon' />
                      <p className="spec__title">{title}</p>
                      <p className="spec__level">{specs}</p>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;

const data = [
  {
    id: 1,
    title: "Frontend Development",
    content: [
      {
        id: 1,
        title: "HTML",
        specs: "Experienced",
      },
      {
        id: 2,
        title: "JavaScript",
        specs: "Experienced",
      },
      {
        id: 3,
        title: "Tailwind",
        specs: "Experienced",
      },
      {
        id: 4,
        title: "CSS",
        specs: "Intermediate",
      },
      {
        id: 5,
        title: "Bootstrap",
        specs: "Experienced",
      },
      {
        id: 6,
        title: "React",
        specs: "Experienced",
      },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    content: [
      {
        id: 1,
        title: "Node JS",
        specs: "Intermediate",
      },
      {
        id: 2,
        title: "PHP",
        specs: "Basic",
      },
      {
        id: 3,
        title: "Python",
        specs: "Intermediate",
      },
      {
        id: 4,
        title: "MongoDB",
        specs: "Experienced",
      },
      {
        id: 5,
        title: "MySQL",
        specs: "Intermediate",
      },
    ],
  },
];
