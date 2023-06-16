import { Model, INTEGER, STRING, DATE } from 'sequelize';
import SuiteModel from './SuiteModel';
import db from '.';

class PeriodModel extends Model {
  declare id: number;
  declare init: Date;
  declare end: Date;
  declare suiteId: number;
}

PeriodModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  init: {
    type: DATE,
    allowNull: false,
  },
  end: {
    type: DATE,
    allowNull: false,
  },
  suiteId: {
    type: STRING,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
}, {
  sequelize: db,
  modelName: 'periods',
  timestamps: false,
  underscored: true,
});

PeriodModel.belongsTo(SuiteModel, { foreignKey: 'suiteId', as: 'suite' });

export default PeriodModel;
