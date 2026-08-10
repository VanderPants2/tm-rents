import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

/** Client-side navigation keeps the old scroll position, which made every
 *  route change land halfway down the new page. */
const ScrollToTop = () => {
    const {hash, pathname} = useLocation();

    useEffect(() => {
        if (hash) return;
        window.scrollTo({top: 0, behavior: 'instant'});
    }, [hash, pathname]);

    return null;
};

export default ScrollToTop;
