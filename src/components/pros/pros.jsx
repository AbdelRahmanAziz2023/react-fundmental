import "./pros.css";
import reactLogo from "../../assets/react.svg";
import pros1 from "../../assets/pros1.jpg";
import pros2 from "../../assets/pros2.png";
import pros3 from "../../assets/pros3.jpg";

export default function Pros() {
  let ProsList = [
    {
      src: pros3,
      title: "Virtual DOM for Performance",
      pros: [
        "React updates only the parts of the real DOM that change.",
        "This makes it faster and more efficient compared to direct DOM manipulation.",
      ],
    },
    {
      src: pros1,
      title: "Reusable and Declarative",
      pros: [
        "You declare what UI should look like, React handles the updates.",
        "Components can be reused across projects, reducing development time.",
      ],
    },

    {
      src: pros2,
      title: "Strong Ecosystem & Community",
      pros: [
        "Huge community → lots of libraries, tools, tutorials, job opportunities",
        "Backed by Meta (Facebook) and widely used by big companies.",
      ],
    },
  ];

  return (
    <div className="pros-container">
      <h2 className="section-title">Why Choose React?</h2>
      <div className="pros">
        {ProsList.map((item, index) => (
          <div className="pro" key={index}>
            <img
              src={item.src ? item.src : reactLogo}
              alt={item.title}
            />
            <h3>{item.title}</h3>
            <ul>
              {item.pros.map((pro, idx) => (
                <li key={idx}>{pro}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
