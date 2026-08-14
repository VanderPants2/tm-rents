import {useEffect, useRef} from 'react';
import {Img} from '../../content/types.ts';

type Props = {
    images: Img[];
    /** `null` closes the dialog. */
    index: number | null;
    onClose: () => void;
    onIndexChange: (index: number) => void;
};

/** Built on <dialog>, so the focus trap, the backdrop and Esc-to-close come
 *  from the platform rather than from a stale dependency. */
const Lightbox = ({images, index, onClose, onIndexChange}: Props) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const isOpen = index !== null;

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen && !dialog.open) {
            dialog.showModal();
            document.body.style.overflow = 'hidden';
        } else if (!isOpen && dialog.open) {
            dialog.close();
        }

        if (!isOpen) document.body.style.overflow = '';
    }, [isOpen]);

    useEffect(() => () => void (document.body.style.overflow = ''), []);

    if (images.length === 0) return null;

    const step = (delta: number) => {
        if (index === null) return;
        onIndexChange((index + delta + images.length) % images.length);
    };

    const current = index === null ? images[0] : images[index];

    return (
        <dialog
            aria-label={'Foto bekijken'}
            className={
                'max-h-none max-w-none bg-transparent p-0 text-krijt backdrop:bg-nacht/95 ' +
                'inset-0 m-0 h-full w-full open:flex open:items-center open:justify-center'
            }
            onClick={(event) => {
                if (event.target === dialogRef.current) onClose();
            }}
            onClose={onClose}
            onKeyDown={(event) => {
                if (event.key === 'ArrowRight') step(1);
                if (event.key === 'ArrowLeft') step(-1);
            }}
            ref={dialogRef}
        >
            <div className={'relative flex h-full w-full flex-col items-center justify-center gap-4 p-4 sm:p-8'}>
                <img
                    alt={current.alt}
                    className={'max-h-[78vh] w-auto max-w-full rounded-blok object-contain'}
                    height={current.height}
                    src={current.src}
                    width={current.width}
                />


                <div className={'flex items-center gap-3 font-mono text-xs text-krijt-dim'}>
                    <button
                        aria-label={'Vorige foto'}
                        className={'grid h-11 w-11 place-items-center rounded-full border border-rand hover:border-krijt'}
                        onClick={() => step(-1)}
                        type={'button'}
                    >
                        <i aria-hidden className={'fa-solid fa-chevron-left'} />
                    </button>
                    <span>
                        {(index ?? 0) + 1} / {images.length}
                    </span>
                    <button
                        aria-label={'Volgende foto'}
                        className={'grid h-11 w-11 place-items-center rounded-full border border-rand hover:border-krijt'}
                        onClick={() => step(1)}
                        type={'button'}
                    >
                        <i aria-hidden className={'fa-solid fa-chevron-right'} />
                    </button>
                </div>

                <button
                    aria-label={'Sluiten'}
                    className={
                        'absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full ' +
                        'border border-rand bg-nacht/60 hover:border-krijt sm:right-8 sm:top-8'
                    }
                    onClick={onClose}
                    type={'button'}
                >
                    <i aria-hidden className={'fa-solid fa-xmark'} />
                </button>
            </div>
        </dialog>
    );
};

export default Lightbox;
