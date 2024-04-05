import { DataTypes, Model, Sequelize } from "sequelize";

interface CartAttributes {
  itemscount: number;
}

module.exports = (sequelize: Sequelize) => {
  class Cart extends Model<CartAttributes> implements CartAttributes {
    public itemscount!: number;

    static associate(models: any) {
      Cart.belongsTo(models.User);
    }

    // Define other model setup here, like hooks and scopes
  }

  Cart.init(
    {
      itemscount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );

  return Cart;
};
