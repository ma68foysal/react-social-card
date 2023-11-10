import React, { useContext, useEffect, useRef, useState } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { SocialContext } from '../context/SocialContext';
import DownloadButton from './DownloadBtn';

function LayoutFour({cardTheme}) {
      const containerRef=useRef(null)
  const { social } = useContext(SocialContext);

  const { name, email, photo, bio, website, twitter, linkedIn, github } = social;
  const [picture, setPicture] = useState();
  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.readAsDataURL(photo[0]);
      reader.onload = () => {
        setPicture(reader.result);
      };
    }
  }, [photo])
  return (
    <>
    <div ref={containerRef} className="box-container" style={{backgroundColor:cardTheme.bc,color:cardTheme.fc}}>
     <div className="avatar-flip">
    <img
      src={picture}
      height={150}
      width={150}
    />
    
  </div>
  <h2 >{name}</h2>
  <h4>{bio}</h4>
  <div className="icons">

    {github && 
         <a
         href={github}
        rel="noopener noreferrer"
        style={{ color: cardTheme.fc }}
        target="_blank"
         >
            <BsGithub/>
          </a>}
         {linkedIn && 
         <a
         href={linkedIn}
        rel="noopener noreferrer"
        style={{ color: cardTheme.fc }}
        target="_blank"
         >
            <BsLinkedin/>
          </a>}
         {website && 
         <a
         href={website}
        rel="noopener noreferrer"
        style={{ color:cardTheme.fc }}
        target="_blank"
         >
            <CgWebsite/>
          </a>}
         {twitter && 
         <a
         href={twitter}
        rel="noopener noreferrer"
        style={{ color:cardTheme.fc }}
        target="_blank"
         >
            <FaXTwitter/>
          </a>}
         {email && 
         <a
         href={`mailto:${email}`}
        rel="noopener noreferrer"
        style={{ color: cardTheme.fc }}
        target="_blank"
         >
            <AiOutlineMail/>
          </a>}
  </div>
</div>
 
 <DownloadButton canvasRef={containerRef}/>
    </>
  )
}

export default LayoutFour