// import Button from "../common/Button/Button";
import classes from "./About.module.css";
import about from "./about.svg";

const About = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            <h3 className={classes.heading}>About</h3>
            <h2 className={classes.heading1}>Moonstone</h2>
            <p className={classes.para}>
              The annual college festival, Moonstone, is eagerly awaited by the students. The festival celebrates the talent, creativity, and enthusiasm of the students. The students come together to exhibit their diverse skills and passions, creating an unforgettable experience for everyone involved.
            </p>

            {/* <p className={classes.para}>
            Spectacular talent stretches boundaries to inspire the participating
            students and the rapt audience alike. A gigantic range of events
            from advanced robotics challenges to entrepreneurship hunts
            promising to zap up the cranial indices of participants. Skill,
            genius and knowledge trading infused with a handful of fun, and a
            titanic prize money sum of above half a million rupees to make Karma
            one of the most unique tech carnivals of the country.
          </p> */}
            {/* <div className={classes.btn}>
            <Button label="Explore" />
          </div> */}
          </div>

          <div className={classes.composition}>
            <img className={classes.images} src={"https://www.medicaps.ac.in/resources/img/For-Students--img/Life@MU/1.%20Banner_11zon.jpg"} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
