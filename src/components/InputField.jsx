export default function InputField({ id, value, labelText, type, onChange }) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id}
        onChange={(e) => onChange(id, e.target.value)}
        value={value}
        className="border-[0.05rem] mb-2 rounded shadow-md"
      ></input>
    </>
  );
}
