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

  //   componentDidMount() {
  //     const { count, start } = this.state;
  //     axios.get(`/api/photos/unsplash?count=${count}&start=${start}`).then(res =>
  //       this.setState({
  //         images: res.data
  //       })
  //     );
  //   }

  //   fetchImages = () => {
  //     const { count, start } = this.state;
  //     this.setState({ start: this.state.start + count });
  //     axios.get(`/api/photos/unsplash?count=${count}&start=${start}`).then(res =>
  //       this.setState({
  //         images: this.state.images.concat(res.data)
  //       })
  //     );
  //   };

  componentDidMount() {
    const { searchTerm } = this.state;
    axios.get(`/api/photos/unsplash/synth?searchTerm=${searchTerm}`).then(res =>
      this.setState({
        images: res.data.results,
        searchTerm: "synthesizers"
      })
    );
  }

  fetchImages = () => {
    const { searchTerm, perPage } = this.state;
    this.setState({ perPage: this.state.perPage + perPage });
    axios.get(`/api/photos/unsplash/synth?searchTerm=${searchTerm}`).then(res =>
      this.setState({
        images: this.state.images.concat(res.data.results)
      })
    );
  };

  render() {
    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.fetchImages}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.images.map(image => (
            <Image key={image.id} image={image} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Scroll;
