import { useState, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import dayjs from "dayjs";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react"

export default function Home() {
    const [nomorSurat, setNomorSurat] = useState();
    const data = JSON.parse(localStorage.getItem('data') || JSON.stringify([])) || [];
    const [tanggalSurat, setTanggalSurat] = useState();
    const [sifatSurat, setSifatSurat] = useState();
    const [perihal, setPerihal] = useState();
    const [dari, setDari] = useState();
    const [tujuan, setTujuan] = useState();
    const [penerima, setPenerima] = useState();
    const [isOpen, setIsOpen] = useState(false)

    const handleSubmit = () => {
        const inputData = {
            date: dayjs().format('DD/MM/YYYY (HH:mm)'),
            tanggal_diterima: tanggalSurat,
            letter_number: nomorSurat,
            sifat: sifatSurat,
            perihal,
            dari,
            tujuan,
            penerima,
            status_surat: true,
        }

        const updated = [...data, inputData];
        localStorage.setItem("data", JSON.stringify(updated));
        setIsOpen(false)
        window.location.reload()
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    function handleEdit(value, idx) {
        data[idx].letter_number = value.letter_number;
        localStorage.setItem("data", JSON.stringify(data));
    }

    function handleDelete(idx) {
        const arr = [...data]
        arr.splice(idx, 1)
        localStorage.setItem("data", JSON.stringify(arr));
        window.location.reload()
    }

    return (
        <div className="wrapper">
            <div className="selection">
                <div>
                    <div className="flex flex-row gap-5 p-5 justify-between">
                        <div className="text-3xl font-bold">
                            <h> INFORMASI SURAT MENYURAT </h>
                        </div>
                        <div className="flex flex-row justify-end gap-5 ">
                            <input className="rounded-lg border-grey border p-2" placeholder="Cari..." />
                            <button className="bg-gray-800 rounded-lg p-2 text-white" onClick={openModal}> Tambah </button>
                        </div>
                    </div>
                    <div className="p-2">
                        <table>
                            <tr>
                                <th> No. </th>
                                <th> Tanggal </th>
                                <th> Tanggal Surat </th>
                                <th> No. Surat </th>
                                <th> Sifat Surat </th>
                                <th> Perihal </th>
                                <th> Dari </th>
                                <th> Tujuan </th>
                                <th> Nama Penerima </th>
                                <th> Status </th>
                                <th> Action </th>
                            </tr>

                            {data.map((item, index) => (
                                <tr>
                                    <td> {index + 1} </td>
                                    <td> {item.date} </td>
                                    <td> {item.tanggal_diterima} </td>
                                    <td> {item.letter_number} </td>
                                    <td> {item.sifat == "true" ? "Biasa" : "Rahasia"} </td>
                                    <td> {item.perihal}  </td>
                                    <td> {item.dari} </td>
                                    <td> {item.tujuan} </td>
                                    <td> {item.penerima} </td>
                                    <td> {item.status_surat == true ? "Diterima" : "Ditolak"} </td>
                                    <td><div className="flex gap-3"><div className="cursor-pointer text-blue-600 hover:underline" onClick={() => handleEdit(item, index)}> Edit </div><div className="cursor-pointer text-blue-600 hover:underline" onClick={() => handleDelete(index)}> Delete </div></div></td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95">
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                        <div>
                                            <form className="wrapper2" action="/action_page.php">
                                                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                                    <div for="penerima" style={{ width: "180px" }}> Tanggal Surat : </div>
                                                    <input onChange={(res) => setTanggalSurat(res.target.value)} type="text" id="tanggal_diterima" name="tanggal_diterima" value={tanggalSurat} className="input" />
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                                    <div for="penerima" style={{ width: "180px" }}> Nama Penerima : </div>
                                                    <input onChange={(res) => setPenerima(res.target.value)} type="text" id="penerima" name="penerima" value={penerima} className="input" />
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                                    <div for="nsurat" style={{ width: "120px" }}> Nomor Surat : </div>
                                                    <input onChange={(res) => setNomorSurat(res.target.value)} type="text" id="nsurat" name="fname" value={nomorSurat} className="input" />
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                                    <div for="lname" style={{ width: "120px" }}> Sifat Surat : </div>
                                                    <div style={{ display: "flex", gap: "50px" }}>
                                                        <div>
                                                            <input type="radio" onChange={(res) => setSifatSurat(res.target.value)} id="biasa" name="fav_language" value="true" />
                                                            <label for="html"> Biasa </label>
                                                        </div>
                                                        <div>
                                                            <input type="radio" onChange={(res) => setSifatSurat(res.target.value)} id="rahasia" name="fav_language" value="false" />
                                                            <label for="css"> Rahasia </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                                    <div for="lname" style={{ width: "120px" }}> Perihal : </div>
                                                    <input onChange={(res) => setPerihal(res.target.value)} type="text" id="lname" name="lname" value={perihal} className="input" />
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                                    <div for="dari" style={{ width: "120px" }}> Dari : </div>
                                                    <input onChange={(res) => setDari(res.target.value)} type="text" id="dari" name="dari" value={dari} className="input" />
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                                    <div for="tujuan" style={{ width: "120px" }}> Tujuan : </div>
                                                    <input onChange={(res) => setTujuan(res.target.value)} type="text" id="tujuan" name="tujuan" value={tujuan} className="input" />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-black-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={handleSubmit}>
                                                Submit
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </div>
    )
}