

import style from './pageHeader.module.scss'

type Props = {
  pageTitle: string
}

export const PageHeader = ({ pageTitle }: Props) => {
  return (
    <div className={style.pageHeader}>
      <div className="page-header-navigation">
        <div className={style.pageBreadcrumbs}>
          <nav>
            <a href="#">Pages</a>
            <span>Page 1</span>
          </nav>
        </div>
        <h1>{pageTitle}</h1>
      </div>
      <div className={style.pageHeaderActions}>
        <form action="" className={style.form}>
          <div className={style.formGroup}>
            <input 
              id="search" 
              type="text"
              placeholder=""
            />
            <label htmlFor="search">
							<svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="5" cy="5" r="4.3" stroke="white" strokeWidth="1.4"/>
								<line x1="10.0101" y1="11" x2="8" y2="8.98995" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
							</svg>
              <span>Search</span>
						</label>
          </div>
        </form>
				<div className={style.pageHeaderUserActions}>
					<img src="https://picsum.photos/40/40" alt="lorem ipsum" />
				</div>
      </div>
    </div>
  )
}