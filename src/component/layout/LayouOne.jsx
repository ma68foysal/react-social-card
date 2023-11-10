import React, { useContext, useEffect, useRef, useState } from 'react'
import '../../App.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';

import { SocialContext } from '../context/SocialContext';
import DownloadButton from './DownloadBtn';

function LayouOne({cardTheme}) {
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
  }, [photo]);
  return (
    <>
    <div className="center">
  <div ref={containerRef} className="card-box">
    <div className="additional" style={{background: cardTheme.bc}}>
      <div className="user-card">
        
        <div className="card-header-image">
              <img  src={picture} />
        </div>
      </div>
    </div>
    <div className="general">
      <h1>{name}</h1>
      <p>
        {bio}
      </p>
      <div className="card-body-social">
            {twitter && (
              <div className="card-body-social-item">
                <a
                  href={twitter}
                  rel="noopener noreferrer"
                  style={{ color: "#000000" }}
                  target="_blank"
                >
                  <FaXTwitter size="24px" />
                </a>
              </div>
            )}
            {linkedIn && (
              <div className="card-body-social-item">
                <a
                  href={linkedIn}
                  rel="noopener noreferrer"
                  style={{ color: "#000000" }}
                  target="_blank"
                >
                  <BsLinkedin size="24px" />
                </a>
              </div>
            )}
            {github && (
              <div className="card-body-social-item">
                <a
                  href={github}
                  rel="noopener noreferrer"
                  style={{ color: "#000000" }}
                  target="_blank"
                >
                  <BsGithub size="24px" />
                </a>
              </div>
            )}
            {website && (
              <div className="card-body-social-item">
                <a
                  href={website}
                  rel="noopener noreferrer"
                  style={{ color: "#000000" }}
                  target="_blank"
                >
                  <CgWebsite size="24px" />
                </a>
              </div>
            )}
            {email && (
              <div className="card-body-social-item">
                <a href={`mailto:${email}`} style={{ color: "#000000" }}>
                  <AiOutlineMail size="24px" />
                </a>
              </div>
            )}
          </div>
    </div>
  </div>
</div>
<DownloadButton canvasRef={containerRef} />
    </>
  )
}

export default LayouOne