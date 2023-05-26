import React, {useState} from "react";

import downArrowIcon from "../../assets/icons/downward-arrow.png";

import style from "./UserCard.module.scss";
import UserRepository from "./UserRepository";


const UserCard = ({dataOfUser, Repositories}) => {

    const date = dataOfUser.created_at.substring(0, 10);

    const [sortByStars, setSortByStars ] = useState(false);
    const [sortByDate, setSortByDate ] = useState(false);
    const [sortByName, setSortByName ] = useState(true);

    const [clickedByName, setClickedByName] = useState(false);
    const [clickedByStars, setClickedByStars] = useState(false);
    const [clickedByDate, setClickedByDate] = useState(false);

    function setActiveClass (element){
        element.classList.toggle("active");
    }
    function compareNumeric(a, b) {
        if (a > b) {
            if(clickedByStars === false){
                return 1;
            }else{
                return -1;
            }
        }
        if (a === b) return 0;
        if (a < b) {
            if(clickedByStars === false){
                return -1;
            }else{
                return 1;
            }
        }
    }
    function compareDate(a, b) {
        if (a > b) {
            if(clickedByDate === false){
                return 1;
            }else{
                return -1;
            }
        }
        if (a === b) return 0;
        if (a < b) {
            if(clickedByDate === false){
                return -1;
            }else{
                return 1;
            }
        }
    }
    const sortByDateHandle = () => {
        setSortByStars(false);
        setSortByDate(true);
        setSortByName(false);
        setClickedByDate(!clickedByDate);
        setClickedByName(false);
        setClickedByStars(false);
        setActiveClass(arrowDownDate);
    };
    const sortByNameHandle = () => {
        setSortByStars(false);
        setSortByDate(false);
        setSortByName(true);
        setClickedByName(!clickedByName);
        setClickedByDate(false);
        setClickedByStars(false);
        setActiveClass(arrowDownName);
    };
    const sortByStarsHandle = () => {
        setSortByStars(true);
        setSortByDate(false);
        setSortByName(false);
        setClickedByStars(!clickedByStars);
        setClickedByName(false);
        setClickedByDate(false);
        setActiveClass(arrowDownStars);
    };

    console.log(`Состояние нажатое по name: ${clickedByName}`);
    console.log(`Состояние нажатое по date: ${clickedByDate}`);
    console.log(`Состояние нажатое по stars: ${clickedByStars}`);
    const arrowDownName = document.querySelector(".arrowDown-img.name");
    const arrowDownDate = document.querySelector(".arrowDown-img.date");
    const arrowDownStars = document.querySelector(".arrowDown-img.stars");
    console.log(arrowDownName);
    return (
        <div>
            <div className={style["user"]}>
                <div className={style["user__card"]}>
                    <div className={style["user__card-left"]}>
                        <img className={style["user__card-img"]} src={dataOfUser.avatar_url} alt="user avatar"/>
                        <a target="_blank" href={dataOfUser.html_url} className={style["user__card-button"]}
                            rel="noreferrer">ПОСЕТИТЬ</a>
                    </div>
                    <div className={style["user__card-right"]}>
                        <p className={style["user__card-infoTxt"]}>{dataOfUser.name}</p>
                        <p className={style["user__card-infoTxt"]}>Репозиториев: <span
                            className={style["user__card-digit"]}>{dataOfUser.public_repos}</span></p>
                        <p className={style["user__card-infoTxt"]}>Создан: <span
                            className={style["user__card-digit"]}>{date.substring(0, 10)}</span></p>
                        <p className={style["user__card-infoTxt"]}>Подписчиков: <span
                            className={style["user__card-digit"]}>{dataOfUser.followers}</span></p>
                        <p className={style["user__card-infoTxt"]}>Подписок: <span
                            className={style["user__card-digit"]}>{dataOfUser.following}</span></p>
                    </div>
                </div>
                <div className={style["user__sorting"]}>
                    <h2 className={style["user__sorting-title"]}>Сортировка</h2>
                    <div className={style["user__sorting-buttons"]}>
                        <button onClick={sortByNameHandle} className={`${style["user__sorting-button"]}`}>Имя
                            <img className="arrowDown-img name" src={downArrowIcon} alt="arrow-down"/></button>
                        <button onClick={sortByStarsHandle} className={style["user__sorting-button"]}>Звезды
                            <img className="arrowDown-img stars" src={downArrowIcon} alt="arrow-down"/>
                        </button>
                        <button onClick={sortByDateHandle} className={style["user__sorting-button"]}>Дата
                            <img className="arrowDown-img date" src={downArrowIcon} alt="arrow-down"/></button>
                    </div>
                    <div className={style["user__sorting-repositores"]}>
                        { sortByName ?
                            Repositories
                                .sort((a, b) => {
                                    if(clickedByName === false){
                                        return a.name.localeCompare(b.name);
                                    }else{
                                        return b.name.localeCompare(a.name);
                                    }
                                })
                                .map((repository, index) => {
                                    return (
                                        <UserRepository
                                            key={index}
                                            repository={repository}
                                            date={date}>
                                        </UserRepository>
                                    );
                                }) :
                            sortByStars ?
                                Repositories
                                    .sort((a, b) => compareNumeric(a.stargazers_count, b.stargazers_count))
                                    .map((repository, index) => {
                                        return (
                                            <UserRepository
                                                key={index}
                                                repository={repository}
                                                date={date}>
                                            </UserRepository>
                                        );
                                    })
                                : sortByDate ?
                                    Repositories.sort( (a, b) => compareDate(a.created_at, b.created_at)).map((repository, index) => {
                                        return (
                                            <UserRepository
                                                key={index}
                                                repository={repository}
                                                date={date}>
                                            </UserRepository>
                                        );
                                    }):  null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
