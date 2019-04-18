import React from 'react'

// Существующее соединение Вариант 1
class TypeJoiningOldOne extends React.Component {
	render() {
		const { data, handleInputChange, calcResult } = this.props;
		const { l } = data;

		return (
			<div className="calc-number">
				<input
					id="l"
					className="calc-number__input"
					type="number"
					min="0"
					value={l}
					onChange={
						(e) => {
							handleInputChange(e);
							setTimeout(() => {calcResult()},1);
						}
					}
					step="0.1"
				/>
				<p className="calc-number__text">Расстояние (по прямой) до ближайших электросетевых объектов, км {'\n'}
от границы Вашего земельного участка</p>
			</div>
		)
	}
}

export { TypeJoiningOldOne }