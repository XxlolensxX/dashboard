import { LoginForm } from "@/components/LoginForm/LoginForm";

import { montserrat } from "../fonts";

import "./../globals.css";
import styles from './login.module.scss'

export default function Login () {
  return (
    <section className={`${ montserrat.className } bg-dark`} >
      <div className={ styles.loginGrid } >
        <div className={ styles.loginGridCol } >
          <div className={ styles.loginGridInner } >
            <h1>Sign In</h1>
            <h2>Enter your email and password to sign in!</h2>
            <div className={ `${styles.loginItem} ${styles.loginItemGoogle}` }>
              <button>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_101_11447)">
                    <path d="M19.7874 10.225C19.7874 9.56668 19.7291 8.94168 19.6291 8.33334H10.2124V12.0917H15.6041C15.3624 13.325 14.6541 14.3667 13.6041 15.075V17.575H16.8207C18.7041 15.8333 19.7874 13.2667 19.7874 10.225Z" fill="#4285F4"/>
                    <path d="M10.2126 20C12.9126 20 15.1709 19.1 16.8209 17.575L13.6043 15.075C12.7043 15.675 11.5626 16.0417 10.2126 16.0417C7.60427 16.0417 5.39593 14.2833 4.60427 11.9083H1.2876V14.4833C2.92926 17.75 6.30427 20 10.2126 20Z" fill="#34A853"/>
                    <path d="M4.60407 11.9083C4.39574 11.3083 4.2874 10.6667 4.2874 9.99999C4.2874 9.33333 4.40407 8.69166 4.60407 8.09166V5.51666H1.2874C0.604068 6.86666 0.212402 8.38333 0.212402 9.99999C0.212402 11.6167 0.604068 13.1333 1.2874 14.4833L4.60407 11.9083Z" fill="#FBBC05"/>
                    <path d="M10.2126 3.95833C11.6876 3.95833 13.0043 4.46667 14.0459 5.45834L16.8959 2.60833C15.1709 0.991667 12.9126 0 10.2126 0C6.30427 0 2.92926 2.25 1.2876 5.51667L4.60427 8.09167C5.39593 5.71667 7.60427 3.95833 10.2126 3.95833Z" fill="#EA4335"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_101_11447">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <span>Sign in with Google</span>
              </button>
            </div>
            <div className={ styles.divider }>
              <span>or</span>
            </div>
            <div className={ `${styles.loginItem}` }>
              <LoginForm />
              <p className={ styles.loginCrateAccount}>Not register yet? <a href="#">Create an Account</a></p>
            </div>
          </div>
        </div>
        <div className={ `bg-gradient ${styles.loginGridCol}` } >
          <div className={styles.brand}>
            <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M444.89 283.23C446.227 331.745 437.166 436.889 314.53 488C334.454 454.146 306.429 411.181 280.284 371.1C272.904 359.784 265.673 348.699 259.713 338.113C254.397 330.445 250.061 321.91 246.94 312.627C229.089 259.532 257.752 202.051 310.961 184.238C364.169 166.425 421.775 195.027 439.626 248.122C443.541 259.768 445.219 271.626 444.89 283.23ZM238.167 139.972C258.774 117.461 308.885 73.8155 386.734 104.146C362.912 110.774 356.785 142.41 351.07 171.925C349.458 180.25 347.878 188.406 345.944 195.785C344.993 201.575 343.218 207.329 340.565 212.893C325.406 244.678 287.294 258.182 255.441 243.055C223.588 227.929 210.054 189.899 225.214 158.114C228.533 151.154 232.953 145.07 238.167 139.972ZM252.83 352.686C227.109 369.184 167.495 398.508 100.064 349.319C124.793 349.001 138.836 319.985 151.936 292.916C155.635 285.273 159.259 277.785 163.028 271.142C165.432 265.797 168.621 260.695 172.608 256.002C195.42 229.152 235.727 225.839 262.635 248.602C289.543 271.365 292.863 311.585 270.051 338.436C265.044 344.328 259.195 349.087 252.83 352.686ZM61.2061 164.745C75.4085 118.318 117.519 21.5322 250.062 12C220.382 37.7725 233.256 87.4004 245.267 133.699C248.66 146.775 251.983 159.586 254.26 171.519C256.852 180.472 258.241 189.933 258.241 199.719C258.241 255.722 212.744 301.121 156.62 301.121C100.497 301.121 55 255.722 55 199.719C55 187.427 57.1916 175.647 61.2061 164.745Z" fill="white"/>
            </svg>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </div>
    </section>
  )
}
