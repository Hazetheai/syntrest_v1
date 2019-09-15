import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./Image";

export class Scroll extends Component {
  state = {
    images: [],
    count: 30,
    start: 1,
    page: 1,
    perPage: 10,
    searchTerm: "synth"
  };

  componentDidMount() {
    const { searchTerm } = this.state;
    axios.get(`/api/photos/unsplash/synth?searchTerm=${searchTerm}`).then(res =>
      this.setState({
        images: res.data.results,
        searchTerm: "synthesizers"
      })
    );
    console.log("searching for next images", this.state.images);
  }

  fetchImages = () => {
    const { searchTerm, perPage } = this.state;
    this.setState({ perPage: this.state.perPage + perPage });
    axios.get(`/api/photos/unsplash/synth?searchTerm=${searchTerm}`).then(res =>
      this.setState({
        images: this.state.images.concat(res.data.results)
      })
    );
    console.log("fetched Images");
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
                <Image
                  key={image.id + Math.random().toFixed(6)}
                  image={image}
                />
              ))
            : null}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Scroll;
