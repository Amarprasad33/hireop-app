import { promises as fs } from 'fs';
import './professionals.css'


export default async function Candidates() {
  const filePath = process.cwd() +'/public/assets/configs/professionals.json';
    const fileBuffer = await fs.readFile(filePath);
    const fileContents = fileBuffer.toString();
    const peopleData = JSON.parse(fileContents);

    return (
        <div className="people-page-container">
          <div className="people-page-header">

          </div>
            
          <div className="people-container">
              <div className="filter-container">
                  <button className='btn-filter'>Filter</button>
              </div>
              <div className="profile-card-container">
                <div className="proile-card">
                  
                </div>
              </div>
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