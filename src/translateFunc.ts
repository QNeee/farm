export const translateFunc = (str: string, language: string) => {
    let text = '';
    switch (str) {
        case 'You need to click Start':
            switch (language) {
                case 'ua':
                    text = 'Потрібно натиснути кнопку Старт';
                    return text;
                case 'ru':
                    text = 'Вам нужно нажать Старт'
                    return text;
                default:
                    return str;
            }
        case 'You have 3 chances to find the result, click on the cart':
            switch (language) {
                case 'ua':
                    text = 'У вас є 3 шанси знайти результат, натисніть на кошик';
                    return text;
                case 'ru':
                    text = 'У вас есть 3 шанса найти результат, нажмите на корзину'
                    return text;
                default:
                    return str;
            }
        case 'If you have 0 rolls you need to force result':
            switch (language) {
                case 'ua':
                    text = 'Якщо у вас 0 кидків, вам потрібно форсувати результат';
                    return text;
                case 'ru':
                    text = 'Если у вас 0 бросков, вам нужно форсировать результат'
                    return text;
                default:
                    return str;
            }
        case 'If u want to force end game click Throw':
            switch (language) {
                case 'ua':
                    text = 'Якщо ви хочете примусово завершити гру, натисніть «Здатися»';
                    return text;
                case 'ru':
                    text = 'Если вы хотите принудительно завершить игру, нажмите «Здатся»'
                    return text;
                default:
                    return str;
            }
        case 'If u find the good result you take this in table':
            switch (language) {
                case 'ua':
                    text = 'Якщо ви знайдете хороший результат, занесіть його в таблицю';
                    return text;
                case 'ru':
                    text = 'Если вы найдете хороший результат, занесите его в таблицу'
                    return text;
                default:
                    return str;
            }
        case 'You can move cubics to your stash,u need to click on Cubic image':
            switch (language) {
                case 'ua':
                    text = 'Ви можете переміщувати кубики у свою схованку, вам потрібно натиснути на зображення кубиків'
                    return text;
                case 'ru':
                    text = 'Вы можете переместить кубики в свой тайник, вам нужно нажать на изображение куба';
                    return text;
                default:
                    return str;
            }
        case 'If you dont find good result u have 4 fails':
            switch (language) {
                case 'ua':
                    text = 'Якщо ви не знайдете хорошого результату, у вас є 4 невдачі'
                    return text;
                case 'ru':
                    text = 'Если вы не нашли хорошего результата, у вас 4 неудачи';
                    return text;
                default:
                    return str;
            }
        case 'if you spent all the fails, you need to cross out 1 of the results':
            switch (language) {
                case 'ua':
                    text = 'якщо ви витратили всі невдачі, вам потрібно викреслити 1 результат'
                    return text;
                case 'ru':
                    text = 'если вы потратили все неудачи, нужно вычеркнуть 1 из результатов';
                    return text;
                default:
                    return str;
            }
    }
}