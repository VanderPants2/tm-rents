import {Img} from './types.ts';

export const partybusFotos: Img[] = [
    {
        src: './img/partybus/20.jpeg',
        alt: 'De partybus bij nacht op de kasseien, met discobol-belettering en rode PARTYBUS-letters op de flank',
        width: 1600,
        height: 1200,
    },
    {
        src: './img/partybus/19.jpeg',
        alt: 'De achterkant van de partybus bij nacht, geparkeerd voor een verlichte café-gevel',
        width: 1200,
        height: 1600,
    },
    {
        src: './img/partybus/13.jpeg',
        alt: 'De gele partybus met de LED-melding EVENEMENTENBUS boven de voorruit',
        width: 1268,
        height: 1600,
    },
    {
        src: './img/partybus/16.jpeg',
        alt: 'De partybus tijdens carnaval, met de LED-melding PRINSJ CARNAVAL SJALEN OP TOERNEE',
        width: 1245,
        height: 1600,
    },
    {
        src: './img/partybus/14.jpeg',
        alt: 'De partybus geparkeerd in een dorpsstraat tijdens een feestweekend',
        width: 1600,
        height: 1254,
    },
    {
        src: './img/partybus/17.jpeg',
        alt: 'Een groep in het rood verzamelt rond de partybus op een winterse dag',
        width: 1600,
        height: 1068,
    },
    {
        src: './img/partybus/15.jpeg',
        alt: 'De partybus voor de ingang van een woonzorgcentrum tijdens een uitstap',
        width: 1600,
        height: 1146,
    },
    {
        src: './img/partybus/18.jpeg',
        alt: 'Zijaanzicht van de partybus, met de omliggende gevels weerspiegeld in de flank',
        width: 1600,
        height: 1070,
    },
];

export const partybusVideos = [
    {
        src: './video/promo_video_partybus.mp4',
        poster: './img/video-poster/promo_video_partybus.jpg',
        title: 'Promofilm van de partybus',
    },
    {
        src: './video/video_carnaval_partybus.mp4',
        poster: './img/video-poster/video_carnaval_partybus.jpg',
        title: 'De partybus tijdens carnaval',
    },
];

export const baravanFotos: Img[] = [
    {
        src: './img/tapwagen/6.jpeg',
        alt: 'Het bord "de Baravan" naast de tapkraan, met een vol glas bier op de toog',
        width: 1200,
        height: 1600,
    },
    {
        src: './img/tapwagen/3.jpeg',
        alt: 'De houten toog van de Baravan onder het handgeschreven bord',
        width: 1200,
        height: 1600,
    },
    {
        src: './img/tapwagen/4.jpeg',
        alt: 'Het bord van de Baravan achter hangende planten, met rietjes in een beker op de toog',
        width: 1200,
        height: 1600,
    },
    {
        src: './img/tapwagen/5.jpeg',
        alt: 'De binnenkant van de Baravan met warme lichtjes boven de tapinstallatie',
        width: 1200,
        height: 1600,
    },
    {
        src: './img/tapwagen/2.jpeg',
        alt: 'Het bord van de Baravan tussen het groen, met de lichtslinger langs het dak',
        width: 1200,
        height: 1600,
    },
];

export const springkastelen: (Img & {name: string; body: string})[] = [
    {
        name: 'Diddl',
        body: 'Kleurrijk, vrolijk en met een glijbaan aan de rechterkant voor extra speelplezier.',
        src: './img/springkastelen/diddl.jpeg',
        alt: 'Het kleurrijke Diddl springkasteel met een glijbaan aan de rechterkant',
        width: 1200,
        height: 1600,
    },
    {
        name: 'Frozen',
        body: 'Een opblaasbaar speelparadijs met een klimgedeelte én een glijbaan. De klassieker onder de drie.',
        src: './img/springkastelen/frozen.jpeg',
        alt: 'Het Frozen springkasteel met klimgedeelte en glijbaan',
        width: 1203,
        height: 1600,
    },
    {
        name: 'Bungee',
        body: 'Onze sombrero: springen én slingeren tegelijk. Een blikvanger, en meteen de uitdagendste van de drie.',
        src: './img/springkastelen/bungee.jpeg',
        alt: 'Het Bungee springkasteel in de vorm van een kleurrijke sombrero',
        width: 1600,
        height: 1200,
    },
];

export const tiboEnRudy: Img = {
    src: './img/tibo_en_rudy.jpeg',
    alt: 'Tibo Mertens geeft buschauffeur Rudy een hand tijdens een evenement in de zaal',
    width: 1600,
    height: 1600,
};
