export type Img = {
    /** Full-size source. A 640px `-sm` variant is expected next to it. */
    src: string;
    alt: string;
    width: number;
    height: number;
};

export type Service = {
    slug: string;
    name: string;
    /** The live `--service` hue for this service's pages and cards. */
    hue: string;
    icon: string;
    /** Short mono label above the name. */
    kicker: string;
    /** One line, used on the homepage card. */
    short: string;
    /** Lead paragraph on the service's own page. */
    intro: string;
    bullets: string[];
    /** Pre-fills the contact form's subject dropdown. */
    formSubject: string;
    to: string;
    /** Whether this service has a page of its own, or routes straight to contact. */
    hasPage: boolean;
    /** Omitted when there is no honest photo of it yet — the card falls back
     *  to an icon panel rather than borrowing a misleading picture. */
    image?: Img;
};
