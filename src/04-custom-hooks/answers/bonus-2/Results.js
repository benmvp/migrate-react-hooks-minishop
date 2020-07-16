import React from 'react'
import PropTypes from 'prop-types'
import ResultItem from './ResultItem'

const Results = ({ results }) => {
  if (results.length === 0) {
    return null
  }

  return (
    <section>
      {results.map((item) => (
        <ResultItem
          key={item.id}
          id={item.id}
          title={item.title}
          url={item.url}
          rating={item.rating}
          previewUrl={item.previewUrl}
        />
      ))}
    </section>
  )
}

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      rating: PropTypes.oneOf(['G', 'PG', 'PG-13', 'R']),
      previewUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default Results
