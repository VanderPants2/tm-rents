export type Step = {
    title: string;
    body: string;
};

/** A real sequence, which is why these are numbered. */
export const steps: Step[] = [
    {
        title: 'Kies wat je nodig hebt',
        body: 'Bus, springkasteel, bar, stroom of een combinatie. Weet je het nog niet zeker? Bel even, dan denken we mee.',
    },
    {
        title: 'Wij bevestigen datum en prijs',
        body: 'Je hoort snel of je datum nog vrij is en wat het precies kost. Geen verrassingen achteraf.',
    },
    {
        title: 'Wij leveren en halen weer op',
        body: 'Wij brengen alles ter plaatse, zetten het klaar en komen het nadien weer ophalen. Jij hoeft enkel te feesten.',
    },
];

export default steps;
