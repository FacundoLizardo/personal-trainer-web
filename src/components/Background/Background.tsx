import Image from 'next/image';

const Background = () => {
  return (
    <div className="absolute inset-0 z-[-1] opacity-40 overflow-hidden">
      <Image
        src="/images/home/home-pic.jpg"
        alt="imagen del personal trainer con el alumno"
        priority={true}
        layout="fill"
        quality={100}
        className="object-cover"
      />
    </div>
  );
};

export default Background;
