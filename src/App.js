import React, { Component } from 'react';

// Shell
import AppWrap from "./components/shell/appWrap";
import PageWrap from "./components/shell/pageWrap";
import Header from "./components/shell/header";
import Sidebar from "./components/shell/sidebar";
import MainContent from "./components/shell/mainContent";

import Row from "./components/common/row";

// Landing Page Specific Components
import Ad from "./components/ad";
import Filters from "./components/filters";
import Panel from "./components/panel";
import SiteCard from "./components/siteCard";

class App extends Component {
  render(props) {
    console.log(process.env);
    const BRAND = process.env.UP_UI_THEME;
    return (
      <AppWrap>
        <PageWrap>
          <Header />
          <Sidebar />
          <MainContent>
            <div className="page-content">
              <div className="container-fluid">
                {(BRAND === 'base' || BRAND === 'ipage') && <Ad />}
                <div className="row">
                  <Filters />
                  <div className="col-md-6">
                    <Panel
                      panelTitle="Panel title"
                      panelDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales mauris at arcu semper, sit amet malesuada enim fringilla. Aenean consequat enim eu diam fermentum sodales. Duis leo ante, suscipit eu porta sed, feugiat a odio. Mauris dui risus, finibus at nunc id, porttitor tristique lorem. Sed tincidunt risus nec sem porta aliquet. Nulla rhoncus urna a mollis gravida. Sed ac tellus sodales, ullamcorper sapien ac, tincidunt urna. Donec nec condimentum lectus, pellentesque vestibulum felis."
                      panelButtonText="Button"
                      panelAlign="left"
                    />
                    <Panel
                      panelTitle="Panel right align"
                      panelDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales mauris at arcu semper, sit amet malesuada enim fringilla."
                      panelButtonText="Button"
                      panelAlign="right"
                    />
                  </div>
                  <div className="col-md-6">
                    <Panel
                      panelTitle="Panel center align"
                      panelDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum vulputate ultricies. Aliquam erat volutpat. Morbi malesuada urna lobortis, interdum lacus a, mattis tellus. Fusce est arcu, scelerisque in nulla ac, rhoncus euismod elit."
                      panelButtonText="Button"
                      panelAlign="center"
                    />
                    <Panel
                      panelTitle="Panel title"
                      panelDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales mauris at arcu semper, sit amet malesuada enim fringilla. Aenean consequat enim eu diam fermentum sodales. Duis leo ante, suscipit eu porta sed, feugiat a odio. Mauris dui risus, finibus at nunc id, porttitor tristique lorem. Sed tincidunt risus nec sem porta aliquet. Nulla rhoncus urna a mollis gravida. Sed ac tellus sodales, ullamcorper sapien ac, tincidunt urna. Donec nec condimentum lectus, pellentesque vestibulum felis."
                      panelButtonText="Button"
                      panelAlign="left"
                    />
                  </div>
                </div>
                <div className="row">
                  <SiteCard />
                  <SiteCard />
                  <SiteCard />
                  <SiteCard />
                  <SiteCard />
                  <SiteCard />
                </div>
              </div>
            </div>
          </MainContent>
        </PageWrap>
      </AppWrap>
    );
  }
}

export default App;
