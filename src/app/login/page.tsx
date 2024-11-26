'use client'

import Link from "next/link";

import { LoginForm } from "@/components/LoginForm/LoginForm";

import { montserrat } from "../fonts";

import "./../globals.css";
import styles from './login.module.css'

//TODO: Hacer el layout para el login
export default function Login () {
  return (
    <section className={`${ montserrat.className } bg-gradient`} >
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
            <div className={ `${styles.loginItem} ${styles.loginItemForm}` }>
              <LoginForm />
              <p>Not register yet? <a href="#">Create an Account</a></p>
            </div>
          </div>
        </div>
        <div className={ styles.loginGridCol } >
          <div className="brand">
            <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.75 125.625V18.75H91.875V125.625H18.75Z" fill="white"/>
              <path d="M148.125 58.125V18.75H221.25V58.125H148.125Z" fill="white"/>
              <path d="M148.125 221.25V114.375H221.25V221.25H148.125Z" fill="white"/>
              <path d="M18.75 221.25V181.875H91.875V221.25H18.75Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M129.375 7.5C129.375 3.35786 132.733 0 136.875 0H232.5C236.642 0 240 3.35787 240 7.5V69.375C240 73.5171 236.642 76.875 232.5 76.875H136.875C132.733 76.875 129.375 73.5171 129.375 69.375V7.5ZM148.125 18.75V58.125H221.25V18.75H148.125ZM129.375 103.125C129.375 98.9829 132.733 95.625 136.875 95.625H232.5C236.642 95.625 240 98.9829 240 103.125V232.5C240 236.642 236.642 240 232.5 240H136.875C132.733 240 129.375 236.642 129.375 232.5V103.125ZM148.125 114.375V221.25H221.25V114.375H148.125Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M103.125 0H7.5C3.35786 0 0 3.35786 0 7.5V136.875C0 141.017 3.35786 144.375 7.5 144.375H103.125C107.267 144.375 110.625 141.017 110.625 136.875V7.5C110.625 3.35787 107.267 0 103.125 0ZM18.75 18.75V125.625H91.875V18.75H18.75Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M103.125 163.125H7.5C3.35786 163.125 0 166.483 0 170.625V232.5C0 236.642 3.35786 240 7.5 240H103.125C107.267 240 110.625 236.642 110.625 232.5V170.625C110.625 166.483 107.267 163.125 103.125 163.125ZM18.75 181.875V221.25H91.875V181.875H18.75Z" fill="white"/>
            </svg>
            <p>Brand</p>
          </div>
        </div>
      </div>
    </section>
  )
}
