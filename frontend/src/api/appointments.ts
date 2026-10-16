import type { AppointmentPayload } from "../types";

const BASE = import.meta.env.VITE_API_URL ?? "";

export async function createAppointment(data: AppointmentPayload): Promise<void> {
  const res = await fetch(`${BASE}/api/appointments/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Не вдалося надіслати заявку. Спробуйте ще раз або зателефонуйте нам.");
  }
}
