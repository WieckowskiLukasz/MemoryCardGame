import React from 'react';
import bg from './assets/wood4.jpg';
import images from './components/Images.ts';

export default function Game() {

  return (
    <>
      <div className='game'>
        <div 
            className='background-image'
            style={{
              backgroundImage:`url(${bg})`,
              filter: `brightness(80%)`,
            }}>
          </div>
          <div className='game__card-container'>
            
            <div className='game__flip-card'>
              <div className='game__card'>
                <div className="game__card-front">
                  
                </div>
                <div className="game__card-back" style={{
              backgroundImage:`url(${images[1]})`,
              filter: `brightness(80%)`,
            }}>
                  
                </div>
              </div>
            </div>

            <div className='game__flip-card'>
              <div className='game__card'>
                <div className="game__card-front">
                  
                </div>
                <div className="game__card-back">

                </div>
              </div>
            </div>

            <div className='game__flip-card'>
              <div className='game__card'>
                <div className="game__card-front">
                  
                </div>
                <div className="game__card-back">

                </div>
              </div>
            </div>
        
          </div>
      </div>
    </>
  )
}
