import React, {useEffect, useState} from "react";
import style from "./SearchUser.module.scss"
import UserCard from "../UserCard";
import {useDispatch, useSelector} from "react-redux";
import {loadUser} from "../../store/reducers/getUserActions";
import {loadUserRepos} from "../../store/reducers/getRepositoriesOfUserActions";
const SearchUsers = () => {
    const [reposUrl, setReposUrl] = useState("")
    const [url, setUrl] = useState("")
    const [inputValue, setInputValue] = useState("")
    //* REDUX
    const dispatch = useDispatch();
    const users = useSelector((users) => users);
    const user = users.user
    const repos = useSelector((repos) => {
        return repos.repositoriesOfUser
    })
    useEffect(() => {
        dispatch(loadUserRepos(reposUrl))
        return dispatch(loadUser(url))
    }, [dispatch, reposUrl, url]);
    //* REDUX
    const showLink = () => {
        console.log(`Ссылка введенная пользователем: ${url}`)
    }
    const onClickSendUserApiLink = async (e) => {
        e.preventDefault()
        setUrl(`https://api.github.com/users/${inputValue}`)
        setReposUrl(`https://api.github.com/users/${inputValue}/repos`)
        setInputValue("")
    }
    const openInfoInConsole = () => {
        if(url) {
            showLink()
            console.log(`Пользователь гитхаб: ${user ? user.name : "Пользователь не найден"}`)
            console.log("Репозитории пользователя github: ")
            // eslint-disable-next-line array-callback-return
            console.log(repos.map((repo) => {
                console.log(repo)
            }))
        }
    }
    return (
        <>
            <header className={style["header"]}>
                <a href="/" className={style["header__page-title"]}>GITHUB FINDER</a>
            </header>
            <main className={style["main"]}>
                <div className={style["main__wrapper"]}>
                    <div className="container">
                        <form className={style["main__form"]} onSubmit={onClickSendUserApiLink}>
                            <input className={style["main__form-input"]} value = {inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Введите имя пользователя" type="text"/>
                            <button onClick = {onClickSendUserApiLink} className={style["main__form-button"]} type="submit">Найти</button>
                            <button onClick = {openInfoInConsole} className={style["main__form-button"]} type="submit">Отобразить в консоли</button>
                        </form>
                        {user.login ?
                            <UserCard dataOfUser = {user} Repositories = {repos}/>
                            : <h2>Пользователь не найден</h2>}
                    </div>
                </div>
            </main>
        </>
    );
};
//TODO: Сделать сортировку по репозиториям, подписчикам, подпискам а также выводить список репозиториев пользователя. Оптимизировать код. Решить проблему с отображением данных при первом рендере. Сделать адаптивную верстку.
export default SearchUsers;
