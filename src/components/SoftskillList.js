import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SoftSkillItem from './SoftskillItem';
import jsonData from '../data/data.json'; 
import curiosite from "../assets/curiositeLogo.png";
import organisation from "../assets/organisationLogo.png";
import autodidacte from "../assets/autodidacteLogo.png";
import diplomate from "../assets/diplomateLogo.png";
import versatile from "../assets/versatileLogo.png";

function SoftSkillsList() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      effect='coverflow'
      coverflowEffect={{
        rotate: 60,
        slideShadows: false,
        scale :0.9
      }}
      loop={true}
      pagination={{ clickable: true}}
      autoplay={{ delay: 7500,
        pauseOnMouseEnter :true  }}
      className="softskills-list" 
    >
      {jsonData.francais.softskills.map(skill => (
        <SwiperSlide key={skill.name}>
          <SoftSkillItem
            logo={getLogo(skill.name)}
            name={skill.name}
            content={skill.content}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function getLogo(skillName) {
    switch (skillName) {
      case 'Curiosité':
        return curiosite;
      case 'Organisation':
        return organisation;
      case 'Autodidacte':
        return autodidacte;
      case 'Diplomate':
        return diplomate;
      case 'Polyvalent':
        return versatile;
      default:
        return null;
    }
  }
export default SoftSkillsList;