import { Realm, createRealmContext } from "@realm/react";
export const LeiteSchema = {
  name: "LeiteSchema",
  primaryKey: "_id",
  properties: {
    _id: "string",
    description: "string",
    precoL: "float",
    prodL: "float",
    createdAt: "date",
  },
};
export const getRealm = async () =>
  await Realm.open({
    path: "fazfin-app",
    schema: [LeiteSchema],
    schemaVersion: 4,
  });
const config = {
  schema: [LeiteSchema],
};
export default createRealmContext(config);
