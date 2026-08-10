import {cx} from '../../utils/utils.ts';

type Props = {
    className?: string;
    items: string[];
};

const BulletList = ({className, items}: Props) => (
    <ul className={cx('flex flex-col gap-3', className)}>
        {items.map((item) => (
            <li className={'flex gap-3 text-krijt-dim'} key={item}>
                <span aria-hidden className={'mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--service)'} />
                {item}
            </li>
        ))}
    </ul>
);

export default BulletList;
