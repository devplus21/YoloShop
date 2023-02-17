module.exports = function (sequelize, DataTypes) {
	const OrderHistory = sequelize.define('orderHistory', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		// If not neccesary, the remove totalprice
		totalPrice: {
			type: DataTypes.INTEGER,
		},
	})

	return OrderHistory
}
