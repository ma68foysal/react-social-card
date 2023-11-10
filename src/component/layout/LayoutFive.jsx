import React, { useContext, useEffect, useRef, useState } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { SocialContext } from '../context/SocialContext';
import DownloadButton from './DownloadBtn';

function LayoutFive({cardTheme}) {
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
    <div className="profile-cards">
    <div ref={containerRef} className=" card-1" style={{backgroundColor:cardTheme.bc, color:cardTheme.fc,border:`25px solid ${cardTheme.link}`}}>
    <div className="card-description">
      <h2 className="card-description-title">{name}</h2>
      <span className="card-description-profession">{bio}</span>
      
      <div className="card-description-social">
      
        {
            email &&
            <span className="card-description-social-follow">Follow!</span>
        }
        
        
        <ul>
          <li>
            {
                twitter &&
            
            <a 
            href={twitter}
            rel="noopener noreferrer"
            target="_blank"
            style={{ color:cardTheme.fc , boxShadow:`6px 6px 12px ${cardTheme.bc}, -6px -6px 12px ${cardTheme.link}`}}
        >
              <FaXTwitter/>
            </a>
}
          </li>
          <li>
            {
                linkedIn &&
            
            <a 
            href={linkedIn}
            rel="noopener noreferrer"
            style={{ color:cardTheme.fc , boxShadow:`6px 6px 12px ${cardTheme.bc}, -6px -6px 12px ${cardTheme.link}`}}
            target="_blank"
        >
              <BsLinkedin/>
            </a>
}
          </li>
          <li>
            {
                github &&
            
            <a 
            href={github}
            rel="noopener noreferrer"
            style={{ color:cardTheme.fc , boxShadow:`6px 6px 12px ${cardTheme.bc}, -6px -6px 12px ${cardTheme.link}`}}
            target="_blank"
        >
              <BsGithub/>
            </a>
}
          </li>
          <li>
            {
                website &&
            
            <a 
            href={website}
            rel="noopener noreferrer"
            style={{ color:cardTheme.fc , boxShadow:`6px 6px 12px ${cardTheme.bc}, -6px -6px 12px ${cardTheme.link}`}}
            target="_blank"
        >
              <CgWebsite/>
            </a>
}
          </li>
          <li>
            {
                email &&
            
            <a 
            href={`mailto:${email}`}
            rel="noopener noreferrer"
            style={{ color:cardTheme.fc , boxShadow:`6px 6px 12px ${cardTheme.bc}, -6px -6px 12px ${cardTheme.link}`}}
            target="_blank"
        >
              <AiOutlineMail/>
            </a>
}
          </li>
          
          
        </ul>
      </div>
    </div>
    <img
      src={picture}
      className="card-image"
    />
  </div>
  
</div>
<DownloadButton canvasRef={containerRef}/>
    </>
  )
}

export default LayoutFive