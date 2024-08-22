
interface SexPositionCardProps {
    id: number;
    title: string;
    level: string;
    fileName: string;
    imageAlt: string;
}

const BADGE_COLORS: Record<string, string> = {
    Safe: 'bg-green-500',
    Dangerous: 'bg-orange-500',
    'Be careful': 'bg-red-500'
};

export function SexPositionCard({
    id,
    title,
    level,
    fileName,
    imageAlt
}: SexPositionCardProps) {
    return (
        <div className="relative flex flex-col items-center justify-center gap-2 text-slate-500 mb-4 animate__animated animate__fadeIn" title={title}>
            <span
                className={`${"rounded-md shadow-sm leading-7 px-3 absolute top-0 right-0 text-white text-xs"} ${BADGE_COLORS[level] ?? 'bg-slate-200'}`}
            >
                {level.toUpperCase()}
            </span>
            <img src={`images/positions/${fileName}`} alt={imageAlt} />
            <h3 className="mt-4">{`Position No: ${id}`}</h3>
            <p>{`Position Name: ${title}`}</p>
        </div>
    );
}
