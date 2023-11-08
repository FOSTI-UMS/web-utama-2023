import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { endpoints } from '@/constants/event-endpoints'

export default function Event() {
  const [successFetchEvent, setSuccessFetchEvent] = useState(false)
  const [eventMessage, setEventMessage] = useState("Memuat data event terakhir...")
  const [eventTitle, setEventTitle] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [eventTime, setEventTime] = useState("")
  const [eventPlace, setEventPlace] = useState("")
  const [eventPhamplet, setEventPhamplet] = useState("/shape/loading-phamplet.png")
  const [joinEventLink, setJoinEventLink] = useState("")

  useEffect(() => {
    renderLatestEvent()
  }, [])

  /**
   * Get the latest event data from official Fosti event API
   * @returns
   */
  async function getLatestEvent() {
    const response = await fetch(endpoints.getLatestEvent.url)
    const events = await response.json()

    if (events.length > 0) {
      return events[0]
    }

    return null
  }

  /**
   * Render the latest event data to the page
   */
  async function renderLatestEvent() {
    try {
      const latestEvent = await getLatestEvent()
      const latestEventDate = new Date(latestEvent.penutupan)

      setSuccessFetchEvent(true)
      setEventTitle(latestEvent.nama_event)
      setEventDescription(latestEvent.deskripsi)
      setEventDate(eventDateBuilder(latestEventDate))
      setEventTime(eventTimeBuilder(latestEventDate))
      setEventPlace(latestEvent.tempat)
      setEventPhamplet(endpoints.getPamphlet.url(latestEvent.pamflet))
      setJoinEventLink(endpoints.joinEvent.url(latestEvent.slug))
    } catch (e) {
      setEventMessage('Maaf, sepertinya kami tidak dapat memuat data event terakhir 😭')
    }
  }

  /**
   * Build date text for event
   * @param {Date} eventDate
   * @returns
   */
  function eventDateBuilder(eventDate) {
    const date = eventDate.getDate()
    const month = eventDate.getMonth() + 1
    const year = eventDate.getFullYear()

    return `${date}-${(month < 10) ? '0' + month : month}-${year}`
  }

  /**
   * Build hour time for event date
   * @param {Date} eventDate
   * @returns
   */
  function eventTimeBuilder(eventDate) {
    const hour = eventDate.getHours()
    const minutes = eventDate.getMinutes()
    return `${(hour < 10) ? '0' + hour : hour}.${(minutes < 10) ? '0' + minutes : minutes} WIB`
  }

  return (
    <div className="min-h-screen relative flex lg:flex-row justify-center items-center md:py-12 lg:px-12" id="event">
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-light.svg" alt="Bg" />
      <div className={successFetchEvent ? "hidden" : "block"}>
        <div className="text-[#3f4042] font-medium text-lg md:text-xl text-center">{eventMessage}</div>
      </div>
      <div className={successFetchEvent ? "block" : "hidden"}>
        <div className="flex-col-reverse lg:flex-row lg:min-h-screen relative container flex justify-center items-center text-white lg:px-12  py-8 sm:py-0">
          <div className="text-[#1E3259] lg:ps-10 px-4 pt-8 lg:pt-0 lg:w-1/2 w-screen lg:min-h-screen flex flex-col justify-center">
            <div className="font-bold text-2xl sm:text-4xl mb-2">Latest FOSTI Event</div>
            <div className="font-bold text-lg sm:text-xl mb-3 text-[#AB142A]">{eventTitle}</div>
            <div className="font-base text-base tracking-widest" style={{ whiteSpace: 'pre-wrap' }}>{eventDescription}</div>
            <table className="mt-2 mb-4">
              <tbody>
                <tr className="mb-2 mt-3">
                  <td className="flex w-max"><Image className="me-3" src="/shape/date.svg" width={20} height={20} alt="date" /> Tanggal</td>
                  <td className="w-max">&nbsp;:&nbsp;</td>
                  <td className="w-100">{eventDate}</td>
                </tr>
                <tr className="mb-2">
                  <td className="flex w-max"><Image className="me-3" src="/shape/time.svg" width={20} height={20} alt="date" /> Waktu</td>
                  <td className="w-max">&nbsp;:&nbsp;</td>
                  <td className="w-100">{eventTime}</td>
                </tr>
                <tr>
                  <td className="flex w-max"><Image className="me-3" src="/shape/place.svg" width={20} height={20} alt="date" /> Tempat</td>
                  <td className="w-max align-top">&nbsp;:&nbsp;</td>
                  <td className="w-100">{eventPlace}</td>
                </tr>
              </tbody>
            </table>
            <Link href={joinEventLink} target="_blank" className="text-white font-normal text-sm rounded-md w-fit py-2 px-8 bg-brand-orange hover:bg-[#f08557]">Selengkapnya</Link>
          </div>
          <div className="w-1/2 lg:min-h-screen flex justify-end items-center">
            <Image src={eventPhamplet} height={350} width={350} alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
}
