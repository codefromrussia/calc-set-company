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
		tpRtp: '', //Строительсво ТП/РТП
		worksTpRtp: '', //Набор работ
		air: 0, //Цена работ для воздушной ЛЭП
		cabel: 0, //Цена работ для кабельной ЛЭП
		tp: 0, //Цена работ для ТП
		rtp: 0, //Цена работ для РТП
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

		if ( +category === 3 && powerLine === "air" && voltage === "до 1") { // Город 3-я категория надёжности
			this.setState({works: worksVl});
		} else if ( +category === 3 && powerLine === "air" && voltage === "до 20" ) {
			this.setState({works: [...worksVl, ...worksVl2]});
		} else if ( +category === 3 && powerLine === "cabel" && voltage === "до 1" ) {
			this.setState({works: worksCl});
		} else if ( +category === 3 && powerLine === "cabel" && voltage === "до 20" ) {
			this.setState({works: [...worksCl, ...worksCl2]});
		} else if ( +category === 2 && powerLine === "air" && voltage === "до 1" ) { // Город 2-я категория надёжности
			this.setState({works: worksVl});
		} else if ( +category === 2 && powerLine === "air" && voltage === "до 20" ) {
			this.setState({works: [...worksVl, ...worksVl2]});
		} else if ( +category === 2 && powerLine === "cabel" && voltage === "до 1" ) {
			this.setState({works: worksCl});
		} else if ( +category === 2 && powerLine === "cabel" && voltage === "до 20" ) {
			this.setState({works: [...worksCl, ...worksCl2]});
		} else if ( +category === 2 && powerLine === "aircabel" && voltage === "до 1" ) {
			this.setState({works: [...worksVl, ...worksCl]});
		} else if ( +category === 2 && powerLine === "aircabel" && voltage === "до 20" ) {
			this.setState({works: [...worksVl, ...worksVl2, ...worksCl, ...worksCl2]});
		} else {
			this.setState({works: ''});
		}
	}

	//Обработка вариантов работ TP/RTP
	calcWorksTpTtp = () => {
		const { tpRtp } = this.state;

		if ( tpRtp === "tp" ) {
			this.setState({worksTpRtp: worksTp});
		} else if ( tpRtp === "rtp" ) {
			this.setState({worksTpRtp: worksRtp});
		} else if ( tpRtp === "rtptp" ) {
			this.setState({worksTpRtp: [...worksTp, ...worksRtp]});
		} else {
			this.setState({worksTpRtp: ''});
		}
	}

	//Обработка вариантов
	calcResult = () => {	
		const { x1, x2, x3, location, type, building, powerLine, l, tpRtp, cabel, air, category, lBuilding, tp, rtp } = this.state;

		if (x1 && x2 <= 15 && location === "city" && type === "old" && l > 0 && l <= 0.3) { //Пункт 1.1.1
			this.result(550, 550);
		} else if (x1 && x2 <= 15 && location === "city" && type === "old" && l > 0.3) { 	  //Пункт 1.1.1
			this.result(536.6*x3*1.2, 15415.33*1.2);
		}	else if (x1 && x2 >= 15 && x2 <= 150 && location === "city" && type === "old") {    //Пункт 1.1.2
			this.result(536.6*x3*1.2, 15415.33*1.2);
		}	else if (x1 && x2 >= 151 && x2 <= 8900 && location === "city" && type === "old" && building === "no") {   //Пункт 1.1.3.1
			this.result(536.6*x3*1.2, 15415.33*1.2);
		} else if (x1 &&  //Пункт 1.1.3.2 БЕЗ строительсва ТП/РТП. Для 3-ей кат. над. Воздушной линии
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "3" &&
							 powerLine === "air" &&
							 tpRtp === "no") {  
			this.result(((536.6*x3)+(air*x3))*1.2, (15415.33 + (air*lBuilding))*1.2);
		} else if (x1 &&  //Пункт 1.1.3.2 БЕЗ строительсва ТП/РТП. Для 3-ей кат. над. Кабельной линии
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "3" &&
							 powerLine === "cabel" &&
							 tpRtp === "no") {  
			this.result(((536.6*x3)+(cabel*x3))*1.2, (15415.33 + (cabel*lBuilding))*1.2);
		} else if (x1 &&  //Пункт 1.1.3.2 БЕЗ строительсва ТП/РТП. Для 2-ой кат. над. Воздушной линии
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "2" &&
							 powerLine === "air" &&
							 tpRtp === "no") {  
			this.result((((536.6*x3)+(air*x3))*2)*1.2, ((15415.33 + (air*lBuilding))*2)*1.2);
		} else if (x1 &&  //Пункт 1.1.3.2 БЕЗ строительсва ТП/РТП. Для 2-ой кат. над. Кабельной линии
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "2" &&
							 powerLine === "cabel" &&
							 tpRtp === "no") {  
			this.result((((536.6*x3)+(cabel*x3))*2)*1.2, ((15415.33 + (cabel*lBuilding))*2)*1.2);
		} else if (x1 &&  //Пункт 1.1.3.2 БЕЗ строительсва ТП/РТП. Для 2-ой кат. над. Воздушной и Кабельной линии 
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "2" &&
							 powerLine === "aircabel" &&
							 tpRtp === "no") {  
			this.result(((536.6*x3)+((Number(air)+Number(cabel))*x3))*1.2, (15415.33 + ((Number(air)+Number(cabel))*lBuilding))*1.2);
		} else if (x1 && //Город. 3-я кат. над. Воздушная ЛЭП. ТП
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "3" &&
							 powerLine === "air" &&
							 tpRtp === "tp") {   
			this.result(((536.6*x3)+(air*x3)+(tp*x3))*1.2, (15415.33 + (air*lBuilding)+(tp*x3))*1.2);
		} else if (x1 && //Город. 3-я кат. над. Воздушная ЛЭП. РТП
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "3" &&
							 powerLine === "air" &&
							 tpRtp === "rtp") {   
			this.result(((536.6*x3)+(air*x3)+(rtp*x3))*1.2, (15415.33 + (air*lBuilding)+(rtp*x3))*1.2);
		} else if (x1 && //Город. 3-я кат. над. Кабельная ЛЭП. ТП
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "3" &&
							 powerLine === "cabel" &&
							 tpRtp === "tp") {   
			this.result(((536.6*x3)+(cabel*x3)+(tp*x3))*1.2, (15415.33 + (cabel*lBuilding)+(tp*x3))*1.2);
		} else if (x1 && //Город. 3-я кат. над. Кабельная ЛЭП. РТП
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "3" &&
							 powerLine === "cabel" &&
							 tpRtp === "rtp") {   
			this.result(((536.6*x3)+(cabel*x3)+(rtp*x3))*1.2, (15415.33 + (cabel*lBuilding)+(rtp*x3))*1.2);
		} else if (x1 && //Город. 2-я кат. над. Воздушная ЛЭП. ТП
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "2" &&
							 powerLine === "air" &&
							 tpRtp === "tp") {   
			this.result(((536.6*x3)+((air*x3)*2)+(tp*x3))*1.2, (15415.33 + ((air*lBuilding)*2)+(tp*x3))*1.2);
		} else if (x1 && //Город. 2-я кат. над. Кабельная ЛЭП. ТП
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "2" &&
							 powerLine === "cabel" &&
							 tpRtp === "tp") {   
			this.result(((536.6*x3)+((cabel*x3)*2)+(tp*x3))*1.2, (15415.33 + ((cabel*lBuilding)*2)+(tp*x3))*1.2);
		} else if (x1 && //Город. 2-я кат. над. Воздушная ЛЭП. РТП
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "2" &&
							 powerLine === "air" &&
							 tpRtp === "rtp") {   
			this.result(((536.6*x3)+((air*x3)*2)+(rtp*x3))*1.2, (15415.33 + ((air*lBuilding)*2)+(rtp*x3))*1.2);
		} else if (x1 && //Город. 2-я кат. над. Кабельная ЛЭП. РТП
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "2" &&
							 powerLine === "cabel" &&
							 tpRtp === "rtp") {   
			this.result(((536.6*x3)+((cabel*x3)*2)+(rtp*x3))*1.2, (15415.33 + ((cabel*lBuilding)*2)+(rtp*x3))*1.2);
		} else if (x1 && //Город. 2-я кат. над. Воздушная и Кабельная ЛЭП. ТП
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "2" &&
							 powerLine === "aircabel" &&
							 tpRtp === "tp") {   
			this.result(((536.6*x3)+((Number(air) + Number(cabel))*x3)+(tp*x3))*1.2, (15415.33 + ((Number(air) + Number(cabel))*lBuilding)+(tp*x3))*1.2);
		} else if (x1 && //Город. 2-я кат. над. Воздушная и Кабельная ЛЭП. ТП
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "2" &&
							 powerLine === "aircabel" &&
							 tpRtp === "rtp") {   
			this.result(((536.6*x3)+((Number(air) + Number(cabel))*x3)+(rtp*x3))*1.2, (15415.33 + ((Number(air) + Number(cabel))*lBuilding)+(rtp*x3))*1.2);
		} else if (x1 && //Город. 2-я кат. над. Воздушная ЛЭП. РТП + ТП
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "2" &&
							 powerLine === "air" &&
							 tpRtp === "rtptp") {   
			this.result(((536.6*x3)+((air*x3)*2)+((Number(tp) + Number(rtp))*x3))*1.2, (15415.33 + ((air*lBuilding)*2)+((Number(tp) + Number(rtp))*x3))*1.2);
		} else if (x1 && //Город. 2-я кат. над. Кабельная ЛЭП. РТП + ТП
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "2" &&
							 powerLine === "cabel" &&
							 tpRtp === "rtptp") {
			this.result(((536.6*x3)+((cabel*x3)*2)+((Number(tp) + Number(rtp))*x3))*1.2, (15415.33 + ((cabel*lBuilding)*2)+((Number(tp) + Number(rtp))*x3))*1.2);
		} else if (x1 && //Город. 2-я кат. над. Воздушная и Кабельная ЛЭП. РТП + ТП
							 x2 >= 151 && 
							 x2 <= 8900 && 
							 location === "city" && 
							 type === "old" && 
							 building === "yes" &&
							 category === "2" &&
							 powerLine === "aircabel" &&
							 tpRtp === "rtptp") {
			this.result(((536.6*x3)+((Number(air) + Number(cabel))*x3)+((Number(tp) + Number(rtp))*x3))*1.2, (15415.33 + ((Number(air) + Number(cabel))*lBuilding)+((Number(tp) + Number(rtp))*x3)*1.2));
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