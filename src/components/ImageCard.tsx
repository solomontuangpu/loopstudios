type Props = {
  img: string;
  titleTop: string;
  titleBot: string;
};

const ImageCard = ({ img, titleTop, titleBot }: Props) => {
  return (
    <div className='relative cursor-pointer group'>
      <img
        className=' w-full filter grayscale-[10%]'
        src={img}
        alt={"an image of" + titleTop + " " + titleBot}
      />
      <div className='hidden group-hover:block  opacity-70 w-full h-full absolute top-0 left-0 bg-white'></div>
      <p className='text-white font-light uppercase text-3xl absolute bottom-6 left-10 group-hover:text-black'>
        {titleTop} <br></br> {titleBot}
      </p>
    </div>
  );
};

export default ImageCard;
