import React, {useState} from 'react';
import NavItem from './NavItem.tsx';

const Hamburger = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <div>
            <div
                className={'w-[15px]'}
                onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                }}
            >
                {isMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
            </div>
            {isMenuOpen ? (
                <div className={'absolute bg-black top-[120px] left-0 w-full px-4 rounded-b-2xl'}>
                    <ul className={'gap-2 py-4 flex-col sm:flex-row flex'}>
                        <NavItem linkTo={'/partybus'}>Partybus</NavItem>
                        <NavItem linkTo={'/springkastelen'}>Springkastelen</NavItem>
                        <NavItem linkTo={'/tapwagen'}>Tapwagen</NavItem>
                        <NavItem linkTo={'/contact'}>Contact</NavItem>
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default Hamburger;
