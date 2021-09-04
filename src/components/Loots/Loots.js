import React, { Component } from 'react';

const initData = {
    pre_heading: "",
    heading: "",
    btn_1: "",
    btn_2: ""
}

const data = [
    {
        id: "1",
        img: "/img/auction_1.jpg",
        title: "BOX 1",
        date: "2022-03-30",
        price: "3.2 BNB",
    },
    {
        id: "2",
        img: "/img/auction_2.jpg",
        title: "BOX 2",
        date: "2022-03-30",
        price: "2.3 BNB",
    },
    {
        id: "3",
        img: "/img/auction_3.jpg",
        title: "BOX 3",
        date: "2022-03-30",
        price: "1 BNB",
    },
]

class Loots extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            
                <div className="container">
                    <br />
                    <div className="row">
                        
                    </div>
                    <div className="row items justify-content-center">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`exo_${idx}`} className="col-12 col-sm-6 col-lg-3 item justify-content-center">
                                    <div className="card">
                                        <div className="image-over">
                                            <a href="/item-details">
                                                <img className="card-img-top" src={item.img} alt="" />
                                                <div className="countdown d-flex justify-content-center" data-date={item.date}/>
                                                <a className="btn btn-bordered-white btn-smaller mt-3 d-flex justify-content-center" href="/login"><i className="icon-handbag mr-2" />Pre Order</a>
                                                <br />
                                                <div className="card-bottom d-flex justify-content-center">
                                                    <span>{item.price}</span>
                                        
                                                </div>
                                            </a>
                                        </div>  
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                  
                </div>
           
        );
    }
}

export default Loots;