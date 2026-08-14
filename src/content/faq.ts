/**
 * TODO(tibo) - twee antwoorden hieronder staan bewust vaag omdat alleen jij
 * de juiste info hebt. Laat ze weten en ze worden concreet gemaakt:
 *
 *   1. 'In welke regio komen jullie?'  - tot hoever leveren jullie, en vanaf
 *      welke afstand rekenen jullie transport aan?
 *   2. 'Wat als het slecht weer is?'   - kan een klant kosteloos annuleren of
 *      verplaatsen, en tot wanneer?
 *
 * Ook goed om te bevestigen: klopt het dat jullie álles zelf leveren, plaatsen
 * en weer ophalen? Die belofte staat nu in 'Zo werkt het' en bij Waarom TM Events.
 */

export type FaqItem = {
    question: string;
    answer: string;
};

export const faq: FaqItem[] = [
    {
        question: 'Hoe lang op voorhand moet ik reserveren?',
        answer:
            'Hoe vroeger hoe beter, zeker voor weekends in het zomerseizoen en rond carnaval. Stuur je datum door en ' +
            'je hoort snel of alles nog vrij is.',
    },
    {
        question: 'Wat kost het?',
        answer:
            'Dat hangt af van je datum, hoe lang je het nodig hebt en waar het naartoe moet. Bel even of stuur je datum ' +
            'door via het formulier, dan krijg je snel een concreet antwoord in plaats van een vage richtprijs.',
    },
    {
        question: 'Zit er een chauffeur bij de partybus?',
        answer:
            'Ja, de chauffeur is inbegrepen. Niemand van je groep hoeft nuchter te blijven of de route uit te zoeken, ' +
            'en achteraf raakt iedereen weer thuis.',
    },
    {
        question: 'Wat heb ik nodig voor een springkasteel?',
        answer:
            'Een vlak stuk grond dat groot genoeg is, en een stopcontact in de buurt voor de blower. Is er ter plaatse ' +
            'geen stroom? Dan huur je er gewoon een generator bij.',
    },
    {
        question: 'In welke regio komen jullie?',
        answer:
            'We werken vooral in de eigen regio, maar verder rijden kan meestal ook. Geef je locatie mee in je aanvraag, ' +
            'dan laten we meteen weten of het lukt.',
    },
    {
        question: 'Wat als het slecht weer is?',
        answer:
            'De springkastelen en de Baravan staan het liefst droog. Bespreek het even op voorhand, dan zoeken we samen ' +
            'naar een oplossing of een opstelling die wel werkt.',
    },
];

export default faq;
