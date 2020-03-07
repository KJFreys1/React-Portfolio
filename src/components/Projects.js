import React from 'react'
import ProjDesc from './ProjDesc'
import data from './ProjData/data'

export default class Projects extends React.Component {
    constructor() {
        super()

        this.state = {
            modal: 'modal-hide',
            desc: {}
        }
    }

    showModal(idx) {
        this.setState({
            modal: 'modal-show',
            desc: data[idx]
        })
    }

    closeModal() {
        this.setState({
            modal: 'modal-hide',
            desc: {}
        })
    }

    render() {
        return (
            <section className='box flex'>
                <div className='proj-title'>
                    <h2 className='proj'><a className='highlight' href='https://wonderful-almeida-16ee2b.netlify.com'>DevSync</a></h2>
                </div>
                <div className='proj-desc'>
                    <h2 className='proj'>MERN Stack with Socket.io</h2>
                    <p className='desc'>Asynchronous chatroom with user authorization and web sockets</p>
                </div>

                <div className='proj-title'>
                    <h2 className='proj'><a className='highlight' href='https://kjfreys1.github.io/Arcade/'>Arcade</a></h2>
                </div>
                <div className='proj-desc'>
                    <h2 className='proj'>JavaScript DOM Manipulation Games</h2>
                    <p className='desc'>Simon memory game, Snake, and NES-style Bomberman</p>
                </div>

                <div className='proj-title'>
                    <h2 className='proj'><a className='highlight' href='https://thought-shower.netlify.com/'>Thought Shower</a></h2>
                </div>
                <div className='proj-desc'>
                    <h2 className='proj'>MERN Stack</h2>
                    <p className='desc'>Social media mock for developers using Bootstrap CSS</p>
                </div>

                {/* <div className='proj-title'>
                    <h2 className='proj'><a className='highlight' href='https://gatodolist.herokuapp.com/'>ToDo List</a></h2>
                </div> */}
                <div className='proj-title'>
                    <h2 className='proj highlight' onClick={() => this.showModal(3)}>Save</h2>
                </div>
                <div className='proj-desc'>
                    <h2 className='proj'>Django Views and Python</h2>
                    <p className='desc'>To-do list with user auth using Django, PostgreSQL and Python</p>
                </div>
                <div className={this.state.modal}>
                    <ProjDesc desc={this.state.desc} closeModal={() => this.closeModal()} />
                </div>
            </section>
        )
    }
}