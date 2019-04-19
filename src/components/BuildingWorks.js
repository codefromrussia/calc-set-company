import React from 'react'
import { Works } from'./Works'
import { BuildingTpRtp } from'./BuildingTpRtp'

//Работы 
class BuildingWorks extends React.Component {
	render() {
		const {data, handleInputChange, handleWorkChange, calcWorksTpTtp, calcResult} = this.props;
		const {air, cabel, works} = data;

		return (
			<div>
				<Works works={works}
							 handleWorkChange={handleWorkChange}
							 calcResult={calcResult} />
				{( air > 0 || cabel > 0 ) && <BuildingTpRtp data={data} 
																										handleInputChange={handleInputChange}
																										handleWorkChange={handleWorkChange}
																										calcWorksTpTtp={calcWorksTpTtp}
																										calcResult={calcResult}/>}
			</div>
		)
	}
}

export { BuildingWorks }