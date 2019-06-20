import React from 'react'
import { Link } from 'react-router-dom'

function Button(props) {

  var element = '';

  if (props.element) {
    element = props.element
  } else if (props.href) {
    element = 'a'
  } else {
    element = 'button'
  }

  const commonAttributes = { className: 'govuk-button' + (props.classes ? ' ' + props.classes : '') + (props.disabled ? ' govuk-button--disabled' : ''), ...props.attributes }

  var buttonAttributes = { name: props.name, type: props.type }

  if (props.preventDoubleClick) {
    buttonAttributes['data-prevent-double-click'] = props.preventDoubleClick
  }

  if (props.disabled) {
    buttonAttributes = {
      ...buttonAttributes,
      'aria-disabled': true,
      'disabled': 'disabled'
    }
  }

  if (element === 'a') {
    var button

    if(props.to) {
      button = <Link to={props.to} role="button" draggable="false" {...commonAttributes}>
        {props.html ? props.html : props.text}
      </Link>
    } else {
      button = <a href={props.href} role="button" draggable="false" {...commonAttributes}>
        {props.html ? props.html : props.text}
      </a>
    }
  } else if (element === 'button') {
    var button = <button {...buttonAttributes} {...commonAttributes}>
      {props.html ? props.html : props.text}
    </button >
  } else if (element === 'input') {
    var button = <input value={props.text} {...buttonAttributes} {...commonAttributes} />
  }

  return button
}

Button.defaultProps = {
  type: 'submit'
}

export default Button
