import { Model, INTEGER, NUMBER } from 'sequelize';
import db from '.';

class SuiteModel extends Model {
  declare id: number;
  declare name: number;
  declare value: number;
}

SuiteModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  name: {
    type: INTEGER,
    allowNull: false,
  },
  value: {
    type: NUMBER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'suites',
  timestamps: false,
  underscored: true,
});

export default SuiteModel;
