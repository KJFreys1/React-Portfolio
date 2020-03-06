import React from 'react'

export default function ProjDesc(props) {
    const { github, deploy, video } = props.desc
    console.log(github)
    if (props.desc) {
        return (
            <div className="inner-modal">
                <h1>{props.desc.title}</h1>
                <h2>{props.desc.desc}</h2>
                {github ? <a className="highlight" href={github}>View GitHub Repo</a> : null}
                {deploy ? <a className="highlight" href={deploy}>View Deployed</a> : null}
                {video ? <a className="highlight" href={video}>View Video Demo</a> : null}
            </div>
        )
    } else {
        return (<></>)
    }
}