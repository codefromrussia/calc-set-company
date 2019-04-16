import React from 'react'
import { CityBuildingWorks } from'./CityBuildingWorks'

//Строительство для города
class CityBuilding extends React.Component {
	renderAirCabel() {
		const {handleInputChange, calcWorks} = this.props;
		return (
			<label>
				<input
					id="powerLine"
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
				Кабельная линия + Воздушная линия
			</label>
		)
	}

	render() {
		const {data, handleInputChange, calcWorks, calcWorksTpTtp, calcResult} = this.props;
		const {works, category} = data;

		return (
			<div>
				<input 
					id="lBuilding"
					type="number"
					onChange={
						(e) => {
							handleInputChange(e);
							setTimeout(() => {calcResult()},1);
						}
					}
				/>
				<p>Расстояние (по прямой) до ближайших электросетевых объектов, км
от границы Вашего земельного участка</p>

				<h2>Категория надежности:</h2>
				<label>
					<input
						id="category"
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
					2
				</label>
				<label>
					<input
						id="category"
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
					3
				</label>

				<h2>Уровень напряжения:</h2>
				<label>
					<input
						id="voltage"
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
					до 1кВ (НН)
				</label>
				<label>
					<input
						id="voltage"
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
					1-20кВ (СН2)
				</label>

				<h2>Линия электропередачи:</h2>

				<label>
					<input
						id="powerLine"
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
					Воздушная
				</label>
				<label>
					<input
						id="powerLine"
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
					Кабельная
				</label>
				{+category === 2 && this.renderAirCabel()}
				{works && <CityBuildingWorks data={data}
																		 handleInputChange={handleInputChange}
																		 calcWorksTpTtp={calcWorksTpTtp}
																		 calcResult={calcResult} />}
			</div>
		)
	}
}

export { CityBuilding }