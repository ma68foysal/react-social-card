import React, { useContext, useEffect, useRef, useState } from 'react'
import { SocialContext } from '../context/SocialContext';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import DownloadButton from './DownloadBtn';

function LayoutSix({cardTheme}) {
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
    <div ref={containerRef} className="layout-six" data-state="#about">
  <div className="card-header">
    <div
      className="card-cover text-center"
      style={{
        
        background: `linear-gradient(${cardTheme.bc}, ${cardTheme.fc} )`
      }}
    />
    <img
      className="card-avatar"
      src={picture}
    />
    <h1 className="card-fullname">{name}</h1>
    <h3 className="card-jobtitle">{bio}</h3>
  </div>
  <div className="card-main">
    <div className="card-section is-active" id="about">
      <div className="card-social">
      {github && 
         <a
         href={github}
        rel="noopener noreferrer"
        style={{ color: "#000000" }}
        target="_blank"
         >
            <BsGithub/>
          </a>}
         {linkedIn && 
         <a
         href={linkedIn}
        rel="noopener noreferrer"
        style={{ color: "#000000" }}
        target="_blank"
         >
            <BsLinkedin/>
          </a>}
         {website && 
         <a
         href={website}
        rel="noopener noreferrer"
        style={{ color: "#000000" }}
        target="_blank"
         >
            <CgWebsite/>
          </a>}
         {twitter && 
         <a
         href={twitter}
        rel="noopener noreferrer"
        style={{ color: "#000000" }}
        target="_blank"
         >
            <FaXTwitter/>
          </a>}
         {email && 
         <a
         href={`mailto:${email}`}
        rel="noopener noreferrer"
        style={{ color: "#000000" }}
        target="_blank"
         >
            <AiOutlineMail/>
          </a>}
      </div>
    </div>
    
    
    
  </div>
</div>
<DownloadButton canvasRef={containerRef} />
    </>
  )
}

export default LayoutSix