import { createI18n } from "vue-i18n"

const messages = {
    ua: {
        name: "Українська",
        nav: {
            login: "Вхід | Ввійти | Вхід...",
            register: "Реєстрація | Зареєструватися | Реєстрація...",
            search: "Пошук",
            pages: {
                home: "Головна",
            },
        },
        authorization: {
            name: "Ім'я",
            email: "Електронна адреса",
            password: "Пароль",
            rememberMe: "Запам'ятати мене",
        },
        footer: {
            rights: "Всі права зареєстровано",
            mailing: {
                title: "Підпишіться на нашу розсилку",
                subtitle: "Щомісячний дайджест нового та цікавого від нас.",
                placeholder: "Електронна адреса",
                button: "Підписатись",
            },
        },
    },/*
    en: {
        name: "English",
        nav: {
            login: "Login | Login | Processing",
            register: "Register | Register | Processing",
            search: "Search",
            pages: {
                home: "Home",
            },
        },
        authorization: {
            name: "Name",
            email: "Email",
            password: "Password",
            rememberMe: "Remember me",
        },
        footer: {
            rights: "All rights reserved",
            mailing: {
                title: "Subscribe to our newsletter",
                subtitle: "Monthly digest of what's new and exciting from us.",
                placeholder: "Email address",
                button: "Subscribe",
            },
        },
    }*/
}

export default createI18n({
    locale: "ua",
    // fallbackLocale: "en",
    messages,
})
