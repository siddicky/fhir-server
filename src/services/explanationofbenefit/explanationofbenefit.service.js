// Autogenerated by generate_services.py. Do not edit.
const base_service = require('../base/base.service');

const resourceType = 'ExplanationOfBenefit';

module.exports.search = async (args, { req, res }) =>
  await base_service.search(args, { req, res }, resourceType);

module.exports.searchStreaming = async (args, { req, res }) =>
  await base_service.searchStreaming(args, { req, res }, resourceType);

module.exports.searchById = async (args, { req, res }) =>
  await base_service.searchById(args, { req, res }, resourceType);

module.exports.create = async (args, { req, res }) =>
  await base_service.create(args, { req, res }, resourceType);

module.exports.update = async (args, { req, res }) =>
  await base_service.update(args, { req, res }, resourceType);

module.exports.merge = async (args, { req, res }) =>
  await base_service.merge(args, { req, res }, resourceType);

module.exports.remove = async (args, { req, res }) =>
  await base_service.remove(args, { req, res }, resourceType);

module.exports.searchByVersionId = async (args, { req, res }) =>
  await base_service.search(args, { req, res }, resourceType);

module.exports.everything = async (args, { req, res }) =>
  await base_service.everything(args, { req, res }, resourceType);

module.exports.history = async (args, { req, res }) =>
  await base_service.history(args, { req, res }, resourceType);

module.exports.historyById = async (args, { req, res }) =>
  await base_service.historyById(args, { req, res }, resourceType);

module.exports.patch = async (args, { req, res }) =>
  await base_service.patch(args, { req, res }, resourceType);

module.exports.validate = async (args, { req, res }) =>
  await base_service.validate(args, { req, res }, resourceType);

module.exports.graph = async (args, { req, res }) =>
  await base_service.graph(args, { req, res }, resourceType);

module.exports.expand = async (args, { req, res }) =>
  await base_service.expand(args, { req, res }, resourceType);


