import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import AppointmentModal from "../components/AppointmentModal";

interface Ctx {
  openAppointment: () => void;
}

const AppointmentContext = createContext<Ctx | null>(null);

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openAppointment = useCallback(() => setOpen(true), []);
  const closeAppointment = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ openAppointment }), [openAppointment]);

  return (
    <AppointmentContext.Provider value={value}>
      {children}
      {open && <AppointmentModal onClose={closeAppointment} />}
    </AppointmentContext.Provider>
  );
}

export function useAppointment(): Ctx {
  const ctx = useContext(AppointmentContext);
  if (!ctx) throw new Error("useAppointment must be used inside AppointmentProvider");
  return ctx;
}
