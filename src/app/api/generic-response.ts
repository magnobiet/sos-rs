export type GenericResponse<T> = {
  meta: Record<string, unknown>;
  data: T;
};
