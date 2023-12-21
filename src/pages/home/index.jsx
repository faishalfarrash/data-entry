import { useState } from "react";

const bob = [
    {
        date: "22-12-2023",
        letter_number: "070/3555-kesbangpol.poldagri",
        sifat: true,
        perihal: "Permohonan",
        dari: "Tadi",
        tujuan: "Kesbang",
    }
]

export default function Home() {
    const [nomorSurat, setNomorSurat] = useState();
    const data = JSON.parse(localStorage.getItem('data') || JSON.stringify([])) || [];
    const [sifatSurat, setSifatSurat] = useState();
    const [perihal, setPerihal] = useState();
    const [dari, setDari] = useState();
    const [tujuan, setTujuan] = useState();

    const handleSubmit = () => {
        const inputData = {
            date: "22-12-2023",
            letter_number: nomorSurat,
            sifat: sifatSurat,
            perihal,
            dari,
            tujuan,
        }

        const updated = [...data, inputData];
        localStorage.setItem("data", JSON.stringify(updated));
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
                            <input className="rounded-lg border-black border p-2" placeholder="Cari..." />
                            <button className="bg-gray-800 rounded-lg p-2 text-white"> TAMBAH </button>
                        </div>
                    </div>
                    <div className="p-2">
                        <table>
                            <tr>
                                <th> NOMOR </th>
                                <th> TANGGAL </th>
                                <th className="border-black"> NOMOR SURAT </th>
                                <th> SIFAT SURAT </th>
                                <th> PERIHAL </th>
                                <th> DARI </th>
                                <th> TUJUAN </th>
                                <th> ACTION </th>
                            </tr>

                            {data.map((item, index) => (
                                <tr>
                                    <td> {index + 1} </td>
                                    <td> {item.date} </td>
                                    <td> {item.letter_number} </td>
                                    <td> {item.sifat == "true" ? "Biasa" : "Rahasia"} </td>
                                    <td> {item.perihal}  </td>
                                    <td> {item.dari} </td>
                                    <td> {item.tujuan} </td>
                                    <td> Edit Delete</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <form className="wrapper2" action="/action_page.php">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div for="nsurat" style={{ width: "120px" }}> Nomor Surat : </div>
                        <input onChange={(res) => setNomorSurat(res.target.value)} type="text" id="nsurat" name="fname" value={nomorSurat} className="input" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div for="lname" style={{ width: "120px" }}> Sifat Surat : </div>
                        <div style={{ display: "flex", gap: "20px" }}>
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
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div for="lname" style={{ width: "120px" }}> Perihal : </div>
                        <input onChange={(res) => setPerihal(res.target.value)} type="text" id="lname" name="lname" value={perihal} className="input" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div for="dari" style={{ width: "120px" }}> Dari : </div>
                        <input onChange={(res) => setDari(res.target.value)} type="text" id="dari" name="dari" value={dari} className="input" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div for="tujuan" style={{ width: "120px" }}> Tujuan : </div>
                        <input onChange={(res) => setTujuan(res.target.value)} type="text" id="tujuan" name="tujuan" value={tujuan} className="input" />
                    </div>
                </form>
                <div>
                    <button className="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}