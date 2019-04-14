import React from 'react'
import { CityTypeJoiningNew } from'./CityTypeJoiningNew'
import { CityTypeJoiningOld } from'./CityTypeJoiningOld'


//Тип присоединения для Города
class CityTypeJoining extends React.Component {
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
				{ data.type === 'old' && <CityTypeJoiningOld data={data}
																										 handleParamChange={handleParamChange} 
																										 handleInputChange={handleInputChange}
																										 calcWorks={calcWorks}
																										 calcWorksTpTtp={calcWorksTpTtp}
																										 calcResult={calcResult} /> }
				{ data.type === 'new' && <CityTypeJoiningNew /> }
			</div>
		)
	}
}

export { CityTypeJoining }