import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const Submit = ({ text, onClick, disabled, icon, className, social }) => {

  /* Social Button */
  if (social) {
    const color =
        social === 'google' ? 'google plus' // semantic supports only "google plus" color string
      : social === 'github' ? 'grey' // no color string for github
      : social

    return (
      <Button color={color} onClick={onClick} className='social-btn'>
        <Icon name={social} /> Continue with {capitalize(social)}
      </Button>
    )
  }

  /* Regular Button */
  return (
    <Button
      content={text}
      onClick={onClick}
      disabled={disabled}
      icon={icon}
      className={className}
    />
  )
}

function capitalize (s) {
  return s[0].toUpperCase() + s.substr(1)
}

Submit.defaultProps = {
  color: 'grey',
  icon: '',
  className: '',
  social: ''
}

export default Submit
