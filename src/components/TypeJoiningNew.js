import React from 'react'
import { TypeJoiningOldThree } from'./TypeJoiningOldThree'
import { TypeJoiningOldOne } from'./TypeJoiningOldOne'

//Новое соединение для города
class TypeJoiningNew extends React.Component {
	render() {
		const {data, handleInputChange, calcWorks, calcWorksTpTtp, calcResult } = this.props;
		const {x3} = data;

		return (
			<div>
				<input
					id="x3"
					type="number"
					onChange={
						(e) => {
							handleInputChange(e);
							setTimeout(() => {calcResult()},1);
						}
					}
					min="0"
					max="8900"
				/>
				<p>Максимальная присоединяемая мощность, кВт</p>
				{x3 > 0 && x3 <= 15 && <TypeJoiningOldOne handleInputChange={handleInputChange}
																									calcResult={calcResult} />}
				{x3 >= 151 && x3 <= 8900 && <TypeJoiningOldThree data={data}
																												 handleInputChange={handleInputChange}
																												 calcWorks={calcWorks}
																												 calcWorksTpTtp={calcWorksTpTtp}
																												 calcResult={calcResult}/>}
			</div>
		)
	}
}

export { TypeJoiningNew }