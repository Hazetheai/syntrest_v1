import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./Image";

export class ScrollReddit extends Component {
  state = {
    images: [],
    count: 30,
    start: 1,
    page: 1,
    perPage: 10,
    searchTerm: "rsynthesizers"
  };

  componentDidMount() {
    const { searchTerm } = this.state;
    axios.get(`/api/services/reddit/${searchTerm}`).then(res =>
      this.setState({
        images: res.data,
        searchTerm: "rsynthesizers"
      })
    );
  }

  fetchImages = () => {
    const { searchTerm, perPage } = this.state;
    this.setState({ perPage: this.state.perPage + perPage });
    axios.get(`/api/services/reddit/${searchTerm}`).then(res =>
      this.setState({
        images: this.state.images.concat(res.data)
      })
    );
  };

  render() {
    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.images ? this.state.images.length : 30}
          next={this.fetchImages}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.images
            ? this.state.images.map(image => (
                <Image key={image + Math.random().toFixed(6)} image={image} />
              ))
            : null}
        </InfiniteScroll>
      </div>
    );
  }
}

export default ScrollReddit;
