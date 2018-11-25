import React from 'react'
import { Link } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  siteName: {
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'sans-serif',
    fontSize: '1.5rem'

  },
   header: {
     margin: '0 auto',
     maxWidth: '960px',
     padding: '1.45rem 1.0875rem',
   }
})

const Header = ({ siteTitle }) => (
  <div className={css(styles.header)}>
    <Link className={css(styles.siteName)} to="/">
        🌶👶.com
    </Link>
  </div>
)

export default Header
