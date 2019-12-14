import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../redux/actions/types';

const UserDetails = ({ ...props }) => {


    return (

        <div className="card" style={{ width: '18rem' }}>
            <img src={props.url} className="card-img-top" alt="profile" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text"><b>Gender:</b>{props.gender}</p>
                <p className="card-text"><b>Email:</b>{props.email}</p>
                <p className="card-text"><b>Phone:</b>{props.phone}</p>
                <b className="mr-2">Checked:</b><input type="checkbox" name="checked"
                    id={props.id} checked={props.converted} onChange={(e) => props.onChecked(e.target.id)}
                />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({

    onChecked: (details) => dispatch({ type: actionTypes.CONVERTED, payload: details }),
})

export default connect(null, mapDispatchToProps)(UserDetails);
