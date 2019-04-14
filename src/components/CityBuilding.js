import React from 'react'
import { CabelLineThreeCategory } from'./CabelLineThreeCategory'
import { AirLineThreeCategory } from'./AirLineThreeCategory'

//Строительство для города
class CityBuilding extends React.Component {
	render() {
		const {data, handleInputChange, calcWorks, calcWorksTpTtp, calcResult} = this.props;
		const {works, category, powerLine} = data;

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
				{works && +category === 3 && powerLine === 'air' && <AirLineThreeCategory data={data}
																																									handleInputChange={handleInputChange}
																																									calcWorksTpTtp={calcWorksTpTtp}
																																									calcResult={calcResult} />}
				{works && +category === 3 && powerLine === 'cabel' && <CabelLineThreeCategory />}
			</div>
		)
	}
}

export { CityBuilding }