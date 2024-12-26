import { GiCheckMark } from "react-icons/gi";
import "./services.css";

const Services = () => {
  return (
    <section>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services">
        { data.map(({ id, title, content }) => {
         return (
          <article key={id} className="service__container">
            <div className="service__title">
            <h2>{title}</h2>
            </div>
            
            <ul className="service__specs">
              {content.map(({ id, title }) => {
                return (
                  <li key={id} className="service__spec">
                    <GiCheckMark className="service__spec-icon" />
                    <p className="service-spec-title">{title}</p>
                  </li>
                );
              })}
            </ul>
          </article>
         )
        })}
      </div>
    </section>
  );
};

export default Services;

const data = [
  {
    id: 1,
    title: "UI/UX Design",
    content: [
      {
        id: 1,
        title: "Mobile App Design",
      },
      {
        id: 2,
        title: "Brand & Visual Design",
      },
      {
        id: 3,
        title: "Logo Design",
      },
      {
        id: 4,
        title: "Interaction Design",
      },
    ],
  },
  {
    id: 2,
    title: "Web Development",
    content: [
      {
        id: 1,
        title: "eCommerce Web Development",
      },
      {
        id: 2,
        title: "Custom Website Development",
      },
      {
        id: 3,
        title: "Web App Development",
      },
      {
        id: 4,
        title: "MVP Development",
      },
      {
        id: 5,
        title: "PWA Development",
      },
    ],
  },
  {
    id: 3,
    title: "Content Creation",
    content: [
      {
        id: 1,
        title: "Image rendering",
      },
      {
        id: 2,
        title: "Copyright and rewrite",
      },
      {
        id: 3,
        title: "Creation of infographics",
      },
      {
        id: 4,
        title: "Animation creation",
      },
    ],
  },
];
