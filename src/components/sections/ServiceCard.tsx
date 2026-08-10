import {Link} from 'react-router-dom';
import {Service} from '../../content/types.ts';
import Media from '../ui/Media.tsx';
import {serviceStyle} from '../../utils/utils.ts';

type Props = {
    service: Service;
};

const ServiceCard = ({service}: Props) => (
    <li style={serviceStyle(service.hue)}>
        <Link
            className={
                'group flex h-full flex-col overflow-hidden rounded-blok border border-rand bg-nacht-op ' +
                'transition-colors hover:border-(--service)'
            }
            state={service.hasPage ? undefined : {subject: service.formSubject}}
            to={service.to}
        >
            <div className={'relative aspect-[4/3] overflow-hidden'}>
                {service.image ? (
                    <>
                        <Media
                            className={'transition-transform duration-500 group-hover:scale-[1.03]'}
                            image={service.image}
                            sizes={'(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'}
                        />
                        <div className={'absolute inset-0 bg-gradient-to-t from-nacht-op via-nacht-op/20 to-transparent'} />
                    </>
                ) : (
                    <div className={'grid h-full w-full place-items-center bg-(--service)/8'}>
                        <i aria-hidden className={`${service.icon} text-5xl text-(--service)/40`} />
                    </div>
                )}
                <i aria-hidden className={`${service.icon} absolute bottom-4 left-5 text-2xl text-(--service)`} />
            </div>

            <div className={'flex flex-1 flex-col gap-3 p-5'}>
                <span className={'font-mono text-xs uppercase tracking-[0.16em] text-(--service)'}>{service.kicker}</span>
                <h3 className={'display-kop text-2xl'}>{service.name}</h3>
                <p className={'flex-1 text-sm text-krijt-dim'}>{service.short}</p>
                <span className={'flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-krijt'}>
                    {service.hasPage ? 'Bekijk' : 'Vraag aan'}
                    <i aria-hidden className={'fa-solid fa-arrow-right transition-transform group-hover:translate-x-1'} />
                </span>
            </div>
        </Link>
    </li>
);

export default ServiceCard;
