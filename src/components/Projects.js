import React from 'react'

export default class Projects extends React.Component {
    render() {
        return (
            <section className='box flex'>
                <div className='proj-title'>
                    <h2 className='proj'><a className='highlight' href='https://kjfreys1.github.io/Arcade/'>Arcade</a></h2>
                </div>
                <div className='proj-desc'>
                    <h2 className='proj'>JavaScript DOM Manipulation Games</h2>
                    <p className='desc'>Simon memory game, Snake, and NES-style Bomberman</p>
                </div>
                <div className='proj-title'>
                    <h2 className='proj'><a className='highlight' href='http://stock-lab-kylefreyermuth.surge.sh'>Stocks</a></h2>
                </div>
                <div className='proj-desc'>
                    <h2 className='proj'>JavaScript with React and APIs</h2>
                    <p className='desc'>Tracks current popular stocks in real-time</p>
                </div>
                <div className='proj-title'>
                    <h2 className='proj'><a className='highlight' href='#'>Foo</a></h2>
                </div>
                <div className='proj-desc'>
                    <h2 className='proj'>Lorem</h2>
                    <p className='desc'>Foo</p>
                </div>
            </section>
        )
    }
}