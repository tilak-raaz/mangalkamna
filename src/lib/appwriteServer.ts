import "server-only";

import { Client, Databases } from "appwrite";

const appwriteEndpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "";
const appwriteProjectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "";
const appwriteApiKey = process.env.APPWRITE_API_KEY || "";

export const appwriteServerConfig = {
  endpoint: appwriteEndpoint,
  projectId: appwriteProjectId,
  apiKey: appwriteApiKey,
};

function assertServerConfig() {
  if (!appwriteServerConfig.endpoint) {
    throw new Error("Missing NEXT_PUBLIC_APPWRITE_ENDPOINT");
  }

  if (!appwriteServerConfig.projectId) {
    throw new Error("Missing NEXT_PUBLIC_APPWRITE_PROJECT_ID");
  }

  if (!appwriteServerConfig.apiKey) {
    throw new Error("Missing APPWRITE_API_KEY");
  }
}

export function getServerDatabases() {
  assertServerConfig();

  const client = new Client()
    .setEndpoint(appwriteServerConfig.endpoint)
    .setProject(appwriteServerConfig.projectId)
    .setKey(appwriteServerConfig.apiKey);

  return new Databases(client);
}
