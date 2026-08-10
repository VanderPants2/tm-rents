import Seo from '../components/layout/Seo.tsx';
import BulletList from '../components/ui/BulletList.tsx';
import Button from '../components/ui/Button.tsx';
import CtaBand from '../components/sections/CtaBand.tsx';
import Gallery from '../components/sections/Gallery.tsx';
import PageHeader from '../components/sections/PageHeader.tsx';
import Prose from '../components/ui/Prose.tsx';
import SplitFeature from '../components/sections/SplitFeature.tsx';
import VideoGrid from '../components/sections/VideoGrid.tsx';
import {getService} from '../content/services.ts';
import {partybusFotos, partybusVideos, tiboEnRudy} from '../content/galleries.ts';
import {serviceStyle} from '../utils/utils.ts';

const service = getService('partybus')!;

const PartyBus = () => (
    <div style={serviceStyle(service.hue)}>
        <Seo description={service.intro} image={service.image?.src} path={'/partybus'} title={'Partybus huren'} />

        <PageHeader eyebrow={service.kicker} image={service.image} intro={service.intro} title={'Partybus'} />

        <SplitFeature eyebrow={'Wat je krijgt'} image={partybusFotos[2]} title={'Een bus die al feest voor je aankomt'}>
            <BulletList items={service.bullets} />
            <Button state={{subject: service.formSubject}} to={'/contact'}>
                Vraag je datum aan
            </Button>
        </SplitFeature>

        <SplitFeature eyebrow={'Inbegrepen'} image={tiboEnRudy} reverse title={'Buschauffeur inbegrepen'} tone={'op'}>
            <Prose>
                <p>
                    Bij elke rit hoort een chauffeur. Rudy kent de baan, houdt de timing in het oog en brengt iedereen achteraf
                    weer thuis.
                </p>
                <p>
                    Niemand van je groep hoeft dus nuchter te blijven, de route uit te zoeken of zich zorgen te maken over de
                    terugrit.
                </p>
            </Prose>
        </SplitFeature>

        <Gallery images={partybusFotos} title={'De bus van dichtbij'} />
        <VideoGrid videos={partybusVideos} />

        <CtaBand subject={service.formSubject} title={'Klaar om te vertrekken?'} />
    </div>
);

export default PartyBus;
