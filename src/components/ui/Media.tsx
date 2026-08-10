import {Img} from '../../content/types.ts';
import {cx} from '../../utils/utils.ts';

type Props = {
    className?: string;
    image: Img;
    /** Eager-load and prioritise. Use for the hero only. */
    priority?: boolean;
    sizes?: string;
};

/** Every image on the site goes through here, so lazy-loading, the 640px
 *  variant and the intrinsic width/height that prevents layout shift are
 *  never forgotten on a one-off `<img>`. */
const Media = ({className, image, priority = false, sizes = '(min-width: 640px) 50vw, 100vw'}: Props) => (
    <img
        alt={image.alt}
        className={cx('block h-full w-full object-cover', className)}
        decoding={'async'}
        fetchPriority={priority ? 'high' : undefined}
        height={image.height}
        loading={priority ? 'eager' : 'lazy'}
        sizes={sizes}
        src={image.src}
        srcSet={`${image.src.replace(/\.jpe?g$/i, '-sm.jpeg')} 640w, ${image.src} ${image.width}w`}
        width={image.width}
    />
);

export default Media;
