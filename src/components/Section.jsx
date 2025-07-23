export default function Section({ children, sectionName }) {
  return (
    <>
      <fieldset className="flex flex-col border-2 p-2">
        <legend>{sectionName}</legend>
        {children}
      </fieldset>
    </>
  );
}
