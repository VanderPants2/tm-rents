import Seo from '../components/layout/Seo.tsx';
import BulletList from '../components/ui/BulletList.tsx';
import Button from '../components/ui/Button.tsx';
import CtaBand from '../components/sections/CtaBand.tsx';
import Gallery from '../components/sections/Gallery.tsx';
import PageHeader from '../components/sections/PageHeader.tsx';
import Prose from '../components/ui/Prose.tsx';
import SplitFeature from '../components/sections/SplitFeature.tsx';
import {baravanFotos} from '../content/galleries.ts';
import {getService} from '../content/services.ts';
import {serviceStyle} from '../utils/utils.ts';

const service = getService('tapwagen')!;

const Tapwagen = () => (
    <div style={serviceStyle(service.hue)}>
        <Seo description={service.intro} image={service.image?.src} path={'/tapwagen'} title={'Tapwagen huren'} />

        <PageHeader eyebrow={service.kicker} image={service.image} intro={service.intro} title={'De Baravan'} />

        <SplitFeature eyebrow={'Waarom de Baravan'} image={baravanFotos[3]} title={'Een bar die meteen opvalt'}>
            <BulletList items={service.bullets} />
            <Prose>
                <p>
                    Perfect voor een trouwfeest, een verjaardag, een bedrijfsfeest of een festival. Je gasten krijgen hun drankje
                    aan een echte toog in plaats van aan een klaptafel.
                </p>
            </Prose>
            <Button state={{subject: service.formSubject}} to={'/contact'}>
                Vraag je datum aan
            </Button>
        </SplitFeature>

        <Gallery images={baravanFotos} title={'De Baravan van dichtbij'} tone={'op'} />

        <CtaBand subject={service.formSubject} title={'Zin in een pint aan je eigen bar?'} />
    </div>
);

export default Tapwagen;
