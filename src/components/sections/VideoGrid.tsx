import Container from '../ui/Container.tsx';
import Section from '../ui/Section.tsx';
import SectionHeading from '../ui/SectionHeading.tsx';

type Video = {
    poster: string;
    src: string;
    title: string;
};

type Props = {
    videos: Video[];
};

const VideoGrid = ({videos}: Props) => (
    <Section id={'videos'} tone={'op'}>
        <Container width={'breed'}>
            <SectionHeading eyebrow={"Video's"} title={'De bus in actie'} />

            <div className={'mt-10 grid gap-5 sm:grid-cols-2'}>
                {videos.map((video) => (
                    <figure className={'flex flex-col gap-3'} key={video.src}>
                        {/* preload="none": 22 MB of MP4 used to load eagerly on this page. */}
                        <video
                            className={'w-full rounded-blok border border-rand bg-nacht'}
                            controls
                            poster={video.poster}
                            preload={'none'}
                        >
                            <source src={video.src} type={'video/mp4'} />
                            Je browser kan deze video niet afspelen.
                        </video>
                        <figcaption className={'font-mono text-xs uppercase tracking-[0.14em] text-krijt-dim'}>
                            {video.title}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </Container>
    </Section>
);

export default VideoGrid;
