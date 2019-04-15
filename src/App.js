import React, { Component } from 'react';
import { Location } from'./components/Location';
import { CityTypeJoining } from'./components/CityTypeJoining';
import { worksVl, worksVl2, worksTp, worksRtp, worksCl, worksCl2} from'./data/data.js'; // Input

import './App.css';

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
			this.setState({works: [...worksVl, ...worksVl2]});
		} else if ( +category === 3 && powerLine === "cabel" && voltage === "до 1" ) {
			this.setState({works: worksCl});
		} else if ( +category === 3 && powerLine === "cabel" && voltage === "до 20" ) {
			this.setState({works: [...worksCl, ...worksCl2]});
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
		const { x1, x2, x3, location, type, building, l, tpRtp, worksPrice, lBuilding, worksPriceTpRtp } = this.state;

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
		} else if (x1 && x2 >= 151 && 
										 x2 <= 8900 && 
										 location === "city" && 
										 type === "old" && 
										 building === "yes" &&
										 (tpRtp === "tp" ||
										 tpRtp === "rtp") ) {   //Пункт 1.1.3.2 Для ТП И РТП
			this.result(((536.6*x3)+(worksPrice*x3)+(worksPriceTpRtp*x3))*1.2, (15415.33 + (worksPrice*lBuilding)+(worksPriceTpRtp*x3))*1.2);
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