import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';
const CommentItem = ({
    jobId,
    comment: {_id, text,avatar,user,date,firstname}, auth
}) => {
    return (
        <>
                <li className="comment">
                  <div className="vcard bio">
                      <Link to={`/profile/${user}`} />
                    <img src={avatar} alt="Image placeholder"/>
                  </div>
                  <div className="comment-body">
                    <h3>{user.firstname}</h3>
                    <div>PostedOn:&nbsp;<Moment format="YYYY/MM/DD">{date}</Moment></div>
                    <p>{text}</p>
                  </div>
                </li>              
        </>
    );
};
CommentItem.propTypes = {
    jobId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired,
    //auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    //auth: state.auth
});
export default connect(mapStateToProps)(CommentItem);