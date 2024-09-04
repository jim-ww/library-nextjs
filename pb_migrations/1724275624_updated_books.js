/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sa87c3yle9lh7gi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kvozi1vs",
    "name": "returnDate",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sa87c3yle9lh7gi")

  // remove
  collection.schema.removeField("kvozi1vs")

  return dao.saveCollection(collection)
})
