import { useId } from "react"
import { STATE_FOCUSED, STATE_NORMAL, STATE_PRESSED, type CheckBoxProps } from "./interfaces";


export default function Uncheck({ state, ...props }: CheckBoxProps) {
    const mark = state !== STATE_NORMAL;
    const clipID = state === STATE_FOCUSED || state === STATE_PRESSED ? undefined : useId();
    const opacity = state === STATE_NORMAL ? 0.6 : 1;
    const fill = state === STATE_PRESSED ? "white" : "none";
    const strokeColor = state === STATE_NORMAL ? "#CDCDCD" : "#BDBDBD";
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
            <g clipPath={clipID ? `url(#clip_${clipID})` : undefined}>
                <rect x={6} y={6.5} width={23} height={23} rx={6} fill="white" />
                {state == STATE_PRESSED && (
                    <rect
                        opacity={0.1}
                        x={4.5}
                        y={5}
                        width={26}
                        height={26}
                        rx={7.5}
                        stroke="#2469F6"
                        strokeWidth={3}
                    />
                )}
                <rect
                    opacity={opacity}
                    x={6.5}
                    y={7}
                    width={22}
                    height={22}
                    rx={5.5}
                    fill={fill}
                    stroke={strokeColor}
                />
                {mark && (
                    <path
                        d="M9.67993 18.092L15.2287 23.0272C15.2492 23.0454 15.2805 23.0437 15.2989 23.0235L25.3199 12.02"
                        stroke={state === STATE_PRESSED ? "#878787" : "#E3E3E3"}
                        strokeLinecap="round"
                    />
                )}
            </g>
            {/* focus ngak ada def */}
            {clipID && (
                <defs>
                    <clipPath id={`clip_${clipID}`}>
                        <rect x={6} y={6.5} width={23} height={23} rx={6} fill="white" />
                    </clipPath>
                </defs>
            )}

        </svg>
    )
}
