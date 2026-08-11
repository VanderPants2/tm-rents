import {Outlet} from 'react-router-dom';
import Footer from './Footer.tsx';
import Header from './Header.tsx';
import ScrollToTop from './ScrollToTop.tsx';

/** One layout route wraps every page, so the header, the footer and scroll
 *  restoration are defined once instead of copy-pasted into six files. */
const SiteLayout = () => (
    <div className={'flex min-h-dvh flex-col'}>
        <a
            className={
                'sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full ' +
                'focus:bg-teal focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:text-nacht'
            }
            href={'#inhoud'}
        >
            Naar de inhoud
        </a>

        <ScrollToTop />
        <Header />

        <main className={'flex-1'} id={'inhoud'}>
            <Outlet />
        </main>

        <Footer />
    </div>
);

export default SiteLayout;
