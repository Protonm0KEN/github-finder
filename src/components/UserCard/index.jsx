import React, {useState} from "react";

import style from "./UserCard.module.scss";
import UserRepository from "./UserRepository";


const UserCard = ({dataOfUser, Repositories}) => {

    const date = dataOfUser.created_at.substring(0, 10);

    const [sortByStars, setSortByStars ] = useState(false);
    const [sortByDate, setSortByDate ] = useState(false);
    const [sortByName, setSortByName ] = useState(false);



    function compareNumeric(a, b) {
        if (a > b) {
            return -1;
        }
        if (a === b) return 0;
        if (a < b) {
            return 1;
        }
    }
    const sortByDateHandle = () => {
        setSortByStars(false);
        setSortByDate(true);
        setSortByName(false);
    };
    const sortByNameHandle = () => {
        setSortByStars(false);
        setSortByDate(false);
        setSortByName(true);
    };
    const sortByStarsHandle = () => {
        setSortByStars(true);
        setSortByDate(false);
        setSortByName(false);
    };
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
                        <button onClick={sortByNameHandle} className={`${style["user__sorting-button"]}`}>Имя</button>
                        <button onClick={sortByStarsHandle} className={style["user__sorting-button"]}>Звезды</button>
                        <button onClick={sortByDateHandle} className={style["user__sorting-button"]}>Дата</button>
                    </div>
                    <div className={style["user__sorting-repositores"]}>
                        { sortByName ?
                            Repositories
                                .sort((a, b) => {
                                    return a.name.localeCompare(b.name);
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
                                    Repositories.sort( (a, b) => compareNumeric(a.created_at, b.created_at)).map((repository, index) => {
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
