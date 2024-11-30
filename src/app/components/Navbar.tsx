import Image from "next/image"
import "../styles/Navbar.css"
import { Inter } from 'next/font/google';
const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
import Link from "next/link";
  

export default function Navbar() {
  return (
    <main className={`${inter.className} main-container `}>
        {/* <div className={`nav-container`}>
            
        </div> */}
        <div className="blur-filter"></div>
        <div className="nav-content">
            <div className="fixed-menu">
                <div className="logo">
                    <Link href="/">Hireop</Link>
                </div>
                <button className="classic-btn">
                    <span className={`c-btn-font ${inter.className}`}>
                        <Link className="c-btn-font" href="/job-posts">Post a job</Link>
                    </span>
                </button>
                <button className="classic-btn">
                    <span className={`c-btn-font ${inter.className}`}>Find people</span>
                </button>
            </div>
            <div className="variable-menu">
                <button className="action-btn">
                    <div className="button">
                        <span className="button__icon-wrapper">
                            <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                            </svg>
                            
                            <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                            </svg>
                        </span>
                        <span className="btn-font">
                            <Link className="btn-font" href="/signup">Sign up</Link>
                        </span>
                    </div>
                </button>
                <button className="classic-btn">
                    <span className={`c-btn-font ${inter.className}`}>
                        <Link className="c-btn-font" href="/login">Login</Link>
                    </span>
                </button>               
                <button className="classic-btn">
                    <span className={`c-btn-font ${inter.className}`}>Find jobs</span>
                </button>
            </div>
        </div>
    </main>
    
  )
}