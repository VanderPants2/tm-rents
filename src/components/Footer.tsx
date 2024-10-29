import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={'bg-black p-8 text-white'}>
            <div className={'flex flex-col items-center justify-center h-full max-h-full gap-8'}>
                <div className={'flex flex-col items-center w-full'}>
                    <div className={'text-2xl uppercase'}>
                        <span className={'text-teal-600'}>TM</span> - Rents
                    </div>
                    <div className={'flex justify-around w-full'}>
                        <div className={'w-full text-center'}>
                            <a href={'https://www.instagram.com/tm_rents/'} target={'_blank'}>
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                        <div className={'w-full text-center font-light'}>Verhuur voor evenementen</div>
                        <div className={'w-full text-center'}>Tel: 0470/82.48.01</div>
                    </div>
                </div>
                <ul className={'flex gap-8'}>
                    <Link to={'/baravan'}>
                        <li>Baravan</li>
                    </Link>
                    <Link to={'/springkastelen'}>
                        <li>Springkastelen</li>
                    </Link>
                    <Link to={'/party-bus'}>
                        <li>Party bus</li>
                    </Link>
                    <Link to={'/contact'}>
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
