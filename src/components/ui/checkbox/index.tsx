import type { SVGProps } from "react"
import Checked from "./state/checked"
import type { EVENT_STATES } from "./state/interfaces"
import Uncheck from "./state/uncheck"

type CheckProps = {
    state: EVENT_STATES
    checked: boolean
} & SVGProps<SVGSVGElement>

export default function CustomCheckBox({state, checked, ...props}: CheckProps) {
    return checked ? <Checked state={state} {...props}/> : <Uncheck state={state} {...props}/>
}