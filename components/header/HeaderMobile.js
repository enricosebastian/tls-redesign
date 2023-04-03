import React, { useEffect, useState } from "react";
import header from '@/styles/HeaderMobile.module.scss'


export default function HeaderMobile() {

    const [searchIsClicked, setSearchIsClicked] = useState(false);
    const [settingsIsClicked, setSettingsIsClicked] = useState(false);
    const [pageYOffset, setPageYOffset] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(false)

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

    const logPageYOffset = () => {
        setPageYOffset(window.pageYOffset);
    }

    //Single-responsibility useEffects
    useEffect(() => {
        if(searchIsClicked) {
            window.addEventListener("keydown", searchedSomething);
        } else {
            window.removeEventListener("keydown", searchedSomething);
        }
    });

    useEffect(() => {
        window.addEventListener("scroll", logPageYOffset);
        const navbar = document.querySelector(`.${header.header__wrapper__mobile}`);
        const settings = document.querySelector(`.${header.settings__menu__mobile}`);

        setIsNavbarVisible(pageYOffset < navbar.offsetTop);

        if(isNavbarVisible) {
            navbar.classList.remove(header.sticky);
            if(settings != null) settings.classList.remove(header.sticky__for__settings);
        } else {
            navbar.classList.add(header.sticky);
            if(settings != null) settings.classList.add(header.sticky__for__settings);
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
                    <div className={header.settings__choice__university}>University</div>
                    <div className={header.settings__choice__menagerie}>Menagerie</div>
                    <div className={header.settings__choice__sports}>Sports</div>
                    <div className={header.settings__choice__vanguard}>Vanguard</div>
                    <div className={header.settings__choice__opinions}>Opinions</div>
                    <div className={header.settings__choice__about}>About</div>
                </nav>:
                ""
            }
        </>
    );
}