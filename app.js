let pdf_file = [{
	name: 'Статья на русском языке в журнале ЖТФ по измерению быстродействия и линейности отклика',
	pdf: 'pdf/rus_НН_измерения_2023.pdf'
},{
	name: 'Переведенная статья на английском языке',
	pdf: 'pdf/eng_НН_измерения_2023.pdf'
},{
	name: 'Тезис на конкурсе 78-е Дни Науки НИТУ МИСИС',
	pdf: 'pdf/78_ДН_2023.pdf',
	source: 'https://news.myseldon.com/ru/news/index/282693938',
	name_source: 'Занял первое место по стратегическому направлению Квантовый интернет'

},{
	name: 'Тезис на Конкурс НБНМ-23 г.Орел',
	pdf: 'pdf/НБНМ_тезис_2023.pdf',
	source: 'https://sfy-conf.ru/winners_2023',
	name_source: 'Занял 3-е место во всероссийском конкурсе НИР Наука будущего наука молодых в секции Физика и астрономия'
},{
	name: 'Постерный доклад на международном симпозиуме Нанофизика и Наноэлектроника в г.НН. Являюсь основным автором данной работы',
	pdf: 'pdf/НН_постер_2024.pdf'
},{
	name: 'Актуальная статья, принятая в печать, но еще не опубликованная (выйдет в новом 6 выпуске журнала Физика Твердого Тела). К ней имеется постер (см.предыдущий файл). Являюсь основным автором данной статьи',
	pdf: 'pdf/НН_статья_автоколебания_2024.pdf'
},{
	name: 'Тезис из сборника конференции в НН. По этим данным выйдет новая статья в ЖТФ. Являюсь соавтором данной статьи',
	pdf: 'pdf/НН_тезис_прогресс_2024.pdf'
},{
	name: 'Постерный доклад к конференции Сверхпроводимость в наноструктурах в Сколтехе',
	pdf: 'pdf/Постер_Сколково_2023.pdf'
}]


var count = 0;
function pdf(a){
	let p1 = document.querySelector('.p1');
	count += a;
	if (count >= 0 && (count == 2 || count == 3)){
		let embed = document.querySelector('embed');
		let iframe = document.querySelector('iframe');
		embed.src = pdf_file[count].pdf;
		iframe.src = pdf_file[count].pdf;
		p1.innerHTML = `Название (файл ${count+1} из 8):<br> <b>${pdf_file[count].name}</b> <br> 
		Подробнее пройдите по ссылке: <a href="${pdf_file[count].source}">${pdf_file[count].name_source}</a>`;
	} else if (count >= 0 && (count != 1 || count != 3)){
		let embed = document.querySelector('embed');
		let iframe = document.querySelector('iframe');
		embed.src = pdf_file[count].pdf;
		iframe.src = pdf_file[count].pdf;
		p1.innerHTML = `Название (файл ${count+1} из 8):<br> <b>${pdf_file[count].name}</b>`;
	}
}
