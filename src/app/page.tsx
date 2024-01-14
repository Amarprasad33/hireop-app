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
    </main>
  )
}
