import { useState } from 'react'
import fblogo from '../assets/facebook.svg'
import instalogo from '../assets/instagram.svg'
import ytlogo from '../assets/youtube.svg'
import linlogo from '../assets/linkedin.svg'

function SocialButton(props) {
  const [clickedLink, handledClickedLink] = useState(0)
  var icon

  switch (props.buttonId) {
    case 'FB':
      icon = <img src={fblogo} className="logo facebook" alt="Facebook logo" />
      break;
    case 'LN':
      icon = <img src={linlogo} className="logo linkedin" alt="Linkedin logo" />
      break;
    case 'YT':
      icon = <img src={ytlogo} className="logo youtube" alt="Youtube logo" />
      break;
    case 'IN':
      icon = <img src={instalogo} className="logo instagram" alt="Instagram logo" />
      break;
    default:
      break;
  }

    return (
      <button>
        {icon}
      </button>
    )
  }

export default SocialButton