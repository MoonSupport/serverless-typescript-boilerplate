import { Sequelize, Model, DataTypes } from 'sequelize'

export class ContentModel extends Model {
  public id: number
}

export function init(sequelize: Sequelize) {
  ContentModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      sequelize,
      tableName: 'content_content',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  )
}

export function associate() {}
