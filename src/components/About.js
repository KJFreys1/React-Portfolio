import React from 'react'

export default class About extends React.Component {
    render() {
        return (
            <section className='box'>
                <div className='big-box'>
                    <h1 className='about-text'>A perfect blend of creativity and logic, I am a full stack software engineer with a passion for Web and App Development. I systematically approach challenges from different perspectives and break them down into smaller pieces until I find the most practical solution. I am motivated by personal growth and solving difficult problems.</h1>
                </div>
                <div className='small-box'>
                    <p className='small-text'>Feel free to take a look at my <span><a className='highlight' href='https://www.linkedin.com/in/kylefreyermuth/'>LinkedIn profile</a></span> and reach out to me with any questions you may have.</p>
                </div>
            </section>
        )
    }
}