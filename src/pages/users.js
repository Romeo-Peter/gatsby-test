import React from 'react'
import styles from './users.module.css'
import Container from '../components/container'

const User = props => (
  <div className={styles.user}>
    <img src={ props.avatar } className={ styles.avatar } alt=''/>
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

const data = [
  {
    username: 'StraWWoman',
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg",
    excerpt: "I'm StraWWoman. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    username: 'Hana Smith',
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg",
    excerpt: "I'm Hana Smith, a vertically aligned type of woman. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }
]

export default function About() {

  return (
    <Container>
      <h1>Users styled with CSS module</h1>
      <p>CSS Modules are cool</p>
      {
        data.map(user => (
         <User
          avatar={user.avatar}
          username={user.username}
          excerpt={user.excerpt}
         />
        ))
      }
    </Container>
  )
}
