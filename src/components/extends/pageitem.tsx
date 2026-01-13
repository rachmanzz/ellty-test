import { useEffect, useRef, useState } from "react";
import { STATE_FOCUSED, STATE_HOVER, STATE_NORMAL, STATE_PRESSED, type EVENT_STATES } from "../ui/checkbox/state/interfaces";
import CustomCheckBox from "../ui/checkbox";

type pageItemProps = {
    checked: boolean
    label: string
    onCheck: ()=> void
}
export default function PageItem({checked, label, onCheck}:pageItemProps) {

    const ref = useRef<HTMLButtonElement>(null)
    const mountRef = useRef<boolean>(false)

    const [eventState, setEventState] = useState<EVENT_STATES>(STATE_NORMAL)

    useEffect(() => {
        if (!mountRef.current) {
            mountRef.current = true
            function onClick() {
                onCheck()
            }
            let StateOnFocus = false;
            let StateOnHover = false;
            let StateOnPress = false;
            function onEnter () {
                StateOnHover = true; 
                setEventState(StateOnPress? STATE_PRESSED : STATE_HOVER);
             }
            function onLeave () {
                StateOnHover = false;
                setEventState(StateOnFocus ? STATE_FOCUSED : STATE_NORMAL)
             }
            function onFocus () { 
                StateOnFocus = true;
                setEventState(StateOnPress? STATE_PRESSED : StateOnHover ? STATE_HOVER : STATE_FOCUSED)
            }
            function onFocusOut () {
                StateOnFocus = false;
                setEventState(e => e === STATE_FOCUSED ? STATE_NORMAL : e)
            }
            function onPressed() {
                StateOnPress = true;
                setEventState(STATE_PRESSED)
            }
            function onPressedOut() {
                StateOnPress = false;
                setEventState(StateOnHover ? STATE_HOVER : StateOnFocus ? STATE_FOCUSED : STATE_NORMAL)
            }
            ref.current?.addEventListener("focus", onFocus)
            ref.current?.addEventListener("blur", onFocusOut)
            ref.current?.addEventListener("pointerdown", onPressed)
            ref.current?.addEventListener("pointerup", onPressedOut)
            ref.current?.addEventListener("click", onClick)
            ref.current?.addEventListener("mouseenter", onEnter)
            ref.current?.addEventListener("mouseleave", onLeave)
        }
        // Cleanup function not needed as event listeners are attached to a stable ref
    }, [])
    return (
        <button className="page-item" ref={ref}>
            <div>{label}</div>
            <CustomCheckBox state={eventState} style={{ width: 35, height: 35 }} checked={checked} />
        </button>
    )
}