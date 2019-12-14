import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../redux/actions/types';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <NavLink className="navbar-brand" to="/">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/all">ALL</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/male" onClick={props.filterMale}>MALE</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/female" onClick={props.filterFemale}>FEMALE</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const mapDispatchToProps = (dispatch) => ({

    filterFemale: () => dispatch({ type: actionTypes.SHOW_FEMALE }),
    filterMale: () => dispatch({ type: actionTypes.SHOW_MALE })
})


export default connect(null, mapDispatchToProps)(NavBar);
