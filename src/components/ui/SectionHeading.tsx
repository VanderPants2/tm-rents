import {cx} from '../../utils/utils.ts';

type Props = {
    align?: 'left' | 'center';
    className?: string;
    /** Small mono label above the title. */
    eyebrow?: string;
    intro?: string;
    level?: 'h1' | 'h2';
    size?: 'md' | 'lg';
    title: string;
};

const sizes = {
    md: 'text-3xl',
    lg: 'text-4xl',
};

const SectionHeading = ({align = 'left', className, eyebrow, intro, level = 'h2', size = 'md', title}: Props) => {
    const Heading = level;

    return (
        <div className={cx('flex flex-col gap-4', align === 'center' && 'items-center text-center', className)}>
            {eyebrow ? (
                <div className={'flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-(--service)'}>
                    <span aria-hidden className={'h-px w-6 bg-(--service)'} />
                    {eyebrow}
                </div>
            ) : null}
            <Heading className={cx('display-kop offset-schaduw text-balance', sizes[size])}>{title}</Heading>
            {intro ? <p className={'max-w-[58ch] text-lg text-krijt-dim text-pretty'}>{intro}</p> : null}
        </div>
    );
};

export default SectionHeading;
