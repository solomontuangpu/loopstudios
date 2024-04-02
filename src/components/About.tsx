import React from 'react'
import VrMan from "./../assets/images/desktop/image-interactive.jpg";


const About = () => {
  return (
    <section className='max-w-[1440px] mx-auto py-32'>
      <main className='flex mx-16 items-end'>
        <img src={VrMan} alt='A man wearing vr headset' />
        <article className=' ml-[-150px] pt-[100px] pl-[100px] bg-white'>
          <h1 className=' text-5xl mb-3 font-light uppercase'>
            The leader in interactive vr
          </h1>
          <p className=' text-gray font-alata'>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </article>
      </main>
    </section>
  );
}

export default About
