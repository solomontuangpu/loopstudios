import VrMan from "./../assets/images/desktop/image-interactive.jpg";

const About = () => {
  return (
    <section className='max-w-[1440px] mx-auto py-32'>
      <main className='flex mx-16 items-end gap-5 lg:justify-between lg:items-center md:mx-6 md:flex-col'>
        <img
          className=' xl:w-[600px] lg:w-[500px] md:w-full'
          src={VrMan}
          alt='A man wearing vr headset'
        />
        <article className=' ml-[-150px] pt-[100px] pl-[100px] bg-white  lg:ml-0 lg:pl-0 lg:pt-0 md:text-center'>
          <h1 className=' text-5xl mb-3 font-light uppercase lg:text-4xl md:text-3xl'>
            The leader in interactive vr
          </h1>
          <p className=' text-gray font-alata md:leading-6'>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </article>
      </main>
    </section>
  );
};

export default About;
