import { useState, type ChangeEvent, type FormEvent } from "react";
import Modal from "./Modal";
import { createAppointment } from "../api/appointments";
import type { AppointmentPayload } from "../types";

type Errors = Partial<Record<keyof AppointmentPayload, string>>;

const empty: AppointmentPayload = { first_name: "", last_name: "", phone: "", email: "" };

function validate(v: AppointmentPayload): Errors {
  const e: Errors = {};
  if (!v.first_name.trim()) e.first_name = "Вкажіть ім'я";
  if (!v.last_name.trim()) e.last_name = "Вкажіть прізвище";
  if (!/^\+?[0-9\s()-]{9,18}$/.test(v.phone.trim())) e.phone = "Введіть коректний номер телефону";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Введіть коректну пошту";
  return e;
}

export default function AppointmentModal({ onClose }: { onClose: () => void }) {
  const [values, setValues] = useState<AppointmentPayload>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [serverError, setServerError] = useState("");

  const set = (k: keyof AppointmentPayload) => (e: ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    setServerError("");
    try {
      await createAppointment(values);
      setStatus("done");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Помилка відправки");
      setStatus("idle");
    }
  }

  if (status === "done") {
    return (
      <Modal title="Заявку надіслано" onClose={onClose}>
        <p>Дякуємо! Ми зателефонуємо вам найближчим часом, щоб підтвердити запис.</p>
        <button className="btn btn--primary" onClick={onClose}>Закрити</button>
      </Modal>
    );
  }

  const field = (k: keyof AppointmentPayload, label: string, type = "text", autoComplete?: string) => (
    <label className="field">
      <span>{label}</span>
      <input type={type} value={values[k]} onChange={set(k)} autoComplete={autoComplete} aria-invalid={!!errors[k]} />
      {errors[k] && <small className="field__error">{errors[k]}</small>}
    </label>
  );

  return (
    <Modal title="Запис на прийом" onClose={onClose}>
      <form onSubmit={onSubmit} noValidate>
        {field("first_name", "Ім'я", "text", "given-name")}
        {field("last_name", "Прізвище", "text", "family-name")}
        {field("phone", "Номер телефону", "tel", "tel")}
        {field("email", "Електронна пошта", "email", "email")}
        {serverError && <p className="form-error">{serverError}</p>}
        <button className="btn btn--primary btn--block" disabled={status === "sending"}>
          {status === "sending" ? "Надсилаємо…" : "Записатись"}
        </button>
      </form>
    </Modal>
  );
}
