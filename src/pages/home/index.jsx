export default function Home() {
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
                            <tr>
                                <td> 1 </td>
                                <td> 22-11-2023 </td>
                                <td> 070/3555-kesbangpol.poldagri </td>
                                <td>  </td>
                                <td> Permohonan PKL a.n Ananda Dastra  </td>
                                <td> Kesbangpol </td>
                                <td> Kesbaormas </td>
                                <td> Edit Delete</td>
                            </tr>
                            <tr>
                                <td> 2 </td>
                                <td> 22-11-2023 </td>
                                <td> 070/3555-kesbangpol.poldagri </td>
                                <td>  </td>
                                <td> Permohonan PKL a.n Ananda Dastra  </td>
                                <td> Kesbangpol </td>
                                <td> Kesbaormas </td>
                                <td> Edit Delete</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <form className="wrapper2" action="/action_page.php">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div for="nsurat" style={{ width: "120px" }}> Nomor Surat : </div>
                        <input type="text" id="nsurat" name="fname" value="" className="input" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div for="lname" style={{ width: "120px" }}> Sifat Surat : </div>
                        <div style={{display:"flex", gap:"20px"}}>
                            <div>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="biasa" />
                                <label for="vehicle1"> Biasa </label>
                            </div>
                            <div>
                                <input type="checkbox" id="vehicle2" name="vehicle2" value="rahasia" />
                                <label for="vehicle2"> Rahasia </label>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div for="lname" style={{ width: "120px" }}> Perihal : </div>
                        <input type="text" id="lname" name="lname" value="" className="input" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div for="dari" style={{width:"120px"}}> Dari : </div>
                        <input type="text" id="dari" name="dari" value="" className="input" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div for="tujuan" style={{width:"120px"}}> Tujuan : </div>
                        <input type="text" id="tujuan" name="tujuan" value="" className="input" />
                    </div>
                    <div>
                        <input type="submit" value="Submit" className="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}