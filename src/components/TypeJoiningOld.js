import React from 'react'
import { TypeJoiningOldThree } from'./TypeJoiningOldThree'
import { TypeJoiningOldOne } from'./TypeJoiningOldOne'

//Существующее соединение для города
class TypeJoiningOld extends React.Component {
	render() {
		const {data, handleParamChange, handleInputChange, calcWorks, calcWorksTpTtp, calcResult } = this.props;
		const {x2} = data;

		return (
			<div>
				<input
					id="x1"
					type="number"
					onChange={
						(e) => {
							handleParamChange(e);
							setTimeout(() => {calcResult()},1);
						}
					}
					min="0"
				/>
				<p>Ранее выбранная мощность, кВт</p>
				<input
					id="x2"
					type="number"
					onChange={
						(e) => {
							handleParamChange(e);
							setTimeout(() => {calcResult()},1);
						}
					}
					min="0"
					max="8900"
				/>
				<p>Требуемая Максимальная мощность, кВт</p>
				{x2 > 0 && x2 <= 15 && <TypeJoiningOldOne handleInputChange={handleInputChange}
																									calcResult={calcResult} />}
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