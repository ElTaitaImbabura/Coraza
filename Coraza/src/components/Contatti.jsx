import React from 'react'
import map from '../assets/map.png'
import linkedinIcon from '../assets/linkedin.webp';
import bgPattern from '../assets/bgPattern.webp';


function Contatti() {
  return (
    <div>
      <div className="py-10 shadow-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </div>
      <div className='bg-color text-white py-2 flex justify-center text-lg font-extrabold' style={{ background: '#2F3F5C'}}>
        <p className='mt-10'>Find our Milan offices here:</p>
      </div>
      <div className='bg-color text-orange-200 font-bold py-2 flex justify-center text-lg' style={{ background: '#2F3F5C'}}>
        <p>Piazza della Repubblica 12 - 20124 Milano</p>
      </div>
      <div className='bg-color  text-white font-extrabold py-2 flex justify-center text-lg' style={{ background: '#2F3F5C'}}>
        CONTACT @
      </div>
      <div className='bg-color flex justify-center space-x-8 text-red-200 font-bold py-2 text-lg' style={{ background: '#2F3F5C'}}>
        <div>
          <p className='flex justify-center text-blue-200'>Alessandro Randazzo
            <a href="https://www.linkedin.com/in/avv-alessandro-randazzo/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 hover:opacity-75"/>
            </a>
          </p>
          <p className='flex justify-center'>+39 351 561 1259</p>
          <p className='flex justify-center mb-4'>avv.randazzoalessandro@gmail.com</p>

          <p className='flex justify-center text-blue-200'>Valentina Vigliotti
            <a href="https://www.linkedin.com/in/valentina-vigliotti-960416157/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 hover:opacity-75"/>
            </a>
          </p>
          <p className='flex justify-center'>+39 349 079 4130</p>
          <p className='flex justify-center'>avv.valentinavigliotti@gmail.com</p>
        </div>
        <div>
          <p className='flex justify-center text-blue-200'>Arturo Pinchetti
            <a href="https://www.linkedin.com/in/arturo-pinchetti-4b5362160/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 hover:opacity-75"/>
            </a>
          </p>
          <p className='flex justify-center'>+39 347 559 6614</p>
          <p className='flex justify-center mb-4'>arturo.pinchetti@gmail.com</p>

          <p className='flex justify-center text-blue-200'>Federica Strada
            <a href="https://www.linkedin.com/in/federica-strada-a3855b15b/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 hover:opacity-75"/>
            </a>
          </p>
          <p className='flex justify-center'>+39 338 692 8000</p>
          <p className='flex justify-center'>federica@avvstrada.it</p>
        </div>
      </div>
      <div className='bg-color  text-white font-bold py-2 flex justify-center' style={{ background: '#2F3F5C', color: '#2F3F5C'}}>
        .
      </div>
      <div className='bg-color  text-white font-bold py-2 flex justify-center' style={{ background: '#2F3F5C'}}>
        <img src={map} alt="Stud" className='w-1/2 border-8 border-blue-200 rounded-lg'/>
      </div>
      <div className='bg-color  text-white font-bold py-2 flex justify-center' style={{ background: '#2F3F5C', color: '#2F3F5C'}}>
        .
      </div>
    </div>
  )
}

export default Contatti