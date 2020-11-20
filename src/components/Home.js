import React from 'react'
import '../stylesheets/Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className="home">
            <Banner/>
            <div className="home_section">
                <Card
                src="https://image.freepik.com/free-photo/
                high-view-cup-coffee-table_23-2148251697.jpg"
                title="First Card"
                description="This is the card demo for the airbnb clone website. The website is awesome developed using reactjs and firebase"
                ></Card>
               <Card
                src="https://image.freepik.com/free-photo/
                high-view-cup-coffee-table_23-2148251697.jpg"
                title="First Card"
                description="This is the card demo for the airbnb clone website. The website is awesome developed using reactjs and firebase"
                ></Card>
                <Card
                src="https://image.freepik.com/free-photo/
                high-view-cup-coffee-table_23-2148251697.jpg"
                title="First Card"
                description="This is the card demo for the airbnb clone website. The website is awesome developed using reactjs and firebase"
                ></Card>
               
            </div>
            <div className="home_section">
            <Card
                src="https://image.freepik.com/free-photo/
                high-view-cup-coffee-table_23-2148251697.jpg"
                title="First Card"
                description="This is the card demo for the airbnb clone website. The website is awesome developed using reactjs and firebase"
                price="500/day"
                ></Card>
                <Card
                src="https://image.freepik.com/free-photo/
                high-view-cup-coffee-table_23-2148251697.jpg"
                title="First Card"
                description="This is the card demo for the airbnb clone website. The website is awesome developed using reactjs and firebase"
                price="800/day"
                ></Card>
                <Card
                src="https://image.freepik.com/free-photo/
                high-view-cup-coffee-table_23-2148251697.jpg"
                title="First Card"
                description="This is the card demo for the airbnb clone website. The website is awesome developed using reactjs and firebase"
                price="900/day"
               ></Card>
            </div>
        </div>
    )
}

export default Home;
