import React from 'react'
import { Works } from'./Works'

class BuildingTpRtp extends React.Component {
	renderRtpTp() {
		const {handleInputChange, calcWorksTpTtp, calcResult} = this.props;
		return (
			<label>
				<input
					id="tpRtp"
					name="tprtp"
					type="radio"
					value="rtptp"
					onChange={
						(e) => {
							handleInputChange(e);
							setTimeout(() => {calcWorksTpTtp()},1);
							setTimeout(() => {calcResult()},1);
						}
					}
				/>
				РТП+ТП
			</label>
		)
	}

	render() {
		const {data, handleInputChange, calcWorksTpTtp, calcResult} = this.props;
		const {tpRtp, worksTpRtp, category} = data;

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
								setTimeout(() => {calcResult()},1);
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
								setTimeout(() => {calcResult()},1);
								setTimeout(() => {calcWorksTpTtp()},1);
							}
						}
					/>
					РТП
				</label>
				{+category === 2 && this.renderRtpTp()}
				{worksTpRtp && tpRtp !== 'no' && <Works works={worksTpRtp}
																								handleInputChange={handleInputChange}
																								calcResult={calcResult} />}
			</div>
		)
	}
}

export { BuildingTpRtp }