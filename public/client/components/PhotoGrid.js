import React, { Component } from "react";
import Photo from "./Photo";

export default class PhotoGrid extends Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts
          .sort((a, b) => (a.likes < b.likes ? 1 : -1))
          .map((post, i) => (
            <Photo {...this.props} key={i} i={i} post={post} />
          ))}
      </div>
    );
  }
}
