import {ReactNode} from 'react';
import {Img} from '../../content/types.ts';
import Container from '../ui/Container.tsx';
import Media from '../ui/Media.tsx';
import Section from '../ui/Section.tsx';
import SectionHeading from '../ui/SectionHeading.tsx';
import {cx} from '../../utils/utils.ts';

type Props = {
    children?: ReactNode;
    eyebrow?: string;
    id?: string;
    image: Img;
    intro?: string;
    /** Puts the image on the left instead of the right. */
    reverse?: boolean;
    title: string;
    tone?: 'nacht' | 'op';
};

/** Replaces the old ImageContentBlock and SplitBlock, which were ~80% the
 *  same component with different names. */
const SplitFeature = ({children, eyebrow, id, image, intro, reverse = false, title, tone = 'nacht'}: Props) => (
    <Section id={id} tone={tone}>
        <Container width={'breed'}>
            <div className={'grid items-center gap-10 lg:grid-cols-2 lg:gap-16'}>
                <div className={cx('flex flex-col gap-6', reverse && 'lg:order-2')}>
                    <SectionHeading eyebrow={eyebrow} intro={intro} title={title} />
                    {children}
                </div>

                <div className={cx('relative overflow-hidden rounded-blok border border-rand', reverse && 'lg:order-1')}>
                    <Media className={'aspect-[4/3]'} image={image} sizes={'(min-width: 1024px) 50vw, 100vw'} />
                </div>
            </div>
        </Container>
    </Section>
);

export default SplitFeature;
