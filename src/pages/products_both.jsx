import React, { useState } from 'react';
import { kurtis,midSec, rowImg } from './Data';
import { Link } from 'react-router-dom';

const ImageWithHover = ({ src }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const imageHover = {
    transform: isHovered ? 'scale(0.8)' : 'scale(1)',
    border: isHovered ? '3px solid black' : '',
    filter: isHovered ? 'brightness(1.2)' : '',
    borderRadius: isHovered ? '6px' : '',
    cursor: isHovered ? 'pointer' : '',

  };


  return (
    <img
      src={src}
      className="card-img-top h-75"
      style={{ ...imageHover, transition: 'all 0.3s ease' }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      alt="..."
    />
  );
};

const Products_both = () => {
  return (
    <>
      <div className='flex justify-center gap-14 my-6'>
        {kurtis.map((kurti, index) => (
          <div className="card" style={{ width: '18rem' }} key={index}>
            <ImageWithHover src={kurti.image} />
            <div className="card-body">
              <p className="card-text" style={{ fontWeight: 'bold' }}>{kurti.title}</p>
              <p className="card-text " style={{ fontWeight: 'bold' }}>{kurti.price}</p>
            </div>
          </div>
        ))}
      </div>
      <hr />

      <div className='mt-5'>
        <h3 className='text-center alert-dark text-3xl' style={{ fontFamily: 'cursive' }}>SPOTLIGHT ON</h3>
        <div className="cards flex justify-center mt-4">
          {midSec.map((img) => (
            <img src={img.image} style={{ height: '35vh', padding: '0 .6rem' }} alt="" />
          ))}
{/*        
          <img src={midSec.image} style={{ height: '35vh', padding: '0 .6rem' }} alt="" /> */}
          {/* <img src={midSec.mid2.image} style={{ height: '35vh', padding: '0 .6rem' }} alt="" />
          <img src={midSec.mid3.image} style={{ height: '35vh', padding: '0 .6rem' }} alt="" />
          <img src={midSec.mid4.image} style={{ height: '35vh', padding: '0 .6rem' }} alt="" /> */}
        </div>
      </div>

      <div className='my-4'>
        <h3 className='text-center alert-dark text-3xl' style={{ fontFamily: 'cursive' }}>EDITOR’S PICK</h3>
        <div className="cards flex justify-center mt-4">
          <img src={rowImg} style={{ width: '71%', border: '2px solid gray', borderRadius: '6px', marginBottom: '2rem' }} alt="" />
        </div>
      </div>

      <div className='flex justify-center mb-5'>
        <Link to='/categories' className='animate__animated animate__shakeX bg-warning' style={{ textDecoration: 'none', border: '2px solid black', padding: '8px 10px', color: 'black', borderRadius: '8px', fontWeight: 'bold' }}>Shop Now</Link>
      </div>
    </>
  );
};

export default Products_both;


