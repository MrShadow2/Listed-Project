import React from "react";
import "./Test.css";
import PieChart from "./PieChart";
import Graph from "./Graph";
import axios from "./Server";
import { useState, useEffect } from "react";
import Dash from "./Assets/Dash.png";
import fourth from "./Assets/fourth.png";
import sec from "./Assets/sec.png";
import setting from "./Assets/setting.png";
import third from "./Assets/third.png";
import sicon from "./Assets/sicon.png";
import Notification from "./Assets/notification.png";
import Hero from "./Assets/hero.png";
import Receive from "./Assets/receive.png";
import Tag from "./Assets/tag.png";
import Like from "./Assets/like.png";
import User from "./Assets/user.png";

const Home = ({photoURL}) => {
  const [myData, setMyData] = useState([]);
  const [error, setError] = useState("");


  const getApi = async () => {
    try {
      const response = await axios.get("/products");
      setMyData(response.data.products);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  console.log(myData);
  return (

    <div className="main">


   
      <aside id="aside" className="main-left" >
        <h1 className="left-m">Board.</h1>
        <ul>
          <li>
            <img src={Dash} />
            <div>Dashboard 
               </div>
          </li>

          <li>
            <img src={sec} />
            <div>Transactions</div>
          </li>
          
            <li>
              <img src={third} />
              <div>Schedules</div>
            </li>
          
          <li>
            
              <img src={fourth} />
              <div>Users</div>
            
          </li>
          
            <li>
              <img src={setting} />
              <div>Settings</div>
            </li>
          
        </ul>

        <div className="down">
          <ul>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </aside>
    
      <header id="nav" ><h4 className="dashb" >Dashboard</h4> 
        <div className="right" >
          <div className="inp" >
            <input type="text" placeholder="Search..." />
            <img className="sicon" src={sicon} alt="search" />
          </div>

          <div className="bell">
            <img className="bell" src={Notification} alt="Notification" />
          </div>
          <div className="hero-div">
            <img className="hero-img" src={photoURL} alt="Hero" />
          </div>
        </div>

      </header>
      
      <article id="box1" className="box1">
        <div className="logodiv"> <img className="logo" src={Receive} /> </div>
        <div className="total-rev">Total Revenue</div>
        <div className="price">${myData.length > 0 && myData[0].price}
         </div>

      </article>

      <article id="box2" className="box2">
      <div className="logodiv"> <img className="logo" src={Tag} /> </div>
        <div className="total-rev">Total Transaction</div>
        <div className="price">${myData.length > 0 && myData[1].price}
         </div>
      </article>

      <article  id="box3" className="box3">
      <div className="logodiv"> <img className="logo" src={Like} /> </div>
        <div className="total-rev">Total Likes</div>
        <div className="price">{myData.length > 0 && myData[2].price}
         </div>
      </article>
      <article id="box4" className="box4">
      <div className="logodiv"> <img className="logo" src={User} /> </div>
        <div className="total-rev">Total User</div>
        <div className="price">{myData.length > 0 && myData[3].price}
         </div>
      </article>

      <section id="mainsec" className="mainsec">
        <div className="graph-head">
          <div className="graph-head-txt">
            <h3 className="graph-txt">
                <div className="act">
                  <p className="main-sec-act" >Activities</p>
                  <p className="main-sec-date" >May-June 2021</p>
                </div>

            
            </h3>
            <h3 className="graph-txt">
            <h6 className="graph-txt-right" >
              User
              <span class="dot6"></span> 
                Guest
              <span class="dot7"></span> 
              
              </h6>
             </h3>
            </div>
        <Graph />
        </div>
      </section>
      <article id="chart" className="chart">
        <div className="top-head" >
        <h3 className="tp" >Top products</h3>
        <h3 className="main-sec-date" >May-June 2021</h3>
        </div>

        <div className="pie-txt" >
      <PieChart />
      <div className="pie-sub-txt">
        <h1 className="txt" >Basic Tees <span class="dot1"></span> </h1>
        <span className="txt" >55%</span>
        <h1 className="txt" >Custom Short Pant <span class="dot2"></span> </h1>
        <span className="txt" >31%</span>
        <h1 className="txt" >Super Hoodies <span class="dot3"></span> </h1>
        <span className="txt" >14%</span>

      </div>

        </div>
      </article>
      <article id="schedule" className="schedule">
        
        <div className="sch-top">
          <h3 className="sch-head">Today's Schedule </h3>
          <h3 className="sch-date">See All</h3> 
        </div>

        <div className="bar">
        <div class="vl"></div>

        <div className="sch-main">
          <div className="sch-main-txt1">
            <h3 className="sch-txt1">  Meeting with suppliers from kuta Bali </h3>
          </div>
          <div className="sch-main-txt2">
            <h3 className="sch-txt2">14.00-15.00 </h3>
          </div>
          <div className="sch-main-txt3">
            <h3 className="sch-txt3">at Sunset Road ,Kuta Bali </h3>
          </div>

    </div>
          </div>
          
          <div className="bar">
        <div class="vll"></div>

        <div className="sch-main">
          <div className="sch-main-txt1">
            <h3 className="sch-txt1">  Meeting with suppliers from kuta Bali </h3>
          </div>
          <div className="sch-main-txt2">
            <h3 className="sch-txt2">14.00-15.00 </h3>
          </div>
          <div className="sch-main-txt3">
            <h3 className="sch-txt3">at Sunset Road ,Kuta Bali </h3>
          </div>

    </div>
          </div>
      </article>

    </div>
  );
};

export default Home;
