import {useState} from 'react';
import {Img} from '../../content/types.ts';
import Container from '../ui/Container.tsx';
import Lightbox from '../ui/Lightbox.tsx';
import Media from '../ui/Media.tsx';
import Section from '../ui/Section.tsx';
import SectionHeading from '../ui/SectionHeading.tsx';

type Props = {
    eyebrow?: string;
    images: Img[];
    title?: string;
    tone?: 'nacht' | 'op';
};

const Gallery = ({eyebrow = "Foto's", images, title = 'Zo ziet het eruit', tone = 'nacht'}: Props) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section id={'fotos'} tone={tone}>
            <Container width={'breed'}>
                <SectionHeading eyebrow={eyebrow} title={title} />

                <ul className={'mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4'}>
                    {images.map((image, index) => (
                        <li key={image.src}>
                            <button
                                className={
                                    'group block w-full overflow-hidden rounded-blok border border-rand ' +
                                    'transition-colors hover:border-(--service)'
                                }
                                onClick={() => setOpenIndex(index)}
                                type={'button'}
                            >
                                <span className={'sr-only'}>Vergroot foto: {image.alt}</span>
                                <Media
                                    className={'aspect-square transition-transform duration-500 group-hover:scale-[1.04]'}
                                    image={image}
                                    sizes={'(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw'}
                                />
                            </button>
                        </li>
                    ))}
                </ul>
            </Container>

            <Lightbox images={images} index={openIndex} onClose={() => setOpenIndex(null)} onIndexChange={setOpenIndex} />
        </Section>
    );
};

export default Gallery;
