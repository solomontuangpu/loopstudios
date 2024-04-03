import { DESKTOP_IMG, MOBILE_IMG } from "../imageData";
import ImageCard from "./ImageCard";

const Projects = () => {
  return (
    <section className='max-w-[1440px] mx-auto'>
      <article className=' mx-16 mt-16 md:mx-6'>
        <div className='flex justify-between mb-10'>
          <h1 className=' text-4xl uppercase font-light col-span-3 md:text-2xl sm:mx-auto sm:text-5xl xsm:text-3xl'>
            Our Creations
          </h1>
          <button className='hover:bg-black hover:text-white border-2 uppercase px-7 justify-self-end xsm:order-8 sm:hidden'>
            see all
          </button>
        </div>

        <div className='grid grid-cols-4 md:grid-cols-2 gap-8 sm:hidden'>
          {DESKTOP_IMG?.map(({ id, imgPath, titleTop, titleBot }) => (
            <ImageCard
              key={id}
              img={imgPath}
              titleTop={titleTop}
              titleBot={titleBot}
            />
          ))}
        </div>

        <div className='hidden sm:block space-y-10'>
          {MOBILE_IMG?.map(({ id, imgPath, titleTop, titleBot }) => (
            <ImageCard
              key={id}
              img={imgPath}
              titleTop={titleTop}
              titleBot={titleBot}
            />
          ))}

          <button className='hover:bg-black hover:text-white border-2 mx-auto uppercase px-10 py-3 justify-self-end xsm:order-8 sm:block'>
            see all
          </button>
        </div>
      </article>
    </section>
  );
};

export default Projects;
