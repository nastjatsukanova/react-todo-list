
 export const getCurrentDate = () => {
    const day = new Date();
    const currentDay = day.getDate();
    const currentMonth = '0' + (day.getMonth() + 1);
    const currentYear = day.getFullYear();
    return `${currentYear}-${currentMonth}-${currentDay > 9 ? currentDay : '0' + currentDay}`;
}

export const setToStorage = (todos) => localStorage.setItem('todos', JSON.stringify(todos));