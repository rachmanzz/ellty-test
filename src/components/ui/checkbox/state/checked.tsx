import { STATE_FOCUSED, STATE_HOVER, STATE_PRESSED, type CheckBoxProps } from "./interfaces";

export default function Checked({ state, ...props }: CheckBoxProps) {
    const fill = state === STATE_HOVER || state === STATE_FOCUSED ? "#5087F8" : "#2469F6";

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
            {STATE_PRESSED === state && (
                <rect
                    opacity={0.1}
                    x={4.5}
                    y={5}
                    width={26}
                    height={26}
                    rx={7.5}
                    fill="#2469F6"
                    stroke="#2469F6"
                    strokeWidth={3}
                />
            )}
            <rect x={6} y={6.5} width={23} height={23} rx={6} fill={fill} />
            <path
                d="M9.67993 18.092L15.2287 23.0272C15.2492 23.0454 15.2805 23.0437 15.2989 23.0235L25.3199 12.02"
                stroke="white"
                strokeLinecap="round"
            />
        </svg>
    )
}
