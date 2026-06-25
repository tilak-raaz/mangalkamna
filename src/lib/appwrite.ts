import { Client, Databases, Storage, Account } from "appwrite";

const client = new Client();

const appwriteEndpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "";
const appwriteProjectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "";
const appwriteProjectName = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_NAME || "";

export const appwriteConfig = {
  endpoint: appwriteEndpoint,
  projectId: appwriteProjectId,
  projectName: appwriteProjectName,
};

client.setEndpoint(appwriteEndpoint).setProject(appwriteProjectId);

export const databases = new Databases(client);
export const storage = new Storage(client);
export const account = new Account(client);

export default client;
