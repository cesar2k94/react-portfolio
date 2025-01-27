import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./astronaout.json'),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
      <div className='ml-auto w-72 md:w-96 lg:w-2/5'>
        <div className='container' ref={container}></div>
      </div>
      <div className='max-w-md mb-auto space-y-5'>
        <h1 className='text-5xl font-bold md:text-7xl'>Hola, soy Julio Cesar.</h1>
        <p className='tracking-wide leading-relaxed'>
        Ingeniero Automático de formación, desarrollador de software de vocación. Full Stack Developer con gran capacidad de trabajo en equipo y autoaprendizaje, conocimiento de diferentes lenguajes de programación (JavaScript, C/C++, Matlab), librerías (React) y Frameworks ( Django). Amante de la tecnología, siempre buscando la manera de aprender y crecer en lo profesional y personal.{' '}
        </p>
      </div>
    </section>
  );
};

export default Hero;
