import { useMemo, useState } from "react"
import { weddingData } from "../data/weddingData"

function RSVP() {
  const [senderName, setSenderName] = useState("")
  const [guestNames, setGuestNames] = useState("")
  const [attendance, setAttendance] = useState("Da, cu drag")
  const [recipient, setRecipient] = useState("groom")
  const [message, setMessage] = useState("")

  const recipientData = useMemo(() => {
    if (recipient === "bride") {
      return {
        name: weddingData.rsvp.brideName,
        phone: weddingData.rsvp.bridePhone
      }
    }

    return {
      name: weddingData.rsvp.groomName,
      phone: weddingData.rsvp.groomPhone
    }
  }, [recipient])

  function handleSend() {
    const finalMessage = `
Salut, ${recipientData.name}!

Confirmarea este trimisă de: ${senderName || "Nespecificat"}
Participare: ${attendance}
Persoane pentru care confirmăm: ${guestNames || "Nespecificat"}
Mesaj suplimentar: ${message || "—"}

Semnat,
${senderName || "Invitat"}
    `.trim()

    const whatsappUrl = `https://wa.me/${recipientData.phone}?text=${encodeURIComponent(finalMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="rsvp" className="section section--soft">
      <div className="container">
        <div className="section-heading fade-up">
          <p className="section-kicker">Confirmare</p>
          <h2>RSVP</h2>
          <p>{weddingData.rsvp.deadline}</p>
        </div>

        <div className="rsvp-card fade-up">
          <div className="form-grid">
            <div className="field">
              <label>Numele tău</label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Ex: Andrei Pop"
              />
            </div>

            <div className="field">
              <label>Prezență</label>
              <select value={attendance} onChange={(e) => setAttendance(e.target.value)}>
                <option>Da, cu drag</option>
                <option>Din păcate, nu</option>
              </select>
            </div>

            <div className="field field--full">
              <label>Numele persoanelor pentru care confirmați</label>
              <textarea
                rows="4"
                value={guestNames}
                onChange={(e) => setGuestNames(e.target.value)}
                placeholder="Ex: Andrei Pop, Maria Pop"
              />
            </div>

            <div className="field">
              <label>Trimite către</label>
              <select value={recipient} onChange={(e) => setRecipient(e.target.value)}>
                <option value="groom">Darius</option>
                <option value="bride">Iazmina</option>
              </select>
            </div>

            <div className="field field--full">
              <label>Mesaj suplimentar</label>
              <textarea
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Alergii, mențiuni, detalii..."
              />
            </div>
          </div>

          <div className="rsvp-actions">
            <button className="btn btn--dark" onClick={handleSend}>
              Trimite pe WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RSVP