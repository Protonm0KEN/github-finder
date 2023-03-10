import React from "react";

import style from "../UserCard.module.scss";

const UserRepository = ({repository}) => {
    const {stargazers_count, name, svn_url, pushed_at} = repository;
    return (
        <div className={style["user__sorting-repository"]}>
            <div className={style["user__sorting-repository-left"]}>
                <p className={style["repository-title"]}>{name}</p>
                <p className={style["repository-starsCount"]}>Количество звезд: {stargazers_count}</p>
                <p className={style["repository-dateOfCreation"]}>Дата добавления: {pushed_at.substring(0, 10)}</p>
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
};

export default UserRepository;
