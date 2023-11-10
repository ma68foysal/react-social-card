import React, { useContext, useEffect, useRef, useState } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { SocialContext } from '../context/SocialContext';
import DownloadButton from './DownloadBtn';
function LayoutThree({cardTheme}) {
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
    <div style={{width:"500px",padding:"100px"}}>
<div ref={containerRef} className="main-container">
  <div className="shape" style={{backgroundColor:cardTheme.bc,boxShadow:`0 2px 15px ${cardTheme.bc}`}}>
    <div className="image" >
        <img style={{border:`8px solid ${cardTheme.bc}`}} src={picture} alt="" />
    </div>
  </div>
  <h3>{name}</h3>
  <h3 className="title">{bio}</h3>
  <div className="icons">

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
    <DownloadButton canvasRef={containerRef} />
    </>

  )
}

export default LayoutThree