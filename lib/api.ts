import axios from "axios";
import type { CreateNoteData, Note, NoteTag } from "../types/note";
// import toast from "react-hot-toast";

axios.defaults.baseURL = "https://notehub-public.goit.study/api";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`;

console.log("TOKEN:", process.env.NEXT_PUBLIC_NOTEHUB_TOKEN);

interface FetchNotesParams {
  search?: string;
  tag?: NoteTag;
  page?: number;
  perPage?: number;
  sortBy?: "created" | "updated";
}

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  params: FetchNotesParams = {}
): Promise<FetchNotesResponse> => {
  const response = await axios.get<FetchNotesResponse>("/notes", {
    params,
  });

  return response.data;
};

export const createNote = async (noteData: CreateNoteData): Promise<Note> => {
  const response = await axios.post<Note>("/notes", noteData);
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await axios.delete(`/notes/${id}`);
  return response.data;
};
