import React from 'react'
import PropTypes from 'prop-types'
// 👇🏾 Uncomment to import the ThemeContext
// import ThemeContext from './ThemeContext'
import THEMES from './themes.json'

const ResultItem = ({ id, previewUrl, title, url, rating }) => {
  // 👇🏾 Call `useContext` to get the `theme`

  return (
    <section
      key={id}
      className="card"
      style={{
        width: '300px',
        display: 'inline-block',
        marginRight: '16px',

        // 👇🏾 Replace "light" with the context theme
        color: THEMES.light.foreground,
        backgroundColor: THEMES.light.background,
      }}
    >
      <video src={previewUrl} alt={title} loop autoPlay />
      <section className="card-section">
        <h5>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>{' '}
          ({rating})
        </h5>
      </section>
    </section>
  )
}

ResultItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  rating: PropTypes.oneOf(['G', 'PG', 'PG-13', 'R']),
  previewUrl: PropTypes.string.isRequired,
}

export default ResultItem
