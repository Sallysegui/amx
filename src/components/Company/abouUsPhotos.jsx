import AboutUs1 from '../../assets/AboutUs1.png';
import AboutUs2 from '../../assets/Abouts2.jpg';
import AboutUs3 from '../../assets/AboutUs3.jpg';

const AboutUsPhoto = () =>{
    return(
        <div className="aboutUsPhoto">
            
           <img className = "aboutUs1" src={AboutUs1} alt="working on an airplane" />
           <img className = "aboutUs2" src={AboutUs2} alt="working on an airplane" />
           <img className = "aboutUs3" src={AboutUs3} alt="working on an airplane" />
        </div>
    )

}
export default AboutUsPhoto