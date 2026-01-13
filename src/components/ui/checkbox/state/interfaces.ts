import type { SVGProps } from "react";

export const STATE_NORMAL = "none" as const;
export const STATE_HOVER = "hover" as const;
export const STATE_PRESSED = "pressed" as const;
export const STATE_FOCUSED = "focus" as const;

export type EVENT_STATES = typeof STATE_NORMAL | typeof STATE_HOVER | typeof STATE_PRESSED | typeof STATE_FOCUSED


export type CheckBoxProps = {
    state: EVENT_STATES
} & SVGProps<SVGSVGElement>
