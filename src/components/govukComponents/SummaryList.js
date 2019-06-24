import React from 'react'
import Link from '../utils/Link.js'

function ActionLink(props) {
  const contents = (
    <>
      {props.html ? props.html : props.text}
      {props.visuallyHiddenText && (
      <span className="govuk-visually-hidden">
        {' '}
        { props.visuallyHiddenText }
      </span>
      )}
    </>
  )

  return (
    <Link classes={`govuk-link${props.classes || ''}`} to={props.to} href={props.href} {...props.attributes}>
      {contents}
    </Link>
  )
}

ActionLink.defaultProps = {
  classes: '',
}

function actions(row, anyRowHasActions) {
  const actionLinks = row.actions && row.actions.items.map((action, index) => <ActionLink key={(action.href || action.to) + index} {...action} />)

  if (row.actions && row.actions.items.length) {
    return (
      <dd className={`govuk-summary-list__actions ${row.actions.classes || ''}`}>
        {row.actions.items.length == 1
          ? actionLinks
          : (
            <ul className="govuk-summary-list__actions-list">
              {actionLinks.map((actionLink, index) => <li key={actionLink.key} className="govuk-summary-list__actions-list-item">{actionLink}</li>)}
            </ul>
          )
      }
      </dd>
    )
  } if (anyRowHasActions) {
    // Add dummy column to extend border
    return <span className="govuk-summary-list__actions" />
  }
}

function SummaryList(props) {
  const anyRowHasActions = props.rows.some(item => (item.actions && 'items' in item.actions) === true)

  return (
    <dl className={`govuk-summary-list ${props.classes}`} {...props.attributes}>
      {props.rows.map((row, index) => (
        <div key={(row.key.html || row.key.text) + index} className={`govuk-summary-list__row ${row.classes || ''}`}>
          <dt className={`govuk-summary-list__key ${row.key.classes || ''}`}>
            { row.key.html || row.key.text }
          </dt>
          <dd className={`govuk-summary-list__value ${row.value.classes || ''}`}>
            { row.value.html || row.value.text }
          </dd>

          {actions(row, anyRowHasActions)}
        </div>
      ))}
    </dl>
  )
}

SummaryList.defaultProps = {
  classes: '',
}

export default SummaryList;
