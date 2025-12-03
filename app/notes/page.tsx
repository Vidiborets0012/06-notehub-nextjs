import { fetchNotes } from "@/lib/api";

export default async function NotesPage() {
  let notes;

  try {
    notes = await fetchNotes();
  } catch (error: any) {
    console.error("FETCH ERROR:", error?.response?.data || error);
    return <pre>{JSON.stringify(error?.response?.data || error, null, 2)}</pre>;
  }

  return (
    <div>
      <h1>Test fetchNotes</h1>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </div>
  );
}
