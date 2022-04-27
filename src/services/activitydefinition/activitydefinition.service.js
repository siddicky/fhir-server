// Autogenerated by generate_services.py. Do not edit.
const { COLLECTION } = require('../../constants');
const base_service = require('../base/base.service');

const resource_name = 'ActivityDefinition';
const collection_name = COLLECTION.ACTIVITYDEFINITION;

module.exports.search = async (args, { req, res }) =>
  await base_service.search(args, { req, res }, resource_name, collection_name);

module.exports.searchStreaming = async (args, { req, res }) =>
  await base_service.searchStreaming(args, { req, res }, resource_name, collection_name);

module.exports.searchById = async (args, { req, res }) =>
  await base_service.searchById(args, { req, res }, resource_name, collection_name);

module.exports.create = async (args, { req, res }) =>
  await base_service.create(args, { req, res }, resource_name, collection_name);

module.exports.update = async (args, { req, res }) =>
  await base_service.update(args, { req, res }, resource_name, collection_name);

module.exports.merge = async (args, { req, res }) =>
  await base_service.merge(args, { req, res }, resource_name, collection_name);

module.exports.remove = async (args, { req, res }) =>
  await base_service.remove(args, { req, res }, resource_name, collection_name);

module.exports.searchByVersionId = async (args, { req, res }) =>
  await base_service.search(args, { req, res }, resource_name, collection_name);

module.exports.everything = async (args, { req, res }) =>
  await base_service.everything(args, { req, res }, resource_name, collection_name);

module.exports.history = async (args, { req, res }) =>
  await base_service.history(args, { req, res }, resource_name, collection_name);

module.exports.historyById = async (args, { req, res }) =>
  await base_service.historyById(args, { req, res }, resource_name, collection_name);

module.exports.patch = async (args, { req, res }) =>
  await base_service.patch(args, { req, res }, resource_name, collection_name);

module.exports.validate = async (args, { req, res }) =>
  await base_service.validate(args, { req, res }, resource_name);

module.exports.graph = async (args, { req, res }) =>
  await base_service.graph(args, { req, res }, resource_name, collection_name);

module.exports.expand = async (args, { req, res }) =>
  await base_service.expand(args, { req, res }, resource_name, collection_name);


