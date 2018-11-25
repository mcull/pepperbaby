import React from 'react'
import { Link } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
 footer: {
   margin: '0 auto',
   maxWidth: '960px',
   padding: '1.45rem 1.0875rem',
 },
 links: {
   textAlign: 'center',
   listStyle: 'none',
   margin: '0'
 },
 link: {
   display: 'inline-block',
   margin: '0 50px',
   fontSize: '.5rem'
 }

})

const Footer = () => (
  <div className={css(styles.footer)}>
    <ul className={css(styles.links)}>
      <li className={css(styles.link)}><Link to="/terms">Terms of Service</Link></li>
      <li className={css(styles.link)}><Link to="/privacy">Privacy Policy</Link></li>
      <li className={css(styles.link)}>Copyright © 2018 Pepperbaby. All rights reserved.</li>
    </ul>
  </div>
)

export default Footer
