import React from 'react'
import Link from '../utils/Link.js'

function Breadcrumbs(props) {
  const breadcrumbs = props.items.map((item, index) => ((item.href || item.to)
    ? (
      <li key={(item.href || item.to) + index} className="govuk-breadcrumbs__list-item">
        <Link classes="govuk-breadcrumbs__link" attributes={item.attributes} href={item.href} to={item.to}>{item.html ? item.html : item.text}</Link>
      </li>
    )
    : <li key={(item.href || item.to) + index} className="govuk-breadcrumbs__list-item" aria-current="page">{item.html ? item.html : item.text}</li>))

  return (
    <div className={`govuk-breadcrumbs ${props.classes}`} {...props.attributes}>
      <ol className="govuk-breadcrumbs__list">
        {breadcrumbs}
      </ol>
    </div>
  )
}

Breadcrumbs.defaultProps = {
  classes: '',
}

export default Breadcrumbs
