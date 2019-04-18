import React from 'react'
import { TypeJoiningOldThree } from'./TypeJoiningOldThree'
import { TypeJoiningOldOne } from'./TypeJoiningOldOne'

//Существующее соединение для города
class TypeJoiningOld extends React.Component {
	render() {
		const {data, handleParamChange, handleInputChange, calcWorks, calcWorksTpTtp, calcResult } = this.props;
		const {x1, x2} = data;

		return (
			<div>
				<div className="calc-type-joining__number">
					<div className="calc-number">
						<input
							id="x1"
							className="calc-number__input"
							type="number"
							value={x1}
							onChange={
								(e) => {
									handleParamChange(e);
									setTimeout(() => {calcResult()},1);
								}
							}
							min="0"
						/>
						<p className="calc-number__text">Ранее выбранная {'\n'} мощность, кВт</p>
						<input
							id="x2"
							className="calc-number__input"
							type="number"
							value={x2}
							onChange={
								(e) => {
									handleParamChange(e);
									setTimeout(() => {calcResult()},1);
								}
							}
							min="0"
							max="8900"
						/>
						<p className="calc-number__text">Требуемая Максимальная {'\n'} мощность, кВт</p>
					</div>
					{x2 > 0 && x2 <= 15 && <TypeJoiningOldOne data={data}
																										handleInputChange={handleInputChange}
																										calcResult={calcResult} />}
				</div>
				{x2 >= 151 && x2 <= 8900 && <TypeJoiningOldThree data={data}
																												 handleInputChange={handleInputChange}
																												 calcWorks={calcWorks}
																												 calcWorksTpTtp={calcWorksTpTtp}
																												 calcResult={calcResult}/>}
			</div>
		)
	}
}

export { TypeJoiningOld }