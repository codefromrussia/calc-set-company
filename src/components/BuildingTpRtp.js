import React from 'react'
import { Works } from'./Works'

class BuildingTpRtp extends React.Component {
	renderRtpTp() {
		const {handleInputChange, calcWorksTpTtp, calcResult} = this.props;
		return (
			<label className="calc-radio calc-radio-min">
				<input
					id="tpRtp"
					className="calc-radio__input"
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
				<span className="calc-radio__box"></span>
				<span className="calc-radio__text">
					РТП+ТП
				</span>
			</label>
		)
	}

	render() {
		const {data, handleInputChange, handleWorkChange, calcWorksTpTtp, calcResult} = this.props;
		const {tpRtp, worksTpRtp, category} = data;

		return (
			<div>
				<div className="hr18"></div>
				<h2 className="calc__title">Требуется ли Вам строительство ТП/РТП</h2>
				<div className="calc__radio-wrap">
					<label className="calc-radio calc-radio-min">
						<input
							id="tpRtp"
							className="calc-radio__input"
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
						<span className="calc-radio__box"></span>
						<span className="calc-radio__text">
							Нет
						</span>
					</label>
					<label className="calc-radio calc-radio-min">
						<input
							id="tpRtp"
							className="calc-radio__input"
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
						<span className="calc-radio__box"></span>
						<span className="calc-radio__text">
							ТП
						</span>
					</label>
					<label className="calc-radio calc-radio-min">
						<input
							id="tpRtp"
							className="calc-radio__input"
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
						<span className="calc-radio__box"></span>
						<span className="calc-radio__text">
							РТП
						</span>
					</label>
					{+category === 2 && this.renderRtpTp()}
				</div>
				<div className="hr18"></div>
				{worksTpRtp && tpRtp !== 'no' && tpRtp !== 'rtp' && <Works works={worksTpRtp}
																								handleWorkChange={handleWorkChange}
																								calcResult={calcResult} />}
			</div>
		)
	}
}

export { BuildingTpRtp }