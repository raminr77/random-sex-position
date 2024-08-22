import { SEX_LEVELS } from "../constants/filters";

interface SexPositionCardProps {
    id?: number;
    title?: string;
    level?: string;
    fileName: string;
    imageAlt?: string;
}

const BADGE_COLORS: Record<string, string> = {
    [SEX_LEVELS.SAFE]: 'bg-green-500',
    [SEX_LEVELS.BE_CAREFUL]: 'bg-red-500',
    [SEX_LEVELS.DANGEROUS]: 'bg-orange-500'
};

export function SexPositionCard({
    id,
    level,
    fileName,
    title = '',
    imageAlt = ''
}: SexPositionCardProps) {
    return (
        <div
            title={title}
            className="relative border-dashed border rounded-lg p-5 flex flex-col items-center justify-center gap-2 text-slate-500 mb-4 animate__animated animate__fadeIn shadow-sm"
        >
            {level && (
                <span
                    className={`${"rounded-md shadow-sm leading-7 px-3 absolute top-5 right-5 text-white text-xs"} ${BADGE_COLORS[level] ?? 'bg-slate-200'}`}
                >
                    {level.toUpperCase()}
                </span>
            )}
            <img src={`images/positions/${fileName}`} alt={imageAlt} />
            <h3 className="mt-4">{id ? `Position No: ${id}` : 'More Than 500 Sex Positions'}</h3>
            <p>{title ? `Position Name: ${title}` : 'Get Your Random Position And Try It 😈'}</p>
        </div>
    );
}
