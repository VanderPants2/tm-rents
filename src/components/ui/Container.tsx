import {ReactNode} from 'react';
import {cx} from '../../utils/utils.ts';

type Props = {
    children: ReactNode;
    className?: string;
    width?: 'smal' | 'inhoud' | 'breed';
};

const widths = {
    smal: 'max-w-smal',
    inhoud: 'max-w-inhoud',
    breed: 'max-w-breed',
};

const Container = ({children, className, width = 'inhoud'}: Props) => (
    <div className={cx('mx-auto w-full px-5 sm:px-8', widths[width], className)}>{children}</div>
);

export default Container;
