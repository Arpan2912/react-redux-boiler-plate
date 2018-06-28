import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sampleAction } from '../actions/sampleAction';

class Home extends Component {
  componentWillMount() {
    this.props.sampleAction();
  }

  componentWillReceiveProps(nextProps) {
    // console.log("next props", nextProps);
    // if (nextProps.newPost) {
    //   this.props.posts.unshift(nextProps.newPost);
    // }
  }

  render() {
    return (
      <div>
        <h2>Home Component</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sampleItems: state.sample.sampleItems
})
export default connect(mapStateToProps, { sampleAction })(Home);

