import React from 'react'
import PropTypes from 'prop-types'
import propTypes from 'prop-types'

export default function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.abouttext}</a>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  )
}
//proptypes ------> to avoid errors if we pass the wrong this
NavBar.propTypes = { title: propTypes.string, abouttext: propTypes.string }
//default props to use when no props are passed
NavBar.defaultProps = { title: "Dummy Title", abouttext: "No about" };
