
import styles from './loginForm.module.css'

type Props = {}

export const LoginForm = (props: Props) => {
  return (
    <form action="" className={ styles.loginForm }>
      <div className="form-group">
        <label htmlFor="">Email<span>*</span></label>
        <input type="text" placeholder="mail@simmmple.com"/>
      </div>
      <div className="form-group">
        <label htmlFor="">Password<span>*</span></label>
        <input type="text" placeholder="mail@simmmple.com"/>
      </div>
      <div className="form-group form-group-actions">
        <div className="form-group-actions-col">
          <label htmlFor="">Keep me logged in</label>
          <input type="checkbox" name="" id="" />
        </div>
        <div className="form-group-actions-col">
          <a href="#">Forget password?</a>
        </div>
      </div>
      <div className="form-group-form-group-button">
        <button type="submit">Sign In</button>
      </div>
    </form>
  )
}