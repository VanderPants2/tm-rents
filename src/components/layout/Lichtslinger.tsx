import {cx} from '../../utils/utils.ts';

type Props = {
    className?: string;
    count?: number;
};

/** The cable: a quadratic curve from edge to edge, sagging in the middle. */
const CABLE = 'M0 3 Q50 42 100 3';
const sagAt = (t: number) => (1 - t) ** 2 * 3 + 2 * (1 - t) * t * 42 + t ** 2 * 3;

/**
 * De lichtslinger - the one animated moment on the page.
 *
 * The Baravan has a string of warm bulbs along its roof, so this is the
 * brand's own object rather than a decoration. Bulbs warm on left to right
 * and then settle into a slow, staggered flicker; both animations are driven
 * off the index in CSS, so there is no per-frame JavaScript. Reduced motion is
 * handled globally in the base layer, which leaves every bulb simply lit.
 *
 * Used at most twice on a page: once under the header, once across the hero.
 */
const Lichtslinger = ({className, count = 22}: Props) => (
    <div aria-hidden className={cx('pointer-events-none relative h-12 w-full select-none text-(--service)', className)}>
        <svg className={'absolute inset-0 h-12 w-full text-krijt/20'} preserveAspectRatio={'none'} viewBox={'0 0 100 48'}>
            <path d={CABLE} fill={'none'} stroke={'currentColor'} strokeWidth={1} vectorEffect={'non-scaling-stroke'} />
        </svg>

        {Array.from({length: count}, (_, index) => {
            /* Inset half a step, so no bulb sits exactly on the edge and gets
               sliced in half by the band's overflow clip. */
            const t = (index + 0.5) / count;

            return (
                <span
                    className={'lamp absolute block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full'}
                    key={index}
                    style={{
                        left: `${t * 100}%`,
                        top: `${sagAt(t)}px`,
                        animationDelay: `${index * 60}ms, ${index * -1.37}s`,
                    }}
                />
            );
        })}
    </div>
);

export default Lichtslinger;
