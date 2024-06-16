import Items from './Items.jsx'
import SocialButton from './SocialButton.jsx'

function Footer() {
    const siteName = 'Site Name'

    return (
        <div>
            <div>
                <p>{siteName}</p>
                <SocialButton buttonId='FB' />
                <SocialButton buttonId='LN' />
                <SocialButton buttonId='YT' />
                <SocialButton buttonId='IN' />
            </div>
            <div>
                <Items />
            </div>
            <div>
                <Items />
            </div>
            <div>
                <Items />
            </div>
        </div>
    )
}

export default Footer