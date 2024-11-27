'use client'

import { useRouter } from 'next/navigation'

import styles from './loginForm.module.scss'

type Props = {}

export const LoginForm = (props: Props) => {

  const router = useRouter()

  const handleLogin = ( event:any ) =>  {

    console.log( event)

    event.preventDefault()
    router.push('/dashboard')
  }

  return (
    <form 
      className={ styles.loginForm }
      onSubmit={ handleLogin }
    >
      <div className={ styles.formGroup }>
        <label 
          htmlFor=""
        >
          Email<span>*</span>
        </label>
        <input type="text" placeholder="mail@simmmple.com"/>
      </div>
      <div className={ styles.formGroup }>
        <label 
          htmlFor=""
        >
          Password<span>*</span>
        </label>
        <input type="text" placeholder="mail@simmmple.com"/>
      </div>
      <div className={`${styles.formGroup} ${styles.formGroupActions} ${styles.formGroupCheckbox}`}>
        <div className={styles.formGroupActionsCol} >
          <label htmlFor="">Keep me logged in</label>
          <input type="checkbox" name="" id="" />
        </div>
        <div className={ styles.formGroupActionsCol}>
          <a href="#">Forget password?</a>
        </div>
      </div>
      <div className={`${styles.formGroup} ${styles.formGroupButton}`}>
        <button type="submit">Sign In</button>
      </div>
    </form>
  )
}