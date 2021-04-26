import {Component} from 'react';
import logo from "./BOA_Logo.svg";
import "./NavigationBar.css";

export default class NavigationBar extends Component {

    Navigator() {
        return(
            <span className="navigator">
                <span>Checking</span>
                <span>Savings</span>
                <span>Credit Cards</span>
                <span>Home Loans</span>
                <span>Auto Loans</span>
                <span>Investing</span>
                <span>Better Money Habits</span>
            </span>
        );
    }

    BusinessNav() {
        return(
            <div className="business-nav">
                <span className="main-info">
                    <span>Personal</span>
                    <span>Small Business</span>
                    <span>Wealth Management</span>
                    <span>Business & Institutions</span>
                    <span>Security</span>
                    <span>About Us</span>
                </span>
                <span>En Espanol</span> 
            </div>
        )
    }

    ImageAndSearch() {
        return (
            <div className="image-and-search">
                <img className="login-logo" src={logo}></img>
                <form className="search">
                    <input type="text" placeholder="How can we help you?" id=""></input>
                </form>
            </div>
        )
    }

    render(){
       return(
           <div className="loginPage">
               <div className="Navigation-Bars">
               <this.BusinessNav></this.BusinessNav>
               <this.ImageAndSearch></this.ImageAndSearch>
               <this.Navigator></this.Navigator>
               </div>
           </div>
       );
    }
}