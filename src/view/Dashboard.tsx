import * as React from 'react';
import './Dashboard.style.scss';
import {useLocation} from 'react-router-dom';

const Dashboard: React.FunctionComponent = () => {
    
    React.useEffect(() => {
      const sideNavTabs = document.querySelectorAll(".dashboard-sidenav ul > li");
        sideNavTabs.forEach((tab) => {
            tab.addEventListener("click", () => {
              sideNavTabs.forEach((tab) => {
                tab.classList.remove("active");
              });
              tab.classList.add("active");
            });
        });
    })

    const location = useLocation();
    React.useEffect(() => {
        const body = document.querySelector("body");
        const header = document.querySelector(".App-header");
        if (body && !body.classList.contains("body-dark")) {
          body.classList.add("body-dark");
        }
        if (header && !header.classList.contains("header-dark")) {
          header.classList.add("header-dark");
        }
    }, [location]);

    return (
        <div className="dashboard site-wrap">
          <nav className="dashboard-sidenav">
            <div className="name">
              Pepper
            </div>
            <ul>
              <li className="active">
                <span>Deals</span>
              </li>
              <li>
                <span>Activities</span>
              </li>
              <li>
                <span>Asset Libraries</span>
              </li>
            </ul>
          </nav>

          <main>
            
          </main>
        </div>
    );
}

export default Dashboard;