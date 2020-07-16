import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ThemeContext from './ThemeContext'
import THEMES from './themes.json'

const ResultItem = ({ id, previewUrl, title, url, rating }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <section
      key={id}
      className="card"
      style={{
        width: '300px',
        display: 'inline-block',
        marginRight: '16px',
        color: THEMES[theme].foreground,
        backgroundColor: THEMES[theme].background,
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
