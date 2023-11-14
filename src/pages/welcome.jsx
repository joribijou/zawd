import React from 'react';
import Nav from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Card from "../components/Card"
import apple from "../assets/apple.jpeg"
import flower from "../assets/flower.jpeg";
import flo from "../assets/flo.webp";

const Welcome = () => {
    return (
        <>
            <>
                <Nav />
                <Home />
                <div className="card">
                    <Card photo={apple} name="apple" price={280} />
                    <Card photo={flower} name="flower" price={250} />
                    <Card photo={flo} name="flo" price={200} />
                </div>

                <Footer />
            </>
        
        </>
    )
}
export default Welcome 