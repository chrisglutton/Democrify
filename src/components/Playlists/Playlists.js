import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import SinglePlaylist from "./SinglePlaylist";
import { Table } from "reactstrap";

class Playlists extends Component {
  render() {
    const { error, loading, data } = this.props.playlists;

    if (error) {
      return <p>Error: {error}</p>;
    }

    if (loading) {
      return (
        <Loader type="ThreeDots" color="#1ECD97" height={100} width={100} />
      );
    }

    if (data) {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <Table dark size="l">
            <thead>
              <tr>
                <th></th>
                <th>{this.props.col1Name}</th>
                <th>{this.props.col2Name}</th>
              </tr>
            </thead>
            <tbody>
              {data.items &&
                data.items.map((item) => (
                  <SinglePlaylist key={item.id} playlistInfo={item} />
                ))}
            </tbody>
          </Table>
        </div>
      );
    }
    return <div />;
  }
}

// State is entire state tree
function mapStateToProps(state) {
  return {
    playlists: state.playlists,
  };
}

export default connect(mapStateToProps)(Playlists);
