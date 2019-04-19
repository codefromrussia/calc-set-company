import React from 'react'
import { TypeJoiningOldThree } from'./TypeJoiningOldThree'
import { TypeJoiningOldOne } from'./TypeJoiningOldOne'

//Новое соединение
class TypeJoiningNew extends React.Component {
	render() {
		const { data, handleInputChange, handleWorkChange, calcWorks, calcWorksTpTtp, calcResult } = this.props;
		const { x3 } = data;

		return (
			<div>
				<div className="calc-type-joining__number">
					<div className="calc-number">
						<input
							id="x3"
							className="calc-number__input"
							type="number"
							value={x3}
							onChange={
								(e) => {
									handleInputChange(e);
									setTimeout(() => {calcResult()},1);
								}
							}
							min="0"
							max="8900"
						/>
						<p className="calc-number__text">Максимальная присоединяемая {'\n'} мощность, кВт</p>
					</div>
					{x3 > 0 && x3 <= 15 && <TypeJoiningOldOne data={data}
																										handleInputChange={handleInputChange}
																										calcResult={calcResult} />}
				</div>
				{x3 >= 151 && x3 <= 8900 && <TypeJoiningOldThree data={data}
																												 handleInputChange={handleInputChange}
																												 handleWorkChange={handleWorkChange}
																												 calcWorks={calcWorks}
																												 calcWorksTpTtp={calcWorksTpTtp}
																												 calcResult={calcResult}/>}
			</div>
		)
	}
}

export { TypeJoiningNew }