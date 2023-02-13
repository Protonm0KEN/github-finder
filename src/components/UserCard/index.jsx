import React from "react";

import style from "./UserCard.module.scss";


const UserCard = ({dataOfUser, Repositories}) => {
    const [isStars, setIsStars] = React.useState(false);
    const [isName, setIsName] = React.useState(false);
    const [isDate, setIsDate] = React.useState(false);
    const date = dataOfUser.created_at.substring(0, 10);

    function sortUsersByStars() {
        setIsStars(true);
        setIsName(false);
        setIsDate(false);
    }

    function sortUsersByName() {
        setIsName(true);
        setIsStars(false);
        setIsDate(false);
    }

    function sortUsersByDate() {
        setIsDate(true);
        setIsStars(false);
        setIsName(false);
    }

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
                        <button onClick={sortUsersByName} className={`${style["user__sorting-button"]}`}>Имя</button>
                        <button onClick={sortUsersByStars} className={style["user__sorting-button"]}>Звезды</button>
                        <button onClick={sortUsersByDate} className={style["user__sorting-button"]}>Дата</button>
                    </div>
                    <div className={style["user__sorting-repositores"]}>
                        {/*{Repositories.map((repository, index) => {*/}
                        {/*    const {stargazers_count, name, svn_url} = repository*/}
                        {/*    return(*/}
                        {/*        <div key = {index} className={style["user__sorting-repository"]}>*/}
                        {/*            <div className={style["user__sorting-repository-left"]}>*/}
                        {/*                <p className={style["repository-title"]}>{name}</p>*/}
                        {/*                <p className={style["repository-starsCount"]}>Количество звезд: {stargazers_count}</p>*/}
                        {/*                <p className={style["repository-dateOfCreation"]}>Дата добавления: {date}</p>*/}
                        {/*            </div>*/}
                        {/*            <div className={style["user__sorting-repository-right"]}>*/}
                        {/*                <a target="_blank" href = {svn_url} className={style["repository__repository-button"]} rel="noreferrer">ПОСЕТИТЬ</a>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    )*/}
                        {/*})}*/}
                        {isStars === true ? Repositories.sort(function (a, b) {
                            if (a.stargazers_count > b.stargazers_count) return -1;
                        }).map((repo, index) => {
                            const {stargazers_count, name, svn_url, created_at} = repo;
                            return (
                                <div key={index} className={style["user__sorting-repository"]}>
                                    <div className={style["user__sorting-repository-left"]}>
                                        <p className={style["repository-title"]}>{name}</p>
                                        <p className={style["repository-starsCount"]}>Количество
                                            звезд: {stargazers_count}</p>
                                        <p className={style["repository-dateOfCreation"]}>Дата
                                            добавления: {created_at.substring(0, 10)}</p>
                                    </div>
                                    <div className={style["user__sorting-repository-right"]}>
                                        <a target="_blank" href={svn_url}
                                            className={style["repository__repository-button"]}
                                            rel="noreferrer">ПОСЕТИТЬ</a>
                                    </div>
                                </div>
                            );
                        }) : isDate === true ? Repositories.sort(function (a, b) {
                            if (a.created_at.substring(0, 10) > b.created_at.substring(0, 10)) return 1;
                        }).map((repo, index) => {
                            const {stargazers_count, name, svn_url, created_at} = repo;
                            return (
                                <div key={index} className={style["user__sorting-repository"]}>
                                    <div className={style["user__sorting-repository-left"]}>
                                        <p className={style["repository-title"]}>{name}</p>
                                        <p className={style["repository-starsCount"]}>Количество
                                            звезд: {stargazers_count}</p>
                                        <p className={style["repository-dateOfCreation"]}>Дата
                                            добавления: {created_at.substring(0, 10)}</p>
                                    </div>
                                    <div className={style["user__sorting-repository-right"]}>
                                        <a target="_blank" href={svn_url}
                                            className={style["repository__repository-button"]}
                                            rel="noreferrer">ПОСЕТИТЬ</a>
                                    </div>
                                </div>
                            );
                        }) : isName === true ? Repositories.sort(function (a, b) {
                            if (a.name > b.name) return 1;
                        }).map((repo, index) => {
                            const {stargazers_count, name, svn_url, created_at} = repo;
                            return (
                                <div key={index} className={style["user__sorting-repository"]}>
                                    <div className={style["user__sorting-repository-left"]}>
                                        <p className={style["repository-title"]}>{name}</p>
                                        <p className={style["repository-starsCount"]}>Количество
                                            звезд: {stargazers_count}</p>
                                        <p className={style["repository-dateOfCreation"]}>Дата
                                            добавления: {created_at.substring(0, 10)}</p>
                                    </div>
                                    <div className={style["user__sorting-repository-right"]}>
                                        <a target="_blank" href={svn_url}
                                            className={style["repository__repository-button"]}
                                            rel="noreferrer">ПОСЕТИТЬ</a>
                                    </div>
                                </div>
                            );
                        }) : ""}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
