import { Sequelize } from 'sequelize'
import { DB_URL } from '../configs'
import { init as initContentModel } from './ContentModel'
export { ContentModel } from './ContentModel'

const sequelize = new Sequelize(DB_URL)

;(async () => {
  await initContentModel(sequelize)
})()
