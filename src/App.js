import React, { Component } from 'react';
import { Location } from'./components/Location'
import { CityTypeJoining } from'./components/CityTypeJoining'

import './App.css';

//Набор работ "Воздушная линия". Уровень напряжения до 1кв
const worksVl = [
	{
		id: 1,
		text: 'опоры ж/б, СИП до 50мм2 включительно, алюм.',
		price: 909050,
		priceCategory: 'worksPrice'
	},
	{
		id: 2,
		text: 'опоры ж/б, СИП от 50 до100мм2 включительно, алюм.',
		price: 817303.93,
		priceCategory: 'worksPrice'
	},
	{
		id: 3,
		text: 'опоры ж/б, СИП от 100 до 200мм2 включительно, алюм.',
		price: 2216445.97,
		priceCategory: 'worksPrice'
	}
]

//Набор работ "Воздушная линия". Уровень напряжения до 20кв
const worksVl2 = [
	{
		id: 1,
		text: 'опоры ж/б, СИП до 50мм2 включительно, алюм.',
		price: 909050,
		priceCategory: 'worksPrice'
	},
	{
		id: 2,
		text: 'опоры ж/б, СИП от 50 до100мм2 включительно, алюм.',
		price: 817303.93,
		priceCategory: 'worksPrice'
	},
	{
		id: 3,
		text: 'опоры ж/б, СИП от 100 до 200мм2 включительно, алюм.',
		price: 2216445.97,
		priceCategory: 'worksPrice'
	},
	{
		id: 4,
		text: 'опоры ж/б, СИП до 50мм2 включительно, алюм.',
		price: 1522503.72,
		priceCategory: 'worksPrice'
	},
	{
		id: 5,
		text: 'опоры ж/б, СИП от 50 до100мм2 включительно, алюм.',
		price: 1898569.26,
		priceCategory: 'worksPrice'
	},
	{
		id: 6,
		text: 'опоры ж/б, неизолированный провод до 50мм2 включительно, сталеалюм.',
		price: 474435.28,
		priceCategory: 'worksPrice'
	},
];

//Работы ТП
const worksTp = [
	{
		id: 7,
		text: 'ТП, однотрансформаторная, до 25кВА включительно',
		price: 23327.89,
		priceCategory: 'worksPriceTpRtp'
	},
	{
		id: 8,
		text: 'ТП, однотрансформаторная, от 25 до 100кВА включительно',
		price: 7646.38,
		priceCategory: 'worksPriceTpRtp'
	},
	{
		id: 9,
		text: 'ТП, однотрансформаторная, от 100 до 250кВА включительно',
		price: 3161.33,
		priceCategory: 'worksPriceTpRtp'
	},
	{
		id: 10,
		text: 'ТП, однотрансформаторная, от 250 до 500кВА включительно',
		price: 2786.84,
		priceCategory: 'worksPriceTpRtp'
	},
	{
		id: 11,
		text: 'ТП, однотрансформаторная, от 500 до 900кВА включительно',
		price: 1864.51,
		priceCategory: 'worksPriceTpRtp'
	},
	{
		id: 12,
		text: 'ТП, однотрансформаторная, свыше 1000кВА',
		price: 1631.45,
		priceCategory: 'worksPriceTpRtp'
	},
	{
		id: 13,
		text: 'ТП, двухтрансформаторная, от 25 до 100кВА включительно',
		price: 25521.16,
		priceCategory: 'worksPriceTpRtp'
	},
	{
		id: 14,
		text: 'ТП, двухтрансформаторная, от 100 до 250кВА включительно',
		price: 9159.2,
		priceCategory: 'worksPriceTpRtp'
	},
	{
		id: 15,
		text: 'ТП, двухтрансформаторная, от 250 до 500кВА включительно',
		price: 6511.95,
		priceCategory: 'worksPriceTpRtp'
	},
	{
		id: 16,
		text: 'ТП, двухтрансформаторная, от 500 до 900кВА включительно',
		price: 13262.56,
		priceCategory: 'worksPriceTpRtp'
	},
	{
		id: 17,
		text: 'ТП, двухтрансформаторная, свыше 1000кВА',
		price: 4822.78,
		priceCategory: 'worksPriceTpRtp'
	},
];

//Работы РТП
const worksRtp = [
	{
		id: 18,
		text: 'РТП, однотрансформаторная и более, от 500 до 900кВА',
		price: 16262.55,
		priceCategory: 'worksPriceTpRtp'
	},
	{
		id: 19,
		text: 'РТП, двухтрансформаторная и более, от 500 до 900кВА',
		price: 20370.63,
		priceCategory: 'worksPriceTpRtp'
	},
	{
		id: 20,
		text: 'РТП, двухтрансформаторная и более, свыше 1000кВА',
		price: 13284.32,
		priceCategory: 'worksPriceTpRtp'
	}
];

//END ВХОДНЫЕ ДАННЫЕ

class App extends Component {
	state = {
		location: '',
		type: '',
		building: '',
		x1: 0,
		x2: 0,
		x3: 0,
		l: 0,
		lBuilding: 0, //Расстояние (по прямой) до ближайших электросетевых объектов, км:
		category: 0, //Категория надежности
		voltage: '', //Уровень напряжения
		powerLine: '', //Линия электропередач
		resultMaxPower: 0,
		resultStandard: 0,
		works: '', //Набор работ
		worksPrice: 0, //Цена работы
		tpRtp: '', //Строительсво ТП/РТП
		worksTpRtp: '', //Набор работ
		worksPriceTpRtp: 0, //Цена работы
	}

	//Расчёт параметров x1, x2, x3
	handleParamChange = (e) => {
		const { id, value } = e.currentTarget;

		this.setState({ [id]: +value });

		this.setState((state) => {
			return {
				x3: state.x2 - state.x1
			};
		});
	}

	//Запись остальных параметров
	handleInputChange = (e) => {
		const { id, value } = e.currentTarget;
		this.setState({ [id]: value });
	}

	//Обработка вариантов работ 
	calcWorks = () => {
		const { category, voltage, powerLine } = this.state;

		if ( +category === 3 && powerLine === "air" && voltage === "до 1") {
			this.setState({works: worksVl});
		} else if ( +category === 3 && powerLine === "air" && voltage === "до 20" ) {
			this.setState({works: worksVl2});
		} else {
			this.setState({works: ''});
		}
	}

	//Обработка вариантов работ TP/RTP
	calcWorksTpTtp = () => {
		const { category, tpRtp, powerLine } = this.state;

		if ( +category === 3 && powerLine === "air" && tpRtp === "tp" ) {
			this.setState({worksTpRtp: worksTp});
		} else if ( +category === 3 && powerLine === "air" && tpRtp === "rtp" ) {
			this.setState({worksTpRtp: worksRtp});
		} else {
			this.setState({worksTpRtp: ''});
		}
	}

	//Обработка вариантов
	calcResult = () => {	
		const { x1, x2, x3, location, type, building, l, tpRtp, worksPrice, lBuilding } = this.state;

		if (x1 && x2 <= 15 && location === "city" && type === "old" && l > 0 && l <= 0.3) { //Пункт 1.1.1
			this.result(550, 550);
		} else if (x1 && x2 <= 15 && location === "city" && type === "old" && l > 0.3) { 	  //Пункт 1.1.1
			this.result(536.6*x3*1.2, 15415.33*1.2);
		}	else if (x1 && x2 >= 15 && x2 <= 150 && location === "city" && type === "old") {    //Пункт 1.1.2
			this.result(536.6*x3*1.2, 15415.33*1.2);
		}	else if (x1 && x2 >= 151 && x2 <= 8900 && location === "city" && type === "old" && building === "no") {   //Пункт 1.1.3.1
			this.result(536.6*x3*1.2, 15415.33*1.2);
		} else if (x1 && x2 >= 151 && 
										 x2 <= 8900 && 
										 location === "city" && 
										 type === "old" && 
										 building === "yes" &&
										 tpRtp === "no") {   //Пункт 1.1.3.2 БЕЗ ТП/РТП
			this.result(((536.6*x3)+(worksPrice*x3))*1.2, (15415.33 + (worksPrice*lBuilding))*1.2);
		} else {
			this.result(0, 0);
		}
	}

	//Расчёт результата
	result = (resultMaxPower, resultStandard) => {
		this.setState({ resultMaxPower: resultMaxPower, resultStandard: resultStandard })
	}

	render() {
		return (
			<div className="calc">
				<div className="calc-content">
					<h1 className="calc__title">Калькулятор стоимости технологического присоединения
					в Пензе и Пензенской области сетевой организацией ООО "СК"</h1>
					<p className="calc__description">
						Калькулятор стоимости ТП предназначен для онлайн-расчета ориентировочной стоимости
						технологического присоединения в соответствии с утвержденными ставками платы
						с учетом допущений по объему мероприятий сетевой организации
						по присоединению объекта.
					</p>
					<Location handleInputChange={this.handleInputChange} />
					{this.state.location === 'city' && <CityTypeJoining data={this.state}
																															handleParamChange={this.handleParamChange} 
																															handleInputChange={this.handleInputChange} 
																															calcWorks={this.calcWorks}
																															calcWorksTpTtp={this.calcWorksTpTtp}
																															calcResult={this.calcResult} />}
				</div>
				<div className="calc-sidebar">
					<h2>Суммы с учетом НДС</h2>
					<p>Итого по ставке
за максимальную мощность
(руб./кВт) <b>{this.state.resultMaxPower}</b>	</p>
					<p>Итого
по стандартизированной
ставке (руб.) <b>{this.state.resultStandard}</b></p>
				</div>
			</div>
		);
	}
}

export default App;