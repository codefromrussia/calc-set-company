import React, { Component } from 'react';
import { Location } from'./components/Location';
import { TypeJoining } from'./components/TypeJoining';
import { worksVl, worksVl2, worksTp, worksRtp, worksCl, worksCl2, worksVlVillage, worksVl2Village, worksClVillage, worksTpVillage, worksRtpVillage} from'./data/data.js'; // Input

import './App.css';

class App extends Component {
	state = {
		location: '',
		type: '',
		building: '',
		x: 0,
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
		airMaxPower: 0, //Цена работ для воздушной ЛЭП за единицу максимальной мощности
		cabel: 0, //Цена работ для кабельной ЛЭП
		cabelMaxPower: 0, //Цена работ для кабельной ЛЭП за единицу максимальной мощности
		tp: 0, //Цена работ для ТП
		tpMaxPower: 0, //Цена работ для ТП за единицу максимальной мощности
		rtp: 0, //Цена работ для РТП
		rtpMaxPower: 0, //Цена работ для РТП за единицу максимальной мощности
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

	//Обработчик вводимы значений
	handleInputChange = (e) => {
		const { id, value } = e.currentTarget;
		this.setState({ [id]: value });
	}

	//Обработчик выбранной работы
	handleWorkChange = (e) => {
		const { id, value, dataPrice } = e.currentTarget;
		const idMaxPower = id + "MaxPower";

		this.setState({ 
			[id]: value,
			[idMaxPower]: dataPrice,
		});
	}

	//Обработка вариантов работ 
	calcWorks = () => {
		const { location, category, powerLine, voltage } = this.state;

		if ( location === "city" && // Город 3-я категория надёжности
				+category === 3 && 
				 powerLine === "air" && 
				 voltage === "до 1" ) { 
			this.setState({works: worksVl});
		} else if ( location === "city" &&
								+category === 3 && 
								powerLine === "air" && 
								voltage === "до 20" ) {
			this.setState({works: [...worksVl, ...worksVl2]});
		} else if ( location === "city" &&
								+category === 3 && 
								powerLine === "cabel" && 
								voltage === "до 1" ) {
			this.setState({works: worksCl});
		} else if ( location === "city" &&
								+category === 3 && 
								powerLine === "cabel" && 
								voltage === "до 20" ) {
			this.setState({works: [...worksCl, ...worksCl2]});
		} else if ( location === "city" &&  // Город 2-я категория надёжности
								+category === 2 && 
								powerLine === "air" && 
								voltage === "до 1" ) {
			this.setState({works: worksVl});
		} else if ( location === "city" &&
								+category === 2 && 
								powerLine === "air" && 
								voltage === "до 20" ) {
			this.setState({works: [...worksVl, ...worksVl2]});
		} else if ( location === "city" &&
								+category === 2 && 
								powerLine === "cabel" && 
								voltage === "до 1" ) {
			this.setState({works: worksCl});
		} else if ( location === "city" &&
								+category === 2 && 
								powerLine === "cabel" && 
								voltage === "до 20" ) {
			this.setState({works: [...worksCl, ...worksCl2]});
		} else if ( location === "city" &&
								+category === 2 && 
								powerLine === "aircabel" && 
								voltage === "до 1" ) {
			this.setState({works: [...worksVl, ...worksCl]});
		} else if ( location === "city" &&
								+category === 2 && 
								powerLine === "aircabel" && 
								voltage === "до 20" ) {
			this.setState({works: [...worksVl, ...worksVl2, ...worksCl, ...worksCl2]});
		} else if ( location === "village" && // Село 3-я категория надёжности
								+category === 3 && 
								powerLine === "air" && 
								voltage === "до 1" ) { 
			this.setState({works: worksVlVillage});
		} else if ( location === "village" &&
								+category === 3 && 
								powerLine === "air" && 
								voltage === "до 20" ) {
			this.setState({works: [...worksVlVillage, ...worksVl2Village]});
		} else if ( location === "village" &&
								+category === 3 && 
								powerLine === "cabel" && 
								voltage === "до 1" ) {
			this.setState({works: null});
		} else if ( location === "village" &&
								+category === 3 && 
								powerLine === "cabel" && 
								voltage === "до 20" ) {
			this.setState({works: worksClVillage});
		} else if ( location === "village" &&  // Село 2-я категория надёжности
								+category === 2 && 
								powerLine === "air" && 
								voltage === "до 1" ) {
			this.setState({works: worksVlVillage});
		} else if ( location === "village" &&
								+category === 2 && 
								powerLine === "air" && 
								voltage === "до 20" ) {
			this.setState({works: [...worksVlVillage, ...worksVl2Village]});
		} else if ( location === "village" &&
								+category === 2 && 
								powerLine === "cabel" && 
								voltage === "до 1" ) {
			this.setState({works: null});
		} else if ( location === "village" &&
								+category === 2 && 
								powerLine === "cabel" && 
								voltage === "до 20" ) {
			this.setState({works: worksClVillage});
		} else if ( location === "village" &&
								+category === 2 && 
								powerLine === "aircabel" && 
								voltage === "до 1" ) {
			this.setState({works: worksVlVillage});
		} else if ( location === "village" &&
								+category === 2 && 
								powerLine === "aircabel" && 
								voltage === "до 20" ) {
			this.setState({works: [...worksVlVillage, ...worksVl2Village, ...worksClVillage]});
		} else {
			this.setState({works: ''});
		}
	}

	//Обработка вариантов работ TP/RTP
	calcWorksTpTtp = () => {
		const { tpRtp, location } = this.state;

		if ( location === "city" && tpRtp === "tp" ) { //Город
			this.setState({worksTpRtp: worksTp});
		} else if ( location === "city" && tpRtp === "rtp" ) {
			this.setState({worksTpRtp: worksRtp});
		} else if ( location === "city" && tpRtp === "rtptp" ) {
			this.setState({worksTpRtp: [...worksTp, ...worksRtp]});
		} else if ( location === "village" && tpRtp === "tp" ) { //Село
			this.setState({worksTpRtp: worksTpVillage});
		} else if ( location === "village" && tpRtp === "rtp" ) {
			this.setState({worksTpRtp: worksRtpVillage});
		} else if ( location === "village" && tpRtp === "rtptp" ) {
			this.setState({worksTpRtp: [...worksTpVillage, ...worksRtpVillage]});
		} else {
			this.setState({worksTpRtp: ''});
		}
	}

	//Обработка вариантов
	calcResult = () => {	
		const { x1, x2, x3, location, type, building, powerLine, l, tpRtp, cabel, air, category, lBuilding, tp, rtp } = this.state;

		if ( location === "city" && //Пункт 1.1.1
				 l > 0 &&
				 l <= 0.3 &&
				 (( x1 && x2 <= 15 && type === "old" ) || 
				 ( x3 > 0 && x3 <= 15 && type === "new" )) ) { 
			this.result(550, 550);
		} else if ( location === "city" &&
								l > 0.3 &&
								(( x1 && x2 <= 15 && type === "old" ) || 
								( x3 > 0 && x3 <= 15 && type === "new" )) ) { 
			this.result(536.6*x3*1.2, 15415.33*1.2);
		}	else if ( location === "city" && //Пункт 1.1.2
							(( x1 && x2 > 15 &&  x2 <= 150 && type === "old" ) ||
							( x3 > 15 && x3 <= 150 && type === "new" )) ) {    
			this.result(536.6*x3*1.2, 15415.33*1.2);
		}	else if ( location === "city" && //Пункт 1.1.3.1
								building === "no" &&
							(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) ||
							( x3 >= 151 && x3 <= 8900 && type === "new" )) ) {   
			this.result(536.6*x3*1.2, 15415.33*1.2);
		} else if ( location === "city" && //Пункт 1.1.3.2 БЕЗ строительсва ТП/РТП. Для 3-ей кат. над. Воздушной линии
								building === "yes" &&
								category === "3" &&
								powerLine === "air" &&
								tpRtp === "no" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) {  
			this.result(((536.6*x3)+(air*x3))*1.2, (15415.33 + (air*lBuilding))*1.2);
		} else if ( location === "city" && //Пункт 1.1.3.2 БЕЗ строительсва ТП/РТП. Для 3-ей кат. над. Кабельной линии
								building === "yes" &&
								category === "3" &&
								powerLine === "cabel" &&
								tpRtp === "no" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) {  
			this.result(((536.6*x3)+(cabel*x3))*1.2, (15415.33 + (cabel*lBuilding))*1.2);
		} else if ( location === "city" && //Пункт 1.1.3.2 БЕЗ строительсва ТП/РТП. Для 2-ой кат. над. Воздушной линии
								building === "yes" &&
								category === "2" &&
								powerLine === "air" &&
								tpRtp === "no" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) { 
			this.result((((536.6*x3)+(air*x3))*2)*1.2, ((15415.33 + (air*lBuilding))*2)*1.2);
		} else if ( location === "city" && //Пункт 1.1.3.2 БЕЗ строительсва ТП/РТП. Для 2-ой кат. над. Кабельной линии
								building === "yes" &&
								category === "2" &&
								powerLine === "cabel" &&
								tpRtp === "no" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) { 
			this.result((((536.6*x3)+(cabel*x3))*2)*1.2, ((15415.33 + (cabel*lBuilding))*2)*1.2);
		} else if ( location === "city" && //Пункт 1.1.3.2 БЕЗ строительсва ТП/РТП. Для 2-ой кат. над. Воздушной и Кабельной линии
								building === "yes" &&
								category === "2" &&
								powerLine === "aircabel" &&
								tpRtp === "no" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) { 
			this.result(((536.6*x3)+((Number(air)+Number(cabel))*x3))*1.2, (15415.33 + ((Number(air)+Number(cabel))*lBuilding))*1.2);
		} else if ( location === "city" && //Город. 3-я кат. над. Воздушная ЛЭП. ТП
								building === "yes" &&
								category === "3" &&
								powerLine === "air" &&
								tpRtp === "tp" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) { 
			this.result(((536.6*x3)+(air*x3)+(tp*x3))*1.2, (15415.33 + (air*lBuilding)+(tp*x3))*1.2);
		} else if ( location === "city" && //Город. 3-я кат. над. Воздушная ЛЭП. РТП
								building === "yes" &&
								category === "3" &&
								powerLine === "air" &&
								tpRtp === "rtp" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) {  
			this.result(((536.6*x3)+(air*x3)+(rtp*x3))*1.2, (15415.33 + (air*lBuilding)+(rtp*x3))*1.2);
		} else if ( location === "city" && //Город. 3-я кат. над. Кабельная ЛЭП. ТП
								building === "yes" &&
								category === "3" &&
								powerLine === "cabel" &&
								tpRtp === "tp" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) {  
			this.result(((536.6*x3)+(cabel*x3)+(tp*x3))*1.2, (15415.33 + (cabel*lBuilding)+(tp*x3))*1.2);
		} else if ( location === "city" && //Город. 3-я кат. над. Кабельная ЛЭП. РТП
								building === "yes" &&
								category === "3" &&
								powerLine === "cabel" &&
								tpRtp === "rtp" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) { 
			this.result(((536.6*x3)+(cabel*x3)+(rtp*x3))*1.2, (15415.33 + (cabel*lBuilding)+(rtp*x3))*1.2);
		} else if ( location === "city" && //Город. 2-я кат. над. Воздушная ЛЭП. ТП
								building === "yes" &&
								category === "2" &&
								powerLine === "air" &&
								tpRtp === "tp" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) { 
			this.result(((536.6*x3)+((air*x3)*2)+(tp*x3))*1.2, (15415.33 + ((air*lBuilding)*2)+(tp*x3))*1.2);
		} else if ( location === "city" && //Город. 2-я кат. над. Кабельная ЛЭП. ТП
								building === "yes" &&
								category === "2" &&
								powerLine === "cabel" &&
								tpRtp === "tp" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) { 
			this.result(((536.6*x3)+((cabel*x3)*2)+(tp*x3))*1.2, (15415.33 + ((cabel*lBuilding)*2)+(tp*x3))*1.2);
		} else if ( location === "city" && //Город. 2-я кат. над. Воздушная ЛЭП. РТП
								building === "yes" &&
								category === "2" &&
								powerLine === "air" &&
								tpRtp === "rtp" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) { 
			this.result(((536.6*x3)+((air*x3)*2)+(rtp*x3))*1.2, (15415.33 + ((air*lBuilding)*2)+(rtp*x3))*1.2);
		} else if ( location === "city" && //Город. 2-я кат. над. Кабельная ЛЭП. РТП
								building === "yes" &&
								category === "2" &&
								powerLine === "cabel" &&
								tpRtp === "rtp" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) { 
			this.result(((536.6*x3)+((cabel*x3)*2)+(rtp*x3))*1.2, (15415.33 + ((cabel*lBuilding)*2)+(rtp*x3))*1.2);
		} else if ( location === "city" && //Город. 2-я кат. над. Воздушная и Кабельная ЛЭП. ТП
								building === "yes" &&
								category === "2" &&
								powerLine === "aircabel" &&
								tpRtp === "tp" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) { 
			this.result(((536.6*x3)+((Number(air) + Number(cabel))*x3)+(tp*x3))*1.2, (15415.33 + ((Number(air) + Number(cabel))*lBuilding)+(tp*x3))*1.2);
		} else if ( location === "city" && //Город. 2-я кат. над. Воздушная и Кабельная ЛЭП. ТП
								building === "yes" &&
								category === "2" &&
								powerLine === "aircabel" &&
								tpRtp === "rtp" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) { 
			this.result(((536.6*x3)+((Number(air) + Number(cabel))*x3)+(rtp*x3))*1.2, (15415.33 + ((Number(air) + Number(cabel))*lBuilding)+(rtp*x3))*1.2);
		} else if ( location === "city" && //Город. 2-я кат. над. Воздушная ЛЭП. РТП + ТП
								building === "yes" &&
								category === "2" &&
								powerLine === "air" &&
								tpRtp === "rtptp" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) { 
			this.result(((536.6*x3)+((air*x3)*2)+((Number(tp) + Number(rtp))*x3))*1.2, (15415.33 + ((air*lBuilding)*2)+((Number(tp) + Number(rtp))*x3))*1.2);
		} else if ( location === "city" && //Город. 2-я кат. над. Кабельная ЛЭП. РТП + ТП
								building === "yes" &&
								category === "2" &&
								powerLine === "cabel" &&
								tpRtp === "rtptp" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) { 
			this.result(((536.6*x3)+((cabel*x3)*2)+((Number(tp) + Number(rtp))*x3))*1.2, (15415.33 + ((cabel*lBuilding)*2)+((Number(tp) + Number(rtp))*x3))*1.2);
		} else if ( location === "city" && //Город. 2-я кат. над. Воздушная и Кабельная ЛЭП. РТП + ТП
								building === "yes" &&
								category === "2" &&
								powerLine === "aircabel" &&
								tpRtp === "rtptp" &&
								(( x1 && x2 >= 151 && x2 <= 8900 && type === "old" ) || 
								( x3 >= 151 && x3 <= 8900 && type === "new" )) ) { 
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
				<div className="calc__content">
					<div className="calc__header">
						<h1 className="calc__title">Калькулятор стоимости технологического присоединения
						в Пензе и Пензенской области сетевой организацией ООО "СК"</h1>
						<p className="calc__p">
							Калькулятор стоимости ТП предназначен для онлайн-расчета ориентировочной стоимости
							технологического присоединения в соответствии с утвержденными ставками платы
							с учетом допущений по объему мероприятий сетевой организации
							по присоединению объекта.
						</p>
					</div>
					<Location handleInputChange={this.handleInputChange} />
					{this.state.location && <TypeJoining data={this.state}
																							 handleParamChange={this.handleParamChange} 
																							 handleInputChange={this.handleInputChange}
																							 handleWorkChange={this.handleWorkChange} 
																							 calcWorks={this.calcWorks}
																							 calcWorksTpTtp={this.calcWorksTpTtp}
																							 calcResult={this.calcResult} />}
				</div>
				<div className="calc__sidebar calc-sidebar">
					<div className="calc-sidebar__header">
						<div className="calc-sidebar__border">
							<h2 className="calc-sidebar__title"><span>Суммы с учетом НДС</span></h2>
							<p className="calc-sidebar__result">Итого по ставке {'\n'}
							за максимальную мощность {'\n'}
							(руб./кВт) <b>{this.state.resultMaxPower}</b>	</p>
							<p className="calc-sidebar__result">Итого {'\n'}
							по стандартизированной {'\n'}
							ставке (руб.) <b>{this.state.resultStandard}</b></p>
						</div>
						<button className="calc-sidebar__btn">Отправить заявку</button>
					</div>
					<p className="calc-sidebar__footer">
						Выполненный расчет является 
						ориентировочным, итоговая стоимость 
						технологического присоединения будет 
						определена сетевой организацией 
						в соответствии с утвержденными ставками 
						после подачи Вами заявки на ТП 
						при подготовке Договора об осуществлении 
						технологического присоединения.
					</p>
				</div>
			</div>
		);
	}
}

export default App;