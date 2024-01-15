import Image from 'next/image'
// import styles from './page.module.css'
import './home.css';

export default function Home() {
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
        
    </main>
  )
}
