export default function Service({ service, onServiceChange, children }) {
  return (
    <div className="service">
      <label>{children}</label>
      <select value={service} onChange={(e) => onServiceChange(e.target.value)}>
        <option value="dissatisfied">Dissatisfied (0%)</option>
        <option value="okay">It was okay (5%)</option>
        <option value="good">It was good (10%)</option>
        <option value="amazing">It was amazing (20%)</option>
      </select>
    </div>
  );
}
