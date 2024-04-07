import React, { useState, useEffect } from 'react';
import "./Home.css";
import {Link} from 'react-router-dom'
import streakimg from '../assets/streakimg.png'
import Spline from '@splinetool/react-spline';

function Home() {
    const [streak, setStreak] = useState(-1)

    useEffect(() => {
        const fetchStreak = async () => {
            // const response = await fetch('/api/main')
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };
            const response = await fetch("http://localhost:3001/api/main", requestOptions)
            const json = await response.json()

            if (response.ok) {
                setStreak(json.streak)
            }
        }

        fetchStreak()
    }, [])

    

    return (

        
        
        <div class="container">
           

            <div>
                <p class="greeting"> Hello, John!</p>
            </div>
        
            

            <Spline class="Unicorn" scene="https://prod.spline.design/p4WjuLMFFEbMOag6/scene.splinecode" />

            


            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20%'}}>
                <div  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={streakimg} alt='Streak' style={{ width: '22vw', height: 'auto'}}></img> 
                    <h4 class = 'streak' style={{fontSize: '15vw', marginRight: '20px', color: '#d2091c'}}>{streak} </h4>
                </div>

                <div>
                    {streak === 0 ? <h2 class ='streak'>Complete a task to start a streak!</h2> : <h2 class ='streak'>You're on fire!</h2>}
                
                </div>
            </div>


            <div class="header">
                <Link to='/tasks' class="userText">View Daily Tasks</Link>
            </div>
        </div>
    

    )
};






export default Home