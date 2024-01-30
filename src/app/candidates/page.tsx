import { promises as fs } from 'fs';
import './professionals.css'
import Image from 'next/image';


export default async function Candidates() {
  const filePath = process.cwd() +'/public/assets/configs/professionals.json';
    const fileBuffer = await fs.readFile(filePath);
    const fileContents = fileBuffer.toString();
    const peopleData = JSON.parse(fileContents);

    return (
        <div className="people-page-container">
          {/* <div className="people-page-header">

          </div> */}
          
          <div className="people-container">
                <div className="filter-container">
                  <button className='btn-filter'>Filter</button>
                </div>
            <div className="card-container">
                {peopleData.map((person: any) => (
                    <div key={person.name} className="profile-card">
                        <div className="profile-pic">
                        {/* <Image src="https://images.unsplash.com/photo-1586716402203-79219bede43c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='person' width={50} height={50}></Image> */}
                            <img src={person['profile-img']} alt="Person Img" />
                        </div>
                        <div className="p-name">{person.name}</div>
                        <div className="p-designation">{person.designation}</div>
                        <div className="p-experience">Exp: {person.experience}+ Years</div>
                        <div className="skills-container">
                            {person.skills.map((item: any) => (
                                <div className="p-skill" key={item}>{item}</div>
                            ))}
                        </div>
                        <div className="socials">
                            <div className="social-img-wrapper"><Image style={{'borderRadius': '50%'}} src="/assets/images/facebook.png" width={25} height={25} alt='social'></Image></div>
                            <div className="social-img-wrapper"><Image style={{'borderRadius': '50%'}} src="/assets/images/instagram.png" width={29} height={29} alt='social'></Image></div>
                            <div className="social-img-wrapper"><Image style={{'borderRadius': '50%'}} src="/assets/images/linkedin.png" width={25} height={25} alt='social'></Image></div>
                        </div>
                    </div>
                ))}
            </div>
              
              {/* <div className="profile-card-container">
                <div className="profile-card">
                    <div className="profile-pic">
                        <img src="https://images.unsplash.com/photo-1586716402203-79219bede43c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={200} width={200} alt="" />
                    </div>
                    <div className="p-name">Adam Jordan</div>
                    <div className="p-designation">Video Editor</div>
                    <div className="p-experience">Exp: 8+ Years</div>
                    <div className="skills-container">
                        <div className="p-skill">Premere pro</div>
                        <div className="p-skill">Photoshop</div>
                        <div className="p-skill">Photoshop</div>
                        <div className="p-skill">Photoshop</div>
                    </div>
                </div>
               </div> */}
              {/* {peopleData.map((item: any) => (
                  <div className="post" key={item.id}>
                      <div className="post-header">
                          <div className="icon"></div>
                          <div className="creator">
                              <span className='c-name'>{item.company}</span>
                              <span className="c-desc">{item.description}</span>
                          </div>
                      </div>
                      {item.active && <div className='active-hire'>Actively hiring</div>}
                      <div className="job-card">
                          <div className="job-title">{item.title}</div>
                          <div className="stipend">Stipend</div><span style={{color: ' rgb(82 87 105)'}}>{item.salary}</span>
                      </div>
                      <div className="post-footer">
                          <div className="btn-group">
                              <button className="zero">Report</button>
                              <button className="zero">Hide</button>
                          </div>
                      </div>
                  </div>
              ))} */}
          </div>

        </div>
    )
}