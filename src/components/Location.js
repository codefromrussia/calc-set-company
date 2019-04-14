import React from 'react'

//Территориальное расположение
class Location extends React.Component {
	render() {
		return (
			<div className="calc-location">
				<h2 className="calc-location__title">Территориальное расположение:</h2>
				<label>
					<input
						id="location"
						name="location"
						type="radio"
						value="city"
						onChange={this.props.handleInputChange}
					/>
					Город, пгт.
				</label>
				<label>
					<input
						id="location"
						name="location"
						type="radio"
						value="village"
						onChange={this.props.handleInputChange} />
					Сельская местность
				</label>
			</div>
		)
	}
}

export { Location }
