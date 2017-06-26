import React, { Component } from 'react';
import baseStyles from './themes/base.css';

// Shell
import Header from "./components/shell/header";
import Sidebar from "./components/shell/sidebar";
import MainContent from "./components/shell/mainContent";

// Landing Page Specific Components
import Ad from "./components/ad";
import Filters from "./components/filters";

class App extends Component {
  render(props) {
    console.log(process.env);
    return (
      <div className={baseStyles.app}>
        <div class={baseStyles.wrapper}>
          <Header />
          <Sidebar />
          <MainContent>
            <div className="page-content">
              <div className="container-fluid">
                <Ad />
                <div className="row">
                  <Filters />
                  <div className="col-md-6">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h3 className="panel-title">Panel title</h3>
                      </div>
                      <div className="panel-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales mauris at arcu semper, sit amet malesuada enim fringilla. Aenean consequat enim eu diam fermentum sodales. Duis leo ante, suscipit eu porta sed, feugiat a odio. Mauris dui risus, finibus at nunc id, porttitor tristique lorem. Sed tincidunt risus nec sem porta aliquet. Nulla rhoncus urna a mollis gravida. Sed ac tellus sodales, ullamcorper sapien ac, tincidunt urna. Donec nec condimentum lectus, pellentesque vestibulum felis.</p>
                        <button type="button" className="btn btn-default">Button</button>
                      </div>
                    </div>
                    <div className="panel panel-default align-center">
                      <div className="panel-heading">
                        <h3 className="panel-title">Panel center align</h3>
                      </div>
                      <div className="panel-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum vulputate ultricies. Aliquam erat volutpat. Morbi malesuada urna lobortis, interdum lacus a, mattis tellus. Fusce est arcu, scelerisque in nulla ac, rhoncus euismod elit.</p>
                        <button type="button" className="btn btn-default">Button</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="panel panel-default align-right">
                      <div className="panel-heading">
                        <h3 className="panel-title">Panel right align</h3>
                      </div>
                      <div className="panel-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales mauris at arcu semper, sit amet malesuada enim fringilla.</p>
                        <button type="button" className="btn btn-default">Button</button>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h3 className="panel-title">Panel title</h3>
                      </div>
                      <div className="panel-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales mauris at arcu semper, sit amet malesuada enim fringilla. Aenean consequat enim eu diam fermentum sodales. Duis leo ante, suscipit eu porta sed, feugiat a odio. Mauris dui risus, finibus at nunc id, porttitor tristique lorem. Sed tincidunt risus nec sem porta aliquet. Nulla rhoncus urna a mollis gravida. Sed ac tellus sodales, ullamcorper sapien ac, tincidunt urna. Donec nec condimentum lectus, pellentesque vestibulum felis.</p>
                        <button type="button" className="btn btn-default">Button</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MainContent>
        </div>
      </div>
    );
  }
}

export default App;
