import * as React from 'react';
import './Dashboard.style.scss';
import {useLocation} from 'react-router-dom';

const Dashboard: React.FunctionComponent = () => {
    
    React.useEffect(() => {
        const navTabs = document.querySelectorAll("#nav-tabs > a");
        navTabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                navTabs.forEach((tab) => {
                    tab.classList.remove("active");
                });
                tab.classList.add("active");
            });
        });
    })

    const location = useLocation();
    React.useEffect(() => {
        console.log('local');
    }, [location]);

    return (
        <div className="dashboard site-wrap">
          <nav className="site-nav">
            <div className="name">
              Pepper
            </div>
            <ul>
              <li className="active">
                <a href="#">Deals</a>
                <ul>
                  <li>
                    <a href="#0">Create New Deal</a>
                  </li>
                  <li>
                    <a href="#0">Modify Deal</a>
                  </li>
                  <li>
                    <a href="#0">Pipeline</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#0">Activities</a>
              </li>
              <li>
                <a href="#0">Asset Libraries</a>
              </li>
            </ul>
          </nav>

          <main>
            <header>
              <div className="breadcrumbs">
                <a href="#0/">Home</a>
              </div>

              <h1 className="title">Pipeline</h1>

              <nav className="nav-tabs" id="nav-tabs">
                <a href="#0" className="active">
                  Deals
                  <span>14</span>
                </a>
                <a href="#0">
                  Library
                  <span>24</span>
                </a>
                <a href="#0">Search Library</a>
              </nav>
            </header>

            <div className="content-columns">
              <div className="col">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
              </div>
              <div className="col">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
              </div>
              <div className="col">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
              </div>
              <div className="col">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
              </div>
            </div>
          </main>
        </div>
    );
}

export default Dashboard;