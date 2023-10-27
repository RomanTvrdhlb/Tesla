import datepicker from "../vendor/datePicker";


function getCurrentDate(number){
    return number < 10 ? `0${number}` : `${number}`;
}

document.querySelectorAll('.custom-calendar__input').forEach(function(calendar){

    const picker = datepicker(calendar, {
        alwaysShow: true,
        customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
        customMonths: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
        onSelect: (instance, date, e) => {
            calendar.previousElementSibling.value = `${getCurrentDate(date.getDate())}-${getCurrentDate(date.getMonth())}-${date.getFullYear()}`;
        }    
    }); 
})








