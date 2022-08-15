import React from 'react'
import googl from './googl.jpg'
import google from './google.png'
import grid from './grid.png'
import carbon from './carbon.jpg'
import speech from './speech.jpg'
import icon from './icon.gif'
import './Component.css'

function Component() {
  return (
    <div className='google'>
        <div>
            <header className='title'>
                <div className='gmail'>
                    <a href='www.gmail.com'>Gmail</a>
                    <a href='www.gmail.com'>Images</a>
                    <img src={grid} alt='grid' />
                    <button id='but'>O</button>
                </div>
                <div className='card'>
                    <div className='goo'>
                    <img src={googl} alt='googl' />
                    </div>
                    <div className='go'>
                    <h4>It's been last 6 months since your last Google Account visits</h4>
                    <p>Confirm your settings to make sure they are still right for you</p>
                    <p>No, thanks<button>Confirm</button></p>
                    </div>
                </div>
        </header>
        </div>
        <div className='gooogle'>
            <div className='googl'>
                <h1><img src={google} alt='google' /></h1>
               
            </div>
            <div className='search'> 
                <img src={icon} alt='icon' />
                <input type="text" id='text' ></input>
                <img src={speech} alt='speech' />
            </div>
            <div className='goog'>
                <button>Google Search</button><button>I'm Feeling Lucky</button>
            </div>
            <p>Google offered in: <span>Hausa &nbsp; Igbo &nbsp; Ede Yoruba &nbsp; Nigerian Pidgin</span></p>
        </div>
        
            
            <footer className='footer'>
                <p className='nig'>Nigeria</p> <hr />
                <div className='gen-div'>
                    <div className='foot'>
                    <ul>
                        <li>About</li>
                        <li>Advertising</li>
                        <li>Business</li>
                        <li>How Search Works</li>
                    </ul>
                </div>
                <div className='carbon'>
                <div><img src={carbon} alt='carbon' /></div>
                <div>&copy; Olaniyi Israel Olufunmi 2021</div>
                </div>
                <div className='foo'>
                    <ul>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Settings</li>
                    </ul>
                </div>
                </div>
                
            </footer>
    

    </div>
  )
}

export default Component;