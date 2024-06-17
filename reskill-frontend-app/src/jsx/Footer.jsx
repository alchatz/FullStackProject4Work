import Items from './Items.jsx'
import SocialButton from './SocialButton.jsx'

function Footer() {
    const siteName = 'Site Name'

    return (
        <div class='footer'>
            <div class = 'footer-left-side'>
                <p>{siteName}</p>
                <div class='soc-buttons'>
                    <SocialButton buttonId='FB' />
                    <SocialButton buttonId='LN' />
                    <SocialButton buttonId='YT' />
                    <SocialButton buttonId='IN' />
                </div>
            </div>
            <div class='items-padding'>
                <div class='children-padding'>
                    <Items />
                </div>
                <div class='children-padding'>
                    <Items />
                </div>
                <div class='children-padding'>
                    <Items />
                </div>
            </div>
        </div>
    )
}

export default Footer