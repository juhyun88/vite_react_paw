import { supabase } from '../lib/supabaseClient';
import type { Database } from '../types/supabase.types';

type Tables = Database['public']['Tables'];
type TableName = keyof Tables;

type Row<T extends TableName> = Tables[T]['Row'];
type Insert<T extends TableName> = Tables[T]['Insert'];
// type Update<T extends TableName> = Tables[T]['Update'];

// READ (select all rows from a table)
export const fetchData = async <T extends TableName>(table: T): Promise<Row<T>[]> => {
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .order('code', { ascending: true });

  if (error) {
    console.error(`Error fetching ${table}:`, error.message);
    return [];
  }

  return data as Row<T>[]; // 타입 강제 변환
};

// CREATE
export const insertData = async <T extends TableName>(table: T, payload: Insert<T>) => {
  const { data, error } = await supabase.from(table).insert(payload).select();

  if (error) {
    console.error(`Error inserting into ${table}:`, error.message);
    return null;
  }

  return data;
};

// // UPDATE
// export const updateData = async <T extends TableName>(
//   table: T,
//   idField: keyof Row<T>,
//   idValue: any,
//   payload: Update<T>
// ) => {
//   const { data, error } = await supabase
//     .from(table)
//     .update(payload)
//     .eq(idField as string, idValue)
//     .select();

//   if (error) {
//     console.error(`Error updating ${table}:`, error.message);
//     return null;
//   }

//   return data;
// };

// // DELETE
// export const deleteData = async <T extends TableName>(
//   table: T,
//   idField: keyof Row<T>,
//   idValue: any
// ) => {
//   const { error } = await supabase
//     .from(table)
//     .delete()
//     .eq(idField as string, idValue);

//   if (error) {
//     console.error(`Error deleting from ${table}:`, error.message);
//     return false;
//   }

//   return true;
// };
