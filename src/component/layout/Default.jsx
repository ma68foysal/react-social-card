import { useState, useContext, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import { SocialContext } from '../context/SocialContext';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import DownloadButton from './DownloadBtn';


function Default({cardTheme,picture}) {


    const containerRef = useRef(null)
    
    const { social } = useContext(SocialContext);
    const { name, email, photo, bio, website, twitter, linkedIn, github } = social;
    
  return (
    <>
   
    <div
        className="social-card-preview"
        style={{ backgroundColor: cardTheme.bc, color: cardTheme.fc }}
        ref={containerRef}
      >
        <div className="card-header">
          {picture && (
            <div className="card-header-image">
              <img alt="profile" src={picture} />
            </div>
          )}
          <div className="card-header-name">
            <h3>{name}</h3>
          </div>
        </div>
        <div className="card-body">
          <div className="card-body-bio">
            <p>{bio}</p>
          </div>
          <div className="card-body-social">
            {twitter && (
              <div className="card-body-social-item">
                <a
                  href={twitter}
                  rel="noopener noreferrer"
                  style={{ color: cardTheme.link }}
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
                  style={{ color: cardTheme.link }}
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
                  style={{ color: cardTheme.link }}
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
                  style={{ color: cardTheme.link }}
                  target="_blank"
                >
                  <CgWebsite size="24px" />
                </a>
              </div>
            )}
            {email && (
              <div className="card-body-social-item">
                <a href={`mailto:${email}`} style={{ color: cardTheme.link }}>
                  <AiOutlineMail size="24px" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <DownloadButton canvasRef={containerRef} />
    </>
  )
}

export default Default