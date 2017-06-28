import React, { Component } from 'react';

// Shell
import AppWrap from "../../../components/shell/appWrap";
import PageWrap from "../../../components/shell/pageWrap";
import Header from "../../../components/shell/header";
import Sidebar from "../../../components/shell/sidebar";
import MainContent from "../../../components/shell/mainContent";

class MarketplacePage extends Component {
  render(props) {
    return (
      <AppWrap>
        <PageWrap>
          <Header />
          <Sidebar />
          <MainContent>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="title">Marketplace</h1>
                </div>
              </div>
            </div>
          </MainContent>
        </PageWrap>
      </AppWrap>
    )
  }
}

export default MarketplacePage;
