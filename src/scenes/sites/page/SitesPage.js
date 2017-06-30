import React, { Component } from 'react';

// Shell
import AppWrap from "../../../components/shell/appWrap";
import PageWrap from "../../../components/shell/pageWrap";
import Header from "../../../components/shell/header";
import Sidebar from "../../../components/shell/sidebar";
import MainContent from "../../../components/shell/mainContent";

import MediaBlock from "../../../components/mediaBlock";
import Icon from "../../../components/common/icon";

class SitesPage extends Component {
  render(props) {
    return (
      <AppWrap>
        <PageWrap>
          <Header />
          <Sidebar />
          <MainContent>
            <div className="my-sites-holder">
              <div className="container site-details">
                <div className="row mx0 mt5 mb5 floating-row">
                  <div className="col-md-4 col-sm-12">
                    <div className="imageLoader loaded site-details--thumbnail desktop">
                      <img className="mw-100" src="https://storage.googleapis.com/wzsitethumbnails/site-500027/800x500.jpg?1491905951" alt="site thumbnail" />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-12">
                    <div className="site-details--content">
                      <div className="site-details--content--header clearfix">
                        <div className="site-details--content--header-left float-left">
                          <h1 className="site-details--content--title">patriciadave</h1>
                          <p className="site-details--content--status__published">
                            <span>Free</span>
                          </p>
                        </div>
                      </div>
                      <p className="site-details--content--last-updated">
                        <strong><span>Last updated:</span></strong> Wed, Jun 28, 2017 9:58 AM
                      </p>
                      <div className="site-details--content--footer clearfix">
                        <div>
                          <button className="btn btn-primary left" data-property="site-detail-upgrade-button" type="button">
                            Upgrade site
                          </button>
                          <a className="left btn btn-default ml2" href="http://editor.websitetailor.latest.wzdev.co#/site/45499766/desktop">
                            Edit site
                          </a>
                          <div className="right">
                             <div>
                                <div className="btn btn-default no-border">
                                  <Icon iconName="star-empty" />
                                </div>
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <MediaBlock
                  title="Would you prefer hellozak.com as your domain name?"
                  desc="Having your own domain name, website and email addresses will give your business a more professional look."
                  btnText="Buy Your Domain"
                  btnURL="/sites"
                />
                <MediaBlock
                  title="eCommerce Store"
                  desc="Start selling products on your website today!"
                  btnText="Upgrade Now!"
                  btnURL="/sites"
                />
                <MediaBlock
                  title="SiteLock Malware Scanning"
                  desc="Maintain the confidence and business of your website visitors by preventing your website from being hacked, suspended, or black."
                  btnText="Secure Your Site"
                  btnURL="/sites"
                />
                <MediaBlock />

              </div>
            </div>




          </MainContent>
        </PageWrap>
      </AppWrap>
    )
  }
}

export default SitesPage;
