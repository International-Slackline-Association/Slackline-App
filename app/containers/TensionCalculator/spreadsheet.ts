const k = 'AIzaSyBF2ByiWqnfBG5hPbUOyl5hp' + '_' + 'ij87ExD1w';
// tslint:disable-next-line: max-line-length
const url = `https://sheets.googleapis.com/v4/spreadsheets/10fE6gHsAxGc_4p0Dr-1KgTKdB0Cxv_-oeWfonAdrfeE/values/Masterlist?key=${k}`;

interface SheetResponse {
  values: SheetItem[];
}

type SheetItem = string[];

export interface InstructorItem {
  id: string;
  name: string;
  firstname: string;
  level: string;
  valid: string;
}

let instructors: InstructorItem[];

export async function queryInstructor(query: string) {
  if (!instructors) {
    await loadInstructors();
  }
  let foundInstructor = queryInstructorById(query);
  if (!foundInstructor) {
    foundInstructor = queryInstructorByName(query);
  }
  return !foundInstructor ? null : foundInstructor;
}

function queryInstructorById(id: string) {
  const found = instructors.find(
    i => i.id.toLowerCase().trim() === id.toLowerCase().trim(),
  );
  return found;
}

function queryInstructorByName(name: string) {
  const found = instructors.find(
    i =>
      `${i.firstname.toLowerCase()} ${i.name.toLowerCase()}` ===
      name.toLowerCase().trim(),
  );
  return found;
}

async function loadInstructors() {
  const resp = await getSpreadsheetData();
  const items = parseSheetResponse(resp);
  instructors = items;
}

function parseSheetResponse(resp: SheetResponse): InstructorItem[] {
  const values = resp.values.slice(1); // skip columns
  const items: InstructorItem[] = [];
  for (const value of values) {
    items.push({
      id: value[0],
      name: value[1].trim(),
      firstname: value[2].trim(),
      level: value[6],
      valid: value[9],
    });
  }
  return items;
}

async function getSpreadsheetData(): Promise<SheetResponse> {
  const data = await fetch(url).then(response => response.json());
  return data;
}
