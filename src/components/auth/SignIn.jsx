import React, { Component } from "react";
import { signIn } from "../../actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LogRocket from "logrocket";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state);
  };

  render() {
    const { uid } = this.props;
     if(uid) return <Redirect to="/"/>
    return (
      <>
        <form
          className="container"
          autoComplete="off"
          style={{ marginTop: "30px" }}
          onSubmit={this.handleSubmit}
        >
          <legend>
            {" "}
            <h4>Sign In</h4>
          </legend>
          <div className="form-group">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            SignIn
          </button>
        </form>
        </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const uid = state.firebase.auth.uid;
  const email = state.firebase.auth.email;
  LogRocket.identify(uid, {
    name: uid,
    email: email,

    // Add your own custom user variables here, ie:
    subscriptionType: 'pro'
  });
  return {
    uid: uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
