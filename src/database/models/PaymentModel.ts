import { Model, INTEGER, NUMBER, STRING } from 'sequelize';
import db from '.';

class PaymentModel extends Model {
  declare id: number;
  declare method: string;
  declare value: number;
}

PaymentModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  method: {
    type: STRING,
    allowNull: false,
  },
  value: {
    type: NUMBER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'payments',
  timestamps: false,
  underscored: true,
});

export default PaymentModel;
