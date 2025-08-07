export default function InputField({ id, value, labelText, type, onChange }) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id}
        onChange={(e) => onChange(id, e.target.value)}
        value={value}
        className="border-[1px]"
      ></input>
    </>
  );
}
