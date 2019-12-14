import React from 'react';
import UserDetails from './UserDetails';
import { connect } from 'react-redux';
import * as actionTypes from '../redux/actions/types';
import axios from 'axios';

class Home extends React.Component {


    async getData() {
        const response = await axios.get("https://randomuser.me/api/");
        let data = response.data.results[0];

        const details = {
            name: data.name.first + ' ' + data.name.last,
            email: data.email,
            phone: data.phone,
            id: data.login.uuid,
            converted: false,
            url: data.picture.medium,
            gender: data.gender
        }
        this.props.onLoad(details);
    }

    async componentDidMount() {

        if (!this.props.details.length)
            await this.getData();

    }

    showMoreHandler = async () => {
        await this.getData()
    }

    render() {
        let result = null;
        if (!this.props.loading) {

            result = (
                <React.Fragment>
                    <h1 className="text-center mt-5">Counter: <span className="text-danger">{this.props.details.length}/{this.props.details.length}</span></h1>
                    <div className="row mb-2">

                        {this.props.details.map(details => (
                            <div className="col-md-4 mt-2" key={details.id}>
                                <UserDetails  {...details} />
                            </div>
                        ))}
                    </div>
                </React.Fragment>
            )

        }
        return (
            <React.Fragment>

                <div className="container mt-5">
                    {!this.props.loading ? result : null}

                    <button className="btn btn-primary" onClick={this.showMoreHandler}>Show More</button>
                </div>
            </React.Fragment>
        );
    }


}

const mapStateToProps = (state) => ({
    details: state.details,
    loading: state.loading,
    person: state.person
})

const mapDispatchToProps = (dispatch) => ({

    onLoad: (details) => dispatch({ type: actionTypes.FETCH_USER, payload: details }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
