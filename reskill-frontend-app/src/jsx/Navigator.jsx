export default function Navigator() {
    const siteName = 'Site name'
    const page = 'Page'
    const button = 'Button'

    return (
        <div class='setting-margins'>
            <h5>{siteName}</h5>
            <div class='setting-right'>
                <div class='children-padding'>{page}</div>
                <div class='children-padding'>{page}</div>
                <div class='children-padding'>{page}</div>
                <button class='children-padding'>{button}</button>
            </div>
        </div>

    )
}