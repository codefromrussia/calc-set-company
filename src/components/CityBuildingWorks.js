import React from 'react'
import { Works } from'./Works'
import { BuildingTpRtp } from'./BuildingTpRtp'

//Работы для города
class CityBuildingWorks extends React.Component {
	render() {
		const {data, handleInputChange, calcWorksTpTtp, calcResult} = this.props;
		const {air, cabel, works} = data;

		return (
			<div>
				<Works works={works}
							 handleInputChange={handleInputChange}
							 calcResult={calcResult} />
				{( air > 0 || cabel > 0 ) && <BuildingTpRtp data={data} 
																										handleInputChange={handleInputChange}
																										calcWorksTpTtp={calcWorksTpTtp}
																										calcResult={calcResult}/>}
			</div>
		)
	}
}

export { CityBuildingWorks }