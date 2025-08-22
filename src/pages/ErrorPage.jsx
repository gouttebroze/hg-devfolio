import { useRouteError } from "react-router"

export function ErrorPage() {
    const error = useRouteError() 

    return (
        <>
            <h2>Oups!💥 Une erreur est survenue...</h2>
            <p>Il semblerait que la page que vous cherchez n'existe pas.</p>
            <p>
                {error?.error?.toString() ?? error?.toString()}
            </p>
        </>
    )
}