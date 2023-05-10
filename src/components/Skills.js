import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> I have a diverse skillset and experience in various front-end and back-end technologies.<br></br> I look forward to deepening my understanding of these technolgies, and learning new ones along the way.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="python" />
                                <h5>Python 3</h5>
                            <div className="item py-5">
                                <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            </div>
                            <div className="item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIaSlhZDR_gqZfeam460LA8wPEg_UzfIMffg&usqp=CAU" alt="Image" />
                                <h5>MongoDB</h5>
                            <div className="item py-5">
                                <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            </div>
                            <div className="item">
                                <img src="https://camo.githubusercontent.com/abd19bd0c5030c8d874ed7073f1815d777004451d5967c447386840b80624569/68747470733a2f2f63646e2e61757468302e636f6d2f626c6f672f72656163742d6a732f72656163742e706e67" alt="Image" />
                                <h5>React JS</h5>
                            <div className="item py-5">
                                <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="Image" />
                                <h5>Redux Toolkit</h5>
                            </div></div>
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="Image" />
                                <h5>HTML 5</h5>
                            <div className="item py-5">
                                <img src="https://icon-library.com/images/css3-icon/css3-icon-28.jpg" alt="Image" />
                                <h5>CSS 3</h5>
                            </div></div>
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="Image" />
                                <h5>Tailwind CSS</h5>
                            <div className="item py-5">
                                <img src="https://www.svgrepo.com/show/353657/django-icon.svg" alt="Image" />
                                <h5>Django 4</h5>
                            </div></div>
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" alt="Image" />
                                <h5>Git</h5>
                            <div className="item py-5">
                                <img src="https://daisyui.com/logos/svelte.svg" alt="Image" />
                                <h5>Daisy UI</h5>
                            </div></div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
