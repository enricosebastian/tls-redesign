import React, { useEffect, useState } from "react";
import header from '@/styles/HeaderFull.module.scss'


export default function HeaderFull() {

    const [searchIsClicked, setSearchIsClicked] = useState(false);
    const [pageYOffset, setPageYOffset] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

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

    const handlingWindowResize = () => {
        setWindowWidth(window.innerWidth);
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
        const logo = document.getElementById("header__logo__full");
        const navbar = document.getElementById("header__navbar__full");
        setIsNavbarVisible(pageYOffset < logo.offsetHeight);

        if(isNavbarVisible) {
            navbar.classList.remove(header.sticky);
        } else {
            navbar.classList.add(header.sticky);
        }
    });

    useEffect(() => {
        window.addEventListener("resize", handlingWindowResize);
    });

    const changeNavbarToSearchBar = () => {
        setSearchIsClicked(!searchIsClicked);
    };

    return (
        <div className={header.header__wrapper__full}>

            <div className={header.logo__div__full}>
                <a className={header.logo__link__full} href="/">
                    <img id="header__logo__full" className={header.logo__image__full} src="/media/svg/logo--tls--full.svg"/>
                </a>
            </div>
            
            <nav id="header__navbar__full" className={header.header__navbar__full}>
                { searchIsClicked ? 
                    <>
                        <input id="navbar__text__search" className={header.navbar__text__search} type="text"/> 
                        <div className={header.navbar__button__search}><img onClick={changeNavbarToSearchBar} src="/media/svg/icon--close.svg"/></div>
                    </>:
                    <>
                        {
                            isNavbarVisible?
                            "" :
                            <>
                            <div className={header.navbar__button__section}>
                                <a href="/" className={header.logo__link__visible}>
                                    { (windowWidth < 900) ? 
                                        <img className={header.logo__image__star} src="/media/svg/icon--tls--star.svg"/>: 
                                        <img className={header.logo__image__compact} src="/media/svg/logo--tls--compact.svg"/>
                                    }
                                </a>
                            </div>
                            </>
                        }
                        <div className={header.navbar__button__section}><a className={header.navbar__link__section} href="/section/university">University</a></div>
                        <div className={header.navbar__button__section}><a className={header.navbar__link__section} href="/section/menagerie">Menagerie</a></div>
                        <div className={header.navbar__button__section}><a className={header.navbar__link__section} href="/section/sports">Sports</a></div>
                        <div className={header.navbar__button__section}><a className={header.navbar__link__section} href="/section/vanguard">Vanguard</a></div>
                        <div className={header.navbar__button__section}><a className={header.navbar__link__section} href="/section/opinion">Opinion</a></div>
                        <div className={header.navbar__button__section}><a className={header.navbar__link__section} href="/section/about">About</a></div>
                        <div className={header.navbar__button__search}><img onClick={changeNavbarToSearchBar} src="/media/svg/icon--search.svg"/></div>
                    </>
                }
            </nav>

        </div>
    );
}