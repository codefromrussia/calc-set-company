import React from 'react'
import { Works } from'./Works'
import { BuildingTpRtp } from'./BuildingTpRtp'

//Постройка для города 3-ей категории надёжности
class CityBuildingThreeCategory extends React.Component {
	render() {
		const {data, handleInputChange, calcWorksTpTtp, calcResult} = this.props;
		const {worksPrice, works} = data;

		return (
			<div>
				<Works works={works}
							 handleInputChange={handleInputChange}
							 calcResult={calcResult} />
				{worksPrice > 0 && <BuildingTpRtp data={data} 
																					handleInputChange={handleInputChange}
																					calcWorksTpTtp={calcWorksTpTtp}
																					calcResult={calcResult}/>}
			</div>
		)
	}
}

export { CityBuildingThreeCategory }