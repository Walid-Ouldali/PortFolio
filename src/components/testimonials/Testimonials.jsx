import "./testimonials.scss";
import nassim from "../../images/nassim.png";
import { PlaylistPlayTwoTone } from "@material-ui/icons";
export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Yassine Ahddak",
      title: "Full Stack developper",
      img:
        "data:image/jpeg;base64,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",
      icon: "assets/linkedin.png",
      desc:
        "Passionné par l'informatique, notamment la programmation. Futur étudiant en cybersécurité.",
    },
    {
      id: 2,
      name: "Thomas Hong",
      title: "Developper",
      img:
        "https://firebasestorage.googleapis.com/v0/b/walid-ouldali.appspot.com/o/thomas.png?alt=media&token=8267d029-e07d-4443-898a-2da7fae083dc",
      icon: "assets/linkedin.png",
      desc:
        "Développeur Web et avocat du logiciel libre, je suis actuellement développeur en contrat d'alternance chez Easter-Eggs. ",
      featured: true,
    },
    {
      id: 3,
      name: "Nassim Mansour",
      title: " Machine Learning Engineer ",
      img:
        "https://firebasestorage.googleapis.com/v0/b/walid-ouldali.appspot.com/o/nassim.png?alt=media&token=c141196f-2dc4-4852-aedb-1ff18ada89b1",
      icon: "assets/linkedin.png",
      desc:
        "Curieux, motivé et passionné par l'informatique, le réseau, l'ingénierie système et même l'intelligence artificielle.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Collaborators</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
