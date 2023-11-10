import { useState, useContext, useEffect } from 'react';
import { SocialContext } from './context/SocialContext';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import Default from './layout/Default';
import Filters from './layout/Filters';
import LayouOne from './layout/LayouOne';
import LayoutTwo from './layout/LayoutTwo';
import LayoutThree from './layout/LayoutThree';
import LayoutFour from './layout/LayoutFour';
import LayoutFive from './layout/LayoutFive';
import LayoutSix from './layout/LayoutSix';
import LayoutSeven from './layout/LayoutSeven';
import LayoutEight from './layout/LayoutEight';

const CardDetails = ({cardTheme,layoutObj}) => {
  const { social } = useContext(SocialContext);
  const {photo} = social;
  const {layoutOne,layoutTwo,defult,layoutThree,layoutFour,layoutFive,layoutSix,layoutSeven,layoutEight,}=layoutObj
  const [picture, setPicture] = useState();
  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.readAsDataURL(photo[0]);
      reader.onload = () => {
        setPicture(reader.result);
      };
    }
  }, [photo]);

  

  return (
    <div className="card-details">
      
      {defult === true &&  <Default cardTheme={cardTheme} picture={picture}/> }
     { layoutOne  === true && <LayouOne cardTheme={cardTheme}/> }
    { layoutTwo === true && <LayoutTwo cardTheme={cardTheme}/>}
    { layoutThree === true && <LayoutThree cardTheme={cardTheme}/>}
    { layoutFour === true && <LayoutFour cardTheme={cardTheme}/>}
    { layoutFive.status === true && <LayoutFive cardTheme={cardTheme}/>}
    { layoutSix === true && <LayoutSix cardTheme={cardTheme}/>}
    { layoutSeven === true && <LayoutSeven cardTheme={cardTheme}/>}
    { layoutEight === true && <LayoutEight cardTheme={cardTheme}/>}

    </div>
  );
};

export default CardDetails;
