import { DebounceInput } from "react-debounce-input";

export default function SearchBar() {
  return (
    <DebounceInput
      minLength={2}
      debounceTimeout={300}
      onChange={(e) => console.log(e.target.value)}
      placeholder="Pesquise por disciplina"
    />
  );
}
