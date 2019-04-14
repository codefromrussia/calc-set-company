import React from 'react'
import { Works } from'./Works'

class BuildingTpRtp extends React.Component {
	render() {
		const {data, handleInputChange, calcWorksTpTtp, calcResult} = this.props;
		const {tpRtp, worksTpRtp} = data;

		return (
			<div>
				<h2>Требуется ли Вам строительство ТП/РТП</h2>
				<label>
					<input
						id="tpRtp"
						name="tprtp"
						type="radio"
						value="no"
						onChange={
							(e) => {
								handleInputChange(e);
								setTimeout(() => {calcResult()},1);
								setTimeout(() => {calcWorksTpTtp()},1);
							}
						}
					/>
					Нет
				</label>
				<label>
					<input
						id="tpRtp"
						name="tprtp"
						type="radio"
						value="tp"
						onChange={
							(e) => {
								handleInputChange(e);
								setTimeout(() => {calcWorksTpTtp()},1);
							}
						}
					/>
					ТП
				</label>
				<label>
					<input
						id="tpRtp"
						name="tprtp"
						type="radio"
						value="rtp"
						onChange={
							(e) => {
								handleInputChange(e);
								setTimeout(() => {calcWorksTpTtp()},1);
							}
						}
					/>
					РТП
				</label>
				{worksTpRtp && tpRtp !== 'no' && <Works works={worksTpRtp}
																								handleInputChange={handleInputChange} />}
			</div>
		)
	}
}

export { BuildingTpRtp }