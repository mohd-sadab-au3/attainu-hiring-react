import React from 'react'
import UserDetails from './UserDetails';
import { connect } from 'react-redux';
import * as actionTypes from '../redux/actions/types';

class Person extends React.Component {

    componentDidMount() {

        if (this.props.history.location.pathname === "/male") {
            this.props.filterMale();
        }
        else {
            this.props.filterFemale();
        }
    }
    render() {
        let result = null;
        let props = this.props;
        if (!props.loading) {

            result = (
                <div className="container">
                    <h1 className="text-center mt-5">Counter: <span className="text-danger">
                        {props.person.length}/{props.details.length}</span></h1>
                    <div className="row mb-2">
                        {props.person.map(details => (
                            <div className="col-md-4 mt-2" key={details.id}>
                                <UserDetails  {...details} />
                            </div>
                        ))}
                    </div>
                </div>
            )

        }
        return (
            result
        )


    }
}

const mapStateToProps = (state) => ({
    details: state.details ? state.details : [],
    loading: state.loading,
    person: state.person ? state.person : []
})

const mapDispatchToProps = (dispatch) => ({

    filterFemale: () => dispatch({ type: actionTypes.SHOW_FEMALE }),
    filterMale: () => dispatch({ type: actionTypes.SHOW_MALE })
})


export default connect(mapStateToProps, mapDispatchToProps)(Person);

