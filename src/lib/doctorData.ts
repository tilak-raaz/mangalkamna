import "server-only";

import { ID } from "appwrite";
import { getServerDatabases } from "@/lib/appwriteServer";
import { doctorsData, type Doctor as PublicDoctor } from "@/data/doctorsData";

const appwriteDatabaseId = process.env.APPWRITE_DATABASE_ID || "";
const appwriteDoctorsCollectionId =
  process.env.APPWRITE_DOCTORS_COLLECTION_ID || "doctors";

interface AppwriteDoctorDocument {
  $id: string;
  $createdAt: string;
  name: string;
  speciality: string;
  doctorImage: string;
  experience: string;
  description: string;
}

export interface DoctorRecord {
  id: string;
  name: string;
  speciality: string;
  doctorImage: string;
  experience: string;
  description: string;
  createdAt: string;
}

function slugifyDoctorName(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseDoctorExperience(experience: string) {
  const numericExperience = Number.parseInt(experience, 10);
  return Number.isFinite(numericExperience) ? numericExperience : 0;
}

function mapToPublicDoctor(document: AppwriteDoctorDocument): PublicDoctor {
  return {
    id: document.$id,
    slug: slugifyDoctorName(document.name),
    name: document.name,
    photo: document.doctorImage,
    designation: document.speciality,
    specialization: document.speciality,
    qualifications: "",
    experience: parseDoctorExperience(document.experience),
    languages: [],
    opdSchedule: "",
    opdDays: "",
    opdTimings: "",
    isAvailableToday: false,
    specialInterests: [],
    publications: document.description,
    memberships: "",
    reviews: [],
    description: document.description,
  };
}

function mapStaticDoctorToPublicDoctor(doctor: PublicDoctor): PublicDoctor {
  return {
    ...doctor,
    slug: doctor.slug || slugifyDoctorName(doctor.name),
    languages: doctor.languages || [],
    specialInterests: doctor.specialInterests || [],
    reviews: doctor.reviews || [],
  };
}

function assertDoctorConfig() {
  if (!appwriteDatabaseId) {
    throw new Error(
      "Missing APPWRITE_DATABASE_ID. Use the database ID from Appwrite console, not the database name.",
    );
  }

  if (!appwriteDoctorsCollectionId) {
    throw new Error(
      "Missing APPWRITE_DOCTORS_COLLECTION_ID. Set it to the doctors table/collection ID.",
    );
  }
}

function mapDoctorDocument(document: AppwriteDoctorDocument): DoctorRecord {
  return {
    id: document.$id,
    name: document.name,
    speciality: document.speciality,
    doctorImage: document.doctorImage,
    experience: document.experience,
    description: document.description,
    createdAt: document.$createdAt,
  };
}

export async function listDoctors() {
  assertDoctorConfig();
  const databases = getServerDatabases();

  const response = await databases.listDocuments(
    appwriteDatabaseId,
    appwriteDoctorsCollectionId,
  );

  return response.documents.map((document) =>
    mapDoctorDocument(document as unknown as AppwriteDoctorDocument),
  );
}

export async function listPublicDoctors() {
  try {
    const doctors = await listDoctors();

    return doctors.map((doctor) =>
      mapToPublicDoctor({
        $id: doctor.id,
        $createdAt: doctor.createdAt,
        name: doctor.name,
        speciality: doctor.speciality,
        doctorImage: doctor.doctorImage,
        experience: doctor.experience,
        description: doctor.description,
      }),
    );
  } catch {
    return doctorsData.map((doctor) => mapStaticDoctorToPublicDoctor(doctor));
  }
}

export async function getPublicDoctorBySlug(slug: string) {
  const doctors = await listPublicDoctors();
  return doctors.find((doctor) => doctor.slug === slug);
}

export async function createDoctor(
  input: Omit<DoctorRecord, "id" | "createdAt">,
) {
  assertDoctorConfig();
  const databases = getServerDatabases();

  const response = await databases.createDocument(
    appwriteDatabaseId,
    appwriteDoctorsCollectionId,
    ID.unique(),
    {
      name: input.name,
      speciality: input.speciality,
      doctorImage: input.doctorImage,
      experience: input.experience,
      description: input.description,
    },
  );

  return mapDoctorDocument(response as unknown as AppwriteDoctorDocument);
}

export async function updateDoctor(
  id: string,
  input: Omit<DoctorRecord, "id" | "createdAt">,
) {
  assertDoctorConfig();
  const databases = getServerDatabases();

  const response = await databases.updateDocument(
    appwriteDatabaseId,
    appwriteDoctorsCollectionId,
    id,
    {
      name: input.name,
      speciality: input.speciality,
      doctorImage: input.doctorImage,
      experience: input.experience,
      description: input.description,
    },
  );

  return mapDoctorDocument(response as unknown as AppwriteDoctorDocument);
}

export async function deleteDoctor(id: string) {
  assertDoctorConfig();
  const databases = getServerDatabases();

  await databases.deleteDocument(
    appwriteDatabaseId,
    appwriteDoctorsCollectionId,
    id,
  );
}
