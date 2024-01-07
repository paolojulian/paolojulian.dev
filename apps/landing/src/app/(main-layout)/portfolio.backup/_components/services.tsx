'use client';
import Container from '@/_components/layouts/container';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import SectionHeading from '@/app/(main-layout)/portfolio.backup/_components/common/section-heading';
import { SECTIONS } from '@/app/(main-layout)/portfolio.backup/_context/sections-context';
import { FunctionComponent } from 'react';

const SERVICES = [
  {
    name: 'Design',
    description:
      'With  a passion for UI and UX design, I strive to create visually appealing interfaces that aim to provide an intuitive user experience. My process, from wireframe to UI-ready design, is guided by a basic understanding of user needs, aimed at improving their product interaction.',
  },
  {
    name: 'Develop',
    description:
      'I offer comprehensive web and hybrid-mobile development services, handling both the front-end and back-end of your system. I use the latest technologies like Next.js, React-Native, Contentful, and Node.js to create SEO ready, responsive and dynamic systems that meet your specific needs and specifications.',
  },
  {
    name: 'Deploy',
    description:
      'I ensure that once your website is ready, it’s properly hosted and accessible to users on the internet. I handle everything from setting up servers and managing databases to ensuring security protocols are in place. I also perform routine maintenance and updates to keep your site running smoothly.',
  },
];

interface Props {
  // No Props
}

const ServicesSection: FunctionComponent<Props> = () => {
  return (
    <section
      id={SECTIONS[2]}
      className='bg-white flex flex-row flex-1 w-full z-10'
    >
      <Container className='flex flex-col pt-[100px] md:pt-16 w-full'>
        <div className='text-left'>
          <SectionHeading number={2} section='services'></SectionHeading>
        </div>
        <Stack className=''>
          {SERVICES.map((service, i) => (
            <div
              className='flex flex-col lg:flex-row gap-2 py-[20px] md:py-[50px] lg:items-center border-b border-slate-300'
              key={i}
            >
              <p className='text-left text-[16px] tracking-[4px]'>
                {`0${i + 1}`}
              </p>
              <Row className='w-full flex-1 lg:justify-center items-center lg:text-center'>
                <p className='text-2xl font-medium tracking-[6px] uppercase flex-1'>
                  {service.name}
                </p>
              </Row>
              <Row className='flex-1 justify-center items-center'>
                <p className='text-slate-500 text-base md:text-2xl'>
                  {service.description}
                </p>
              </Row>
            </div>
          ))}
        </Stack>
      </Container>
    </section>
  );
};

export default ServicesSection;
