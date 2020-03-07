import React from 'react'

export default function ProjDesc(props) {
    const { github, deploy, video } = props.desc
    if (props.desc) {
        return (
            <div className="inner-modal">
                
                <h1 className="modal-title">{props.desc.title}<div className="close-modal" onClick={props.closeModal}>CLOSE</div></h1>
                <h2 className="modal-desc">{props.desc.desc}</h2>
                <div className="modal-links">
                    {github ? <a className="highlight modal-link-single" href={github}>View GitHub Repo</a> : null}
                    {deploy ? <a className="highlight modal-link-single" href={deploy}>View Deployed</a> : null}
                    {video ? <a className="highlight modal-link-single" href={video}>View Video Demo</a> : null}
                </div>
            </div>
        )
    } else {
        return (<></>)
    }
}