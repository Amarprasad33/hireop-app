import { promises as fs } from 'fs';
import './posts.css'

export default async function JobPosts() {
    const filePath = process.cwd() +'/public/assets/configs/job-posts.json';
    const fileBuffer = await fs.readFile(filePath);
    const fileContents = fileBuffer.toString();
    const postsData = JSON.parse(fileContents);

    return (
        <div className="posts-page-container">
            <div className="posts-page-header">

            </div>
            <div className="posts-container">
                <div className="filter-container">
                    <button className='btn-filter'>Filter</button>
                </div>
                {postsData.map((item: any) => (
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
                ))}
            </div>

        </div>
    )
}
