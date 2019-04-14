import React from 'react'
import { CityBuilding } from'./CityBuilding'

// Существующее соединение для города Вариант 3
class CityTypeJoiningOldThree extends React.Component {
	render() {
		const {data, handleInputChange, calcWorks, calcWorksTpTtp, calcResult} = this.props;
		const {building} = data;

		return (
			<div className="calc-building">
				<h2 className="calc-building__title">Требуется ли вам строительство?</h2>
				<label>
					<input
						id="building"
						name="building"
						type="radio"
						value="yes"
						onChange={handleInputChange}
					/>
					Да
				</label>
				<label>
					<input
						id="building"
						name="building"
						type="radio"
						value="no"
						onChange={
							(e) => {
								handleInputChange(e);
								setTimeout(() => {calcResult()},1);
							}
						} />
					Нет
				</label>
				{building === 'yes' && <CityBuilding data={data}
																						 handleInputChange={handleInputChange}
																						 calcWorks={calcWorks}
																						 calcWorksTpTtp={calcWorksTpTtp}
																						 calcResult={calcResult} />}
			</div>
		)
	}
}

export { CityTypeJoiningOldThree }