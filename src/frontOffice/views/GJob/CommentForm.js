import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../../actions/job';

const CommentForm = ({ jobId, addComment, isAuth }) => {
    const [text, setText] = useState ('');
 /*   if(!isAuth){
            return <Redirect to='/Login'/>
             }
             isAuth ? (addComment(jobId, {text})) : (<Redirect to="/" />)
*/
    const onSubmit = async e =>{
        e.preventDefault();
                addComment(jobId, {text});  
                setText('');
    
    }
    return (
        <div className="comment-form-wrap pt-4">
        <h3>Leave a comment</h3>
        <form action="#" className="p-4 bg-light" 
       onSubmit={e => onSubmit(e)}
        >
          <div className="form-group">
            <label for="message">Message</label>
            <textarea name="" id="message" cols="30" rows="5"
             className="form-control" onChange={e=> setText(e.target.value)}></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">Post Comment</button>
          </div>
        </form>
      </div>
        
    );
};
CommentForm.protoTypes ={
    addComment: PropTypes.func.isRequired,
    isAuth: PropTypes.bool
}
const mapStateToProps = state => (
    {
      isAuth: state.auth.isAuthenticated
    }
  );
export default connect(mapStateToProps, {addComment}) (CommentForm);