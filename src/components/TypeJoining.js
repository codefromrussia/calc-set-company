import React from 'react'
import { TypeJoiningOld } from'./TypeJoiningOld'
import { TypeJoiningNew } from'./TypeJoiningNew'


//Тип присоединения
class TypeJoining extends React.Component {
	render() {
		const {data, handleParamChange, handleInputChange, calcWorks, calcWorksTpTtp, calcResult } = this.props;
		
		return (
			<div className="calc-type-joining">
				<h2 className="calc-type-joining__title">Тип присоединения:</h2>
				<label>
					<input
						id="type"
						name="type-joining"
						type="radio"
						value="old"
						onChange={handleInputChange}
						/>
					Существующее
				</label>
				<label>
					<input
						id="type"
						name="type-joining"
						type="radio"
						value="new"
						onChange={handleInputChange} />
					Новое
				</label>
				{ data.type === 'old' && <TypeJoiningOld data={data}
																								 handleParamChange={handleParamChange} 
																								 handleInputChange={handleInputChange}
																								 calcWorks={calcWorks}
																								 calcWorksTpTtp={calcWorksTpTtp}
																								 calcResult={calcResult} /> }
				{ data.type === 'new' && <TypeJoiningNew data={data}
																								 handleParamChange={handleParamChange} 
																								 handleInputChange={handleInputChange}
																								 calcWorks={calcWorks}
																								 calcWorksTpTtp={calcWorksTpTtp}
																								 calcResult={calcResult} /> }
			</div>
		)
	}
}

export { TypeJoining }