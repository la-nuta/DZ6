const currentYear = 2017;
let userSurname = inputSurname(),
    userName = inputName(),
    userSecondName = inputSecondName(),
    userBirthdayYear = inputBirthdayYear(),
    userBirthdayMonth = inputBirthdayMonth(),
    userBirthdayDate = inputBirthdayDate(),
    userGender = inputGender(),
    userCountry = inputCountry(),
    userCityTownVillageType = inputCityTownVillageType(),
    userCityTownVillageName = inputCityTownVillageName(userCityTownVillageType),
    userStreetType = inputStreetType(),
    userStreetName = inputStreetName(userStreetType),
    userBuildingNumber = inputUserBuildingNumber(),
    userIsRetired = retire(userBirthdayYear, userGender);

function isCorrectName(name) {
    return name.length > 1 && isNaN(name) && name.length < 20 && name[0] === name[0].toUpperCase();
}

function isCorrectStreetName(street) {
    return street.length > 1 && isNaN(street) && street.length < 20;
}

function inputSurname() {
    let userInputSurname = prompt('Введите вашу фамилию');
    while (true) {
        if (isCorrectName(userInputSurname)) {
            return userInputSurname;
        }
        else {
            userInputSurname = prompt('Введенные данные не корректны. Введите вашу фамилию');
        }
    }
}

function inputName() {
    let userInputName = prompt('Введите ваше имя');
    while (true) {
        if (isCorrectName(userInputName)) {
            return userInputName;
        }
        else {
            userInputName = prompt('Введенные данные не корректны. Введите ваше имя');
        }
    }
}

function inputSecondName() {
    let userInputSecondName = prompt('Введите ваше отчество');
    while (true) {
        if (isCorrectName(userInputSecondName)) {
            return userInputSecondName;
        }
        else {
            userInputSecondName = prompt('Введенные данные не корректны. Введите ваше отчество');
        }
    }
}

function inputBirthdayYear() {
    let userInputBirthdayYear = Number(prompt('Введите год рождения'));
    while (true) {
        if (isFinite(userInputBirthdayYear) && userInputBirthdayYear >= (currentYear - 100) && userInputBirthdayYear <= currentYear) {
            return userInputBirthdayYear;
        }
        else {
            userInputBirthdayYear = Number(prompt('Введенные данные не корректны. Введите год рождения'));
        }
    }
}

function changeEndOfMonth(month) {
    let inputMonths = ['январь', 'февраль', 'апрель', 'июнь', 'июль', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    return inputMonths.includes(month);
}

function inputBirthdayMonth() {
    let userInputBirthdayMonth = prompt('Введите месяц рождения \n(например: январь)').toLowerCase();
    while (true) {
        if (changeEndOfMonth(userInputBirthdayMonth)) {
            userInputBirthdayMonth = userInputBirthdayMonth.replace('ь', 'я');
            return userInputBirthdayMonth;
        }
        else if (userInputBirthdayMonth === 'март') {
            return 'марта';
        }
        else if (userInputBirthdayMonth === 'май') {
            return 'мая';
        }
        else if (userInputBirthdayMonth === 'август') {
            return 'августа';
        }
        else {
            userInputBirthdayMonth = prompt('Введенные данные не корректны. Введите месяц рождения \n(например: январь)').toLowerCase();
        }
    }
}

function isLeapYear(year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}

function inputBirthdayDate() {
    let userInputBirthdayDate = Number(prompt('Введите день рождения'));
    while (true) {
        if (userBirthdayMonth === 'января' || userBirthdayMonth === 'марта' || userBirthdayMonth === 'мая' ||
            userBirthdayMonth === 'июля' || userBirthdayMonth === 'августа' ||
            userBirthdayMonth === 'октября' || userBirthdayMonth === 'декабря') {
            if (isFinite(userInputBirthdayDate) && userInputBirthdayDate >= 1 && userInputBirthdayDate <= 31) {
                return userInputBirthdayDate;
            }
            else {
                userInputBirthdayDate = Number(prompt('Введенные данные не корректны. Введите день рождения'));
            }
        }
        else if (userBirthdayMonth === 'апреля' || userBirthdayMonth === 'июня' || userBirthdayMonth === 'сентября' ||
            userBirthdayMonth === 'ноября') {
            if (isFinite(userInputBirthdayDate) && userInputBirthdayDate >= 1 && userInputBirthdayDate <= 30) {
                return userInputBirthdayDate;
            }
            else {
                userInputBirthdayDate = Number(prompt('Введенные данные не корректны. Введите день рождения'));
            }
        }
        else if (userBirthdayMonth === 'февраля') {
            if (isFinite(userInputBirthdayDate) && userInputBirthdayDate >= 1 && userInputBirthdayDate <= 28) {
                return userInputBirthdayDate;
            }
            else if (isFinite(userInputBirthdayDate) && userInputBirthdayDate === 29 && isLeapYear(userBirthdayYear)) {
                return userInputBirthdayDate;
            }
            else {
                userInputBirthdayDate = Number(prompt('Введенные данные не корректны. Введите день рождения'));
            }
        }
    }
}

function inputGender() {
    let userInputGender = prompt('Введите ваш пол').toLowerCase();
    while (true) {
        if (userInputGender === 'мужской' || userInputGender === 'муж' || userInputGender === 'муж.' || userInputGender === 'м'
            || userInputGender === 'м.') {
            userInputGender = 'муж';
            break;
        }

        else if (userInputGender === 'женский' || userInputGender === 'жен' || userInputGender === 'ж' || userInputGender === 'жен.'
            || userInputGender === 'ж.') {
            userInputGender = 'жен';
            break;
        }
        else {
            userInputGender = prompt('Введенные данные не корректны. Введите ваш пол');
        }
    }
    return userInputGender;
}

function inputCountry() {
    let userInputCountry = prompt('Введите страну');
    while (true) {
        if (isCorrectName(userInputCountry)) {
            return userInputCountry;
        }
        else {
            userInputCountry = prompt('Введенные данные не корректны. Введите страну');
        }
    }
}

function inputCityTownVillageType() {
    let userInputCityTownVillageType = Number(prompt('Укажите тип населенного пункта: \n1 - Город, 2 - Село, 3 - Деревня'));
    while (true) {
        switch (userInputCityTownVillageType) {
            case 1:
                return 'г.';
            case 2:
                return 'с.';
            case 3:
                return 'дер.';
            default:
                userInputCityTownVillageType = Number(prompt('Введенные данные не корректны. Укажите тип населенного пункта: \n1 - Город, 2 - Село, 3 - Деревня'));
        }
    }
}

function inputCityTownVillageName() {
    let userInputCityTownVillageName;
    switch (userCityTownVillageType) {
        case 'г.':
            userInputCityTownVillageName = prompt('Введите наименование города');
            while (true) {
                if (isCorrectName(userInputCityTownVillageName)) {
                    return userInputCityTownVillageName;
                }
                else {
                    userInputCityTownVillageName = prompt('Введенные данные не корректны. Введите наименование города');
                }
            }
        case 'с.':
            userInputCityTownVillageName = prompt('Введите наименование села');
            while (true) {
                if (isCorrectName(userInputCityTownVillageName)) {
                    return userInputCityTownVillageName;
                }
                else {
                    userInputCityTownVillageName = prompt('Введенные данные не корректны. Введите наименование села');
                }
            }
        case 'дер.':
            userInputCityTownVillageName = prompt('Введите наименование деревни');
            while (true) {
                if (isCorrectName(userInputCityTownVillageName)) {
                    return userInputCityTownVillageName;
                }
                else {
                    userInputCityTownVillageName = prompt('Введенные данные не корректны. Введите наименование деревни');
                }
            }
    }
}

function inputStreetType() {
    let userInputStreetType = Number(prompt('Выберите тип: \n1 - улица, 2 - проспект, 3 - переулок, 4 - проезд, 5 - площадь'));
    while (true) {
        switch (userInputStreetType) {
            case 1:
                return 'ул.';
            case 2:
                return 'просп.';
            case 3:
                return 'пер.';
            case 4:
                return 'проезд';
            case 5:
                return 'пл.';
            default:
                userInputStreetType = Number(prompt('Введенные данные не корректны. Выберите тип: \n1 - улица, 2 - проспект, 3 - переулок, 4 - проезд, 5 - площадь'));
        }
    }
}

function inputStreetName() {
    let userInputStreetName;
    switch (userStreetType) {
        case 'ул.':
            userInputStreetName = prompt('Введите наименование улицы');
            while (true) {
                if (isCorrectStreetName(userInputStreetName))
                    return userInputStreetName;
                else {
                    userInputStreetName = prompt('Введенные данные не корректны. Введите наименование улицы');
                }
            }
        case 'просп.':
            userInputStreetName = prompt('Введите наименование проспекта');
            while (true) {
                if (isCorrectStreetName(userInputStreetName)) {
                    return userInputStreetName;
                }
                else {
                    userInputStreetName = prompt('Введенные данные не корректны. Введите наименование проспекта');
                }
            }
        case 'пер.':
            userInputStreetName = prompt('Введите наименование переулка');
            while (true) {
                if (isCorrectStreetName(userInputStreetName)) {
                    return userInputStreetName;
                }
                else {
                    userInputStreetName = prompt('Введенные данные не корректны. Введите наименование переулка');
                }
            }
        case 'проезд':
            userInputStreetName = prompt('Введите наименование проезда');
            while (true) {
                if (isCorrectStreetName(userInputStreetName)) {
                    return userInputStreetName;
                }
                else {
                    userInputStreetName = prompt('Введенные данные не корректны. Введите наименование проезда');
                }
            }
        case 'пл.':
            userInputStreetName = prompt('Введите наименование площади');
            while (true) {
                if (isCorrectStreetName(userInputStreetName)) {
                    return userInputStreetName;
                }
                else {
                    userInputStreetName = prompt('Введенные данные не корректны. Введите наименование площади');
                }
            }
    }
}

function inputUserBuildingNumber() {
    let userInputABuildingNumber = prompt('Введите номер дома');
    while (true) {
        if (userInputABuildingNumber !== '' && userInputABuildingNumber && !isNaN(userInputABuildingNumber[0])) {
            return userInputABuildingNumber;
        }
        else {
            userInputABuildingNumber = prompt('Введенные данные не корректны. Введите номер дома');
        }
    }
}

function retire(year, gender) {
    if (currentYear - year >= 55 && gender === 'жен') {
        return 'да';
    } else if (currentYear - year >= 60 && gender === 'муж') {
        return 'да';
    }
    else {
        return 'нет';
    }
}

alert(`ФИО: ${userSurname} ${userName} ${userSecondName}
Дата рождения: ${userBirthdayDate} ${userBirthdayMonth} ${userBirthdayYear} г.
Пол: ${userGender}
Адрес: ${userCountry}, ${userCityTownVillageType} ${userCityTownVillageName}, ${userStreetType} ${userStreetName}, д. ${userBuildingNumber}
На пенсии: ${userIsRetired}`);