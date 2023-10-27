import { commonFunction, modalClickHandler } from "./modals";
import { removeCustomClass, } from "../functions/customFunctions";

let events = [];

let storedEvenst = JSON.parse(localStorage.getItem('events')) || [];
	events = storedEvenst;

document.addEventListener('DOMContentLoaded', function () {
	const calendarEl = document.querySelector(".big-calendar__body");

	let allData = {};

	function formatedValue(value, countValue) {
		return value < countValue ? '0' + value : '' + value
	}

	const errorTag = '<p class="just-validate-error-label">Поле не может быть пустым</p>';

	if (calendarEl) {
		const calendar = new FullCalendar.Calendar(calendarEl, {
			initialView: "dayGridMonth",
			locale: "uk",
			events: events,
			height: 'auto',
			// contentHeight: 800,	
			headerToolbar: false,

			dayCellContent: function (arg) {
				return formatedValue(arg.date.getDate(), 10);
			},

			dayCellDidMount: function (arg) {
				const currentClass = 'task-btn';
				const currentBlocks = arg.el;
				const triggerBox = `<span class="${currentClass}"></span>`;

				currentBlocks.querySelector('.fc-scrollgrid-sync-inner').insertAdjacentHTML('afterbegin', triggerBox);
				currentBlocks.querySelector(`.${currentClass}`).onclick = function () { handleEvents(arg) };
			},
		});

		calendar.render();


		function getCurrentValue(input) {
			return input.value;
		}

		// // Функция для обработки клика на кнопку модального окна
		function modalBtnHandler(button, calendarInput, timeInput) {
			button.addEventListener("click", function (e) {
				e.preventDefault();

				const currentField = document.querySelector('[data-mode-modal="new-task"] .task-modal__value');

				if ( getCurrentValue(calendarInput).length > 0 && getCurrentValue(timeInput).length > 0) {

					const day =  formatedValue(+getCurrentValue(calendarInput).split('-')[0], 10);
					let month =  formatedValue(+getCurrentValue(calendarInput).split('-')[1] + 1, 10) ;
					const year = getCurrentValue(calendarInput).split('-')[2];


					currentField.removeAttribute("placeholder");
					currentField.setAttribute('data-new-time', getCurrentValue(calendarInput).split('-').reverse().join('-'));
					currentField.value = `Дата та час завершення задачі ${year}-${month}-${day.trim()}, ${getCurrentValue(timeInput)}`;
					removeCustomClass(this.closest(".calendar-modal"));
				}
			});
		}

		// // Обработчик клика на кнопку "Добавить задачу"
		function addNewTaskHandler(inputs, getFormatedDate) {

			let endTime = getFormatedDate;

			const endTimeInput = document.querySelector('input[name="task_time"]');
			const titleInput = document.querySelector('input[name="task_title"]');
			const textInput = document.querySelector('textarea[name="task_descr"]');

			if (endTimeInput.hasAttribute('data-new-time')) {
				endTime = endTimeInput.getAttribute('data-new-time');
				endTimeInput.removeAttribute('data-new-time')
			}


			// inputs.forEach((input) => {
			// 	if (input.value.trim() === "") {
			// 		isValid = false;
			// 	} else {
			// 		allData[input.name] = input.value;
			// 		isValid = true;
			// 	}

			// 	!isValid ? input.insertAdjacentHTML("afterend", errorTag) : "";
			// });

			let newTask = {
				title: 'Тестовая задача',
				start: `${getFormatedDate}`,
				end: `${endTime}`,
				allDay: true // Если событие длится весь день
			};


			events = [...events, newTask]
			localStorage.setItem('events', JSON.stringify(events));
			calendar.addEvent(newTask);
			commonFunction();
		}

		// Функция для обработки событий
		function handleEvents(arg) {
			modalClickHandler("new-task", "active");

			const mainModal = document.querySelector('[data-mode-modal="new-task"]');
			const mainModalBtn = mainModal && mainModal.querySelector(".main-button");
			const mainModalField = mainModal.querySelector('[data-mode-modal="new-task"] .task-modal__value');

			let newDate = new Date(arg.date.toISOString());

			let getFormatedDate = `${newDate.getFullYear()}-${formatedValue(newDate.getMonth() + 1, 10)}-${formatedValue(newDate.getDate(), 10)}`
			mainModalField.removeAttribute("placeholder");
			mainModalField.value = `Дата та час завершення задачі ${getFormatedDate}`;


			const mainModalFields = mainModal && mainModal.querySelectorAll(".task-modal__field");

			const calendarModal = document.querySelector('[data-popup="calendar-task"]');
			const calendarModalBtn = calendarModal && calendarModal.querySelector(".main-button");
			const calendarModalCalendar = calendarModal && calendarModal.querySelector('.custom-calendar [type="hidden"]');
			const calendarModalInput = calendarModal && calendarModal.querySelector(".calendar-modal__time");

			modalBtnHandler(calendarModalBtn, calendarModalCalendar, calendarModalInput);

			mainModalBtn.onclick = function(e) {
				e.preventDefault();
				addNewTaskHandler(mainModalFields, getFormatedDate)
			};
		}


		let years = [];
		let months = [
			'Січень',
			'Лютий',
			'Березень',
			'Квітень',
			'Травень',
			'Червень',
			'Липень',
			'Серпень',
			'Вересень',
			'Жовтень',
			'Листопад',
			'Грудень'
		];

		for (let year = 1990; year <= 2050; year++) {
			years.push(year);
		}

		const changeDateHandler = (select, calendar, step, type) => {
			let currentDate = calendar.getDate();
			let todayYear = currentDate.getFullYear();
			let todayMonth = currentDate.getMonth();
			let todayDay = currentDate.getDay();

			if (type === "year") {
				calendar.gotoDate(new Date(todayYear + step, todayMonth, 1));

				select.querySelector('.select__current').innerText = todayYear + step;
			}

			if (type === "month") {
				let newMonts = todayMonth + step;

				newMonts < 0 ? newMonts = 11 : newMonts;
				newMonts === 12 ? newMonts = 0 : newMonts;

				const calendarDate = `${todayYear}-${formatedValue(newMonts + 1, 10)}-${formatedValue(todayDay, 10)}`;

				calendar.gotoDate(calendarDate);
				select.querySelector('.select__current').innerText = months[newMonts];
			}

		}

		const renderSelect = (calendar, parrent, type, array) => {
			const list = document.querySelector(`[data-type="${type}"] .select__wrapp`);
			let dataId;

			array.forEach(function (item, index) {

				if (type === 'year') {
					dataId = item
				}

				if (type === 'month') {
					dataId = index + 1;
				}

				let listItem = `
					<li class="select__item" data-choice='choosen' data-id="${dataId}">
							${item}
					</li
				`

				list.insertAdjacentHTML('beforeend', listItem);
			})

		}


		const selectItems = document.querySelectorAll('.calendar-nav__item');

		selectItems.forEach(function (item) {
			let typeDate = 'month';
			const prevBtn = item.querySelector('.calendar-nav__prev');
			const nextBtn = item.querySelector('.calendar-nav__next');
			const select = item.querySelector('[data-select]');
			const selectItem = select.querySelector('.select__wrapp');


			if (item.getAttribute('data-type') === 'year') {
				typeDate = 'year';
				renderSelect(calendar, select, 'year', years)
			}

			if (item.getAttribute('data-type') === 'month') {
				renderSelect(calendar, select, 'month', months)
			}

			prevBtn.addEventListener('click', function (e) {
				e.preventDefault()
				changeDateHandler(select, calendar, -1, typeDate);
			})

			nextBtn.addEventListener('click', function (e) {
				e.preventDefault()
				changeDateHandler(select, calendar, 1, typeDate);
			})


			selectItem.addEventListener('click', function (e) {
				if (e.target && e.target.tagName === 'LI') {

					const newDate = e.target.dataset.id;

					let currentDate = calendar.getDate();
					let todayYear = currentDate.getFullYear();
					let todayMonth = currentDate.getMonth();

					if (+newDate > 12) {
						calendar.gotoDate(new Date(newDate, todayMonth, 1))
					}

					if (+newDate <= 12) {
						calendar.gotoDate(new Date(todayYear, +newDate - 1, 1))
					}

				}
			})

		})

	}


});