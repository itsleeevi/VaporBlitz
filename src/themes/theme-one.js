import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Auctions from '../components/Auctions/AuctionsOne';
import Loots from '../components/Loots/Loots.js';
import TopSeller from '../components/TopSeller/TopSellerOne';
import Collections from '../components/Collections/Collections';
import Explore from '../components/Explore/ExploreOne';
import Work from '../components/Work/Work';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class ThemeOne extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Hero />
                <Loots />
                <Auctions />
                <TopSeller/>               
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default ThemeOne;