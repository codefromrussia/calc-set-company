import React from 'react'
import { Building } from'./Building'

// Существующее соединение Вариант 3
class TypeJoiningOldThree extends React.Component {
	render() {
		const {data, handleInputChange, handleWorkChange, calcWorks, calcWorksTpTtp, calcResult} = this.props;
		const {building} = data;

		return (
			<div>
				<h2 className="calc__title">Требуется ли вам строительство?</h2>
				<div className="calc__radio-wrap">
					<label className="calc-radio calc-radio-min">
						<input
							id="building"
							className="calc-radio__input"
							name="building"
							type="radio"
							value="yes"
							onChange={handleInputChange}
						/>
						<span className="calc-radio__box"></span>
						<span className="calc-radio__text">
							Да
						</span>
					</label>
					<label className="calc-radio calc-radio-min">
						<input
							id="building"
							className="calc-radio__input"
							name="building"
							type="radio"
							value="no"
							onChange={
								(e) => {
									handleInputChange(e);
									setTimeout(() => {calcResult()},1);
								}
							} />
						<span className="calc-radio__box"></span>
						<span className="calc-radio__text">
							Нет
						</span>
					</label>
				</div>
				{building === 'yes' && <Building data={data}
																				 handleInputChange={handleInputChange}
																				 handleWorkChange={handleWorkChange}
																				 calcWorks={calcWorks}
																				 calcWorksTpTtp={calcWorksTpTtp}
																				 calcResult={calcResult} />}
			</div>
		)
	}
}

export { TypeJoiningOldThree }