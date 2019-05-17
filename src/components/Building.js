import React from 'react'
import { BuildingWorks } from'./BuildingWorks'

//Строительство для города
class Building extends React.Component {
	renderAirCabel() {
		const {handleInputChange, calcWorks} = this.props;
		return (
			<label className="calc-radio">
				<input
					id="powerLine"
					className="calc-radio__input"
					name="power-line"
					type="radio"
					value="aircabel"
					onChange={
						(e) => {
							handleInputChange(e);
							setTimeout(() => {calcWorks()},1);
						}
					}
				/>
				<span className="calc-radio__box"></span>
				<span className="calc-radio__text">
					Кабельная линия + Воздушная линия
				</span>
			</label>
		)
	}

	render() {
		const {data, handleInputChange, handleWorkChange, calcWorks, calcWorksTpTtp, calcResult} = this.props;
		const {lBuilding, works, category} = data;

		const renderNoWorks = () => {
			return (
				<h2 className="calc__title">Для выполнения данного вида работ необходимо утвердить ставку платы в Управлении по регулированию тарифов и энергосбережения Пензенской области</h2>
			);
		}

		return (
			<div>
				<div className="calc-number">
					<input 
						id="lBuilding"
						className="calc-number__input"
						type="number"
						value={lBuilding}
						onChange={
							(e) => {
								handleInputChange(e);
								setTimeout(() => {calcResult()},1);
							}
						}
					/>
					<p className="calc-number__text">Расстояние (по прямой) до ближайших электросетевых объектов, км {'\n'} 
	от границы Вашего земельного участка</p>
				</div>
				<div className="hr54"></div>
				
				<div className="calc__row">
					<div className="calc__col">
						<h2 className="calc__title">Категория надежности:</h2>
						<div className="calc__radio-wrap">
							<label className="calc-radio calc-radio-min">
								<input
									id="category"
									className="calc-radio__input"
									name="category"
									type="radio"
									value="2"
									onChange={
										(e) => {
											handleInputChange(e);
											setTimeout(() => {calcWorks()},1);
											setTimeout(() => {calcResult()},1);
										}
									}
								/>
								<span className="calc-radio__box"></span>
								<span className="calc-radio__text">
									2
								</span>
							</label>
							<label className="calc-radio calc-radio-min">
								<input
									id="category"
									className="calc-radio__input"
									name="category"
									type="radio"
									value="3"
									onChange={
										(e) => {
											handleInputChange(e);
											setTimeout(() => {calcWorks()},1);
											setTimeout(() => {calcResult()},1);
										}
									}
								/>
								<span className="calc-radio__box"></span>
								<span className="calc-radio__text">
									3
								</span>
							</label>
						</div>
					</div>
					<div className="calc__col">
						<h2 className="calc__title">Уровень напряжения:</h2>
						<div className="calc__radio-wrap">
							<label className="calc-radio">
								<input
									id="voltage"
									className="calc-radio__input"
									name="voltage"
									type="radio"
									value="до 1"
									onChange={
										(e) => {
											handleInputChange(e);
											setTimeout(() => {calcWorks()},1);
										}
									}
								/>
								<span className="calc-radio__box"></span>
								<span className="calc-radio__text">
									до 1кВ (НН)
								</span>
							</label>
							<label className="calc-radio">
								<input
									id="voltage"
									className="calc-radio__input"
									name="voltage"
									type="radio"
									value="до 20"
									onChange={
										(e) => {
											handleInputChange(e);
											setTimeout(() => {calcWorks()},1);
										}
									}
								/>
								<span className="calc-radio__box"></span>
								<span className="calc-radio__text">
									1-20кВ (СН2)
								</span>
							</label>
						</div>
					</div>
				</div>
				<div className="hr18"></div>
				<h2 className="calc__title">Линия электропередачи:</h2>
				<div className="calc__radio-wrap">
					<label className="calc-radio">
						<input
							id="powerLine"
							className="calc-radio__input"
							name="power-line"
							type="radio"
							value="air"
							onChange={
								(e) => {
									handleInputChange(e);
									setTimeout(() => {calcWorks()},1);
								}
							}
						/>
						<span className="calc-radio__box"></span>
						<span className="calc-radio__text">
							Воздушная
						</span>
					</label>
					<label className="calc-radio">
						<input
							id="powerLine"
							className="calc-radio__input"
							name="power-line"
							type="radio"
							value="cabel"
							onChange={
								(e) => {
									handleInputChange(e);
									setTimeout(() => {calcWorks()},1);
								}
							}
						/>
						<span className="calc-radio__box"></span>
						<span className="calc-radio__text">
							Кабельная
						</span>
					</label>
					{+category === 2 && this.renderAirCabel()}
				</div>
				<div className="hr18"></div>
				{works === null && renderNoWorks()}
				{works && <BuildingWorks data={data}
																 handleInputChange={handleInputChange}
																 handleWorkChange={handleWorkChange}
																 calcWorksTpTtp={calcWorksTpTtp}
																 calcResult={calcResult} />}
			</div>
		)
	}
}

export { Building }