import { useMemo, type SVGProps } from "react"

type checkboxProps = { checked: boolean, hover: boolean } & SVGProps<SVGSVGElement>
export default function CheckBox({ checked, hover, ...props }: checkboxProps) {

    const { strokeColor, fillColor, tick } = useMemo(() => {
        if (checked) {
            return { strokeColor: "#2469F6", fillColor: hover ? "#5087F8" : "#2469F6", tick: "#FFFFFF" }
        }

        return { strokeColor: hover ? "#BDBDBD" : "#CDCDCD", fillColor: "#FFFFFF", tick: hover ? "#E3E3E3" : "none" }
    }, [checked, hover])
    return (
        <svg
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M24 13.5L20.2286 17.2714L16.4571 21.0429L12 16.9286"
                stroke="white"
                strokeWidth={1.5}
                strokeLinecap="round"
            />
            <g clipPath="url(#clip0_1_163)">
                <rect x={6} y={6.5} width={23} height={23} rx={6} fill={fillColor} />
                <rect opacity={hover ? 1 : 0.6} x={6.5} y={7} width={22} height={22} rx={5.5} stroke={strokeColor} />
                {(hover || checked) && (<path
                    d="M9.68 18.092L15.2288 23.0271C15.2493 23.0453 15.2805 23.0437 15.299 23.0235L25.32 12.02"
                    stroke={tick}
                    strokeLinecap="round"
                />)}
            </g>
            <defs>
                <clipPath id="clip0_1_163">
                    <rect x={6} y={6.5} width={23} height={23} rx={6} fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}