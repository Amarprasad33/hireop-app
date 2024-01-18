import Image from 'next/image'
// import styles from './page.module.css'
import './home.css';
// import aboutMenuData from '../../public/assets/configs/about-menu.json'
import { promises as fs } from 'fs';
import { useEffect } from 'react';

export default async function Home() {
  const filePath = process.cwd() + '/public/assets/configs/about-menu.json';
  const fileBuffer = await fs.readFile(filePath);
  const fileContents = fileBuffer.toString();
  const menuData = JSON.parse(fileContents);
  // console.log("data", data);
  return (
    <main className="mainContainer">
        <div className="hero">
          <div className='title'>
            Your one stop solution to hiring 
          </div>
          <div className="subtitle">
            Elevate your creative projects with our specialized hiring platform designed exclusively for content creators. Unleash the full potential of your creativity by assembling the perfect team for your vision.  
          </div>
        </div>
        <video src={require('../../public/assets/videos/landing-video.mp4')} autoPlay muted loop className='video' />
        {/* Section - 2 - Actions - diff pages */}
        <div className="section-action">
          <div className="message-container">
            <div className="message-content">
              <div className="message">
                Where content creators and creative professionals connect
              </div>
              <div className="plane-btn-group">
                <button className='btn-black'>Find your next hire</button>
                <button className='btn-white'>Find your next job</button>
              </div>
            </div>
          </div>
        </div>
        {/* Section - 3 Stats */}
        <div className="section-stats">
          <div className="stats-container">
            <div className="stats-content">
              <div className="num-group">
                <div className="num">500K+</div>
                <div className="info">Matches Made</div>
              </div>
              <div className="num-group">
                <div className="num">100K+</div>
                <div className="info">Gigs</div>
              </div>
              <div className="num-group">
                <div className="num">1M+</div>
                <div className="info">Agency Ready Candidates</div>
              </div>
            </div>
          </div>
          <div className="separation"></div>
        </div>
        {/* Section - 4 : talent Info */}
        <div className="section-talent-info">
          <div className="card">
              <div className="question">Got Talent?</div>
              <div className="ex-head">Why job seekers love us</div>
              <div className="stats-info-container">
                  <div className="stat-group">
                      <div className="icon grad"></div>
                      <div className="stat">Connect directly with creators at top level - no third party allowed.
                      </div>
                  </div>
                  <div className="stat-group">
                      <div className="icon grad"></div>
                      <div className="stat">Everything you need to know, all upfront. View salary, working hours, and more before applying.
                      </div>
                  </div>
                  <div className="stat-group">
                      <div className="icon grad"></div>
                      <div className="stat">Say goodbye to emails - your profile is all you need.
                      </div>
                  </div>
                  <div className="stat-group">
                      <div className="icon grad"></div>
                      <div className="stat">Unique jobs for creators and media agencies you can’t find anywhere else.
                      </div>
                  </div>
              </div>
              <div className="btn-action-group">
                  <button className="btn-box">Learn more</button>
                  <button className="btn-fill">Sign up</button>
              </div>
          </div>
          <div className="card adj-right">
              <div className="question">Need Talent?</div>
              <div className="ex-head">Why recruiters love us</div>
              <div className="stats-info-container">
                  <div className="stat-group">
                      <div className="icon"></div>
                      <div className="stat">Tap into a community of 1.5M+ engaged,ready candidates.
                      </div>
                  </div>
                  <div className="stat-group">
                      <div className="icon"></div>
                      <div className="stat">Everything you need to kickstart your recruiting — set up job posts, company branding etc.
                      </div>
                  </div>
                  <div className="stat-group">
                      <div className="icon"></div>
                      <div className="stat">A free applicant tracking system, or free integration with any ATS you may already use.
                      </div>
                  </div>
                  <div className="stat-group">
                      <div className="icon"></div>
                      <div className="stat">Let us handle the heavy-lifting with RecruiterCloud. Our new AI-Recruiter scans 500M+ candidates</div>
                  </div>
              </div>
              <div className="btn-action-group">
                  <button className="btn-box white">Learn more</button>
                  <button className="btn-fill">Sign up</button>
              </div>
          </div>
        </div>
        {/* About / Contact Page */}
        <div className="section-about">
          <div className="about-header"></div>
          <div className="about-container">
            <div className="logo-section">
              Hireop
            </div>
            <div className="about-menu-container">
              {menuData.map((menuObj: any) => (
                <div className="menu-heading" key={menuObj.name}>
                  <span>{ menuObj.heading }</span>
                  <div className="values-container">
                    {menuObj.dataValues.map((dataItem: any) => (
                      <div className='data-item' key={dataItem}> {dataItem} </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </main>
  )
}
