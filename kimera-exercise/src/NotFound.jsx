import NotFoundImg from "./assets/notFound.svg?react"

export default function NotFound({props}) {
    return (
        <div className="absolute top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="flex flex-col gap-8 items-center">

            <NotFoundImg className="h-48 w-auto" />
            <p className="text-4xl">Not found {props}. Please try again</p>
            </div>
        </div>
    )
}