import { useRouteError } from "react-router"

export function ErrorPage() {
    const error = useRouteError() 

    return (
        <>
            <h2>Oups!💥 Une erreur est survenue...</h2>
            <p>Il semblerait que la page que vous cherchez n'existe pas.</p>
            <p>
                {/* 
                    le hook useRouteError() permet de retourner la detrniere erreur,
                    puis ci-dessous, on va chercher à avoir + de détails, 
                    si on a 1 erreur contenant 1 clé error, 
                    on utilise toString() pr l'afficher, 
                    sinon, on essaie toString() directement sur l'erreur originale 
                */}
                {error?.error?.toString() ?? error?.toString()}
            </p>
        </>
    )
}