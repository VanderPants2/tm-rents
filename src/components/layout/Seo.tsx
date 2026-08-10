import {useEffect} from 'react';
import site from '../../content/site.ts';

type Props = {
    description: string;
    /** Repo-relative path, e.g. './img/partybus/20.jpeg'. Made absolute here. */
    image?: string;
    path: string;
    title: string;
};

const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
    let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
    }

    tag.setAttribute('content', content);
};

const setCanonical = (href: string) => {
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
    }

    link.href = href;
};

/**
 * This is a client-rendered SPA with one static index.html, so without this
 * every route shared a single title, description and canonical URL.
 */
const Seo = ({description, image, path, title}: Props) => {
    useEffect(() => {
        const url = `${site.domain}${path}`;
        const fullTitle = path === '/' ? title : `${title} — ${site.name}`;

        document.title = fullTitle;
        setMeta('name', 'title', fullTitle);
        setMeta('name', 'description', description);
        setMeta('property', 'og:title', fullTitle);
        setMeta('property', 'og:description', description);
        setMeta('property', 'og:url', url);
        setMeta('property', 'twitter:title', fullTitle);
        setMeta('property', 'twitter:description', description);
        setCanonical(url);

        if (image) {
            const absolute = `${site.domain}${image.replace(/^\./, '')}`;
            setMeta('property', 'og:image', absolute);
            setMeta('property', 'twitter:image', absolute);
        }
    }, [description, image, path, title]);

    return null;
};

export default Seo;
