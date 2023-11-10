import React, { useContext, useEffect, useRef, useState } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { SocialContext } from '../context/SocialContext';
import DownloadButton from './DownloadBtn';

function LayoutTwo({cardTheme}) {
  const containerRef = useRef(null)
   
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
    <div ref={containerRef} className='layout-two-box'>

      <div className="our-team">
        <div className="picture">
          <span className='span-4' style={{backgroundColor:cardTheme.bc}}></span>
          <img
            className="img-fluid"
            src={picture}
          />
          <span className='span-5' style={{backgroundColor:cardTheme.bc}}></span>
        </div>
        <div className="team-content">
          <h3 className="name">{name}</h3>
          <h4 className="title">{bio}</h4>
        </div>
        <div className="social" style={{backgroundColor:cardTheme.bc , color:cardTheme.fc}}>
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
        style={{ color: cardTheme.fc }}
        target="_blank"
         >
            <CgWebsite/>
          </a>}
         {twitter && 
         <a
         href={twitter}
        rel="noopener noreferrer"
        style={{ color: cardTheme.fc }}
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
    </div>
 <DownloadButton canvasRef={containerRef} />
    </>
  )
}

export default LayoutTwo