import React, { useEffect, useState } from "react";
import header from '@/styles/HeaderMobile.module.scss'


export default function HeaderMobile() {

    const [searchIsClicked, setSearchIsClicked] = useState(false);
    const [settingsIsClicked, setSettingsIsClicked] = useState(false);

    const searchedSomething = (event) => {
        const searchBar = document.getElementById("navbar__text__search");

        if(searchBar != null) {
            const searchEntry = searchBar.value.trim();
            if(event.key == "Enter" && searchEntry != "") {
                console.log("Searching:",searchEntry);
            } else if(event.key == "Escape") {
                setSearchIsClicked(!searchIsClicked);
            }
        }
    }

    //Single-responsibility useEffects
    useEffect(() => {
        if(searchIsClicked) {
            window.addEventListener("keydown", searchedSomething);
        } else {
            window.removeEventListener("keydown", searchedSomething);
        }
    });

    const changeNavbarToSearchBar = () => {
        setSearchIsClicked(!searchIsClicked);
    };

    const openSettingsMenu = () => {
        setSettingsIsClicked(!settingsIsClicked);
    }

    return (
        <>
            <div className={header.logo__div__holder}>
                {/* no object inside */}
            </div>

            <div className={header.header__wrapper__mobile}>

            <div className={header.navbar__button__setting}><img className={header.navbar__image__setting} onClick={openSettingsMenu} src="/media/svg/icon--settings.svg"/></div>

            <div className={header.logo__div__mobile}>
                { searchIsClicked ?
                    <>
                        <input id="navbar__text__search" className={header.navbar__text__search} type="text"/> 
                    </>:
                    <a className={header.logo__link__mobile} href="/">
                        <img id="header__logo__full" className={header.logo__image__mobile} src="/media/svg/logo--tls--compact.svg"/>
                    </a>
                }
                
            </div>
            
            { searchIsClicked?
                <div className={header.navbar__button__search}><img className={header.navbar__image__search} onClick={changeNavbarToSearchBar} src="/media/svg/icon--close.svg"/></div>:
                <div className={header.navbar__button__search}><img className={header.navbar__image__search} onClick={changeNavbarToSearchBar} src="/media/svg/icon--search.svg"/></div>
            }
            
            </div>
            {
                settingsIsClicked ?
                <nav className={header.settings__menu__mobile}>
                    <a className={header.settings__choices__link} href="/section/university">
                        <div className={header.settings__menu__choice}>
                            <div className={header.settings__menu__choices}><img className={header.settings__image__icon} src="/media/svg/icon--search.svg"/><div className={header.settings__text__choices}>University</div></div>
                        </div>
                    </a>
                    <a className={header.settings__choices__link} href="/section/menagerie">
                        <div className={header.settings__menu__choice}>
                            
                            <div className={header.settings__menu__choices}><img className={header.settings__image__icon} src="/media/svg/icon--search.svg"/><div className={header.settings__text__choices}>Menagerie</div></div>
                        </div>
                    </a>
                    <a className={header.settings__choices__link} href="/section/sports">
                        <div className={header.settings__menu__choice}>
                            <div className={header.settings__menu__choices}><img className={header.settings__image__icon} src="/media/svg/icon--search.svg"/><div className={header.settings__text__choices}>Sports</div></div>
                        </div>
                    </a>
                    <a className={header.settings__choices__link} href="/section/vanguard">
                        <div className={header.settings__menu__choice}>
                            <div className={header.settings__menu__choices}><img className={header.settings__image__icon} src="/media/svg/icon--search.svg"/><div className={header.settings__text__choices}>Vanguard</div></div>
                        </div>
                    </a>
                    <a className={header.settings__choices__link} href="/section/opinion">
                        <div className={header.settings__menu__choice}>
                            <div className={header.settings__menu__choices}><img className={header.settings__image__icon} src="/media/svg/icon--search.svg"/><div className={header.settings__text__choices}>Opinion</div></div>
                        </div>
                    </a>
                    <a className={header.settings__choices__link} href="/section/about">
                        <div className={header.settings__menu__choice}>
                            <div className={header.settings__menu__choices}><img className={header.settings__image__icon} src="/media/svg/icon--search.svg"/><div className={header.settings__text__choices}>About</div></div>
                        </div>
                    </a>
                </nav>:
                ""
            }
        </>
    );
}