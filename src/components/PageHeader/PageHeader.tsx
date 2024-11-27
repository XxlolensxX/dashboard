

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
      <div className="page-haeder-actions">
        <form action="" className="form">
          <div className="form-group">
            <label htmlFor="search">
							<svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="5" cy="5" r="4.3" stroke="white" strokeWidth="1.4"/>
								<line x1="10.0101" y1="11" x2="8" y2="8.98995" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
							</svg>
						</label>
            <input 
              id="search" 
              type="text" 
            />
          </div>
        </form>
				<div className="page-header-user-actions">
					<img src="https://placehold.co/40x40" alt="lorem ipsum" />
				</div>
      </div>
    </div>
  )
}