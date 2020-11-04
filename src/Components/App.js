import React, { Component, Fragment } from "react";
import { Header, Footer, Hero, Context } from "./Layouts";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Hero />
          <Context />
        </main>
        <Footer />
      </Fragment>
    );
  }
}
