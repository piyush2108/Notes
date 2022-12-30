import logoIcon from "../assets/slashNotes-icon.png"

function NavbarLoggedIn(){
     return(
          <div className="navbar">
               <div className="nav-title">
                    <h1 id="nav-title">/slashNotes</h1>
               </div>
               <div className="nav-components">
                    <div className="navbar-logo">
                         <div className="logo-icon">
                              <img id="main-logo" src={logoIcon} alt="main-logo" />
                         </div>
                         <div className="logo-text">
                              <p id="logo-text">/Notes</p>
                         </div>
                    </div>
                    <div className="navbar-menu">
                         <p className="nav-list-items nav-item-primary">/profile</p>
                         <p className="nav-list-items nav-item-primary">/toggle-theme</p>
                         <p className="nav-list-items nav-item-danger">/logout</p>
                    </div>
               </div>
          </div>
     )
}

function NavbarSignIn(){
     return(
          <div className="navbar">
               <div className="nav-title">
                    <h1 id="nav-title">/slashNotes</h1>
               </div>
               <div className="nav-components">
                    <div className="navbar-logo">
                         <div className="logo-icon">
                              <img id="main-logo" src={logoIcon} alt="main-logo" />
                         </div>
                         <div className="logo-text">
                              <p id="logo-text">/Notes</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export {NavbarLoggedIn, NavbarSignIn}