export default function Section({ children, sectionName }) {
  return (
    <>
      <fieldset>
        <legend>{sectionName}</legend>
      </fieldset>
    </>
  );
}
