import {Link} from 'react-router-dom';
import NavItem from './NavItem.tsx';

const Header = () => {
    return (
        <header className={'bg-black p-8 text-white'}>
            <div className={'flex flex-col items-center justify-center h-full max-h-full'}>
                <div className={'flex flex-col items-center w-full'}>
                    <Link to={'/'}>
                        <div className={'text-2xl uppercase font-bold'}>
                            <span className={'text-teal-600'}>TM</span> - Rents
                        </div>
                    </Link>
                    <div className={'grid grid-cols-3 items-center w-full'}>
                        <div className={'text-center text-2xl'}>
                            <a
                                className={'transition-all hover:text-teal-600'}
                                href={'https://www.instagram.com/tm_rents/'}
                                target={'_blank'}
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                        <div className={'text-center font-light'}>Verhuur voor evenementen</div>
                        <div className={'flex justify-center'}>
                            <a href={'tel:+32470824801'}>
                                <div
                                    className={
                                        'px-6 py-3 bg-white text-teal-600 rounded-full font-semibold transition-all hover:text-white hover:bg-teal-600'
                                    }
                                >
                                    Tel: 0470/82.48.01
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <ul className={'flex gap-8 pt-4'}>
                    <NavItem linkTo={'/partybus'}>Partybus</NavItem>
                    <NavItem linkTo={'/springkastelen'}>Springkastelen</NavItem>
                    <NavItem linkTo={'/tapwagen'}>Tapwagen</NavItem>
                    <NavItem linkTo={'/contact'}>Contact</NavItem>
                </ul>
            </div>
        </header>
    );
};

export default Header;
