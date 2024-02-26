import React from 'react';

function Footer(props) {
    return (
        <div className='bg-[#212731] '>
            <div className=' ml-8 lg:ml-0 max-w-6xl mx-auto lg:grid lg:grid-cols-3 py-20'>
                <div>
                    <h1 className='text-white text-[1.3em] mb-2'>Categories</h1>
                    <p className="text-[#B6BDC4]">Web Builder</p>
                    <p className="text-[#B6BDC4]">Hosting</p>
                    <p className="text-[#B6BDC4]">Data Center</p>
                    <p className="text-[#B6BDC4]">Robotic-Automation</p>
                </div>
                <div>
                    <h1 className='text-white text-[1.3em] mb-2'>Contact</h1>
                    <p className="text-[#B6BDC4]">Contact</p>
                    <p className="text-[#B6BDC4]">Privacy Policy</p>
                    <p className="text-[#B6BDC4]">Terms Of Service</p>
                    <p className="text-[#B6BDC4]">Categories</p>
                    <p className="text-[#B6BDC4]">About</p>«
                </div>
                <div className='flex lg:justify-center items-center'>
                    <h1 className='text-[#B6BDC4] '>United States v</h1>
                </div>
            </div>

        </div>
    );
}

export default Footer;