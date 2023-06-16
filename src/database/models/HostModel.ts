import { Model, INTEGER } from 'sequelize';
import db from '.';
import PeriodModel from './PeriodModel';
import UserModel from './UserModel';
import PaymentModel from './PaymentModel';

class HostModel extends Model {
  declare id: number;
  declare periodId: number;
  declare userId: number;
  declare paymentId: number;
}

HostModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  periodId: {
    type: INTEGER,
    allowNull: false,
  },
  userId: {
    type: INTEGER,
    allowNull: false,
  },
  paymentId: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'host',
  timestamps: false,
  underscored: true,
});

HostModel.belongsTo(PeriodModel, { foreignKey: 'periodId', as: 'period' });
HostModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });
HostModel.belongsTo(PaymentModel, { foreignKey: 'paymentId', as: 'payment' });

export default HostModel;
