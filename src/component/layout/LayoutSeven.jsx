import React, { useContext, useEffect, useRef, useState } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { SocialContext } from '../context/SocialContext';
import DownloadButton from './DownloadBtn';

function LayoutSeven({cardTheme}) {
  const containerRef = useRef(null)

    const { social } = useContext(SocialContext);

    // Destructure the values from the object.
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
     <div className="cards-container">
  <div ref={containerRef} className="card card-one">
    <header style={{background:cardTheme.bc}}>
        <span className='span-1' style={{background:cardTheme.bc}}></span>
      <div className="avatar">
        <img
          src={picture}
        />
      </div>
      <span className='span-2' style={{background:cardTheme.bc}}></span>
    </header>
   { !name && <span className='spacer'/>}
    {name && <h3>{name}</h3>}
    <div className="desc">
      {bio}
    </div>
    <footer style={{background:cardTheme.bc,color:cardTheme.fc}} >
        <span className='span-3' style={{borderBottomColor:cardTheme.bc , color:cardTheme.fc}}></span>
        {github && 
         <a
         href={github}
        rel="noopener noreferrer"
        style={{ color: cardTheme.fc }}
        target="_blank"
         >
            <BsGithub className='fa'/>
          </a>}
         {linkedIn && 
         <a
         href={linkedIn}
        rel="noopener noreferrer"
        style={{ color: cardTheme.fc }}
        target="_blank"
         >
            <BsLinkedin className='fa'/>
          </a>}
         {website && 
         <a
         href={website}
        rel="noopener noreferrer"
        style={{ color: cardTheme.fc }}
        target="_blank"
         >
            <CgWebsite className='fa'/>
          </a>}
         {twitter && 
         <a
         href={twitter}
        rel="noopener noreferrer"
        style={{ color: cardTheme.fc }}
        target="_blank"
         >
            <FaXTwitter className='fa'/>
          </a>}
         {email && 
         <a
         href={`mailto:${email}`}
        rel="noopener noreferrer"
        style={{ color: cardTheme.fc }}
        target="_blank"
         >
            <AiOutlineMail className='fa'/>
          </a>}
    </footer>
  </div>
  
</div>
<DownloadButton canvasRef={containerRef} />
    </>
  )
}

export default LayoutSeven