import React from 'react'


export function StreamerInfo(props){

    return (
        <div  className="row">
            <div className="col-3 col-sm-4">
                <h4>{props.nick}</h4>
            </div>
            <div className="col-6 col-sm-6">
                <h4>{props.stream_title}</h4>
            </div>
            <div className="col-3 col-sm-2">
            <span className="badge badge-info">{props.view_count}</span>
            </div>
        </div>
    )
}