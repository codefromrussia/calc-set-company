import React from 'react'
import { TypeJoiningOld } from'./TypeJoiningOld'
import { TypeJoiningNew } from'./TypeJoiningNew'


//Тип присоединения
class TypeJoining extends React.Component {
	render() {
		const {data, handleParamChange, handleInputChange, calcWorks, calcWorksTpTtp, calcResult } = this.props;
		
		return (
			<div>
				<h2 className="calc__title">Тип присоединения:</h2>
				<div className="calc__radio-wrap">
					<label className="calc-radio">
						<input
							id="type"
							className="calc-radio__input"
							name="type"
							type="radio"
							value="old"
							checked={data.checked}
							onChange={handleInputChange}
							/>
						<span className="calc-radio__box"></span>
						<span className="calc-radio__text">
							Существующее
						</span>
					</label>
					<label className="calc-radio">
						<input
							id="type"
							className="calc-radio__input"
							name="type"
							type="radio"
							value="new"
							checked={data.checked}
							onChange={handleInputChange} />
						<span className="calc-radio__box"></span>
						<span className="calc-radio__text">
							Новое
						</span>
					</label>
				</div>
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