
import { DESKTOP_IMG } from "../imageData";
import ImageCard from "./ImageCard";

const Projects = () => {
  return (
    <section className='max-w-[1440px] mx-auto'>
      <main className=' mx-16'>
        <div className=' flex justify-between'>
          <h1 className=' text-4xl uppercase font-light'>Our Creations</h1>
          <button className='hover:bg-black hover:text-white border-2 uppercase px-7'>
            see all
          </button>
        </div>

        <article className='mt-16 grid grid-cols-4 gap-8'>
          {DESKTOP_IMG?.map(({ id, imgPath, titleTop, titleBot }) => (
            <ImageCard
              key={id}
              img={imgPath}
              titleTop={titleTop}
              titleBot={titleBot}
            />
          ))}
        </article>
      </main>
    </section>
  );
}

export default Projects
