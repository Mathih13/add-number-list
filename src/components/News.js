import React, { Component } from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";

import { defaultTheme } from "../theme";

import CircularProgress from "material-ui/CircularProgress";

import firebase from "../firebase";

// Simple wrapper for whatever is supposed to be main view
// Makes it easier to make "general" css and other changes
export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      firebaseData: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    firebase
      .database()
      .ref("/news/")
      .once("value", (snapshot) => {
        this.setState({
          firebaseData: this.snapshotToArray(snapshot),
          loading: false,
        });
        console.log(this.state.firebaseData);
      });
  }

  snapshotToArray = (snapshot) => {
    let returnArr = [];

    snapshot.forEach((childSnapshot) => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      item.date = new Date(item.date);
      returnArr.push(item);
    });

    return returnArr;
  };

  render() {
    if (this.state.loading)
      return (
        <div className="news">
          <h3>Oppdateringer</h3>
          <CircularProgress color={defaultTheme.mainColor} />
        </div>
      );

    return (
      <div
        className="news"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h3>Oppdateringer</h3>
        {this.state.firebaseData.map((data) => {
          return (
            <div
              key={data.key}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(16, 1fr)",
              }}
            >
              <CardHeader
                title={data.title}
                subtitle={data.date.toDateString()}
                style={{ gridColumnStart: "1", gridColumnEnd: "8" }}
              />

              <p style={{ gridColumnStart: "8", gridColumnEnd: "16" }}>
                {data.description}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
