import React from "react";

import style from "./UserCard.module.scss";


const UserCard = ({dataOfUser, Repositories}) => {
    const date = dataOfUser.created_at.substring(0, 10);


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
                        <button className={`${style["user__sorting-button"]}`}>Имя</button>
                        <button className={style["user__sorting-button"]}>Звезды</button>
                        <button className={style["user__sorting-button"]}>Дата</button>
                    </div>
                    <div className={style["user__sorting-repositores"]}>
                        {Repositories.map((repository, index) => {
                            const {stargazers_count, name, svn_url} = repository;
                            return(
                                <div key = {index} className={style["user__sorting-repository"]}>
                                    <div className={style["user__sorting-repository-left"]}>
                                        <p className={style["repository-title"]}>{name}</p>
                                        <p className={style["repository-starsCount"]}>Количество звезд: {stargazers_count}</p>
                                        <p className={style["repository-dateOfCreation"]}>Дата добавления: {date}</p>
                                    </div>
                                    <div className={style["user__sorting-repository-right"]}>
                                        <a
                                            target="_blank"
                                            href = {svn_url}
                                            className={style["repository__repository-button"]}
                                            rel="noreferrer">
                                            ПОСЕТИТЬ
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
