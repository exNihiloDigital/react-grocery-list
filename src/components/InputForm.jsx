import React from 'react';

function InputForm(){
	return(
		<div className="grocery-input-form">
			<form>
				<div className="form-input">
					<label>Item Input</label>
					<input type="text" name="item"/>
				</div>
				
				<div className="form-input" id="store-selector">
					<label htmlFor="store-select">Select Store</label>
					<select name="store-select" id="store-select">
						<option value="store-safeway">Safeway</option>
						<option value="store-walmart">Walmart</option>
						<option value="store-samsclub">Sam's Club</option>
					</select>
				</div>
				
				<div className="form-input" id="item-qty">
					<label>Qty</label>
					<input type="number" name="quantity"/>
				</div>

				<button type='submit'>Add Item</button>
			</form>
		</div>
	);
}

export default InputForm;