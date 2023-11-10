import { useState, useContext, useEffect, useRef } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { SocialContext } from '../context/SocialContext';
import DownloadButton from './DownloadBtn';

function LayoutEight({cardTheme}) {
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
    <div className="cards-container">
    <div ref={containerRef} className=" card card-two">
    <header style={{background:cardTheme.bc,color:cardTheme.fc}}>
      <div className="avatar" style={{border:`3px solid ${cardTheme.bc}`}}>
        <img
          src={picture}
        />
      </div>
        <span className='shape-1' style={{background:cardTheme.bc}}></span>
    </header>
    {!name && <span className='spacer'></span>}
    {name && <h3>{name}</h3>}
    <div className="desc">
      {bio}
    </div>
    
    <footer style={{background:cardTheme.bc,color:cardTheme.fc}}>
      <span className='footer-span' style={{background:cardTheme.bc}}></span>
      <p>
      {github && 
         <a
         href={github}
        rel="noopener noreferrer"
        style={{ color:cardTheme.fc }}
        target="_blank"
         >
            <BsGithub/>
          </a>}
         {linkedIn && 
         <a
         href={linkedIn}
        rel="noopener noreferrer"
        style={{ color:cardTheme.fc }}
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
      </p>
    </footer>
  </div>
  </div>

  <DownloadButton canvasRef={containerRef} />
    </>
  )
}

export default LayoutEight