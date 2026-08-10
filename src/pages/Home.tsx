import Seo from '../components/layout/Seo.tsx';
import CtaBand from '../components/sections/CtaBand.tsx';
import Faq from '../components/sections/Faq.tsx';
import Hero from '../components/sections/Hero.tsx';
import HowItWorks from '../components/sections/HowItWorks.tsx';
import Prose from '../components/ui/Prose.tsx';
import ServiceGrid from '../components/sections/ServiceGrid.tsx';
import SplitFeature from '../components/sections/SplitFeature.tsx';
import WhyUs from '../components/sections/WhyUs.tsx';
import faq from '../content/faq.ts';
import site from '../content/site.ts';
import {tiboEnRudy} from '../content/galleries.ts';

const description =
    'Partybus, springkastelen, de Baravan en stroom. Geleverd, geplaatst en weer opgehaald. ' +
    'Eén telefoontje en je feest is geregeld.';

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    description,
    url: site.domain,
    telephone: '+32470824801',
    email: site.email,
    vatID: `BE${site.vat.replace(/\./g, '')}`,
    image: `${site.domain}/img/partybus/20.jpeg`,
    sameAs: [site.instagram.href],
    areaServed: {'@type': 'Country', name: 'België'},
    founder: {'@type': 'Person', name: site.owner},
    mainEntity: {
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {'@type': 'Answer', text: item.answer},
        })),
    },
};

const Home = () => (
    <>
        <Seo description={description} image={'./img/partybus/20.jpeg'} path={'/'} title={`${site.name} — ${site.tagline}`} />
        <script dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}} type={'application/ld+json'} />

        <Hero />
        <ServiceGrid />
        <HowItWorks />
        <WhyUs />

        <SplitFeature
            eyebrow={'Achter TM Events'}
            id={'over-ons'}
            image={tiboEnRudy}
            reverse
            title={'Je spreekt met Tibo'}
            tone={'op'}
        >
            <Prose>
                <p>
                    TM Events is het werk van {site.owner}. Eén aanspreekpunt van begin tot eind: hij neemt je telefoon op, regelt
                    de planning, brengt het materiaal en haalt het nadien weer op.
                </p>
                <p>
                    Aan het stuur van de partybus zit Rudy. Hij houdt de route en de timing in het oog, zodat jullie achterin
                    niets anders hoeven te doen dan feesten.
                </p>
            </Prose>
        </SplitFeature>

        <Faq />
        <CtaBand />
    </>
);

export default Home;
