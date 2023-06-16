import { Model, INTEGER, STRING, BIGINT } from 'sequelize';
import db from '.';

class UserModel extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
  declare phone: number;
}

UserModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  phone: {
    type: BIGINT,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
  underscored: true,
});

export default UserModel;
