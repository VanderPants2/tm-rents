import {Service} from './types.ts';

/**
 * The single source of truth for what TM Events rents out.
 * Feeds the nav, the homepage cards, the service pages and the contact
 * form's subject dropdown - those four lists used to drift apart.
 */
export const services: Service[] = [
    {
        slug: 'partybus',
        name: 'Partybus',
        hue: 'var(--color-magenta)',
        icon: 'fa-solid fa-bus',
        kicker: 'chauffeur inbegrepen',
        short: 'Vertrek samen, kom samen aan en dans de hele rit. De chauffeur zit erbij.',
        intro:
            'Maak van de rit zelf al een feest. De partybus brengt je groep naar de bestemming en weer veilig thuis, ' +
            'met plaats om te dansen, koeling voor je drank en speakers die het hele traject volhouden.',
        bullets: [
            'Ruime en comfortabele bus',
            'Genoeg plaats om de hele rit te dansen',
            'Uitgerust met ruime koeling voor je drank',
            'Krachtige speakers voor je eigen muziek',
            'Chauffeur inbegrepen, niemand van je groep hoeft te rijden',
        ],
        formSubject: 'Partybus',
        to: '/partybus',
        hasPage: true,
        image: {
            src: './img/partybus/20.jpeg',
            alt: 'De partybus bij nacht in een dorpskern, met discobol-belettering en de rode PARTYBUS-letters op de flank',
            width: 1600,
            height: 1200,
        },
    },
    {
        slug: 'springkastelen',
        name: 'Springkastelen',
        hue: 'var(--color-vermiljoen)',
        icon: 'fa-solid fa-children',
        kicker: 'drie kastelen',
        short: 'Diddl, Frozen of de sombrero. Wij brengen ze, zetten ze op en halen ze weer op.',
        intro:
            'Drie springkastelen om uit te kiezen, elk met zijn eigen karakter. Zet er een in de tuin, op het pleintje ' +
            'of in de zaal, en de kinderen vermaken zich de hele namiddag vanzelf.',
        bullets: [
            'Keuze uit Diddl, Frozen en de Bungee-sombrero',
            'Twee van de drie hebben een glijbaan',
            'Geschikt voor binnen en buiten',
            'Wij plaatsen het kasteel en halen het nadien weer op',
        ],
        formSubject: 'Springkastelen',
        to: '/springkastelen',
        hasPage: true,
        image: {
            src: './img/springkastelen/frozen.jpeg',
            alt: 'Het Frozen springkasteel met klimgedeelte en glijbaan, opgesteld in een tuin',
            width: 1203,
            height: 1600,
        },
    },
    {
        slug: 'tapwagen',
        name: 'De Baravan',
        hue: 'var(--color-teal)',
        icon: 'fa-solid fa-caravan',
        kicker: 'mobiele bar',
        short: 'Een volledig uitgeruste bar die naar jou toe komt. Tap, koeling en sfeer inbegrepen.',
        intro:
            'De Baravan is onze mobiele bar: zwart hout, warme lichtjes en een volledige tapinstallatie. Hij rijdt naar ' +
            'je trouwfeest, verjaardag, bedrijfsfeest of festival en staat er klaar wanneer je gasten aankomen.',
        bullets: [
            'Volledig uitgerust met tapinstallatie en koeling',
            'Een bar die meteen opvalt in plaats van wegvalt',
            'Past op zowat elke locatie',
            'Wij zetten hem klaar en ruimen nadien weer op',
        ],
        formSubject: 'Tapwagen',
        to: '/tapwagen',
        hasPage: true,
        image: {
            src: './img/tapwagen/1.jpeg',
            alt: 'De Baravan met het handgeschreven bord "de Baravan", warme lichtjes, ruw hout en hangende planten',
            width: 1600,
            height: 1600,
        },
    },
    {
        slug: 'generators',
        name: 'Generators',
        hue: 'var(--color-signaal)',
        icon: 'fa-solid fa-bolt',
        kicker: 'stroom op locatie',
        short: 'Geen stopcontact in de buurt? Dan brengen wij de stroom gewoon mee.',
        intro:
            'Een weiland, een festivalterrein of een plein zonder aansluiting: met een generator draait alles toch. ' +
            'Handig in combinatie met een springkasteel of de Baravan.',
        bullets: [
            'Voor locaties zonder stroomaansluiting',
            'Ideaal bij buitenfeesten en festivals',
            'Combineert met je springkasteel of de Baravan',
        ],
        formSubject: 'Generators',
        to: '/contact',
        hasPage: false,
    },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);

export default services;
