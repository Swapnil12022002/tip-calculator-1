import Service from "../Service";

export default function FriendService({ service, onServiceChange }) {
  return (
    <Service service={service} onServiceChange={onServiceChange}>
      How did your friend like the service?
    </Service>
  );
}
