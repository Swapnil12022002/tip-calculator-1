import Service from "../Service";

export default function MyService({ service, onServiceChange }) {
  return (
    <Service service={service} onServiceChange={onServiceChange}>
      How did you like the service?
    </Service>
  );
}
