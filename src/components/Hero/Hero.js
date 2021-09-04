import React, { Component } from 'react';

const initData = {
    pre_heading: "VAPORBLITZ",
    heading: "Win BNB from playing and collect ingame NFTs.",
    content: "",
    btn_1: "Explore",
    btn_2: "Play Vaporblitz"
}

class Hero extends Component {
    state = {
        data: {}
    }
    componentDidMount(){
        this.setState({
            data: initData
        })
    }
    render() {
        return (
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-7">
                            <span>{this.state.data.pre_heading}</span>
                            <h1 className="mt-4">{this.state.data.heading}</h1>
                            <p>{this.state.data.content}</p>
                            {/* Buttons */}
                            <div className="button-group">
                                <a className="btn btn-bordered-white" href="/explore-1"><i className="icon-rocket mr-2" />{this.state.data.btn_1}</a>
                                <a className="btn btn-play-vaporblitz" href="/create"><i className="icon-note mr-2" />{this.state.data.btn_2}</a> 
                            </div>
                        </div>
                    </div>
                </div>
                {/* Shape */}
                <div className="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 465" version="1.1">
                        <defs>
                            <linearGradient x1="49.7965246%" y1="28.2355058%" x2="49.7778147%" y2="98.4657689%" id="linearGradient-1">
                            <stop stopColor="rgba(69,40,220, 0.15)" offset="0%" />
                            <stop stopColor="rgba(87,4,138, 0.15)" offset="100%" />
                            </linearGradient>
                        </defs>
                        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                         
                        
                        </g>
                    </svg>
                </div>
            </section>
        );
    }
}

export default Hero;