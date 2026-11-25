import html
import json
import logging
import os
import threading
import urllib.request

logger = logging.getLogger(__name__)


def _send(text: str) -> None:
    token = os.getenv("TELEGRAM_BOT_TOKEN")
    chat_ids = [c.strip() for c in os.getenv("TELEGRAM_CHAT_ID", "").split(",") if c.strip()]
    if not token or not chat_ids:
        return  # не налаштовано, просто пропускаємо

    for chat_id in chat_ids:
        try:
            req = urllib.request.Request(
                f"https://api.telegram.org/bot{token}/sendMessage",
                data=json.dumps(
                    {"chat_id": chat_id, "text": text, "parse_mode": "HTML"}
                ).encode(),
                headers={"Content-Type": "application/json"},
            )
            urllib.request.urlopen(req, timeout=5)
        except Exception:
            logger.exception("Telegram notification failed")


def notify_new_appointment(appointment) -> None:
    e = html.escape
    text = (
        "🦷 <b>Нова заявка на прийом</b>\n\n"
        f"👤 {e(appointment.first_name)} {e(appointment.last_name)}\n"
        f"📞 {e(appointment.phone)}\n"
        f"✉️ {e(appointment.email)}"
    )
    # окремий потік, щоб пацієнт не чекав відповіді Telegram
    threading.Thread(target=_send, args=(text,), daemon=True).start()