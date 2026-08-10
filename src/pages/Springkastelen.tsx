import Seo from '../components/layout/Seo.tsx';
import BulletList from '../components/ui/BulletList.tsx';
import Button from '../components/ui/Button.tsx';
import CtaBand from '../components/sections/CtaBand.tsx';
import PageHeader from '../components/sections/PageHeader.tsx';
import Prose from '../components/ui/Prose.tsx';
import SplitFeature from '../components/sections/SplitFeature.tsx';
import {getService} from '../content/services.ts';
import {springkastelen} from '../content/galleries.ts';
import {serviceStyle} from '../utils/utils.ts';

const service = getService('springkastelen')!;

const Springkastelen = () => (
    <div style={serviceStyle(service.hue)}>
        <Seo description={service.intro} image={service.image?.src} path={'/springkastelen'} title={'Springkastelen huren'} />

        <PageHeader eyebrow={service.kicker} image={service.image} intro={service.intro} title={'Springkastelen'} />

        {springkastelen.map((castle, index) => (
            <SplitFeature
                eyebrow={`Kasteel ${index + 1} van ${springkastelen.length}`}
                image={castle}
                key={castle.name}
                reverse={index % 2 === 1}
                title={castle.name}
                tone={index % 2 === 1 ? 'op' : 'nacht'}
            >
                <Prose>
                    <p>{castle.body}</p>
                </Prose>
            </SplitFeature>
        ))}

        <SplitFeature eyebrow={'Goed om te weten'} image={springkastelen[0]} reverse title={'Wat je nodig hebt'} tone={'op'}>
            <BulletList items={service.bullets} />
            <Prose>
                <p>
                    Een vlak stuk grond en een stopcontact in de buurt volstaan. Is er ter plaatse geen stroom, dan huur je er
                    gewoon een generator bij.
                </p>
            </Prose>
            <Button state={{subject: service.formSubject}} to={'/contact'}>
                Vraag je datum aan
            </Button>
        </SplitFeature>

        <CtaBand subject={service.formSubject} title={'Welk kasteel wordt het?'} />
    </div>
);

export default Springkastelen;
