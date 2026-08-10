import {useId, useState} from 'react';
import {cx} from '../../utils/utils.ts';

type Item = {
    question: string;
    answer: string;
};

type Props = {
    className?: string;
    items: Item[];
};

const Accordion = ({className, items}: Props) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const baseId = useId();

    return (
        <div className={cx('divide-y divide-rand border-y border-rand', className)}>
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                const panelId = `${baseId}-panel-${index}`;
                const buttonId = `${baseId}-button-${index}`;

                return (
                    <div key={item.question}>
                        <h3>
                            <button
                                aria-controls={panelId}
                                aria-expanded={isOpen}
                                className={
                                    'flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-medium ' +
                                    'text-krijt transition-colors hover:text-(--service)'
                                }
                                id={buttonId}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                type={'button'}
                            >
                                {item.question}
                                <span
                                    aria-hidden
                                    className={cx(
                                        'grid h-8 w-8 shrink-0 place-items-center rounded-full border border-rand',
                                        'transition-transform duration-200',
                                        isOpen && 'rotate-45 border-(--service) text-(--service)',
                                    )}
                                >
                                    <i className={'fa-solid fa-plus text-xs'} />
                                </span>
                            </button>
                        </h3>
                        <div
                            aria-labelledby={buttonId}
                            className={cx(
                                'grid transition-[grid-template-rows] duration-300 ease-out',
                                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                            )}
                            id={panelId}
                            role={'region'}
                        >
                            <div className={'overflow-hidden'}>
                                <p className={'max-w-[62ch] pb-6 text-krijt-dim'}>{item.answer}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion;
