import React from 'react'

// Существующее соединение для города Вариант 1
class CityTypeJoiningOldOne extends React.Component {
	render() {
		const {handleInputChange, calcResult } = this.props;
		return (
			<div>
				<input
					id="l"
					type="number"
					min="0"
					onChange={
						(e) => {
							handleInputChange(e);
							setTimeout(() => {calcResult()},1);
						}
					}
					step="0.1"
				/>
				<p>Расстояние (по прямой) до ближайших электросетевых объектов, км
от границы Вашего земельного участка</p>
			</div>
		)
	}
}

export { CityTypeJoiningOldOne }