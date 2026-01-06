import cn from "@/utils/cn"
import {} from "clsx"
export type buttonProps = {
    className?: string
    children: React.ReactNode
}
export default function Button ({className, children}: buttonProps) {
    return (
        <button className={cn("btn-variant", className)}>{children}</button>
    )
}