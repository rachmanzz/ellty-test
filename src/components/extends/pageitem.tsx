
// type pageItemsProps = {
//     children: string
//     check: boolean

import { useEffect, useRef, useState } from "react";
import CheckBox from "../ui/checkbox";

type pageItemProps = {
    checked: boolean
    label: string
    onCheck: ()=> void
}
export default function PageItem({checked, label, onCheck}:pageItemProps) {

    const ref = useRef<HTMLButtonElement>(null)
    const mountRef = useRef<boolean>(false)

    const [hover, setHoverEnter] = useState(false)

    useEffect(() => {
        if (!mountRef.current) {
            mountRef.current = true
            function onClick() {
                onCheck()
            }
            function onLeave () { setHoverEnter(()=> false) }
            function onEnter () { setHoverEnter(()=> true) }
            ref.current?.addEventListener("click", onClick)
            ref.current?.addEventListener("mouseenter", onEnter)
            ref.current?.addEventListener("mouseleave", onLeave)
        }
        // Cleanup function not needed as event listeners are attached to a stable ref
    }, [])
    return (
        <button className="page-item" ref={ref}>
            <div>{label}</div>
            <div>
                <CheckBox hover={hover} style={{ width: 35, height: 35 }} checked={checked} />
            </div>
        </button>
    )
}