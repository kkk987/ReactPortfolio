import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialLink = props => {
  const {url, iconName} = props
  return (
    <a 
      href={url}
    >
      <FontAwesomeIcon icon={['fab', iconName]} size="3x" />
      
    </a>
  )
}

export default SocialLink