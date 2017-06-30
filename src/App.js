import React, { Component } from 'react';

// Shell
import AppWrap from "./components/shell/appWrap";
import PageWrap from "./components/shell/pageWrap";
import Header from "./components/shell/header";
import Sidebar from "./components/shell/sidebar";
import MainContent from "./components/shell/mainContent";

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
                  {(BRAND === 'base' || BRAND === 'ipage') && <Filters />}
                </div>
                {(BRAND === 'base') &&
                <div className="row">
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
                }
                <div className="row">
                  <div className="col-md-4">
                    <div className="panel panel-default domain-options align-center">
                      <div className="panel-heading"><a href="/">Purchase Domain</a></div>
                      <div className="panel-body domain-split"><span>or</span></div>
                      <div className="panel-footer"><a href="/">Import Domain</a></div>
                    </div>
                  </div>
                  <SiteCard siteDomain="homedepot.com" siteImgUrl="/images/hd-site-thumb.png" />
                  <SiteCard siteDomain="starbucks.com" siteImgUrl="/images/sb-site-thumb.png" />
                  <SiteCard siteDomain="in-n-out.com" siteImgUrl="/images/innout-site-thumb.png" />
                  <SiteCard siteDomain="wholefoodsmarket.com" siteImgUrl="/images/wholefoods-site-thumb.png" />
                  <SiteCard siteDomain="mcdonalds.com" siteImgUrl="/images/mcdonalds-site-thumb.png" domainInfo="expires in 2 years - Jan 23, 2019" />
                </div>
                {BRAND === 'bluehost' &&
                <div>
                  <div className="row">
                      <div className="col-md-12">
                        <h1 className="title">Welcome to Bluehost!</h1>
                        <ul className="nav nav-tabs content-tabs hide">
                          <li><h1 className="page-title">Dashboard</h1></li>
                          <li role="presentation" className="active"><a href="/">For You</a></li>
                          <li role="presentation"><a href="/">All Applications</a></li>
                        </ul>
                      </div>
                      <div className="col-md-8">
                          <div className="panel panel-default primary-cta content-well">
                            <div className="panel-body">
                              <h2>Bluehost &amp; WordPress</h2>
                              <p>Bluehost has been recommended by WordPress for over ten years. To take the first step in creating your website, click the button below.</p>
                              <button type="button" className="btn btn-primary">Get Started on WordPress</button>
                              <a href="">Learn More</a>
                            </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="panel panel-default sub-cta">
                            <div className="panel-body">
                              <h4><a href=""><span className="glyphicon glyphicon-globe" aria-hidden="true"></span> Add a New Domain</a></h4>
                            </div>
                          </div>
                          <div className="panel panel-default sub-cta">
                            <div className="panel-body">
                              <h4>
                                <a href="/">
                                  <span className="glyphicon glyphicon-envelope" aria-hidden="true" />
                                  Set Up Your Email
                                </a>
                              </h4>
                            </div>
                          </div>
                          <div className="panel panel-default sub-cta">
                            <div className="panel-body">
                              <h4><a href=""><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Create a New Site</a></h4>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="panel panel-default align-center content-well">
                          <div className="panel-body">
                            <h4>Video Tutorials</h4>
                            <div className="well well-lg video-well"></div>
                            <button type="button" className="btn btn-default">View Library</button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="panel panel-default tips-panel content-well">
                          <div className="panel-body">
                            <h4>Tips and Insights</h4>
                            <ul>
                              <li>
                                <p>
                                  <strong>Where to Begin</strong><br />
                                  If you're serious about your site, consider <a href="/">choosing WordPress</a>.
                                  WordPress powers 27% of websites worldwide!
                                </p>
                              </li>
                              <li>
                                <p>
                                  <strong>You've Got This!</strong>
                                  <br />
                                  Around 75% of websites today are not active, but
                                  parked domains or similar. If you need help getting
                                  your site up and running at any point, <a href="/">just ask!</a>.
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="panel panel-default content-well help-center">
                          <div className="panel-body">
                            <h4>Need Some Guidance?</h4>
                            <p>
                              <input type="text" className="form-control" placeholder="Search the help center..." aria-describedby="basic-addon1" />
                            </p>
                            <p>
                              <button type="button" className="btn btn-primary">Search Help</button>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="panel panel-default content-well">
                          <div className="panel-body">
                            <h4>From the BlueHost Blog</h4>
                            <div className="col-md-3">
                              <img src="/images/blog-thumb.png" alt="Blog Thumb" width="100%" />
                            </div>
                            <div className="col-md-9">
                              <p><strong>8 Outstanding Ways to Promote Your Website</strong></p>
                              <p>There are many metrics you can use to measure the success of your website, from bounce rate to traffic...</p>
                              <p><a href="">Read More</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  }
                </div>
              </div>
          </MainContent>
        </PageWrap>
      </AppWrap>
    );
  }
}

export default App;
