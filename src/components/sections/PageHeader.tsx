import {Img} from '../../content/types.ts';
import Container from '../ui/Container.tsx';
import Lichtslinger from '../layout/Lichtslinger.tsx';
import Media from '../ui/Media.tsx';

type Props = {
    eyebrow?: string;
    image?: Img;
    intro?: string;
    title: string;
};

/** The band every inner page opens with. Carries the page's single
 *  lichtslinger, so the signature appears exactly once per page. */
const PageHeader = ({eyebrow, image, intro, title}: Props) => (
    <div className={'relative isolate overflow-hidden border-b border-rand'}>
        {image ? (
            <div className={'absolute inset-0 -z-10'}>
                <Media image={image} priority sizes={'100vw'} />
                <div className={'absolute inset-0 bg-nacht/80'} />
                <div className={'absolute inset-0 bg-gradient-to-b from-nacht/70 via-transparent to-nacht'} />
            </div>
        ) : null}

        <Lichtslinger className={'absolute inset-x-0 top-0'} count={26} />

        <Container width={'breed'}>
            <div className={'flex flex-col gap-5 pb-14 pt-24 sm:pb-20 sm:pt-32'}>
                {eyebrow ? (
                    <div className={'flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-(--service)'}>
                        <span aria-hidden className={'h-px w-6 bg-(--service)'} />
                        {eyebrow}
                    </div>
                ) : null}

                <h1 className={'display-kop offset-schaduw max-w-[14ch] text-4xl'}>{title}</h1>

                {intro ? <p className={'max-w-[58ch] text-lg text-krijt/85 text-pretty'}>{intro}</p> : null}
            </div>
        </Container>
    </div>
);

export default PageHeader;
