import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

const Photo = React.createClass({
  render() {
    const { post, i } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <img src={post.display_src} className="grid-photo" />

          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={post.likes} className="likes-heart">
              {post.likes}
            </span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <div className="control-buttons">
            <button
              onClick={this.props.increment.bind(null, i)}
              className="likes"
            >
              &hearts; {post.likes}
            </button>
            <button>
              <span className="comment-count">Rank: #{i + 1}</span>
            </button>
          </div>
        </figcaption>
      </figure>
    );
  }
});

export default Photo;
