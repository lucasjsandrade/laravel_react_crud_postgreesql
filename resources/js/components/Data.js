import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Data extends React.Component {
    delPost = (id) => {
        alert("Are You Want To Delete This Post");
        this.props.deletePost(id);
    }
    render(){
        const {posts} = this.props;
        return(
            <div className="card post">
                <div className="cardHeader">
                    <h2>{posts.title}</h2>
                    <div className="subinfo">
                        <h6><FontAwesomeIcon icon="calendar" className="icon"/>
                            {moment(posts.updated_at).format('LLL')}
                        </h6>
                        <h6><FontAwesomeIcon icon="flag" className="icon"/>{posts.type}</h6>
                    </div>
                </div>
                <hr />
                <div className="cardBody">
                    <p>{posts.description}</p>
                    <button className="secondary"><FontAwesomeIcon icon="book-open" className="icon"/>Read More</button>
                </div>
                <hr />
                <div className="cardFooter end">
                    <button className="primary"><FontAwesomeIcon icon="share" className="icon"/>Share</button>
                    <div className="action">
                        <button className="edit"><Link className="color" to={`/edit/${posts.id}`}><FontAwesomeIcon icon="edit" className="icon"/>Edit</Link></button>
                        <button className="delete" onClick={() => this.delPost(posts.id)}><FontAwesomeIcon icon="trash-alt" className="icon"/>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Data;