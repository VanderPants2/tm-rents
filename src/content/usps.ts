export type Usp = {
    icon: string;
    title: string;
    body: string;
};

export const usps: Usp[] = [
    {
        icon: 'fa-solid fa-layer-group',
        title: 'Alles van één adres',
        body: 'Bus, springkastelen, bar én stroom. Je hoeft niet bij vier verschillende verhuurders aan te kloppen.',
    },
    {
        icon: 'fa-solid fa-id-card',
        title: 'Chauffeur inbegrepen',
        body: 'Bij de partybus zit een chauffeur. Niemand van je groep moet nuchter blijven of de weg zoeken.',
    },
    {
        icon: 'fa-solid fa-user',
        title: 'Je spreekt met Tibo zelf',
        body: 'Geen callcenter, geen doorverwijzingen. Eén aanspreekpunt, van je eerste vraag tot het ophalen.',
    },
    {
        icon: 'fa-solid fa-bolt',
        title: 'Ook waar geen stroom is',
        body: 'Weiland, festivalterrein of achtertuin zonder aansluiting? Huur er een generator bij en alles draait.',
    },
];

export default usps;
