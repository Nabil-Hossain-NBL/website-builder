import React from 'react';
import './style.css';

function InfiniteText(props) {
    return (
        <section className='absolute z-[1] w-[100%] overflow-hidden bg-transparent'>
            <div className='scroll w-[100%] flex'>
                <div className='text-[#181581] text-[1em] bg-transparent whitespace-nowrap'>
                    Bigg sale is going <span className='font-extrabold'>20% OFF</span> Bigg sale is going <span className='font-extrabold'>20% OFF</span> Bigg sale is going <span className='font-extrabold'>20% OFF</span> Bigg sale is going <span className='font-extrabold'>20% OFF</span> Bigg sale is going <span className='font-extrabold'>20% OFF</span> Bigg sale is going <span className='font-extrabold'>20% OFF</span> Bigg sale is going <span className='font-extrabold'>20% OFF</span> Bigg sale is going <span className='font-extrabold'>20% OFF</span>
                </div>
                <div className='text-[#181581] text-[1em] bg-transparent whitespace-nowrap'>
                    Bigg sale is going <span className='font-extrabold'>20% OFF</span> Bigg sale is going <span className='font-extrabold'>20% OFF</span> Bigg sale is going <span className='font-extrabold'>20% OFF</span> Bigg sale is going <span className='font-extrabold'>20% OFF</span> Bigg sale is going <span className='font-extrabold'>20% OFF</span> Bigg sale is going <span className='font-extrabold'>20% OFF</span> Bigg sale is going <span className='font-extrabold'>20% OFF</span> Bigg sale is going <span className='font-extrabold'>20% OFF</span>
                </div>
            </div>
        </section>
    );
}

export default InfiniteText;