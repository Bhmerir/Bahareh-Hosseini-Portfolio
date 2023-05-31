import React from 'react';
import "../../assets/styles/common.css";
import bigSkyLodges from "../../assets/images/big-sky-lodges.png"
import voiceOfPeople from "../../assets/images/voice-of-people.png"
import barista from "../../assets/images/barista.png"
import codingQuiz from "../../assets/images/coding-quiz.png"
import weatherForecast from "../../assets/images/weather-forecast.png"
import employeeTracker from "../../assets/images/employee-tracker.png"

function Portfolio() {
    return (
        <div className="d-flex flex-column flex-wrap justify-content-center portfolio-page">
            <div className="d-flex flex-wrap align-items-center mt-5">
                <div className="col-md-4 mb-4 d-flex justify-content-center">
                    <div className="card">
                        <img src={bigSkyLodges} className="card-img-top custom-prj-img" alt="Big Sky Lodges" />
                        <div className="card-body">
                            <div className="d-flex flex-inline pb-2">
                                <a href="https://big-sky-lodges.herokuapp.com" className="card-link">
                                    <p className="link deploy"></p>
                                </a>
                                <a href="https://github.com/ohSweetWampum/Big-Sky-Lodges" className="card-link">
                                    <p className="link github"></p>
                                </a>
                            </div>
                            <h5 className="card-title">Big Sky Lodges</h5>
                            <p className="card-text">A full-stack application which offers a secure 
                            and user-friendly interface for managing hotel reservations across multiple branches 
                            based on different room types.</p>
                        </div>
                        <div className="card-body d-flex flex-row flex-wrap justify-content-around">
                            <p className="skill">Express</p>
                            <p className="skill">Node.js</p>
                            <p className="skill">Sequelize</p>
                            <p className="skill">Handlebars</p>
                            <p className="skill">Anime.js</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 d-flex justify-content-center">
                    <div className="card">
                        <img src={voiceOfPeople} className="card-img-top custom-prj-img" alt="Voice Of People" />
                        <div className="card-body">
                            <div className="d-flex flex-inline pb-2">
                                <a href="https://voice-of-people.herokuapp.com" className="card-link">
                                    <p className="link deploy"></p>
                                </a>
                                <a href="https://github.com/Bhmerir/voice-of-people" className="card-link">
                                    <p className="link github"></p>
                                </a>
                            </div>
                            <h5 className="card-title">Voice of People</h5>
                            <p className="card-text">A CMS-style platform in which people can leave a post in form of a text, 
                            and interact with the other commentator by leaving a comment on their post.</p>
                        </div>
                        <div className="card-body d-flex flex-row flex-wrap justify-content-evenly">
                            <p className="skill">Express</p>
                            <p className="skill">Node.js</p>
                            <p className="skill">Sequelize</p>
                            <p className="skill">Handlebars</p>
                            <p className="skill">Bcrypt</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 d-flex justify-content-center">
                    <div className="card">
                        <img src={barista} className="card-img-top custom-prj-img" alt="Barista" />
                        <div className="card-body">
                            <div className="d-flex flex-inline pb-2">
                                <a href="https://jonnyboy808.github.io/barista" className="card-link">
                                    <p className="link deploy"></p>
                                </a>
                                <a href="https://github.com/jonnyboy808/barista" className="card-link">
                                    <p className="link github"></p>
                                </a>
                            </div>
                            <h5 className="card-title">Barista</h5>
                            <p className="card-text">This application will display a list of the names and addresses of cafes with their locations 
                            in bing map when a user input a chosen city in the search box.</p>
                        </div>
                        <div className="card-body d-flex flex-row flex-wrap justify-content-evenly">
                            <p className="skill">Bulma</p>
                            <p className="skill">CSS</p>
                            <p className="skill">JavaScript</p>
                            <p className="skill">Restful APIs</p>
                            <p className="skill">Anime.js</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-wrap align-items-center mt-5">
                <div className="col-md-4 mb-4 d-flex justify-content-center">
                    <div className="card">
                        <img src={weatherForecast} className="card-img-top custom-prj-img" alt="Weather Forecast Travel Guide" />
                        <div className="card-body">
                            <div className="d-flex flex-inline pb-2">
                                <a href="https://bhmerir.github.io/weather-forecast-travel-guide" className="card-link">
                                    <p className="link deploy"></p>
                                </a>
                                <a href="https://github.com/Bhmerir/weather-forecast-travel-guide" className="card-link">
                                    <p className="link github"></p>
                                </a>
                            </div>
                            <h5 className="card-title">Weather Forecast Travel Guide App</h5>
                            <p className="card-text">This application gives the weather forecast including today and the 
                            next five days for each searched city.</p>
                        </div>
                        <div className="card-body d-flex flex-row flex-wrap justify-content-evenly">
                            <p className="skill">Bootstrap</p>
                            <p className="skill">CSS</p>
                            <p className="skill">JQuery</p>
                            <p className="skill">Restful APIs</p>
                            <p className="skill">day.js</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 d-flex justify-content-center">
                    <div className="card">
                        <img src={employeeTracker} className="card-img-top custom-prj-img" alt="Streamlined Employee Tracker" />
                        <div className="card-body">
                            <div className="d-flex flex-inline pb-2">
                                <a href="https://github.com/Bhmerir/streamlined-employee-tracker" className="card-link">
                                    <p className="link github"></p>
                                </a>
                            </div>
                            <h5 className="card-title">Streamlined Employee Tracker</h5>
                            <p className="card-text">This human resource program lets the user 
                            define the different departments of a company, the roles of each department, 
                            the employees, and their managers.</p>
                        </div>
                        <div className="card-body d-flex flex-row flex-wrap justify-content-evenly">
                            <p className="skill">JavaScript</p>
                            <p className="skill">Node.js</p>
                            <p className="skill">Inquirer</p>
                            <p className="skill">MySQL2</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 d-flex justify-content-center">
                <div className="card">
                        <img src={codingQuiz} className="card-img-top custom-prj-img" alt="Web Development Coding Quiz" />
                        <div className="card-body">
                            <div className="d-flex flex-inline pb-2">
                                <a href="https://bhmerir.github.io/web-development-coding-quiz" className="card-link">
                                    <p className="link deploy"></p>
                                </a>
                                <a href="https://github.com/Bhmerir/web-development-coding-quiz" className="card-link">
                                    <p className="link github"></p>
                                </a>
                            </div>
                            <h5 className="card-title">Web Development Coding Quiz</h5>
                            <p className="card-text">This project is a score-based quiz that examine the user's knowledge of 
                            coding JavaScript, HTML, and CSS in a limited time.</p>
                        </div>
                        <div className="card-body d-flex flex-row flex-wrap justify-content-evenly">
                            <p className="skill">HTML</p>
                            <p className="skill">CSS</p>
                            <p className="skill">JavaScript</p>
                            <p className="skill">Git</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
